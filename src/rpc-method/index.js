/* eslint-disable */
module.exports = (
  typeof process=='undefined' ? (require('./browser-rpc-method').default || require('./browser-rpc-method')) : (function(url, opts) {
    return require('./node-rpc-method')(url.replace(/^\/\//g,'https://'), opts);
  })
);
