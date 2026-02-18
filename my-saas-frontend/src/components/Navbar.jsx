import React from 'react';

const Navbar = () => { return ( <nav className="bg-green-600 p-4 text-white flex justify-between items-center"> <div className="text-2xl font-bold">PandaOrder 🐼</div> <div className="space-x-4 hidden md:flex"> <a href="#features" className="hover:underline">Features</a> <a href="#how" className="hover:underline">How It Works</a> <a href="#cta" className="hover:underline">Start</a> </div> </nav> ); };

export default Navbar;