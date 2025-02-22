'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const events = [
    { name: 'Mission Taljai', date: '16/02/2025', image: '/images/taljai.png' },
    { name: 'Mission Anandvan', date: '18/02/2025', image: '/images/anandvan.png' },
    { name: 'Mission Pune', date: '20/02/2025', image: '/images/pune_mission.png' }
  ];

  const handleAdoptClick = () => {
    router.push('/adopt');
  };

  const handleRaiseClick = () => {
    router.push('/raise');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <button className="text-xl">☰</button>
          <button className="text-xl">🛒</button>
        </div>
        <nav className="flex-grow text-center font-bold text-lg">
          <ul className="flex justify-center space-x-8">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/ngos">NGOs</Link></li>
            <li><Link href="/soultree">SoulTree</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-200 h-64 mt-4">
        <img src="/images/tree.png" alt="banner" 
          width={1500} 
          height={200} 
          className=" "
 />
      </div>

      {/* Registration Options Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">Join Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Farmer Registration Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Image
                src="/images/farmer.png"
                alt="Farmer"
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register as Farmer</h3>
              <p className="text-gray-600 mb-4">
                Join our network of farmers and help grow a greener future. Plant trees and earn rewards.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Accept tree planting requests
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Earn from each tree planted
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Get support and resources
                </li>
              </ul>
              <Link
                href="/farmer/register"
                className="block w-full bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Register as Farmer
              </Link>
            </div>
          </div>

          {/* NGO Registration Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Image
                src="/images/ngo.png"
                alt="NGO"
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register as NGO</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to amplify your environmental impact. Connect with donors and volunteers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-blue-500 mr-2">✓</span>
                  Receive donations and support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-blue-500 mr-2">✓</span>
                  Organize planting events
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-blue-500 mr-2">✓</span>
                  Access our volunteer network
                </li>
              </ul>
              <Link
                href="/ngo/register"
                className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Register as NGO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Adopt a Tree Section */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">ADOPT A TREE</h2>
          <Image 
            src="/images/adopt_a_tree.jpg" 
            alt="Adopt a Tree Process" 
            width={600} 
            height={200} 
            className="mx-auto"
          />
          <button 
            onClick={handleAdoptClick}
            className="mt-6 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Adopt Now
          </button>
        </div>
      </section>

      {/* Raise a Tree Section */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">RAISE A TREE</h2>
          <Image 
            src="/images/volunteer.jpg" 
            alt="Raise a Tree Process" 
            width={600} 
            height={200} 
            className="mx-auto"
          />
          <button 
            onClick={handleRaiseClick}
            className="mt-6 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Raise Now
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg text-center">
              {/* Event Image */}
              <Image 
                src={event.image} 
                alt={event.name} 
                width={200} 
                height={50} 
                className="mx-auto rounded-lg"
              />
              {/* Event Name & Date */}
              <h3 className="font-bold mt-4">{event.name}</h3>
              <p className="text-sm text-gray-600">On {event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}