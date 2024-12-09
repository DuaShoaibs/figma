'use client';

import Image from 'next/image'; // Import Image from next/image

export default function ProductPage() {
  return (
    <div className="product-page">
      <h1 className="text-start text-3xl font-bold mx-48 mt-11 mb-8">Our Products</h1>
      
        {/* Product Grid */}
        <div className="product-grid grid grid-cols-4 gap-1 mx-36">
        {/* Product 1 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product1.png"
            alt="Product 1"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 1</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$49.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 2 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product2.png"
            alt="Product 2"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 2</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$59.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 3 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product3.png"
            alt="Product 3"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 3</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$39.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 4 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product4.png"
            alt="Product 4"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 4</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$29.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 5 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product5.png"
            alt="Product 5"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 5</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$69.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 6 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product6.png"
            alt="Product 6"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 6</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$79.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 7 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product7.png"
            alt="Product 7"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 7</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$89.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 8 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product8.png"
            alt="Product 8"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 8</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$99.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 9 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product9.png"
            alt="Product 9"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 9</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$109.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 10 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product1.png"
            alt="Product 10"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 10</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$119.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 11 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product2.png"
            alt="Product 11"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 11</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$129.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0 ">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>

        {/* Product 12 */}
        <div className="product-item p-4 rounded shadow-md">
          <img
            src="/products/product3.png"
            alt="Product 12"
            className="w-[312px] h-[312px] object-contain mb-4 rounded"
          />
          <h3 className="product-title text-lg font-semibold mb-2">Product 12</h3>
          <p className="product-price text-sm text-gray-600 mb-4">$139.99</p>
          
          {/* Add to Cart Button with Only Icon */}
          <button className="bg-transparent p-0">
            <Image
              src="/cart.png"
              alt="Add to Cart"
              width={16}  // Adjust the size as needed
              height={16} // Adjust the size as needed
            />
          </button>
        </div>
</div>
      {/* Footer Section */}
      <footer className="bg-gray-200 py-8 h-auto mt-16 w-full">
        <div className="text-center">
          <p className="text-black text-4xl mb-4">Or subscribe to the newsletter.</p>
          
          {/* Email Input and Submit Button */}
          <div className="flex justify-center items-center mt-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="bg-transparent border border-l-0 border-gray-300 rounded-r-md px-6 py-2 text-blue-500 underline hover:no-underline">
              Submit
            </button>
          </div>
{/* Text Above Images */}
    <h3 className="text-3xl font-semibold mt-12 mb-6">Follow Products And Discounts On Instagram</h3>

          {/* Product Images */}
          <div className="product-images flex justify-center gap-4 mb-20 mt-8">
            
            <Image 
              src="/products/product1.png" 
              alt="Product 1" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
            <Image 
              src="/products/product2.png" 
              alt="Product 2" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
            <Image 
              src="/products/product3.png" 
              alt="Product 3" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
            <Image 
              src="/products/product2.png" 
              alt="Product 4" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
            <Image 
              src="/products/product3.png" 
              alt="Product 5" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
            <Image 
              src="/products/product6.png" 
              alt="Product 6" 
              width={150} 
              height={150} 
              className="rounded object-cover"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}