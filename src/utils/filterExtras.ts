import { ListingProps } from './../components/Listings/Listing/Listing.interface'

export const filterExtras = (data: ListingProps[], currentValue: string) => {
  return data.filter((item) => item.extras.includes(currentValue))
}
