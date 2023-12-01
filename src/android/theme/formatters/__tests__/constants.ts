import { AndroidThemeOptions, AndroidTheme } from '../../../types'

const fileOptions = {
  destination: '',
  packageName: 'org.example',
}

export const DUMMY_ANDROID_THEME: AndroidTheme = {
  name: 'light',
  typography: {
    ...fileOptions,
  },
  spacings: {
    ...fileOptions,
  },
  colors: {
    ...fileOptions,
  },
  palette: {
    ...fileOptions,
  },
}

export const DUMMY_ANDROID_THEME_OPTIONS: AndroidThemeOptions = {
  theme: DUMMY_ANDROID_THEME,
  globalPackageName: 'org.example',
}
