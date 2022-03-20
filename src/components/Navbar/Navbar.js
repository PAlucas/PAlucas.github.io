import {NavbarDiv, DivForButton, ButtonForInformation, DivForImgAndName, ImgMe, H1Title} from'./NavbarStyled'
import foto from   './perfil.JPG'

function Navbar() {
    return (
        <NavbarDiv>
            <DivForImgAndName>
                <ImgMe src={foto}></ImgMe>
                <H1Title>PAlucas</H1Title>
            </DivForImgAndName>
            <DivForButton>
                <ButtonForInformation>
                    About me/Sobre mim
                </ButtonForInformation>
                <ButtonForInformation>
                    Projects/Projetos
                </ButtonForInformation>
                <ButtonForInformation>
                    Estudos/Studies
                </ButtonForInformation>
            </DivForButton>
        </NavbarDiv>
    );
}

export default Navbar;