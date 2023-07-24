import '@styles/globals.css'
import { Children } from 'react'
import { Navbar } from '@components/Navbar'
import { Hero } from '@components/Hero'
export const metadata = {
  title: 'Not Bad Websites',
  description: 'Not Bad Website development services',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main relative overflow-x-hidden">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Navbar />
          <div className="hero-container overflow-hidden">
            <Hero />
          </div>

          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
