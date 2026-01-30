const PostController = require("../controllers/post.controller.js");
const request = require("supertest");
const app = require("../app.js");

//Test Post create

describe("POST /create", () => {
  it("hay que crear un post correctamente", async () => {
    const res = (await request(app).post("/create")).send({
      title: "Hola, buenas",
      body: "Mi primer post",
    });

    expect(res.statusCode).toBe(201);
  });
});
