const express = require('express');
const data = require('./item_list.json');

const app = express();

app.get('/api/products/list', (req, res) => {
    try {
        const size = parseInt(req.query.size);
        const offset = parseInt(req.query.page);

        var result = [];

        for (let i = offset; i < offset + size; i++) {
            result.push({
                "id": data[i].id,
                "item_name": data[i].item_name,
                "item_image": data[i].item_image,
                "item_price": data[i].item_price,
            });
        }

        res.status(200).json(result);
    } catch (error) {
        res.json(error);
    }
});

app.get('/api/products/:id', (req, res) => {
    try {

        const productId = req.params.id;

        const productDetails = data.filter((item) => item.id == productId);

        res.status(200).json(productDetails);
    } catch (error) {
        res.json(error);
    }
})

app.listen(3000, () => {
    console.log("The app is running");
})
