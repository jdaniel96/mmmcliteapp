import { useState } from "react";
import Slider from "react-slick";
import NFT1 from "./assets/NFT1.png";
import NFT2 from "./assets/NFT2.png";
import carouselStyles from "./Carousel.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import mmmcLogo from "../../public/assets/mmmcLogo.png";
import verifiedImg from "../../public/assets/verified.png";
import { Button, Modal } from "react-bootstrap";
Button;

const img = [NFT1, NFT2, NFT2, NFT2, NFT1];
// console.log(img[0].src);

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
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // autoplay:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
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
            padding: "0.8em 0.8em",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image width={100} height={100} src={mmmcLogo} alt="mmmc Logo" />
          </div>
          <Button variant="success">Account</Button>
        </div>
        <Slider
          style={{ position: "relative", paddingTop: "1em" }}
          {...settings}
        >
          {img.map((img, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                className={`${
                  index === imageIndex
                    ? carouselStyles.active
                    : carouselStyles.slide
                }`}
                src={img.src}
                alt={img}
              />
            </div>
          ))}
        </Slider>
        <div
          style={{
            color: "white",
            backgroundColor: "rgba(34, 255, 0, 0.195)",
            borderRadius: "10px",
            marginTop: "1em",
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <p style={{ padding: "2px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et
            omnis. Officiis iusto
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            transform: "translateY(-15px",
          }}
        >
          <Button onClick={() => handleShow()} variant="info">
            VERIFY
          </Button>

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
