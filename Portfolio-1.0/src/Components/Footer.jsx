import React from 'react';

const Footer = () => (
  <div className="bg-gray-800 text-sm p-4 text-center text-white">
    Copyright &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
    Miliyon Ayalew. All Rights reserved.
  </div>
);

export default Footer;
