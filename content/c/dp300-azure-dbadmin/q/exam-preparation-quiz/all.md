# DP-300 Quiz Questions

### Question 1

You have 20 Azure SQL databases provisioned by using the vCore purchasing model.

You plan to create an Azure SQL Database elastic pool and add the 20 databases.

Which three metrics should you use to size the elastic pool to meet the demands of your workload? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

A. total size of all the databases

B. geo-replication support

C. number of concurrently peaking databases * peak CPU utilization per database

D. maximum number of concurrent sessions for all the databases

E. total number of databases * average CPU utilization per database

answer: A, C, E

### Question 2

You are designing a streaming data solution that will ingest variable volumes of data.

You need to ensure that you can change the partition count after creation.

Which service should you use to ingest the data?

A. Azure Event Hubs Standard

B. Azure Stream Analytics

C. Azure Data Factory

D. Azure Event Hubs Dedicated

answer: D

### Question 3

You are building a database in an Azure Synapse Analytics serverless SQL pool.

You have data stored in Parquet files in an Azure Data Lake Storage Gen2 container.

Records are structured as shown in the following sample.

```json
{
	"id": 123,
	"address_housenumber": "10c",
	"address_line1": "Abraham Lane",
	"applicant1_name": "Mark Farragher",
	"applicant2_name": "Claire Smith"
}
```
The records contain two applicants at most.

You need to build a table that includes only the address fields.

How should you complete the Transact-SQL statement? 

```sql
CREATE EXTERNAL TABLE applications
WITH (
	LOCATION = ‘applications/’
	DATA SOURCE = applications_ds,
	FILE FORMAT = applications_file_format
)
AS
SELECT 
	id, 
	[address_housenumber] as addressnumber, 
	[address_line1] as addressline1
FROM _______________ (BULK
	'https://contoso1.dfs.core.windows.net/applications/year=*/*.parquet',
	FORMAT = 'PARQUET'
) AS [r]
GO
```

A. OPEN

B. OPENJSON

C. OPENROWSET

D. SELECT

Answer: C

### Question 4

You have an Azure Synapse Analytics Apache Spark pool named Pool1.

You plan to load JSON files from an Azure Data Lake Storage Gen2 container into the tables in Pool1. The structure and data types vary by file.

You need to load the files into the tables. The solution must maintain the source data types.

What should you do?

A. Load the data by using PySpark.

B. Load the data by using the OPENROWSET Transact-SQL command in an Azure Synapse Analytics serverless SQL pool.

C. Use a Get Metadata activity in Azure Data Factory.

D. Use a Conditional Split transformation in an Azure Synapse data flow.

answer: A

### Question 5

You are designing a date dimension table in an Azure Synapse Analytics dedicated SQL pool. The date dimension table will be used by all the fact tables.

Which distribution type should you recommend to minimize data movement?

A. HASH

B. REPLICATE

C. ROUND_ROBIN

D. HEAP

Answer: B

### Question 6

From a website analytics system, you receive data extracts about user interactions such as downloads, link clicks, form submissions, and video plays.

The data contains the following columns:

| Column name        | Sample data  |
| ------------------ | ------------ |
| Date               | Dec 12, 2025 |
| EventCategory      | Videos       |
| EventAction        | Play         |
| EventLabel         | Promotional  |
| ChannelGrouping    | Social       |
| TotalEvents        | 150          |
| UniqueEvents       | 120          |
| SessionsWithEvents | 90           |

You need to design a star schema to support analytical queries of the data. The star schema will contain four tables including a date dimension.

Which of the following statements about the star schema are correct?

A. EventCategory should be added to table FactEvent

B. EventCategory should be added to table DimEvent

C. TotalEvents should be added to table FactEvent

D. TotalEvents should be added to table DimEvent

E. EventLabel should be added to table FactEvent

F. EventLabel should be added to table DimEvent

answer: B, C, F

### Question 7

You plan to create a table in an Azure Synapse Analytics dedicated SQL pool.

Data in the table will be retained for five years. Once a year, data that is older than five years will be deleted.

You need to ensure that the data is distributed evenly across partitions. The solutions must minimize the amount of time required to delete old data.

How should you complete the Transact-SQL statement? 

```sql
CREATE TABLE [dbo].[FactSales]
(
	[ProductKey] int NOT NULL,
	[OrderDateKey] int NOT NULL,
	[CustomerKey] int NOT NULL
	[SalesOrderNumber] nvarchar(20) NOT NULL,
	[OrderQuantity] smallint NOT NULL,
	[UnitPrice] money NOT NULL
)
WITH
(
	CLUSTERED COLUMNSTORE INDEX,
	DISTRIBUTION = HASH(ProductKey), 
	PARTITION( [ _____________ ] RANGE RIGHT FOR VALUES
		(20210101, 20220101, 20230101, 20240101, 20250101)
	)
)
```
A. ProductKey

B. OrderDateKey

