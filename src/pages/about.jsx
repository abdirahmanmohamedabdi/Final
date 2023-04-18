

export default function About() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight  font-abc text-gray-900">
                  A Culture of Innnovation
                </h2>
                <p className="mt-4  font-abc text-gray-500">
                  We are a tech house dedicated to inventing the future today.
                  We unlock the power of technology to pave a brighter future
                  for your business. Our team of experts specializes in software
                  engineering, innovation research, market analysis, and
                  mechatronic engineering to ensure we deliver the most
                  cutting-edge solutions. Our product matrix serves broad
                  markets including security, manufacturing, real estate, money
                  markets, and transport.
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002018/img-research_trxzx6.jpg"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
