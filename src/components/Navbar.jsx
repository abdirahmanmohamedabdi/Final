import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {

  InboxIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "What we do",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/#services",
    icon: InboxIcon,
  },
  
  
  
];

const test = [
  {
    name: "Our Products Matrix",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/#productsmatrix",
    icon: InboxIcon,
  },
  {
    name: "Our Products ",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/products",
    icon: InboxIcon,
  },
  
  
  
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="sticky top-0 z-30 w-full px-2 py-2 bg-white sm:px-4 shadow ">
     <header >
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only font-abc ">Gnovation</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002056/gnovation-logo-hr_f439hx.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
                href="/"
                className="text-base font-medium font-abc text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Our Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-xs lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 font-abc text-decoration-line: underline; lg:grid-cols-2">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start font-abc text-decoration-line: underline rounded-lg hover:bg-gray-50"
                              >
                              
                                <div className="ml-4">
                                  <p className="text-base font-medium font-abc text-gray-900">
                                    {item.name}
                                  </p>
                                
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="font-abc ">Our Products</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-xs  lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 font-abclg:grid-cols-2">
                            {test.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                
                                <div className="ml-4">
                                  <p className="text-base font-medium font-abc text-gray-900">
                                    {item.name}
                                  </p>
                                
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              
              <Link
                href="/about"
                className="text-base font-medium text-gray-500 font-abc hover:text-gray-900"
              >
                About
              </Link>
             
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end font-abc md:flex-1 lg:w-0">
            
              <Link
                href="/contact"
                className="ml-8 whitespace-nowrap inline-flex items-center  font-abcjustify-center bg-sky-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
              >
               Contact
              </Link>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002056/gnovation-logo-hr_f439hx.png"
                        alt="Gnovation"
                      />
                      
                    </div>
                    
                    <div className="-mr-2">
                      
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-3">
                  <h3 className="px-4 font-bold text-l mb-1 text-sky-900 underline font-abc">Our Products</h3>
                    <nav className="grid grid-cols-1 gap-4">
                      {test.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-1 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          
                          <div className="ml-6 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </nav>
                    
                  </div>
                  <div className="mt-8">
                    <h3 className="px-4  underline">Our Services</h3>
                    <nav className="grid grid-cols-1 gap-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-1 p-1 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          
                          <div className="ml-4 px-1text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </nav>
                    
                  </div>
                </div>
                
                <div className="py-6 px-5">
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      href="/"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      About
                    </Link>
                   
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center bg-sky-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                       Contact
                    </Link>
                   
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main></main>
    </div>
  );
}
