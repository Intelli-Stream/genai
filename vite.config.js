import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genai/",
  plugins: [react()],
  build: {
    outDir: 'dist',  // specify where the build output will go
  },
});
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/project/', // Adjust the base path if necessary
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Output directory
//     rollupOptions: {
//       input: 'index.html', // Adjust the path if index.html is not in the root
//     },
//   },
// })
// import { defineConfig } from 'vite';
// export default defineConfig({
//   root: '.', // Ensure the root directory is correctly set
//   build: {
//     outDir: 'dist',
//   },
// });
