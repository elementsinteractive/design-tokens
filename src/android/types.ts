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
  typography: ThemeFileOptions

  colors: ThemeFileOptions

  spacings: ThemeFileOptions
}

export type AndroidJsonOptions = {
  theme: AndroidTheme
}
