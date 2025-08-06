import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the
              <br className="hidden lg:inline-block" />
              Tennis Club
            </h1>

            <p className="mb-8 leading-relaxed">
              Join our club and enjoy the best tennis experience
            </p>

            {/* Buttons */}
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Members
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Add Member
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              width={600}
              height={400}
              alt="hero"
              src="https://kensingtoncc.com/wp-content/uploads/2023/09/Kensington-Naples-Tennis-Group-ready-to-play.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
