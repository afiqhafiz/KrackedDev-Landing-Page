import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-gray-400 border-t border-gray-800">
      © {new Date().getFullYear()} Kracked Devs — Built by Malaysians 🇲🇾
    </footer>
  );
};

export default Footer;
