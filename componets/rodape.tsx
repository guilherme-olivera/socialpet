import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Sua Rede Social para Pets</p>
    </footer>
  );
}

export default Footer;