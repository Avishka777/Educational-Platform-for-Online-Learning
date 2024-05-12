import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/courseservice': {
        target: 'http://localhost:5000',
        secure: false,
      },
      '/authservice': {
        target: 'http://localhost:5000',
        secure: false,
      },
      '/paymentservice': {
        target: 'http://localhost:5000',
        secure: false,
      },
      '/notificationservice': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});