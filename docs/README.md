# Data aggregation

## What?

For this project, I decided to aggregate the data of the videos I watch on YouTube. The main questions I want to answer are:
- Did I at some point go down a rabbithole?
- What kind of videos do I get anxiety from?
- Why do I watch YouTube?
- What YouTubers do I watch most?
- What subjects do I watch the most videos about?

## Explanation graphs

- Graph 1: goal
  I made this chart a pie chart because I wanted to visualise the ratio between the goals. It clearly illustrates how much each type contributes to my total content consumption.

- Graph 2: total time watched
  I decided that the easiest way to visualise the amount of time I've spent watching YouTube was to count it all up and display the number. Numbers are also impactful and can grab attention quickly. 

- Graph 3: rabbitholes
  I used a single number to represent the amount of rabbitholes I went through because it provides a straightforward, representation of the data. It avoids overwhelming the viewer with excessive details and highlights the core insight directly.

- Graph 4: Topic VS anxiety
  I combined a line and a bar chart to show the relation between the topic and the anxiety level whilst watching a video about that topic. 

- Graph 5: Top YouTubers
  I chose to make a top 5 in list format to clearly show the hierarchy between the YouTubers.  

## How?

1. The data gets collected from the form and gets sent to Supabase via the formHandler.js file.

## Conventions

- Naming
  Images: lowercase, seperated with underscores \
  File names: camelCase \
  Classes: nouns, starting with a capital \
  Functions: camelCase \
  Variables: camelCase \
  Branches: lowercase, seperated with - \
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

- Formatting javascript
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

- Formatting CSS
  .class {

  }
  --> Add a space between the name and the curly brackets

- Arrays
  ```
  const filteredPaintings = [];
  ```
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Comments \
  Only use comments if the logic of the code isn't obvious \
  Don't use shorthand \
  Use single line comments \
  Leave a space between the slashes and the comment \
  Start with a capital letter, like a sentence, but don't end the comment with a period \
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Commits
  formatted in the conventional method 
  Source: (https://www.conventionalcommits.org/en/v1.0.0/)

## Files breakdown

- Assets
  Make sure you put your file in the right location, for example: don't put a jpeg in the 'videos' folder
  If a folder starts containing more than 20 items, create subfolders based on the page you are using it for
  Source: (https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

- docs
  LICENSE: the license of this product
  progress.md: a step by step of how I made this project
  README.md: Information about the project, conventions, and data flow
  CREDITS.md: A summary of the things I used whilst making this project
  Contributing.md: A document that has guidelines in case you want to contribute to this project
  CODE_OF_CONDUCT.md: Contains guidelines on the rules you should follow when you interact with this project

- scripts
    - classes: contains all the classes used in this project
        YouTubeVideo.js: a class for the data structure of a YouTube video
    - data-manipulation: all the js files that have to with the retrieval and the sorting of the data
        dataProcessing.js: processes and sorts the data so it's ready for the graphs
        fetch.js: fetches the data from the database
    - logic: all the js files that have to do with getting the data from the form and sending it to the database
        formHandler.js: retrieves the data from the form and sends it through to Supabase
        supabaseConnection.js: creates the connection with the Supabase database


- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

## Data flow

- Data retrieval (form) 
  The data gets sent in via index.html

- Data collection
  The form submission is intercepted, and data is gathered into a formData object in formHandler.js

- Data insertion:
  The formData is inserted into the youtube_stats table in Supabase in formHandler.js

- Database connection
  Database connection is handled by supabaseConnection.js

- Data retrieval (database)
  The data gets fetched by fetch.js

- Data sorting
  The data gets handled and sorted by dataProcessing.js

- Data object
  The data gets structured in YouTubeVideo.js
  
- Data visualisation 
  The graphs get made in dataProcessing.js and get shown in stats.html

## Data collection

- Source
  All data originates from YouTube videos watched by me, with detailed tracking of relevant attributes such as title, topic, duration, and viewing intent
- Method
  As soon as I watched a YouTube video, I filled in the form and it got saved in the database
- Verification
  The source, method, and origin of the data were verified to maintain the integrity of the dataset used for analysis

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
- [ChatGPT_time_calculation](https://chatgpt.com/share/67794cc9-9c08-800d-bb43-8c45e80a5151)
- [Chart.js](https://www.chartjs.org/docs/latest/charts/mixed.html)

