import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { message } from "antd";
import { ethers } from "ethers";

import DisplayPane from "../DisplayPane";
import ConnectAccount from "../../Account/ConnectAccount";
import ChainSelector from "../../ChainSelector";
 
 

const TransferEth = () => {

  const { account, chainId, provider, isActive } = useWeb3React();
 
 // const balance = useNativeBalance(provider, account);
  const [amount, setAmount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [receiver] = useState('0x93A1EE8e71a046A6ECB4c7E901b766Da1B455F71');
 //const ctsiRate = 9.56;
  //const [toCrypto, setTocrypto] = useState(0);
  const [rate, setRate] = useState('');
  const [bnbPrice, setBnbprice] = useState(289.01);
  const [btcPrice, setBtcprice] = useState(21675.22);
  const [busdPrice, setBusdprice] = useState(1);
  const [usdtPrice, setUsdtprice] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentmethod, setPaymentmethod] = useState('bnb');
  const [inputAmount, setInputamount] = useState(0);
  const [highAmount, setHighAmount] = useState(0);
  const [cryptoTopay, setCryptoTopay] = useState(0);
  const [usdtTohigh, setUsdttohigh] = useState(0.057756); 
  const btcWallet = 'bc1qtdnznpkzjsygh3fpy9u0z44ln405ppwhy773de';
  const bnbWallet = 'bnb1662hjmppp9gafrvp57kyzsskzzcxrlkcdlqldr';
  const usdtWallet = '0x2C61Ec7391088002e9241c779674A35830C0D860';
  const busdWallet = '0x2C61Ec7391088002e9241c779674A35830C0D860';

  async function getapiatabnb() {
      const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD");
      var data = await response.json();
      
      if(data.USD){
        var price = data.USD;
        var price1 = price.toFixed(4);
      
        setBnbprice(price1);
      }
   
      
    }

    async function getapiatabtc() {
      const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
      var data = await response.json();

      if(data.USD){
      var price = data.USD;
      var price2 = price.toFixed(6);
       
        setBtcprice(price2);
      }
    }

      
      async function getapiatahigh() {
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=RAMP&tsyms=USD");
        var data = await response.json();

        if(data.USD){
          var newP = data.USD + 0.015696;
          var price = newP  * 0.86;
          var price3 = price.toFixed(4);
          setUsdttohigh(price3);

        }


    }



  
  useEffect(() => {
 
    getapiatabnb();
    getapiatabtc();  
    getapiatahigh();

}, []);




  function paymentMethodChange(payMethod){

    if(payMethod == ""){
      setShowButton(false);
      return false;
    }
    setPaymentmethod(payMethod);
    updateInputAmount(inputAmount);
   
  }


 function updateInputAmount(amount){

  if(amount < 100){
    setShowButton(false);
    return false;
  }
  setShowButton(true);
   setInputamount(amount);
   let myRate = rate;

   if(chainId == 1){
        
    myRate = btcPrice;

  }else  if(chainId == 56){
    myRate = bnbPrice;

  }else {
     
    myRate = 0.99;

  }
    var cryptoAmount = (1/myRate) * amount;
    //set crypto amount
    setCryptoTopay(cryptoAmount.toFixed(4));
    //now set high token to receive
    var highrate = 1/usdtTohigh * amount;
    setHighAmount(highrate.toFixed(4)); 
    

 } 


  function handleSignMessage(event) {
    event.preventDefault();


    if (!provider || !account) {
      window.alert("Wallet not connected");
      return;
    }
 

    async function transfer(amt){
      const amtStrg = amt.toString();
       
      const tx = {
        to: receiver,
        value: ethers.utils.parseEther(amtStrg)
      };

      if (provider) {
        try {
          const receipt = await provider.getSigner(account).sendTransaction(tx);
          message.info(`Success!\n\nTx Hash: ${receipt.hash}`);
        } catch (error) {
          if (typeof error === "string") {
              message.error("Transaction failed to proceed. Please try again later ");
           
          } else if (error instanceof Error) {
            message.error("Transaction failed! Kindly check your wallet balance and try again");
          }
        }
      }
    }

    if (cryptoTopay) transfer(cryptoTopay);
  }

  return (
    <>
    
              <div className="card">
                <ConnectAccount />
                 
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                      <div className="row text-center mb-2"></div>
                      <div className="form-group mt-4" >
                        <div id="swapInfo" className="mb-3">
                          
                          <h4>You Pay  </h4>
                          <div className="coinMax">
                            <p>In (USD)</p>
                              <input
                                onChange={(e) => updateInputAmount(e.target.value)}
                                required=""
                                id="pay-amount"
                                type="number"
                                className="form-control"
                                placeholder="100"
                                style={{  marginBottom: 5 }}
                              />
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
                          showButton ? <>


                                  {isActive && (
                                            <>
                                                  <button
                                                      onClick={handleSignMessage}
                                                      style={{
                                                        
                                                        
                                                        border: "none",
                                                        paddingLeft: 10,
                                                        paddingRight: 20
                                                      }}
                                                      className="bt btn"
                                                      type="button"
                                                      id="pay-button"
                                                  >
                                                Buy RAMP Now
                                              </button>
                                            </>
                                  )}


                                

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
   
            
 
    </>


   
  );
};

export default TransferEth;
