import { server } from "../../../src";
import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import request from "supertest";

describe("test", () => {
  afterAll((done) => {
    server.close(done)
  })


  it("scenario 1", async() => {
    let mock = new MockAdapter(axios);
    mock.onGet().reply(200, {});

    await request(server).get("/?page=1");

    expect(mock.history.get[0].url).toBe("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  })

  it("scenario 2", async() => {
    let mock = new MockAdapter(axios);
    mock.onGet().reply(200, {});

    await request(server).get("/?page=2");

    expect(mock.history.get[0].url).toBe("https://pokeapi.co/api/v2/pokemon?offset=21&limit=20")
  })
})
