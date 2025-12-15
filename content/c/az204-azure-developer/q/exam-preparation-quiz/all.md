# AZ-204 Quiz Questions

### Question 1

You are preparing to deploy an application to an Azure Kubernetes Service (AKS) cluster.  
The application must only be available from within the VNet that includes the cluster.  
You need to deploy the application.  
How should you complete the deployment YAML?

```yaml
apiversion: v1
kind: Service
metadata :
	name: web—app
	annotations: 
		service.beta.kubernetes._________: "true"

spec:
	type: LoadBalancer
	ports :
	— port: 80
	selector:
		app: web—app
```

Answers:

service
vnet-access
load-balancer
azure-load-balancer
azure-load-balancer-internal
azure-load-balancer-private

Correct answer:  azure-load-balancer-internal

### Question 2

You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll.  
You need to create a Dockerfile document that meets the following requirements:  
- Run setupScript.ps1 when the container is built.  
- Run ContosoApp.dll when the container starts.  
- The Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.  
Which five commands should you use to develop the solution?

Answers:

FROM mcr.microsoft.com/dotnet/aspnet:latest
FROM mcr.microsoft.com/dotnet/sdk:latest
WORKDIR /apps/ContosoApp
COPY /apps/ContosoApp/ .
COPY ./ .
RUN powershell ./setupScript.ps1
RUN dotnet ./ContosoApp.dll
CMD ["dotnet", "ContosoApp.dll"]
CMD ["powershell", "./setupScript.ps1"]

Correct:

FROM mcr.microsoft.com/dotnet/aspnet:latest
WORKDIR /apps/ContosoApp
COPY ./ .
RUN powershell ./setupScript.ps1
CMD ["dotnet", "ContosoApp.dll"]

### Question 3

You are developing a policy service. The policy service must use Application Insights to trigger automatic scaling based on the number of policy actions that it is performing. 
Which Azure Application Insights data model should you use?

**A.** an Application Insights metric

**B.** an Application Insights trace

**C.** an Application Insights dependency

**D.** an Application Insights event

Answer: A

### Question 4

You develop an app that allows users to upload photos and videos to Azure storage. The app uses a storage REST API call to upload the media to a blob storage account named Account1. You have blob storage containers named Container1 and Container2.  
Uploading of videos occurs on an irregular basis.  
You need to copy specific blobs from Container1 to Container2 in real time when specific requirements are met, excluding backup blob copies.  
What should you do?

**A.** Download the blob to a virtual machine and then upload the blob to Container2.

**B.** Run the Azure PowerShell command Start-AzureStorageBlobCopy.

**C.** Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API.

**D.** Use AzCopy with the Snapshot switch blobs to Container2.

Answer: B

### Question 5

You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General- purpose V2.  
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.  
You need to design the process that starts the photo processing.  

Solution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.  
Does the solution meet the goal?

**A.** Yes
**B.** No

Answer: A

### Question 6

You provision virtual machines (VMs) as development environments.  
One VM is stuck in a Windows update process and won't start up anymore. You need to resolve the problem. What should you do?

Answers:

Attach the OS disk to a recovery VM and start it.
Open an elevated terminal session
Run: sfc /image:{Attached OS disk}:\ /unlock-image
Run: dism /image:{Attached OS disk}:\ /get-packages > c:\temp\log.txt
Open the C:\temp\log.txt file, and locate the update that's in Install Pending or Uninstall Pending state.  
Run: dism /Image:{Attached OS disk}:\ /abort-update
Run: dism /Image:{Attached OS disk}:\ /remove-package /PackageName:{package to delete}
Run: sfc /Image:{Attached OS disk}:\ /finalize-update
Detach the OS disk and reattach it to the VM that won't start

Answers:

Attach the OS disk to a recovery VM and start it.
Open an elevated terminal session
Run: dism /image:{Attached OS disk}:\ /get-packages > c:\temp\log.txt
Open the C:\temp\log.txt file, and locate the update that's in Install Pending or Uninstall Pending state.  
Run: dism /Image:{Attached OS disk}:\ /remove-package /PackageName:{package to delete}
Detach the OS disk and reattach it to the VM that won't start

### Question 7

You need to serve static content from the corporate website.  
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.  

**A.** Configure the Azure App Service Local Cache feature and set the app setting WEBSITE_LOCAL_CACHE_SIZEINMB value.

**B.** Configure App Service networking to create a Content Delivery Network profile and endpoint.

**C.** Update the Azure Traffic Manager routing method to priority.

**D.** Create a nested Azure Traffic Manager profile. Configure the parent profile to the performance traffic routing method and the child profile to the priority traffic routing method.

**E.** Store all static content in Azure Blob Storage. Enable Azure Content Delivery Network for the storage account.

answers: B, E

### Question 8

Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www. fourthcoffee.com domain.  
Fourth Coffee is migrating this application to Azure.  
You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app.  
A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.  

You run the following CLI commands to develop the solution:

```bash
appName="FourthCoffeePublicWeb$random"
location="WestUS"
dockerHubContainerPath="FourthCoffee/publicweb:v1"
fqdn="http://www.fourthcoffee.com"

az webapp create
--name $appName
--plan AppServiceLinuxDockerPlan
--resource-group fourthCoffeePublicWebResourceGroup

az webapp config hostname add
--webapp-name $appName
--resource-group fourthCoffeePublicWebResourceGroup
--hostname $fqdn

az webapp _____________
--docker-custom-image-name $dockerHibContainerPath
--name $appName
--resource-group fourthCoffeePublicWebResourceGroup
```

How should you complete the script?

Answers:

add docker
add container
config docker set
config container set

Answer: config container set

