import { useState } from "react";
import Slider from "react-slick";
import NFT1 from "./assets/NFT1.png";
import NFT2 from "./assets/NFT2.png";
import carouselStyles from "./Carousel.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import mmmcLogo from "../../public/assets/mmmcLogo.png";
import binanceLogo from "../../public/assets/binanceLogo.png";
import metamaskLogo from "../../public/assets/metamaskLogo.png";
import verifiedImg from "../../public/assets/verified.png";
import landingPageStyles from "../../styles/landingPageStyles.module.css";
import { Button, Modal } from "react-bootstrap";
import welcomeMartians from "../../public/assets/Fonts/WelcomeMartians_Text.png";
import swipeMore from "../../public/assets/Fonts/SwipeMore_Text.png";
import connectYourWallet from "../../public/assets/Fonts/ConnectWallet_Text.png";
import animatedGif from "../../public/assets/Images/Phonelmag_GIF.gif";
import accessNft from "../../public/assets/Fonts/AccessYourNFT.png";
import createUserName from "../../public/assets/Fonts/CreateUsername_Text.png";
import skin from "../../public/assets/Images/Metadata_Skin.png";
import martianInstruction from "../../public/assets/Fonts/Password_Text.png";
import dashboard from "../../public/assets/Fonts/Dashboard_Text.png";
import { Row, Col, Form } from "react-bootstrap";
import brandLogo from "../../public/assets/Fonts/NQ64_Logo.png";
import verify from "../../public/assets/Images/Verify_Button.png";
import NFT from "../../public/assets/Martians/Martian_1.jpg";
const img = [NFT1, NFT2, NFT2, NFT2, NFT1];

export const CarouselNFT = function ({ toggle }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${carouselStyles.nextArrow} ${carouselStyles.arrow}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${carouselStyles.prevArrow} ${carouselStyles.arrow}`}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,

    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className={`${carouselStyles.carouselArea}`}>
        <div
          style={{
            display: "flex",

            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        <Slider style={{ position: "relative" }} {...settings}>
          <Row className="d-flex justify-content-evenly">
            <Image width={300} height={300} src={mmmcLogo} alt="mmmc Logo" />
            <Image objectFit="contain" src={welcomeMartians} alt="mmmc Logo" />
            <Image objectFit="contain" src={swipeMore} alt="mmmc Logo" />
          </Row>
          {/* ////// */}
          <div style={{ textAlign: "center" }}>
            <Image src={animatedGif} alt="gif" />
            <Image src={connectYourWallet} alt="connect" />
            <Image src={accessNft} alt="access nft" />

            <Row className="d-flex justify-content-evenly">
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
            </Row>
          </div>
          {/* /////// */}

          <Row className="d-flex justify-content-evenly">
            <Image src={skin} objectFit="contain" alt="nftImage" />
            <Image src={createUserName} objectFit="contain" alt="create" />
            <Image
              src={martianInstruction}
              objectFit="contain"
              alt="martian instruction"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ width: "70%", textAlign: "center" }}
            />
          </Row>
          {/* /////// */}
          <div>
            <Col className="d-flex flex-d-column justify-content-between align-items-center mb-2">
              <Image src={mmmcLogo} width={100} height={100} alt="mmmclogo" />
              <Button variant="unstyled" style={{ backgroundColor: "#5A7585" }}>
                Account
              </Button>
            </Col>
            <Image src={dashboard} alt="dashboard" />
            <h6 style={{ color: "white" }}>Your list of NFT Tickets</h6>
            <div style={{ backgroundColor: "#191a19", borderRadius: "16px" }}>
              <Col className="d-flex justify-content-evenly align-items-center">
                <Image
                  src={mmmcLogo}
                  objectFit="contain"
                  width={80}
                  height={80}
                  alt="mmmclogo"
                />

                <Image
                  src={verify}
                  objectFit="contain"
                  width={80}
                  height={50}
                  alt="mmmclogo"
                  onClick={() => handleShow()}
                />
                <Image
                  src={brandLogo}
                  objectFit="contain"
                  alt="brandLogo"
                  width={80}
                  height={80}
                />
              </Col>
              <Row>
                <div>
                  <Image height={200} objectFit="cover" src={NFT} alt="nft" />
                </div>
              </Row>
            </div>
          </div>
        </Slider>
        <div
          style={{
            color: "white",
            backgroundColor: "rgba(34, 255, 0, 0.195)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {
            <Modal
              style={{ marginTop: "8em" }}
              show={show}
              onHide={handleClose}
            >
              <Modal.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1 style={{ textAlign: "center", color: "green" }}>
                  VERIFIED!
                </h1>
                <div
                  style={{
                    padding: "1em",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={verifiedImg}
                    alt="verified"
                    objectFit="contain"
                  />
                </div>

                <Button variant="success" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Body>
            </Modal>
          }
        </div>
      </div>
    </>
  );
};
