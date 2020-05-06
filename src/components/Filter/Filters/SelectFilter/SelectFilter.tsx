import { FormControl, InputLabel, Select } from '@material-ui/core'
import React from 'react'
import { FiltersProps } from '../FiltersProps.interface'

export const SelectFilter: React.FC<FiltersProps> = React.memo(
  ({ classes, handleChange, children, inputName, value, name }) => {
    console.log(value)

    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{inputName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => handleChange(event)}
          name={name}
          value={value}
        >
          {children}
        </Select>
      </FormControl>
    )
  }
)
