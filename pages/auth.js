import landingPageStyles from "../styles/landingPageStyles.module.css";

import { CarouselNFT } from "../components/_carousel/carousel";
import { Container } from "react-bootstrap";

export default function Auth() {
  return (
    <>
      <video
        className={landingPageStyles.videoContainer}
        autoPlay={true}
        muted={true}
        loop={true}
        id="myVideo"
        controls={false}
        playsInline={true}
        src="../assets/SpaceBackgroundVideo.mp4"
      />

      <CarouselNFT />
    </>
  );
}
