import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Theme
} from '@material-ui/core'
import React from 'react'

interface MySelectProps {
  labelName: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
)

export const MySelect: React.FC<MySelectProps> = ({ labelName, children }) => {
  const classes = useStyles()

  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  )
}
