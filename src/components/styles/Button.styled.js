import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  cursor: pointer;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
