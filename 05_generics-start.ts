declare function myFunc<T extends string>(arg: T): T[]

let hey = "hey"

const result = myFunc(hey)
//

const result1 = myFunc("hello")
//

// @ts-ignore
const result2 = myFunc(42)
// @ts-ignore
const result3 = myFunc(["hello", "world"])
// @ts-ignore
const result4 = myFunc([])
// @ts-ignore
const result5 = myFunc([42])
