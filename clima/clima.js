const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f1c7addb8babfdb0905ca98b731bebcb&units=metric`)
    return resp.data.main.temp;
}

const getClima2 = async(dir) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=f1c7addb8babfdb0905ca98b731bebcb&units=metric`)
    
    return resp.data.main.temp;
}


module.exports = {
    getClima,
    getClima2
}