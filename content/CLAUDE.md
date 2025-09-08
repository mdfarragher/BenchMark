This project uses a Hugo folder layout with the following content structure:

benchmark
└── content/
    ├── _index.md                      # a welcome page describing the BenchMark app
        └── c/
            └── <certification>/       # folder for certification named <certification>
                └── q/
                    └── <quiz>/        # folder for practice quiz named <quiz>
                        └── _index.md  # description of the practice quiz
                        └── 1.md       # question 1 of the practice quiz
                        └── 2.md       # question 2 of the practice quiz
                        └── <num>.md   # question <num> of the practice quiz
                        └── results.md # results page content of the practice quiz

All files with a numeric filename represent questions in a practice quiz. Each question should be written in Markdown format, with all associated metadata stored in the frontmatter at the top of the file. The exact desired format is as follows:

---                                             # opening frontmatter tag
title: "Choose the correct support plan"        # title of the question, should be an imperative statement
type: "question"                                # always set to "question"
layout: "single"                                # "single" if there is only one correct answer, "multiple" otherwise
answers:                                        # list of answers
    - id: "answer1"                             # unique id of first answer, usually "answer1"
      title: "Basic"                            # text of the first answer
      correct: false                            # indicates that this answer is incorrect
      explain: "The Basic support plan..."      # explanation why the answer is incorrect
    - id: "answer2"                             # unique id of second answer, usually "answer2"
      title: "Standard"                         # text of the second answer
      correct: true                             # indicates that this answer is correct
      explain: "The Standard support plan..."   # explanation why the answer is correct
    - id: "answer3"                             # unique id of third answer, usually "answer3"
                                                # and so on

link: "https://learn.microsoft.com/..."         # link to Microsoft Learn page with more information about the correct answer
more: "Learn more about..."                     # usually "Learn more about [topic of the Microsoft learn page]"
learn: "Azure Support Plans"                    # usually "[topic of the Microsoft learn page]"
---                                             # closing frontmatter tag
You work for MDFT Pro, a well-known...      # the full text of the question, in Markdown format 
