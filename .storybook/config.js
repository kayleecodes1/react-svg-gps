import { addParameters, configure } from '@storybook/react';

addParameters({
    options: {
        showPanel: false,
        theme: {
            base: 'light',
            brandTitle: 'React SVG GPS',
            brandUrl: 'https://github.com/kylepixel/react-svg-gps',
            brandImage: 'https://raw.githubusercontent.com/kylepixel/react-svg-gps/master/logo.png',
        }
    }
});

configure(() => { require('../examples/index.jsx'); }, module);
