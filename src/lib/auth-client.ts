import { createAuthClient } from "better-auth/react"
import { jwtClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
    plugins: [
    jwtClient() 
  ],
    baseURL: "http://localhost:3000"
})
export const { signIn, signUp, useSession } = createAuthClient()