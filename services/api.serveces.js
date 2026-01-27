import https from "https"
import { URL } from "url"
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';


const getWeather = async (city)=>{

    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    
    
    if(!token){
        throw new Error("API does't exist, -t [API_KEY] for saving token")
    }
   
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`)

    url.searchParams.append('q', city)
    url.searchParams.append("appid", token)
    url.searchParams.append("lang", "en")
    url.searchParams.append("units", "metric")
    https.get(url, (response)=>{
        let res = ""
        response.on("data", (chunk)=>{
            res += chunk
        }) 
        res.on('and', ()=>{
            console.log(res);
            
        })
    })

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

export default getWeather