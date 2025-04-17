"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block glass-card px-16 py-4 mb-10">
          <h1 className="text-xl tracking-widest font-normal text-white">CONTACT</h1>
        </div>

        <p className="text-sm text-center max-w-md mx-auto leading-relaxed text-gray-300">
          Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as possible.
        </p>

        {/* Vector decoration */}
        <div className="flex justify-center my-6">
          <div className="relative">
            <svg
              width="170"
              height="12"
              viewBox="0 0 170 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="opacity-60"
            >
              <rect width="170" height="12" fill="url(#pattern0_1_880)" />
              <defs>
                <pattern id="pattern0_1_880" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_1_880" transform="scale(0.00588235 0.0833333)" />
                </pattern>
                <image
                  id="image0_1_880"
                  width="170"
                  height="12"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAMCAYAAADyMyZxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERGOUZCMTkxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERGOUZCMTgxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0543MwAAAuxJREFUeNrsmVuITVEYx/e4XwrjmBljGrfJMCbJJZ0cpKHcXiiah2ki5FkSkhLywINIEkVIUcotuY94oYmQ6wi5Ny7JMWPcx/H/8p36+lrrrDnnbdn7q1/NmvPb++w96z9rrb12EISj4uAi6OXwysAVMMDhFYA6MCrH6+kJzoGJDq8TOAzmObw8sA0sD6LytsaDJEiBGyDf4g0Br9h7BgZmCOkd9j6CMTmE9Bof/wVMyhDSo+z9BtUZQrqdPWJF1OV+1lTQIjryJogZvJHgvfCeg0EGrxQ8Ed4nMDaLkNaLY7+DGZaQHhfeH7DEEtIdwiM2Rl3ub1WpsN4CfQzeCBXWF2CwwSsBj4RHI/Y4xzXQsuO6OOYbmG4J6UkV0sWWkO5UId0QdbX/NVmF9TZP47oqwTvhveS1q65+oEGFNW757nxedqTdr2CaJaSnhNcKFlpCukuFdN3/3Hl5linFl/oJ9mXh03rwNOjO7btgCvigvOHgEiji9mselR8rr5i9Ydz+DGaCq8LpDS6A0dymkM4B59W5uoBjYpSlkC4C+w19tluNsmvBese9L+B/BG8r5THJHO6XnrSbxTnugUKDVwEahUdhLTd4fcED4VFYE/xZjNfE6c9aeM2sqys4Kzx6eKo1eO3AHvU3WNPG+0563tehCyrVBNAkznNfjJ6yaKR8Izz6eajBK+JzpD0692xeC8uQVhmO7cZbVTKkNQavPdir7n91FvfsdVBpGlnp8WzwA2zN8dgELwN6cPshB+mt8sp5ei/hdiN7DcorZK/S8F003c8Clw0hPSFG2VYeSQ8ZQkoj6Xzxu1VgUxb3uxR0jh5V/N9jTXFYix17rCkOa4VjjzVNc2De2KeQ1qmRtNoykh5Q54w29kNYcRHW+sD+9qqMdwDIewr6W7wCMeU38TLDVB3BEfZ+Bfa3TzTrbREhXRZ1WXiLNuzPBP825DMV7anSq9hShxfjaT7h8DqAg2BuG65xM0/foay/AgwAzVefd5V3qsgAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="ENTER YOUR NAME*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light resize-none relative z-10 text-white"
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button
            type="submit"
            className="glass-button"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
} 