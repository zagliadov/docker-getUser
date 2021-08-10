FROM node:12.2.0
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 9001
CMD [ "npm", "start" ]