### Question 9

You are developing an application. You have an Azure user account that has access to a subscription.  
You need to retrieve a storage account key from Azure and store it in a Key Vault.  
Which PowerShell commands should you use to accomplish the goal?

$key = Get-AzStorageAccountKey -ResourceGroupName $group -Name $account 
$secret = ConvertTo-SecureString $key -AsPlainText -Force
$secret = ConvertTo-SecureString $key[0] -AsPlainText -Force
$secret = ConvertTo-SecureString $key[0].value -AsPlainText -Force
Set-AzKeyVaultSecret -VaultName $vault -Name "secret1" -SecretValue $secret
Set-AzKeyVaultSecret -VaultName $vault -Name "secret1" -SecretValue $key
Set-AzKeyVaultSecret -VaultName $vault -Name "secret1" -SecretValue $key[0]
Set-AzKeyVaultSecret -VaultName $vault -Name "secret1" -SecretValue $key[0].value

Answers:

$key = Get-AzStorageAccountKey -ResourceGroupName $group -Name $account 
$secret = ConvertTo-SecureString $key[0].value -AsPlainText -Force
Set-AzKeyVaultSecret -VaultName $vault -Name "secret1" -SecretValue $secret

### Question 10

You are developing an application to store business-critical data in Azure Blob storage. The application must meet the following requirements:  
* Data must not be modified or deleted for a user-specified interval.  
* Data must be protected from overwntes and deletes.  
* Data must be written once and allowed to be read many times.  
You need to protect the data fen the Azure Blob storage account.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

**A.** Configure a time-based retention policy for the storage account.

**B.** Create a service shared-access signature (SAS).

**C.** Enable point-in-time restore for containers in the storage account.

**D.** Enable version-level immutability support for the storage account.

**E.** Create an account shared-access signature (SAS).

**F.** Enable the blob change feed for the storage account.

answer: A, B

### Question 11

You are developing a solution that will use Azure messaging services.  
You need to ensure that the solution uses a publish-subscribe model and eliminates the need for constant polling.  
What are two possible ways to achieve the goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** Service Bus

**B.** Event Hub

**C.** Event Grid

**D.** Queue

answer: A, C

### Question 12

You develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.  
The telemetry data must be enriched and processed before it is sent to the Application Insights service.  
You need to reduce the volume of telemetry without affecting statistics. Which Application Insights SDK feature should you use?

Answers:

A. Sampling
B. Telemetry initializer
C. Telemetry processor
D. Telemetry channel

Answer: a

### Question 13

You develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.  
The telemetry data must be enriched and processed before it is sent to the Application Insights service.  
You need to enrich telemetry with addition properties ort override an existing one. Which Application Insights SDK feature should you use?

Answers:

A. Sampling
B. Telemetry initializer
C. Telemetry processor
D. Telemetry channel

Answer: b

### Question 14

You develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.  
The telemetry data must be enriched and processed before it is sent to the Application Insights service.  
You need to completely replace or discard a telemetry item. Which Application Insights SDK feature should you use?

Answers:

A. Sampling
B. Telemetry initializer
C. Telemetry processor
D. Telemetry channel

Answer: c

### Question 15

Vou are developing a microservice to run on Azure Container Apps for a company. External HTTP ingress traffic has been enabled. The company requires that updates to the microservice must not cause downtime.  
You need to deploy an update to the microservice. What should you do?

**A.** Enable single revision mode.

**B.** Use a single environment for all containers.

**C.** Use multiple environments for each container.

**D.** Use a private container registry and single image for all containers.

**E.** Enable multiple revision mode.

answer: e

### Question 16

You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.  
Customers have requested a service-level agreement (SLA) for viewing data older than 30 days.  
You need to document the minimum SLA for data recovery.  
Which SLA should you use?

**A.** at least two days

**B.** between one and 15 hours

**C.** at least one day

**D.** between zero and 60 minutes

answer: B

### Question 17

You need to implement an aggregate of telemetry values for distributor API calls.  
Which Application Insights API method should you use?

**A.** TrackEvent

**B.** TrackTrace

**C.** TrackDependency

**D.** Track Exception

**E.** TrackMetric

answer: E

### Question 18

You are working for Contoso, Ltd.  
You define an API Policy object by using the following XML markup:

```xml
<set-variable name="bodySize" value="@(context.Request.Headers["Content-Length"][0])" />
<choose>
    <when condition="@(int.Parse(context.Variables.GetValueOrDefault<string>("bodySize")) < 512000)">
        <!-- Do nothing or add actions for small bodies -->
    </when>
    <otherwise>
        <rewrite-uri template="/put" />
        <set-backend-service base-url="http://contoso.com/api/9.1/" />
    </otherwise>
</choose>
```

For the following statement, select Yes if the statement is true. Otherwise, select No.

If a client calls the Contoso api with the body size larger than 512k, the call will be automatically redirected to the 9.1 API as a put request. 

answer: incorrect

### Question 19

You are working for Contoso, Ltd.  
You define an API Policy object by using the following XML markup:

```xml
<set-variable name="bodySize" value="@(context.Request.Headers["Content-Length"][0])" />
<choose>
    <when condition="@(int.Parse(context.Variables.GetValueOrDefault<string>("bodySize")) < 512000)">
        <!-- Do nothing or add actions for small bodies -->
    </when>
    <otherwise>
        <rewrite-uri template="/put" />
        <set-backend-service base-url="http://contoso.com/api/9.1/" />
    </otherwise>
</choose>
```

For the following statement, select Yes if the statement is true. Otherwise, select No.

If a client calls the Contoso api with a get request and a the body size larger than 512k, the call will be automatically redirected to "http://contoso.com/api/9.1/put". 

