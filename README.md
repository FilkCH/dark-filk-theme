# Dark Filk Theme 

This is a theme inspired by [One Monokai](https://github.com/azemoh/vscode-one-monokai) but with a darker setting and more vibrant colors. See recommended fonts and settings at the bottom below the screenshots.

## Preview Screenshots

![Theme Screenshot](https://github.com/tilker/dark-filk-theme/blob/master/screenshots.png?raw=true)

![Interface Screenshot](https://github.com/tilker/dark-filk-theme/blob/master/interface.png?raw=true)

## Recommendations

I recommend using colorized brackets with guidelines in this theme. The colors are already defined within the theme settings. Use this in your `settings.json`:

```json
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.guides.bracketPairsHorizontal": false,
    "editor.guides.highlightActiveBracketPair": true,
```
To achieve the cursive font style for certain code you need to use a font that supports cursive like [Operator Mono](https://www.typography.com/fonts/operator/styles) or [Fira Code iScript](https://github.com/kencrocken/FiraCodeiScript) and set the following in your `settings.json`:

```json
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": [
                    "comment",
                    "keyword",
                    "storage.modifier",
                    "storage.type.class.js",
                    "storage.type.js",
                    "entity.other.attribute-name"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "keyword.control.conditional",
                    "keyword.operator"
                ],
                "settings": {
                    "fontStyle": ""
                }
            }
        ]
    }
```