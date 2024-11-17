import React from "react";

function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-white text-center">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
