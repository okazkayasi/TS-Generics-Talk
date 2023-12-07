type Person = { age: number; name: string; alive: boolean }
type Age = Person["age"]

type I1 = Person["age" | "name"]
type I2 = Person[keyof Person]

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
]

type Person2 = (typeof MyArray)[number]

type Age2 = (typeof MyArray)[number]["age"]
type Age3 = Person["age"]

const key = "age"
// @ts-ignore
type Age4 = Person[key]
