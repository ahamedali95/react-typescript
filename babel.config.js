module.exports = {
  "presets": [
    "@babel/env",
    "@babel/react",
    // {
    //   "targets": {
    //     "chrome": "81",
    //     "edge": "80",
    //     "firefox": "74",
    //     "safari": "13.1"
    //   }
    // }
  ],
  "plugins" : [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]]
};
