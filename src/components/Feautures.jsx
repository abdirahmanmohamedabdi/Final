import Link from 'next/link';

import {
  CodeIcon,
  BriefcaseIcon,
  VariableIcon,
  LightBulbIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Software development',
    description:
      'From mobile to web, we build software for all devices and platforms.',
    icon: CodeIcon,
  },
  {
    name: 'Innovation Research',
    description:
      'Guiding you from just a brilliant idea, to brilliant solution.',
    icon: LightBulbIcon,
  },

  {
    name: 'Business analytics',
    description:
      "Let's help you take your business to the next level with data backed confidence.",
    icon: BriefcaseIcon,
  },
  {
    name: 'Mechatronics engineering',
    description:
      'We combine our expertise in mechanical, electronic, and computer engineering to bring automation closer to you.',
    icon: VariableIcon,
  },
];

export default function Features() {
  return (
    <div id="services">
    <Link href="/services">
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='mt-2 text-3xl font-abc font-Bold text-black tracking-tight sm:text-4xl font-semibold'>
          What we do
        </h2>
        <p className='mt-2 text-sky-900 text-lg font-abc'>
          A tech house dedicated to inventing the future, today.{' '}
        </p>

        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-sky-900 rounded-md shadow-lg'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-abc font-Bold text-black tracking-tight'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base font-abc  text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
}
