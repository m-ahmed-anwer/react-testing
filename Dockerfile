# Use the Node.js alpine image for a lightweight build
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's layer caching
COPY package*.json ./

# Install dependencies using --legacy-peer-deps to avoid peer dependency conflicts
RUN npm install --legacy-peer-deps

# Copy the rest of the application files to the container
COPY . .

# Set the default command to run tests without watch mode
CMD ["npm", "test", "--", "--watchAll=false"]
