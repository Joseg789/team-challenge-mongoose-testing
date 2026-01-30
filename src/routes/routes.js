const express = require("express");

const PostController = require("../controllers/post.controller");
const router = express.Router();

//crear un post

router.post("/create", PostController.createPost);

//obtener todos los post

router.get("/", PostController.getAllPost);

//obtener un post por id

router.get("/id/:_id", PostController.getPostByID);

//obtener un post por titulo

router.get("/title/:title", PostController.getPostByTitle);

//PUT /id/:_id:
router.put("/id/:_id", PostController.updatePost);

//eliminar

router.delete("/id/:_id", PostController.deletePost);

//paginacion

router.get("/postsWithPagination/:page", PostController.getPage);

module.exports = router;
