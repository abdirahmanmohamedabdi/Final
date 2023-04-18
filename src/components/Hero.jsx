import React from 'react';
import ReactDOM from 'react-dom';
import TypeWriter from './Typewriter';
import Image from 'next/image';
import Link from 'next/link';
import hero from "../../public/hero.jpg"
const typeWriter = [
  'Software Development',
  'Business Analytics',
  'Mechatronics Engineering',
  'Innovation Research',
];
export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            src={hero}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
        <h1 className=' sm:text-4xl text-3xl mb-4 font-abc text-white'>
                Inventing the future, today.
              </h1>
              <h1 className=' sm:text-1xl text-base	 text-white mb-2 '>
                Unlocking the power of technology to pave a brighter future for
                your business.
              </h1>
              <p className='sm:text-4xl text-3xl mb-12 font-abc text-white '>
                {' '}
                <TypeWriter data={typeWriter} />.
              </p>
          <Link
            href="/Products"
            className="mt-8 inline-block bg-sky-900 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white "
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  )
}
