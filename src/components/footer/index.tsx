import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-10 border-t border-cyan-500">
      © {new Date().getFullYear()} Kracked Devs — Built by Malaysians for 🇲🇾
    </footer>
  );
};

export default Footer;
