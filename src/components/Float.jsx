 
import { Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../template/Footer";
import Nav from "../template/Nav";
 
const Float = () => {


    
  return (
     <>
     
        <div className="dropup  m-5 fixed-bottom">
            <a className="btn"
               href="/buy-rusd"
               style={{border: "1px solid #dfdcdc", backgroundColor: "white"}}
               
            >
               
                <span className="">
                    <img src="/images/favicon.png" width="30px" height="30px"/>
                    &nbsp;
                    RAMP Price
                </span>
            </a>
            
        </div>


  
      </>
 
  );
};
export default Float;
