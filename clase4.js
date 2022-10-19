/* const fs = require(`fs`);
let dataRecuperada;
try{
fs.writeFileSync(`./data.txt`, `INICIO!!\n`);
fs.appendFileSync(`./data.txt`, `OtraCosa1!!\n`);
dadadasdasd()
fs.appendFileSync(`./data.txt`, `OtraCosa2!!\n`);

dataRecuperada= fs.readFileSync(`./data.txt`, `utf-8` );
}catch(e){
    console.log(e)
}

console.log(dataRecuperada)
console.log(`2`)  */

/* const fecha = new Date().toLocaleDateString()

fs.writeFileSync(`./hora.txt`, `fecha()`);
fs.readFileSync(`./hora.txt`, `utf-8` ); */

/* try {
  const date = new Date();

  fs.writeFileSync("./fyh.txt", date.toString());

  const file = fs.readFileSync("./fyh.txt", "utf-8");

  console.log(file);
} catch (err) {
  console.log(err);
} */



const fs = require(`fs`);

console.log("1")
fs.writeFile(`./data.txt`, `INICIO!!\n`, (err)=>{
    if(err){
        console.log(`no pude grabar`)
    }else{
        console.log("Termine de grabar archivo");
    }    
});

console.log("2");
/* fs.appendFile(`./data.txt`, `OtraCosa1!!\n`);
dadadasdasd()
fs.appendFile(`./data.txt`, `OtraCosa2!!\n`);

dataRecuperada= fs.readFile(`./data.txt`, `utf-8` ); */


/* console.log(dataRecuperada)
console.log(`2`)  */
