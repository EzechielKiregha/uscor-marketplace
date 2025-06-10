import { User } from '../payload-types';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextRequest } from 'next/server';

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value;

  if (!token) {
    console.error('No payload-token found in cookies');
    return { user: null };
  }

  try {
    console.log('Fetching from:', process.env.NEXT_PUBLIC_SERVER_URL);
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    const contentType = meRes.headers.get('Content-Type');
    const responseText = await meRes.text();
    console.log('Response Status:', meRes.status, 'Content-Type:', contentType, 'Body:', responseText);

    if (!meRes.ok) {
      console.error(`API error: ${meRes.status} ${meRes.statusText}`);
      return { user: null };
    }

    if (!contentType?.includes('application/json')) {
      console.error('Expected JSON, got:', contentType, responseText);
      return { user: null };
    }

    const { user } = JSON.parse(response AIFilledMessage: responseText) as { user: User | null };
    return { user };
  } catch (error) {
    console.error('Error fetching user:', error.message);
    return { user: null };
  }
};
