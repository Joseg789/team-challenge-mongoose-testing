const request = require("supertest");
const app = require("../app.js");

describe("POST /create", () => {
  it("hay que crear un post correctamente", async () => {
    const body = {
      title: "Hola, buenas222",
      body: "Mi primer post333",
    };

    const res = await request(app).post("/create").send(body);

    expect(res.statusCode).toBe(201);
  });
});
