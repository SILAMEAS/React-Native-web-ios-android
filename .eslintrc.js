module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  // 0 = off, 1 = warn, 2 = error
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'no-undef': 1,
    'no-non-null-assertion': 0,
    'no-non-null': 0,
    'no-bitwise': 0,
    'no-empty': 1,
    'react-native/no-inline-styles': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/prop-types': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-no-duplicate-props': 2,
  },
};
