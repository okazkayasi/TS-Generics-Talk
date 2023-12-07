let exampleVariable = "hello"

// Use the typeof operator to get the type of exampleVariable
type ExampleType = typeof exampleVariable

const user5 = {
  id: 1,
  name: "Alice",
}

// Capture the type of user
type UserType = typeof user5

// This function takes an argument of the same type as user
declare function createUser(user: UserType): void

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f() {
  return { x: 10, y: 3 }
}
// @ts-ignore
type P1 = ReturnType<f>
