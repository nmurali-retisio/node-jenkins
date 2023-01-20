const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
    it("should say Hello World", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        console.log("Res: ", res.body)
        expect(res.body.message).toBe("xyz");
    });
});