import React from "react";
import Image from "next/image";
import { GrCart } from "react-icons/gr";

const ITA = () => {
  const products = [
    {
      id: 1,
      image: "/img 4/1.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: true,
      newLabel: true, // New label
      salesLabel: false, // No sales label
    },
    {
      id: 2,
      image: "/img 4/2.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: true, // Sales label
    },
    {
      id: 3,
      image: "/img 4/3.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
    {
      id: 4,
      image: "/img 4/4.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
    {
      id: 5,
      image: "/img 4/5.png", // Updated image path
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
  ];

  return (
    <div>
      {/* Top Section */}
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col lg:flex-row lg:items-center">
      {/* Image */}
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <Image
          alt="ecommerce"
          className="w-full h-[350px] lg:h-auto object-cover object-center rounded"
          src="https://dummyimage.com/400x400"
          width={400} // Added width
          height={400} // Added height
        />
      </div>
      
      {/* Text/Details Section */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          BRAND NAME
        </h2>
        <h1 className="text-gray-900 text-2xl lg:text-3xl title-font font-medium mb-2">
          The Catcher in the Rye
        </h1>
        <p className="leading-relaxed text-gray-700 text-base mb-4">
          A brief description of the product goes here. It could include features, benefits, and other details that will help the customer make a purchase decision.
        </p>
        <div className="flex items-center">
          <span className="text-2xl font-medium text-gray-900">$20</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Bottom Section (Products List) */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
              >
                <div className="relative block h-[337px] rounded overflow-hidden group">
                  {/* Main Image */}
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full"
                    src={product.image}
                    width={312} // Added width
                    height={312} // Added height
                  />
                  {/* Small Images Below (Single Row) */}
                  <div className="flex space-x-2 mt-4 overflow-x-auto">
                    {products.map((prod) => (
                      <div key={prod.id} className="w-[270px] h-[263px]">
                        <Image
                          alt="product-thumbnail"
                          className="object-cover object-center w-full h-full"
                          src={prod.image}
                          width={270} // Added width
                          height={263} // Added height
                        />
                      </div>
                    ))}
                  </div>

                  {/* New Label */}
                  {product.newLabel && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  {/* Sales Label */}
                  {product.salesLabel && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Sales
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">{product.price}</p>
                  </div>
                  {/* Cart Icon */}
                  <div
                    className={`p-2 rounded-md shadow-md cursor-pointer transition ${
                      product.coloredIcon
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-transparent bg-slate-300 hover:bg-blue-100"
                    }`}
                  >
                    <GrCart className="text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITA;
