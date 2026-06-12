'use strict';

import { listen } from 'quicklink/dist/quicklink.mjs';
import 'lazysizes';
import { Collapse } from 'bootstrap';

// Quicklink prefetches in-viewport links during idle time.
// Restrict to HTML pages — skip images, PDFs, downloads so they aren't pre-fetched.
listen({
  ignores: [
    /\.(?:jpg|jpeg|png|gif|webp|avif|svg|pdf|zip|mp4|webm)(?:$|\?)/i,
    (uri) => uri.includes('#'),
  ],
});
