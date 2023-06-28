import Parceiros from '@/components/Parceiros'
import Slide from '@/components/Slide'
import Acoes from '@/components/Acoes'
import Missao from '@/components/Missao'
import Premiacoes from '@/components/Premiacoes'
import Sobrenos from '@/components/Sobrenos'

export default function Home() {
  return (
    <main>
      <Slide/>
      <Sobrenos/>
      <Acoes/>
      <Premiacoes/>   
      <Parceiros/>
    </main>
  )
}
