import { isArrayOrObject } from './PlaneObject'

type PlainObject<T = any> = {
  [k in string]: T;
}

function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false
  }

  let res = true

  Object.entries(lhs).forEach(([key, value]) => {
    const rightValue = rhs[key]
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (!isEqual(value, rightValue)) {
        res = false
      }
    }

    if (value !== rightValue) {
      res = false
    }
  })

  return res
}

export default isEqual
