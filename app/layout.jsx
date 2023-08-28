import '@styles/globals.css'
// import { Children } from 'react'
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
        <div className="main relative">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Navbar />

          <Hero />
          <div className="gradient-blue-shadow w-full h-10"></div>
          <div className="max-w-6xl">{children}</div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
