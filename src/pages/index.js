import Features from '../components/Feautures';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Example from '../components/Hero';
import Process from '../components/Process';
import Companies from '../components/Companies';
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Gnovation</title>
        <meta name="description" content="A tech House dedicated to invernting the future today.Our team of experts specializes in software engineering, innovation research, market analysis, and mechatronic engineering to ensure we deliver the most cutting-edge solutions.Our product matrix serves broad markets including security, manufacturing, real estate, money markets, and transport." />
      </Head>
      <Example />
      <Features />
      <Process />
      <Companies />
    </div>
  );
}
