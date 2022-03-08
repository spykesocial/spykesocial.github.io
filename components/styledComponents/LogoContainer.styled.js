import styled from "styled-components";

// Removed height attribute, so that browser automatically resizes the image to fit the container
export const LogoContainer = styled.div`
background: #101010;
width: 30vw;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 920px) {
    width: 50vw;
}
`