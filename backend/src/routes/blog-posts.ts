import express from "express";
import * as BlogPosts from "../controllers/blog-posts";

const router = express.Router();

router.get('/', BlogPosts.getBlogPosts);

router.post('/', BlogPosts.createBlogPost);

export default router;