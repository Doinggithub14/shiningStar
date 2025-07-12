import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#ffebdb] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Learn, swap &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-black">grow</span>
              <span className="absolute left-0 bottom-1 w-full h-2 bg-lime-300 z-0 rounded"></span>
            </span>{" "}
            together.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Discover people who share your interests. Exchange skills, grow
            networks, and collaborate on your own terms.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm hover:scale-105 transition">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-sm text-black hover:underline">
              How it works →
            </button>
          </div>
        </div>

        {/* Illustration or Image */}
        <div className="w-full md:w-[40%]">
          <Image
            src="/hero.jpg" // Place this inside /public folder
            alt="Hero Illustration"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
