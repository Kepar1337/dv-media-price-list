import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AdFormats from '@/components/AdFormats';
import ChannelList from '@/components/ChannelList';
import Packages from '@/components/Packages';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { pricingData } from '@/data/pricing';

export default function Page() {
  const { brand, hero, adFormats, channels, packages, services, faq, contacts } =
    pricingData;

  return (
    <>
      <Header brand={brand} />
      <main>
        <Hero hero={hero} />
        <AdFormats formats={adFormats} />
        <ChannelList channels={channels} />
        <Packages packages={packages} />
        <Services services={services} />
        <FAQ faq={faq} />
        <Contacts contacts={contacts} />
      </main>
      <Footer brand={brand} />
    </>
  );
}
