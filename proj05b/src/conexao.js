import mongoose from "mongoose";

const endereco = "mongodb+srv://admin:aYwo6Mjp4U5kGxjD@proj05.45uo18f.mongodb.net/?retryWrites=true&w=majority"

const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

await mongoose.connect(endereco, configuracao)
console.log("CONECTADO COM O BANCO DE DADOS!")

mongoose.Promise = global.Promise
