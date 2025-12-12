import { Breadcrumb } from '@/components/Breadcrumb';
import { GalleryContent } from '@/components/GalleryContent';

export const metadata = {
  title: 'Gallery | All About Safaris Africa',
  description: 'Explore our safari portfolio through stunning photography.',
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb 
        title="Our Gallery"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '#' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />
      <GalleryContent />
    </>
  );
}