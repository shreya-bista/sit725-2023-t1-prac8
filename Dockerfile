from node:16-alpine
 
WORKDIR /
 
COPY . .
 
EXPOSE 8080
 
RUN npm install
 
CMD ["npm","start"]