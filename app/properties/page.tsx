import React from 'react';
import Link from 'next/link';

const PropertiesPage = () => {
  console.log('hello');
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default PropertiesPage;