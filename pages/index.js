import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import MarqueeComponent from '../components/Marquee'
import Marquee from '../components/Marquee'
import Service from '../components/Service'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
      </Head>
      <div className='bg-primary'>
        <Header />
        <Hero />
        <Skills />
        <MarqueeComponent />
        <Service />
      </div>
    </>
  )
}
