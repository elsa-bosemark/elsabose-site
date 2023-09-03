"use client";
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Add a scroll event listener to update the button's visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling effect
    });
  };

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-5 right-5 z-50 mb-20'>
          <button
            className=" bg-white w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={scrollToTop}
          >
            <IoIosArrowUp />
          </button>
        </div>
      )}
    </>
  );
}
