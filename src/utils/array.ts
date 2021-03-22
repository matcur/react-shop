export function range(length: number = 0, start: number = 0) {
  const array = []
  let i = start
  while (i < length) {
    array.push(i)
    i++
  }

  return array
}

export function toArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value))
    return value

  return [value]
}