C. CustomerKey

D. SalesOrderNumber

E. OrderQuantity

F. UnitPrice

answer: B

### Question 8

You have an Azure Synapse Analytics workspace named WS1 that contains an Apache Spark pool named Pool1.

You plan to create a database named DB1 in Pool1.

You need to ensure that when tables are created in DB1, the tables are available automatically as external tables to the built-in serverless SQL pool.

Which format should you use for the tables in DB1?

A. JSON

B. CSV

C. Parquet

D. ORC

answer: C

### Question 9

You are designing an anomaly detection solution for streaming data from an Azure IoT hub. The solution must meet the following requirements:

✑ Send the output to an Azure Synapse.

✑ Identify spikes and dips in time series data.

✑ Minimize development and configuration effort.

Which should you include in the solution?

A. Azure SQL Database

B. Azure Databricks

C. Azure Stream Analytics

answer: C

### Question 10

You are creating a new notebook in Azure Databricks that will support R as the primary language but will also support Scala and SQL.

Which switch should you use to switch between languages?

A. &R

B. %R

C. \\R

D.  @R

answer: B

### Question 11

You are creating a managed data warehouse solution on Microsoft Azure.

You must use PolyBase to retrieve data from Azure Blob storage that resides in parquet format and load the data into a large table called FactSalesOrderDetails.

You need to configure Azure Synapse Analytics to receive the data.

Which four actions should you perform in sequence?

A. Create a master key on the database

B. Create an external data source for Azure Blob Storage

C. Enable transparent data encryption

D. Create an external file format to map the Parquet files

E. Create the external table FactSalesOrderDetails

F. Load the data to a staging table

answer: A, B, D, E

### Question 12

You have SQL Server 2019 on an Azure virtual machine that contains an SSISDB database.

A recent failure causes the master database to be lost.

You discover that all Microsoft SQL Server integration Services (SSIS) packages fail to run on the virtual machine.

Which four actions should you perform in sequence to resolve the issue?

A. Add a certificate to an Azure Key Vault

B. Attach the SSISDB database

C. Turn on the TRUSTWORTHY property and the CLR property

D. Enable Transparent Data Encryption

E. Open the master key for the SSISDB database

F. Encrypt a copy of the master key by using the service master key

answer: B, C, E, F

### Question 13

You configure version control for an Azure Data Factory instance as shown:

| ADF Git Setting      | Value            |
| -------------------- | ---------------- |
| Repository type      | Azure DevOps Git |
| Azure DevOps Account | MDFTPRO          |
| Project name         | Data             |
| Repository name      | dwh_batchetl     |
| Collaboration branch | main             |
| Publish branch       | adf_publish      |
| Root folder          | /                |

Complete the following statement:

Azure Resource Manager (ARM) templates for the pipeline assets are stored 
in ......

A. /
B. adf_publish
C. main
D. a parameterization template

answer: B

### Question 14

You configure version control for an Azure Data Factory instance as shown:

| ADF Git Setting      | Value            |
| -------------------- | ---------------- |
| Repository type      | Azure DevOps Git |
| Azure DevOps Account | MDFTPRO          |
| Project name         | Data             |
| Repository name      | dwh_batchetl     |
| Collaboration branch | main             |
| Publish branch       | adf_publish      |
| Root folder          | /                |

Complete the following statement:

A Data Factory Azure Resource Manager (ARM) template named mdftprosales can be foud in ......

A. /mdftprosales
B. /dwh_batchetl/adf_publish/mdftprosales
C. /main
D. /main/mdftprosales

answer: B

### Question 15

You plan to build a structured streaming solution in Azure Databricks. The solution will count new events in five-minute intervals and report only events that arrive during the interval.

The output will be sent to a Delta Lake table.

Which output mode should you use?

A. complete

B. append

C. update

D. merge

answer: B

### Question 16

You are performing exploratory analysis of bus fare data in an Azure Data Lake Storage Gen2 account by using an Azure Synapse Analytics serverless SQL pool.

You execute the Transact-SQL query shown in the following exhibit.

```sql
SELECT
	payment_type,
	SUM (fare_amount) AS fare_total
FROM OPENROWSET (
	BULK 'csv/busfare/tripdata 2020*.csv',
	DATA_SOURCE = 'BusData',
	FORMAT = 'CSV', 
	PARSER VERSION = '2.0',
	FIRSTROW = 2
)
WITH (
	payment_type INT 10,
	fare_amount FLOAT 11
) AS nyc
GROUP BY payment_type
ORDER BY payment_type;
```

Complete the following statement:

The query results include only .......................... in the csv/busfare folder.

A. CSV files in the tripdata_2020 subfolder

B. files that have filenames beginning with "tripdata_2020"

C. CSV files that have filenames containing "tripdata_202"

D. CSV files that have filenames beginning with "tripdata_2020"

answer: B

### Question 17

