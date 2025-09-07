This project uses a Hugo folder layout with the following layout structure:
      
benchmark
└── layouts/
    ├── _default_/
    |   └── baseof.html            # base layout for all HTML pages 
    ├── c/
    |   └── list.html              # layout for certification overview page
    |   └── single.html            # layout for certification detail page
    ├── q/
    |   └── results.html           # layout for quiz results page
    |   └── single.html            # layout for quiz detail page
    └── question/
        └── multiple.html          # layout for question, 2+ correct answers
        └── single.html            # layout for question, one correct answer
