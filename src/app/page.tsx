import Image from "next/image";

export default function Home() {
  // Array of product names and prices for More Featured Products
  const productNames = [
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
    "Library Stool Chair",
  ];

  const productPrices = [
    "$199.99",
    "$249.99",
    "$149.99",
    "$399.99",
    "$199.99",
    "$249.99",
    "$149.99",
    "$399.99",
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="banner flex justify-between items-center bg-blue-50 px-6 py-10 fixed top-0 left-0 right-0 z-10">
        <div className="banner-text">
          <h6 className="font-bold mb-2">WELCOME TO CHAIRY</h6>
          <h2 className="text-2xl font-semibold mb-7">Best Furniture</h2>
          <h2 className="text-2xl font-semibold mb-7">Collection for Your</h2>
          <h2 className="text-2xl font-semibold mb-7">Interior.</h2>
          {/* Button with Image */}
          <button className="banner-button">
            <Image
              src="/Button.png" // Your button image path
              alt="Shop Now"
              width={120}
              height={40}
            />
          </button>
        </div>
        <Image src="/1.png" alt="Chair" width={400} height={300} />
      </div>

      {/* Logos Section */}
      <section className="py-10 mt-24">
        <div className="text-center m- mb-6">
          <h2
            className="text-2xl font-semibold"
            style={{ color: "rgba(39, 35, 67, 1)" }}
          >
          </h2>
        </div>
        <div className="flex justify-center gap-10 px-9 overflow-x-auto">
          {/* Logo Cards */}
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex justify-center items-center w-[100px] h-[100px]"
            >
              <Image
                src={`/logos/logo${index + 1}.png`}
                alt={`Logo ${index + 1}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 mt-24">
        <h2
          className="text-2xl font-semibold mb-4 px-52"
          style={{ color: "rgba(39, 35, 67, 1)" }}
        >
          Featured Products
        </h2>
        <div className="flex justify-center gap-0 px-48 overflow-x-auto">
          {/* Product Cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 min-w-[200px] text-center relative"
            >
              <Image
                src={`/products/product${index + 1}.png`}
                alt={`Product ${index + 1}`}
                width={315}
                height={315}
                className="mb-4"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-medium text-gray-800">{productNames[index]}</h3>
                  <p className="text-gray-600 text-sm">{productPrices[index]}</p>
                </div>
                <button>
                  <Image
                    src="/cart.png" // Replace with your cart icon path
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Featured Products Section with Individual Overlay */}
      <section className="py-8 mt-24">
        <h2
          className="text-2xl font-semibold mb-4 px-52"
          style={{ color: "rgba(39, 35, 67, 1)" }}
        >
          Top Categories
        </h2>
        <div className="flex justify-center gap-0 px-48">
          {/* Product Cards with Individual Overlay */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 min-w-[250px] text-center relative"
            >
              <Image
                src={`/products/product${index + 5}.png`}
                alt={`Product ${index + 5}`}
                width={305}
                height={305}
                className="mb-0"
              />
              {/* Individual Overlay at the bottom */}
              <div className="absolute bottom-8 left-4 w-72 p-4 bg-black bg-opacity-60 text-white text-sm">
                <h3 className="font-medium text-lg">{productNames[index]}</h3>
                <p className="text-base">{productPrices[index]}</p>
              </div>
              <div className="flex justify-between items-center mt-4">            
              </div>
            </div>
          ))}
        </div>
      </section>
{/* New Section: Explore New and Popular Styles */}
<section className="py-8 mt-24">
  <div className="flex justify-center gap-4 px-4 overflow-x-auto">
    {/* First, display the single image with vertical text */}
    <div className="flex items-center gap-4">
      {/* Vertical text */}
      <div className="relative">
        <p
          className="text-2xl font-normal text-black"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>

      {/* Image without white background */}
      <div className="text-center relative">
        <Image
          src="/products/10.jpg"
          alt="Main Product"
          width={480}
          height={480}
          className="mb-4 rounded-lg shadow-md"
        />
      </div>
    </div>

    {/* Collage of 4 images */}
    <div className="grid grid-cols-2 gap-4">
      {/* First two images */}
      <div className="text-center">
        <Image
          src="/products/card.jpg"
          alt="Product 4"
          width={200}
          height={200}
          className="mb-4 rounded-lg shadow-md"
        />
      </div>
      <div className="text-center">
        <Image
          src="/products/product1.png"
          alt="Product 1"
          width={200}
          height={200}
          className="mb-4 rounded-lg shadow-md"
        />
      </div>

      {/* Last two images */}
      <div className="text-center">
        <Image
          src="/products/product2.png"
          alt="Product 5"
          width={200}
          height={200}
          className="mb-4 rounded-lg shadow-md"
        />
      </div>
      <div className="text-center">
        <Image
          src="/products/product1.png"
          alt="Product 2"
          width={200}
          height={200}
          className="mb-4 rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

      {/* Add Two Rows of 4 Products */}
      <section className="py-8 mt-24">
        <h2
          className="text-2xl  font-semibold mb-4 flex justify-center"
          style={{ color: "rgba(39, 35, 67, 1)" }}
        >
          Our Products
        </h2>
        
        {/* First Row with 4 Products */}
        <div className="flex justify-center gap-4 px-48">
          {productNames.slice(0, 4).map((productName, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 min-w-[200px] text-start relative">
              <Image
                src={`/products/product${index + 1}.png`}
                alt={`Product ${index + 1}`}
                width={315}
                height={315}
                className="mb-4"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-medium text-gray-800">{productName}</h3>
                  <p className="text-gray-600 text-sm">{productPrices[index]}</p>
                </div>
                <button>
                  <Image
                    src="/cart.png"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row with 4 Products */}
        <div className="flex justify-center gap-4 px-48 mt-10">
          {productNames.slice(4, 8).map((productName, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 min-w-[200px] text-start relative">
              <Image
                src={`/products/product${index + 5}.png`}
                alt={`Product ${index + 5}`}
                width={315}
                height={315}
                className="mb-4"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-medium text-gray-800">{productName}</h3>
                  <p className="text-gray-600 text-sm">{productPrices[index + 4]}</p>
                </div>
                <button>
                  <Image
                    src="/cart.png"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    {/* Footer */}
<footer className="footer px-8 py-8 bg-gray-100">
  <div className="footer-main flex justify-between items-start">
    {/* Logo and Text Section */}
    <div className="logo-container flex flex-col items-start">
      {/* Logo Image */}
      <img
        src="/Logo.png"
        alt="Comforty Logo"
        className="logo-image w-5 h-5 mb-2 mx-0" // Adjust size as needed
      />
      {/* Brand Name */}
      <div className="text-xl font-semibold mb-2 -mx-56">Comforty</div>
      {/* Additional Text Below Logo */}
      <div className="text-sm text-gray-600 mx-36">
        <h6>Vivamus tristique odio sit amet velit semper,</h6>
        <h6>eu posuere turpis interdum.</h6>
        Cras egestas purus
      </div>
    </div>
  </div>

  {/* 6 Small Images Section */}
  <div className="flex justify-start mx-36 gap-6 mt-6">
    {/* Loop through the image URLs and display them */}
    {Array.from({ length: 5 }).map((_, index) => (
    <div>
        <img
          src={`/small-images/small-image${index + 1}.png`} // Replace with your actual image URLs
          alt={`Small Image ${index + 1}`}
          className="w-4 h-4 object-cover"
        />
      </div>
    ))}
  </div>
</footer>

    </div>
  );
}