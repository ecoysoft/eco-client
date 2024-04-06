import Link from "next/link";
import React from "react";

interface FooterData {
  id: number;
  title: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
}

const footerData: FooterData[] = [
  {
    id: 1,
    title: "EcoySoft",
    link1: "support@gmail.com",
    link2: "+8801766756578",
  },
  {
    id: 2,
    title: "Company",
    link1: "FAQ",
    link3: "Blogs",
    link4: "Carrier",
  },
  {
    id: 3,
    title: "Locations",
    link1: "Austin TX",
    link3: "Dhaka",
    link4: "Bangladesh",
  },
  {
    id: 4,
    title: "Newsletter",
  },
  {
    id: 5,
    title: "Home",
    link1: "Business",
    link3: "Enterprise",
    link4: "Customer Success",
  },

  {
    id: 6,
    title: "Resources",
    link1: "Forum",
    link3: "Supports",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black w-full mx-auto flex flex-col items-center">
      <div className="w-full max-w-[1170px] py-8 md:py-24 sm:px-20">
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:justify-start md:grid-cols-4 gap-y-8 md:gap-y-0  md:items-start sm:items-start text-white">
            {footerData.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col justify-start items-center md:items-start sm:items-start ${
                  item.title === "Home" || item.title === "Resources"
                    ? "md:mt-8"
                    : ""
                }`}
              >
                <p className="mb-2 md:mb-4 text-xl font-semibold">
                  {item.title}
                </p>

                <Link href={""} passHref className="mb-2">
                  {item.link1}
                </Link>
                {item.link2 && (
                  <Link href={""} passHref className="mb-2">
                    {item.link2}
                  </Link>
                )}
                {item.link3 && (
                  <Link href={""} passHref className="mb-2">
                    {item.link3}
                  </Link>
                )}
                {item.link4 && (
                  <Link href={""} passHref>
                    {item.link4}
                  </Link>
                )}
                {item.title === "EcoySoft" && (
                  <div className="flex justify-center items-center mt-2 md:mt-0">
                    <Link href={""} className="mx-2">
                      facebook
                    </Link>
                    <Link href={""} className="mx-2">
                      youtube
                    </Link>
                    <Link href={""} className="mx-2">
                      instagram
                    </Link>
                  </div>
                )}
                {item.title === "Newsletter" && (
                  <div className="flex flex-col items-center md:items-start">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      className="w-full border border-gray-300 bg-inherit outline-none rounded-lg px-4 py-2 mb-2"
                    />
                    <div className=" ">
                      <input
                        type="submit"
                        value="Submit"
                        className="px-6 py-2 bg-yellow-500 text-[18px] rounded-lg cursor-pointer "
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
        {/* footer bottom section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-white pt-8 md:pt-16">
          <p className="mb-4 md:mb-0">@2024 EcoySoft Ltd</p>
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <Link href={""} className="mx-4">
              Terms of use
            </Link>
            <Link href={""} className="mx-4">
              Privacy Policy
            </Link>
            <Link href={""} className="mx-4">
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
