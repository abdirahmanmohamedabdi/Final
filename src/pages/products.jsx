/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import Link from "next/link";
const posts = [
  {
    title: "Jarida",
    href: "/Products/Jarida",
    category: { name: "Learn More", href: "/Products/Jarida" },
    description:
      " The smart way to receive, announce the arrival and treat your visitors to a personalized, secure and non intrusive experience.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680001948/jarida_tdv3xk.jpg",
  },
  {
    title: "Regasy",
    href: "/Products/REGASY",
    category: { name: "Learn More", href: "/Products/REGASY" },
    description:
      "  A recreation and game park management system that enables ticket sales, validation of sold tickets, issuance of entry slips, validation of exits and extraction of reports on all activities within the recreation/game/reserve park using a one stop online portal.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680541824/regasy_cow8aw.jpg",
  },
  {
    title: "E-Ticketing Platform",
    href: "/Products/E-TicketingPlatform",
    category: { name: "Learn More", href: "/Products/E-TicketingPlatform" },
    description:
      "   A robust electronic ticketing system designed for all your ticket sales needs including events, movies , game and amusement parks, bus, train and air travel tickets ticketing and sales.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680541823/concert_wjxsyg.jpg",
  },
  {
    title: "ACaCKi",
    href: "/Products/Acacki",
    category: { name: "Learn More", href: "/Products/Acacki" },
    description:
      " Allows your customers to pay bills automatically via a kiosk/Mobile phone using a variety of payment channels from cash to debit and credit accounts.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680541823/coins_babph4.jpg",
  },
  {
    title: "BioPass",
    href: "/Products/BioPass",
    category: { name: "Learn More", href: "/Products/BioPass" },
    description:
      "  Multi verse of automations for use in access control, time ,and attendance and visitor management in secure corporate organisations and factories.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680002017/img-access-ctl_gyzh2p.jpg",
  },
  {
    title: "Facial Recognition System",
    href: "/Products/FacialRecognitionSystem",
    category: { name: "Learn More", href: "/Products/FacialRecognitionSystem" },
    description:
      " FRS allows for face temperature measurement function, which can quickly and accurately test the body temperature and raise an alarm when high temperature is detected..",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680002017/img-comp-1_ds58ee.jpg",
  },
  {
    title: "Olabod",
    href: "/Products/Olabod",
    category: { name: "Learn More", href: "/Products/Olabod" },
    description:
      "  Online subscription based passenger and fare management system for travel companies.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1680541822/bus_x7cozl.jpg",
  },
  {
    title: "Tangi T70",
    href: "/Products/TangiT70",
    category: { name: "Learn More", href: "/Products/TangiT70" },
    description:
      " Tangi t70 is a part of advance fleet tracking and management sensor devices which is suitable for vehicle, motorcycle, boat, asset tracking, etc.",

    imageUrl:
      "https://images.unsplash.com/photo-1587813369290-091c9d432daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },

  {
    title: "Track & Trace",
    href: "/Products/Track&Trace",
    category: { name: "Learn More", href: "/Products/Track&Trace" },
    description:
      "  The system tracks products from one point to another all through from the Original Equipment Manufacturer to the consumer by using barcode, QR code and / or RFID technology.",

    imageUrl:
      "https://images.unsplash.com/photo-1634746422503-33fde3f03b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80",
  },
  {
    title: "Smart Queue Management System (SQMS)",
    href: "/Products/SmartQueueManagementSystem",
    category: {
      name: "Learn More",
      href: "/Products/SmartQueueManagementSystem",
    },
    description:
      "   The system reduces real & apparent waiting time, speeds up service delivery, improves service quality & increases customer satisfaction.",

    imageUrl:
      "https://images.unsplash.com/photo-1599997681974-eafde505e9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
  },
  {
    title: "SESAME -Express Lanes",
    href: "/Products/SESAME-ExpressLanes",
    category: { name: "Learn More", href: "/Products/SESAME-ExpressLanes" },
    description:
      "   Cashless, express access control parking system. designed for the key security and high traffic areas that need fast queue movement and identity of all users in and out of premises.",

    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681083593/sesame_zwdhay.png",
  },
  {
    title: "Qurias",
    href: "/Products/Qurias",
    category: { name: "Learn More", href: "/Products/Qurias" },
    description:
      "   Qurias is a Traffic Signaling, Flow & Offense Detection and Control System that allows for managing multiple ways traffic.",

    imageUrl:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1799&q=80",
  },
];

export default function Example() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 font-abc sm:text-4xl">
            Here are some of our Products
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 object-contain lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col font-abc rounded-lg shadow-lg  overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-65 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                  width="0"
                  height="80"
                  sizes="100vw"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <a href={post.category.href} className="hover:underline"> */}

                  <Link href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold  font-abc text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base font-abc text-gray-500">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={post.category.href} className="font-abc">
                      <p className="mt-8 inline-block bg-sky-900 border font-abc border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-sky-600 cursor-pointer">
                        Learn More
                      </p>
                    </Link>
                  </div>

                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
