"use client";

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import axios from "axios";
import { Movie } from "@prisma/client";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export default function SlidesBanner() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("/api/movie");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="lg:h-[750px] md:h-[500px] h-[300px] w-full m-auto py-2 px-6 md:px-9 lg:px-24 relative group">
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 50.99%, rgba(0, 0, 0, 0.00) 100.92%), url(${movies[currentIndex]?.bannerImage})`,
        }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
      >
        <div className="md:flex flex-col h-full lg:w-1/2 justify-center lg:px-20 md:px-14 transition duration-500 hidden gap-4">
          <h2 className="text-5xl font-bold ">{movies[currentIndex]?.title}</h2>
          <div className="flex flex-col gap-4">
            <p className="font-semibold md:text-sm lg:text-base">
              {movies[currentIndex]?.synopsis}
            </p>
            <div className="flex gap-4 items-center justify-start">
              <Link
                href={`/${movies[currentIndex]?.id}`}
                className="flex md:px-4 px-2 py-2 gap-2 justify-center items-center text-lg bg-white text-black rounded-md hover:bg-silver-tree-500 hover:text-white font-semibold active:scale-95 transition"
              >
                More details
              </Link>
              <button className="bg-silver-tree-500 h-10 w-10 rounded-full flex items-center justify-center hover:text-silver-tree-500 hover:bg-white transition active:scale-95">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* LeftArrow */}
      <div className="opacity-0 group-hover:opacity-100 transition absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* RightArrow */}
      <div className="opacity-0 group-hover:opacity-100 transition absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Dots */}
      <div className="flex top-4 justify-center py-2 gap-4">
        {movies.map((movie, movieIndex) => (
          <div key={movieIndex}>
            <RxDotFilled
              className={`h-3 w-3 rounded-full cursor-pointer ${
                currentIndex === movieIndex ? "bg-silver-tree-500" : "bg-black"
              }`}
              onClick={() => setCurrentIndex(movieIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
