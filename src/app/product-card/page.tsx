"use client";

import {useState} from "react";
import {useControls} from "leva";

interface Product {
  title: string;
  price: number;
  originalPrice: number;
  label: string;
  rating: number;
  images: string[];
}

const PRODUCT: Product = {
  title: "Nike Air MX Super 2500 - Red",
  price: 449,
  originalPrice: 699,
  label: "39% OFF",
  rating: 5,
  images: [
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ],
};

function ProductCard({product}: {product: Product}) {
  const {debug} = useControls({debug: false});
  const [selected, setSelected] = useState<string>(product.images[0]);

  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <button className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" type="button">
        <div className="flex h-full">
          {product.images.map((image) => (
            <div
              key={image}
              className={`z-10 flex justify-end transition-opacity ${debug ? "opacity-25 hover:opacity-100" : "opacity-0"}`}
              style={{opacity: debug ? (selected === image ? 1 : 0.25) : 0}}
              onMouseEnter={() => setSelected(image)}
            >
              <img alt="Nike shoes" className="mt-auto h-[25%] object-cover" src={image} />
            </div>
          ))}
        </div>
        <img
          alt={product.title}
          className="pointer-events-none absolute h-full w-full object-cover"
          src={selected}
        />
        {Boolean(product.label) && (
          <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.label}
          </span>
        )}
      </button>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            {Boolean(product.originalPrice) && (
              <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
            )}
          </p>
          {Boolean(product.rating) && (
            <div className="flex items-center">
              {Array.from({length: product.rating}, (_, i) => i).map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 mr-2 rounded bg-amber-300 px-2.5 py-0.5 text-xs font-semibold">
                {product.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
        <button
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          type="button"
        >
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section>
      <ProductCard product={PRODUCT} />
    </section>
  );
}