answer: incorrect

### Question 20

You are Implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK.  
You add a change feed processor to a new container instance.  
You attempt to load a batch of 100 documents. The process falls when reading one of the documents. 

The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. You must also prevent the change feed processor from retrying the entire batch when one document cannot be read.  

You need to implement the change feed processor to read the documents.  
Which two features should you use?

Answers:

A. Change feed estimator
B. Dead-letter queue
C. Deployment unit
D. Lease container

Answer: B, C

### Question 21

You are implementing an application by using Azure Event Grid to push near-real-time information to customers.  
You have the following requirements:  

* You must send events to thousands of customers that include hundreds of various event types.  
* The events must be filtered by event type before processing.  
* Authentication and authorization must be handled by using Microsoft Entra ID. 
* The events must be published to a single endpoint  

You need to implement Azure Event Gnd.  

Solution: Publish events to a system topic. Create an event subscription for each customer.  

Does the solution meet the goal?

**A.** Yes

**B.** No

answer: B

### Question 22

You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.  
The app continues to time out after four minutes. The app must process the blob data.  
You need to ensure the app does not time out and processes the blob data.  
Solution: Use the Durable Function async pattern to process the blob data.  
Does the solution meet the goal?

**A.** Yes

**B.** No

Answer: B

### Question 23

You develop and deploy a Java RESTful API to Azure App Service.  
You open a browser and navigate to the URL for the API. You receive the following error message:  

Failed to load http://api.azurewebsites.net:6000/#/api/Products: No
Access-Control-Allow-Origin' header is present on the requested resource.
Origin 'http://localhost:6000' is therefore not allowed access

You need to resolve the error.  
What should you do?

**A.** Bind an SSL certificate

**B.** Enable authentication

**C.** Enable CORS

**D.** Map a custom domain

**E.** Add a CDN

answer: C

### Question 24

You have a web app named App1 hosted on your on-premises web server.  
You plan to use the Application Insights JavaScript SDK to implement client-side Real User Monitoring (RUM) of individual pages of App1

You need to author the script element that will be added to each of the pages.  
What should you set for the value of the src key in the script element of each page?

Answers:

A. URL to download the SDK from
B. Application Insights connection string
C. appld used to correlate AJAX dependencies on the client-side with the server-side requests
D. crossOrigin attribute designating support for cross-origin resource sharing

Answer: A

### Question 25

You have a web app named App1 hosted on your on-premises web server.  
You plan to use the Application Insights JavaScript SDK to implement client-side Real User Monitoring (RUM) of individual pages of App1

You need to author the script element that will be added to each of the pages.  
What should you set for the value of the cfg key in the script element of each page?

Answers:

A. URL to download the SDK from
B. Application Insights connection string
C. appld used to correlate AJAX dependencies on the client-side with the server-side requests
D. crossOrigin attribute designating support for cross-origin resource sharing

Answer: B

### Question 26

You are designing a solution that will use two Azure Functions apps: App1 and App2. App1 is Windows- based and will be deployed as code. App2 is Linux-based and will be deployed as a container image.  
Estimates show that the duration of the request processing for both apps will range from 1 to 10 minutes.  
You plan to implement App1 and App2 by using the hosting plan to satisfy the following requirements:  

* Request processing can complete within the estimated time range.  
* The autoscaling behavior is event-driven.  
* The upper scaling limit is maximized.

Which hosting plan should you choose for App1?

Answers:

A. Shared
B. Consumption
C. Premium
D. Dedicated

Answer: C

### Question 27

You are designing a solution that will use two Azure Functions apps: App1 and App2. App1 is Windows- based and will be deployed as code. App2 is Linux-based and will be deployed as a container image.  
Estimates show that the duration of the request processing for both apps will range from 1 to 10 minutes.  
You plan to implement App1 and App2 by using the hosting plan to satisfy the following requirements:  

* Request processing can complete within the estimated time range.  
* The autoscaling behavior is event-driven.  
* The upper scaling limit is maximized.

Which hosting plan should you choose for App2?

Answers:

A. Shared
B. Consumption
C. Premium
D. Dedicated

Answer: C

### Question 28

You have an Azure Batch project that processes and converts files and stores the files in Azure storage. You are developing a function to start the batch job.  
You add the following parameters to the function.

| Parameter name        | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| fileTasks             | a list of tasks to be run                                         |
| jobId                 | the identifier that must be assigned to the job                   |
| outputContainerSasUrl | a storage SAS URL to store successful converted files             |

You must ensure that converted files are placed in the container referenced by the outputContainerSasUrl parameter. 
You need to ensure the files are correctly processed.

How should you complete the code segment that prepares the batch job?

```csharp
public List<CloudTasks> StartTasks(List<FileTask> fileTasks, string jobId, string outputContainerSasUrl)
{
	var creds = new BatchSharedKeyCredentials(ACCOUNT_URL, ACCOUNT_NAME, ACCOUNT_KEY);
	using (BatchClient client = BatchClient.Open(creds))
	{
		var job = client.JobOperations.____________;
		job.Id = jobId;
		job.Commit();
		
		// file processing goes here
		// ...
	}
}
```

How should you complete the code?

Answers:

A. GetJob()
B. GetTask()
C. EnableJob()
D. CreateJob()

answer: D

### Question 29

You have an Azure Batch project that processes and converts files and stores the files in Azure storage. You are developing a function to start the batch job.  
You add the following parameters to the function.

| Parameter name        | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| fileTasks             | a list of tasks to be run                                         |
| jobId                 | the identifier that must be assigned to the job                   |
| outputContainerSasUrl | a storage SAS URL to store successful converted files             |

