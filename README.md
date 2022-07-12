[![npm version](https://badge.fury.io/js/@makerstreet%2Fdesign-tokens.svg)](https://badge.fury.io/js/@makerstreet%2Fdesign-tokens)

# Elements Design Tokens

> Design System code generation for Elements projects with Figma Tokens and Style Dictionary

## Contents

- [Goal of this library](#goal-of-this-library)
- [Supported platforms](#supported-platforms)
- [Installation](#installation)
- [CLI Usage](#cli-Usage)

## Goal of this library

At Elements we use Figma to create our designs. By using the [Figma Tokens](https://www.figmatokens.com/) plugin we define design tokens by with all the values needed to construct and maintain a design system for a project.

With this library you can generate the theme code for a specific platform.

## Supported platforms

- Android with Compose UI
- iOS with SwiftUI

## Installation

You can install it globally:

```bash
$ npm install -g @makerstreet/design-tokens
```

Or as a dev dependency:

```bash
$ npm install -D @makerstreet/design-tokens
```

If you use yarn:

```bash
$ yarn add @makerstreet/design-tokens --dev
```

## CLI Usage

```bash
elements-design-tokens <platform>
```

| Flag      | Short Flag | Description             |
| --------- | ---------- | ----------------------- |
| --help    | -h         | Display help content    |
| --version | -v         | Display current version |
| platform  |            | Values: android, ios    |

### Android

```bash
elements-design-tokens android
```

| Flag                | Short Flag | Description                                      |
| ------------------- | ---------- | ------------------------------------------------ |
| --input \[input\]   | -i         | JSON file with design tokens                     |
| --config \[config\] | -c         | JSON file with configuration for the theme files |

#### Config file

Contains configuration for the different theme files. Including where to store the file and which packageName to use

```json
{
  "theme": {
    "typography": {
      "destination": "",
      "packageName": ""
    },
    "colors: {
      "destination": "",
      "packageName": ""
    },
    "spacings": {
      "destination": "",
      "packageName": ""
    }
  }
}
```

### iOS

```bash
elements-design-tokens ios
```

| Flag                          | Short Flag | Description                       |
| ----------------------------- | ---------- | --------------------------------- |
| --input \[input\]             | -i         | JSON file with design tokens      |
| --theme \[theme\]             | -t         | Theme name, ex. LightTheme        |
| --destination \[destination\] | -d         | Where to write the generated code |
