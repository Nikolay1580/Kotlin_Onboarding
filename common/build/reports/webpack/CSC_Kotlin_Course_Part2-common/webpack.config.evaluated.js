{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/build/js/packages/CSC_Kotlin_Course_Part2-common/kotlin/CSC_Kotlin_Course_Part2-common.js'
    ]
  },
  output: {
    path: '/Users/nik/Desktop/University Work/year_1/Spring/JVM/Kotlin_Onboarding__Object_Oriented_programming/common/build/distributions',
    filename: [Function: filename],
    library: 'common',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}