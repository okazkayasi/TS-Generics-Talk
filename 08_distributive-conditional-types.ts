// Let's define a simple type union
type StringOrNumber = string | number

const a: StringOrNumber = "a"

const two: StringOrNumber = 2

type ToArr1<T> = T[]

type StrNumArr = ToArr1<StringOrNumber>

const arrr0: StrNumArr = ["a", 2]

// Now we'll create a distributive conditional type
type ToArray<Type> = Type extends unknown ? Type[] : never

// When we apply ToArray to our union type, it will distribute over the union members
type StringOrNumberArray = ToArray<StringOrNumber>

// @ts-ignore
const arr: StringOrNumberArray = ["a", 2]

// @ts-ignore
const arr1: StringOrNumberArray = ["a", "b", "c"]

// @ts-ignore
const arr2: StringOrNumberArray = [1, 2, 3]

type ToArrayNoDistribute<Type> = [Type] extends [unknown] ? Type[] : never

// @ts-ignore
const arr3: ToArrayNoDistribute<StringOrNumber> = ["a", 2]
