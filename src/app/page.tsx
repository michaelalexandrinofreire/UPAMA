import Parceiros from '@/components/Parceiros'
import Slide from '@/components/Slide'
import Acoes from '@/components/Acoes'
import Missao from '@/components/Missao'
import Premiacoes from '@/components/Premiacoes'

export default function Home() {
  return (
    <main>
      <Slide/>
      <Missao/>
      <Acoes/>
      <Premiacoes/>   
      <Parceiros/>
    </main>
  )
}
