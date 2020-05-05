import styled from 'styled-components'

export const FilterContainer = styled.section`
  background-color: ${({ theme }) => theme.main.grey};
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding: 70px;
`

export const PriceFilterWrapper = styled.div`
  .MuiTextField-root {
    margin-right: 2.5%;
    width: 45%;
    display: inline-block;
    margin-bottom: 1rem;
  }
`

export const PriceText = styled.span`
  display: block;
  font-size: 1rem;
  margin: 1rem 0;
`

export const FloorSpaceWrapper = styled(PriceFilterWrapper)``

export const ExtrasWrapper = styled(PriceFilterWrapper)``
