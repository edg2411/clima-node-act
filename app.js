const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// const encodedUrl = encodeURI(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `${coords.direccion} tiene una temperatura de ${temp}`;
    } catch (error) {
        return `no se pudo determinar el clima de ${direccion}`;
    }

}

const getInfo2 = async(direccion) => {

    try {
        const temp = await clima.getClima2(direccion);
        return `${direccion} tiene una temperatura de ${temp}`;
    } catch (error) {
        return `no se pudo determinar el clima de ${direccion}`;
    }

}

getInfo2(argv.direccion)
    .then(console.log)
    .catch(console.log);