import Bryanston from '@/components/Bryanston';
import ContactForm from '@/components/ContactForm';
import HomeSectionOne from '@/components/HomeSectionOne';
import HomeSectionTwo from '@/components/HomeSectionTwo';
import Slides from '@/components/Slides'


export default function Home() {
  return (
    <main className="">
      <Slides />
      <HomeSectionOne />
      <Bryanston />
      <HomeSectionTwo />
      <ContactForm />
    </main>
  );
}
