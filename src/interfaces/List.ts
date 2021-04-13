interface List<T> {
  info: {
    count: number
    pages: number
    next: null | string
    prev: null | string
  },
  results: T[]
}

export { List }
