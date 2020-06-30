import { Request, Response } from "express"

// edit user
const editUser = (req: Request, res: Response) => {
    res.send("editUser")
}
// delete user
const deleteUser = (req: Request, res: Response) => {
    res.send("deleteUser")
}
// signup
const signup = (req: Request, res: Response) => {
    res.send("signupUser")
}
// login
const login = (req: Request, res: Response) => {
    res.send("loginUser")
}
// logout
const logout = (req: Request, res: Response) => {
    res.send("logoutUser")
}

// forgotPassword
const forgotPassword = (req: Request, res: Response) => {
    res.send("forgotPassword")
}

export { signup, editUser, deleteUser, login, logout, forgotPassword }