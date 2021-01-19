# Hindi Messages for React-Admin

Hindi messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save ra-language-hindi
```


# Basic Usage

To use Hindi Translations in your react-admin application, the quickest way is to use the officially supported polygot i18 library that is shipped with react-admin:

1. Import the necessary packages in your `App.js`:

```js
import polyglotI18nProvider from 'ra-i18n-polyglot';
import hindiMessages from 'ra-language-hindi';
import englishMessages from 'ra-language-english';
```

2. Create a new instance of polygot with the desired language:

```js
// For any existing language (english, for the sake of this example)
const i18nProvider = polyglotI18nProvider(() => englishMessages, 'en');

// For using hindi translations
const i18nProvider = polyglotI18nProvider(() => hindiMessages, 'hi');
```

3. Finally, pass this provider object as a prop to your `Admin` component:

```js
<Admin i18nProvider={i18nProvider} ...>
...
</Admin>
```

4. For more documentation on using translations in react-admin, you can refer to the [official docs](https://marmelab.com/react-admin/Translation.html).

# License

`ra-language-hindi` is licensed under [MIT License](./LICENSE.md).