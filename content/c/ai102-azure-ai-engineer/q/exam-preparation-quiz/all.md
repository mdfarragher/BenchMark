### Question 1

You have an Azure OpenAl resource named Al1 that hosts three deployments of the GPT 3.5 model. Each deployment is optimized for a unique workload.  
You plan to deploy three apps. Each app will access Al1 by using the REST API and will use the deployment that was optimized for the app's intended workload.  
You need to provide each app with access to Al1 and the appropriate deployment. The solution must ensure that only the apps can access Al1.  
What should you use to provide access to Al1, and what should each app use to connect to its appropriate deployment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Provide access to AI1 by using:
An API key
A bearer token
A shared access signature (SAS) token

answer: A bearer token

### Question 2

You have an Azure OpenAl resource named Al1 that hosts three deployments of the GPT 3.5 model. Each deployment is optimized for a unique workload.  
You plan to deploy three apps. Each app will access Al1 by using the REST API and will use the deployment that was optimized for the app's intended workload.  
You need to provide each app with access to Al1 and the appropriate deployment. The solution must ensure that only the apps can access Al1.  
What should you use to provide access to Al1, and what should each app use to connect to its appropriate deployment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Connect to the deployment using:
An API key
A deployment endpoint
A deployment name
A deployment type

answer: A deployment endpoint

### Question 3

You are designing a solution that will answer questions about human resources (HR) policies stored in the PDF format.  
You need to ensure that the identical answer to a specific question is returned every time. The solution must minimize development effort Which service should you include in the solution?

**A.** Azure Al Language

**B.** Azure Al Document Intelligence

**C.** Azure Machine Learning

**D.** Azure OpenAI

answer: a

### Question 4

You have a 20-GB video file named File1.avi that is stored on a local drive.  
You need to index File1.avi by using the Azure AI Video Indexer website.  
What should you do first?

**A.** Upload File1.avi to the www.youtube.com webpage.

**B.** Upload File1.avi to an Azure Storage queue.

**C.** Upload File1.avi to the Azure AI Video Indexer website.

**D.** Upload File1.avi to Microsoft OneDrive.

answer: c

### Question 5

You are developing a webpage that will use the Video Indexer service to display videos of internal company meetings.  
You embed the Player widget and the Cognitive Insights widget into the page.  
You need to configure the widgets to meet the following requirements:  
Ensure that users can search for keywords.  
Display the names and faces of people in the video.  
Show captions in the video in English (United States).  
How should you complete the URL for each widget? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```url
https://www.videoindexer.ai/embed/insights/<accountId>/<videoId>/?widgets=__________&controls=__________
```

Which two fragments should you add to the url to complete it?

true
false
en-US
people, keywords
people, search

Answer: "people, keywords", "search"

### Question 6

You are developing a webpage that will use the Video Indexer service to display videos of internal company meetings.  
You embed the Player widget and the Cognitive Insights widget into the page.  
You need to configure the widgets to meet the following requirements:  
Ensure that users can search for keywords.  
Display the names and faces of people in the video.  
Show captions in the video in English (United States).  
How should you complete the URL for each widget? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```url
https://www.videoindexer.ai/embed/player/<accountId>/<videoId>/?showcaptions=__________&captions=__________
```

Which two fragments should you add to the url to complete it?

true
false
en-US
people, keywords
people, search

Answer: true, en-US

### Question 7

You have an Azure subscription that contains an Azure OpenAI resource named AH.  
You plan to build an app named App1 that will write press releases by using AM.  
You need to deploy an Azure OpenAI model for Appl. The solution must minimize development effort.  
Which three actions should you perform in sequence in Azure OpenAI Studio? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Create a deployment that uses the GPT-35 Turbo model.
Create a deployment that uses the text-embedding-ada-002 model.
Apply the Default system message template.
Apply the Marketing Writing Assistant system message template.
Deploy the solution to a new web app.

Answer:
Create a deployment that uses the GPT-35 Turbo model.
Apply the Marketing Writing Assistant system message template.
Deploy the solution to a new web app.

### Question 8

You develop an application that uses the Face API.  
You need to add multiple images to a person group.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```csharp
Parallel.For (0, PersonCount, async i =>
{
	Guid personld = persons[i].Personld;
	string personImageDir = $"/path/to/person/{i}/images";
	foreach (string imagePath in Directory.GetFi1es(personImageDir, "*.jpg"))
	{
		using (__________ t = File.OpenRead(imagePath))
		{
			await faceClient.PersonGroupPerson.__________(personGroupId, personId, t)
		}
	}
}
```

What should you put at the first placeholder?

File
Stream
Uri
Url

answer: Stream

### Question 9

