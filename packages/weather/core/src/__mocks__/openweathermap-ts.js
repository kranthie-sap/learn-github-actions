const OpenWeatherMap = jest.fn(() => {
    return {
        getCurrentWeatherByCityName: jest.fn((location) => {
            if (location.cityName === 'invalidCityName') {
                return {
                    cod: 404,
                    message: 'city not found'
                };
            }
            return {
                cod: 200,
                main: {
                    temp: 72,
                    temp_min: 60,
                    temp_max: 80
                }
            };
        })
    };
});

module.exports = OpenWeatherMap;
