import { defineConfig } from 'vite'
const { resolve } = require('path')
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
})
