import styled from 'styled-components'

export const ListingContainer = styled.div`
  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);
  border-radius: 5px;
`

export const ListingAddress = styled.span`
  position: absolute;
  bottom: 20px;
  font-weight: 500;
  font-size: 2rem;
  text-transform: capitalize;
  text-shadow: 0 1px 4px rgba(91, 91, 91, 1);
  opacity: 1;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`

export const ListingDetails = styled.div`
  padding: 25px;
  position: absolute;
  background: linear-gradient(
    to left,
    rgba(218, 68, 83, 0.9),
    rgba(137, 33, 107, 0.9)
  );
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`

interface ListingImageProps {
  imgUrl: string
}

export const ListingImage = styled.div<ListingImageProps>`
  background: ${({ imgUrl }) => `url(${imgUrl}) no-repeat center center`};
  /* background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')
    no-repeat center center; */
  background-size: cover;
  min-height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  color: ${({ theme }) => theme.main.white};
  position: relative;

  &:hover {
    ${ListingDetails} {
      opacity: 1;
    }

    ${ListingAddress} {
      opacity: 0;
    }
  }
`

export const UserImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.main.white};
  display: inline-block;
  background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')
    no-repeat center center;
  background-size: cover;
`

export const UserDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 70%;
  margin-left: 20px;
`

export const UserName = styled.span`
  color: rgba(255, 255, 255, 1);
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 5px;
`

export const PostDate = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  display: block;
  margin-left: 3px;
`

export const Details = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

export const FloorSpace = styled.div`
  margin-bottom: 10px;

  svg {
    font-size: 20px;
    margin-right: 15px;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
  }
`

export const ViewButton = styled.div`
  background: ${({ theme }) => theme.main.black};
  padding: 8px;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.main.secondary};
  }
`

export const Bedrooms = styled(FloorSpace)``

export const BottomInfo = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
`

export const Price = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.main.darkGrey};
`

export const Location = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.lightGrey};

  svg {
    margin-right: 7.5px;
  }
`
