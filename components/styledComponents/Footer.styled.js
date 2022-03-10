import styled from "styled-components";

import {breakpoint} from 'styled-components-breakpoint';


export const FooterStyled = styled.div`
background: #000;
height: 6vh;
display: flex;
justify-content: center;
align-items: center;
`;


export const FooterTextStyled = styled.div`
color: #fff;
margin: 10px;
text-align: center;


${breakpoint('mobile')`
    font-size: 0.8rem;

  `}

${breakpoint('tablet')`
    font-size: 0.9rem;
  `}

${breakpoint('desktop')`
    font-size: 1rem;
  `}

`