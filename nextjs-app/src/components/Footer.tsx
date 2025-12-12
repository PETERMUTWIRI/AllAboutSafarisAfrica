import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p>🏢 CBD, Nairobi, Kenya</p>
              <p>✉️ allaboutsafarisafrica@gmail.com</p>
              <p>📞 +254-700-064-857</p>
              <div className="flex gap-3 mt-4">
                {[['Facebook', '#'], ['Twitter', '#'], ['Instagram', '#'], ['LinkedIn', '#']].map(([name, url]) => (
                  <Link key={name} href={url} className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500">
                    {name[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2-4 (simplified) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            {['About', 'Careers', 'Blog', 'Press'].map((item) => (
              <Link key={item} href="#" className="block mb-2 hover:text-green-400">
                → {item}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            {['Contact', 'Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="block mb-2 hover:text-green-400">
                → {item}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Payments</h4>
            <div className="flex gap-3 mt-4 text-2xl">
              {['💳', 'VISA', 'MASTERCARD', 'PAYPAL'].map((card) => (
                <span key={card}>{card}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>© 2024 All About Safaris Africa. All rights reserved. | Designed by HTML Codex</p>
        </div>
      </div>
    </footer>
  );
}