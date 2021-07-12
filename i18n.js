module.exports = {
    locales: ['en', 'tr'],
    defaultLocale: 'tr',
    pages: {
      '*': ['common', 'header', 'product', 'cart']
    },
    interpolation: {
      prefix: '${',
      suffix: '}',
    },
    loadLocaleFrom: (locale, namespace) =>
      import(`./src/translations/${locale}/${namespace}`).then((m) => m.default),
  }