import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const CORRECT_PASSWORD = 'iwonttell1'; // Change this to your desired password
const COOKIE_NAME = 'ada-authentication';
const COOKIE_VALUE = 'authenticated';
const COOKIE_EXPIRY = 60 * 60 * 24 * 7; // 7 days in seconds

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === CORRECT_PASSWORD) {
      // Set authentication cookie
      const cookieStore = cookies();
      cookieStore.set({
        name: COOKIE_NAME,
        value: COOKIE_VALUE,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: COOKIE_EXPIRY,
        path: '/',
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error verifying password:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}