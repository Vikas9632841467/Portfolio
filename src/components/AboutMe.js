import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { useNavigate } from 'react-router-dom';


const AboutMe = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

   

  return (
    <div className='component-main-div'>
        <Navbar  expand="md" className='Navbar-class' fixed='top' style={{whiteSpace : 'nowrap'}}>
          <div style={{textAlign : 'left', marginRight : 'auto', width : 'fit-content'}}>
            <Nav className="mr-auto" navbar style={{textAlign : "left"}}>
                <NavItem>
                <span className='navbar-name'>Vikas Singh</span>
                </NavItem>
            </Nav>
          </div>


          <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={isOpen} navbar style={{textAlign : 'right', marginLeft : 'auto', width : 'fit-content'}}>
                <Nav className='ml-auto' navbar style={{ textAlign : "right", marginLeft : "auto"}}>
                    <NavItem>
                        <button className='navbar-button-class' onClick={() => navigate('/')}>Home</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/about-me')}>About Me</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/skills')}>Skills</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/projects')}>Projects</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/experience')}>Experience</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/achievements')}>Achievements</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/publications')}>Publications</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/education')}>Education</button>
                    </NavItem>
                </Nav>
            </Collapse>
    </Navbar>


    <br />
    <br />
    <br />
    <br />
    <br />
    

    <div className='portfolio-body-div'>
        <div name="About Me" id='About-Me' className="element">
          <h4 style={{color:"rgb(16, 224, 16)"}}>About Me</h4>
          <br />
          <div className='section-content-div'>
          I am a Ph.D. scholar at NITK Surathkal, specializing in "Modeling and Analysis of Grid Connected Power Systems with Renewable Energy Integration". I have a strong academic record, including 3 published SCI journals, 2 book chapters, and 4 conference presentations. I have a diverse skill set in MATLAB, C, PYTHON, and more. As the Ph.D. Placement Head and an active reviewer, I can bridge academia and industry, showcasing qualities of gregariousness, flexibility, and collaborative leadership. Seeking a challenging role, I aim to leverage my technical talents in the dynamic field of Power Systems.
                <hr />
          </div>
        </div>
    </div>

        <br />
        <br />
        <br />
        <br />

    </div>
  )
}

export default AboutMe;