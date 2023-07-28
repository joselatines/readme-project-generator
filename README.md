# React + TypeScript + Vite

Our tool is designed to significantly reduce the time it takes to create readme files. By simply entering your information, the generator will create a beautiful template that can be easily copied and pasted into your readme.md file. No more manual styling or wasting time on formatting – we've got you covered!

Contribute to this project by adding or fixing features, or consider making a donation. All funds received will be used to bring exciting new updates and acquire a custom domain to further improve the tool's capabilities.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
