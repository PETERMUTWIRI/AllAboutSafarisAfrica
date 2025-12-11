import React from 'react';
import Image from 'next/image';

const Packages = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Packages</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/packages-1.jpg"
              alt="Package 1"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Maasai Mara</h3>
              <p>
                Embark on breathtaking 12-day adventure through Maasai Mara,
                Nakuru, Amboseli, and Mount Kenya for $3,100, experiencing
                spectacular wildlife,culture.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/packages-2.jpeg"
              alt="Package 2"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Lake Nakuru</h3>
              <p>
                Enjoy a 2-day adventure to Lake Nakuru and Lake Bogoria for
                $449, featuring flamingos, wildlife, hot springs, guided
                drives, and comfortable accommodations.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg">
            <Image
              src="/img/packages-3.jpg"
              alt="Package 3"
              width={500}
              height={300}
              className="h-auto w-full"
            />
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Amboseli</h3>
              <p>
                Experience a 5-day safari to Amboseli, Tsavo East, and West for
                $1,150, featuring stunning wildlife, scenic views, guided
                drives, and cozy lodges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
