import Image from 'next/image'
import styles from './page.module.css'
import { Posts } from './components'

export default function Home() {
  return (
    <div>
      <Posts/>
    </div>
  )
}
