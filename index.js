
import getArgs from "./helpers/args.js"
import { printError, printSuccess, printHelp } from "./services/log.serveces.js"
import { saveKeyValue, TOKEN_DICTIONARY  } from "./services/storage.service.js"
import getWeather from "./services/api.serveces.js"

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

const startCLI = ()=>{
    const args = getArgs(process.argv)
    
    // printSuccess("OK")
    // printError("no OK")
    
    if(args.h){
        printHelp()
        
    }
    if(args.s){

    }
    if(args.t){
        return saveToken( args.t)
    }

    
    getWeather("uzbekistan")
    

}

startCLI()