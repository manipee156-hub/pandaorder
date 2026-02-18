import React from 'react';

const featuresData = [ { title: 'Easy Dashboard', desc: 'All your orders in one place', icon: '📊' }, { title: 'Payment Integration', desc: 'Secure payments with ease', icon: '💳' }, { title: 'Analytics', desc: 'Track performance and growth', icon: '📈' }, ];

const Features = () => { return ( <section id="features" className="p-10 bg-white"> <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Features</h2> <div className="grid md:grid-cols-3 gap-6"> {featuresData.map((f, i) => ( <div key={i} className="p-6 border rounded shadow hover:shadow-lg transition"> <div className="text-4xl mb-4">{f.icon}</div> <h3 className="text-xl font-bold mb-2 text-green-800">{f.title}</h3> <p className="text-green-700">{f.desc}</p> </div> ))} </div> </section> ); };

export default Features;