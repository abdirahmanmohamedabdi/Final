import { Disclosure, Tab,  } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import Image from "next/image";
import track from "../../../public/track.jpeg"
const product = {
  name: "Track & Trace",

  images: [
    {
      id: 1,
      name: "Track & Trace image",
   
      alt: "Track & TraceImage.",
    },
    // More images...
  ],

  description: `
    <p>The objective of the system is to track products from one point to another all through from the Original Equipment Manufacturer to the consumer. Tracking is done with barcodes, QR codes and/or RFID technology.    .    
    </p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Use of barcodes, QR codes and/or RFID technology to monitor product movement.",
        "Ability to identify and differentiate original and fake products through the product barcode, QR code and RFID tags.",
        "Ability to know the exact position of any product through the factory to consumer chain at any one moment.",
       
        
      ],
    },
    // More sections...
  ],
  usecases: [
    {
      name: "Use cases",
      items: [
        "Manufacturing.",
        "Logistics.",
   
       
       
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
    

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
         
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
  
            <Tab.Group as="div" className="flex flex-col-reverse">
      
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"></div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      src={track}
                      alt={image.alt}
                      width="0"
              height="80"
              sizes="100vw"
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight font-abc text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only font-abc ">Product information</h2>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <section aria-labelledby="details-heading" className="mt-1">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between font-abc  items-center text-left">
                              <span
                                className={classNames(
                                  open ? "text-sky-900" : "text-sky-800",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-sky-900"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-sky-900"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 list-disc	prose prose-sm"
                          >
                            <ul role="list-disc	font-abc ">
                              {detail.items.map((item) => (
                                <li  className="pb-3 mx-4 list-disc	prose prose-sm" key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
              <section aria-labelledby="details-heading" className="mt-18">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y font-abc  text-Bold divide-gray-200">
                  {product.usecases.map((usecases) => (
                    <Disclosure as="div" key={usecases.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? "text-sky-900" : "text-sky-800",
                                  "text-sm font-medium"
                                )}
                              >
                                {usecases.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-sky-900"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-sky-900"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 prose font-abc list-disc prose-sm"
                          >
                            <ul role="list-disc	font-abc ">
                              {usecases.items.map((item) => (
                                <li  className="pb-3 mx-4 list-disc	prose prose-sm" key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
