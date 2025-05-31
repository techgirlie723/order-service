# Build & Run Commands
cd order-service
docker build -t order-service .
docker run -d -p 3002:3002 --name order-service-container order-service

# Access URLs
curl localhost:3002
http://localhost:3002/ – Welcome message
http://localhost:3002/orders/1 – Orders for user ID 1

