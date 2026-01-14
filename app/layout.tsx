import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <a className={styles.link} href="/">Home</a>
            <a className={styles.link} href="/about">About</a>
            <a className={styles.link} href="/likes">Likes</a>
            <a className={styles.link} href="/hobbies">Hobbies</a>
            <a className={styles.link} href="/purpose">Purpose</a>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