You develop an application that uses the Face API.  
You need to add multiple images to a person group.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```csharp
Parallel.For (0, PersonCount, async i =>
{
	Guid personld = persons[i].Personld;
	string personImageDir = $"/path/to/person/{i}/images";
	foreach (string imagePath in Directory.GetFi1es(personImageDir, "*.jpg"))
	{
		using (__________ t = File.OpenRead(imagePath))
		{
			await faceClient.PersonGroupPerson.__________(personGroupId, personId, t)
		}
	}
}
```

What should you put at the second placeholder?

AddFaceFromStreamAsync
AddFaceFromUrIAsync
CreateAsync
GetAsync

answer: AddFaceFromStreamAsync

### Question 10

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have a chatbot that uses question answering in Azure Cognitive Service for Language Users report that the responses of the chatbot lark formality when answering spurious questions You need to ensure that the chatbot provides formal responses to spurious questions.  
Solution: From Language Studio, you change the chitchat source to qna_chitchit_friindly.tsv. and then retrain and republish the model.  
Does this meet the goal?

**A.** Yes

**B.** No

answer: b

### Question 11

You deploy a web app that is used as a management portal for indexing in Azure Cognitive Search. The app is configured to use the primary admin key.  
During a security review, you discover unauthorized changes to the search index. You suspect that the primary access key is compromised.  
You need to prevent unauthorized access to the index management endpoint. The solution must minimize downtime.  
What should you do next?

**A.** Add a new query key, change the app to use the new query key, and then delete all the unused query keys.

**B.** Regenerate the primary admin key, change the app to use the secondary admin key, and then regenerate the secondary admin key.

**C.** Change the app to use a query key, and then regenerate the primary admin key and the secondary admin key.

**D.** Regenerate the secondary admin key, change the app to use the secondary admin key, and then regenerate the primary key.

answer: d

### Question 12

You are using a Language Understanding service to handle natural language input from the users of a web-based customer agent.  
The users report that the agent frequently responds with the following generic response: "Sorry, I don't understand that." You need to improve the ability of the agent to respond to requests.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. (Choose three.)

Add prebuilt domain models as required.
Enable active learning.
Validate the utterances logged for review and modify the model.
Migrate authoring to an Azure resource authoring key.
Enable log collection by using Log Analytics.
Train and republish the Language Understanding model.

Answer:
Enable active learning.
Validate the utterances logged for review and modify the model.
Train and republish the Language Understanding model.

### Question 13

You are developing the chatbot.  
You create the following components:  
* A QnA Maker resource  
* A chatbot by using the Azure Bot Framework SDK.  
You need to integrate the components to meet the chatbot requirements.  
Which property should you use?

**A.** QnADialogResponseOptions.CardNoMatchText

**B.** Qna MakerOptions-ScoreThreshold

**C.** Qna Maker Op t ions StrickFilters

**D.** QnaMakerOptions.RankerType

answer: d

### Question 14

You have an Azure subscription that contains an Anomaly Detector resource. You deploy a Docker host server named Server 1 to the on-premises network. You need to host an instance of the Anomaly Detector service on Server 1. Which parameter should you include in the docker run command?

**A.** Fluentd

**B.** Billing

**C.** Mounts

**D.** Http Proxy

answer: b

### Question 15

You are developing a text processing solution.  
You develop the following method.

```csharp
static void GetKeyPhrases(TextAnalyticsClient textAna1yticsCIient, string text)
{
	var response = textAnalyticsClient.__________(text);
	Console.WriteLine("Key phrases:");
	foreach (string keyphrase in response.Value)
	{
		Console.WriteLine($"\t{keyphrase}");
	}
}
```

What should you put at the placeholder?

Extract
KeyPhrases
GetKeyPhrases
ExtractKeyPhrases

answer: ExtractKeyPhrases

### Question 16

You are developing a text processing solution.  
You develop the following method.

```csharp
static void GetKeyPhrases(TextAnalyticsClient textAna1yticsCIient, string text)
{
	var response = textAnalyticsClient.ExtractKeyPhrases(text);
	Console.WriteLine("Key phrases:");
	foreach (string keyphrase in response.Value)
	{
		Console.WriteLine($"\t{keyphrase}");
	}
}
```

You call the method by using the following code.  

```csharp
GetKeyPhrases(textAnalyticsClient, "the cat sat on the mat");  
```

For each of the following statements, select Yes if the statement is true. Otherwise, select No. 
NOTE: Each correct selection is worth one point.

The output will contain the following words: the, cat, sat, on, and mat.

### Question 17

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it as a result, these questions will not appear in the review screen.  
You are building a chatbot that will use question answering in Azure Cognitive Service for Language.  
You upload Doc1.pdf and train that contains a product catalogue and a price list.  
During testing, users report that the chatbot responds correctly to the following question: What is the price of [product]?   
The chatbot fails to respond to the following question: How much does [product] cost?  
You need to ensure that the chatbot responds correctly to both questions.  
Solution: from Language Studio, you create an entity for price, and then retrain and republish the model.  
Does this meet the goal?

