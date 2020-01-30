import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../reusables';

export const Button = styled.button`
    background: ${props => props.background};
    border: none;
    border-radius: .5rem;
    color: ${props => props.fontColor || 'white'};
    padding: .4rem 1.3rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-family: 'Calibri', sans-serif;
    :focus {
      outline: none;
    }
    :disabled {
      background-color: ${colors.disabled};
      cursor: not-allowed;
    }
    ${props => props.xLarge && css`
      font-weight: 500;
      font-size: 1.5rem;
      width: 25rem;
    `};

    ${props => props.large && css`
      font-weight: 600;
      font-size: 2.5rem;
    `};

    ${props => props.medium && css`
      font-weight: 500;
      font-size: 1.8rem;
    `};

    ${props => props.small && css`
      font-weight: 200;
      font-size: 1.5rem;
    `};
  `;

Button.propTypes = {
  fontColor: PropTypes.string,
};
