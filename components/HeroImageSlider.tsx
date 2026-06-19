'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const IMAGES = [
  "https://drive.google.com/uc?export=view&id=1os4FFahaOxS6hx8beHYa5z68XmbX2smp",
  "https://drive.google.com/uc?export=view&id=1XuWgfxpA2aPY1J_-Vs176h3Ex4LzhXbS",
  "https://drive.google.com/uc?export=view&id=1iZeCxUf4q11z8L6g2XITKgVUiWgXXUHq"
];

export default function HeroImageSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 select-none pointer-events-none" onContextMenu={(e) => e.preventDefault()}>
      {IMAGES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`3d architectural rendering slide ${idx + 1}`}
          fill
          draggable={false}
          className={`object-cover bg-navy transition-opacity duration-1000 select-none pointer-events-none ${
            idx === currentIdx ? 'opacity-30' : 'opacity-0'
          }`}
          priority={idx === 0}
          referrerPolicy="no-referrer"
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
}
