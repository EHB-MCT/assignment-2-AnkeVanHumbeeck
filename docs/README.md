## Conventions

- Naming
  Images: lowercase, seperated with underscores
  File names: camelCase
  Classes: nouns, starting with a capital
  Functions: camelCase
  Variables: camelCase
  Branches: lowercase, seperated with -
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

- Placing
  Constants: top of the file
  Source: (https://www.w3schools.com/js/js_conventions.asp)

- Formatting
  Before and after a + , - , = , => , < , > a space

  Functions, foreach, and other things that use curly brackets are formatted like this:
  ```
  fun() {

  }
  ```

  line length < 80
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

  Use 'prettier' to keep the style consistent. Use it for correct indentation, whitespace, and line lengths
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

  Use single quotes for strings except to avoid escaping
  ```
  console.log('helloWorld');
  ```

  ```
  $("<div class='box'>")
  console.log(`hello ${name}`)
  ```
  Source: (https://standardjs.com/rules.html)

- Arrays
  ```
  const filteredPaintings = [];
  ```
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Comments
  Only use comments if the logic of the code isn't obvious
  Don't use shorthand
  Use single line comments
  Leave a space between the slashes and the comment
  Start with a capital letter, like a sentence, but don't end the comment with a period
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Commits
  formatted in the conventional method 
  Source: (https://www.conventionalcommits.org/en/v1.0.0/)
