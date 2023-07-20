import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export const metadata = {
  title: 'Nwaoghor Praise Blog',
  description: 'Tech Content for the nation.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
