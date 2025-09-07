Read the $ARGUMENTS file and split it into separate files, like this:

- Read the file and figure out where each question ends and the next question starts.
- Put the full text of each individual question and its corresponding answerss in a separate file
- Use the question number as the filename. So question number 1 goes into file '1.md', question number 2 goes into '2.md' and so on. 

Add an extra file '_index.md' with the following contents, where <topic> is the topic of this quiz and <certification> is the official name (and code) of the Microsoft certification (do not add the 'start of file' and 'end of file' lines):

### Start of file
---
title: "Exam Preparation Quiz"
description: "Test your knowledge of <topic>"
type: "q"
layout: "single"
image: az400.jpg
questions: 75
passing: 70
---
This quiz will help you prepare for the <certification> certification. The quiz questions are curated from various public sources and are very similar to what you can expect on the actual certification exam.

The practice set has 75 questions, You need to answer at least 70% of the questions correctly to pass the exam. 

Good luck!
### End of file

Also add an extra file 'results.md' with the following contents, where <link> is a hyperlink to the official Microsoft webpage about the certification (do not add the 'start of file' and 'end of file' lines):

### Start of file
---
title: "Your Results"
type: "q"
layout: "results"
---

You can read more about the <certification> exam here: [<certification code> study guide](<link>).
### End of file

Make sure that you end up with 75 question files, one _index.md file and one results.md file in the current folder.
