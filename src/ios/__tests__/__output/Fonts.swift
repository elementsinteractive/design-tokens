/**
 * ⚠️ DO NOT MODIFY ⚠️
 * this file is auto generated using elements-design-tokens
 *
 * See https://github.com/elementsinteractive/design-tokens for more info
 */

import SwiftUI

public extension Font {
  /// Namespace to prevent naming collisions with static accessors on
  /// SwiftUI's Font.
  ///
  /// Xcode's autocomplete allows for easy discovery of design system fonts.
  /// At any call site that requires a font, type `Font.DesignSystem.<esc>`
  /// TODO: Implement custom typefaces support.
  /// TODO: Impelment `paragraphSpacing`, `textDecoration`, and `textCase` support.
  struct DesignSystem {
      /// Please, use `-1.5` leading with this font.
      public static let H1 = Font.systemFont(
        size: 96,
        weightName: "Light"
      )
      /// Please, use `-0.5` leading with this font.
      public static let H2 = Font.systemFont(
        size: 60,
        weightName: "Light"
      )
      public static let H3 = Font.systemFont(size: 48)
      /// Please, use `0.25` leading with this font.
      public static let H4 = Font.systemFont(size: 34)
      public static let H5 = Font.systemFont(size: 24)
      /// Please, use `0.15` leading with this font.
      public static let H6 = Font.systemFont(size: 20)
      /// Please, use `0.5` leading with this font.
      public static let Body1 = Font.systemFont(size: 16)
      /// Please, use `0.25` leading with this font.
      public static let Body2 = Font.systemFont(size: 14)
      /// Please, use `0.15` leading with this font.
      public static let Subtitle1 = Font.systemFont(size: 16)
      /// Please, use `0.1` leading with this font.
      public static let Subtitle2 = Font.systemFont(size: 14)
      /// Please, use `1.25` leading with this font.
      public static let Button = Font.systemFont(
        size: 14,
        weightName: "Medium"
      )
      /// Please, use `0.4` leading with this font.
      public static let Caption = Font.systemFont(size: 12)
      /// Please, use `1.5` leading with this font.
      public static let Overline = Font.systemFont(size: 10)
  }

  private static func systemFont(size: CGFloat = 16, weightName: String = "Regular") -> Font {
      return system(size: size).weight(weightName.asFontWeight())
  }
}

private extension String {
  /// Matches string with `Font.Weight` constant.
  func asFontWeight() -> Font.Weight {
      guard let font = Font.Weight.all[lowercased()] else {
          assertionFailure("Unknown font weight name: \(self)")
          return .regular
      }
      return font
  }
}

private extension Font.Weight {
  /// Returns name to font weight contstant mapping.
  static var all: [String: Font.Weight] {
      [
          "ultralight": .ultraLight,
          "thin": .thin,
          "light": .light,
          "regular": .regular,
          "medium": .medium,
          "semibold": .semibold,
          "bold": .bold,
          "heavy": .heavy,
          "black": .black
      ]
  }
}