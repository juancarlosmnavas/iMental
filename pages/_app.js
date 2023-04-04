import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
        <title>iMental</title>
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />

      </main>
    </>
  )
}


//scp -i /Users/juancarlosmartineznavas/Desktop/iMental-front.pem -r /Users/juancarlosmartineznavas/Desktop/NEXTJS-SFCC-APP iMental@172.31.14.35:/home/ec2-user
