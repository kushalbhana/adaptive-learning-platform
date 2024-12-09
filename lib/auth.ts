import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma  from '@/prisma';
import bcrypt from 'bcrypt'



export const NEXT_AUTH_CONFIG = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'password', type: 'password', placeholder: '' },
      },
      async authorize(credentials: any) {
        const user: any = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        if (!user) {
          console.log('User not found');
          return null;
        }

        const passwordValidation = await bcrypt.compare(credentials.password, hashedPassword);

        if (passwordValidation) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === 'google') {
        const userRecord = await prisma.user.upsert({
          where: { email: profile.email },
          update: {
            id: profile.sub,
            name: profile.name,
            profilePicture: profile.picture,
            oAuthId: profile.sub,
          },
          create: {
            id: profile.sub,
            email: profile.email,
            name: profile.name,
            profilePicture: profile.picture,
            oAuthId: profile.sub,
          },
        });
    
        // Add token to the user object
        user.id = userRecord.oAuthId; // Ensure user ID is also set
      }
      return true;
    },

    // Handle JWT, include user ID and token
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.uid = user.id; // Add user ID to token
      }
      return token;
    },

    // Customize session, include user ID and token
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid; // Add user ID to session
      }
      return session;
    },
  },
};