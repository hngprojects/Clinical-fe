import { NextResponse } from 'next/server';
import { env } from '@/env/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required.' },
        { status: 400 },
      );
    }

    const endpoint = env.API_BASE_URL
      ? new URL('/api/v1/contact', env.API_BASE_URL).toString()
      : null;

    if (!endpoint) {
      return NextResponse.json(
        { error: 'API_BASE_URL is not configured.' },
        { status: 500 },
      );
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, email, message }),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            payload?.error || 'Unable to submit contact form at this time.',
        },
        { status: response.status },
      );
    }

    return NextResponse.json(
      payload ?? { success: true, message: 'Contact form submitted.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