**A.** Yes

**B.** No

answer: b

### Question 18

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have a chatbot that uses question answering in Azure Cognitive Service for Language Users report that the responses of the chatbot lack formality when answering spurious questions You need to ensure that the chatbot provides formal responses to spurious questions.  
Solution: From Language Studio, you change the chitchat source to qna_chitchat_professional.tsv. and then retrain and republish the model.  
Does this meet the goal?

**A.** Yes

**B.** No

answer: b

### Question 19

You have an Azure subscription.  
You need to build an app that will compare documents for semantic similarity. The solution must meet the following requirements:  
* Return numeric vectors that represent the tokens of each document.  
* Minimize development effort.  
Which Azure OpenAI model should you use?

**A.** GPT-3.5

**B.** GPT-4

**C.** DALL-E

**D.** embeddings

answer: d

### Question 20

You have a training dataset that contains 10,000 PDF documents. The documents contain scanned books, comics, and magazines.  
You are building a solution that will use Azure Al and a custom model.  
You need to train the model by using Language Studio. The solution must meet the following requirements:  
* Tag each item as a book, comic, or magazine.  
* Minimize development effort.  
What should you use?

**A.** a multi label image classification model

**B.** a multi label classification project

**C.** a custom extraction model

**D.** a custom named entity recognition (NER) project

answer: b

### Question 21

You have a chatbot that uses the Azure Al Language custom question answering service.  
You need to test the chatbot. The solution must ensure that the chatbot responds only when an answer has a confidence score of at least 95 percent.  
How should you complete the cURL statement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```bash
curl -X POST -H "Ocp-Apim-Subscription-Key: $LANGUAGE_KEY" -H "Content-Type: application/json" -d '{"question": "How much energy does my phone have left?", __________ : "0.95"}' '$LANGUAGE_ENDPOINT.api.cognitive.microsoft.com/language/:query-knwledgebases?projectName=myproj&api-version=2021-10-01'
```

What should you fill in at the placeholder? 

confidence
confidenceScore
confidenceScoreThreshold
confidenceThreshold

answer: confidenceScoreThreshold

### Question 22

You are building an app that will scan confidential documents and use the Language service to analyze the contents.  
You provision an Azure Cognitive Services resource.  
You need to ensure that the app can make requests to the Language service endpoint. The solution must ensure that confidential documents remain on-premises.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Pull an image from Docker Hub.
Provision an on-premises Kubernetes cluster that has Internet connectivity.
Provision an Azure Kubernetes Service (AKS) resource.
Run the container and specify an App ID and Client Secret
Provision an on-premises Kubernetes cluster that is isolated from the internet.
Pull an image from the Microsoft Container Registry (MCR)
Run the container and specify an API key and the Endpoint URL of the Cognitive Services

Answer:
Provision an on-premises Kubernetes cluster that has Internet connectivity.
Pull an image from the Microsoft Container Registry (MCR)
Run the container and specify an API key and the Endpoint URL of the Cognitive Services

### Question 23

You build a custom Form Recognizer model.  
You receive sample files to use for training the model as shown in the following table.

Name
File1
File2
File3
File4
File5
File6

Type
PDF
MP4
JPG
PDF
GIF
JPG

Size
20 MB
100 MB
20 MB
100 MB
1 MB
40 MB

Which three files can you use to train the model? Each correct answer presents a complete solution. (Choose three.) NOTE: Each correct selection is worth one point.

**A.** File1

**B.** File2

**C.** File3

**D.** File4

**E.** File5

**F.** File6

answer: a, b, f

### Question 24

You are building a chatbot.  
You need to ensure that the bot will recognize the names of your company's products and codenames. The solution must minimize development effort.  
Which Azure Cognitive Service for Language service should you include in the solution?

**A.** custom Named Entity Recognition (NER)

**B.** custom text classification

**C.** entity linking

**D.** key phrase extraction

answer: a

### Question 25

You plan to use a Language Understanding application named app1 that is deployed to a container.  
App1 was developed by using a Language Understanding authoring resource named lu1.  
App1 has the versions shown in the following table.

Version
V1.2
V1.1
V1.0

Trained date
None
2020-10-01
2020-09-01

Published date
None
None
2020-09-15

You need to create a container that uses the latest deployable version of app1.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. (Choose three.)

Export the model by using the Export for containers (GZIP) option.
Export the model by using the Export as JSON option.
Select V1.0 of app1.
Select V1.1 of app1.
Select V1.2 of app1.
Run a container and mount the model file.
Run a container that has `version` set as an environment variable.

Answer:
Export the model by using the Export for containers (GZIP) option.
Select V1.1 of app1.
Run a container and mount the model file.

### Question 26

You build a chatbot by using Azure OpenAI Studio.  
You need to ensure that the responses are more deterministic and less creative.  
Which two parameters should you configure? To answer, select the appropriate parameters in the answer area.  
NOTE: Each correct answer is worth one point.

