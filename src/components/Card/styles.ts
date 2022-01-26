import styled, { css } from 'styled-components';

interface PropsContainer {
  isDragging: boolean;
}

export const CardContainer = styled.div<PropsContainer>`
    display: flex;
  ${(props) => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none ;
    
    cursor: grabbing;

    p, img, header { 
      opacity: 0;
    }
  `}
`;

export const CardContainerClone = styled(CardContainer)`
  ${(props) =>
		props.isDragging &&
		css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
			padding-top: 31px;
			border-radius: 0;
			background: transparent;
			box-shadow: none;
			cursor: grabbing;
` }
`;

