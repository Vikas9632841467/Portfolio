import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";

import { useNavigate } from 'react-router-dom';



const Publications = () => {
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

  <div name="Publications" className="element">
          <h4 style={{color:"rgb(16, 224, 16)"}}>Publications</h4>  
          <br />
          <div className='section-content-div'>

                    
                

                    <h5 style={{color : "Blue"}}>International Journals</h5>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Probabilistic Load Flow Approach Combining Cumulant Method and K-means Clustering to Handle Large Fluctuations of Stochastic Variables". IEEE Transactions on Industry Applications.

                        <a href="https://ieeexplore.ieee.org/abstract/document/10025562" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>
                        <br />
                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Probabilistic load flow for wind integrated power system considering node power uncertainties and random branch outages". IEEE Transactions on Sustainable Energy, 14(1), 482-489".

                        <a href="https://ieeexplore.ieee.org/abstract/document/9928399" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>
                        <br />
                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Uncertainty handling techniques in power systems: A critical review". Electric Power Systems Research, 203, 107633.

                        <a href="https://www.sciencedirect.com/science/article/pii/S0378779621006143?via%3Dihub" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                    </ul>

                    <h5 style={{color : "Blue"}}>Book Chapters</h5>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>”Singh, V., Moger, T., & Jena, D. Probabilistic Load Flow Study Considering Fuzzy Logic-Based Contingency Sequencing for Network Outages". In Sustainable Energy and Technological Advancements (pp. 57-70). Springer Series.

                        <a href="https://link.springer.com/chapter/10.1007/978-981-99-4175-9_6" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>
                        <br />
                        <li className='publications-li-class'>”Singh, V., Moger, T., & Jena, D. Probabilistic Steady-State Analysis of Power Systems Integrated with Renewable Generations". In Renewable Energy Integration to the Grid (pp. 199-238). CRC Press.

                        <a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003271857-9/" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        </li>
                        
                    </ul>
                
                    <h5 style={{color : "Blue"}}>International Conferences</h5>
                    <ul style={{listStyleType : "dot"}}>
                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Modified cumulant based probabilistic load flow considering correlation between loads and wind power generations". In 2022 IEEE IAS Global Conference on Emerging Technologies (GlobConET) (pp. 227-232). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9872363" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                        <br />


                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Probabilistic Load Flow Considering Load and Wind Power Uncertainties using Modified Point Estimation Method". In 2022 3rd International Conference on Smart Grid and Renewable Energy (SGRE) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9774214" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                        <br />
                        <li className='publications-li-class'>"Singh, V., Moger, T., & Jena, D. Comparative evaluation of basic probabilistic load flow methods with wind power integration". In 2020 3rd International Conference on Energy, Power and Environment: Towards Clean Energy Technologies (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/9404524" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                        <br />
                        <li className='publications-li-class'>"Singh, V., Navada, H. G., & Shubhanga, K. N. Large power system stability analysis using a FOSS-based tool: SciLab/Xcos. In 2018 20th National Power Systems Conference (NPSC) (pp. 1-6). IEEE.

                        <a href="https://ieeexplore.ieee.org/abstract/document/8771782" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='success' size='sm' style={{padding : "2px"}} className='publications-button-class'>Check paper</Button></a>
                        
                        </li>
                        <br />

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

export default Publications;