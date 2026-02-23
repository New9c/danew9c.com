import { NextResponse } from 'next/server';

export function middleware(request) {
    const hostname = request.headers.get('host');

    // Define your "Shortcuts" here
    const redirects = {
        'leetcode.danew9c.com': 'https://leetcode.com/u/9c-ccccccccc',
        'github.danew9c.com': 'https://github.com/New9c',
    };

    // Check if the current subdomain exists in our list
    if (redirects[hostname]) {
        return NextResponse.redirect(redirects[hostname], 301);
    }

    // If no match, Vercel continues to serve your normal site files
    return NextResponse.next();
}
