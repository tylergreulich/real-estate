import React from 'react'
import apartmentOneImage from '../../assets/img/apartment-1.jpg'
import apartmentTenImage from '../../assets/img/apartment-10.jpg'
import apartmentElevenImage from '../../assets/img/apartment-11.jpg'
import apartmentTwelveImage from '../../assets/img/apartment-12.jpg'
import apartmentThirteenImage from '../../assets/img/apartment-13.jpg'
import apartmentFourteenImage from '../../assets/img/apartment-14.jpg'
import apartmentFifteenImage from '../../assets/img/apartment-15.jpg'
import apartmentSixteenImage from '../../assets/img/apartment-16.jpg'
import apartmentTwoImage from '../../assets/img/apartment-2.jpg'
import apartmentThreeImage from '../../assets/img/apartment-3.jpg'
import apartmentFourImage from '../../assets/img/apartment-4.jpg'
import apartmentFiveImage from '../../assets/img/apartment-5.jpg'
import apartmentSixImage from '../../assets/img/apartment-6.jpg'
import apartmentSevenImage from '../../assets/img/apartment-7.jpg'
import apartmentEightImage from '../../assets/img/apartment-8.jpg'
import apartmentNineImage from '../../assets/img/apartment-9.jpg'
import { ListingProps } from './Listing/Listing.interface'

export const listingsData: ListingProps[] = [
  {
    address: '2034 Grand Avenue',
    city: 'Phoenix',
    state: 'AZ',
    bedrooms: '3',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    price: 220000,
    floorSpace: 2000,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentOneImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Miami',
    state: 'FL',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentTwoImage
  },
  {
    address: '36143 Rodeo Drive',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    city: 'Los Angeles',
    state: 'CA',
    bedrooms: '1',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentThreeImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Phoenix',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentFourImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Austin',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'TX',
    bedrooms: '1',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentFiveImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'San Francisco',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentSixImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Los Angeles',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentSevenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Phoenix',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '1',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentEightImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Miami',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'FL',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentNineImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Atlanta',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'GA',
    bedrooms: '1',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentTenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'San Francisco',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentElevenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Queen Creek',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '1',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentTwelveImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Queen Creek',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentThirteenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Queen Creek',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentFourteenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Queen Creek',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentFifteenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Queen Creek',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 210000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentSixteenImage
  }
]

export const useListings = () => {
  const [listings, setListings] = React.useState(listingsData)

  return { listings, setListings }
}
