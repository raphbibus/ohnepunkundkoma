module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'display': ['"Wallpoet"', 'ui-monospace', 'SFMono-Regular',],
            'sans': ['"Coda"', 'ui-sans-serif', 'system-ui', ],
            'serif': ['ui-serif', 'Georgia', ],
            'mono': ['"Press Start 2P"', 'SFMono-Regular', ],
        },
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
                punk: {
                    pink: '#E7227E',
                    violet: '#BD18F5',
                    dark: '#252525',
                    light: '#EFEFEF',
                }
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
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
