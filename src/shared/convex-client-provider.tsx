'use client'

import { esES } from '@clerk/localizations'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const clerkPublicHasableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!

const convex = new ConvexReactClient(convexUrl)

interface Props {
  children: React.ReactNode
}

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={clerkPublicHasableKey} localization={esES}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClientProvider
