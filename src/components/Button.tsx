interface ButtonProps {
 text: string;
}

export default function Button({ text }: ButtonProps) {
 return (
      <button className="button">{text}</button>
 );
}