import HTTPTransport from '../libs/Fetch/Fetch'

abstract class BaseAPI {
  protected http: HTTPTransport<any>

  constructor(path: string) {
    this.http = new HTTPTransport(path)
  }
}

export default BaseAPI
