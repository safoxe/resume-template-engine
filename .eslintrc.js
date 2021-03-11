module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.app.json'],
        createDefaultProgram: true,
      },
      extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
