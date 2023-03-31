import {Dictionary} from '@src/utils/commons/type';
import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface PaginationProps {
  // data?: T[];
  baseUrl?: string;
  prefixUrl?: string;
  queryString?: Partial<{
    [key: string]: string | number;
  }> & {pageSize: number};
  render?: (item: any) => ReactNode;

  setData?: Dispatch<SetStateAction<any>>;
  renderTable?: (item: any) => ReactNode;
  position?: 'top' | 'bottom';
  isScroll?: boolean;
  returnStatus?: number[];
  header?: Dictionary;
  refetch?: boolean;
}
