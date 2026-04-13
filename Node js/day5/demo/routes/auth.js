import  express  from 'express';
import {register,login,profile} from "../controllers/userAuth.js"
import {auth} from "../middleware/auth.js";
import {authorize} from "../middleware/authorization.js"
const router=express.Router();
// router.use(auth)
router.post("/register",register)
router.post("/login",login)
router.get("/profile",auth ,authorize("admin"),profile)

export default router
