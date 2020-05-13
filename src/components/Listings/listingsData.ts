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
    price: 280000,
    floorSpace: 2000,
    extras: ['elevator', 'swimming_pool'],
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
    price: 190000,
    floorSpace: 1900,
    extras: ['gym', 'swimming_pool'],
    houseType: 'studio',
    imgUrl: apartmentTwoImage
  },
  {
    address: '339 Brownton Road',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    city: 'Los Angeles',
    state: 'CA',
    bedrooms: '1',
    price: 5400000,
    floorSpace: 1900,
    extras: ['gym', 'swimming_pool', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentThreeImage
  },
  {
    address: '4708 Woodrow Way',
    city: 'Phoenix',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 390000,
    floorSpace: 1900,
    extras: ['elevator'],
    houseType: 'studio',
    imgUrl: apartmentFourImage
  },
  {
    address: '3070 Clover Drive',
    city: 'Austin',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'TX',
    bedrooms: '1',
    price: 275000,
    floorSpace: 1900,
    extras: ['elevator', 'gym'],
    houseType: 'apartment',
    imgUrl: apartmentFiveImage
  },
  {
    address: '4782 Willison Street',
    city: 'San Francisco',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 890000,
    floorSpace: 1900,
    extras: ['elevator'],
    houseType: 'studio',
    imgUrl: apartmentSixImage
  },
  {
    address: '3773 Russell Street',
    city: 'Los Angeles',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 760000,
    floorSpace: 1900,
    extras: ['gym', 'swimming_pool'],
    houseType: 'room',
    imgUrl: apartmentSevenImage
  },
  {
    address: '437 Harrison Street',
    city: 'Phoenix',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '1',
    price: 460000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentEightImage
  },
  {
    address: '4941 Earnhardt Drive',
    city: 'Miami',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'FL',
    bedrooms: '2',
    price: 215000,
    floorSpace: 1900,
    extras: ['elevator'],
    houseType: 'apartment',
    imgUrl: apartmentNineImage
  },
  {
    address: '2764 Briarhill Lane',
    city: 'Atlanta',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'GA',
    bedrooms: '1',
    price: 410000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'studio',
    imgUrl: apartmentTenImage
  },
  {
    address: '822 Wetzel Lane',
    city: 'San Francisco',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 910000,
    floorSpace: 1900,
    extras: ['gym', 'swimming_pool'],
    houseType: 'apartment',
    imgUrl: apartmentElevenImage
  },
  {
    address: '36143 Rodeo Drive',
    city: 'Phoenix',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '1',
    price: 490000,
    floorSpace: 1900,
    extras: ['elevator'],
    houseType: 'room',
    imgUrl: apartmentTwelveImage
  },
  {
    address: '2823 Pine Garden Lane',
    city: 'Atlanta',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'GA',
    bedrooms: '2',
    price: 490000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentThirteenImage
  },
  {
    address: '3195 Cody Ridge Road',
    city: 'Atlanta',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'GA',
    bedrooms: '2',
    price: 510000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'apartment',
    imgUrl: apartmentFourteenImage
  },
  {
    address: '3531 Glen Street',
    city: 'Los Angeles',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'CA',
    bedrooms: '2',
    price: 680000,
    floorSpace: 1900,
    extras: ['elevator'],
    houseType: 'studio',
    imgUrl: apartmentFifteenImage
  },
  {
    address: '1965 Leisure Lane',
    city: 'San Francisco',
    realEstateAgent: 'Nina Smith',
    datePosted: '05-05-2020',
    state: 'AZ',
    bedrooms: '2',
    price: 920000,
    floorSpace: 1900,
    extras: ['gym', 'elevator'],
    houseType: 'room',
    imgUrl: apartmentSixteenImage
  }
]
