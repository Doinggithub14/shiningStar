"use client";

import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description:
        "List your skills, set availability, and make your profile public.",
      image: "/Webinar-pana.png", // replace with your image path
    },
    {
      title: "Request a Skill Swap",
      description: "Search for a skill you want and send a swap request.",
      image: "/World-pana.png", // replace with your image path
    },
    {
      title: "Collaborate & Rate",
      description: "Learn together, complete the swap, and leave feedback.",
      image: "/Storyboard-pana.png", // replace with your image path
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          How it works
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Skill swapping made simple in 3 easy steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#ffebdb] w-full aspect-square rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300 flex flex-col justify-between items-center text-center"
            >
              <div className="relative w-25 h-25 mx-auto mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
