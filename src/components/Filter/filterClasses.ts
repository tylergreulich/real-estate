import { Checkbox, createStyles, makeStyles, Theme } from '@material-ui/core'
import styled from 'styled-components'

export const useFilterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: `16px 0`,
      minWidth: 120,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    filterText: {
      marginBottom: '25px',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    extrasLabel: {
      justifyContent: 'space-between',
      margin: 0
    }
  })
)

export const StyledCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.main.primary} !important;
`
