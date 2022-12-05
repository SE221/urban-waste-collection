const request = require("supertest");
const express = require("express");
const router = require("../routes/usersRoute");
const jwt = require("jsonwebtoken");
const { response } = require("../..");
const { default: mongoose } = require("mongoose");

const app = require("../../");
app.use("/api", router);

const userOne = {
  email: "binguyen@gmail.com",
  password: "12345678",
};

let token = "";

beforeEach(async () => {
  const response = await request(app).post("/api/login").send({
    email: userOne.email,
    password: userOne.password,
  });

  // we'll need the token for future requests
  token = response.body.accessToken;
});

afterEach(async () => {
  const response = await request
    .agent(app)
    .delete("/api/logout")
    .set("Authorization", `Bearer ${token}`);
});

describe("GET /api/workers", () => {
  test("It should return all workers", async () => {
    const response = await request(app).get("/api/workers");
    const workers = response.body;
    expect(response.statusCode).toBe(200);
    expect(workers).toHaveLength(99);
  });
});

describe("GET /api/working", () => {
  test("It should return all workers who are working when getting the right token", async () => {
    const response = await request(app)
      .get("/api/working")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  test("It should return 403 when given wrong token", async () => {
    const response = await request(app)
      .get("/api/working")
      .set("Authorization", `Bearer ${"adfkljadsfl"}`);

    expect(response.statusCode).toBe(403);
  });

  test("It should return 401 when missing token", async () => {
    const response = await request(app)
      .get("/api/working")
      .set("Authorization", `Bearer ${""}`);

    expect(response.statusCode).toBe(401);
  });
});

describe("GET /api/users/:id", () => {
  test("It should return all workers", async () => {
    const response = await request(app).get(`/api/users/${""}`);
    const workers = response.body;
    expect(response.statusCode).toBe(200);
    expect(workers).toHaveLength(99);
  });
});
