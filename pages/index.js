import Header from "../components/Header";
import Footer from "../components/Footer";
import Slogan from '../components/slogan';
import MeditationSection from '../components/MeditationSection';
import SocialHeader from '../components/SocialHeader'



export default function Home() {
  return (
  <div style={{width:"auto", background:'#fff'}}>
    <SocialHeader />
    <Header />
    <Slogan/>
    <MeditationSection/>
    <Footer />
  </div>
  );
}
