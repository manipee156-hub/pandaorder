import React from 'react';

const LandingHero = () => { return ( <section className="bg-green-100 p-10 text-center md:text-left md:flex md:items-center md:justify-between"> <div className="md:w-1/2"> <h1 className="text-4xl md:text-5xl font-bold text-green-700">Welcome to PandaOrder 🐼</h1> <p className="mt-4 text-green-800">The easiest way to manage your online store orders.</p> <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">Get Started</button> </div> <div className="md:w-1/2 mt-6 md:mt-0"> <img src="https://via.placeholder.com/400x300" alt="Landing Illustration" className="mx-auto" /> </div> </section> ); };

export default LandingHero;
