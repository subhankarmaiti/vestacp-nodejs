rm -f "$(pwd)/app.sock"
pm2 start app.js
echo "Starting server..."
sleep 2
chmod 777 "$(pwd)/app.sock"
echo "Server started..."