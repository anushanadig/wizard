// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

// module.exports = {
//   plugins: [
//     new MomentLocalesPlugin({
//       localesToKeep: ['fr']
//     })
//   ]
// };
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "sass-loader",
//             options: {
//               additionalData: "$env: " + process.env.CCM + ";",
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// module.exports = config => {
//   config.module.rules = config.module.rules
//     .filter(rule => rule.loader !== 'style-loader')
//     .concat({
//       test: /\.css$/i,
//       loader: 'style-loader',
//       options: {
//         insert: 'body',
//       },
//     });

//   return config;
// };

// module.exports = config => {
//   config.module.rules = config.module.rules
//     .filter(rule => {
//       if(rule.use){
//         rule.use.forEach(element => {
//           if(element.loader === 'style-loader'){
//             return false;
//           }
//           return true;
//         });
//       }
//       return true;
//     })
//     .concat({
//       test: /\.css$/i,
//       loader: 'style-loader',
//       options: {
//         insert: 'body',
//       },
//     });

//   return config;
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [
//           {
//             loader: 'style-loader',
//             options: {
//               insert: 'body',
//             },
//           },
//           'css-loader',
//         ],
//       },
//     ],
//   },
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /^[^\.]+\.css$/,
//         use: [
//           {
//             loader: 'style-loader',
//             options: {
//               insert: function insertBeforeAt(element) {
//                 const parent = document.querySelector('head');
//                 const target = document.querySelector('#id');

//                 const lastInsertedElement =
//                   window._lastElementInsertedByStyleLoader;

//                 if (!lastInsertedElement) {
//                   parent.insertBefore(element, target);
//                 } else if (lastInsertedElement.nextSibling) {
//                   parent.insertBefore(element, lastInsertedElement.nextSibling);
//                 } else {
//                   parent.appendChild(element);
//                 }

//                 window._lastElementInsertedByStyleLoader = element;
//               },
//             },
//           },
//           'css-loader',
//         ],
//       },
//     ],
//   },
// };