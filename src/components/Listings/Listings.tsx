import { faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import React from 'react'
import { Listing } from './Listing/Listing'
import { ListingsProps } from './Listings.interface'
import {
  ListingResults,
  ListingsContainer,
  PaginationContainer,
  Results,
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
  ({ listingsData, totalPages, paginate, currentPosts, sortBy, onChange }) => {
    const [viewMode, setViewMode] = React.useState('vertical')

    const filterHasNoMatch =
      listingsData === undefined || listingsData.length === 0

    const classes = useStyles()

    return (
      <ListingsContainer>
        {filterHasNoMatch ? (
          <section>
            <div>
              <p>No results found</p>
            </div>
          </section>
        ) : (
          <>
            <SortContainer>
              <Results>390 results found</Results>
              <SortOptions>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Price</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    onChange={onChange}
                    name="sortBy"
                  >
                    <MenuItem value="highest-price">Highest Price</MenuItem>
                    <MenuItem value="lowest-price">Lowest Price</MenuItem>
                  </Select>
                </FormControl>
                <ViewMode viewMode={viewMode}>
                  <FontAwesomeIcon
                    icon={faList}
                    onClick={() => setViewMode('horizontal')}
                  />
                  <FontAwesomeIcon
                    icon={faTh}
                    onClick={() => setViewMode('vertical')}
                  />
                </ViewMode>
              </SortOptions>
            </SortContainer>
            <ListingResults viewMode={viewMode}>
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
                color="primary"
                onChange={(_, pageNumber) => paginate(pageNumber)}
                style={{
                  justifyContent: 'center'
                }}
              />
            </PaginationContainer>
          </>
        )}
      </ListingsContainer>
    )
  }
)
