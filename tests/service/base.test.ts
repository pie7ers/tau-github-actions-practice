import { app } from "../../src/app";
import type { Server } from "http";

let server: Server;
const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;

beforeAll((done) => {
  server = app.listen(PORT, done);
});

afterAll((done) => {
  server.close(done);
});

describe("E2E /health", () => {
  it("returns 200 and status ok", async () => {
    const response = await fetch(`${BASE_URL}/health`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ status: "ok" });
  });
});

describe("E2E /query", () => {
  it("returns 200 and status ok", async () => {
    const response = await fetch(`${BASE_URL}/query`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "ok",
      endpoint: "query",
      test: true,
    });
  });
});
