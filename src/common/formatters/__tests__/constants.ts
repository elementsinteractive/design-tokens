export const HEADER = '/* Test header */'

export const PROPERTIES = {

  // Colors
  colors: {
    primary: {
      name: 'primary',
      value: '#fff',
      type: 'color',
    },
    background: {
      name: 'background',
      value: '#F4F4F4FF',
      type: 'color',
    },
    primaryVariant: {
      name: 'primaryVariant',
      value: '#000',
      type: 'color',
    },
    secondary: {
      name: 'secondary',
      value: '#FF495BFF',
      type: 'color',
    },
  },

  // Spacings
  spacings: {
    xxxs: {
      name: 'xxxs',
      value: 4,
      type: 'spacing',
      description: 'XXXS',
    },
    xxs: {
      name: 'xxs',
      value: 8,
      type: 'spacing',
      description: 'XXS',
    },
    xs: {
      name: 'xs',
      value: 12,
      type: 'spacing',
      description: 'XS',
    },
  },

  // Typography
  typography: {
    H1: {
      value: {
        fontFamily: 'Roboto',
        fontWeight: 'Light',
        lineHeight: 'AUTO',
        fontSize: 96,
        letterSpacing: -1.5,
        paragraphSpacing: 0,
        textDecoration: 'none',
        textCase: 'none',
      },
      type: 'typography',
      description: 'Header',
    },
    H2: {
      value: {
        fontFamily: 'Roboto',
        fontWeight: 'Light',
        lineHeight: 'AUTO',
        fontSize: 60,
        letterSpacing: -0.5,
        paragraphSpacing: 0,
        textDecoration: 'none',
        textCase: 'none',
      },
      type: 'typography',
      description: 'Header',
    }
  },
}