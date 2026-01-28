
import getArgs from "./helpers/args.js"
import { printError, printSuccess, printHelp } from "./services/log.serveces.js"
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY  } from "./services/storage.service.js"
import {getWeather} from "./services/api.serveces.js"
import printWeather from "./services/weather.print.js";


const saveToken = async(token)=>{
    if(token.length == 0){
        printError("Token doesn't exist")
        return false
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token was save")
    }catch(error){

    }
}

const saveCity = async (city) =>{
    if(city.length == 0){
        printError("City doesn't exist")
        return false
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess("City was save")
    }catch(error){

    }
}

const startCLI = ()=>{
    const args = getArgs(process.argv)
    
    // printSuccess("OK")
    // printError("no OK")

    const getForcast = async () =>{

        
        try{
            const city = process.env.city ?? (await getKeyValue(TOKEN_DICTIONARY.city))
            const response = await getWeather(city);
            printWeather(response.data);
            
        }catch(error){
            if(error?.response?.status == 404){
                printError("CITY not found")
            }else if(error?.response?.status == 401){
                printError("Invalid was token")
            }else{
                printError(error.massage)
            }
        }


    }
    
    if(args.h){
        return printHelp()
        
    }
    if(args.s){
        return saveCity(args.s)

    }
    if(args.t){
        return saveToken( args.t)
    }

    return getForcast()

    
    
    
    

}

startCLI()