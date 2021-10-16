module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#FFF',
                        h1: {
                            color: '#FFF'
                        },
                        h2: {
                            color: '#FFF'
                        },
                        h3: {
                            color: '#FFF'
                        },
                        h4: {
                            color: '#FFF',
                            fontWeight: 'bold',
                        },
                        strong: {
                            color: '#FFF',
                            fontWeight: 'bold',
                        },
                        a: {
                            color: '#3182ce',
                            '&:hover': {
                                color: '#2c5282',
                            },
                        },
                        blockquote: {
                            color: '#FFF',
                            borderLeftColor: '#FFF',
                        },
                        img: {
                            borderRadius: '0.75rem',
                        }
                    },
                },
            },
            fontSize: {
                '10xl': '10rem',
            },
            colors: {

            },
            minHeight: {
                '0': '0',
                '25vh': '25vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '75vh': '75vh',
                '80vh': '80vh',
                '90vh': '90vh',
            },
            height: {
                '75vh': '75vh',
                '90vh': '90vh',
            },
            backgroundImage: theme => ({

            }),
            zIndex: {
                '-1000': '-1000',
            }
        },
    },
    variants: {
        extend: {
            fontWeight: ['dark', 'hover', 'focus'],
            borderColor: ['dark', 'active'],
            borderWidth: ['dark', 'hover', 'focus'],
            borderRadius: ['dark', 'hover', 'focus'],
            borderStyle: ['dark', 'hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
