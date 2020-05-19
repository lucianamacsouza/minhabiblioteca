const PROXY_CONFIG = [
   {
       context: ['/api'],
       target: ['http://localhost:8080/'],
       secure: false,
       changeOrigin: true,
       loglevel: 'debug',
       pathRewrite: { '^/api':'' }
   }

];

module.exports = PROXY_CONFIG;