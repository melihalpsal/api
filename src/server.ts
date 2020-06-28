import * as express from "express"
import { Application } from "express"
import { config } from "dotenv"

const app: Application = express()

/**
 * Definition of environment files
 */
config({
    path: "src/config/env/development.env"
})

app.listen(process.env.PORT, () => {
    console.log(`working on ${process.env.PORT}`)
})
