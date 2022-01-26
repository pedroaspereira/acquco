import styled from 'styled-components';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const DropdownContainerButton = styled(DropdownButton)`
  position: relative;
  align-items: center;
  height: 40px;
  width: 150px;
  background-color: #6584F9;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  gap: 0.5rem;
  margin-bottom: 15px;
`;

export const DropdownList = styled(Dropdown)``;