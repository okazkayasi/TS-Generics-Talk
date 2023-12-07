type World = "world"
type Greeting = `hello, ${World}`

type UserId = string
type UserAction = "created" | "deleted"
type LogMessage = `${UserAction} user with id ${UserId}`

//  --------------------
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE"
type Endpoint = `/api/${string}`
type Endpoint2 = "/api" | "admin"

type APIRequest = `${HTTPMethod} ${Endpoint}`
// APIRequest could be "GET /api/somePath", "POST /api/anotherPath", etc.
type APIRequest2 = `${HTTPMethod} ${Endpoint2}`

// -------------------

type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  ): void
}

/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
})

person.on("firstNameChanged", () => {})
// @ts-ignore
person.on("firstName", () => {})
// @ts-ignore
person.on("frstNameChanged", () => {})

// ------------------------
// let's create Capitalize util type using template literals

type Textt = "t" // "Te"

type UpText = Uppercase<Textt>

type Capp<T extends string> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : never

type CapText = Capp<Textt>
