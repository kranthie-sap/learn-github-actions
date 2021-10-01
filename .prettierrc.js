// https://prettier.io/docs/en/options.html
// https://prettier.io/docs/en/options.html#parser
// https://github.wdf.sap.corp/ux-engineering/tools-suite/blob/master/docs/dev-guide/formatting.md


/* Override the shared config in individual packages if required like this:
    module.exports = {
    ...require("@company/prettier-config"),
    semi: false
    };
*/
module.exports = {
    arrowParens: 'always',
    singleQuote: true,
    semi: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: true,
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    printWidth: 120,
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: [ '*.yaml', '*.yml', '*.json'],
            options: { tabWidth: 2}
        }
     ]
};
