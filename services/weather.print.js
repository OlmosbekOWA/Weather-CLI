import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.serveces.js";

const printWeather = (data) => {
    const icon = getIcon(data.weather[0].icon);

    console.log(
        dedent`
        ${chalk.bgYellow.black(" WEATHER INFO ")}

        ${chalk.bold("City:")} ${data.name}
        ${chalk.bold("Weather:")} ${icon}  ${data.weather[0].description}

        ${chalk.bold("Temperature:")} ${data.main.temp} °C
        ${chalk.bold("Feels like:")} ${data.main.feels_like} °C

        ${chalk.bold("Humidity:")} ${data.main.humidity} %
        ${chalk.bold("Pressure:")} ${data.main.pressure} hPa
        ${chalk.bold("Wind speed:")} ${data.wind.speed} m/s
        `
    );
};

export default printWeather;
