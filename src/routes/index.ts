import { userRouter } from "./UserRouter"
import { Router } from "express"
const router = Router()


router.use("/api/v1/users", userRouter)


export { router }