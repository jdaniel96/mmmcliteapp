import landingPageStyles from "../styles/landingPageStyles.module.css";

import { CarouselNFT } from "../components/_carousel/carousel";
import { Container } from "react-bootstrap";

export default function Auth() {
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

      <CarouselNFT />
    </>
  );
}
