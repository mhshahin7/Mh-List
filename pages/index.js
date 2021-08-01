import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mh List | HomePage</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore necessitatibus, corrupti officiis eligendi repudiandae voluptate facere totam laborum soluta autem et eveniet aperiam, eos perspiciatis sed. A, commodi mollitia!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore necessitatibus, corrupti officiis eligendi repudiandae voluptate facere totam laborum soluta autem et eveniet aperiam, eos perspiciatis sed. A, commodi mollitia!</p>
        <Link href="/mhlist">
          <a className={styles.btn}>See All MhList</a>
        </Link>
      </div>
    </>
  )
}
