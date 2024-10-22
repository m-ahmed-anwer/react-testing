FROM node:alpine

WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set the default command to run tests
CMD ["npm", "test", "--", "--watchAll=false"]