You must ensure that converted files are placed in the container referenced by the outputContainerSasUrl parameter. 
You need to ensure the files are correctly processed.

How should you complete the code segment that processes each file in the batch job?

```csharp
public List<CloudTasks> StartTasks(List<FileTask> fileTasks, string jobId, string outputContainerSasUrl)
{
	// job setup code goes here
	// ...
	
	fileTasks.ForEach((fileTask) =>
	{
		var taskld = DateTime.Now.ToFileTimeUtc().Tostring();
		var task = new CicudTask(taskld, fileTask.Command);
		var files = new List<OutputFile>();
		var outputContainer = new OutputFileBlobContainerDestination(outputContasinerSasUrl);
		files.Add(
			new OutputFile(
				fileTask.Output,
				new OutputDestination(outputContainer),
				new OutputFileUploadOptions(OutputFileUploadCondition._________)
			)
		);
	}
}
```

How should you complete the code?

Answers:

A. TaskSuccess
B. TaskFailure
C. TaskCompletion
D. TaskStarted

answer: A

### Question 30

You develop and deploy an ASP.NET web app to Azure App Service. You use Application Insights telemetry to monitor the app.  
You must test the app to ensure that the app is available and responsive from various points around the world and at regular intervals. If the app is not responding, you must send an alert to support staff.  
You need to configure a test for the web app.  
Which two test types can you use? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** integration

**B.** multi-step web

**C.** URL ping

**D.** unit

**E.** load

answer: B, C

### Question 31

You are developing a mobile app that uses an API which stores geospabal data in Azure Cosmos D& The app will be used to find restaurants in a particular area and related information including food types, menu information and the optimal route to a selected restaurant from the user's current location.  
Which Azure Cosmos DB API should you use for the API?

**A.** MongoDB

**B.** Gremlin

**C.** Cassandra

**D.** Core

answer: A

### Question 32

You are developing a complex workflow by using Azure Durable Functions.  
During testing you observe that the results of the workflow differ based on how many instances of the Azure Function are running.  
You need to resolve the issue.  
What should you do?

**A.** Ensure that all Orchestrator code is deterministic.

**B.** Implement the monitor pattern within the workflow.

**C.** Read all state data from the durable function context

**D.** Configure the Azure Our able f unction to run on an App Service Plan with one instance.

answer: A

### Question 33

You are developing a REST web service. Customers will access the service by using an Azure API Management instance.  
The web service does not correctly handle conflicts. Instead of returning an HTTP status code of 409, the service returns a status code of 500. The body of the status message contains only the word conflict.  
You need to ensure that conflicts produce the correct response.  
How should you complete the policy?

```xml
<on-error>
	<base />
	<choose>
		<when condition="@(context.Response.StatusCode == 500 && context.LastError.Message.Contains("conflict"))">
			<return-response>
				< __________ code="409" reason="conflict" />
			</return-response>
		</when>
		<otherwise />
	</choose>
<on-error>
```

Answers:

A. set-context
B. set-error
C. set-status
D. override-context
E. override-error
F. override-status

.answer: C

### Question 34

Azure Cache for Redis is getting overloaded. You need to resolve the issue.
What are two possible ways to achieve this goal? Each correct answer presents part of the solution.  

**A.** Test application code by rebooting all nodes in the test environment.

**B.** Modify the maxmemory policy to evict the least frequently used keys out of all keys.

**C.** Configure client connections to retry commands with exponential backoff.

**D.** Test application code by purging the cache in the test environment.

**E.** Increase the maxmemory-reserved and maxfragmentationmemory-reserved values

answer: C, E

### Question 35

You are preparing to deploy a medical records application to an Azure virtual machine (VM). The application will be deployed by using a VHD produced by an on-premises build server.  
You need to ensure that both the application and related data are encrypted during and after deployment to Azure.  
Which three actions should you perform in sequence?

Answers:

Encrypt the on-premises VHD by using BitLocker without a TPM. Upload the VM to Azure Storage.
Encrypt the on-premises VHD by using BitLocker with a TPM. Upload the VM to Azure Storage.
Encrypt the on-premises VHD without using BitLocker. Upload the VM to Azure Storage.
Run the Azure PowerShell command Set-AzureRmVMOSDisk.
Run the Azure PowerShell command Set-AzureRmVMDiskEncryptionExtension.
Run the Azure PowerShell command New-AzureRmVM.

Answer: 

Encrypt the on-premises VHD by using BitLocker without a TPM. Upload
the VM to Azure Storage.
Run the Azure PowerShell command Set-AzureRmVMOSDisk.
Run the Azure PowerShell command Set-AzureRmVMDiskEncryptionExtension.

### Question 36

You are developing an Azure Function App that runs in an App Service Plan. The Azure Function is triggered by a Timer object. You observe that the Azure Function does not reliably trigger when scheduled. Which two actions should you perform?

**A.** Verify that Always On is enabled.

**B.** Ensure that the function has a retry configured.

**C.** Modify the trigger to use Consumption mode instead of the App Service plan.

**D.** Modify the trigger to use a SignaIR trigger.

answer: A, B

### Question 37

You have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:  

```powershell
$resourceGroupName = "testResourceGroup"  
$accountName = "testCosmosAccount"  
$databaseName = "testDatabase"  
$containerName = "testContainer"  
$partitionKeyPath = "/EmployeeId"  
$autoscaleMaxThroughput = 5000  
New-AzCosmosDBSqlContainer  
	-ResourceGroupName $resourceGroupName  
	-AccountName $accountName  
	-DatabaseName $databaseName  
	-Name $containerName  
	-PartitionKeyKind Hash  
	-PartitionKeyPath $partitionKeyPath  
	-AutoscaleMaxThroughput $autoscaleMaxThroughput
```

