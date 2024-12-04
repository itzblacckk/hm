export interface GuppyFish {
  id: string;
  commonName: string;
  scientificName: string;
  size: {
    length: number; // in centimeters
    weight: number; // in grams
  };
  habitat: 'Freshwater' | 'Saltwater' | 'Both';
  distribution: string[];
  diet: string[];
  conservationStatus: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  price: {
    min: number;
    max: number;
  };
  availability: {
    isAvailable: boolean;
    seasons: ('Spring' | 'Summer' | 'Fall' | 'Winter')[];
  };
  characteristics: {
    colors: string[];
    pattern: string;
    finType: string;
    specialFeatures: string[];
  };
  images: string[];
  careGuide: string;
  breedingTips: string;
}