type StringIndexed = Record<string, any>;

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

function stringifyPrimitive(key: string | number | boolean, value: any): string {
  return `${key}=${value.toString()}`;
}

function stringifyValue(key: string, el: any): string {
  if (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean') {
    return stringifyPrimitive(key, el);
  }

  if (isPlainObject(el)) {

    return stringifyObject(key, el);
  }

  if (Array.isArray(el)) {
    return stringifyArray(key, el);
  }

  return '';
}

function stringifyArray(prevKey: string, value: any[]): string {
  const res = [] as string[];
  value.forEach((el, index) => {
    const newKey = prevKey ? `${prevKey}[${index}]` : `[${index}]`;

    res.push(stringifyValue(newKey, el));
  });
  return res.join('&');
}

// eslint-disable-next-line @typescript-eslint/default-param-last
function stringifyObject(prevKey: string = '', obj: PlainObject): string {
  const res = [] as string[];

  Object.entries(obj).forEach(([key, value]) => {
    const newKey = prevKey ? `${prevKey}[${key}]` : key;

    res.push(stringifyValue(newKey, value));
  });

  return res.join('&');
}

function queryStringify(data: StringIndexed): string | never {
  return stringifyObject('', data);
}

export default queryStringify;
