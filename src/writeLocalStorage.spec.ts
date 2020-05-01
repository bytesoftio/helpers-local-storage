import { writeLocalStorage } from "./writeLocalStorage"

describe("writeLocalStorage", () => {
  it("writes localStorage", () => {
    writeLocalStorage("foo", {ding: "dong"})

    expect(JSON.parse(localStorage.getItem("foo")!)).toEqual({ding: "dong"})
  })
})