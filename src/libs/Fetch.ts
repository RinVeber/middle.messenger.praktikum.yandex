type Options = {
    timeout?: number;
    data?: Document | XMLHttpRequestBodyInit | null | undefined;
    headers?: Record<string, string>;
    method?: string;
  };
  
  const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  } as const;
  
  /**
      * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
      * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
      * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
  */
  
  function queryStringify(data: unknown): string {
    if (typeof data !== 'object') {
      throw new Error('Это не объект');
    }
  
    let str: string = '';
  
    if (typeof data !== 'object') {
      str = Object.entries(data)
        .filter(([, val]) => val != null && val != undefined)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');
    }
  
    return str ? `?${str}` : str;
  }
  
  type HTTPMethod = (url: string, options?: Options) => Promise<unknown>
  class HTTPTransport {
    get = (url: string, options: Options = {}) => {
      let requestUrl = url;
      const { data, ...restOptions } = options;
  
      if (options.method === METHODS.GET && data) {
        const params = queryStringify(data);
        requestUrl += params;
      }
  
      return this.request(requestUrl, { ...restOptions, method: METHODS.GET })
                .then((response) => {
        return response
      }).catch((error) => {
       return Promise.reject(error);
      });;
    };
    
  
    put = (url: string, options = {}) => {
      return this.request(url, { ...options, method: METHODS.PUT })
       .then((response) => {
        return response
      }).catch((error) => {
       return Promise.reject(error);
      });
    };
  
  
    post = (url: string, options = {}) => {
      return this.request(url, { ...options, method: METHODS.POST })
        .then((response) => {
        return response
      }).catch((error) => {
       return Promise.reject(error);
      });;
    };

   delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE })
      .then((response) => {
      return response
    }).catch((error) => {
     return Promise.reject(error);
    });;
  };
  
    request = (url: string, options: Options, timeout = 5000) => {
      const {method = METHODS.GET , data, headers = {}} = options;
      
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open(
          method, 
          method === METHODS.GET && !!data 
            ? `${url}${queryStringify(data)}`
            : url
        );
        
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr);
          } else {
            reject(new Error(`HTTP request failed: ${xhr.statusText}`));
          }
        };

        xhr.ontimeout = function () {
          xhr.abort();
          reject(new Error("Request timeout"));
        };
        
        xhr.onabort = reject;
        xhr.onerror = function () {
          reject(new Error("Network error"));
        };
  
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr);
            } else {
              reject(new Error(`HTTP request failed: ${xhr.statusText}`));
            }
          }
        };
        
        xhr.timeout = timeout;
          
        if (options.method === METHODS.GET) {
          xhr.send();
        } else {
          const requestData = options.data ? JSON.stringify(options.data) : null;
          xhr.send(requestData);
        }
      });
    
    };
  }
 