import React from 'react';

interface SectionHeaderProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function SectionHeader({ title,variant="primary" }: SectionHeaderProps) {
  return (
    <>
      <h2 className={`text-4xl font-bold text-center ${variant === "primary" ? "text-primary" : "text-secondary"} mb-3`}>
        {title}
      </h2>
      <div className="flex justify-center mb-12">
        <div className="w-24 h-1 bg-accent rounded"></div>
      </div>
    </>
  );
} 