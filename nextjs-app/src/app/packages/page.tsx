import { Breadcrumb } from '@/components/Breadcrumb';
import { PackagesContent } from '@/components/PackagesContent';

export const metadata = {
  title: 'Safari Packages | All About Safaris Africa',
  description: 'Explore our curated safari packages from $449. Masai Mara, Amboseli, Nakuru & more.',
};

export default function PackagesPage() {
  return (
    <>
      <Breadcrumb 
        title="Travel Packages"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '#' },
          { label: 'Packages', href: '/packages' },
        ]}
      />
      <PackagesContent />
    </>
  );
}