import {NavbarDiv, DivForButton, ButtonForInformation, DivForImgAndName, ImgMe, H1Title, ButtonForCell} from'./NavbarStyled'
import foto from   './perfil.JPG'
import IconCell from './icon.svg'

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
                <ButtonForCell>
                    <img src={IconCell}></img>
                </ButtonForCell>
        </NavbarDiv>
    );
}

export default Navbar;