import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/img/about-imgnew.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Welcome to All About Safaris Africa
            </h2>
            <p className="mb-4">
              we believe every journey should be extraordinary. Founded with a
              vision to inspire wanderlust and connect travelers with authentic
              experiences, we’ve become a trusted name for adventurers,
              dreamers, and explorers
            </p>
            <p>
              What sets us apart? We listen. Every traveler has a unique story,
              and we’re here to help you write yours. With personalized
              service, a passion for exploration, and an unwavering commitment
              to creating unforgettable moments, we’re not just offering
              trips—we’re crafting memories.Let’s make your dream journey a
              reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
