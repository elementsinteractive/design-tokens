/**
 * ⚠️ DO NOT MODIFY ⚠️
 * this file is auto generated using elements-design-tokens
 *
 * See https://github.com/elementsinteractive/design-tokens for more info
 */

import SwiftUI

public extension Color {
  /// Namespace to prevent naming collisions with static accessors on
  /// SwiftUI's Color.
  ///
  /// Xcode's autocomplete allows for easy discovery of design system colors.
  /// At any call site that requires a color, type `Color.DesignSystem.<esc>`
  struct jest {
    public static let primaryDefault = Color(hex: 0xffffffff)
    public static let primaryBackground = Color(hex: 0xf4f4f4ff)
    public static let primaryVariant = Color(hex: 0x000000ff)
    public static let secondary = Color(hex: 0xff495bff)
    public static let secondaryVariant = Color(hex: 0xf4f4f4ff)
    public static let surface = Color(hex: 0xffffffff)
    public static let onPrimary = Color(hex: 0xffffffff)
    public static let onSecondary = Color(hex: 0x000000ff)
    public static let onBackground = Color(hex: 0x000000ff)
    public static let onSurface = Color(hex: 0x000000ff)
    public static let purple = Color(hex: 0x5048daff)
    public static let white = Color(hex: 0xffffffff)
    public static let pink = Color(hex: 0xff495bff)
    public static let black = Color(hex: 0x000000ff)
    public static let lightGray = Color(hex: 0xf4f4f4ff)
  }

  /// Initializer for hex-colors.
  /// - Parameter hex: color value.
  private init(hex: Int) {
    self.init(UIColor(hex))
  }
}

private extension UIColor {
  convenience init(_ rgbValue: Int) {
      self.init(
          red: CGFloat((Float((rgbValue & 0xff000000) >> 24)) / 255.0),
          green: CGFloat((Float((rgbValue & 0x00ff0000) >> 16)) / 255.0),
          blue: CGFloat((Float((rgbValue & 0x0000ff00) >> 8)) / 255.0),
          alpha: CGFloat((Float((rgbValue & 0x000000ff) >> 0)) / 255.0))
  }
}