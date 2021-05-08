import Document, {  Head, Html, Main, NextScript } from 'next/document';
import { Image } from 'react-bootstrap';
import Footer from '../components/Footer';
import { Menu } from '../components/Menu';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <header>
            <Menu />
          </header>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}