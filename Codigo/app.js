import  express  from "express";
const app = express();
const puerto = 3000;

app.listen(puerto, ()=>{
    console.log("El servidor se esta ejecutando. ");
})

app.get("/", (req,rest)=>{
    rest.send("Hola, mundo")

})

app.get("/home", (req,rest)=>{
    rest.send("Estas en el Home")

})