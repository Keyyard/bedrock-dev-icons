# Bedrock Dev Icons

A pixelated VS Code icon theme pack designed for Minecraft Bedrock Addon developers. This pack provides custom folder icons for structured addon development, making it easier to navigate your Bedrock projects.

## Features

- **Pixelated Design**: All icons feature a pixelated aesthetic that matches Minecraft's visual style
- **Comprehensive Coverage**: Icons for all major Bedrock addon folder types
- **Behavior Pack (BP) Icons**: 
  - `aim_assist`, `animation_controllers`, `animations`, `biomes`, `blocks`
  - `cameras`, `dialogue`, `entities`, `feature_rules`, `features`
  - `functions`, `item_catalog`, `items`, `loot_tables`, `presets`
  - `recipes`, `scripts`, `texts`, `trading`, `worldgen`
  - And many more specialized folders
- **Resource Pack (RP) Icons**: 
  - `animation_controllers`, `animations`, `attachables`, `entity`, `fogs`
  - `fonts`, `items`, `materials`, `models`, `particles`
  - `sounds`, `texts`, `textures`, and more

## Installation

### From VS Code Marketplace (Coming Soon)
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Bedrock Dev Icons"
4. Click Install

### Manual Installation (For Development)
1. Clone this repository
2. Copy the folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`
3. Restart VS Code
4. Go to File > Preferences > File Icon Theme
5. Select "Bedrock Dev Icons"

## Usage

Once installed and activated:

1. Go to **File > Preferences > File Icon Theme** (or **Code > Preferences > File Icon Theme** on macOS)
2. Select **"Bedrock Dev Icons"** from the list
3. Your folder icons will automatically update to show the pixelated Bedrock-themed icons

## Supported Folder Structure

This theme is designed to work with the standard Minecraft Bedrock addon folder structure:

```
your-addon/
├── BP/                     # Behavior Pack
│   ├── aim_assist/
│   ├── animation_controllers/
│   ├── animations/
│   ├── biomes/
│   ├── blocks/
│   ├── cameras/
│   ├── dialogue/
│   ├── entities/
│   ├── features/
│   ├── functions/
│   ├── items/
│   ├── loot_tables/
│   ├── recipes/
│   ├── scripts/
│   ├── texts/
│   ├── trading/
│   ├── worldgen/
│   └── manifest.json
└── RP/                     # Resource Pack
    ├── animation_controllers/
    ├── animations/
    ├── attachables/
    ├── entity/
    ├── fogs/
    ├── fonts/
    ├── items/
    ├── materials/
    ├── models/
    ├── particles/
    ├── sounds/
    ├── texts/
    ├── textures/
    ├── ui/
    └── manifest.json
```

## Contributing

Contributions are welcome! If you have suggestions for new icons or improvements:

1. Fork this repository
2. Create a feature branch
3. Add your icons to the appropriate folder in `icons/`
4. Update the `icon-theme.json` file to include your new icons
5. Submit a pull request

### Icon Guidelines

- Icons should be PNG format
- Recommended size: 32x32 pixels
- Use a pixelated style consistent with Minecraft aesthetics
- Ensure good contrast for both light and dark themes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/keyyard/bedrock-dev-icons/issues) on GitHub.

---

Made with ❤️ for the Minecraft Bedrock development community
