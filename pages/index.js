import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import landingPageStyles from "../styles/landingPageStyles.module.css";
import mmmcLogo from "../public/assets/mmmcLogo.png";
import binanceLogo from "../public/assets/binanceLogo.png";
import metamaskLogo from "../public/assets/metamaskLogo.png";
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  const [selectWallet, setSelectWallet] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const [binanceWallet, setBinanceWallet] = useState(false);
  const [metamaskWallet, setMetamaskWallet] = useState(false);

  const walletConnectorHandler = () => {
    setSelectWallet(true);
    setShowButton(false);
  };

  const wallet = useWallet();

  console.log(typeof binanceWallet);
  console.log(metamaskWallet);
  const connectMetamaskWallet = () => {
    wallet.connect(); // by default it pulls metamask wallets
    setSelectWallet(false);
  };

  const connectBinanceWallet = () => {
    wallet.connect("bsc");
    setSelectWallet(false);
  };

  return (
    <>
      <video
        className={landingPageStyles.videoContainer}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="../assets/SpaceBackgroundVideo.mp4" type="video/mp4" />
      </video>

      <Container className={landingPageStyles.container}>
        <Col style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Image width={150} height={150} src={mmmcLogo} alt="mmmc Logo" />
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "start",
              padding: "0 1em 0 1em",
            }}
          >
            {showButton && (
              <Button
                onClick={() => walletConnectorHandler()}
                style={{ margin: "1em" }}
                variant="primary"
              >
                Connect your Wallet!
              </Button>
            )}

            {selectWallet && (
              <>
                <Image
                  className={landingPageStyles.binance}
                  width={65}
                  height={65}
                  src={binanceLogo}
                  alt="mmmc Logo"
                  onClick={() => connectBinanceWallet()}
                />
                <Image
                  className={landingPageStyles.metamask}
                  width={65}
                  height={65}
                  src={metamaskLogo}
                  alt="mmmc Logo"
                  onClick={() => connectMetamaskWallet()}
                />
              </>
            )}
            {wallet.account && (
              <>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <Link href="/auth">
                  <Button style={{ margin: "1em" }} variant="primary">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Row>
        </Col>
      </Container>
    </>
  );
}
