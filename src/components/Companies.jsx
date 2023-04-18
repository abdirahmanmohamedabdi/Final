import Image from 'next/image';

export default function Companies() {
  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
          Trusted across industries
        </h2>
        <div className='mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7'>
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000117/Wrigley-Logo_tbqslz.png'
            alt='Wrigley'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000116/Eden-Tea-logo-small-1-removebg-preview_xz0cqr.png'
            alt='EdenTea'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000116/download-removebg-preview_pbns1e.png'
            alt='Carrefour'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000116/Logo-removebg-preview_msoq4v.png'
            alt='Bank of Africa'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000116/logo_1_nsja7m.png'
            alt='Bluewave'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000116/moja_expressway_logo_qmaego.png'
            alt='Moja Expressway'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0'
            src='https://res.cloudinary.com/dyijvml1y/image/upload/v1681000522/white_vxetwm.png'
            alt='Amref'
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