For the following statement, select Yes if the statement is true. Otherwise, select No.

The minimum throughput for the container is 400 RUs

Answer: incorrect

### Question 38

You have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:  

```powershell
$resourceGroupName = "testResourceGroup"  
$accountName = "testCosmosAccount"  
$databaseName = "testDatabase"  
$containerName = "testContainer"  
$partitionKeyPath = "/EmployeeId"  
$autoscaleMaxThroughput = 5000  
New-AzCosmosDBSqlContainer  
	-ResourceGroupName $resourceGroupName  
	-AccountName $accountName  
	-DatabaseName $databaseName  
	-Name $containerName  
	-PartitionKeyKind Hash  
	-PartitionKeyPath $partitionKeyPath  
	-AutoscaleMaxThroughput $autoscaleMaxThroughput
```

You create the following query that targets the container:  

```sql
SELECT * FROM c WHERE c.EmployeeId > '12345'  
```

For the following statement, select Yes if the statement is true. Otherwise, select No.

The query is an in-partition query

Answer: incorrect

### Question 39

You have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:  

```powershell
$resourceGroupName = "testResourceGroup"  
$accountName = "testCosmosAccount"  
$databaseName = "testDatabase"  
$containerName = "testContainer"  
$partitionKeyPath = "/EmployeeId"  
$autoscaleMaxThroughput = 5000  
New-AzCosmosDBSqlContainer  
	-ResourceGroupName $resourceGroupName  
	-AccountName $accountName  
	-DatabaseName $databaseName  
	-Name $containerName  
	-PartitionKeyKind Hash  
	-PartitionKeyPath $partitionKeyPath  
	-AutoscaleMaxThroughput $autoscaleMaxThroughput
```

You create the following query that targets the container:  

```sql
SELECT * FROM c WHERE c.UserID = '12345'  
```

For the following statement, select Yes if the statement is true. Otherwise, select No.

The query is a cross-partition query. 

Answer: incorrect

### Question 40

You are developing a microservices-based application that uses Azure Container Apps. The application consists of several containerized services that handle tasks, such as processing orders, managing inventory, and generating reports. You deploy a new revision of the processing orders app.  
Processing orders must be triggered by a web request and must always be available based on incoming web requests.  
You need to validate that the replica is ready to handle incoming requests.  
What should you implement?

**A.** HTTP liveness probe

**B.** TCP readiness probe

**C.** HTTP startup probe

**D.** TCP liveness probe

**E.** HTTP readiness probe

answer: E

### Question 41

You need to deploy a new version of the LabelMaker application to ACR.  
Which actions should you perform in sequence?

Answers:

Build a new application image by using the dockerfile
Download the image to your local computer.
Tag the image with a new build number.
Tag the image with the fully qualified path to the registry.
Log in to the registry
Push the image
Pull the image

Answer: 

Build a new application image by using the dockerfile
Tag the image with the fully qualified path to the registry.
Log in to the registry
Push the image

### Question 42

You are a developing a SaaS application that stores data as key value pairs.  
You must make multiple editions of the application available. In the lowest cost edition, the performance must be best-effort, and there is no regional failover.  
In higher cos! editions customers must be able to select guaranteed performance and support for multiple regions. Azure costs must be minimized.  
Which Azure Cosmos OB API should you use for the application?

**A.** MongoDB

**B.** Table API

**C.** Cassandra

**D.** Core

answer: B

### Question 43

You manage an Azure Cosmos DB for a NoSQL API account named account1. The account contains a database named db1, which contains a container named container1. You configure account! with a session consistency level.  
You plan to develop an application named Appl that will access container1. Individual instances of Appl must perform reads and writes. Appl must allow multiple nodes to participate in the same session.  
You need to configure an object to share the session token between the nodes.  
Which object should you use?

**A.** Feed options

**B.** Request options

**C.** Connection policy

**D.** Document response

answer: D

### Question 44

You are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppreaiureflagStore as shown:

| Property      | Value                  |
| ------------- | ---------------------- |
| Key           | Export                 |
| Label         | Export                 |
| State         | Off                    |
| Description   | Ability to export data |
| Last modified | 11/30/2025 16:50:10    |

You must be able to use the feature in the app by using the following markup:

```xml
<feature name="export">
	<li class="nav-item">
		<a class="nav-link text-dark" asp-area="" asp-controller="home" asp-action="export">Export Data</a>
	</li>
</feature>
```

You went to update the app to use the feature flag.  
Which controller attribute should you use?

Answers:

A. FeatureGate
B. Route
C. ServiceFilter
D. TypeFilter

answer: A

### Question 45

You are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppreaiureflagStore as shown:

| Property      | Value                  |
| ------------- | ---------------------- |
| Key           | Export                 |
| Label         | Export                 |
| State         | Off                    |
| Description   | Ability to export data |
| Last modified | 11/30/2025 16:50:10    |

You must be able to use the feature in the app by using the following markup:

```xml
<feature name="export">
	<li class="nav-item">
		<a class="nav-link text-dark" asp-area="" asp-controller="home" asp-action="export">Export Data</a>
	</li>
</feature>
```

You went to update the app to use the feature flag.  
Which startup method should you use?

Answers:

A. AddAzureAppConfiguration
B. AddControllersWithViews
C. AddUserSecrets
D. AddFeatureFlags

answer: A

### Question 46

You are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppreaiureflagStore as shown:

