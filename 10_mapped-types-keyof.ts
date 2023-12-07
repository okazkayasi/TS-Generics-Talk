type Point = { x: number; y: number }
type P = keyof Point

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish

type Mapish = { [k: string]: boolean }
type M = keyof Mapish
// JS object keys are coerced to strings -> object["42"] is same as object[42]

type Same<T> = { [P in keyof T]: T[P] }
type ReadOnly<T> = { readonly [P in keyof T]: T[P] }
type Optional<T> = { [P in keyof T]?: T[P] }
type Nullable<T> = { [P in keyof T]: T[P] | null }
type Undefinedable<T> = { [P in keyof T]: T[P] | undefined }

interface User {
  id: UserID
  name: string
  address: {
    street: string
    city: string
    country: string
  }
}

const user: Optional<User> = {
  id: "1",
  address: {
    street: "Main Street",
    city: "London",
    country: "UK",
  },
}

const user2: Undefinedable<User> = {
  id: "1",
  name: undefined,
  address: {
    street: "Main Street",
    city: "London",
    country: "UK",
  },
}
user2.name = "John"

const user3: ReadOnly<Undefinedable<User>> = {
  id: "1",
  name: undefined,
  address: {
    street: "Main Street",
    city: "London",
    country: "UK",
  },
}

function getProperty2<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
