type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = MyReturnType<typeof fn>

// ---------
type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T
declare function stringPromise(): Promise<string>

type t = PromiseReturnType<MyReturnType<typeof stringPromise>>

// ----------
type ArrayType<T> = T extends (infer Item)[] ? Item : T

type t1 = ArrayType<[string, number]>
