const express = require("express")
const dotenv = require("dotenv")
const userRoutes = require("./routes/user.route")
dotenv.config()
const app = express()

app.use(express.json())
app.use("/api/auth",userRoutes)




app.listen(process.env.PORT,() =>{
    console.log(`Server listening on port ${process.env.PORT}`)
})