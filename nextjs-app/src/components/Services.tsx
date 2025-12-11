import React from 'react';

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Wildlife Tours</h3>
            <p>
              Our knowledgeable guides, passionate about wildlife and
              conservation, offer deep insights into the animals and their
              habitats, ensuring unforgettable experiences from safaris in
              iconic game reserves to tracking the &quot;Big Five.&quot;
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Hiking Tours</h3>
            <p>
              Our expert guides, equipped with in-depth knowledge of the
              terrain, lead you on thrilling hiking adventures through
              breathtaking landscapes, ensuring every step offers an
              unforgettable connection with nature.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-bold">Holiday tours</h3>
            <p>
              Whether you seek relaxation or adventure, we offer customizable
              holiday packages that cater to your needs. Enjoy seamless travel
              experiences to stunning destinations, unwind in luxury resorts,
              and immerse yourself in local culture, all while making lasting
              memories with your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
