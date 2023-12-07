let valueAny: any

valueAny = "Hello" // No error, as `any` type can be anything
console.log(valueAny.toUpperCase()) // Works fine

valueAny = 42 // Again, no error
console.log(valueAny.toUpperCase()) // Runtime error! But TypeScript won't complain during compilation

// ------------------------------------------------------------

let valueUnknown: unknown

// @ts-ignore
valueUnknown = "Hello"

// @ts-ignore
console.log(valueUnknown.toUpperCase())

if (typeof valueUnknown === "string") {
  // @ts-ignore
  console.log(valueUnknown.toUpperCase()) // Works fine, within type guard
}

// @ts-ignore
valueUnknown = 42

// Still need to use type guard for accessing methods
// TypeScript error without type guard
if (typeof valueUnknown === "number") {
  // @ts-ignore
  console.log(valueUnknown.toFixed(2)) // Works within type guard
}
