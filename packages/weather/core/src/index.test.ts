import { getCurrentWeatherByCityName } from '.';

afterEach(() => {
    jest.clearAllMocks();
});

test('test getCurrentWeatherByCityName with valid location', async () => {
    expect(await getCurrentWeatherByCityName('US', 'California', 'Los Angeles')).toStrictEqual({
        temperature: 72,
        minimumTemperature: 60,
        maximumTemperature: 80
    });
});

test('test getCurrentWeatherByCityName with invalid location', async () => {
    await expect(getCurrentWeatherByCityName('US', 'California', 'invalidCityName')).rejects.toThrow(/city not found/);
});
