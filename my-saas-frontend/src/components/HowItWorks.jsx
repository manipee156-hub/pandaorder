import React from 'react';

const steps = [ { step: 1, title: 'Sign Up', desc: 'Create an account quickly' }, { step: 2, title: 'Connect Store', desc: 'Link your orders' }, { step: 3, title: 'Manage Orders', desc: 'Track and update easily' }, ];

const HowItWorks = () => { return ( <section id="how" className="p-10 bg-green-50"> <h2 className="text-3xl font-bold text-green-700 text-center mb-8">How It Works</h2> <div className="grid md:grid-cols-3 gap-6"> {steps.map((s, i) => ( <div key={i} className="p-6 border rounded shadow hover:shadow-lg transition text-center"> <div className="text-4xl mb-2 font-bold text-green-600">{s.step}</div> <h3 className="text-xl font-bold mb-2 text-green-800">{s.title}</h3> <p className="text-green-700">{s.desc}</p> </div> ))} </div> </section> ); };

export default HowItWorks;