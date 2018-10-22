const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/lukwys/tumblr2.git'
  }, (...args) => {
    console.log(args);
  });
  