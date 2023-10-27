import Bryanston from '@/components/Bryanston';
import ContactForm from '@/components/ContactForm';
import HomeHero from '@/components/HomeHero';
import HomeSectionOne from '@/components/HomeSectionOne';
import HomeSectionTwo from '@/components/HomeSectionTwo';
import HomepageAbout from '@/components/HomepageAbout';
import PropertiesGrid from '@/components/PropertiesGrid';
import Slides from '@/components/Slides'


export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <HomepageAbout />
      <PropertiesGrid />
      {/* <HomeSectionTwo /> */}
      {/* <ContactForm /> */}
    </main>
  );
}
