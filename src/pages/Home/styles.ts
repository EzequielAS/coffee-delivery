import styled from 'styled-components'

export const ContainerCoffes = styled.section`
  max-width: 70rem;
  width: 97%;
  margin: 2rem auto 0 auto;
`

export const H3Styled = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.625rem;
  color: ${props => props.theme['base-subtitle']};

  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
`

export const Coffees = styled.div`
  margin: 3.375rem 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`