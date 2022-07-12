import { AndroidTheme } from './android/types'

export type Platform = 'android'

type BasicConfig = {
  /**
   * Input json file with tokens
   */
  input: string
}

/** A config to create Android templates */
export interface AndroidConfig extends BasicConfig {
  configPath: string
}

/** A config to create iOS templates */
export interface IOSConfig extends BasicConfig {
  /**
   * Theme name to be used in the Color.swift
   */
  themeName: string

  /**
   * Destination
   */
  destination: string
}
