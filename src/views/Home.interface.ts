import { ListingProps } from '../components/Listings/Listing/Listing.interface'

export interface FilterValue {
  max_price: number
  min_price: number
  max_floor_space: number
  min_floor_space: number
  houseType: string
  city: string
  bedrooms: string
  elevators: boolean
  swimming_pool: boolean
  gym: boolean
  filteredData?: ListingProps[]
  listingsData?: ListingProps[]
  postsPerPage: number
  isFiltered: boolean
  currentPage: number
  sortBy: string
  search: string
}
