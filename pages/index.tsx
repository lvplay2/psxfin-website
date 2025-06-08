/*++

Copyright (c) 2025 lvplay2

Module Name:

    index.tsx

Abstract:

    The homepage component.

Author:

    lvplay2

Revision History:

--*/

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>pSX Emulator</title>
        <meta charSet="UTF-8" />
      </Head>

      <header className={styles.header}>
        <img src="/images/psx_emulator_title.gif" alt="pSX Emulator" />
      </header>

      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/screenshots">Screenshots</Link>
          <a href="https://psxemulator.proboards.com/" target="_blank">Forum</a>
          <a href="mailto:psxemulator@googlemail.com">Contact</a>
        </nav>

        <main className={styles.main}>
          <p>This emulator fully emulates the Sony PlayStation. Compatibility is high—most games work well.</p>
          <p>It includes an R3000 debugger, which may be helpful for translation projects.</p>

          <hr />

          <h3>Downloads for Windows:</h3>
          <ul>
            {[
              { file: "pSX_1_13.rar", label: "pSX v1.13 (latest)" },
              { file: "pSX_1_12.rar", label: "pSX v1.12" },
              { file: "psxfin_wip.rar", label: "pSX v1.12 WIP" },
              { file: "pSX_1_11.rar", label: "pSX v1.11" },
              { file: "pSX_1_10.rar", label: "pSX v1.10" },
              { file: "pSX_1_9.rar",  label: "pSX v1.9" },
              { file: "pSX_1_8.rar",  label: "pSX v1.8" },
              { file: "pSX_1_7.rar",  label: "pSX v1.7" },
              { file: "pSX_1_6.rar",  label: "pSX v1.6" },
              { file: "pSX_1_5.rar",  label: "pSX v1.5" },
              { file: "pSX_1_4.rar",  label: "pSX v1.4" },
              { file: "pSX_1_3.rar",  label: "pSX v1.3" },
              { file: "pSX_1_2.rar",  label: "pSX v1.2" },
              { file: "pSX_1_1.rar",  label: "pSX v1.1" },
              { file: "pSX_1_0.rar",  label: "pSX v1.0" },
              { file: "psxrel.rar",   label: "Debug version with logging support" },
              { file: "readme.txt",   label: "Readme" }
            ].map(({ file, label }, index) => (
              <li key={index}>
                <a className={styles.downloadLink} href={`/files/windows/${file}`} download>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <h3>Downloads for Linux:</h3>
          <ul>
            {[
              { file: "pSX_linux_1_13.tar.bz2", label: "pSX v1.13" },
              { file: "pSX_linux_1_12.tar.bz2", label: "pSX v1.12" },
              { file: "pSX_linux_1_11.tar.bz2", label: "pSX v1.11" },
              { file: "readme.txt",             label: "Readme" }
            ].map(({ file, label }, index) => (
              <li key={index}>
                <a
                  className={styles.downloadLink}
                  href={`/files/linux/${file}`}
                  download
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>


          <hr />

          <p><strong>Note:</strong> You&#39;ll need a PS1 BIOS image (not included). It should be named <code>SCPH1001.bin</code> and placed in the <code>bios</code> folder.</p>

          <p>
            If you encounter a missing <code>d3dx9_26.dll</code> error, you can download it{" "}
            <a className={styles.downloadLink} href="https://dll-files.com/d3dx9_26.dll.html" target="_blank">here</a>.
          </p>

          <hr />

          <p>
            A relatively up-to-date{" "}
            <a href="https://web.archive.org/web/20130521005433/http://psx.silvanthalas.com/" target="_blank">
              compatibility list
            </a>{" "}
            is maintained by smegforbrain.
          </p>

          <hr />

          <footer className={styles.footer}>
            Original website made by pSX Author, improved by lvplay2. <br />
            <a className={styles.downloadLink} href="https://github.com/lvplay2/psxfin-website" target="_blank">
              Source code on GitHub
            </a>
          </footer>
        </main>
      </div>
    </>
  )
}
