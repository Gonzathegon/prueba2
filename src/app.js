const express = require('express')
const cors = require('cors')
require('dotenv').config()

const supabase= require(`./config/database.js`)

const clientesRoutes = require('./routes/clientesRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', clientesRoutes)

app.get('/', (req, res) => {
  try{
   res.json({ mensaje: 'Backend del parcial funcionando' })}

  catch(error){"no esta entrando en la api"}
})

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)

  try{
    const {data,error}= await supabase.from(`clientes`).select(`*`)


    console.log(`conecto con la base de datos de supa con exito: ` ,data)

  }catch(error){console.log(`error al conectarse con la BDD`, error)}
  
})

module.exports = app
