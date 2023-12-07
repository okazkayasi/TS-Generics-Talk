type UserID = string

interface User12 {
  id: UserID
  name: string
}

type StringOrNumber1 = string | number

type Employee = User12 & { employeeId: number }

const emp: Employee = {
  id: "asf",
  name: "asd",
  employeeId: 2,
}

type Response1<T> = {
  data: T
  error: string
}
