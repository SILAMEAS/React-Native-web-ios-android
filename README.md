## Development

### 1. Naming Conventions

Reference from some of this [**Coding Standards and Good Practice for React Native**](https://gilshaan.medium.com/react-native-coding-standards-and-best-practices-5b4b5c9f4076)

- `Folder`: use snake_case means begin with lower case and use an underscore to separate words. Example: loading_button
- `Component` & `Class`: use PascalCase means begin with upper case for each word. Example: HeaderLeft.tsx
- `Function` & `Variable`: use camelCase means begin with lower case and use upper case to separate words.
  Example:
  MockData.ts, let isChecked = false;
- `Constant`: use upper case with snake_case. Example: API_URL

> We follwed the rules of [eslint.js](https://www.reactnative.guide/6-conventions-and-code-style/6.1-eslint.html).

> Spaces tab: 2, end of line with semicolon `';'`.

### 2. Role of folders

we usually develop code under the folder `src`

- `assets`: store images, icons, or fonts.
- `components`: every component for use on the different screens must store in this directory.
- `config`: configurations of this application like env variables.
- `i18n`: multiple languages.
- `navigation`: manage navigation screen.
- `redux`: for data of state management.
- `screens`:
- `style`: store style files like style.ts or style.css
- `theme`: for customization themes.
- `utils`: create class or function to support this application.

### 3. Environment

- **Java**: [openjdk 11.0.17](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html#:~:text=sparcv9_bin.tar.gz-,Windows%20x64%20Installer,-140.79%20MB)
- **NodeJs**: [18.12.1](https://nodejs.org/en/)

### 4. Configurations

- **react-native-pdf**:
    - we must ignore this package for in webpack because it makes errors on web

      ```javascript js
      // webpack.config.js
      plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /react-native-pdf/,
        }),
      ]
      ```
      > Do not set their options to `{loose: true}` it makes ~~storybook~~ error, and these plugins are ordering

      ```javascript js
      // .babelrc.js
      plugins: [
        '@babel/plugin-transform-flow-strip-types', // fix error flat list   
        '@babel/plugin-proposal-private-methods',  // to support pdfjs
        '@babel/plugin-proposal-class-properties' // required by private methods
      ]
      ```

- **reanimated**: that is required by drawer.

  ```javascript js
  // .babelrc.js
  plugins: [
      '@babel/plugin-proposal-export-namespace-from',  /*for react-native-reanimated works on web*/
      'react-native-reanimated/plugin',
  ]
  ```

  ```javascript js
  // webpack.config.js
  entry: ['babel-polyfill', '../index'],
  module: {
    rules: [
      ...
      {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                {
                  plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-private-methods',
                  ],
                },
              ],
            },
          },
      },
    ]
  }
  ```