interface MarqueeProps {
    text: string
}

const Marquee = ({ text }: MarqueeProps) => {
    return (
      <div className="marquee border-t border-b my-8 py-3 text-xl md:text-4xl whitespace-nowrap">
        <div className="marquee__inner">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    );
}

export default Marquee;