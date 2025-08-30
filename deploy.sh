#!/bin/bash

# Build the project
npm run build

# Copy built files to root for GitHub Pages
cp -r dist/* .

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to main branch
git push origin main
