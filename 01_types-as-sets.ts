let myStr = "string text"

let mystrLiteral: "sadece" | "bu" | "degerler" = "sadece"
let sadece = "sadece"

myStr = mystrLiteral

// @ts-ignore
mystrLiteral = myStr

// @ts-ignore
mystrLiteral = sadece
