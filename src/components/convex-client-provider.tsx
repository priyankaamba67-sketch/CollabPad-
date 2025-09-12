"use client";

import { ReactNode } from "react";
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  useAuth,
  SignIn,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <ClerkLoading>
        <FullscreenLoader label="auth loading..." />
      </ClerkLoading> */}

      <ClerkLoaded>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>{children}</Authenticated>

          <Unauthenticated>
            <div className="flex flex-col items-center justify-center min-h-screen">
              <SignIn
                routing="hash"
                afterSignInUrl="/"
                afterSignUpUrl="/"
              />
            </div>
          </Unauthenticated>

          {/* <AuthLoading>
            <FullscreenLoader label="auth loading..." />
          </AuthLoading> */}
        </ConvexProviderWithClerk>
      </ClerkLoaded>
    </>
  );
}
