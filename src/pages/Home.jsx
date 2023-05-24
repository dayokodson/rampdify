 
import { Button } from "antd";
import { Link } from "react-router-dom";
import Float from "../components/Float";
import Footer from "../template/Footer";
import Nav from "../template/Nav";

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
const Home = () => {


    
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
                    <a href="/buy-rusd"  className="btn form-control" style={{borderRadius: "0px", backgroundColor: "#11a0d4"}}>Lunch App</a>

                </div>

              </div>
               
            
              </div>
            </div>
           
          

        </div>
        <div className="col-md-6 col-lg-6 col-xs-12">
              <video poster="/images/cover.png" width="400" controls>
                  <source src="/assets/video/video.mp4" type="video/mp4" />
              </video>
                
              <p style={{textAlign: "center"}}>How RAMP DEFI works</p>
                 
        

        </div>
      </div>
     </div>


     <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xs-12"></div>
        <div className="col-md-6 col-lg-6 col-xs-12">
              <video  src="/assets/video/video2.mp4" type="video/mp4" autoPlay loop> </video>
                
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
        <div className="col-12"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-12" style={{textAlign: "center"}}>
            <div className="card" style={{border: "0PX"}}>
             <div className="card-body">

              <h2>RAMP DEFI Ecosystem</h2>
                <p style={{textAlign: "center"}}>
                Ramp aims to empower users with access to a global, blockchain-agnostic liquidity network. rUSD <br/>can be minted on Binance Smart Chain and Polygon, with more chains in the near future.
                </p>
                
              </div>
              <img className="card-img-top" src="/images/b.png" alt="Card image cap" />
            
            </div>
              
        </div> 
      </div>
     </div>



     <div className="container-fluid" style={{backgroundColor: '#0d285a', paddingTop: "100px", paddingBottom: "100px"}} >
      
      
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-lg-6" style={{textAlign: "center"}}>
             

              <h2 style={{color: "white"}} id="about">About RAMP DEFI</h2>
                <p style={{textAlign: "center", color: "#11b7d5"}}>
                RAMP DeFi is a multi-chain DeFi protocol that helps asset owners achieve capital efficiency by offering a powerful and comprehensive
                 solution to multi-task users’ crypto-assets, maximizing the value and returns. Users can earn optimal high-yield returns from their 
                 deposited assets, collateralized stablecoin against them at the same time to get extra liquidity to pursue other investment opportunities, with great accessibility across multiple blockchain networks.
                </p>
                <a className="btn"  style={{borderRadius: "0px", backgroundColor: "#11a0d4", padding: "20px 20px 20px 20px"}} href="#" ><b>Learn More</b></a>
                 
        </div> 
      </div>
     </div>






     <div className="container-fluid" style={{ paddingTop: "100px", paddingBottom: "100px"}} >
      
      
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-lg-10" style={{textAlign: "center"}}>
             

              <h2 style={{marginBottom: "50px"}}>Investors</h2>
              <img className="" src="https://rampdefi.com/static/ef74dca8637c18f9fa3ae98437397463/3fc98/alameda.png" style={{margin: "5px 5px 5px 5px"}}/>
              
              <img className="" src="https://rampdefi.com/static/85f58cc17f724a0cfa239c1eb02f1ba4/3fc98/aparafi.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/77683e2325143f02f21ad723259cf14b/3fc98/mechanism.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/76fc416a6d0cae4f5aca1d18945acaae/3fc98/arrington.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/1e50ac7d3cff5390bc5e3942c12a5e85/3fc98/iost.png" />
             
              <img className="" src="https://rampdefi.com/static/fe58b5babca19fc55b69a10992560d1a/3fc98/torchlight.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/500e0143529aa04e58c77d32072224dd/3fc98/ruby.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/36df01529f9d5c3ec2c2137da062666b/3fc98/block.png" style={{margin: "5px 5px 5px 5px"}}/>
           
              <img className="" src="https://rampdefi.com/static/dd3d7ac0076a0e7269fb54b9d06a80ca/3fc98/signum.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/b88891eb84bf9e6782b28cc076fa686d/3fc98/mw.png" />
              <img className="" src="https://rampdefi.com/static/3f9a0c267c97c5175e31dc2f60d42ccb/3fc98/layerx.png" style={{margin: "5px 5px 5px 5px"}}/>
              <img className="" src="https://rampdefi.com/static/bf3540ed75bb23d99d83cc916679e0df/3fc98/orth.png" style={{margin: "5px 5px 5px 5px"}}/>
                 
        </div> 
      </div>
     </div>


     <div className="container-fluid" style={{backgroundColor: "#f3f6f6", paddingTop: "100px", paddingBottom: "100px"}} >
      
      
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1"  style={{textAlign: "center"}}>
         
        </div>
        <div className="col-lg-10" style={{textAlign: "center"}}>
        <h2 style={{marginBottom: "50px"}}>Supported Blockchains</h2>
          
          <div className="row">
            <div className="col-lg-6" style={{marginBottom: "30px"}}>
              <img className="" src="/images/binance.png" style={{margin: "5px 5px 5px 5px"}}/>
            </div>
            <div className="col-lg-6" style={{marginBottom: "30px"}}>
              <img className="" src="/images/polygon.png" style={{margin: "5px 5px 5px 5px"}}/>
            </div>
            <div className="col-lg-6" style={{marginBottom: "30px"}}>
            <img className="" src="/images/polygon.png" style={{margin: "5px 5px 5px 5px"}}/>
             
            </div>
            <div className="col-lg-6" style={{marginBottom: "30px"}}>
            <img className="" src="/images/solana.png" style={{margin: "5px 5px 5px 5px"}}/>
              
            </div>
          </div>
               
        </div> 
      </div>
     </div>


     <Float />
<Footer />


    

  
      </>
 
  );
};
export default Home;
