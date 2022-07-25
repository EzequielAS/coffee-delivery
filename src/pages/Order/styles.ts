import styled from 'styled-components'

export const OrderContainer = styled.section`
  max-width: 70rem;
  width: 97%;
  margin: 5rem auto 0 auto;
`

export const TitleWrapper = styled.div` 
`

export const Title = styled.p`
  color: ${props => props.theme['yellow-dark']};
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  line-height: 2.6rem;
`

export const Subtitle = styled.p`
  color: ${props => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 1.625rem;
  margin-bottom: 2.5rem;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const CardAddress = styled.div`
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background-image: linear-gradient(
    90deg,
    ${props => props.theme['yellow-dark']}, ${props => props.theme.purple}
  );

  height: 17rem;
  max-width: 32.875rem;
  width: 97%;
`

export const CardContent = styled.div`
  position: absolute;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 6px 36px 6px 36px;
  background: ${props => props.theme.background};
  padding: 2.5rem;
`

export const ImgStyled = styled.img`
  max-width: 30.75rem;
  width: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }
`

export const TextWrapper = styled.div`
`

export const Text = styled.p`
  color: ${props => props.theme['base-text']};
  line-height: 1.25rem;
`

export const BStyled = styled.b`
`
