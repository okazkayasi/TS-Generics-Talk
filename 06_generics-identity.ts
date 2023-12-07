function identity<Type>(arg: Type): Type {
  return arg
}

function loggingIdentity<Type>(arg: Type): Type {
  // @ts-ignore
  console.log(arg.length)
  return arg
}
