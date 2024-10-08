"use client"

import { useState } from 'react';
import { KeyFactors } from '@/components/KeyFactors';
import { ProductList } from '@/components/ProductList';
import { ComparisonTable } from '@/components/ComparisonTable';
import { AnimatedFactsBanner } from '@/components/AnimatedFactsBanner';
import FilterSection from '@/components/FilterSection';
import { Button } from '@/components/ui/button';

const washingMachines = [
  { id: 1, name: 'EcoWash Pro', brand: 'GreenTech', price: 599, rating: 4.5, features: ['Energy efficient', 'Large capacity', 'Smart controls'], image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 2, name: 'UltraClean 3000', brand: 'WashMaster', price: 499, rating: 4.3, features: ['Multiple wash cycles', 'Quiet operation', 'Stainless steel drum'], image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 3, name: 'SpeedWash Deluxe', brand: 'QuickClean', price: 649, rating: 4.7, features: ['Rapid wash cycle', 'Built-in water softener', 'Self-cleaning'], image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 4, name: 'SmartWash AI', brand: 'TechWash', price: 799, rating: 4.8, features: ['AI-powered wash cycles', 'Mobile app control', 'Auto-dispense detergent'], image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 5, name: 'EconoWash Basic', brand: 'BudgetClean', price: 349, rating: 4.0, features: ['Compact design', 'Easy-to-use controls', 'Energy-saving mode'], image: 'https://images.unsplash.com/photo-1585248669175-a119971c0daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

const interestingFacts = [
  { text: 'The average washing machine uses about 50 liters of water per cycle.', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { text: 'Modern washing machines can spin clothes at speeds up to 1,600 RPM.', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { text: 'The first electric-powered washing machine was invented in 1908.', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

const keyFactors = [
  { title: 'Capacity', description: 'Choose based on your laundry volume', icon: 'Scale', hoverText: 'Larger capacity means fewer loads, but may use more energy and water.' },
  { title: 'Energy Efficiency', description: 'Look for energy star ratings', icon: 'Zap', hoverText: 'Higher efficiency ratings can lead to significant savings on utility bills over time.' },
  { title: 'Wash Cycles', description: 'Consider your laundry needs', icon: 'Repeat', hoverText: 'More cycles offer greater versatility, but may increase complexity and cost.' },
  { title: 'Noise Level', description: 'Important for open floor plans', icon: 'Volume2', hoverText: 'Lower decibel ratings mean quieter operation, ideal for homes where the washer is near living spaces.' },
];

export default function WashingMachines() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-8">Washing Machine Recommendations</h1>

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
          <ProductList products={washingMachines} totalModels={100} />
          <ComparisonTable products={washingMachines} />
        </div>
      </div>

      <div className="mt-12">
        <AnimatedFactsBanner facts={interestingFacts} />
      </div>
    </div>
  );
}