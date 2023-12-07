interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel

declare function createLabel<T extends number | string>(
  idOrName: T
): NameOrId<T>

let aa = createLabel("typescript")