Max response
Temperature
Top P
Stop sequence
Frequency penalty
Presence penalty

Answer:
Temperature
Top P

### Question 27

You have an Azure subscription that contains an Azure OpenA1 resource. You configure a model that has the following settings:  
* Temperature: 1  
* Top probabilities: 0.5  
* Max response tokens: 100  
You ask the model a question and receive the following response.

```json
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "The founder of MDFT Pro is Mark Farragher.",
        "role": "assistant"
      }
    }
  ],
  "created": 1679014554,
  "id": "chatcmpl-6usfny2yyjkbmESe36JdqQ6bDsc01",
  "model": "gpt-3.5-turbo-0301",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 86,
    "prompt_tokens": 37,
    "total_tokens": 123
  }
}
```

Your subscription will be charged 86 tokens for the execution of the session. Is this correct?

Yes
No

Answer: yes

### Question 28

You have an Azure subscription that contains an Azure OpenA1 resource. You configure a model that has the following settings:  
* Temperature: 1  
* Top probabilities: 0.5  
* Max response tokens: 100  
You ask the model a question and receive the following response.

```json
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "The founder of MDFT Pro is Mark Farragher.",
        "role": "assistant"
      }
    }
  ],
  "created": 1679014554,
  "id": "chatcmpl-6usfny2yyjkbmESe36JdqQ6bDsc01",
  "model": "gpt-3.5-turbo-0301",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 86,
    "prompt_tokens": 37,
    "total_tokens": 123
  }
}
```

The text completion was truncated because the Max response tokens value was exceeded. Is this correct?

Yes
No

Answer: no

### Question 29

You have an Azure subscription that contains an Azure OpenA1 resource. You configure a model that has the following settings:  
* Temperature: 1  
* Top probabilities: 0.5  
* Max response tokens: 100  
You ask the model a question and receive the following response.

```json
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "The founder of MDFT Pro is Mark Farragher.",
        "role": "assistant"
      }
    }
  ],
  "created": 1679014554,
  "id": "chatcmpl-6usfny2yyjkbmESe36JdqQ6bDsc01",
  "model": "gpt-3.5-turbo-0301",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 86,
    "prompt_tokens": 37,
    "total_tokens": 123
  }
}
```

The `prompt_tokens` value will be included in the calculation of the Max response tokens value. Is this correct?

Yes
No

Answer: no

### Question 30

You need to measure the public perception of your brand on social media messages. Which Azure Cognitive Services service should you use?

**A.** Text Analytics

**B.** Content Moderator

**C.** Computer Vision

**D.** Form Recognizer

Answer: a

### Question 31

You are building a bot and that will use Language Understanding.  
You have a LUIS ludown file that contains the following content.

```text
## Confirm
- confirm
- ok
- yes

## ExtractName
- call me steve !
- i am anna
- (i'm|i am) {@PersonName.Any}
- my name is {@PersonName.Any}

## Logout
- forget me
- log out

## SelectItem
- choose last
- choose the {@DirectionalReference=bottom left}
- choose {@DirectionalReference=top right}
- i like {@DirectionalReference=left} one

## SelectNone
- none

@ ml DirectionalReference
@ prebuilt personName
```

What is `SelectedItem` in this file?

A domain
An entity
An intent
An utterance

Answer: an intent




### Question 32

You are building a bot and that will use Language Understanding.  
You have a LUIS ludown file that contains the following content.

```text
## Confirm
- confirm
- ok
- yes

## ExtractName
- call me steve !
- i am anna
- (i'm|i am) {@PersonName.Any}
- my name is {@PersonName.Any}

## Logout
- forget me
- log out

## SelectItem
- choose last
- choose the {@DirectionalReference=bottom left}
- choose {@DirectionalReference=top right}
- i like {@DirectionalReference=left} one

## SelectNone
- none

@ ml DirectionalReference
@ prebuilt personName
```

What is `choose {@DirectionalReference=top right}` in this file?

A domain
An entity
An intent
An utterance

Answer: an utterance

### Question 33

You need to develop an automated call handling system that can respond to callers in their own language. The system will support only French and English.  
Which Azure Cognitive Services service should you use to meet each requirement? To answer, drag the appropriate services to the correct requirements. Each service may be used once, more than once, or not at all. You may need to drag the split bat between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

Speaker Recognition
Speech to Text
Text Analytics
Text to Speech
Translator

Answer:
Text Analytics
Translator

### Question 34

You are building a chatbot.  
You need to configure the chatbot to query a knowledge base.  
Which dialog class should you use?

**A.** QnAMakerDialog

**B.** ComponentDialog

**C.** SkillDialog

**D.** AdaptiveDialog

answer: a

### Question 35

You are developing an application to recognize employees' faces by using the Face Recognition API. Images of the faces will be accessible from a URI endpoint.  
The application has the following code.

