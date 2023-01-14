import Image from "next/image";
import footer from "../assets/footer.svg";

const Footer = () => {
  return (
    <footer className="p-4 md:p-7 mx-auto max-w-8xl mt-8">
      <Image src={footer} alt="Footer" />
    </footer>
  );
};

export default Footer;
