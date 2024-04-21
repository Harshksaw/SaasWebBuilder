import { ClerkProvider } from '@clerk/nextjs'
import { shadesOfPurple } from '@clerk/themes'
import React from 'react'



const layout = ({children }: {children : React.ReactNode}) => {
  return (
     <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
        {children}
     </ClerkProvider>
  )
}

export default layout   