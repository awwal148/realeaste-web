'use client';
import React, { useState, useEffect, useContext } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CiSearch } from "react-icons/ci";
import { slides } from './constant';
import Buy from './assets/iconss/BuyAHome.svg'
import Rent from './assets/iconss/RentAHome.svg'
import Sell from './assets/iconss/Neighborhoods.svg'
import { AuthContext } from './context/AuthContext';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from 'next/navigation';
import ListingItem from './components/ListingItem';
import { db } from './config/firebase';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { userCredential } = useContext(AuthContext);
  const router = useRouter();
  
  // State for listings
  const [offerListings, setOfferListings] = useState(null);
  const [rentListings, setRentListings] = useState(null);
  const [saleListings, setSaleListings] = useState(null);

  // Fetch listings from Firebase
  useEffect(() => {
    async function fetchListings() {
      console.log("Fetching Listings...");
      try {
        const listingsRef = collection(db, "listings");

        // Queries for different listing types
        const offerQuery = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const rentQuery = query(
          listingsRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const saleQuery = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );

        // Execute queries concurrently
        const [offerSnap, rentSnap, saleSnap] = await Promise.all([
          getDocs(offerQuery),
          getDocs(rentQuery),
          getDocs(saleQuery),
        ]);

        // Process query snapshots
        const fetchedOfferListings = [];
        const fetchedRentListings = [];
        const fetchedSaleListings = [];

        offerSnap.forEach((doc) => {
          fetchedOfferListings.push({ id: doc.id, data: doc.data() });
        });
        rentSnap.forEach((doc) => {
          fetchedRentListings.push({ id: doc.id, data: doc.data() });
        });
        saleSnap.forEach((doc) => {
          fetchedSaleListings.push({ id: doc.id, data: doc.data() });
        });

        // Log results for debugging
        // console.log("Offer Listings: ", fetchedOfferListings);
        // console.log("Rent Listings: ", fetchedRentListings);
        // console.log("Sale Listings: ", fetchedSaleListings);

        // Update state with fetched data
        setOfferListings(fetchedOfferListings);
        setRentListings(fetchedRentListings);
        setSaleListings(fetchedSaleListings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    }

    fetchListings();
  }, []);
  
 const handleClick = () => {
    if (!userCredential) {
      router.push('/sign-in');
    } 
  };


  // Function to move to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to move to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to jump to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play effect: move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change the slide every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, nextSlide]);

  // Check if listings are still loading
  // if (offerListings === null || rentListings === null || saleListings === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className=''>
      <div className='md:h-[780px] w-full m-auto px-4 relative group overflow-hidden'>
        {/* Slide Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url.src})` }}
          className='py-[3rem] h-[50vh] md:h-screen w-full bg-center bg-cover rounded-md mt-4 duration-500 items-center content-center justify-center'
        >
          <div className='bg-black max-sm:mx-6 md:w-[50%] z-30 mx-auto my-auto py-2 bg-opacity-40'>
            <p className='z-50 md:text-6xl text-3xl font-bold text-center px-4 text-white'>
              Discover a Place You’ll Love to Live
            </p>
          </div>
          {/* <div className='flex z-50 max-sm:p-8 md:w-[35%] mx-auto my-auto justify-center items-center mt-7 border-none'>
            <input type='text' placeholder='Input Location...' className='h-[4rem] w-full rounded-l-[3rem] outline-none' />
            <button className='flex bg-orange-500 rounded-r-[2rem] text-white py-2 h-[4rem] w-[4rem] justify-center items-center'>
              <CiSearch size={30} />
            </button>
          </div> */}
        </div>

        <div className='max-sm:hidden'>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>

        {/* Dots */}
        <div className='flex justify-center py-2'>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-gray-900' : 'text-gray-400'}`}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {/* Offer Listings */}
        {offerListings && offerListings.length > 0 && (
          <div onClick={handleClick} className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
            <Link href="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more offers
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div onClick={handleClick} className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for rent</h2>
            <Link href="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for rent
              </p>
            </Link>
            <ul onClick={handleClick} className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Sale Listings */}
        {saleListings && saleListings.length > 0 && (
          <div onClick={handleClick} className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for sale</h2>
            <Link href="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for sale
              </p>
            </Link>
            <ul onClick={handleClick} className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <p className='text-center text-4xl font-bold mt-4 text-[#121212]'>See how BuildGrain can help</p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-12 px-4">
  <div className="text-center max-w-sm mx-4 mb-4">
    <div className='flex flex-col justify-center items-center mb-4'>
      <Image src={Buy} alt="Buy a home" className="" />
    </div>
    <p className="text-3xl font-bold mt-4 text-[#121212]">Buy A Home</p>
    <p className="mt-2 text-gray-700">
      With over 1 million+ homes for sale available on the website, BuildGrain can match you with a house you will want to call home.
    </p>
    <button onClick={handleClick} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150">
      <Link href="/category/sale">
        Find A Home
      </Link>
    </button>
  </div>

  <div className="text-center max-w-sm mx-4 mb-4">
    <div className='flex flex-col justify-center items-center mb-4'>
      <Image src={Rent} alt="Rent a home" className="" />
    </div>
    <p className="text-3xl font-bold mt-4 text-[#121212]">Rent A Home</p>
    <p className="mt-2 text-gray-700">
      With over 1 million+ rental listings available on our website, BuildGrain can help you find the perfect house to rent.
    </p>
    <button onClick={handleClick} className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-150">
      <Link href="/category/rent">
        Find A Rental
      </Link>
    </button>
  </div>
  <div className="text-center max-w-sm mx-4 mb-4">
    <div className='flex flex-col justify-center items-center mb-4'>
      <Image src={Sell} alt="Rent a home" className="" />
    </div>
    <p className="text-3xl font-bold mt-4 text-[#121212]">Sell A Home</p>
    <p className="mt-2 text-gray-700">
      With over 1 million+ potential buyers visiting our website, BuildGrain can help you sell your house quickly and efficiently. 
    </p>
    <button onClick={handleClick} className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150">
      <Link href="/profile">
        Sell A Home
      </Link>
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default Page;
