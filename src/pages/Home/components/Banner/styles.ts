import styled from 'styled-components'

export const BannerContainer = styled.section<{ background: string }>`
  width: 100%;
  height: 34rem;

  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerContent = styled.div`
  max-width: 70rem;
  width: 97%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export const TextContainer = styled.div`
`

export const H1Styled = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2.875rem;
  font-weight: 800;
  line-height: 3.875rem;
  color: ${props => props.theme['base-title']};
  max-width: 34rem;

  @media (max-width: 500px) {
    font-size: 2.6rem;
    text-align: center;
  }
`

export const H2Styled = styled.h2`
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${props => props.theme['base-subtitle']};
  margin-top: 1rem;
  max-width: 34rem;

  @media (max-width: 500px) {
    font-size: 1.1rem;
    text-align: center;
  }
`

export const ServicesContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: max-content max-content;
  gap: 1.25rem;

  @media (max-width: 500px) {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const SpanStyled = styled.span`
  text-align: center;

  @media (max-width: 500px) {
    display: none;
  }
`

export const Service = styled.div`
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const SERVICES_COLORS = {
  buy: 'yellow-dark',
  packing: 'base-text',
  delivery:'yellow',
  coffee: 'purple'
} as const

interface ServiceIconProps {
  backgroundColor: keyof typeof SERVICES_COLORS
}

export const ServiceIcon = styled.div<ServiceIconProps>`
  padding: 0.5rem;
  border-radius: 50%;
  background: ${props => props.theme[SERVICES_COLORS[props.backgroundColor]]};
  color: ${props => props.theme['background']};

  display: flex;
  align-items: center;
`

export const ImgStyled = styled.img`
  height: 22.5rem;

  @media (max-width: 1000px) {
    display: none;
  }
`