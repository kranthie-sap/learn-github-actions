"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentWeatherByCityName = void 0;
const dotenv = __importStar(require("dotenv"));
const openweathermap_ts_1 = __importDefault(require("openweathermap-ts"));
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
async function getCurrentWeatherByCityName(countryCode, state, cityName) {
    // Configure dotenv
    dotenv.config();
    // Create an instance of the Open Weather Map API
    const openWeather = new openweathermap_ts_1.default({
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
            throw new Error(weather.message);
        }
        return {
            temperature: weather.main.temp,
            minimumTemperature: weather.main.temp_min,
            maximumTemperature: weather.main.temp_max
        };
    }
    catch (error) {
        throw new Error(`An error occurred while fetching the weather information. Details: ${error.message}`);
    }
}
exports.getCurrentWeatherByCityName = getCurrentWeatherByCityName;
