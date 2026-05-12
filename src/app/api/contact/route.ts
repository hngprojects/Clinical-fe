import { NextResponse } from 'next/server';
import { env } from '@/env/server';

export async function POST(request: Request) {
  try {
   let body: unknown;
   try {
     body = await request.json();
   } catch {
     return NextResponse.json(
       { error: 'Request body must be valid JSON.' },
       { status: 400 },
     );
   }
   const firstNameRaw = (body as { firstName?: unknown })?.firstName;
   const emailRaw = (body as { email?: unknown })?.email;
   const messageRaw = (body as { message?: unknown })?.message;

    if (
      typeof firstNameRaw !== 'string' ||
      typeof emailRaw !== 'string' ||
      typeof messageRaw !== 'string'
    ) {
      return NextResponse.json(
        { error: 'First name, email, and message must be strings.' },
        { status: 400 },
      );
    }

    const firstName = firstNameRaw.trim();
    const email = emailRaw.trim().toLowerCase();
    const message = messageRaw.trim();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 },
      );
    }

    if (firstName.length > 100) {
      return NextResponse.json(
        { error: 'First name is too long' },
        { status: 400 },
      );
    }
    if (email.length > 254) {
      return NextResponse.json({ error: 'Email is too long' }, { status: 400 });
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long' },
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

    if (response.status === 204) {
      return new NextResponse(null, { status: response.status });
    }

    return NextResponse.json(
      payload ?? { success: true, message: 'Contact form submitted.' },
      { status: response.status },
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
