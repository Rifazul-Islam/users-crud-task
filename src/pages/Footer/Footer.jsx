import logo from "../../../public/travel-logo.png";
const Footer = () => {
  return (
    <div className="ml-4 mr-4 mt-2 ">
      <footer className="footer p-10   bg-blue-300 text-base-content rounded-lg">
        <div className="ml-4">
          <img className="w-20" src={logo} alt="" />
          <p>
            Travel Industries Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div>
          <span className="footer-title ">Services</span>
          <a>Branding</a>
          <a>Design</a>
          <a>Marketing</a>
          <a>Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a>About us</a>
          <a>Contact</a>
          <a>Jobs</a>
          <a>Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a>Terms of use</a>
          <a>Privacy policy</a>
          <a>Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
