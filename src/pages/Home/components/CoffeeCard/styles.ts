import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 1.25rem 1.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ImgStyled = styled.img`
  height: 7.5rem;
  margin-top: -2.7rem;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const ChipsContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const Chip = styled.div`
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.8125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`

export const Title = styled.strong`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.625rem;
  color: ${props => props.theme['base-subtitle']};
`

export const Description = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin-top: 0.5rem;
  color: ${props => props.theme['base-label']};
`

export const PriceContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Currency = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme['base-text']};
`

export const PriceValue = styled.b`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.125rem;
  color: ${props => props.theme['base-text']};
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
