import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const entries = Array.from(formData.entries());
  const data = new URLSearchParams();
  entries.forEach(([key, value]) => {
    data.append(key, value as string);
  });

  // The form-name field is required for Netlify to recognize the form
  const formName = formData.get('form-name');
  if (!formName) {
    return NextResponse.json({ error: 'Missing form-name' }, { status: 400 });
  }

  // Forward the form data to Netlify's forms endpoint
  const netlifyResponse = await fetch('https://formspree.io/f/mayvlqzv', {
    // Replace with your Netlify forms endpoint if needed
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
  });

  if (netlifyResponse.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
} 