This is a minimal reproduction of a bug where the path to an image is generated without
a trailing slash even though `trailingSlash: true`. The incorrect path leads to an extra
request as the image is first requested without slash which gives a redirect.

Run with `npm run dev` and visit `http://localhost:3000`

Look at the networks tab while loading the page.

Expected behavior is that no redirects should occur.

Actual behavior is that the path to the blurred image is `/_next/image` instead of `/_next/image/`
which leads to a 308 redirect.

It's using `placeholder="blur"` with a `next/image` when `trailingSlash: true` that 
makes the bug visible.

