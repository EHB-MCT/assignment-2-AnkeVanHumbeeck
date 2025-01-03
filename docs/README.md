# Data aggregation

## What?
For this project, I decided to aggregate the data of the videos I watch on YouTube. The main questions I want to answer are:
- Did I at some point go down a rabbithole?
- What kind of videos do I get anxiety from?
- Why do I watch YouTube?
- What YouTubers do I watch most?
- What subjects do I watch the most videos about?

## How?
1. The data gets collected from the form and gets sent to Supabase via the formHandler.js file.

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

  ## Files breakdown

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

- docs
  LICENSE: the license of this product
  progress.md: a step by step of how I made this project
  README.md: Information about the project, conventions, and

- scripts
  formHandler.js: creates a connection with the Supabase database, retrieves the data from the form, and sends it through to Supabase

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

## Data flow

- Data retrieval  
  The data gets sent in via index.html

- Data collection
  The form submission is intercepted, and data is gathered into a formData object in formHandler.js

- Data insertion:
  The formData is inserted into the youtube_stats table in Supabase in formHandler.js

- Database connection
  Database connection is handled by supabaseConnection.js

## Sources
 
- [HTML](https://www.w3schools.com/html/html_forms.asp) used in index.html
- [Database](https://supabase.com/)
- [Database](https://youtu.be/Gz9bvYybaws?si=i2GLdlXpdNyJollV) used in formHandler.js
- [Conventions](https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)
- [Conventions](https://www.w3schools.com/js/js_conventions.asp)
- [Conventions](https://google.github.io/styleguide/jsguide.html) 
- [Conventions](https://www.conventionalcommits.org/en/v1.0.0/) 
- [Conventions](https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)
- [Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Conventions](https://standardjs.com/rules.html)
- [CODE_OF_CONDUCT](https://github.com/probot/template/blob/master/CODE_OF_CONDUCT.md) used as a template for CODE_OF_CONDUCT.mb
- [CODE_OF_CONDUCT](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)
- [Contributions](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) used as a template for contributing.mb