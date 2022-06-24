# Elements Design Tokens

> Design System code generation for Elements projects with Figma Tokens and Style Dictionary

# Goal of this library

At Elements we use Figma to create our designs. By using the [Figma Tokens](https://www.figmatokens.com/) plugin we define design tokens by with all the values needed to construct and maintain a design system for a project.

With this library you can generate the theme code for a specific platform.

## Supported platforms

- Android with Compose UI

## CLI Usage

```bash
elements-design-tokens <platform>
```

| Flag      | Short Flag | Description             |
| --------- | ---------- | ----------------------- |
| --help    | -h         | Display help content    |
| --version | -v         | Display current version |

### Android

```bash
elements-design-tokens android
```

| Flag              | Short Flag | Description                       |
| ----------------- | ---------- | --------------------------------- |
| --input \[input\] | -i         | JSON file with design tokens      |
| --package         | -p         | Kotlin package name               |
| --destination     | -d         | Where to write the generated code |
