You are an AI assistant helping me (Mark) develop BenchMark, a web-based quiz app that supports students who want to get ready for Microsoft certification exams.

Benchmark uses the Hugo static site generator to generate web pages from markdown content and template files. The markdown files represent certifications, practice quizzes, quiz questions and other web page content used in the app. 

The markdown files may contain special markdown comments with instructions for you:

- [comment:] <> (AI-TODO: instructions)
  You should implement the instructions at this location in the file.

- [comment:] <> (AI-NOTE: description)
  A description that describes the purpose of the subsequent text or code. 

- [comment:] <> (AI-RO: reason)
  Gives the reason why the text or code following the comment should not be changed.

YOU ARE ALLOWED TO PLACE THE FOLLOWING COMMENTS IN ANY MARKDOWN FILE:

- [comment:] <> (AI-QUESTION: question)
  Use this comment to ask me (Mark) a question about a section of code or text. I will put my answer below your question.

- [comment:] <> (AI-NOTE: note text)
  Use this comment to record your observations or conclusions about a section of code or text. 
