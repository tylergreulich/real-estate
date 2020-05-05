import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { cleanString } from '../../../../utils/cleanString'
import { FilterProps } from '../../Filter.interface'

export const MyText = styled.span`
  display: block;
  font-size: 1rem;
  margin: 1rem 0;
`

interface TextFieldFilter extends FilterProps {
  text: string
  minLabel: string
  maxLabel: string
  minValue: number
  maxValue: number
}

export const TextFieldFilters: React.FC<TextFieldFilter> = React.memo(
  ({ handleChange, text, minLabel, maxLabel, minValue, maxValue }) => {
    const minTextFieldName = cleanString(minLabel)
    const maxTextFieldName = cleanString(maxLabel)

    return (
      <>
        <MyText>{text}</MyText>
        <TextField
          id="standard-basic"
          label={minLabel}
          onChange={(event) => handleChange(event)}
          value={minValue}
          name={minTextFieldName}
        />
        <TextField
          id="standard-basic"
          label={maxLabel}
          onChange={(event) => handleChange(event)}
          value={maxValue}
          name={maxTextFieldName}
        />
      </>
    )
  }
)
