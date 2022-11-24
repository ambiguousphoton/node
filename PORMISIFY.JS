const { readFile,writeFile } = require("fs")
const util = require("util")
const readFilePromise =util.promisify(readFile)
const writeFilePromise =util.promisify(writeFile)
console.log("jai")
const start = async()=>{
    try{
        console.log("shri")
        const first = await readFilePromise("./content/second.txt","utf8")
        const second = await readFilePromise('./content/first.txt','utf8')
        await writeFilePromise("./content/om.txt",`this is awesome: ${first} ${second}`)
        console.log(first, second)
    }catch (error){
        console.log("ram")
        console.log(error)
    }
}



