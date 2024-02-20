

import type { Metadata } from 'next'

import '@/public/globals.css'

import Logo from './logo'


export const metadata: Metadata = {
  title: 'Home || Risos Enterprises',
  description: "Risos Enterprises LTD"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1" />

      <body className={'bg-[url("newbackground.png")]  h-full overflow-x-clip'}>
  
        <Logo />
        {children}</body>

    </html>
  )
}
