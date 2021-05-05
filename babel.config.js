module.exports = function (api) {
  api.cache(true)

    const presets = [
        "@babel/preset-react",
        ["@babel/preset-env",
            {
                "targets": {
                    "browsers": ["last 2 versions"]
                }
            }
        ]
    ];
    
    const plugins = [
        "emotion",
        "babel-plugin-rewire",
        "@babel/transform-runtime",
        "@babel/plugin-proposal-class-properties"
    ];
  
    return {
        presets,
        plugins
    };
  }