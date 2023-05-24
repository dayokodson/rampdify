
import { Link } from "react-router-dom";

 
const Nav = () => {


 
  return (
        <>  
             
              <div className="container-fluid" >
                <div className="row">
                  
                  <div className="col-12" style={{marginBottom: "20px"}}>
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/" style={{margin: "10px"}}>
                      <img src="/images/logo.png" style={{width:"120px"}} />
                    </a>
                      
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: '#484347'}}>
                          <span className="navbar-toggler-icon" style={{color: 'white'}}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           
                         <div className="col-12">
                            <ul className="nav justify-content-end" style={{fontWeight: 'bold'}}>
                              
                              <li className="nav-item">
                                <a className="nav-link" href="#about" style={{color: 'black'}}>About</a>
                              </li>
                              
                              
                              <li className="nav-item">
                                <Link className="nav-link" to="/buy-rusd" style={{color: 'black'}}>Buy rUSD</Link>
                              </li> 
                              
                               
                            </ul> 
                         </div>     
                       
                        
                        
                        </div>
                    
                    </nav>
                  </div>
                  
                </div>
              </div>
        </>
  );
};
export default Nav;
