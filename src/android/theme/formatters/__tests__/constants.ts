import { AndroidThemeOptions, AndroidTheme } from '../../../types'

export const DUMMY_ANDROID_THEME: AndroidTheme = {
  name: 'light',
  typography: {
    destination: '',
    packageName: 'org.example',
  },
  spacings: {
    destination: '',
    packageName: 'org.example',
  },
  colors: {
    destination: '',
    packageName: 'org.example',
  },
}

export const DUMMY_ANDROID_THEME_OPTIONS: AndroidThemeOptions = {
  theme: DUMMY_ANDROID_THEME,
  basePackageName: 'org.example',
}
