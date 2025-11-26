import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Email: <a href="mailto:briangithinji2022@gmail.com" target="_blank" rel="noopener noreferrer">briangithinji2022@gmail.com</a></p>
      <p>WhatsApp: <a href="https://wa.me/254745506462" target="_blank" rel="noopener noreferrer">0745506462</a></p>
      <p>&copy; {new Date().getFullYear()} Brian Githinji</p>
    </footer>
  );
};

export default Footer;
