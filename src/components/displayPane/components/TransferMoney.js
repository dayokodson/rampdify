import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Button, InputNumber, message } from "antd";
import { ethers } from "ethers";
//import { CHAINS } from "../../../constants/networks";

//import { useNativeBalance } from "../../../hooks/useNativeBalance";
//import { parseBigNumberToFloat } from "../../../utils/formatters";
//import AddressInput from "../../AddressInput";

const styles = {
  buttonTransfer: {
    display: "flex",
    margin: "15px 0"
  }
};

const TransferEth  = () => {
  const { account, provider, chainId } = useWeb3React();
  //const balance = useNativeBalance(provider, account);
  const [amount, setAmount] = useState<number | null>(100);
  const [usdAmount, setUsdamount] = useState(100);

  const [receiver] = useState<string>('0x93A1EE8e71a046A6ECB4c7E901b766Da1B455F71');
  //const accountName = chainId ? CHAINS[chainId]?.name : undefined;
  function handleSignMessage(event){
    event.preventDefault();
    


    if (!provider || !account) {
      window.alert("Wallet not connected");
      return;
    }

    if(usdAmount < 100){
      window.alert("Sorry, minimum of $100");
      
      return;
    }

    if(usdAmount?.toString === null){

      window.alert("Sorry, input amount");
       
      return;

    }
    
     
    //base on the chain, if chain id is 56
    if(chainId === 1){

      //1 eth = $ 1200
      let rate = 1/1200 * usdAmount;
     
      setAmount(rate);
      console.log(amount);
    }else if(chainId === 56){
      //1 eth = $ 250
      let rate = 1/250 * usdAmount;
      
      setAmount(rate);
      console.log(amount);

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
            message.error("Error!" + `\n\n${error}`);
          } else if (error instanceof Error) {
            message.error("Error!" + `\n\n${error.message}`);
          }
        }
      }
    }

    if (amount) transfer(amount);
  }

  return (
    <div style={{ width: "40%", minWidth: "250px" }}>
      <p>Enter Amount in USD </p>
      <h3>
      <InputNumber
          value={usdAmount}
          onChange={setUsdamount}
          placeholder="Amount"
          min={100}
          //max={balance ? parseBigNumberToFloat(balance) : 0}
          style={{ width: "100%", height: "80%", marginBlock: "auto" }}
        />
      </h3>
        
      <div style={{ display: "inline-flex", gap: "10px", width: "100%" }}>
        <br />
        

        <div style={styles.buttonTransfer}>
          <Button   shape="round" onClick={handleSignMessage}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransferEth;
