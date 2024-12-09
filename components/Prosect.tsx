import React from "react";
import Image from "next/image";  // Import the Image component

const ITAMM = () => {
  const products = [
    {
      id: 1,
      image: "/Itam/item-category 1.png",
    },
    {
      id: 2,
      image: "/Itam/card.png",
    },
    {
      id: 3,
      image: "/Itam/card (1).png",
    },
    {
      id: 4,
      image: "/Itam/02.png",
    },
    {
      id: 5,
      image: "/Itam/card (2).png",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First image with 50% height (left side) */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/2">
              <a className="block relative h-[648px]">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={products[0].image}
                  width={648}  // Set the width
                  height={648} // Set the height
                />
              </a>
            </div>

            {/* All 4 images on the right side in a 2x2 grid */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-4 lg:gap-4">
                <div className="p-4">
                  <a className="block relative">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={products[1].image}
                      width={312}
                      height={312}
                    />
                  </a>
                </div>

                <div className="p-4">
                  <a className="block relative">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={products[2].image}
                      width={312}
                      height={312}
                    />
                  </a>
                </div>

                <div className="p-4">
                  <a className="block relative">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={products[3].image}
                      width={312}
                      height={312}
                    />
                  </a>
                </div>

                <div className="p-4">
                  <a className="block relative">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={products[4].image}
                      width={312}
                      height={212}  // Adjusted height for better layout
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAMM;
