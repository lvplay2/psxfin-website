// pages/screenshots.tsx
import Head from 'next/head'
import styles from '../styles/Screenshots.module.css'

export default function Screenshots() {
  const images = [
    'chronocross1.jpg',
    'chronocross2.jpg',
    'mana1.jpg',
    'mana2.jpg',
    'mana3.jpg',
    'ff71.jpg',
    'ff72.jpg',
    'ff73.jpg'
  ]

  return (
    <>
      <Head>
        <title>Screenshots - pSX Emulator</title>
        <meta charSet="UTF-8" />
      </Head>

      <div className={styles.container}>
        <h1>Screenshots</h1>
        <hr />
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <img key={index} src={`/images/${src}`} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  )
}
