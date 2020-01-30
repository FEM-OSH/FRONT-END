import styled from 'styled-components';
// import { Logo } from '../../images/logo.png'

export const Logo = styled.div`
  background-image: url('../../images/logo.png');
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '58px'};
  /* 
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  cursor: pointer; */
`;
