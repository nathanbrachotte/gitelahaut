import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = context.url;
  
  // Redirect www to non-www
  if (url.hostname === "www.gitelahaut.com") {
    const newUrl = new URL(url);
    newUrl.hostname = "gitelahaut.com";
    return new Response(null, {
      status: 301,
      headers: {
        Location: newUrl.toString(),
      },
    });
  }
  
  return next();
};

