type Shape = "circle" | "square" | "triangle"

function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return Math.random() /* circle area */
    case "square":
      return 3 /* square area */
    case "triangle":
      return 4 /* triangle area */
    default:
      // TypeScript ensures this case is never reached
      const exhaustiveCheck: never = shape
      return exhaustiveCheck
  }
}
