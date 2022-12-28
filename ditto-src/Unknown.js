/**
 * @param {unknown} dunno
 * @returns {string}
 */
export function typeof_impl(dunno) {
  return typeof dunno;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: string) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_string_impl(dunno, Just, Nothing) {
  return typeof dunno === "string" ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: number) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_int_impl(dunno, Just, Nothing) {
  return typeof dunno === "number" && dunno % 1 === 0 ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: number) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_float_impl(dunno, Just, Nothing) {
  return typeof dunno === "number" ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: boolean) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_bool_impl(dunno, Just, Nothing) {
  return typeof dunno === "boolean" ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: readonly unknown[]) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_array_impl(dunno, Just, Nothing) {
  return Array.isArray(dunno) ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: Readonly<Partial<Record<string, unknown>>>) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_object_impl(dunno, Just, Nothing) {
  return typeof dunno === "object" && !Array.isArray(dunno) && dunno !== null
    ? Just(
        // @ts-ignore
        dunno
      )
    : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: null) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_null_impl(dunno, Just, Nothing) {
  return dunno === null ? Just(dunno) : Nothing;
}

/**
 * @template Maybe
 * @param {unknown} dunno
 * @param {(value: undefined) => Maybe} Just
 * @param {Maybe} Nothing
 * @returns {Maybe}
 */
export function to_undefined_impl(dunno, Just, Nothing) {
  return dunno === undefined ? Just(dunno) : Nothing;
}
