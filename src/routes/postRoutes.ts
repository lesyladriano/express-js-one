import { Router } from "express";
import PostController from "../controller/PostController";

const router = Router ();
// const postController = new PostController();

router.post ("/post",PostController.postPost); 
router.get("/get", PostController.getPost);
router.get("/get/:id", PostController.getPostById);
router.put("/put/:id", PostController.updatePost);
router.delete("/put/:id", PostController.deletePost);


export default router;