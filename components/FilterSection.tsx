"use client"

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FilterSectionProps {
  onClose: () => void;
}

export default function FilterSection({ onClose }: FilterSectionProps) {
  const [budget, setBudget] = useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('');
  const [wheelType, setWheelType] = useState('');
  const [lockType, setLockType] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState<string[]>([]);

  const brands = ['TravelPro', 'Samsonite', 'Delsey', 'American Tourister', 'Briggs & Riley'];
  const sizes = ['Carry-on', 'Medium', 'Large'];
  const materials = ['Softside', 'Hardside'];
  const wheelTypes = ['Spinner (4 wheels)', 'Roller (2 wheels)'];
  const lockTypes = ['TSA Lock', 'Combination Lock', 'Key Lock'];
  const features = ['Expandable', 'USB Charger', 'RFID Protection', 'Water Resistant', 'Built-in Scale'];

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSpecialFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filter Options</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div>
        <Label className="font-medium mb-2">Maximum Budget: ${budget[1]}</Label>
        <Slider
          min={0}
          max={500}
          step={10}
          value={budget}
          onValueChange={setBudget}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="font-medium mb-2">Brands</Label>
        {brands.map(brand => (
          <div key={brand} className="flex items-center space-x-2 mt-1">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandChange(brand)}
            />
            <Label htmlFor={brand} className="text-sm">{brand}</Label>
          </div>
        ))}
      </div>

      <div>
        <Label className="font-medium mb-2">Size</Label>
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map(s => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="font-medium mb-2">Material</Label>
        <Select value={material} onValueChange={setMaterial}>
          <SelectTrigger>
            <SelectValue placeholder="Select material" />
          </SelectTrigger>
          <SelectContent>
            {materials.map(m => (
              <SelectItem key={m} value={m}>{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="font-medium mb-2">Wheel Type</Label>
        <RadioGroup value={wheelType} onValueChange={setWheelType}>
          {wheelTypes.map(w => (
            <div key={w} className="flex items-center space-x-2 mt-1">
              <RadioGroupItem value={w} id={w} />
              <Label htmlFor={w} className="text-sm">{w}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label className="font-medium mb-2">Lock Type</Label>
        <Select value={lockType} onValueChange={setLockType}>
          <SelectTrigger>
            <SelectValue placeholder="Select lock type" />
          </SelectTrigger>
          <SelectContent>
            {lockTypes.map(l => (
              <SelectItem key={l} value={l}>{l}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="font-medium mb-2">Special Features</Label>
        {features.map(feature => (
          <div key={feature} className="flex items-center space-x-2 mt-1">
            <Checkbox
              id={feature}
              checked={specialFeatures.includes(feature)}
              onCheckedChange={() => handleFeatureChange(feature)}
            />
            <Label htmlFor={feature} className="text-sm">{feature}</Label>
          </div>
        ))}
      </div>

      <Button onClick={onClose} className="w-full">Apply Filters</Button>
    </div>
  );
}