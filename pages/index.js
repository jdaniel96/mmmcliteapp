import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import landingPageStyles from "../styles/landingPageStyles.module.css";

import { useWallet } from "@binance-chain/bsc-use-wallet";
import { Button } from "react-bootstrap";
import { useState } from "react";

import { CarouselNFT } from "../components/_carousel/carousel";
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
      <Container className={landingPageStyles.container}>
        <Col style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
          <CarouselNFT />
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "start",
              // padding: "0 1em 0 1em",
            }}
          >
            {/* {showButton && (
              <Button
                onClick={() => walletConnectorHandler()}
                style={{ margin: "1em" }}
                variant="primary"
              >
                Connect your Wallet!
              </Button>
            )} */}

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
