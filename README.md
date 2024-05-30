# Astro + Mafs Minimal Example

This is a minimal example of an [Astro](https://astro.build) project that uses the [Mafs](https://mafs.dev) library to render a beautiful mathematical visualization.

## Steps Used to Create This Project

1. Make a new [Astro](https://astro.build/) project (`npm create astro@latest`). I used the `minimal` template and all of the default settings.

2. Add React via the [React Astro integration](https://docs.astro.build/en/guides/integrations-guide/react/) (`npx astro add react`).

3. Add [Mafs](https://mafs.dev/) via the [Mafs installation instructions](https://mafs.dev/guides/get-started/installation) (`npm install --save mafs`).

4. At this point, we're mostly there! I created a React component containing the [Hello f(x)](https://mafs.dev/guides/get-started/hello-f-x) example at `src/components/demo.jsx`, imported this component into `src/pages/index.astro`, and rendered it (`<HelloFx client:load />`). (Don't forget the [client directive](https://docs.astro.build/en/reference/directives-reference/#client-directives)!)

5. **Key Step**: Update `astro.config.msj` to contain the following:

```
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    ssr: { noExternal: ["mafs"] },
  },
});
```

At this point, you should be able to `npm run dev` to start the development server and see your Mafs coordinate plane in action!

Happy visualizing! 🚀📈
