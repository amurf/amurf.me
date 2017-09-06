module.exports = {
    mode: 'spa',
    build: {
        publicPath: 'nuxt',
    },
    modules: [
        '@nuxtjs/bootstrap-vue',
    ],
    generate: {
        dir: 'docs-dist',
    },
    head: {
        link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ],
    },
    css: [
        '~/static/main.css',
    ],
}

