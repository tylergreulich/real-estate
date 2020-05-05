import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ListingProps } from './Listing.interface'
import {
  Bedrooms,
  BottomInfo,
  Details,
  FloorSpace,
  ListingAddress,
  ListingContainer,
  ListingDetails,
  ListingImage,
  Location,
  PostDate,
  Price,
  UserDetails,
  UserImage,
  UserName,
  ViewButton
} from './Listing.styles'

export const Listing: React.FC<ListingProps> = React.memo(
  ({
    address,
    floorSpace,
    bedrooms: bedroomsCount,
    price,
    realEstateAgent,
    datePosted,
    city,
    state,
    imgUrl
  }) => {
    return (
      <ListingContainer>
        <ListingImage imgUrl={imgUrl}>
          <ListingAddress>{address}</ListingAddress>
          <ListingDetails>
            <UserImage></UserImage>
            <UserDetails>
              <UserName>{realEstateAgent}</UserName>
              <PostDate>{datePosted}</PostDate>
            </UserDetails>
            <Details>
              <FloorSpace>
                <FontAwesomeIcon icon={faSquare} />
                <span>{floorSpace}&sup2;</span>
              </FloorSpace>
              <Bedrooms>
                <FontAwesomeIcon icon={faBed} />
                <span>{bedroomsCount} bedrooms</span>
              </Bedrooms>
              <ViewButton>View More</ViewButton>
            </Details>
          </ListingDetails>
        </ListingImage>
        <BottomInfo>
          <Price>${price} / month</Price>
          <Location>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {city}, {state}
          </Location>
        </BottomInfo>
      </ListingContainer>
    )
  }
)
