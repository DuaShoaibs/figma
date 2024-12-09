'use client';

import { useState } from 'react';
import Link from 'next/link';  // Import Link from Next.js for navigation

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      {/* First Header - Top Header with Free Shipping, Language Option, FAQ Button, and Need Help Button */}
       
       <div className="top-header">
        <div className="free-shipping">Free Shipping on Orders Over $50</div>

        <select className="language-dropdown">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>

        <button className="header-button faq-btn">Faqs</button>

        <button className="header-button help-btn">
          <img src="/alert.png" alt="Need Help" className="help-icon" />
          Need Help
        </button>
      </div>



      {/* Second Header - Main Header with Logo and Cart Button */}
      <div className="second-header flex justify-between items-center py-4 px-6 bg-white shadow-md">
        {/* Logo Container */}
        <div className="logo-container flex items-center">
          <img src="/Logo.png" alt="Comforty Logo" className="logo-image w-12 h-12 mr-3" />
          <div className="logo text-xl font-bold text-gray-800">Comforty</div>
        </div>

        {/* Cart Container */}
        <div className="cart-container">
          <button className="cart-button flex items-center bg-gray-100 p-2 rounded">
            <img src="/cart.png" alt="Cart" className="cart-icon w-6 h-6 mr-2" />
            <span className="cart-text text-sm font-medium">Cart</span>
            {cartCount > 0 && <span className="cart-count text-xs text-white bg-red-500 rounded-full px-2 py-1 ml-2">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Third Header - Contact Info and Navigation Links */}
      <div className="third-header flex justify-between items-center py-4 px-6 bg-gray-100">
        {/* Navigation Buttons on the Right */}
        <div className="nav-buttons flex gap-4">
          <Link href="/">
            <button className="nav-button text-sm font-medium text-gray-700">Home</button>
          </Link>
          <Link href="/shop">
            <button className="nav-button text-sm font-medium text-gray-700">Shop</button>
          </Link>
          <Link href="/product">
  <button className="nav-button text-sm font-medium text-gray-700">Product</button>
</Link>

          <button className="nav-button text-sm font-medium text-gray-700">Pages</button>
          <button className="nav-button text-sm font-medium text-gray-700">About</button>
        </div>

        {/* Contact Info on the left */}
        <div className="left-side">
          <span className="contact-info text-sm text-gray-700">Contact: (808) 555-0111</span>
        </div>
      </div>

      {/* Divider Between Header Sections */}
      <div className="header-divider bg-gray-300 h-px my-2"></div>
    </>
  );
}
