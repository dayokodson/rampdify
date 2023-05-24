
import { Link } from "react-router-dom";

const styles = {
    accordion: {
        'a, a:visited, a:hover, a:active': {
            color: '#1E1941',
            border: "0px"
          },
        textAlign: 'left', 
        backgroundColor: "#1E1941", 
        border: "0px",
    }
}
const Footer = () => {


 
  return (
        <>

  {/* Start Footer Section */}
    
  <div className="container-fluid" style={{backgroundColor: "#0d285a", paddingTop: "100px", paddingBottom: "100px"}} >
      
      
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-lg-10" style={{textAlign: "center"}}>
         
          <a href="/"  className="btn"  style={{color: "white"}}>Documentation</a> 
          <a href="/"   className="btn"  style={{color: "white"}}>App</a>
          <a href="/"   className="btn"  style={{color: "white"}}>Developer</a>
          <a href="/" className="btn"    style={{color: "white"}}>Brand Assets</a>
          <a href="/" className="btn"  style={{color: "white"}}>FAQ</a>

           
               
        </div> 
      </div>

      <p style={{textAlign: 'center', color: "white", marginTop: "60px"}}>&copy; RAMP DEFI</p>
     </div>


  {/* End Footer Section */}
        </>
  );
};
export default Footer;
