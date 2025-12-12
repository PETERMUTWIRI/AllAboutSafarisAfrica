'use client'; 
import { Hero } from '@/components/Hero';
import { JourneyOverview } from '@/components/JourneyOverview';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

// Define the type for each experience
interface Experience {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

// Explicitly type the array
const experiences: Experience[] = [
  {
    title: "Great Migration Camp",
    location: "Masai Mara, Kenya",
    duration: "7 Days",
    price: "From $4,200",
    image: "/images/migration-camp.jpg",
    description: "Witness nature's grandest spectacle from a private mobile camp that follows the herds."
  },
  {
    title: "Gorilla Trekking",
    location: "Bwindi, Uganda",
    duration: "5 Days",
    price: "From $3,800",
    image: "/images/gorilla-trek.jpg",
    description: "Come face-to-face with mountain gorillas in their misty forest kingdom."
  },
  {
    title: "Coastal Dhow Safari",
    location: "Lamu, Kenya",
    duration: "4 Days",
    price: "From $2,600",
    image: "/images/lamu-dhow.jpg",
    description: "Sail through history on a traditional dhow, exploring Swahili culture."
  }
];

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <Hero />
      <JourneyOverview />
      <ExperiencesSection experiences={experiences} />
      <Newsletter />
      <BackToTop />
    </main>
  );
}