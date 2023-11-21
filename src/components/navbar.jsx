import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import ThemeSlider from './ThemeSlider'
import LanguageSlider from './LanguageSlider'

import { usethemeVariable } from '../context/themeContext'
import { useLanguageVariable } from '../context/languageContext'
import { useTextData } from '../context/textContext'

function CollapsibleExample() {
  const themeData = usethemeVariable()
  const language = useLanguageVariable().language

  const text = useTextData().navbar

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme={themeData.theme}
    >
      <Container>
        <Navbar.Brand href="#home">Zuran Matias</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>{text.about[language]}</Nav.Link>
            <Nav.Link>{text.projects[language]}</Nav.Link>
            <Nav.Link>{text.academicTraining[language]}</Nav.Link>

            <NavDropdown title={text.settings[language]} id="collapsible-nav-dropdown">
              <div className='padding-left-2'  style={{width: "13rem"}}>
                <ThemeSlider />
                <NavDropdown.Divider />
                <LanguageSlider />
              </div>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>{text.contact[language]}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CollapsibleExample
