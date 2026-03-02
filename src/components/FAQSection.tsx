import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">Question 1?</h3>
          <p className="text-gray-400">Answer to question 1.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Question 2?</h3>
          <p className="text-gray-400">Answer to question 2.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Question 3?</h3>
          <p className="text-gray-400">Answer to question 3.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