You have a SQL pool in Azure Synapse that contains a table named dbo.Customers. The table contains a column name Email.

You need to prevent nonadministrative users from seeing the full email addresses in the Email column. The users must see values in a format of aXXX@XXXX.com instead.

What should you do?

A. From the Azure portal, set a mask on the Email column.

B. From the Azure portal, set a sensitivity classification of Confidential for the Email column.

C. From Microsoft SQL Server Management Studio, set an email mask on the Email column.

D. From Microsoft SQL Server Management Studio, grant the SELECT permission to the users for all the columns in the dbo.Customers table except Email.


answer: A

### Question 18

You have an Azure Databricks workspace named workspace1 in the Standard pricing tier. Workspace1 contains an all-purpose cluster named cluster1.

You need to reduce the time it takes for cluster1 to start and scale up. The solution must minimize costs.

What should you do first?

A. Upgrade workspace1 to the Premium pricing tier.

B. Configure a global init script for workspace1.

C. Create a pool in workspace1.

D. Create a cluster policy in workspace1.

answer: C

### Question 19

You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.

You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.

You plan to insert data from the files into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of Table1.

You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.

Solution: In an Azure Synapse Analytics pipeline, you use a Get Metadata activity that retrieves the DateTime of the files.

Does this meet the goal?

A. Yes

B. No

answer: A

### Question 20

You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.

You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.

You plan to insert data from the files into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of Table1.

You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.

Solution: You use an Azure Synapse Analytics serverless SQL pool to create an external table that has an additional DateTime column.

Does this meet the goal?

A. Yes

B. No

answer: B

### Question 21

You have an Azure Synapse Analytics dedicated SQL pool that contains a table named Table1.

You have files that are ingested and loaded into an Azure Data Lake Storage Gen2 container named container1.

You plan to insert data from the files into Table1 and transform the data. Each row of data in the files will produce one row in the serving layer of Table1.

You need to ensure that when the source data files are loaded to container1, the DateTime is stored as an additional column in Table1.

Solution: You use a dedicated SQL pool to create an external table that has an additional DateTime column.

Does this meet the goal?

A. Yes

B. No

answer: B

### Question 22

You are provisioning an Azure SQL database in the Azure portal as shown in the following exhibit.

| Setting                | Value                                       |
| ---------------------- | ------------------------------------------- |
| Hardware configuration | Gen5 (up to 40 vCores, up to 120 GB memory) |
| Max vCores             | 6 vCores                                    |
| Min vCores             | 0.75 vCores                                 |
| Enable auto-pause      | Enabled                                     |
| Auto-pause interval    | 4 Hours                                     |
| Data max size          | 800 GB                                      |

After 4 hours of inactivity, how much time does the database require to resume operations for new activities? 

A. More than 10 minutes

B. Up to 10 minutes

C. Up to 1 minute

D. No extra time

answer: C

### Question 23

You are provisioning an Azure SQL database in the Azure portal as shown in the following exhibit.

| Setting                | Value                                       |
| ---------------------- | ------------------------------------------- |
| Hardware configuration | Gen5 (up to 40 vCores, up to 120 GB memory) |
| Max vCores             | 6 vCores                                    |
| Min vCores             | 0.75 vCores                                 |
| Enable auto-pause      | Enabled                                     |
| Auto-pause interval    | 4 Hours                                     |
| Data max size          | 800 GB                                      |

Which service tier is this database using?

A. General Purpose

B. Business Critical

C. Hyperscale

D. Premium

answer: A

### Question 24

You plan to deploy an app that includes an Azure SQL database and an Azure web app. The app has the following requirements:

✑ The web app must be hosted on an Azure virtual network.

✑ The Azure SQL database must be assigned a private IP address.

✑ The Azure SQL database must allow connections only from a specific virtual network.

You need to recommend a solution that meets the requirements.

What should you include in the recommendation?

A. Azure Private Link

B. a network security group (NSG)

C. a database-level firewall

D. a server-level firewall

answer: A

### Question 25

You are planning a solution that will use Azure SQL Database. Usage of the solution will peak from October 1 to January 1 each year.

During peak usage, the database will require the following:

✑ 24 cores

✑ 500 GB of storage

✑ 124 GB of memory

✑ More than 50,000 IOPS

During periods of off-peak usage, the service tier of Azure SQL Database will be set to Standard.

Which service tier should you use during peak usage?

A. Business Critical

B. Premium

C. Hyperscale

D. Basic

answer: A

### Question 26

You have an Azure SQL database that contains a table named factSales. FactSales contains the columns shown in the following table.

| Column name | Data type     |
| ----------- | ------------- |
| SalesID     | int           |
| ProductID   | int           |
| TotalNumber | numeric(8, 4) |
| TaxNumber   | numeric(8, 4) |
| SalesRep    | varchar(30)   |

FactSales has 6 billion rows and is loaded nightly by using a batch process. You must provide the greatest reduction in space for the database and maximize performance.

