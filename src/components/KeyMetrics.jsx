// src/components/KeyMetrics.jsx
import React from 'react';

const KeyMetrics = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold">Why Choose CleverBooks?</h2>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="metric">
          <img src="path/to/icon1.png" alt="Icon 1" className="mx-auto" />
          <p className="mt-2">Fast</p>
        </div>
        <div className="metric">
          <img src="path/to/icon2.png" alt="Icon 2" className="mx-auto" />
          <p className="mt-2">Reliable</p>
        </div>
        <div className="metric">
          <img src="path/to/icon3.png" alt="Icon 3" className="mx-auto" />
          <p className="mt-2">Secure</p>
        </div>
      </div>
    </div>
  </section>
);

export default KeyMetrics;
