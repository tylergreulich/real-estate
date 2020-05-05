import React from 'react'
import styled from 'styled-components'
import { Filter } from '../components/Filter/Filter'
import { Header } from '../components/Home/Header/Header'
import { ListingProps } from '../components/Listings/Listing/Listing.interface'
import { Listings } from '../components/Listings/Listings'
import { listingsData } from '../components/Listings/listingsData'

export const ContentArea = styled.section`
  display: flex;
`

export interface FilterValue {
  max_price: number
  min_price: number
  max_floor_space: number
  min_floor_space: number
  house_type: string
  city: string
  bedrooms: string
  elevators: boolean
  swimming_pool: boolean
  finished_basement: boolean
  gym: boolean
  filteredData?: ListingProps[]
  listingsData?: ListingProps[]
  postsPerPage: number
  currentPage: number
}

export class HomeComponent extends React.PureComponent {
  state: FilterValue = {
    min_price: 0,
    max_price: 10000000,
    min_floor_space: 0,
    max_floor_space: 50000,
    house_type: 'apartment',
    city: 'Los Angeles',
    bedrooms: '1',
    elevators: false,
    gym: false,
    swimming_pool: false,
    finished_basement: false,
    filteredData: listingsData,
    listingsData,
    postsPerPage: 9,
    currentPage: 1
  }

  handleChange = ({ target }: React.ChangeEvent<any>) => {
    let { name, value, type, checked } = target

    name = name.split(' ').join('_').toLowerCase()

    const isCheckbox = type === 'checkbox'

    value = isCheckbox ? checked : value

    this.setState({ [name]: value }, () => {
      console.log(this.state)
      this.filterData()
    })
  }

  filterData = () => {
    const {
      min_price,
      max_price,
      listingsData,
      min_floor_space,
      max_floor_space,
      city,
      bedrooms,
      house_type
    } = this.state
    const newData = listingsData!.filter((item) => {
      return (
        item.price >= min_price &&
        item.price <= max_price &&
        item.floorSpace >= min_floor_space &&
        item.floorSpace <= max_floor_space &&
        item.houseType === house_type &&
        item.city === city &&
        item.bedrooms === bedrooms
      )
    })

    this.setState({ filteredData: newData })
  }

  render() {
    const { currentPage, postsPerPage, listingsData } = this.state

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = listingsData!.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(listingsData!.length / 9)

    // Change Page
    const paginate = (pageNumber: number) =>
      this.setState({ currentPage: pageNumber })

    return (
      <>
        <Header />
        <ContentArea>
          <Filter handleChange={this.handleChange} filterValue={this.state} />
          <Listings
            listingsData={this.state.filteredData!}
            postsPerPage={postsPerPage}
            totalPages={totalPages}
            paginate={paginate}
            totalPosts={listingsData!.length}
            currentPosts={currentPosts}
          />
        </ContentArea>
      </>
    )
  }
}
