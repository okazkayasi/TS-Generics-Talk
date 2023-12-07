type TupleOf<N, Acc extends 0[] = []> = Acc["length"] extends N
  ? Acc
  : TupleOf<N, [...Acc, 0]>

type MinusOne<N, Tuple = TupleOf<N>> = Tuple extends [infer Head, ...infer Tail]
  ? Tail["length"]
  : 0
type MinusTwo<N, Tuple = TupleOf<N>> = Tuple extends [
  infer Head,
  infer Sec,
  ...infer Tail
]
  ? Tail["length"]
  : 0
type AddNums<N, M> = [...TupleOf<N>, ...TupleOf<M>]["length"]

type Fibonacci<T> = [T] extends [1]
  ? 1
  : [T] extends [2]
  ? 1
  : AddNums<Fibonacci<MinusOne<T>>, Fibonacci<MinusTwo<T>>>

type ONE = Fibonacci<1>
type TWO = Fibonacci<2>
type THREE = Fibonacci<3>
type FOUR = Fibonacci<4>
type LAST = Fibonacci<17>
