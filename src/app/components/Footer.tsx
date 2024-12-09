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