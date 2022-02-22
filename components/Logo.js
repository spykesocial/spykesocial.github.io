import { LogoStyled } from "./styledComponents/Logo.styled";

import Image from 'next/image'
import {LogoContainer} from "./styledComponents/LogoContainer.styled";
import { ComingSoonFontStyled, ComingSoonStyled } from "./styledComponents/ComingSoon.styled";


function Logo(props) {
    return (
        <LogoStyled>

            <LogoContainer>
                <Image src="/spyke.png" width="800vw" height="800vh"/>
            </LogoContainer>

            <ComingSoonStyled>
                <ComingSoonFontStyled>
                    <h1>Coming Soon · 2022</h1> 
                </ComingSoonFontStyled>
            </ComingSoonStyled>

        </LogoStyled>
    );
}

export default Logo;
