import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL: "https://skillbridge-frontend-iota-one.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient();