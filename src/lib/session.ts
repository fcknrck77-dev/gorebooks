import { getIronSession, SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';

export interface AdminSession {
  isAdmin?: boolean;
}

const SESSION_COOKIE_NAME = 'gorebooks_admin';

export const sessionOptions: SessionOptions = {
  cookieName: SESSION_COOKIE_NAME,
  password: process.env.IRON_SESSION_PASSWORD ?? '00000000000000000000000000000000',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getAdminSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<AdminSession>(cookieStore, sessionOptions);
  return session;
}
