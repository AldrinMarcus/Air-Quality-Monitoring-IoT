const airQualityDataDiv = document.getElementById('airQualityData');

function updateAirQualityData(data) {
    airQualityDataDiv.innerHTML = `
        <h2>Current Air Quality Data</h2>
        <p>Location: ${data.location}</p>
        <p>PM2.5: ${data.pm25} µg/m³</p>
        <p>PM10: ${data.pm10} µg/m³</p>
        <p>CO2: ${data.co2} ppm</p>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Humidity: ${data.humidity} %</p>
    `;
}

// Simulate real-time data updates (replace this with actual data retrieval)
setInterval(() => {
    const mockData = {
        location: "Sample Location",
        pm25: Math.random() * 100,
        pm10: Math.random() * 100,
        co2: Math.random() * 1000,
        temperature: Math.random() * 30,
        humidity: Math.random() * 100,
    };

    updateAirQualityData(mockData);
}, 5000); // Update data every 5 seconds
