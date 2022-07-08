export type Platform = 'android'

type BasicConfig = {
  /**
   * Input json file with tokens
   */
  input: string

  /**
   * Package name to be used for the Kotlin files
   */
  packageName: string

  /**
   * Destination
   */
  destination: string
}

/** A config to create Android templates */
export interface AndroidConfig extends BasicConfig { }

/** A config to create iOS templates */
export interface IOSConfig extends BasicConfig { }