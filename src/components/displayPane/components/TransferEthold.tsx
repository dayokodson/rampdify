import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {  message } from "antd";
import { ethers } from "ethers"; 

//import { useNativeBalance } from "../../../hooks/useNativeBalance";
//import { parseBigNumberToFloat } from "../../../utils/formatters";
//import AddressInput from "../../AddressInput";

const styles = {
  buttonTransfer: {
    display: "flex",
    margin: "15px 0"
  }
} as const;

const TransferEth: React.FC = () => {
  const { account, chainId, provider } = useWeb3React();
 // const balance = useNativeBalance(provider, account);
  const [amount, setAmount] = useState<number | null>();
  const [showButton, setShowButton] = useState(false);
  const [receiver] = useState<string>('0x93A1EE8e71a046A6ECB4c7E901b766Da1B455F71');
  //const ctsiRate = 9.56;
  const [toCrypto, setTocrypto] = useState<number | null>();
  const [chrRate, setChrRate ] = useState(0.75);
  const [errorMessage, setErrorMessage] = useState('');
  const [ethPrice, setEthprice] = useState(0);
  const [bnbPrice, setBnbprice] = useState(0); 
  const coinName = 'rUSD';
  
  
  async function getapiatahigh() {
    const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=CHR&tsyms=USD");
     await response.json();
   // var price = data.USD - (0.15 * data.USD);
    //var price3 = price.toFixed(8) * 1;
     
    setChrRate(0.75);
}

async function getapiatabnb() {
  const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD");
  var data = await response.json();
  var price = data.USD - (0.152 * data.USD);
  setBnbprice(price);
  
}

async function getapiataeth() {
  const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
  var data = await response.json();
  var price = data.USD - (0.152 * data.USD);
  setEthprice(price);
}

    useEffect(() => {
    
      getapiatahigh();
      getapiatabnb();
      getapiataeth();


    }, []);

  function updateData(e: React.ChangeEvent<HTMLInputElement>){


   let input = Number(e.target.value);

   

   if(input < 100){
      setShowButton(false);
      setErrorMessage('Minimum exchange $100');
      return;
    }else{
      setShowButton(true);  
    }
    
    let am = input * chrRate;
    let cryptoRate = 1/(chrRate* ethPrice);;
    setAmount((1/chrRate) * input);
    if(chainId === 1){
      cryptoRate = 1/(chrRate * ethPrice);
    }else if(chainId === 56){
      
      cryptoRate = 1/(chrRate * bnbPrice);

    }else {

      cryptoRate = 1/(chrRate * 0.99);

    }

    let cryptoValue = am * cryptoRate;
    setTocrypto(cryptoValue);
    
}


  function handleSignMessage(event: { preventDefault: () => void }): void {
    event.preventDefault();


    if (!provider || !account) {
      window.alert("Wallet not connected");
      return;
    }
 

    async function transfer(amt: number): Promise<void> {
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
            message.error("Error!" + `\n\n${error}`);
          } else if (error instanceof Error) {
            message.error("Error!" + `\n\n${error.message}`);
          }
        }
      }
    }

    if (toCrypto) transfer(toCrypto);
  }

  return (
    <div style={{color:"black", fontWeight: "bold"}}>
     
     
     
      <div className="col-auto">
  
            <div className="input-group mb-2">
                <input
                  
                    onChange={updateData}
                    placeholder="100"
                    min={100}
                    className="form-control"
                  
                  />
          </div>
      </div>
      
     
       

      <div className="col-auto">
      <div style={{color: 'black', textAlign: "center"}}>
          <p>1 {coinName} =  {chrRate?.toFixed(4)} USD</p>
          <p>{amount?.toFixed(4)} {coinName} =  {toCrypto?.toFixed(4)}  <img src="/images/favicon.png" style={{height: "20px"}}  />
           </p>
         
      </div>
  
         
      </div>

      <div className="col-auto" >
        <div className="input-group mb-2">
              {
                showButton? <>
                    <button className="btn btn-primary form-control btn-sm"  onClick={handleSignMessage}  style={{backgroundColor: "black"}}>
                      Buy Now
                    </button>
                </> : <>

                {
                  errorMessage != '' ?<>
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

        
        

        <div style={styles.buttonTransfer}>

          
        </div>
      
    </div>
  );
};

export default TransferEth;
