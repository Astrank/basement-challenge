import Image from "next/image";
import footer from "../assets/footer.svg";

const Footer = () => {
  return (
    <footer className="px-4 md:px-7 mt-8">
      <Image src={footer} />
    </footer>
  );
};

export default Footer;
