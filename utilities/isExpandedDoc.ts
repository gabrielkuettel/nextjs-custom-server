/* eslint-disable @typescript-eslint/no-explicit-any */
// https://github.com/payloadcms/payload/discussions/1563

export function isExpandedDoc<T>(doc: any): doc is T {
  if (typeof doc === 'string') return false

  return true
}
