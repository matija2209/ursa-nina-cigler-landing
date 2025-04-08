// src/components/dev/SectionVariantWrapper.tsx
import React from 'react';

interface SectionVariantWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const SectionVariantWrapper: React.FC<SectionVariantWrapperProps> = ({ title, children }) => {
  const variants = React.Children.toArray(children);

  return (
    <div className="border-t-4 border-dashed border-blue-300 my-12 py-8 bg-blue-50/30"> {/* Outer wrapper styling */}
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6 px-4">
        {title}
      </h2>
      <div className="space-y-8"> {/* Spacing between variants */}
        {variants.map((variant, index) => (
          <div key={index} className="relative border border-dashed border-gray-400 mx-4 p-4 rounded"> {/* Wrapper for each variant */}
            {/* Overlay Label */}
            <div className="absolute top-1 left-1 z-10 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded shadow pointer-events-none">
              Varianta {index + 1}
            </div>
            {/* Render the actual section component */}
            {variant}
          </div>
        ))}
      </div>
    </div>
  );
};