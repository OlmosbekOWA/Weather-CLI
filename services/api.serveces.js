
import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';



const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case "01":
            return "☀️"
        case "02":
            return "⛅"
        case "03":
            return "☁️"
        case "04":
            return "☁️"
        case "09":
            return "🌧️"
        case "10":
            return "🌦️"
        case "11":
            return "⛈️"
        case "13":
            return "❄️"
        case "50":
            return "🌫️"
        default:
            return "🌈"
    }
};



const getWeather = async (city)=>{

    

    const token = process.env.token ?? await getKeyValue(TOKEN_DICTIONARY.token)
    
    
    if(!token){
        throw new Error("API does't exist, -t [API_KEY] for saving token")
    }

    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params:{
            q: city,
            appid: token,
            lang: "en",
            units:"metric"

        }
    })
   
    

    return response

   
    // const url = new URL(`https://api.openweathermap.org/data/2.5/weather`)

    // url.searchParams.append('q', city)
    // url.searchParams.append("appid", token)
    // url.searchParams.append("lang", "en")
    // url.searchParams.append("units", "metric")
    // https.get(url, (response)=>{
    //     let res = ""
    //     response.on("data", (chunk)=>{
    //         res += chunk
    //     }) 
    //     res.on('and', ()=>{
    //         console.log(res);
            
    //     })
    // })

    // https.get(url, (response) => {
    //     let res = ""
    //     response.on("data", (chunk) => {
    //         res += chunk  // ✅ barcha chunklarni yig‘amiz
    //     })
    //     response.on("end", () => {   // ✅ oxirida ishlaydi
    //         try {
    //             const data = JSON.parse(res)
    //             console.log(data)
    //         } catch (error) {
    //             console.error("Error parsing JSON:", error.message)
    //         }
    //     })
    // }).on("error", (err) => {
    //     console.error("Request error:", err.message)
    // })
}

export  {getWeather, getIcon}