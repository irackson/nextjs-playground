FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# List files to check if package.json and package-lock.json were copied
RUN ls -al

# Install app dependencies
RUN npm install

# Copy everything else (excluding what's in .dockerignore)
COPY . .

# List files to check if all necessary files were copied
RUN ls -al

# Install Prisma Client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "run", "dev"]
