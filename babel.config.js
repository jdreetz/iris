module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        loose: true,
        shippedProposals: true,
        targets: {
          browsers: [
            '>5%',
            'last 2 Chrome versions',
            'last 2 Edge versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
          ],
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
  ],
};
