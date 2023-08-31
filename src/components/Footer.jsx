import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#333333] py-5">
      <div className="container">
        <p className="text-center text-white">
          All rights reserved &copy; {new Date().getFullYear()}, New Govt.
          Degree College. Design & Maintenance by{" "}
          <Link href="https://github.com/iamparves" className="text-white/70">
            Parves Hossain Rabby
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
