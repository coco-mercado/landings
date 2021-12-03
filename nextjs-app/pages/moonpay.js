import Link from "next/link";
import Router from "next/router";

import Head from "next/head"
import crypto from "crypto"

const originalUrl = 'https://buy-staging.moonpay.com?apiKey=pk_test_L4jGJTCGUnNylrw0A0FUYxNlj3BL4tW&currencyCode=eth&walletAddress=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

const signature = crypto
  .createHmac('sha256', 'sk_test_ZUck7wkqkjjZWxAwmyzV7A0gCXx0ie1')
  .update(new URL(originalUrl).search)
  .digest('base64');

const urlWithSignature = `${originalUrl}&signature=${encodeURIComponent(signature)}`;

console.log(urlWithSignature)

class Moonpay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <Head>
        <meta name="description" content="Buy cUSD" />
        <meta property="og:title" content="Coco Pago" key="ogtitle" />
        <meta property="og:description" content="Buy cUSD" />
        <meta property="og:image" content="https://aliados.cocomercado.com/images/mach.png" key="ogimage" />
        <meta property="og:url" content="https://aliados.cocomercado.com/mach" key="ogurl" />
        <title>Coco Pago - Moonpay</title>
      </Head>
      <div>
        <iframe
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            frameborder="0"
            height="100%"
            src="https://buy-staging.moonpay.com?apiKey=pk_test_L4jGJTCGUnNylrw0A0FUYxNlj3BL4tW"
            width="100%"
            className="moonpay_iframe"
            >
            <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      </>
    );
  }
}

export default Moonpay;