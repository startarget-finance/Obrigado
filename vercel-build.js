// Script de build para Vercel
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Angular application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed!');
