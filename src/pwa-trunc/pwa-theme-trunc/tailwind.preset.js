const { getColors } = require('@magento/pwa-theme-venia/lib/colors');
const veniaPlugin = require('@magento/pwa-theme-venia/plugins');
/**
 * This is the main tailwindcss theme file for the Venia theme
 */

module.exports = {
    important: '#root',
    plugins: [veniaPlugin],
    theme: {
        backgroundColor: theme => theme('colors'),
        borderColor: theme => theme('colors'),
        colors: getColors(),
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Cochin', 'serif']
        },
        extend: {
            zIndex: {
                3: '3',
                11: '11'
            },
            spacing: {},
            gridTemplateColumns: {},
            gridTemplateRows: {
                header: '5rem'
            },
            lineHeight: {},
            maxHeight: {},
            minHeight: {
                header: '5rem'
            },
            maxWidth: {
                desktop: '1440px'
            }
        },
        transitionDuration: {}
    }
};
