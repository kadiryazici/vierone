module.exports = {
   testEnvironment: 'node',
   transform: {
      '^.+\\.ts$': 'ts-jest'
   },
   globals: {
      'ts-jest': {
         isolatedModules: true
      }
   }
};
