import Parceiros from '@/components/Parceiros'
import styles from './page.module.css'
import Slide from '@/components/Slide'
import Acoes from '@/components/Acoes'
import Missao from '@/components/Missao'
import Premiacoes from '@/components/Premiacoes'

export default function Home() {
  return (
    <main className={styles.main}>
      <Slide/>
      <Parceiros/>
      <Acoes/>
      <Missao/>
      <Premiacoes/>
    </main>
  )
}
