import { Breadcrumb } from '@/components/Breadcrumb';
import { AboutSection } from '@/components/AboutSection';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

export const metadata = {
  title: 'Our Story | All About Safaris Africa',
  description: 'Discover the passion behind All About Safaris Africa and why we craft unforgettable journeys.',
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb 
        title="About Us"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '#' },
          { label: 'About', href: '/about' },
        ]}
      />
      <AboutSection />
      <Newsletter />
      <BackToTop />
    </>
  );
}