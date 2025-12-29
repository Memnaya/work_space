import React from 'react'
import Header from './header/Header'
// import Footer from './Footer/Footer'
import styles from'./layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
       <Header />
      <main className="main-content container">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout