import type { IApiResponse } from '~/@types/global';

export async function APIResponse({ statusCode, data, message }: IApiResponse) {
  const isSuccess = statusCode >= 200 && statusCode < 300;
  const computedMessage = message || (isSuccess ? 'Request successful' : 'Request failed');
  return { statusCode, taskStatus: isSuccess, data, message: computedMessage };
}
