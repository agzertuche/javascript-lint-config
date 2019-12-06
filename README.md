# Instructions

## STEP-0 - Explain repository

1. Introduction

   1. What is static analysis?
   2. Tools:
      [mre/awesome-static-analysis](https://github.com/mre/awesome-static-analysis#javascript)

2. Pre-requisitos

   1. Node 10.x
   2. npm

## STEP-1 - NPM

1.  Explain files
2.  Initialize npm:

            npm init -y

3.  install babel

    1.  Follow instructions:

        [Babel · The compiler for next generation JavaScript](https://babeljs.io/setup#installation)

        1.  npm install

            npm install --save-dev @babel/core @babel/cli

        2.  add build script on package.json

                "scripts": {
                    "build": "babel src --out-dir dist"
                  },

        3.  npm i preset

                npm install @babel/preset-env --save-dev

        4.  Add .babelrc file

                { "presets": ["@babel/preset-env"] }

4.  build code:

        npm run build

5.  add gitignore file
    1. Ctrl + shit + p: and choose gitignore (Node)
    2. dist folder ignored

## STEP-2 - ESLINT

1.  What is ESLINT?

    [ESLint - Pluggable JavaScript linter](https://eslint.org/)

2.  Install eslint

        npm install -D eslint
        npx eslint .

3.  add .eslintrc file

        {
          "parserOptions": {
            "ecmaVersion": 2019,
            "sourceType": "module"
          }
        }

4.  add rules and environment options

        "rules": {
            "no-console": "off",
            "no-unused-vars": "warn",
            "semi": "error"
          },
        "env": {
            "browser": true,
            "node": true
          }

5.  Install ESLint extension:

    [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

6.  Show errors on files
7.  Show contextual menu to fix errors manually

    1.  fix
    2.  disable eslint
    3.  run fix

            npx eslint . --fix

8.  add eslint ignore file

    1.  create a new file ".eslintignore"
    2.  ignore dist folder:

            dist/*
            node_modules/*

9.  Add extends config:

        "extends": [
            "eslint:recommended"
          ],
          "rules": {}

10. run "npx eslint . —fix"
11. fix others errors manually
12. add lint script to package.json

        "scripts": {
            "build": "babel src --out-dir dist",
            "lint": "eslint . --ignore-path .gitignore"
          },

13. remove .eslintignore file to avoid duplication
14. end

## STEP-3 - PRETTIER

1.  What is prettier?

    [Prettier · Opinionated Code Formatter](https://prettier.io/)

2.  Install prettier

        npm install -D prettier

3.  run:

    1.  preview:

            npx prettier src/format.js

    2.  save changes:

            npx prettier src/format.js —write

4.  Add npm script to run prettier:

        "format": "prettier --write \"**/*.+(js|json|md|css)\""

5.  run: npm run build, then:

        npm run format

6.  Show that prettier is also formatting dist files
7.  Add ignore path to npm script

        "format": "prettier --write \"**/*.+(js|json|md|css)\" --ignore-path .gitignore"

8.  Show config on prettier playground and copy config json
9.  Add a ".prettierrc" and peste config json, then run npx run format

        {
          "arrowParens": "avoid",
          "bracketSpacing": false,
          "htmlWhitespaceSensitivity": "css",
          "insertPragma": false,
          "jsxBracketSameLine": false,
          "jsxSingleQuote": false,
          "printWidth": 80,
          "proseWrap": "always",
          "quoteProps": "as-needed",
          "requirePragma": false,
          "semi": false,
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "all",
          "useTabs": false
        }

10. Install prettier extension

    [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

11. open workspace vscode settings and configure:

        {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true,
          "[javascript]": {
            "editor.formatOnSave": true
          }
        }

12. Edit and save file to show how is formatted automatically
13. Explain format and linting conflicts between prettier and eslint

        "rules": {
            "semi": "error"
          }

14. npm run lint then npm run format
15. Install eslint-config-prettier

        npm i eslint-config-prettier -D

16. Update eslintrc

        "extends": ["eslint:recommended", "eslint-config-prettier"],
          "rules": {}

17. show that errors are not showing anymore
18. Update npm scripts

        "format": "prettier \"**/*.+(js|json|md|css)\" --ignore-path .gitignore",
         "format:fix": "npm run format -- --write",
         "validate": "npm run format:fix && npm run lint && npm run build"

19. end

## STEP-4 - TYPESCRIPT

1.  What is TypeScript

    [Why TypeScript?](https://www.typescriptlang.org/)

2.  install typescript

        npm i -D typescript

3.  change classes.js file extension to .ts
4.  use typescript compiler:

        npx tsc src/classes.ts

5.  add tsconfig.json: (noEmit to no compile js since we are using babel)

        {
          "compilerOptions": {
            "noEmit": true,
            "strict": true,
            "allowJs": true
          },
          "include": ["src/**/*"],
          "exclude": ["node_modules"]
        }

6.  run: npx tsc
7.  update npm scripts:

        "check-types": "tsc",
            "validate": "npm run check-types && npm run format:fix && npm run lint && npm run build"

8.  update classes file:

        class MyClass {
          name: string
          constructor() {
            this.name = 'MyClass...'
          }

          sayHi(): void {
            console.log('Hi ' + this.name)
          }
        }

        const myClass = new MyClass()
        myClass.sayHi()

9.  run: npm run check-types and explain eslint conflict error
10. run: npm run build and explain babel is not compiling ts files
11. update build script to compile ts files:

        "build": "babel src --extensions .js,.ts --out-dir dist",

12. run: npm run build and show error
13. Install:

        npm install --save-dev @babel/preset-typescript

14. update babelrc

        "presets": ["@babel/preset-env", "@babel/preset-typescript"]

15. run: npm run build
16. update format script to add |ts| files:

        "format": "prettier \"**/*.+(js|ts|json|md|css)\" --ignore-path .gitignore",

17. run: npm run validate
18. Configure lint for ts files, and explain classes.ts conflicts error

    1. run below commands:

       npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

19. update eslintrc:

        "overrides": [
            {
              "files": "**/*.+(ts)",
              "parser": "@typescript-eslint/parser",
              "parserOptions": {
                "project": "./tsconfig.json"
              },
              "plugins": ["@typescript-eslint/eslint-plugin"],
              "extends": [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "eslint-config-prettier/@typescript-eslint"
              ]
            }
          ]

20. update lint npm script

        "lint": "eslint . --ext .js,.ts --ignore-path .gitignore",

21. Update vscode settings:

        {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true,
          "[javascript]": {
            "editor.formatOnSave": true
          },
          "[typescript]": {
            "editor.formatOnSave": true
          }
        }

22. npm run validate
23. check types, change files to ts extension

    1.  fix arrays.ts

            const myArray: Array<string> = []
            if (myArray.length === 0) {
              console.log('Your array is empty... 🤷‍♂️')
            }

            console.group('vowels')
            'aeiou'.split('').map((vowel, index) => console.log(`${index}: ${vowel}`))
            console.groupEnd()

    2.  run:

            npm run build
            node dist/arrays.js
            node dist/classes.js

    3.  check clasess.ts
    4.  fix functions.ts

            const addTwoNumbers = (x: number, y: number): number => {
              return x + y
            }
            console.assert(addTwoNumbers(1, 2) === 3, 'Should be equal to 3')

            const createFooObject = (): {foo: number} => ({
              foo: 1,
            })

            console.assert(createFooObject().foo == 1, 'Foo value should be equal to 1')

    5.  run:

            npm run build
            node dist/functions.js

    6.  fix index.ts

            {
              var varKeyword = "Who's the global variable? it's me!!"

              const constKeyword = "😠 I'm refused to be reasinged!"
              console.log(constKeyword)

              let letKeyword = 'I love changes! 😄'
              console.log(letKeyword)
              letKeyword = "That's what I said... ✌"
              console.log(letKeyword)
            }

            console.log(varKeyword.toUpperCase())

    7.  update rules for eslintrc:

            "overrides": [
                {
                  "files": "**/*.+(ts)",
                  "parser": "@typescript-eslint/parser",
                  "parserOptions": {
                    "project": "./tsconfig.json"
                  },
                  "plugins": ["@typescript-eslint/eslint-plugin"],
                  "extends": [
                    "plugin:@typescript-eslint/eslint-recommended",
                    "plugin:@typescript-eslint/recommended",
                    "eslint-config-prettier/@typescript-eslint"
                  ],
                  "rules": {
                    "no-var": "off"
                  }
                }

    8.  run

        npm run build node dist/index.js

24. end

## STEP-5 - GIT HOOKS

1.  What are git hooks?

    [Git - githooks Documentation](https://git-scm.com/docs/githooks)

2.  Show git hooks on local project: ./.git/hooks
3.  Install husky

    npm install -D husky

4.  add .huskyrc

        {
          "hooks": {
            "pre-commit": "npm run validate"
          }
        }

5.  show bad commit
6.  commit files to test husky configuration

        git add .
        git commit -am "add husky hooks"

7.  Install lint-staged to Automatically format without running npm run validate

        npm i -D lint-staged

8.  add .lintstagedrc file

9.  Update .huskyrc

        {
          "hooks": {
            "pre-commit": "npm run check-types && lint-staged && npm run build"
          }
        }

10. disable formatonsave to verify lint-staged files
11. modify one files
12. perform commit

        git add .
        git commit -am "add lint-staged"

13. Install npm-run-all to run scrips on parallel for quicker commits

        npm i -D npm-run-all

14. update package.json

        "validate": "npm-run-all --parallel check-types format:fix lint build"

15. run: npm run validate
16. commit changes