| Property      | Value                  |
| ------------- | ---------------------- |
| Key           | Export                 |
| Label         | Export                 |
| State         | Off                    |
| Description   | Ability to export data |
| Last modified | 11/30/2025 16:50:10    |

You must be able to use the feature in the app by using the following markup:

```xml
<feature name="export">
	<li class="nav-item">
		<a class="nav-link text-dark" asp-area="" asp-controller="home" asp-action="export">Export Data</a>
	</li>
</feature>
```

You went to update the app to use the feature flag.  
Which AppConfig endpoint setting should you use?

Answers:

A. https://appfeatureflagstore.azconfig.io 
B. https://appfeatureflagstore.vault.azure.net
C. https://export.azconfig.io
D. https://export.vault.azure.net

answer: A

### Question 47

You are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the order information into Azure Queue Storage.  
You need to review the Azure Function App code shown below.

```csharp
public static class OrderProcessor
{
	[FunctionName("ProcessOrders")]
	public static void ProcessOrders(
		[QueueTrigger("incoming-orders")] CloudQueueMessage item,
		[Table("Orders")] ICollector<Order> tableBindings,
		TraceWriter log)
	{
		log.Info($"Order: {item.Id)");
		log.Info($"Insertion Time: {item.InsertionTime)");
		log.Info($"Expiration Time: {item.ExpirationTime}");
		tableBindings.Add(JsonConvert.DeserializeObject<Order>(item.AsString));		
	}
}
```

Which of the following statements are correct?

The code will log the time that the order was processed from the queue.
When the ProcessOrders function fails, the function will retry up to five times for a given order, including the first try.
When there are multiple orders in the queue, a batch of orders will be retrieved from the queue and the ProcessOrders function will run multiple instances concurrently to process the orders.
The ProcessOrders function will output the order to an Orders table in Azure Table Storage.

Answer:

When the ProcessOrders function fails, the function will retry up to five times for a given order, including the first try.
When there are multiple orders in the queue, a batch of orders will be retrieved from the queue and the ProcessOrders function will run multiple instances concurrently to process the orders.
The ProcessOrders function will output the order to an Orders table in Azure Table Storage.

### Question 48

You are developing an Azure Function app.  
The app must meet the following requirements:  

Enable developers to write the functions by using the Rust language.  

You need to implement the app.  
Which Azure Function app features should you use to enable developers to write functions by using the Rust language?

Answers:

A. Custom handler
B. Extension bundle
C. Trigger
D. Runtime
E. Policy
F. Hosting plan

Answer: A

### Question 49

You are developing an Azure Function app.  
The app must meet the following requirements:  

Declaratively connect to an Azure Blob Storage account.  

You need to implement the app.  
Which Azure Function app features should you use to enable developers to declaratively connect to an Azure blog storage account?

Answers:

A. Custom handler
B. Extension bundle
C. Trigger
D. Runtime
E. Policy
F. Hosting plan

Answer: C

### Question 50

You are developing an app to store globally distributed data in several Azure Blob Storage containers. Each container hosts multiple blobs where each instance of the app will store the data. You enable versioning and soft delete for the blobs.  
App testing and incorrect code have frequently corrupted data. Development of the app must allow data to be restored to a previous day for testing.  
You need to configure the storage account to support point-in-time restore.  
What should you do?

**A.** Enable the change feed on the storage account to begin capturing and recording changes.

**B.** Create a snapshot of the blob in the hot tier.

**C.** Configure object replication and specify replication rules.

**D.** Configure an immutability policy that is scoped to a blob version.

answer: A

### Question 51

You are implementing an application by using Azure Event Grid to push near-real-time information to customers.  
You have the following requirements:  
* You must send events to thousands of customers that include hundreds of various event types.  
* The events must be filtered by event type before processing.  
* Authentication and authorization must be handled by using Microsoft Entra ID.  
* The events must be published to a single endpoint.  
You need to implement Azure Event Grid.  
Solution: Publish events to a partner topic. Create an event subscription for each customer.  
Does the solution meet the goal?

**A.** Yes

**B.** No

answer: B

### Question 52

A software as a service (SaaS) company provides document management services. The company has a service that consists of several Azure web apps. All Azure web apps run in an Azure App Service Plan named PrimaryASP.  
You are developing a new web service by using a web app named ExcelParser. The web app contains a third- party library for processing Microsoft Excel files. The license for the third-party library stipulates that you can only run a single instance of the library.  
You need to configure the service.  

How should you configure the app service plan?

```powershell
Set—AzAppServiceP1an
	—ResourceGroupName $rg
	—Name "PrimaryASP"
	________________
```

Answers:

A. NumberOfSites 1
B. PerSiteScaling $true
C. TargetWorkerCount = 1
D. NumberOfWorkers = 1
E. SiteConfig.TargetWorkerCount = 1
F. SiteConfig.NumberOfWorkers = 1

answer: B

### Question 53

A software as a service (SaaS) company provides document management services. The company has a service that consists of several Azure web apps. All Azure web apps run in an Azure App Service Plan named PrimaryASP.  
You are developing a new web service by using a web app named ExcelParser. The web app contains a third- party library for processing Microsoft Excel files. The license for the third-party library stipulates that you can only run a single instance of the library.  
You need to configure the service.  

How should you configure the web app?

```powershell
$app = Get-AzWebApp
	—ResourceGroupName $rg
	—Name "ExcelParser"
	
$app.________________
```

Answers:

A. NumberOfSites 1
B. PerSiteScaling $true
C. TargetWorkerCount = 1
D. NumberOfWorkers = 1
E. SiteConfig.TargetWorkerCount = 1
F. SiteConfig.NumberOfWorkers = 1

answer: F

### Question 54

