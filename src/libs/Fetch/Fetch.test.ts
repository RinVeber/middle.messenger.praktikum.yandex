import { describe } from 'mocha';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import HTTPTransport from './Fetch';

describe('HTTP Trnasport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  const instance = new HTTPTransport('http://localhost:5173');
  const requests: SinonFakeXMLHttpRequest[] = [];

  const data = {
    a: 'test',
  };
  const dataQuery = '?a=test';

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

       // @ts-ignore

    global.XMLHttpRequest = xhr as any;


    xhr.onCreate = function (req) {
      requests.push(req);
    };
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe('method get()', () => {
    it('should be called with GET method', () => {
      instance.get('/');

      expect(requests[0].method).to.eq('GET');
    });

    it('should be called with body', () => {
      instance.get('/', {
        data,
      });

      expect(requests[0].url).includes(dataQuery);
    });

    it('should be called with array', () => {
      instance.get('/', {
        data: {
          arr: [1, 2, 3],
        },
      });

      expect(requests[0].url).includes('arr[0]=1&arr[1]=2&arr[2]=3');
    });
  });

  describe('method post()', () => {
    it('should be called with POST method', () => {
      instance.post('/');

      expect(requests[0].method).to.eq('POST');
    });

    it('should be called with query params', () => {
      instance.delete('/', {
        data,
      });

      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    });
  });

  describe('method delete()', () => {
    it('should be called with DELETE method', () => {
      instance.delete('/');

      expect(requests[0].method).to.eq('DELETE');
    });

    it('should be called with body', () => {
      instance.delete('/', {
        data,
      });

      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    });
  });

  describe('method patch()', () => {
    it('should be called with PATCH method', () => {
      instance.patch('/');

      expect(requests[0].method).to.eq('PATCH');
    });

    it('should be called with body', () => {
      instance.patch('/', {
        data,
      });

      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    });
  });

  describe('method put()', () => {
    it('should be called with PUT method', () => {
      instance.put('/');

      expect(requests[0].method).to.eq('PUT');
    });

    it('should be called with body', () => {
      instance.put('/', {
        data,
      });

      expect(requests[0].requestBody).to.eq(JSON.stringify(data));
    });
  });
});