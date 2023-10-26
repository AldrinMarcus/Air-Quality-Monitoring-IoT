const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/update-air-quality', (req, res) => {
    // Handle incoming data from IoT devices here
    const airQualityData = req.body;
    console.log('Received Air Quality Data:', airQualityData);
    // You can save this data to a database or process it further.

    res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
