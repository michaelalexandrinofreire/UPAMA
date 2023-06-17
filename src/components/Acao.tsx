import Button from "./Button";
import styles from '../style/acoes.module.css'

interface AcaoProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function Acao({ title, description, imageSrc }: AcaoProps) {
  return (
    <div className={styles.acao}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Leia mais" />
      
    </div>
  );
}