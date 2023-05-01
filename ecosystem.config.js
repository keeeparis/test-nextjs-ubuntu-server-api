module.exports = {
  apps: [
    {
      name: "seesaw.kz-api",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
