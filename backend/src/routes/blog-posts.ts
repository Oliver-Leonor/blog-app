import express from "express";
import * as BlogPosts from "../controllers/blog-posts";
import { featuredImageUpload } from "../middlewares/image-upload";

const router = express.Router();

router.get('/', BlogPosts.getBlogPosts);

router.post('/', featuredImageUpload.single('featuredImage'), BlogPosts.createBlogPost);

export default router;