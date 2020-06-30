import { Router } from "express"
import * as userController from "../controllers/UserController"

const userRouter = Router()

userRouter.get("/", (req, res) => { res.send("User API") })
userRouter.get("/signup", userController.signup)
userRouter.get("/login", userController.login)
userRouter.get("/logout", userController.logout)
userRouter.get("/edit", userController.editUser)
userRouter.get("/delete", userController.deleteUser)
userRouter.get("/forgotpassword", userController.forgotPassword)




export { userRouter }