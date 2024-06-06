'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
// const { run } = require('runjs')
// const chalk = require('chalk')
// const config = require('../vue.config.js')
// const rawArgv = process.argv.slice(2)
// const args = rawArgv.join(' ')

// if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
//   const report = rawArgv.includes('--report')

//   run(`vue-cli-service build ${args}`)

//   const port = 9526
//   const publicPath = config.publicPath

//   var connect = require('connect')
//   var serveStatic = require('serve-static')
//   const app = connect()

//   app.use(
//     publicPath,
//     serveStatic('./dist', {
//       index: ['index.html', '/']
//     })
//   )

//   app.listen(port, function () {
//     console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
//     if (report) {
//       console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
//     }

//   })
// } else {
//   run(`vue-cli-service build ${args}`)
// }
