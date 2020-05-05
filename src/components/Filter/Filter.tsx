import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import React from 'react'
import { FilterProps } from './Filter.interface'
import {
  ExtrasWrapper,
  FilterContainer,
  FloorSpaceWrapper,
  PriceFilterWrapper
} from './Filter.styles'
import { useFilterStyles } from './filterClasses'
import { SelectFilter } from './Filters/SelectFilter/SelectFilter'
import { TextFieldFilters } from './Filters/TextFieldFilters/TextFieldFilters'

export const Filter: React.FC<FilterProps> = ({
  handleChange,
  filterValue
}) => {
  const classes = useFilterStyles()

  return (
    <FilterContainer>
      <Typography variant="h4" className={classes.filterText}>
        Filter
      </Typography>
      <SelectFilter
        handleChange={handleChange}
        inputName="City"
        classes={classes}
        value={filterValue?.city}
      >
        <MenuItem value="Phoenix">Phoenix</MenuItem>
        <MenuItem value="Miami">Miami</MenuItem>
        <MenuItem value="Los Angeles">Los Angeles</MenuItem>
        <MenuItem value="San Francisco">San Francisco</MenuItem>
      </SelectFilter>
      <SelectFilter
        handleChange={handleChange}
        inputName="House Type"
        classes={classes}
        value={filterValue?.house_type}
      >
        <MenuItem value="apartment">Apartment</MenuItem>
        <MenuItem value="studio">Studio</MenuItem>
        <MenuItem value="ranch">Room</MenuItem>
      </SelectFilter>
      <SelectFilter
        handleChange={handleChange}
        inputName="Bedrooms"
        classes={classes}
        value={filterValue?.bedrooms}
      >
        <MenuItem value="1">1 Bedroom</MenuItem>
        <MenuItem value="2">2 Bedrooms</MenuItem>
        <MenuItem value="3">3 Bedrooms</MenuItem>
        <MenuItem value="4">4 Bedrooms</MenuItem>
      </SelectFilter>
      <PriceFilterWrapper>
        <TextFieldFilters
          minLabel="Min Price"
          maxLabel="Max Price"
          minValue={filterValue?.min_price!}
          maxValue={filterValue?.max_price!}
          text="Price"
          handleChange={handleChange}
        />
      </PriceFilterWrapper>
      <FloorSpaceWrapper>
        <TextFieldFilters
          minLabel="Min Floor Space"
          maxLabel="Max Floor Space"
          text="Floors"
          handleChange={handleChange}
          minValue={filterValue?.min_floor_space!}
          maxValue={filterValue?.max_floor_space!}
        />
      </FloorSpaceWrapper>
      <ExtrasWrapper>
        <div className={classes.root}>
          <FormControl
            required
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel
              component="legend"
              style={{
                marginBottom: '1rem'
              }}
            >
              Extras
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterValue?.elevators}
                    onChange={(event) => {
                      handleChange(event)
                    }}
                    name="elevators"
                  />
                }
                label="Elevators"
                labelPlacement="start"
                className={classes.extrasLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterValue?.swimming_pool}
                    onChange={(event) => {
                      handleChange(event)
                    }}
                    name="swimming_pool"
                  />
                }
                labelPlacement="start"
                label="Swimming Pool"
                className={classes.extrasLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterValue?.finished_basement}
                    onChange={(event) => {
                      handleChange(event)
                    }}
                    name="finished_basement"
                  />
                }
                labelPlacement="start"
                label="Finished Basement"
                className={classes.extrasLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) => {
                      handleChange(event)
                    }}
                    name="gym"
                  />
                }
                labelPlacement="start"
                label="Gym"
                className={classes.extrasLabel}
              />
            </FormGroup>
          </FormControl>
        </div>
      </ExtrasWrapper>
    </FilterContainer>
  )
}
