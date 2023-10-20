/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    pluginSearchDirs: false,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}

export default config
