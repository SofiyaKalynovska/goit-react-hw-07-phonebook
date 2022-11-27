import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
  width: 300px;
  @media (min-width: 480px) {
    width: 420px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
`;