import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Main from '../components/Main/main'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coffe House Delivery</title>
        <meta name="description" content="The Coffe House Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
