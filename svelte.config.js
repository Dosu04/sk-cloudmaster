import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

// import adapter from '@sveltejs/adapter-auto';

// export default {
//   kit: {
//     adapter: adapter({
//       out: 'dist',
//       // Optional: If your app is hosted in a subdirectory, specify the base path here
//       // basePath: '/your-subdirectory',
//       // Optional: Set the value of `hydrate` to false if you encounter issues with hydration
//       // hydrate: false,
//       // Optional: Uncomment the `cjs` line if you need CommonJS module output
//       // cjs: true,
//       // Optional: Uncomment the `amp` line to enable AMP support
//       // amp: true,
//     }),
//   },
// };
