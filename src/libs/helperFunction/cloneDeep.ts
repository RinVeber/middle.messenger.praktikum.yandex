import { PlainObject, isPlainObject } from './PlaneObject';

function cloneArray<T>(arr: T[]): T[] {
  const res = [] as T[];

  arr.forEach((value) => {
    if (Array.isArray(value)) {
      res.push(...cloneArray(value));
    } else if (isPlainObject(value)) {
      res.push(cloneObj(value) as T);
    } else {
      res.push(value);
    }
  });

  return res;
}

function cloneObj(obj: PlainObject) {
  const res = {} as PlainObject;

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      res[key] = cloneArray(value);
    } else if (isPlainObject(value)) {
      res[key] = cloneObj(value);
    } else {
      res[key] = value;
    }
  });

  return res;
}

type CloneObject = PlainObject | any[];

function cloneDeep<T extends CloneObject = PlainObject>(obj: T): T {
  if (Array.isArray(obj)) {
    return cloneArray(obj) as T;
  }

  return cloneObj(obj) as T;
}

export default cloneDeep;
