import styled from 'styled-components';
export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;

  button {
    cursor: pointer;
    padding: 10px 26px;

    font-weight: 600;
    font-size: 20px;
    color: #f5f5f5;

    border-radius: 8px;
    border: none;
    background: yellow;
    &:hover {
      scale: 1.1;
    }

    &::first-letter {
      text-transform: uppercase;
    }

    &:first-child {
      background: green;
    }
    &:nth-child(2) {
      background-color: orange;
    }
    &:last-child {
      background-color: red;
    }
  }
`;
