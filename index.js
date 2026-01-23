import getArgs from "./helpers/args.js"
import { printError, printSuccess, printHelp } from "./services/log.serveces.js"
const startCLI = ()=>{
    const args = getArgs(process.argv)
    
    printError("no OK")
    printSuccess("OK")
    
    if(args.h){
        printHelp()
        
    }
    if(args.s){

    }
    if(args.t){

    }
    console.log(args);
    
    

}

startCLI()