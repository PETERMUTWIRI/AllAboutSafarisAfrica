import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogContent } from '@/components/BlogContent';
import { BlogPost } from '@/types/blog';

export const metadata = {
  title: 'Travel Blog | All About Safaris Africa',
  description: 'Read inspiring safari stories and travel tips from our expert guides.',
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Adventures Trip",
    excerpt: "I've always wanted to try something adventurous, and this trip didn't disappoint. Climbing the rugged trails and soaking in the stunning views was an experience I'll cherish forever. It was the perfect mix of challenge and fun.",
    author: "Royal Hamblin",
    date: "14 Jan 2025",
    likes: "1.7K",
    comments: "1K",
    image: "/images/blog-1.jpg",
    slug: "adventures-trip"
  },
  {
    id: 2,
    title: "Adventures Trip",
    excerpt: "What an unforgettable experience! The team went above and beyond to make sure everything was perfect. From camping under the stars to exploring hidden waterfalls, every moment felt like a dream come true.",
    author: "Royal Hamblin",
    date: "2 Jan 2025",
    likes: "1.7K",
    comments: "1K",
    image: "/images/blog-2.jpg",
    slug: "unforgettable-experience"
  },
  {
    id: 3,
    title: "Adventures Trip",
    excerpt: "This adventure trip exceeded all my expectations! From ziplining through lush forests to kayaking in crystal-clear waters, every activity was pure magic. The guides were amazing, and I felt safe while having the time of my life.",
    author: "Royal Hamblin",
    date: "18 Jan 2025",
    likes: "1.7K",
    comments: "1K",
    image: "/images/blog-3.jpg",
    slug: "expectations-exceeded"
  }
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb 
        title="Our Blog"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '#' },
          { label: 'Blog', href: '/blog' },
        ]}
      />
      <BlogContent posts={blogPosts} />
    </>
  );
}