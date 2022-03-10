import styled from "styled-components"
import {breakpoint} from 'styled-components-breakpoint';


export const ComingSoonStyled = styled.div`

display: flex;
justify-content: center;
align-items: center;
`

export const ComingSoonFontStyled = styled.h1`
color: #808080;

${breakpoint('mobile')`
    font-size: 0.5rem;
  `}

${breakpoint('tablet')`
    font-size: 0.6rem;
  `}

${breakpoint('desktop')`
    font-size: 0.6rem;
  `}


`