Which type of compression provides the greatest space reduction for the database?

A. page compression

B. row compression

C. columnstore compression

D. columnstore archival compression

answer: D

### Question 27

You have an Azure subscription.

You need to deploy an Azure SQL resource that will support cross database queries by using an Azure Resource Manager (ARM) template.

How should you complete the ARM template?

```json
{
	.....
	"resources": [
		{
			"type": _______________,
			"name": "[parameters('targetName')]",
			"location": "[parameters('location')]",
			"sku": {
				"name": "[parameters('skuName')]",
			},
			"properties": {
				.....
			}
		}
	]
}
```

A. Microsoft.Sql\/servers

B. Microsoft.Sql\/servers\/databases

C. Microsoft.Sql\/managedInstances

D. Microsoft.Sql\/sqlservers

answer: C

### Question 28

You have the following Azure Resource Manager template:

```json
"variable": {
	"serverName": "azsgldbserver0001"
},
"resources": [
	{
		"name": "[variables (‘srvname’)]",
		"type": "Microsoft.Sqgl/servers",
		"apiVersion": "2019-06-01-preview",
		"location": "[parameters(‘location’)]",
		"properties": {
			"administratorLogin": " [parameters (‘alogin’)]",
			"administratorLoginPassword": " [parameters (‘apassword’)]",
			"version": "12.0"
		},
		"resources": [
			{
				"name": "[concat (variables (‘serverName’),’/’,parameters(‘databaseName’))]",
				"type": "Microsoft.Sql/servers/databases",
				"apiVersion": "2020-08-0l1-preview",
				"location": " [parameters (‘location’)]",
				"kind": "v12.0",
				"sku": {
					"name": "Standard",
					"tier": "Standard",
					"capacity": 10
				},
				"dependsOn": [
					"[concat ( ‘Microsoft.Sqgl/servers/’, variables (‘serverName’))]"
				],
				"properties": {
				},
				"resources": {
				}
			}
		]
	}
]
```

Which of the following statements are true?

A. The template deploys a serverless Azure SQL database

B. The template deploys a database to an Azure SQL Managed Instance

C. The pricing tier of the database deployment is based on DTUs

D. The pricing tier of the database deployment is based on vCores

answer: C

### Question 29

You have an on-premises Microsoft SQL Server 2019 instance that hosts a database named DB1.

You plan to perform an online migration of DB1 to an Azure SQL managed instance by using the Azure Database Migration Service.

You need to create a backup of DB1 that is accessible to the Azure Database Migration Service.

What should you run for the backup and where should you store the backup?

A. Run a full backup and a log backup appended to the same file using the WITH CHECKSUM option

B. Run a full backup and a log backup to separate files using the WITH CHECKSUM option

C. Run a full backup and a log backup to separate files using the WITH_FILE_SNAPSHOT option

D. Store the backup in a recovery services vault

E. Store the backup in an Azure Blob Storage account

F. Store the backup in an Azure Virtual Machine disk

answer: B, E

### Question 30

You have the following Azure Resource Manager template:

```json
"resources": [
	{
		"name": "[variables(‘name1’)]",
		"type": "Microsoft.Sqgl/servers",
		"apiVersion": "2020-02-02-preview",
		"location": "[parameters(‘location’)]",
		"resources": [
			{
				"name": "[variables(‘name2’)]",
				"type": "Microsoft.Sql/servers/databases",
				"_______________": [
					"[concat ( ‘Microsoft.Sql/servers/’, variables (‘name1’))]"
				]
			}
		]
	}
]
```

How should you complete the template?

A. resources

B. properties

C. dependsOn

D. tags

answer: C

### Question 31

You have an on-premises Microsoft SQL Server 2019 server that hosts a database named DB1.

You have an Azure subscription that contains an Azure SQL managed instance named SQLMI1 and a virtual network named VNET1. SQLMI1 resides on VNET1.

The on-premises network connects to VNET1 by using an ExpressRoute connection.

You plan to migrate DB1 to SQLMI1 by using Azure Database Migration Service.

You need to configure VNET1 to support the migration.

What should you do?

A. Configure service endpoints.

B. Configure virtual network peering.

C. Deploy an Azure firewall.

D. Configure network security groups (NSGs).

answer: A

### Question 32

You have an on-premises Microsoft SQL server that uses the FileTables and Filestream features.

You plan to migrate to Azure SQL.

Which service should you use?

A. Azure SQL Database

B. SQL Server on an Azure Virtual Machine

C. Azure SQL Managed Instance

D. Azure Database for MySQL

answer: B

### Question 33

You need to migrate an on-premises Microsoft SQL Server database to Azure SQL Database. The solution must minimize downtime.

What should you do?

A. Configure Transaction Log Shipping.

B. Implement Always On availability groups.

C. Configure transactional replication.

D. Import a BACPAC.

answer: C

### Question 34

