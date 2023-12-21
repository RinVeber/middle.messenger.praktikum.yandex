import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import HTTPTransport from './Fetch';
import { DataType } from './Fetch';
import { expect } from 'chai';

declare const global: any;

describe('Fetch test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport<DataType>;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    global.XMLHttpRequest = xhr as SinonFakeXMLHttpRequestStatic;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport('/sign-up');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  it('Метод get()', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('GET');
  });

  it('Метод post() ', () => {
    instance.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('POST');
  });
  it('Метод put() ', () => {
    instance.put('/user');

    const [request] = requests;

    expect(request.method).to.eq('PUT');
  });

  it('Метод patch()', () => {
    instance.patch('/user');

    const [request] = requests;

    expect(request.method).to.eq('PATCH');
  });

  it('Метод delete() ', () => {
    instance.delete('/user');

    const [request] = requests;

    expect(request.method).to.eq('DELETE');
  });
});
