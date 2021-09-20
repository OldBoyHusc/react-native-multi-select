import React from 'react';
import {
  StyleProp,
  TextInputProps,
  TextProps,
  ViewProps,
  TouchableOpacityProps,
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

export declare type SelectBoxProps = {
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
  listEmptyText?: string;
  selectIcon?: React.ReactNode;
  label: string;
  inputPlaceholder?: string;
  hideInputFilter?: boolean;
  width?: number | string;
  isMulti: boolean;
  options: any | ItemSelected[];
  value?: ItemSelected;
  selectedValues: any | ItemSelected[];
  arrowIconColor?: string;
  searchIconColor?: string;
  toggleIconColor?: string;
  searchInputProps?: any;
  multiSelectInputFieldProps?: any;
  listOptionProps?: any;
  onChange?(item?: any): void;
  onMultiSelect?(item?: any): void;
  onTapClose?(item?: any): void;
  removeItemsSelected?: boolean;
  editStatus?(item: any): void;
  noEditable?: boolean;
};

declare const SelectBox: React.FC<SelectBoxProps>;

export default SelectBox;
