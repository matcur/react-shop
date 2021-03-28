export function range(start: number, last: number) {
  if (start > last)
    return []

  const array = []
  let i = start
  while (i < last) {
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