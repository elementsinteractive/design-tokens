export type FormatterConfig = {
  template: string
  header: string
  packageName: string
}

export type ThemeFileOptions = {
  destination: string
  packageName: string
}

export type AndroidTheme = {
  name: string

  typography: ThemeFileOptions

  colors: ThemeFileOptions

  palette: ThemeFileOptions

  spacings: ThemeFileOptions
}

export type AndroidThemeOptions = {
  theme: AndroidTheme

  globalPackageName: string
}

export type AndroidGlobalOptions = {
  packageName: string

  destination: string
}
