import { faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme
} from '@material-ui/core'
import { Autocomplete, Pagination } from '@material-ui/lab'
import React from 'react'
import { Listing } from './Listing/Listing'
import { ListingsProps } from './Listings.interface'
import {
  ListingResults,
  ListingsContainer,
  PaginationContainer,
  Results,
  SearchContainer,
  SortContainer,
  SortOptions,
  ViewMode
} from './Listings.styles'

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

export const Listings: React.FC<ListingsProps> = React.memo(
  ({ listingsData, totalPages, paginate, currentPosts }) => {
    const options = [
      {
        id: 1,
        title: 'Some random text'
      }
    ]

    const filterHasNoMatch =
      listingsData === undefined || listingsData.length === 0

    if (filterHasNoMatch)
      return <p>Sorry, your filter did not match any listing</p>

    const classes = useStyles()
    const [age, setAge] = React.useState('')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string)
    }

    return (
      <ListingsContainer>
        <SearchContainer>
          <Autocomplete
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Combo box" variant="outlined" />
            )}
          />
        </SearchContainer>
        <SortContainer>
          <Results>390 results found</Results>
          <SortOptions>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="highest-price">Highest Price</MenuItem>
                <MenuItem value="lowest-price">Lowest Price</MenuItem>
              </Select>
            </FormControl>
            <ViewMode>
              <FontAwesomeIcon icon={faList} />
              <FontAwesomeIcon icon={faTh} />
            </ViewMode>
          </SortOptions>
        </SortContainer>
        <ListingResults>
          {currentPosts.map(
            ({
              address,
              state,
              city,
              realEstateAgent,
              price,
              floorSpace,
              bedrooms,
              datePosted,
              extras,
              houseType,
              imgUrl
            }) => (
              <Listing
                key={imgUrl}
                address={address}
                state={state}
                city={city}
                realEstateAgent={realEstateAgent}
                price={price}
                floorSpace={floorSpace}
                bedrooms={bedrooms}
                datePosted={datePosted}
                extras={extras}
                houseType={houseType}
                imgUrl={imgUrl}
              />
            )
          )}
        </ListingResults>
        <PaginationContainer>
          <Pagination
            count={totalPages}
            color="secondary"
            onChange={(_, pageNumber) => paginate(pageNumber)}
            style={{
              justifyContent: 'center'
            }}
          />
        </PaginationContainer>
      </ListingsContainer>
    )
  }
)
