import { Buffer } from "buffer";

import { Layout } from "antd";
import { Link } from "react-router-dom";

//import background from "../assets/images/background.jpg";
import web3Boilerplate_logo from "../assets/images/web3Boilerplate_logo.png";
import ConnectAccount from "../components/Account/ConnectAccount";
import ChainSelector from "../components/ChainSelector";
import DisplayPane from "../components/displayPane/DisplayPane";
import "../App.css";
import { useWindowWidthAndHeight } from "../hooks/useWindowWidthAndHeight";

const { Header, Footer } = Layout;

const styles = {
  layout: {
    //backgroundImage: `url(${background})`,
    backgroundColor: "#1E1941",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    //height: "auto",
    overflow: "auto",
    fontFamily: "Sora, sans-serif"
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    padding: "0px 20px",
    paddingTop: "15px"
  },
  headerRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    paddingRight: "10px",
    fontSize: "15px",
    fontWeight: "600"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#041836",
    marginTop: "100px",
    padding: "10px",
    overflow: "auto"
  },
  footer: {
    marginTop: "100px",
    //position: "fixed",
    textAlign: "center",
    width: "100%",
    bottom: "0",
    color: "white",
    backgroundColor: "transparent"
  }
} as const;

function Dapp() {
  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <Layout style={styles.layout}>
      <Header style={{ ...styles.header, justifyContent: "space-between" }}>
          <Logo />
        <div style={styles.headerRight}>
          <ChainSelector />
          <ConnectAccount />
        </div>
      </Header>
      <div style={styles.content}>
        <DisplayPane />
      </div>

      <Footer style={styles.footer}>
        <div style={{ display: "block" }}>
          All right reserved Cartesi 
          
        </div>
      </Footer>
    </Layout>
  );
}

export const Logo = () => {
  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? (
        <div style={{ paddingTop: "30px" }}>
          <Link to="/en" >
            <img src={web3Boilerplate_logo} alt="web3Boilerplate_logo" width="40px" />
          </Link>
        </div>
      ) : (
        <div style={{ paddingTop: "45px" }}>
          <Link to="/en" >
            <img src={web3Boilerplate_logo} alt="web3Boilerplate_logo" width="40px" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Dapp;
