module.exports = {
  "parser": "babel-eslint",
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'node_modules']
      }
    }
  },
};
