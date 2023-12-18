export type APIRequest<T> = {
    response: T;
    reason: string;
  };

export function hasError(response: any): response is APIRequest<any> {
  return response && response.hasOwnProperty('reason');
}
