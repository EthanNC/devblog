import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = styled(Link)`
  border: 1px solid #FF8C00;
  border-radius: 25px;
  color: #FF8C00;
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  margin: 0 10px;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-color: #FFA500;
  }
`;
export default Button;