You have an Azure SQL database named DB1.

You have a table name Table1 that has 20 columns of type CHAR(400). Row compression for Table1 is enabled.

During a database audit, you discover that none of the fields contain more than 150 characters.

You need to ensure that you can apply page compression to Table1.

What should you do?

A. Configure the columns as sparse.

B. Change the column type to NVARCHAR(MAX).

C. Change the column type to VARCHAR(MAX).

D. Change the column type to VARCHAR(200).

answer: D

### Question 35

You have an on-premises Microsoft SQL Server named SQL1 that hosts five databases.

You need to migrate the databases to an Azure SQL managed instance. The solution must minimize downtime and prevent data loss.

What should you use?

A. Always On availability groups

B. Backup and Restore

C. log shipping

D. Database Migration Assistant

answer: B

### Question 36

You have a Microsoft SQL Server 2019 database named DB1 that uses the following database-level and instance-level features.

✑ Clustered columnstore indexes

✑ Automatic tuning

✑ Change tracking

✑ PolyBase

You plan to migrate DB1 to an Azure SQL database.

What feature should be removed or replaced before DB1 can be migrated?

A. Clustered columnstore indexes

B. PolyBase

C. Change tracking

D. Automatic tuning

answer: B

### Question 37

You have an Azure subscription that contains an Azure SQL database. The database contains a table named tablet that uses partitioned columnstores.

You need to configure table1 to meet the following requirements:

• Each partition must be compressed.

• The compression ratio must be maximized.

• You must be able to index the compressed data.

What should you use?

A. page compression

B. columnstore compression

C. GZIP compression

D. columnstore archival compression

answer: D

### Question 38

You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant. The subscription contains 10 virtual machines that run Windows Server 2019 and host Microsoft SQL Server 2019 instances.

You need to ensure that you can manage the SQL Server instances by using a single user account.

What should you do first?

A. Enable a user-assigned managed identity on each virtual machine.

B. Deploy an Azure Active Directory Domain Services (Azure AD DS) domain and join the virtual machines to the domain.

C. Enable a system-assigned managed identity on each virtual machine.

D. Join the virtual machines to the Azure AD tenant.

answer: B

### Question 39

You have an Azure subscription.

You plan to deploy a new Azure virtual machine that will host a Microsoft SQL Server instance.

You need to configure the disks on the virtual machine. The solution must meet the following requirements:

• Minimize latency for transaction logs.

• Minimize the impact on IO throughput of the virtual machine.

Which type of disk should you use for the TempDB workload?

A. Local

B. Premium SSD

C. Standard HDD

D. Standard SSD

E. Ultra Disk

answer: A

### Question 40

You have an Azure subscription.

You plan to deploy a new Azure virtual machine that will host a Microsoft SQL Server instance.

You need to configure the disks on the virtual machine. The solution must meet the following requirements:

• Minimize latency for transaction logs.

• Minimize the impact on IO throughput of the virtual machine.

Which type of disk should you use for the Transaction Logs workload?

A. Local

B. Premium SSD

C. Standard HDD

D. Standard SSD

E. Ultra Disk

answer: E

### Question 41

You have an Azure SQL Database elastic pool that contains 10 databases.

You receive the following alert.

Msg 1132, Level 16, state 1, Line 1

The elastic pool has reached its storage limit. The storage used for the elastic pool cannot exceed (76800) MBs.

You need to resolve the alert. The solution must minimize administrative effort.

Which three actions can you perform? Each correct answer presents a complete solution.

NOTE: Each correct selection is worth one point.

A. Increase the maximum storage of the elastic pool.

B. Delete data from a database.

C. Remove a database from the pool.

D. Enable data compression.

E. Shrink individual databases.

answer: A, D, E

### Question 42

You have an Azure subscription.

You need to deploy a new Azure SQL database by using Azure Command-Line Interface (CLI).

Which three parameters are required?

A. --name, --edition, and --capacity

B. --name, --tier, and --min-capacity

C. --name, --resource-group, and --server

D. --name, --licence-type, and --capacity

answer: C

### Question 43

You have an Azure subscription.

You plan to migrate 10 on-premises Microsoft SQL Server instances to Azure.

You need to ensure that the migrated environment can be managed by using multiserver administration and supports master/target (MSX/TSX) jobs.

The solution must minimize administrative effort.

Which SQL deployment options should you select as the master server (MSX) and the target server (TSX)?

A. Deploy MSX as SQL Database

B. Deploy MSX as SQL Managed Instance

C. Deploy MSX as SQL Server on Azure Virtual Machines

D. Deploy MSX as SQL Database

E. Deploy MSX as SQL Managed Instance

F. Deploy MSX as SQL Server on Azure Virtual Machines

answer: C, F

### Question 44

You have two on-premises Microsoft SQL Server 2019 instances named SQL1 and SQL2.

You need to migrate the databases hosted on SQL1 to Azure. The solution must meet the following requirements:

