import '../styles/global.scss'
export default function RootLayout({ children }) {
  return (
    <html className='bg-slate-900 light'>
      <head />
      <body>{children}</body>
    </html>
  )
}
