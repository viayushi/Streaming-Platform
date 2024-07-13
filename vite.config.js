import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // This ensures that the server listens on all IP addresses
        port: 5173, // You can change this to any port you prefer
        open: true, // Opens the browser automatically
    }
});