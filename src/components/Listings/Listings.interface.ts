import { ListingProps } from './Listing/Listing.interface'

export interface ListingsProps {
  listingsData: ListingProps[]
  totalPages: number
  paginate: any
  totalPosts: any
  currentPosts: ListingProps[]
  postsPerPage: any
}
