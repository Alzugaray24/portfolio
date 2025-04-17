"use client";

export function DiagonalSplit() {
  return (
    <div className="absolute inset-y-0 left-0 right-0 transform -z-0 hidden md:block">
      <div className="absolute top-0 bottom-0 right-1/2 left-0 bg-gradient-to-bl from-primary/5 to-purple-900/10 backdrop-blur-sm"></div>
      <svg
        className="absolute h-full w-[100px] right-1/2 -mr-12 fill-black/10 rotate-180"
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