```csharp
static async void AddFace(string subscription_key, string
personGroupId, string personld, string imageURI)
{
	var client = new HttpC1ient();
	client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscription_key);
	var endpointURI = $"https://westus.api.cognitive.microsoft.com/face/v1.Ø/persongroups/{personGroupId}/persons/{personId}/persistedFaces";
	HttpResponsemessage response;
	var body = "{ \"url\": \"" + imageURI + "\"}";
	var content = new StringContent(body, Encoding.UTF8, "application/json");
	var response await client.PutAsync(endpointURI, content);
}
```

The code will add a face image to a person object in a person group. Is this correct?

Yes
No

Answer: yes

### Question 36

You are developing an application to recognize employees' faces by using the Face Recognition API. Images of the faces will be accessible from a URI endpoint.  
The application has the following code.

```csharp
static async void AddFace(string subscription_key, string
personGroupId, string personld, string imageURI)
{
	var client = new HttpC1ient();
	client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscription_key);
	var endpointURI = $"https://westus.api.cognitive.microsoft.com/face/v1.Ø/persongroups/{personGroupId}/persons/{personId}/persistedFaces";
	HttpResponsemessage response;
	var body = "{ \"url\": \"" + imageURI + "\"}";
	var content = new StringContent(body, Encoding.UTF8, "application/json");
	var response await client.PutAsync(endpointURI, content);
}
```

The code will work for a group of 10,000 people. Is this correct?

Yes
No

Answer: yes

### Question 37

You are developing an application to recognize employees' faces by using the Face Recognition API. Images of the faces will be accessible from a URI endpoint.  
The application has the following code.

```csharp
static async void AddFace(string subscription_key, string
personGroupId, string personld, string imageURI)
{
	var client = new HttpC1ient();
	client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscription_key);
	var endpointURI = $"https://westus.api.cognitive.microsoft.com/face/v1.Ø/persongroups/{personGroupId}/persons/{personId}/persistedFaces";
	HttpResponsemessage response;
	var body = "{ \"url\": \"" + imageURI + "\"}";
	var content = new StringContent(body, Encoding.UTF8, "application/json");
	var response await client.PutAsync(endpointURI, content);
}
```

`AddFace` can be called multiple times to add multiple face images to a person object. Is this correct?

Yes
No

Answer: yes

### Question 38

You are building a chatbot by using the Microsoft Bot Framework Composer. 

The chatbot contains a dialog named GetUserDetails. GetUserDetails contains a TextInput control that prompts users for their name.  
The user input will be stored in a property named name.  
You need to ensure that you can dispose of the property when the last active dialog ends.  
Which scope should you assign to name?

**A.** dialog

**B.** user

**C.** curn

**D.** conversation

answer: a

### Question 39

You have a chatbot that uses a QnA Maker application.  
You enable active learning for the knowledge base used by the QnA Maker application.  
You need to integrate user input into the model.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Add a task to the Azure resource.
For the knowledge base, select Show active learning suggestions.
Approve and reject suggestions.
Modify the automation task logic app to run an Azure Resource Manager template that creates the Azure Cognitive Services resource-
Save and train the knowledge base-
Select the properties of the Azure Cognitive Services resource.
Publish the knowledge base-

Answer: 
For the knowledge base, select Show active learning suggestions.
Approve and reject suggestions.
Save and train the knowledge base-
Publish the knowledge base-

### Question 40

You are planning the product creation project.  
You need to build the REST endpoint to create the multilingual product descriptions.  
How should you complete the URI? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```url
__________/translate?api-version=3.0&to=es&to=pt
```

api.cognitive.microsofttranslator.com
api-nam.cognitive.microsofttranslator.com
westus.tts.speech.microsoft.com
wwics.cognitiveservices.azure.com

Answer:
api-nam.cognitive.microsofttranslator.com

### Question 41

You have an Azure subscription that contains an Azure OpenAI resource named AM.  
You build a chatbot that uses All to provide generative answers to specific questions.  
You need to ensure that questions intended to circumvent built-in safety features are blocked.  
Which Azure Al Content Safety feature should you implement?

**A.** Protected material text detection

**B.** Jailbreak risk detection

**C.** Monitor online activity

**D.** Moderate text content

answer: b

### Question 42

You are building a Language Understanding model for an e-commerce platform. You need to construct an entity to capture billing addresses.  
Which entity type should you use for the billing address?

**A.** machine learned

**B.** Regex

**C.** geographyV2

**D.** Pattern.any

**E.** list

answer: a

### Question 43

You run the following command.

```bash
docker run --rm -it -p SOOO:SOOO --memory 1Og --cpus 2 \
mcr.microsoft.com/azure—cognitive—services/textanalytics/sentiment \
Eula=accept \
Billing={ENDPOINT_URI} \
ApiKey={API_KEY}
```  

Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid. Is this correct?

