import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  margin-top: 0.9rem;
  padding: 2.5rem;
`

export const PriceWrapper = styled.div`
  margin: 1.5rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
`

export const PriceDetails = styled.div<{ isTotal?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props =>  props.isTotal 
    ? props.theme['base-subtitle'] 
    : props.theme['base-text']
  };
  font-weight: ${props => props.isTotal 
    ? '700'
    : '400'
  };
   font-size: ${props => props.isTotal 
    ? '1.25rem'
    : '1rem'
  };
`

export const SpanStyled = styled.span``
