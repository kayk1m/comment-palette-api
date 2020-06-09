module.exports = {
  apps: [
    {
      // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      name: "palette-api",
      // pm2로 실행될 파일 경로
      script: "./build/server.js",
      env: {
          "PORT": 8081,
          "NODE_ENV": "production",
      },
      watch: true,
      // instances: 0,
      // exec_mode: 'cluster',
      // wait_ready: true,
      // listen_timeout: 50000,
    }
  ]
};