Yes
No

Answer: yes

### Question 44

You run the following command.

```bash
docker run --rm -it -p SOOO:SOOO --memory 1Og --cpus 2 \
mcr.microsoft.com/azure—cognitive—services/textanalytics/sentiment \
Eula=accept \
Billing={ENDPOINT_URI} \
ApiKey={API_KEY}
```  

The container logging provider will write log data. Is this correct?

Yes
No

Answer: yes

### Question 45

You run the following command.

```bash
docker run --rm -it -p SOOO:SOOO --memory 1Og --cpus 2 \
mcr.microsoft.com/azure—cognitive—services/textanalytics/sentiment \
Eula=accept \
Billing={ENDPOINT_URI} \
ApiKey={API_KEY}
```  

Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints. Is this correct?

Yes
No

Answer: yes

### Question 46

You have an Azure OpenAI model.  
You have 500 prompt-completion pairs that will be used as training data to fine-tune the model.  
You need to prepare the training data.  
Which format should you use for the training data file?

**A.** XML

**B.** CSV

**C.** JSONL

**D.** TSV

answer: c

### Question 47

You are building a language learning solution.  
You need to recommend which Azure services can be used to perform the following tasks:  
* Analyze lesson plans submitted by teachers and extract key fields, such as lesson times and required texts.  

Which Azure service should you recommend for the task? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Azure AI Search
Azure AI Custom Vision
Azure AI Document Intelligence
Immersive Reader

Answer: Azure AI Document Intelligence

### Question 48

You are building a language learning solution.  
You need to recommend which Azure services can be used to perform the following tasks:  

* Analyze learning content and provide students with pictures that represent commonly used words or phrases in the text The solution must minimize development effort.  
Which Azure service should you recommend for the task? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Azure AI Search
Azure AI Custom Vision
Azure AI Document Intelligence
Immersive Reader

Answer: Immersive Reader

### Question 49

You are building an app that will provide users with definitions of common AI terms.  
You create the following C# code.

```csharp
...
OpenAIClient client =
    new OpenAIClient(new Uri(endpoint), new AzureKeyCredential(key));
ChatCompletionsOptions options = new ChatCompletionsOptions
{
    Messages =
    {
        new ChatMessage(ChatRole.System, "You are a helpful assistant."),
        new ChatMessage(ChatRole.User, "What is an LLM?")
    }
};

ChatCompletions response = client.GetChatCompletions(
    deploymentName, options);
ChatMessage completion = response.Choices[0].Message;
Console.WriteLine($"Chatbot: {completion.Content}");
...
```

The code is producing unhelpful answers. You decide to change the user prompt "What is an LLM?" to "What is an LLM in the context of AI models?".

Will this improve the quality of the answer? 

Yes
No

answer: yes

### Question 50

You are building an app that will provide users with definitions of common AI terms.  
You create the following C# code.

```csharp
...
OpenAIClient client =
    new OpenAIClient(new Uri(endpoint), new AzureKeyCredential(key));
ChatCompletionsOptions options = new ChatCompletionsOptions
{
    Messages =
    {
        new ChatMessage(ChatRole.System, "You are a helpful assistant."),
        new ChatMessage(ChatRole.User, "What is an LLM?")
    }
};

ChatCompletions response = client.GetChatCompletions(
    deploymentName, options);
ChatMessage completion = response.Choices[0].Message;
Console.WriteLine($"Chatbot: {completion.Content}");
...
```

The code is producing unhelpful answers. You decide to change the system prompt "You are a helpful assistant" to "You are a helpful assistant. You must answer only within the context of AI language models".

Will this improve the quality of the answer? 

Yes
No

answer: yes

### Question 51

You create five bots by using Microsoft Bot Framework Composer.  
You need to make a single bot available to users that combines the bots. The solution must support dynamic routing to the bots based on user input.  
Which three actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

**A.** Change the Recognizer/Dispatch type.

**B.** Install the Orchestrator package.

**C.** Create an Orchestrator model.

**D.** Create a composer extension.

**E.** Enable WebSockets.

**F.** Create a custom recognizer JSON file.

answer: a, b, c

### Question 52

You are building a chatbot.  
You need to configure the bot to guide users through a product setup process.  
Which type of dialog should you use?

**A.** component

**B.** action

**C.** waterfall

**D.** adaptive

answer: c

### Question 53

You have an Azure subscription that contains an Azure OpenAl resource named All and ari Azure Al Content Safety resource named CS1.  
You build a chatbot that uses All to provide generative answers to specific questions and CS1 to check input and output for objectionable content You need to optimize the content filter configurations by running tests on sample questions.  
Solution: From Content Safety Studio, you use the Moderate text content feature to run the tests.  
Does this meet the requirement?

**A.** Yes

**B.** No

answer: b

