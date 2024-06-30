module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard", "plugin:storybook/recommended"],
    "overrides": [
        {
            "files": ["*.js", "*.jsx"], // Aplica estas configuraciones a los archivos JavaScript y JSX
            "rules": {
                "no-unused-vars": "off" // Desactiva la regla no-unused-vars para estos archivos
            }
        },
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