You are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway. Data from traffic sensors are stored in Azure Event Hub.  
Traffic data is consumed by four departments. Each department has an Azure Web App that displays the time- series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.  
Data throughout must be maximized. Latency must be minimized.  
You need to implement the Azure Event Hub.  
Which setting should you use for the number of partitions?

A. 3
B. 4
C. 6
D. 12

answer: C

### Question 55

You are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway. Data from traffic sensors are stored in Azure Event Hub.  
Traffic data is consumed by four departments. Each department has an Azure Web App that displays the time- series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.  
Data throughout must be maximized. Latency must be minimized.  
You need to implement the Azure Event Hub.  
Which setting should you use for the partition key?

A. Highway
B. Department
C. Timestamp
D. VM Name

answer: A

### Question 56

You develop and deploy an Azure Logic app that calls an Azure Function app. The Azure Function app includes an OpenAPl (Swagger) definition and uses an Azure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).  
The Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.  
You need to secure the Azure Logic app.  
What should you do?

**A.** Create an Azure AD custom role and assign role-based access controls.

**B.** Create an Azure AD custom role and assign the role to the Azure Blob storage account.

**C.** Create an Azure Key Vault and issue a client certificate.

**D.** Create a user-assigned managed identity and assign role-based access controls.

**E.** Create a system-assigned managed identity and issue a client certificate.

answer: D

### Question 57

You are developing an application that use an Azure blob named data to store application data. The application creates blob snapshots to allow application state to be reverted to an earlier state. The Azure storage account has soft deleted enabled.  
The system performs the following operations in order:  
* The blob is updated  
* Snapshot 1 is created.  
* Snapshot 2 is created.  
* Snapshot 1 is deleted.  
A system error then deletes the data blob and all snapshots.  
You need to determine which application states can be restored.

Which Azure resources can be successfully restored? 

A. The data blob
B. Snapshot 1
C. Snapshot 2
D. None of the resources can be restored

answer: A, C

### Question 58

You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Service Bus. Configure a topic to receive the device data by using a correlation filter.  
Does the solution meet the goal?

**A.** Yes

**B.** No

answer: A

### Question 59

You are developing an online game that includes a feature that allows players to interact with other players on the same team within a certain distance. The calculation to determine the players in range occurs when players move and are cached in an Azure Cache for Redis instance.  
The system should prioritize players based on how recently they have moved and should not prioritize players who have logged out of the game. You need to select an eviction policy. Which eviction policy should you use?

**A.** volatile-ttl

**B.** allkeys-lru

**C.** alllceys-lfu

**D.** volatile-lru

answer: B

### Question 60

You are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist of PDF, CSV, Microsoft Office format, and plain text files.  
The solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:  
* Document must the categorized by a customer identifier as they are uploaded to the storage account.  
* Allow filtering by the customer identifier.  
* Allow searching of information contained within a document.  
* Minimize costs.  
You created and configure a standard general-purpose v2 storage account to support the solution.  
You need to implement the solution.
How do you ensure that users can search and filter documents by customer identifier? 

Answers:

A. Azure Cognitive Search
B. Azure blob index tags
C. Azure blob inventory policy
D. Azure blob metadata

answer: B


### Question 61

You are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist of PDF, CSV, Microsoft Office format, and plain text files.  
The solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:  
* Document must the categorized by a customer identifier as they are uploaded to the storage account.  
* Allow filtering by the customer identifier.  
* Allow searching of information contained within a document.  
* Minimize costs.  
You created and configure a standard general-purpose v2 storage account to support the solution.  
You need to implement the solution.
How do you ensure that users can search information inside documents? 

Answers:

A. Azure Cognitive Search
B. Azure blob index tags
C. Azure blob inventory policy
D. Azure blob metadata

answer: A

### Question 62

You have an Azure Cosmos 06 instance that uses the Strong consistency level and 10,000 Request Units (RUs) per container. Geo-replication is enabled.  
The instance stores restaurant information including location, menu items, and start. You currently store information for 1,000 restaurant locations, 500 menu items, and 10,000 staff members. You select the location id as the partition key.  
How many logical partitions will be created for the container?

**A.** 1,100

**B.** 10,000,000

**C.** 10.000

**D.** 500

answer: C

### Question 63

You are preparing to deploy an ASP.NET Core website to an Azure Web App from a GitHub repository. The website includes static content generated by a script.  
You plan to use the Azure Web App continuous deployment feature.  
You need to run the static generation script before the website starts serving traffic.  
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website.

**B.** Add a PreBuild target in the websites csproj project file that runs the static content generation script.

**C.** Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.

**D.** Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.

answer: A, D

### Question 64

You develop software solutions for a mobile delivery service. You are developing a mobile app that users can use to order from a restaurant in their area. The app uses the following workflow:  
1. A driver selects the restaurants for which they will deliver orders.  
2. Orders are sent to all available drivers in an area.  
3. Only orders for the selected restaurants will appear for the driver.  
4. The first driver to accept an order removes it from the list of available orders.  
You need to implement an Azure Service Bus solution.  
Which three actions should you perform in sequence?

Answers:

Create a single Service Bus Namespace,
Create a Single Service Bus topic,
Create a Single Service Bus subscription.
Create a Service Bus topic for each restaurant for which a driver can receive orders
Create a Service Bus Namespace for each restaurant for which a diver can receive orders.
Create a Service Bus subscription for each restaurant for which a driver can receive orders.

Answer:

Create a single Service Bus Namespace,
Create a Service Bus topic for each restaurant for which a driver can receive orders
Create a Service Bus subscription for each restaurant for which a driver can receive orders.

### Question 65

