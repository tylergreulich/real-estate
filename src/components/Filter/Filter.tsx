import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Typography
} from '@material-ui/core'
import React from 'react'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { makeArrayUnique } from '../../utils/makeArrayUnique'
import { FilterProps } from './Filter.interface'
import {
  ExtrasWrapper,
  FilterContainer,
  FloorSpaceWrapper,
  PriceFilterWrapper
} from './Filter.styles'
import { StyledCheckbox, useFilterStyles } from './filterClasses'
import { SelectFilter } from './Filters/SelectFilter/SelectFilter'
import { TextFieldFilters } from './Filters/TextFieldFilters/TextFieldFilters'

export const Filter: React.FC<FilterProps> = ({
  handleChange,
  filterValue
}) => {
  const classes = useFilterStyles()

  const filteredCities = makeArrayUnique(filterValue!.listingsData!, 'city')
  const filteredHouseTypes = makeArrayUnique(
    filterValue!.listingsData!,
    'houseType'
  )
  const filteredBedrooms = makeArrayUnique(
    filterValue!.listingsData!,
    'bedrooms'
  )

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
        name="city"
      >
        <MenuItem value="All">All</MenuItem>
        {filteredCities.map((city, index) => (
          <MenuItem key={index} value={city}>
            {city}
          </MenuItem>
        ))}
      </SelectFilter>
      <SelectFilter
        handleChange={handleChange}
        inputName="House Type"
        classes={classes}
        value={filterValue?.houseType}
        name="houseType"
      >
        <MenuItem value="All">All</MenuItem>
        {filteredHouseTypes.map((houseType, index) => (
          <MenuItem key={index} value={houseType}>
            {capitalizeFirstLetter(houseType)}
          </MenuItem>
        ))}
      </SelectFilter>
      <SelectFilter
        handleChange={handleChange}
        inputName="Bedrooms"
        classes={classes}
        value={filterValue?.bedrooms}
        name="bedrooms"
      >
        <MenuItem value="0">All</MenuItem>
        {filteredBedrooms.map((bedroom) => (
          <MenuItem key={bedroom} value={bedroom}>
            {bedroom}+ Bedrooms
          </MenuItem>
        ))}
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
                  <StyledCheckbox
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
                  <StyledCheckbox
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
                  <StyledCheckbox
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
