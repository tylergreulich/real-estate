import { ListingProps } from './Listing/Listing.interface'

export interface ListingsProps {
  listingsData: ListingProps[]
  totalPages: number
  paginate: any
  totalPosts: any
  currentPosts: ListingProps[]
  postsPerPage: any
  sortBy: string
  onChange: (event: any) => any
  search: string
}
