import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const entries = Array.from(formData.entries());
  const data = new URLSearchParams();
  entries.forEach(([key, value]) => {
    data.append(key, value as string);
  });

  // Route to different Formspree endpoints based on form-name
  const formName = formData.get('form-name');
  let endpoint = 'https://formspree.io/f/mayvlqzv'; // default (for other forms)
  if (formName === 'contact') {
    endpoint = 'https://formspree.io/f/xblyaoge';
  } else if (formName === 'volunteer') {
    endpoint = 'https://formspree.io/f/mnnvbdpk';
  } else if (formName === 'partner') {
    endpoint = 'https://formspree.io/f/xjkrewyn';
  }

  // Forward the form data to Formspree's endpoint
  const formspreeResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
  });

  if (formspreeResponse.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
} 