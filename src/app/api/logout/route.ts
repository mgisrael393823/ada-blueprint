import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Clear the authentication cookie
    const cookieStore = cookies();
    cookieStore.delete('ada-authentication');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}