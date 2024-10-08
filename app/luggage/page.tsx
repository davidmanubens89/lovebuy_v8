"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { KeyFactors } from '@/components/KeyFactors';
import FilterSection from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';
import { ComparisonTable } from '@/components/ComparisonTable';
import { AnimatedFactsBanner } from '@/components/AnimatedFactsBanner';

const luggageItems = [
  { id: 1, name: 'TravelPro Maxlite 5', brand: 'TravelPro', price: 159, rating: 4.5, features: ['Lightweight', 'Expandable', 'Spinner wheels'], image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 2, name: 'Samsonite Omni PC', brand: 'Samsonite', price: 129, rating: 4.3, features: ['Hardside', 'TSA lock', 'Scratch-resistant'], image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 3, name: 'Delsey Paris Helium Aero', brand: 'Delsey', price: 149, rating: 4.4, features: ['Double spinner wheels', 'Expandable', 'Glossy finish'], image: 'https://images.unsplash.com/photo-1550089479-fe0e48e7d788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 4, name: 'American Tourister Moonlight', brand: 'American Tourister', price: 89, rating: 4.2, features: ['Affordable', 'Colorful designs', 'Expandable'], image: 'https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 5, name: 'Briggs & Riley Baseline', brand: 'Briggs & Riley', price: 299, rating: 4.7, features: ['Lifetime warranty', 'Expandable', 'High-quality build'], image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

const keyFactors = [
  { title: 'Size', description: 'Choose based on your travel needs', icon: 'Scale', hoverText: 'Consider carry-on restrictions and trip duration when selecting size.' },
  { title: 'Durability', description: 'Look for sturdy materials', icon: 'Shield', hoverText: 'Durable luggage can withstand the rigors of travel and last longer.' },
  { title: 'Mobility', description: 'Consider wheel types', icon: 'Move', hoverText: 'Spinner wheels offer better maneuverability, while two-wheel designs are more stable on uneven surfaces.' },
  { title: 'Security', description: 'Check for locking mechanisms', icon: 'Lock', hoverText: 'TSA-approved locks provide security while allowing necessary inspections.' },
];

const interestingFacts = [
  { text: 'The first wheeled suitcase was invented in 1970 by Bernard Sadow.', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { text: 'The global luggage market is expected to reach $79 billion by 2027.', image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { text: 'The heaviest piece of luggage allowed on most airlines is 32 kg (70 lbs).', image: 'https://images.unsplash.com/photo-1550089479-fe0e48e7d788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

export default function Luggage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Luggage Recommendations</h1>

      <KeyFactors factors={keyFactors} />

      <div className="mb-4">
        <Button 
          onClick={() => setShowFilters(!showFilters)}
          className="bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          {showFilters ? 'Hide Filters' : 'Refine Your Needs'}
        </Button>
      </div>

      <div className="flex">
        {showFilters && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setShowFilters(false)}></div>
            <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto">
              <FilterSection onClose={() => setShowFilters(false)} />
            </div>
          </>
        )}

        <div className="w-full">
          <ProductList products={luggageItems} totalModels={100} />
          <ComparisonTable products={luggageItems} />
        </div>
      </div>

      <div className="mt-12">
        <AnimatedFactsBanner facts={interestingFacts} />
      </div>
    </div>
  );
}