### Question 54

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Cognitive Search service.  
During the past 12 months, query volume steadily increased.  
You discover that some search query requests to the Cognitive Search service are being throttled.  
You need to reduce the likelihood that search query requests are throttled.  
Solution: You add indexes.  
Does this meet the goal?

**A.** Yes

**B.** No

answer: b

### Question 55

You are building a chatbot.  
You need to use the Content Moderator service to identify messages that contain sexually explicit language.  
Which section in the response from the service will contain the category score? To answer, select the appropriate options in the answer area, NOTE: Each correct selection is worth one point.

Classification
PII
Terms

Answer: Classification

### Question 56

You are building a chatbot.  
You need to use the Content Moderator service to identify messages that contain sexually explicit language.  
Which category will be assigned to the message? To answer, select the appropriate options in the answer area, NOTE: Each correct selection is worth one point.

1
2
3
4

Answer: 3

### Question 57

You are building a solution in Azure that will use Azure AI Language service to process sensitive customer data.  
You need to ensure that only specific Azure processes can access the Language service. The solution must minimize administrative.  
What should you include in the solution?

**A.** A virtual network gateway

**B.** Azure Application Gateway

**C.** IPsec rules

**D.** Virtual network rules

answer: d

### Question 58

You are developing a system that will monitor temperature data from a data stream. The system must generate an alert in response to atypical values. The solution must minimize development effort.  
What should you include in the solution?

**A.** Multivariate Anomaly Detection

**B.** metric alerts in Azure Monitor

**C.** Azure Stream Analytics

**D.** Univariate Anomaly Detection

answer: a

### Question 59

You use the Microsoft Bot Framework Composer to build a chatbot that enables users to purchase items.  
You need to ensure that the users can cancel in-progress transactions. The solution must minimize development effort.  
What should you add to the bot?

**A.** a language generator

**B.** a custom event

**C.** a dialog trigger

**D.** a conversation activity

answer: d

### Question 60

You are building an app that will analyze documents by using the Azure Al Language service.  
You need to identify industry-specific technical terms in the documents. The solution must minimize development effort.  
What should you use?

**A.** conversational language under-standing (CLU)

**B.** key phrase extraction

**C.** custom named entity recognition (NER)

**D.** language detection

answer: c

### Question 61

You are building an app that will translate speech by using the Azure Al Language service.  
You need configure the app to translate the speech from English to Italian.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```python
speech_translation_config = speechsdk.translation.SppechTranslationConfig(subscription=os.environ.get('SPEECH_KEY'), region=os.environ.get('SPEECH_REGION'))
speech_translation_config.__________ = "en-US"
speech_translation_config.__________("it")
audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
recognizer = speechsdk.translation.TranslationRecognizer(translation_config=speech_translation_config, audio_config=audio_config)
```

How should you fill the first placeholder? 

add_target_language
region
speech_recognizer_language
voice_name

answer: speech_recognizer_language

### Question 62

You are building an app that will translate speech by using the Azure Al Language service.  
You need configure the app to translate the speech from English to Italian.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```python
speech_translation_config = speechsdk.translation.SppechTranslationConfig(subscription=os.environ.get('SPEECH_KEY'), region=os.environ.get('SPEECH_REGION'))
speech_translation_config.__________ = "en-US"
speech_translation_config.__________("it")
audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
recognizer = speechsdk.translation.TranslationRecognizer(translation_config=speech_translation_config, audio_config=audio_config)
```

How should you fill the second placeholder? 

add_target_language
region
speech_recognizer_language
voice_name

answer: add_target_language

### Question 63

You develop a Conversational Language Undemanding model by using Language Studio During testing, users receive incorrect responses to requests that do NOT relate to the capabilities of the model.  
You need to ensure that the model identifies spurious requests.  
What should you do?

**A.** Add examples to the custom intents.

**B.** Enable active learning.

**C.** Add entities.

**D.** Add examples to the None intent

answer: b

### Question 64

You have a chatbot that was built by using Microsoft Bot Framework and deployed to Azure.  
You need to configure the bot to support voice interactions. The solution must support multiple client apps.  
Which type of channel should you use?

**A.** Direct Line Speech

**B.** Cortana

**C.** Microsoft Teams

answer: a

### Question 65

You have a Custom Vision resource named acvdev in a development environment.  
You have a Custom Vision resource named acvprod in a production environment.  
In acvdev, you build an object detection model named obj1 in a project named proj1.  
You need to move obj1 to acvprod.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Use the GetProjects endpoint on acvdev.
Use the ExportProject endpoint on acvdev.
Use the ExportIteration endpoint on acvdev.
Use the Getlterations endpoint on acvdev.
Use the ImportProject endpoint on acvprod
Use the UpdateProject endpoint on acvprod

Answer:
Use the GetProjects endpoint on acvdev.
Use the ExportProject endpoint on acvdev.
Use the ImportProject endpoint on acvprod

### Question 66

