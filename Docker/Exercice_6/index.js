const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter filename here:" , filename=>{
    readline.question("Enter some content:" ,text =>{
        fs.writeFile(`${filename}.txt`,text,err=>{
            if (err) throw err
            console.log("File was create!")
            readline.close()
        })
    })
})