• The service that hosts the migrated databases must be able to communicate with SQL2 by using linked server connections.

• Administrative effort must be minimized.

What should you use to host the databases?

A. a single Azure SQL database

B. SQL Server on Azure Virtual Machines

C. Azure SQL Managed Instance

D. an Azure SQL Database elastic pool

answer: C

### Question 45

You have an on-premises Microsoft SQL Server 2016 instance that hosts a database named db1. You have an Azure subscription that contains an Azure SQL managed instance named MI1.

You plan to perform an online migration of db1 to MI1 by using Azure Database Migration Service.

You need to create the backups for the migration. The solution must minimize the number of backup files created.

Which type of backups should you create, and how should you store the backups?

A. You should create a full backup only

B. You should create a full and a differential backup

C. You should create a full and a transaction log backup

D. You should create a transaction log backup only

E. You should append all backups to a single file

F. You should write each backup to a separate file

answer: C, F

### Question 46

You have a SQL Server on Azure Virtual Machines instance named SQLVM1 that was deployed by using an Azure Marketplace SQL Server 2019 Enterprise image.

You need to change the Microsoft SQL Server instance on SQLVM1 to the Standard edition. The solution must ensure licensing compliance.

What should you do first?

A. From the SQL Server Installation Center on SQLVM1, run the Edition Upgrade wizard.

B. From SQLVM1, uninstall the SQL Server instance.

C. From the SQL Server Installation Center on SQLVM1, run the Repair wizard.

D. From the Azure portal, reconfigure SQLVM1.

answer: B

### Question 47

Your on-premises network contains a Microsoft SQL Server 2016 server that hosts a database named db1.

You have an Azure subscription.

You plan to migrate db1 to an Azure SQL managed instance.

You need to create the SQL managed instance. The solution must minimize the disk latency of the instance.

Which service tier should you use?

A. Business Critical

B. Hyperscale

C. General Purpose

D. Premium

answer: A

### Question 48

You have a Microsoft SQL Server 2019 instance in an on-premises datacenter. The instance contains a 4-TB database named DB1.

You plan to migrate DB1 to an Azure SQL Database managed instance.

What should you use to minimize downtime and data loss during the migration?

A. distributed availability groups

B. database mirroring

C. Always On Availability Group

D. Azure Database Migration Service

answer: D

### Question 49

You have an Azure subscription.

You need to deploy an Azure SQL database. The solution must meet the following requirements:

• Dynamically scale CPU resources.

• Ensure that the database can be paused to reduce costs.

What should you use?

A. the Business Critical service tier

B. the serverless compute tier

C. an elastic pool

D. the General Purpose service tier

answer: B

### Question 50

You have an Azure subscription.

You need to deploy an Azure SQL managed instance that meets the following requirements:

• Optimize latency.

• Maximize the memory-to-vCore ratio.

Which service tier and hardware generation should you use?

A. You should use the Business Critical service tier

B. You should use the General Purpose service tier

C. You should use the Hyperscale service tier

D. You should use the Premium-series hardware generation

E. You should use the Standard-series (Gen5) hardware generation

F. You should use the Premium-series - Memory Optimized hardware generation

answer: A, F

### Question 51

You have a Microsoft SQL Server 2017 server.

You need to migrate the server to Azure. The solution must meet the following requirements:

• Ensure that the latest version of SQL Server is used.

• Support the SQL Server Agent service.

• Minimize administrative effort.

What should you use?

A. an Azure SQL Database elastic pool

B. Azure SQL Database

C. SQL Server on Azure Virtual Machines

D. Azure SQL Managed Instance

answer: D

### Question 52

You have a Microsoft SQL Server 2017 server that hosts five databases.

You plan to migrate the databases to Azure.

You need to recommend a solution that meets the following requirements:

• Automatically scales compute based on the workload demand

• Provides per-second billing

What should you include in the recommendation?

A. A single Azure SQL Database in the Provisioned compute tier

B. A single Azure SQL Database in the Serverless compute tier

C. An Azure SQL Database Elastic Pool

D. Azure SQL Managed Instance

answer: B

### Question 53

You have a Microsoft SQL Server 2017 server that hosts five databases.

You plan to migrate the databases to Azure.

You need to recommend a solution that meets the following requirements:

• Automatically scales compute based on the workload demand

• Provides per-second billing

What should you include in the recommendation?

A. The Basic service tier

B. The General Purpose service tier

C. The Standard service tier

D. The Premium service tier

answer: B

### Question 54

You have an on-premises Microsoft SQL Server 2019 database named SQL1 that uses merge replication.

You need to migrate SQL1 to Azure.

Which service should you use?

A. Azure SQL Edge

B. Azure SQL Database

C. SQL Server on Azure Virtual Machines

D. Azure SQL Managed Instance

answer: C

### Question 55

You have an on-premises datacenter that contains a 2-TB Microsoft SQL Server 2019 database named DB1.

