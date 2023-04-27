const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcryptjs");

const app = require("../../app");

const {User} = require("../../models/user");

const {DB_HOST_TEST, PORT} = process.env;

describe("test routes", ()=> {
    let server = null;
    beforeAll(async ()=> {
        server = app.listen(PORT);
        await mongoose.connect(DB_HOST_TEST);
    })

    afterAll(async ()=> {
        server.close();
        await mongoose.connection.close();
    });

    beforeEach(()=> {

    })

    afterEach(async()=> {
        await User.deleteMany({});
    })

    test("test login route", async()=> {
        const password = await bcrypt.hash("123456", 10);

        const newUser = {
            name: "Artem",
            email: "artem@gmail.com",
            password: password
        };

        const user = await User.create(newUser);

        const loginUser = {
            email: "artem@gmail.com",
            password: "123456"
        };

        const res = await request(app).post("/api/auth/login").send(loginUser);
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeTruthy();
        const {token} = await User.findById(user._id);
        expect(res.body.token).toBe(token);
    })

    test("test register route with correct data", async()=> {
        const registerData = {
            name: "Artem",
            email: "artem@gmail.com",
            password: "123456"
        };

        const res = await request(app).post("/api/auth/register").send(registerData);
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe(registerData.name);
        expect(res.body.email).toBe(registerData.email);

        const user = await User.findOne({email: registerData.email});
        expect(user.name).toBe(registerData.name);
    })
})