"use client";

import Image from "next/image";

export default function ExploreProfiles() {
  const users = [
    {
      name: "Anjali R.",
      location: "Bangalore",
      offered: ["Photoshop", "Figma", "Illustrator"],
      wanted: ["Excel", "Presentation"],
      availability: "Weekends",
      avatar: "/images/anjali.png",
    },
    {
      name: "Ravi T.",
      location: "Delhi",
      offered: ["Python", "Machine Learning"],
      wanted: ["UI Design"],
      availability: "Evenings",
      avatar: "/images/ravi.png",
    },
  ];

  return (
    <section className="bg-[#ffebdb] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 text-center">
          Explore Skill Swappers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover border border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>

              {/* Skills Offered */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Skills Offered
                </p>
                <div className="flex flex-wrap gap-2">
                  {user.offered.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Wanted */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Skills Wanted
                </p>
                <div className="flex flex-wrap gap-2">
                  {user.wanted.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-xs text-gray-500">
                  Availability: {user.availability}
                </span>
                <button className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:bg-sky-600 transition">
                  Request Swap
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