You need to recommend a solution to migrate DB1 to an Azure SQL managed instance. The solution must minimize downtime and administrative effort.

What should you include in the recommendation?

A. Log Replay Service (LRS)

B. log shipping

C. transactional replication

D. SQL Data Sync

answer: A

### Question 56

You have an Azure subscription.

You plan to deploy an instance of SQL Server on Azure Virtual Machines that supports Write Accelerator.

Which virtual machine series should you use?

A. E-series

B. G-series

C. H-series

D. M-series

answer: D

### Question 57

You have an on-premises Microsoft SQL Server 2019 instance that hosts a database named DB1.

You have an Azure subscription that contains an Azure SQL database named SQLDB1.

You need to replicate DB1 to SQLDB1.

Which type of replication should you use?

A. transactional

B. peer-to-peer

C. snapshot

D. merge

answer: A

### Question 58

You have two on-premises servers that run Windows Server 2019 and host a Microsoft SQL server 2017 Always On availability group named AG1. AG1 contains a single database named DB1.

You have an Azure subscription. The subscription contains a virtual machine named VM1 that runs Linux.

You need to migrate DB1 to a SQL Server 2019 instance on VM1. The solution must minimize the downtime of DB1 during the migration.

What should you do first, and how should you perform the migration?

A. First, Add a secondary replica to AG1

B. First, Create a SQL Server 2019 Always On availability group on VM1

C. First, Upgrade the on-premises SQL Servers to SQL Server 2019

D. Then perform the migration with a Distributed Availability Group

E. Then perform the migration with Azure Migrate

F. Then perform the migration with Log Shipping

answer: B, D

### Question 59

You have an Azure SQL database named DB1.

You need to create a partitioned table in DB1.

Which three objects should you create in sequence?

A. A filegroup

B. A partition function

C. An aligned index

D. A partition scheme

E. A table

answer: B, D, E

### Question 60

You have an on-premises Microsoft SQL Server 2016 server named Server1 that contains a database named DB1.

You need to perform an online migration of DB1 to an Azure SQL Database managed instance by using Azure Database Migration Service.

How should you configure the backup of DB1?

A. Provide the option WITH_CHECKSUM

B. Provide the option WITH_NOINIT

C. Provide the option WITH_UNLOAD

D. Provide the option WITH_LOG

answer: A

### Question 61

You have an Azure subscription that contains an instance of SQL Server on Azure Virtual Machines named SQLVM1 and a virtual machine named Server1 that runs Windows Server. SQLVM1 and Server1 are joined to an Active Directory Domain Services (AD DS) domain. Server1 hosts a file share named Share1.

You need to ensure that a SOL Server Agent job step on SQLVM1 can access the files in Share1. The solution must use the principle of least privilege.

Which three actions should you perform in sequence?

A. Create a database user

B. Create a credential

C. Create a login

D. Create a proxy

E. Assign the proxy to the job step

answer: B, D, E

### Question 62

You have an Azure subscription.

You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:

• Custom performance configuration, such as IOPS, capacity, and throughout, must be supported.

• Costs must be minimized.

Which type of disk should you include in the solution?

A. Premium SSD v2

B. Premium SSD

C. Standard SSD

D. Ultra SSD

answer: A

### Question 63

You have an on-premises datacenter that contains a 14-TB Microsoft SQL Server database.

You plan to create an Azure SQL managed instance and migrate the on-premises database to the new instance.

Which three service tiers support the SQL managed instance? Each correct answer presents a complete solution.

NOTE: Each correct selection is worth one point.

A. General Purpose Standard

B. Business Critical Memory Optimized Premium

C. General Purpose Premium

D. Business Critical Premium

E. Business Critical Standard

answer: A, B, C

### Question 64 

You have a resource group named App1Dev that contains an Azure SQL Database server named DevServer1. DevServer1 contains an Azure SQL database named DB1. The schema and permissions for DB1 are saved in a Microsoft SQL Server Data Tools (SSDT) database project.

You need to populate a new resource group named App1Test with the DB1 database and an Azure SQL Server named TestServer1. The resources in App1Test must have the same configurations as the resources in App1Dev.

Which four actions should you perform in sequence?

A. From the Azure portal, export the Azure Resource Manager templates

B. Change the server name and related variables in the templates

C. From the Azure portal, deploy the templates

D. From the database project, deploy the database schema and permissions

E. Add IP addresses to the firewall

F. Change the Active Directory admin on TestServer1

answer: A, B, C, D

### Question 65

You have an on-premises Microsoft SQL Server database named DB1.

You have an Azure subscription.

You need to migrate DB1 to an Azure SQL service that meets the following requirements:

• Protects the confidentiality of sensitive data from malware and high-privileged unauthorized database administrators

• Supports pattern matching for server-side database operations

• Uses a hardware-based encryption technology

Which Azure SQL service and attestation service should you include in the solution?

