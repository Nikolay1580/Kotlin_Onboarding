let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/build/js/packages/CSC_Kotlin_Course_Part2-common/kotlin/CSC_Kotlin_Course_Part2-common.js"]
};

config.output = {
    path: "/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/common/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "common.js"
            : "common-[name].js";
    },
    library: "common",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/common/build/reports/webpack/CSC_Kotlin_Course_Part2-common/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
