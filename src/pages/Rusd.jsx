 
import { Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../template/Footer";
import Nav from "../template/Nav";
import Buy from "./Buy";
import DisplayPane from "../components/displayPane/DisplayPane";
 

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
const Rusd = () => {


    
  return (
     <>
     
     <Nav />

     <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xs-12">
            <div className="card"  style={{border: "0px"}}>
              <div className="card-body">
                <h1 style={{lineSpacing: "40px", wordSpacing: "1px"}}>
                  The multi-chain DeFi lending platform that maximizes capital efficiency on your assets
                </h1>

              <div className="row">
                <div className="col-6">
                <a href=""  className="btn form-control" style={{border: "1px solid black", borderRadius: "0px"}}>Documentation</a>
               

                </div>
                <div className="col-6">
                    <a href=""  className="btn form-control" style={{borderRadius: "0px", backgroundColor: "#11a0d4"}}>Lunch App</a>

                </div>

              </div>
               
            
              </div>
            </div>
           
          

        </div>
        <div className="col-md-6 col-lg-6 col-xs-12">
              <video poster="/images/cover.png"  width="400"  controls>
                  <source src="/assets/video/video.mp4" type="video/mp4" />
              </video>
                
              <p style={{textAlign: "center"}}>How RAMP DEFI works</p>
                 
        

        </div>
      </div>
     </div>


     <div className="container-fluid" style={{backgroundColor: '#f3f6f6', paddingTop: "100px", paddingBottom: "100px"}} >
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xs-12 center-block" style={{textAlign: "center"}}>
              <img className="" src="/images/earn.png" alt="Card image cap" style={{width: "200px"}} />
              <div className="card-body">
              <br/>
                <p><b>Earn yields while you borrow</b></p>
                <p className="card-text">
                Continue to earn yields on deposited assets while you borrow rUSD stablecoin
                </p>
              </div>
        </div>
        <div className="col-md-4 col-lg-4 col-xs-12" style={{textAlign: "center"}}>
              <img className="card-img-top center-block" src="/images/borrow.png" alt="" style={{width: "200px"}}/>
              <div className="card-body">
              <br/>
                <p><b>Borrow rUSD for additional liquidity</b></p>
                <p className="card-text">
                    Mint stablecoin against your deposited assets and pursue new investment opportunities.
                </p>
              </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xs-12" style={{textAlign: "center"}}>
                <img className="card-img-top" src="/images/crossChain.png" alt="Card image cap" style={{width: "200px"}}/>
                <div className="card-body">
                <br/>
                <p><b>Cross-chain rUSD transfers</b></p>
                <p className="card-text">
                Move stable coin seamlessly across multiple blockchain networks.
                </p>
                </div>
        </div>
      </div>
     </div>





     <div className="container-fluid" style={{ paddingTop: "100px", paddingBottom: "100px"}} >
      
      
      <div className="row">
        <div className="col-lg-1 col-md-1"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-lg-10 col-md-10" style={{textAlign: "center"}}>

        <div className="row">
            <div className="col-lg-6 col-md-6">
                <Buy />
            </div>

            <div className="col-lg-6 col-md-6">
              
              <DisplayPane />
                 
            </div>
        </div>



             
        </div> 
      </div>
     </div>
 

 <Footer />
</>
 
  );
};
export default Rusd;
