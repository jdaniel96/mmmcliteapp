import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseWalletProvider } from "@binance-chain/bsc-use-wallet";
import bsc from "@binance-chain/bsc-use-wallet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <UseWalletProvider connectors={{ bsc }}>
      <Component {...pageProps} />
    </UseWalletProvider>
  );
}

export default MyApp;
