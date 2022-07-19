import React from 'react';
import {
  StyleProp,
  TextInputProps,
  TextProps,
  ViewProps,
  TouchableOpacityProps,
  FlatListProps,
} from 'react-native';

export interface ToggleProps extends TouchableOpacityProps {
  onTouch(): void;
  checked: boolean;
  iconColor: string;
}

export interface ItemSelected {
  id: string | number;
  item: string;
}

export class SelectBoxStyleProps {
  labelStyle?: StyleProp<TextProps>;
  containerStyle?: StyleProp<ViewProps>;
  inputFilterContainerStyle?: StyleProp<ViewProps>;
  inputFilterStyle?: StyleProp<TextInputProps>;
  optionsLabelStyle?: StyleProp<TextProps>;
  optionContainerStyle?: StyleProp<ViewProps>;
  multiOptionContainerStyle?: StyleProp<ViewProps>;
  multiOptionsLabelStyle?: StyleProp<TextProps>;
  multiListEmptyLabelStyle?: StyleProp<TextProps>;
  listEmptyLabelStyle?: StyleProp<TextProps>;
  selectedItemStyle?: StyleProp<TextProps>;
}

export class SelectBoxOptionProps extends SelectBoxStyleProps {
  hideInputFilter?: boolean;
  isMulti: boolean;
  removeItemsSelected?: boolean;
  noEditable?: boolean;
}

export class SelectBoxVariableProps extends SelectBoxOptionProps {
  listEmptyText?: string;
  label: string;
  inputPlaceholder?: string;
  width?: number | string;
  arrowIconColor?: string;
  searchIconColor?: string;
  toggleIconColor?: string;
}

export declare class SelectBoxProps extends SelectBoxVariableProps {
  options: any | ItemSelected[];
  value?: ItemSelected;
  selectedValues: any | ItemSelected[];
  searchInputProps?: any;
  multiSelectInputFieldProps?: FlatListProps<any>;
  listOptionProps?: any;
  selectIcon?: React.ReactNode;

  /* Functional */
  onChange?(item?: any): void;
  onMultiSelect?(item?: any): void;
  onTapClose?(item?: any): void;
  editStatus?(item: any): void;
}

declare const SelectBox: React.FC<SelectBoxProps>;

export default SelectBox;
