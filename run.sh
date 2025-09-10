kill -9 $(lsof -t -i:3001)
# 持续化运行
nohup npm run server > server.log 2>&1 &