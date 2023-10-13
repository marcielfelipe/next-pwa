import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href='test'>
        Go to test page
      </Link>
      <Link href='other'>
        Go to other page
      </Link>
    </>
  )
}
''