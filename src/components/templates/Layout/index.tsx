import * as React from "react"
import Link from "next/link"
import Head from "next/head"
import styles from "./_Layout.scss"
import List from "src/components/List"

type Props = {
  /** Description of prop "foo". */
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = "This is the default title" }) => (
  <div className={styles["layout--container"]}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </nav>
    </header>
    {children}
    <List items={[]} />
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
