/**
 * Cloudflare Workers entrypoint for GuruBusiness
 * Serves static HTML Design Components with proper caching headers
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;

    try {
      // Attempt to fetch the file from Cloudflare KV or as static asset
      const response = await fetch(new Request(new URL(path, url.origin), request));
      
      if (response.status === 404) {
        // Fallback to index.html for client-side routing
        return new Response(await fetch(new URL('/index.html', url.origin)), {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }

      // Clone response and add caching headers
      const newResponse = new Response(response.body, response);
      
      // Cache HTML files for 1 hour, assets for 7 days
      if (path.endsWith('.html') || path.endsWith('.dc.html')) {
        newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
        newResponse.headers.set('Content-Type', 'text/html; charset=utf-8');
      } else if (path.endsWith('.js') || path.endsWith('.css')) {
        newResponse.headers.set('Cache-Control', 'public, max-age=604800, immutable');
      } else {
        newResponse.headers.set('Cache-Control', 'public, max-age=604800');
      }

      // Security headers
      newResponse.headers.set('X-Content-Type-Options', 'nosniff');
      newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
      newResponse.headers.set('X-XSS-Protection', '1; mode=block');
      newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

      return newResponse;
    } catch (error) {
      return new Response('Service unavailable', { status: 503 });
    }
  },
};
