import Layout from '@/components/Layout';
import Blog from '@/components/Blog';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <Layout>
      <div className="bg-breadcrumb container-fluid">
        <div
          className="container py-5 text-center"
          style={{ maxWidth: '900px' }}
        >
          <h3 className="display-3 mb-4 text-white">Our Blog</h3>
          <ol className="breadcrumb mb-0 justify-content-center">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Blog</li>
          </ol>
        </div>
      </div>
      <Blog />
    </Layout>
  );
}
