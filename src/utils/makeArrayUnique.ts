import { ListingProps } from './../components/Listings/Listing/Listing.interface'

export const makeArrayUnique = (arr: ListingProps[], key: string) => {
  const baseArr = arr.map((d: any) => d[key])

  let j: any = {}

  baseArr.forEach((v: any) => {
    j[v + '::' + typeof v] = v
  })

  return Object.keys(j)
    .map(function (v) {
      return j[v]
    })
    .sort()
}