You are implementing an application by using Azure Event Grid to push near-real-time information to customers.  
You have the following requirements:  
* You must send events to thousands of customers that include hundreds of various event types.  
* The events must be filtered by event type before processing.  
* Authentication and authorization must be handled by using Microsoft Entra ID.  
* The events must be published to a single endpoint.  
You need to implement Azure Event Gnd.  
Solution: Publish events to a custom topic. Create an event subscription for each customer.  
Does the solution meet the goal?

**A.** Yes

**B.** No

answer: B

### Question 66

You are developing a solution that will be deployed to an Azure Kubernetes Service (AKS) cluster. The solution will include a custom VNet, Azure Container Registry images, and an Azure Storage account.  
The solution must allow dynamic creation and management of all Azure resources within the AKS cluster.  
You need to configure an AKS cluster for use with the Azure APIs.  
Solution: Enable the Azure Policy Add-on for Kubernetes to connect the Azure Policy service to the GateKeeper admission controller for the AKS cluster. Apply a built-in policy to the cluster.  
Does the solution meet the goal?

**A.** Yes

**B.** No

answer: B

### Question 67

You develop and deploy an ASP.NET Core application that connects o an Azure Database for MySQL instance.  
Connections to the database appear to drop intermittently and the application code does not handle the connection failure.  
You need to handle the transient connection errors in code by implementing retries.  
What are three possible ways to achieve this goal? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

**A.** Disable connection pooling and configure a second Azure Database for MySQL instance.

**B.** Close the database connection and immediately report an error.

**C.** Wait five seconds before repeating the connection attempt to the database.

**D.** Increase connection repeat attempts exponentially up to 120 seconds.

**E.** Set a maximum number of connection attempts to 10 and report an error on subsequent connections.

answer: B, C, E

### Question 68

ou need to audit the retail store sales transactions.  
What are two possible ways to achieve the goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** Update the retail store location data upload process to include blob index tags. Create an Azure Function to process the blob index tags and filter by store location

**B.** Enable blob versioning for the storage account. Use an Azure Function to process a list of the blob versions per day.

**C.** Process an Azure Storage blob inventory report by using an Azure Function. Create rule filters on the blob inventory report,

**D.** Subscribe to blob storage events by using an Azure Function and Azure Event Grid. Filter the events by store location.

**E.** Process the change feed logs of the Azure Blob storage account by using an Azure Function. Specify a time range for the change feed data.

answer: D, E

### Question 69

An organization deploys Azure Cosmos DB.  
You need to ensure that the index is updated as items are created, updated, or deleted.  
What should you do?

**A.** Set the value of the EnableScanlnQuery option to True.

**B.** Set the value of the automatic property of the indexing policy to False.

**C.** Set the indexing mode to Consistent.

**D.** Set the indexing mode to Lazy.

answer: C

### Question 70

You are developing several Azure API Management (APIM) hosted APIs.  
You must transform the APIs to hide private backend information and obscure the technology stack used to implement the backend processing.  
You need to protect all APIs.  
What should you do?

**A.** Configure and apply a new backend policy scoped to global.

**B.** Configure and apply a new outbound policy scoped to the operation.

**C.** Configure and apply a new inbound policy scoped to a product.

**D.** Configure and apply a new outbound policy scoped to global.

answer: D

### Question 71

You have a web app named myApp that is not loading images from the url https://test.worldwideimporters.com. You suspect the problem may be related to a cross origin issue.

You write the following powershell command to resolve the issue:

```powershell
az webapp _____________ -g MyGroup -n MyApp --allowed-origins https://test.worldwideimporters.com 
```

How should you complete the script?

A. config cors
B. deploy cors
C. cors add
D. cors config
E. set cors
F. set config

answer: C

### Question 72

You deploy an API to API Management  
You must secure all operations on the API by using a client certificate.  
You need to secure access to the backend service of the API by using client certificates.  
Which two security features can you use?

**A.** Subscription key

**B.** Triple DES (3DES) cipher

**C.** Azure AD token

**D.** Self-signed certificate

**E.** Certificate Authority (CA) certificate

answer: D, E

### Question 73

A company is developing a solution that allows smart refrigerators to send temperature information to a central location. You have an existing Service Bus.  
The solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.  
You need to complete the configuration.  
Which Azure CLI command should you run?

```bash
# command A
az servicebus namespace create
	——resource—group myGroup
	——name myNs
	——location myLoc

# command B
az servicebus queue create
	——resource-group myGroup
	—-namespace-name myNs
	——name myQueue
	
# command C
az servicebus namespace authorization-rule keys list
	——resource-group myGroup
	——namespace-name myNs
	—-name RootManageSharedAccessKey
	—-query primaryConnectionString

# command D
az group create
	——name myGroup
	——location myLoc
```

answer: B

### Question 74

You develop a Python application for image rendering. The application uses GPU resources to optimize rendering processes. You have the following requirements:  
* The application must be deployed to a Linux container.  
* The container must be stopped when the image rendering is complete.

Which Azure service should you use to host the container?

Answers:

A. Azure App Service
B. Azure Container Instance
C. Azure Container Apps
D. Azure Kubernetes Service

answer: D

### Question 75

You are developing an application to store millions of images in Azure blob storage.  
The application has the following requirements:  
* Store the Exif (exchangeable image file format) data from the image as blob metadata when the application uploads the image.  
* Retrieve the Exif data from the image while minimizing bandwidth and processing time.  
* Utilizes the REST API.  
You need to use the image Exif data as blob metadata in the application.  
Which HTTP verb should you use to retrieve the EXIF data?

A. GET
B. PUT
C. POST
D. DELETE
E. HEAD
F. PATCH

answer: E

