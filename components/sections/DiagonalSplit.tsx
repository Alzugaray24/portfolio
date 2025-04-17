"use client";

export function DiagonalSplit() {
  return (
    <div className="absolute inset-y-0 left-0 md:left-1/2 right-0 transform md:-translate-x-8 -z-0 hidden md:block">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-900/20"></div>
      <svg
        className="absolute h-full w-[100px] left-0 fill-black/40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 100,0 0,100" />
      </svg>
    </div>
  );
} 