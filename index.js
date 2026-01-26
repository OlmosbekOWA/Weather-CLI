
import getArgs from "./helpers/args.js"
import { printError, printSuccess, printHelp } from "./services/log.serveces.js"
import { saveKeyValue  } from "./services/storage.service.js"

const saveToken = async(token)=>{
    try{
        await saveKeyValue("token", token)
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
    
    
    

}

startCLI()