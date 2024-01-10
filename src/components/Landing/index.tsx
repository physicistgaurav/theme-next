"use client"

import { ThemeContext } from '@/context/theme-context';
import React, { useContext } from 'react';

export default function Landing() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <section className='flex flex-col mt-10 mb-5'>
   
      <button
      onClick={toggleTheme}
      className="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  रंग परिवर्तन
</button>
    </section>
  );
}
