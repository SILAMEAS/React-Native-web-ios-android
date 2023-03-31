import {IPressableProps} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {MyTextProps} from '@components/commons/my_text';

export interface TableHeaderProps extends IViewProps {
  /**
   * Content of the `TableHeader`.
   */
  children: React.ReactNode;
}

export interface TableRowProps extends IPressableProps {
  /**
   * Content of the `DataTableRow`.
   */
  children: React.ReactNode;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * `pointerEvents` passed to the `View` container, which is wrapping children within `TouchableRipple`.
   */
  pointerEvents?: IViewProps['pointerEvents'];
}

export interface TableCellProps extends IPressableProps {
  /**
   * Content of the `DataTableCell`.
   */
  children: React.ReactNode | string | string[] | number | number[];
  /**
   * Align the text to the right. Generally monetary or number fields are aligned to right.
   */
  numeric?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Text content style of the `DataTableCell`.
   */
  textStyle?: MyTextProps;
}

export interface TableTitleProps extends IPressableProps {
  /**
   * Text content of the `DataTableTitle`.
   */
  children: React.ReactNode;
  /**
   * Align the text to the right. Generally monetary or number fields are aligned to right.
   */
  numeric?: boolean;
  /**
   * Direction of sorting. An arrow indicating the direction is displayed when this is given.
   */
  sortDirection?: 'ascending' | 'descending';
  /**
   * The number of lines to show.
   */
  numberOfLines?: number;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Text content style of the `DataTableTitle`.
   */
  textStyle?: MyTextProps;

  /**
   * Icon Color
   */
  iconColor?: string;
}

export interface TableProps extends IViewProps {
  /**
   * Content of the `DataTable`.
   */
  children: React.ReactNode;
}
