import express from "express";
import { response } from "express";
import { patchUser ,deleteUser, getUsers ,createUser , getUser } from "../Controllers/users.js";
import res from "express";


const router = express.Router();



router.get('/', getUsers );

router.post('/' , createUser);

//find the user by id ----------------
router.get('/:id' , getUser );

router.delete('/:id',deleteUser);

router.patch('/:id' , patchUser);
export default router;