import React from "react";
import Image from "next/image";
import { GrCart } from "react-icons/gr";

const ApnaHome = () => {
  const products = [
    {
      id: 1,
      image: "/img 4/1.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: true,
      newLabel: true,
      salesLabel: false,
    },
    {
      id: 2,
      image: "/img 4/2.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: true,
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
      image: "/img 4/Image (1)5.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: true,
      salesLabel: false,
    },
    {
      id: 6,
      image: "/img 4/6.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: true,
    },
    {
      id: 7,
      image: "/img 4/7.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
    {
      id: 8,
      image: "/img 4/8.png",
      title: "Library Stool Chair",
      price: "$20",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
    {
      id: 9,
      image: "/img 4/5.png",
      title: "Office Chair",
      price: "$35",
      coloredIcon: true,
      newLabel: true,
      salesLabel: false,
    },
    {
      id: 10,
      image: "/img 4/2.png",
      title: "Gaming Chair",
      price: "$40",
      coloredIcon: false,
      newLabel: false,
      salesLabel: true,
    },
    {
      id: 11,
      image: "/img 4/3.png",
      title: "Lounge Chair",
      price: "$50",
      coloredIcon: false,
      newLabel: false,
      salesLabel: false,
    },
    {
      id: 12,
      image: "/img 4/Image (12).png",
      title: "Dining Chair",
      price: "$25",
      coloredIcon: true,
      newLabel: false,
      salesLabel: false,
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        {/* Center Aligned Heading */}
        <h1 className="text-[32px] font-bold text-black mt-12 ml-4 sm:ml-16 md:ml-28 lg:ml-64">
  All Products
</h1>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="relative block h-[337px] rounded-lg overflow-hidden group ">
                  {/* Image */}
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full"
                    src={product.image}
                    width={312}
                    height={312}
                  />
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
                    <GrCart className="text-2x1" />
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

export default ApnaHome;
