import styled from 'styled-components'

export const ListingsContainer = styled.section`
  width: 75vw;
  padding: 25px 70px;
  background: ${({ theme }) => theme.main.white};
`

export const SearchContainer = styled.section`
  width: 70%;

  .MuiAutocomplete-root {
    width: 70% !important;
    margin-bottom: 20px;
  }
`

export const SortContainer = styled.section`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`

export const Results = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.main.darkGrey};
  display: inline-flex;
  align-items: center;
`

export const SortOptions = styled.div`
  select {
    display: inline-block;
    margin-right: 30px;
  }
`

interface ViewModeProps {
  viewMode: string
}

export const ViewMode = styled.div<ViewModeProps>`
  display: inline-flex;
  align-items: center;
  height: 100%;
  margin: 8px 0;
  cursor: pointer;

  svg {
    margin-left: 30px;
    font-size: 1.25rem;
  }

  .fa-list {
    color: ${({ viewMode, theme }) =>
      viewMode === 'horizontal' ? theme.main.black : theme.main.lightGrey};
  }

  .fa-th {
    color: ${({ viewMode, theme }) =>
      viewMode === 'vertical' ? theme.main.black : theme.main.lightGrey};
  }
`

export const ListingResults = styled.section<ViewModeProps>`
  display: grid;
  grid-template-columns: ${({ viewMode }) =>
    viewMode === 'vertical' ? `repeat(3, 1fr)` : `repeat(2, 1fr)`};
  gap: 60px;
  margin-bottom: 60px;
`

export const PaginationContainer = styled.section`
  .MuiPagination-root {
    .MuiPagination-ul {
      justify-content: center;
      margin-bottom: 30px;
    }
  }
`
