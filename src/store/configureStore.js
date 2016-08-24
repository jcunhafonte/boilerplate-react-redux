let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = require('./prod/configureStore.prod.js');
} else {
  loadedStore = require('./dev/configureStore.dev.js');
}

export const configureStore = loadedStore;
