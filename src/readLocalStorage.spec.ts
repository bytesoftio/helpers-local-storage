import { readLocalStorage } from "./readLocalStorage"

describe("readLocalStorage", () => {
  it("reads localStorage", () => {
    localStorage.setItem("foo", JSON.stringify({ding: "dong"}))

    expect(readLocalStorage("foo")).toEqual({ding: "dong"})
  })
})