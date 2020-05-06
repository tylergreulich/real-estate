import React from 'react'
import styled from 'styled-components'
import { Filter } from '../components/Filter/Filter'
import { Header } from '../components/Home/Header/Header'
import { Listings } from '../components/Listings/Listings'
import { listingsData } from '../components/Listings/listingsData'
import { filterExtras } from '../utils/filterExtras'
import { FilterValue } from './Home.interface'

export const ContentArea = styled.section`
  display: flex;
`

export class HomeComponent extends React.PureComponent {
  state: FilterValue = {
    min_price: 0,
    max_price: 10000000,
    min_floor_space: 0,
    max_floor_space: 50000,
    houseType: 'All',
    city: 'All',
    bedrooms: '0',
    elevators: false,
    gym: false,
    swimming_pool: false,
    filteredData: listingsData,
    listingsData,
    postsPerPage: 9,
    currentPage: 1,
    isFiltered: false,
    sortBy: '',
    search: ''
  }

  handleChange = ({ target }: React.ChangeEvent<any>) => {
    let { name, value, type, checked } = target

    const isCheckbox = type === 'checkbox'

    value = isCheckbox ? checked : value

    this.setState({ [name]: value }, () => {
      console.log('After setState', this.state)
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
      houseType,
      gym,
      swimming_pool,
      elevators,
      sortBy,
      search
    } = this.state

    this.setState({ isFiltered: true })

    let newData = listingsData!.filter((item) => {
      return (
        item.price >= min_price &&
        item.price <= max_price &&
        item.floorSpace >= min_floor_space &&
        item.floorSpace <= max_floor_space &&
        parseInt(item.bedrooms) >= parseInt(bedrooms)
      )
    })

    if (city !== 'All') {
      newData = newData.filter((item) => item.city === city)
    }

    if (houseType !== 'All') {
      newData = newData.filter((item) => item.houseType === houseType)
    }

    if (gym) newData = filterExtras(newData, 'gym')
    if (elevators) newData = filterExtras(newData, 'elevator')
    if (swimming_pool) newData = filterExtras(newData, 'swimming_pool')

    if (sortBy === 'highest-price')
      newData = newData.sort((a, b) => b.price - a.price)
    if (sortBy === 'lowest-price')
      newData = newData.sort((a, b) => a.price - b.price)

    this.setState({ filteredData: newData }, () => {
      console.log('After Filter', this.state)
    })
  }

  render() {
    const {
      currentPage,
      postsPerPage,
      listingsData,
      filteredData,
      isFiltered
    } = this.state

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const getCurrentPosts = (posts: any) =>
      posts.slice(indexOfFirstPost, indexOfLastPost)

    const currentPosts = isFiltered
      ? getCurrentPosts(filteredData)
      : getCurrentPosts(listingsData)

    const totalPages =
      isFiltered && filteredData!.length <= 9
        ? 1
        : Math.ceil(listingsData!.length / 9)

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
            sortBy={this.state.sortBy!}
            onChange={this.handleChange}
            search={this.state.search}
          />
        </ContentArea>
      </>
    )
  }
}
