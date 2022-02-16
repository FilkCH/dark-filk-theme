# Dark Filk Theme 

This is a theme inspired by [One Monokai](https://github.com/azemoh/vscode-one-monokai) but with a darker setting and more vibrant colors and more color differentiation. This theme was especially optimized for frontend web development in HTML, (S)CSS and JS. Syntax highlighting for other languages usually works fine but is untested. See recommended fonts and settings at the bottom below the screenshots.

## Theme Screenshots

Please note that the cursive font code is **not** part of the theme and has to be added by yourself manually as described at the bottom of this page if you want to. Also the interface screenshot might not represent the most recent code color settings of the theme, please focus on the look of the Visual Studio Code program interface.

![Theme Header](https://github.com/FilkCH/dark-filk-theme/blob/master/media/header.png?raw=true)

![SCSS Code Preview](https://github.com/FilkCH/dark-filk-theme/blob/master/media/code_css.png?raw=true)

![JS Code Preview](https://github.com/FilkCH/dark-filk-theme/blob/master/media/code_javascript.png?raw=true)

![HTML Code Preview](https://github.com/FilkCH/dark-filk-theme/blob/master/media/code_html.png?raw=true)

![Interface Screenshot](https://github.com/FilkCH/dark-filk-theme/blob/master/media/interface.png?raw=true)

## Setting Recommendations

I highly recommend using colorized brackets with guidelines in this theme. The colors are already defined within the theme settings. Use this in your `settings.json`:

```json
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.guides.bracketPairsHorizontal": false,
    "editor.guides.highlightActiveBracketPair": true,
```

If you want to achieve the cursive font style for certain code you need to use a font that supports cursive like e.g. purchaseable [Operator Mono](https://www.typography.com/fonts/operator/styles) or free [Fira Code iScript](https://github.com/kencrocken/FiraCodeiScript) and set and feel free to edit the following in your `settings.json`:

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