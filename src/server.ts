import express, { Application } from "express"
import { config } from "dotenv"


import { router } from "./routes"

const app: Application = express()



/**
 * Definition of environment files
 */
config({
    path: "src/config/env/development.env"
})

/**
 * Define routers
 */

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`working on ${process.env.PORT}`)
})




