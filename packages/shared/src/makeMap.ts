/**
 * 标记map的值并检查传入的标签是否存在map中
 *
 * 重要提示：此函数调用时必须使用 \/\*#\_\_PURE\_\_\*\/，可以在必要时进行 tree-shake
 *
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => boolean {
  // Record 目的类似于 map:{[ key:string]:boolean}
  const map: Record<string, boolean> = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val]
}
