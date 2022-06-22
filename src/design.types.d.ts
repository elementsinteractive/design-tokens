export type Platform = 'android'

export type AndroidConfig = {
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