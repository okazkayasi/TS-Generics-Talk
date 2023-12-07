// This will evaluate to true since 'a' is a string literal, and string literals are assignable to the string type.
type W = "a" extends string ? true : false

// This will also evaluate to true. Union types 'a' or 'b' are both string literals, and therefore are assignable to the string type.
type X = "a" | "b" extends string ? true : false

// This will evaluate to true since the string literal 'a' is the same type as 'a', meaning it is assignable to itself.
type Y = "a" extends "a" ? true : false

// This will evaluate to true. The string type is assignable to the string type, as it is the same type.
type Z = string extends string ? true : false

interface Animal {
  live(): void
}
interface Dog extends Animal {
  woof(): void
}

type Example1 = Dog extends Animal ? number : string
// ----------
