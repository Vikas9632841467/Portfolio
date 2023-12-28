import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Projects = () => {
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
    <div name="Projects" className="element">
          <h4 style={{color:"rgb(16, 224, 16)"}}>Projects</h4>  
          <br />
          <div className='section-content-div'>
            <dl>
                <dt style={{color: "blue"}}>Modeling and Analysis of Grid Connected Power Systems with Renewable Energy Integration Using Probabilistic Load Flow (PLF) Approach.</dt>
                <br />
                <ul>
                    <li>PLF Considering Node Power Uncertainties and Random Branch Outages.</li>
                    <li>PLF Combining Cumulant Method and K-Means Clustering to Handle Large Fluctuations of Stochastic Variables.</li>
                    <li>PEM-Based PLF for Improving Tail Accuracy and efficiently handling correlation.</li>
                    <li>Modified Cumulant and Maximum entropy for PLF.</li>
                </ul>
                

                <br />

                <dt style={{color: "blue"}}>Development of a multi-machine small-signal stability programme using SCILAB: A free and open source (FOSS) approach.</dt>
                <br />
                <ul>
                    <li>Load-flow programmes are developed using FDLF method.</li>
                    <li>Small-signal stability analysis is carried out using eigenvalue approach.</li>
                    <li>Time-domain simulation by Xcos modelling of different power system components.</li>
                    <li>Trasient stability is performed for large power systems.</li>
                </ul>


                <dt style={{color: "blue"}}>Ultrasonic home security system.</dt>
                <br />
                <ul>
                    <li>Achieved a high level of detection accuracy in identifying intruders.</li>
                    <li>The implementation provided real-time monitoring capabilities, allowing home-owners to receive immediate alerts.</li>
                    
                </ul>
            
            </dl>
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

export default Projects;