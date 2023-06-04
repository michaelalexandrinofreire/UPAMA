interface ButtonProps {
 href: string;
 text: string;
}

export default function Button({ href, text }: ButtonProps) {
 return (
    <a href={href} target="blank" className="buttonBasic">
      <button>{text}</button>
    </a>
 );
}