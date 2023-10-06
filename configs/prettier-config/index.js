// Refer: https://prettier.io/docs/en/install.html

// eslint-disable-next-line no-undef
module.exports = {
  /**
   * Include parentheses around a sole arrow function parameter.
   * Valid options:
   * "always" - Always include parens. Example: (x) => x
   * "avoid" - Omit parens when possible. Example: x => x
   */
  arrowParens: 'always',

  /**
   * Print spaces between brackets in object literals.
   * Valid options:
   * true - Example: { foo: bar }.
   * false - Example: {foo: bar}.
   */
  bracketSpacing: true,

  /**
   * printWidth set to 80 specifies that the printer will wrap any lines that exceed 80 characters.
   */
  printWidth: 100,

  /**
   * Semi set to true means that Prettier will add semicolons when necessary.
   */
  semi: true,

  /**
   * singleQuote: set to true means that Prettier will prefer single quotes
   * instead of double quotes unless the number of double-quotes outweighs
   * the number of single-quotes.
   */
  singleQuote: true,

  /**
   * Specify the number of spaces per indentation-level.
   */
  tabWidth: 2,

  /**
   * trailingComma set to none means that Prettier will remove
   * any trailing commas at the end of objects.
   */
  trailingComma: 'none'
};
