import { FilterProps } from './../Filter.interface'

export interface FiltersProps extends FilterProps {
  classes: Record<
    'root' | 'formControl' | 'selectEmpty' | 'filterText' | 'extrasLabel',
    string
  >
  inputName: string
}
