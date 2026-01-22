import request from "supertest";
import { app } from "../../src/app";

describe("Basic Tests", () => {
  it("Testing health", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toEqual(200);
  });

  it("Testing query", async () => {
    const response = await request(app).get("/query");
    expect(response.status).toEqual(200);
  });
});
