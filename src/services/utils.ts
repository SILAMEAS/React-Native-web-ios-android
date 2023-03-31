import {QueryString} from '@src/services/type';

export const urlFormat = <T>(url: string, queryString?: QueryString<T>) => {
  let stringQueries = '';
  let index = 0;
  for (let key in queryString) {
    index++;
    stringQueries += `${index > 1 ? '&' : ''}${key}=${queryString[key]}`;
  }
  return `${url}?${stringQueries}`;
};
