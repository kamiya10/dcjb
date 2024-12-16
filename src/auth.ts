import Discord from 'next-auth/providers/discord';
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord],
});
