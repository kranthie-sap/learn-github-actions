import * as dotenv from 'dotenv';
import OpenWeatherMap from 'openweathermap-ts';
import { CountryCode } from 'openweathermap-ts/dist/types/CountryCode';

export interface WeatherInfo {
    temperature: number;
    minimumTemperature: number;
    maximumTemperature: number;
}

/**
 * Returns the current weather for the provided country, state and city.
 *
 * @export
 * @param {CountryCode} countryCode
 * @param {string} state
 * @param {string} cityName
 * @return {*}  {Promise<WeatherInfo>}
 *
 * Test Example:
 * (async () => {
 *      try {
 *          const cityName = 'LosAngeles';
 *          const weather = await getCurrentWeatherByCityName('US', 'California', cityName);
 *          console.log(`Weather for ${cityName}: ${JSON.stringify(weather)}`);
 *      } catch (error) {
 *          console.error(error.message);
 *      }
 *  })();
 */
export async function getCurrentWeatherByCityName(
    countryCode: CountryCode,
    state: string,
    cityName: string
): Promise<WeatherInfo> {
    // Configure dotenv
    dotenv.config();

    // Create an instance of the Open Weather Map API
    const openWeather = new OpenWeatherMap({
        apiKey: process.env.API_KEY || ''
    });

    try {
        // Get current weather information for the provided location
        const weather = await openWeather.getCurrentWeatherByCityName({
            countryCode,
            state,
            cityName
        });
        if (weather.cod !== 200) {
            throw new Error((weather as any).message);
        }
        return {
            temperature: weather.main.temp,
            minimumTemperature: weather.main.temp_min,
            maximumTemperature: weather.main.temp_max
        };
    } catch (error) {
        throw new Error(`An error occurred while fetching the weather information. Details: ${error.message}`);
    }
}
