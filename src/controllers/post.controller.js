const Post = require("../models/PostModel");

const PostController = {
  createPost: async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error en la creación de un post");
      console.error(error);

      res.status(500).json({ error: "Error creando el post" });
    }
  },
  getAllPost: async (_, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      console.error("Error obteniendo la lista de posts");
      console.error(error);

      res.status(500).json({ error: "Error obteniendo la lista de posts" });
    }
  },
  getPostByID: async (req, res) => {
    try {
      const post = await Post.findById(req.params._id);

      if (!post) {
        res.status(404).json("Post no encontrado");
      } else {
        res.json(post);
      }
    } catch (error) {
      console.error("Error obteniendo un post por ID");
      console.error(error);

      res
        .status(500)
        .json({ error: "Error obteniendo el post solicitado por ID" });
    }
  },
  getPostByTitle: async (req, res) => {
    const posts = await Post.find({ title: req.params.title });
    res.json(posts);
  },
  updatePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params._id); //obtengo un usuario por su id
      if (!post) {
        throw new Error("Bad Request! post not found");
      }
      //actualizamos el usuario
      const { title, body } = req.body;
      await post.updateOne({ title, body });
      res.send("Actualizado Correctamente");
      console.log(" Post actualizado correctamente", post);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deletePost: async (req, res) => {
    await Post.findByIdAndDelete(req.params._id);
    res.json({ message: "Eliminado Correctamente" });
  },
  getPage: async (req, res) => {
    try {
      let page = Number.parseInt(req.params.page, 10);
      if (Number.isNaN(page)) page = 0;

      const posts = await Post.find()
        .skip(page * 10)
        .limit(10);

      res.json(posts);
    } catch (error) {
      console.error("Error obteniendo una página de posts");
      console.error(error);

      res.status(500).json({ error: "Error obteniendo la página de posts" });
    }
  },
};

module.exports = PostController;
