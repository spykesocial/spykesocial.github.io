import styled from "styled-components";

import {breakpoint} from 'styled-components-breakpoint';


// Removed height attribute, so that browser automatically resizes the image to fit the container
export const LogoContainer = styled.div`
  background: #101010;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint('mobile')`
      width: 80vw;
    `}

  ${breakpoint('tablet')`
      width: 50vw;
    `}

  ${breakpoint('desktop')`
      width: 30vw;
    `}


/* @media only screen and (max-width: 920px) {
    width: 80vw;
} */




`