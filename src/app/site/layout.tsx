
import Navigation from '@/components/ui/sites/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full  dark:bg-gradient-to-br dark:from-black dark:to-gray-700">
        <Navigation />
        {children}
      </main>
    // </ClerkProvider>
  )
}

export default layout