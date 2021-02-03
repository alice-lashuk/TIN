import { Navbar, Nav} from 'react-bootstrap';
import LanguageSelector from './LanguageSelector';
import { withTranslation } from 'react-i18next';
import React from 'react';

function Navbarcustom(props) {
  const t = props.t;
  let logout = "";
  let register = "";
  let login = "";
  if(!!localStorage.getItem("jwt_token")) {

    logout = <Nav.Link href="/logout" onClick={props.logout}>{t('logout.label')}</Nav.Link>
  } else {
    register = <Nav.Link href="/register">{t('register.label')}</Nav.Link>;
    login = <Nav.Link href="/login">{t('login.label')}</Nav.Link>;
  }
  return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">{t('home.label')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">  
              {logout}
              {login}
              {register} 
            </Nav>
            <Nav>
            <LanguageSelector/>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}

export default withTranslation()(Navbarcustom);