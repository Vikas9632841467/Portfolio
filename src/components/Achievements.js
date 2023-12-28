import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Achievements = () => {
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
                <Nav className='ml-auto' navbar style={{textAlign : "right", marginLeft : "auto"}}>
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
    <div name="Achievements" className="element">
          <h4 style={{color:"rgb(16, 224, 16)"}}>Achievements</h4>  
          <br />
          <div className='section-content-div'>
            <ul>
                <li>
                    Best paper award, 2nd International Symposium on Sustainable Energy and Technological Advancements, NIT Meghalaya, INDIA.
                    <a href="https://drive.google.com/file/d/1W50wj-5FiHfJnLZzenQD3lxAO_FxZeLv/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{margin : "10px"}} className='achievements-button-class'>Certificate</Button></a>

                </li>
                <br />
                <li>Scholarship Prize for Outstanding Student Performance, RIT Roorkee, Uttarakhand.
                    

                </li>
            </ul>

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

export default Achievements;