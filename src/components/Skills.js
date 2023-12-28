import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Table } from "reactstrap";


import { useNavigate } from 'react-router-dom';


const Skills = () => {

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
    <div name="Skills" className="element">
    
          <h4 style={{marginLeft : '0px', color:"rgb(16, 224, 16)"}}>Skills</h4>  
          <br />
          <div className='section-content-div'>
            
                
                <hr />
            <div>

                <Table responsive style={{ width : "500px" , backgroundColor : "transparent"}} className='table-transparent'>
                    <tbody style={{backgroundColor : "transparent"}}>
                        
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Python</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={70} max={100} className='progress-class' /></td>
                            
                            
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>MATLAB</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            
                        </tr>

                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Simulink</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>PSCAD</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={80} max={100} className='progress-class' /></td>
                            
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>C</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={80} max={100} className='progress-class' /></td>
                            
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>Scilab</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            
                        </tr>
                        <tr>
                            <td style={{backgroundColor : "transparent", color : 'white'}}>LaTex</td>
                            <td style={{backgroundColor : "transparent", color : 'white'}}><progress value={90} max={100} className='progress-class' /></td>
                            
                        </tr>
                        
                        
                    </tbody>
                </Table>
               
                
                
            </div>
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

export default Skills;