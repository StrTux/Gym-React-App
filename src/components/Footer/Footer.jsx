import { FaGithub, FaInstagram, FaLinkedin, FaCode, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} StrTux. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
