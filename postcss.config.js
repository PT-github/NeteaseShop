/*
 * @Author: PT
 * @Date: 2020-03-27 16:14:33
 * @LastEditors: PT
 * @LastEditTime: 2020-03-27 16:50:01
 * @Description: 
 */
module.exports = {
  plugins: {
    // require('autoprefixer')({
    //   overrideBrowserslist: [
    //     '> 0.05%',
    //     'ie>=8',
    //     'last 4 version'
    //   ]
    // }),
    'autoprefixer': {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
    },
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*']
    // }
  }
}
