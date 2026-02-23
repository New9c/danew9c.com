export default function middleware(request) {
    const url = new URL(request.url);
    const hostname = request.headers.get('host');

    const redirects = {
        'leetcode.danew9c.com': 'https://leetcode.com/u/9c-ccccccccc',
        'github.danew9c.com': 'https://github.com/New9c',
    };

    // Check if the current hostname is in our list
    if (redirects[hostname]) {
        return Response.redirect(redirects[hostname], 301);
    }

    // If no match, return nothing (Vercel will continue to your static files)
}

// This config tells Vercel to run this for EVERY request
export const config = {
    matcher: '/:path*',
};
