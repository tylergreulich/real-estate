import { FormControl, InputLabel, Select } from '@material-ui/core'
import React from 'react'
import { FiltersProps } from '../FiltersProps.interface'

export const SelectFilter: React.FC<FiltersProps> = React.memo(
  ({ classes, handleChange, children, inputName, value }) => {
    const selectName = inputName.split(' ').join('_').trim().toLowerCase()

    console.log(selectName)

    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{inputName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => handleChange(event)}
          name={selectName}
          value={value}
        >
          {children}
        </Select>
      </FormControl>
    )
  }
)