A. Azure SQL Service: Azure SQL Managed Instance

B. Azure SQL Service: Azure SQL Database DTU model

C. Azure SQL Service: Azure SQL Database vCore model

D: Attestation service: Host Guardian Service (HGS)

E: Attestation service: Microsoft Azure Attestation

F: Attestation service: No attestation

answer: C, E

### Question 66

You have two on-premises Microsoft SQL Server instances named SQL1 and SQL2.

You have an Azure subscription.

You need to sync a subset of tables between the databases hosted on SQL1 and SQL2 by using SQL Data Sync.

Which five actions should you perform in sequence?

A. Deploy an Azure SQL Database

B. Deploy an Azure SQL Managed Instance

C. Create a sync group

D. Install and configure the Client Sync Agent app on SQL1 only

E. Install and configure the Client Sync Agent app on SQL1 and SQL2

F. Install and configure the Client Sync Agent app on SQL2 only

G. Sync the metadata database configuration

H. Configure the sync group

answer: A, C, E, G, H

### Question 67

You have an on-premises Microsoft SQL Server 2022 instance that hosts a 60-TB production database named DB1.

You plan to migrate DB1 to Azure.

You need to recommend a hosting solution for DB1.

Which Azure SQL Database service tier should you use to host DB1?

A. Hyperscale

B. Business Critical

C. General Purpose

answer: A

### Question 68

You have an Azure subscription.

You plan to provision a single Azure SQL database.

You need to ensure that the database supports the autoscaling of compute resources.

Which service tier should you choose?

A. Premium

B. General Purpose

C. Business Critical

D. Standard

answer: B

### Question 69

You plan to deploy an instance of SQL Server on Linux Azure Virtual Machines. The instance will run Microsoft SQL Server 2022 and use the SQL Server IaaS Agent extension for Linux.

Which of the following statements are correct?

A. You should install the Red Hat Enterprise Linux (RHEL) operating system

B. You should install the SUSE Linux Enterprise Server (SLES) operating system

C. You should install the Ubuntu operating system

D. The SQL Server IaaS agent extension provides automatic backups

E. The SQL Server IaaS agent extension provides automatic server patching

F. The SQL Server IaaS agent extension registers the SQL Server VM in Azure

answer: A, F

### Question 70

You need to implement statistics maintenance for the Azure SQL Database named SalesSQLDb1. The solution must meet the technical requirements.

Which four actions should you perform in sequence?

A. Create an Azure Automation account

B. Create a SQL Server Agent job

C. Run sp_add_jobserver

D. Import the SqlServer module

E. Create a runbook that runs a PowerShell script

F. Publish the runbook.

G. Create and configure a schedule

answer: A, E, F, G

### Question 71

You need to recommend a solution to ensure that the customers can create the database objects. Ensure that users can create their own DB object but be prevented from modifying any existing DB objects

What should you include in the recommendation?

A. For each customer, grant the customer ddl_admin to the existing schema.

B. For each customer, create an additional schema and grant the customer ddl_admin to the new schema.

C. For each customer, create an additional schema and grant the customer db_writer to the new schema.

D. For each customer, grant the customer db_writer to the existing schema.

answer: B

### Question 72

You have a new Azure SQL database. The database contains a column that stores confidential information.

You need to track each time values from the column are returned in a query. The tracking information must be stored for 365 days from the date the query was executed.

Which two actions should you perform? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

A. Turn on auditing and write audit logs to an Azure Storage account.

B. Add extended properties to the column.

C. Turn on auditing and write audit logs to an Event Hub

D. Apply sensitivity labels named Highly Confidential to the column.

E. Turn on Azure Defender for SQL

answer: A, D

### Question 73

You are developing an application that uses Azure Data Lake Storage Gen 2.

You need to recommend a solution to grant permissions to a specific application for a limited time period.

What should you include in the recommendation?

A. role assignments

B. account keys

C. shared access signatures (SAS)

D. Azure Active Directory (Azure AD) identities

answer: C

### Question 74

You have an Azure subscription that is linked to a hybrid Azure Active Directory (Azure AD) tenant. The subscription contains an Azure Synapse Analytics SQL pool named Pool1.

You need to recommend an authentication solution for Pool1. The solution must support multi-factor authentication (MFA) and database-level authentication.

What should you recommend? (Two answers)

A. Azure AD authentication

B. Microsoft SQL Server authentication

C. Passwordless authentication

D. Windows authentication

E. Application roles

F. Contained database users

G. Database roles

H. Microsoft SQL Server logins

answer: A, F

### Question 75

You are designing a security model for an Azure Synapse Analytics dedicated SQL pool that will support multiple companies.

You need to ensure that users from each company can view only the data of their respective company.

Which two objects should you include in the solution? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

A. a column encryption key

B. asymmetric keys

C. a function

D. a custom role-based access control (RBAC) role

E. a security policy

answer: C, E

