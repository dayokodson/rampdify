import { useWeb3React, Web3ReactHooks } from "@web3-react/core";

//import { CHAINS } from "../../../constants/networks";
import { useNativeBalance } from "../../../hooks/useNativeBalance";
//import { useWindowWidthAndHeight } from "../../../hooks/useWindowWidthAndHeight";
import { parseBigNumberToFloat } from "../../../utils/formatters";

 

const Infos = ({ chainId }: { chainId: ReturnType<Web3ReactHooks["useChainId"]> }) => {
  const { account, provider } = useWeb3React();
  const balance = useNativeBalance(provider, account);
  //const [width] = useWindowWidthAndHeight();
  //const isMobile = width <= 768;

  if (chainId === undefined) return null;
  //const name = chainId ? CHAINS[chainId]?.name : undefined;

  return (
    <div style={{color: "black"}}>
       
      Wallet Balance:
      <span style={{color: "black", fontWeight: "bold"}}>
        {balance
          ? `
          Ξ ${parseBigNumberToFloat(balance).toFixed(4)}`
          : 0}
      </span> 
      <br></br>  
      CTSI Token {'Ξ'} 
      <span style={{color:"black", fontWeight: "bold"}}>
        0
      </span>
      
    </div>
  );
};

export default Infos;
