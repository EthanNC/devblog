import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #FF8C00;
  border-radius: 15px;
  color: #FF8C00;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    stroke: #FF8C00;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #FFA500;
  }
`;

export default SocialLink;