You develop a custom question answering project in Azure Cognitive Service for Language. The project will be used by a chatbot. You need to configure the project to engage in multi-turn conversations. What should you do?

**A.** Enable active learning.

**B.** Enable chit-chat.

**C.** Add alternate questions.

**D.** Add follow-up prompts.

answer: d

### Question 67

You are building an Azure Cognitive Search custom skill.  
You have the following custom skill schema definition.

```json
{
  "@odata.type": "#Microsoft.Skills.Custom.WebApiSkill",
  "description": "My custom skill description",
  "uri": "https://contoso-webskill.azurewebsites.net/api/process",
  "context": "/document/organizations/*",
  "inputs": [
    {
      "name": "companyName",
      "source": "/document/organizations/*"
    }
  ],
  "outputs": [
    {
      "name": "companyDescription"
    }
  ]
}

```

Is `CompanyDescription` available for indexing? 

YEs
No

answer: yes

### Question 68

You are building an Azure Cognitive Search custom skill.  
You have the following custom skill schema definition.

```json
{
  "@odata.type": "#Microsoft.Skills.Custom.WebApiSkill",
  "description": "My custom skill description",
  "uri": "https://contoso-webskill.azurewebsites.net/api/process",
  "context": "/document/organizations/*",
  "inputs": [
    {
      "name": "companyName",
      "source": "/document/organizations/*"
    }
  ],
  "outputs": [
    {
      "name": "companyDescription"
    }
  ]
}

```

The definition calls a web API as part of the enrichment process. Ist this correct?

YEs
No

answer: yes

### Question 69

You are building an Azure Cognitive Search custom skill.  
You have the following custom skill schema definition.

```json
{
  "@odata.type": "#Microsoft.Skills.Custom.WebApiSkill",
  "description": "My custom skill description",
  "uri": "https://contoso-webskill.azurewebsites.net/api/process",
  "context": "/document/organizations/*",
  "inputs": [
    {
      "name": "companyName",
      "source": "/document/organizations/*"
    }
  ],
  "outputs": [
    {
      "name": "companyDescription"
    }
  ]
}

```

The enrichment step is called only for the first organization under `/documents/organizations`. Is this correct?

YEs
No

answer: no

### Question 70

You are developing the chatbot.  
You create the following components:  
* A QnA Maker resource  
* A chatbot by using the Azure Bot Framework SDK  
You need to add an additional component to meet the technical requirements and the chatbot requirements. What should you add?

**A.** Dispatch

**B.** chatdown

**C.** Language Understanding

**D.** Microsoft Translator

answer: a

### Question 71

You have a Video Indexer service that is used to provide a search interface over company videos on your company's website.  
You need to be able to search for videos based on who is present in the video. What should you do?

**A.** Create a person model and associate the model to the videos.

**B.** Create person objects and provide face images for each object.

**C.** Invite the entire staff of the company to Video Indexer.

**D.** Edit the faces in the videos.

**E.** Upload names to a language model.

answer: a

### Question 72

You have a web app that uses Azure Cognitive Search.  
When reviewing billing for the app, you discover much higher than expected charges. You suspect that the query key is compromised.  
You need to prevent unauthorized access to the search endpoint and ensure that users only have read only access to the documents collection. The solution must minimize app downtime.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Add a query key.
Regenerate the secondary admin key.
Change the app to use the secondary admin key.
Change the app to use the new key.
Regenerate the primary admin key.
Delete the compromised key.

Answer:
Add a query key.
Change the app to use the new key.
Delete the compromised key.

### Question 73

You have an Azure Cognitive Search solution and a collection of handwritten letters stored as JPEG files.  
You plan to index the collection. The solution must ensure that queries can be performed on the contents of the letters.  
You need to create an indexer that has a skillset.  
Which skill should you include?

**A.** optical character recognition (OCR)

**B.** image analysis

**C.** key phrase extraction

**D.** document extraction

answer: a

### Question 74

You are developing an application that will use Azure Cognitive Search for internal documents.  
You need to implement document-level filtering for Azure Cognitive Search.  
Which three actions should you include in the solution? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

**A.** Send Azure AD access tokens with the search request.

**B.** Retrieve all the groups.

**C.** Retrieve the group memberships of the user.

**D.** Add allowed groups to each index entry.

**E.** Create one index per group.

**F.** Supply the groups as a filter for the search requests.

answer: c, d, f

### Question 75

You have a collection of 50,000 scanned documents that contain text.  
You plan to make the text available through Azure Cognitive Search.  
You need to configure an enrichment pipeline to perform optical character recognition (OCR) and text analytics. The solution must minimize costs.  
What should you attach to the skillset?

**A.** a new Computer Vision resource

**B.** a free (Limited enrichments) Cognitive Services resource

**C.** an Azure Machine Learning pipeline

**D.** a new Cognitive Services resource that uses the SO pricing tier

answer: a

