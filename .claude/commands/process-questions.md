Perform the following steps on question files $ARGUMENTS in the current folder:

- Rewrite and expand the question text so that it describes a complete scenario. Use roughly 2 paragraphs of text for this. Make sure the scenario refers to MDFT Pro and an educational context.
- Make sure the question text ends with a question (preceded by a blank line), and that the texts of the answers are actually answers to the stated question.
- Avoid questions that ask to evaluate a statement. Instead, quiz the user about the scenario presented in the question text.
- Remove filler sentences like "Select all answers that apply", "Each correct answer presents a complete solution" and "For each of the following statements, select Yes if the statement is true. Otherwise, select No".
- Make sure the question has at least 4 answers (unless the question has Yes/No answers). Add extra answers if needed.
- Convert the question to markdown format. Make sure to leave any SQL or python code in the question intact, and wrap it with the correct markdown syntax for code examples.
- Fix any spelling and grammar mistakes in the question text and answers.
- Fix any coding mistakes, like incorrect Python or SQL code.
- Set up a frontmatter block and fill in the "title", "type" and "layout" properties. 
- Make sure the "layout" property is correct, by checking if there is only one correct answer or if there are more than one correct answers.  
- Move the list of answer to the frontmatter, using the correct format as described above.
- Come up with explanations for all answers. Do not start explanations with "This is incorrect" or "This is correct", because the Hugo templates already add this text. Describe what the feature in the answer does, and why it is applicable or not applicable to the question. Limit each explanation to roughly 1-3 sentences of text.
- Find a web page (preferrably Microsoft Learn) that explains the correct answer, and add the page details to the "more", "learn" and "link" properties of the frontmatter. 
- Make sure the url in the "link" property refers to an existing web page.
- Keep the "more" property short, preferrably just "Learn more about...". 
- Keep the "learn" property short because it will be rendered on a HTML button.
- Make sure the "title" and "learn" properties have the first letter of each word capitalized.

Make sure the scenario in the question text refers to my company, MDFT Pro. You can do this by making the following changes: 

- State that the resources mentioned in the question are operated by "MDFT Pro", a well known training agency.
- State that the student doing the quiz is working for MDFT Pro or has been hired by MDFT Pro.
- Rename any user names in the scenario to "Mark" and "Claire", and make up any other names. Make sure "Mark" is the boss of MDFT Pro in all scenarios.
- Rename any group names in the scenario to TRAINERS, STUDENTS, and make up any other names.
- Rename any resource names to typical training agency resources like "Students", "Trainers", "Customers", "Courses" etc. 
- Rename any app names to applications that are typically used in an educational context.

