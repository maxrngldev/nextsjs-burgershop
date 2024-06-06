FROM node:lts-alpine AS base

# Install dependencies only when needed
FROM base AS deps

# Add missing library that other packages might need 🔽 
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

CMD [ "npm", "run", "dev" ]
