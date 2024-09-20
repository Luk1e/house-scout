export interface OptionType {
  value: number;
  label: string;
}

export interface SelectProps {
  options: OptionType[];
  name: string;
  label: string;
  isAgent?: boolean;
  openModal?: () => void;
}
