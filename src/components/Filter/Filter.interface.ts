import { FilterValue } from './../../views/Home'

export interface FilterProps {
  handleChange: (event: React.ChangeEvent<any>) => any
  filterValue?: FilterValue
  value?: string
}
