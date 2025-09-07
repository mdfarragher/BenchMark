

# Question 1
You need to store structured data in a relational database. How is data organized in a relational database?

    Documents containing fields and values
    Tables containing keys and values
    Graphs containing edges and nodes
    Tables containing rows and columns

Data is organized in tables containing rows and columns in a relational database. Relational databases use multiple tables with rows and columns to store structured data, with each row containing the same set of columns.

Data is not organized in documents containing fields and values in a relational database. Documents containing fields and values are a type of semi-structured data with a more flexible structure. Documents are usually represented in JavaScript Object Notation (JSON) format, and documents can have different fields to represent the same class of information.

Data is not organized in tables containing keys and values in a relational database. This semi-structured data is used in a key-value store, which is similar to a relational table. However, each row (represented as key) can have a different set of columns (represented as value).

Data is not organized in graphs containing edges and nodes in a relational database. This semi-structured data is used by graph databases, which are specialized to store and query information about complex relationships. 


# Question 2
For each of the following statements about Azure Database for MySQL, select Yes if the statement is true. Otherwise, select No. Statement: Azure Database for MySQL has a single deployment option.

    Yes
    No

Answer: No.

Azure Database for MySQL supports two deployment options: single server, which has minimal required configuration, handles most database functions, such as back-ups, for the user and is best suited for existing applications, and flexible server, which allows more granular control and is best suited for new deployments.


# Question 3
What type of data is JavaScript Object Notation (JSON) format data an example of?

    Structured
    Relational
    Semi-structured
    Unstructured

A JSON format data file is an example of semi-structured data. In a JSON document, each data field is identified by a label, followed by a colon, and the field value. A field can have multiple values.

Unstructured data includes files like video or audio files with no schema structure. This type of data is usually stored in Azure Blob storage.

Structured data and relational data refer to the same data structure with data in a highly normalized format and stored in multiple related tables. The most common storage solution is some type of SQL database management system.


# Question 4
You are evaluating use cases for Azure Synapse Analytics. Which is the most appropriate use case for Azure Synapse Analytics?

    To perform very complex queries and aggregations on a large amount of relational data.
    To store massive amounts of unstructured data in a hierarchical structure.
    To create dashboards and data visualizations from tabular data.
    To serve as data storage for online transactional processing (OLTP) workloads.

The most appropriate use case for Azure Synapse Analytics is to perform very complex queries and aggregations on a large amount of relational data. You can provision Synapse SQL pools to quickly execute complex queries across multiple computer nodes thanks to the Synapse SQL massively parallel processing (MPP) architecture.

The most appropriate use case for Azure Synapse Analytics is not to create dashboards and data visualizations from tabular data. You should use Power BI for that instead.

The most appropriate use case for Azure Synapse Analytics is not to store massive amounts of unstructured data in a hierarchical structure. You should use Azure Data Lake Storage for that instead.

The most appropriate use case for Azure Synapse Analytics is not to serve as data storage for online transactional processing (OLTP) workloads. You should instead use a relational database service like Azure SQL Database.


# Question 5
You work for a finance company that tracks information regarding stock prices over time. It uses an on-premises MariaDB server to store this data with a temporal dimension, allowing queries to compare stocks and predictions over time. Which three actions will result from your company migrating its systems to Azure Database for MariaDB? Each answer represents a complete solution.
Select all answers that apply:

    Having automatic backups
    Having the need to migrate to Azure SQL Database
    Having high availability
    Having built-in performance monitoring
    Having the ability to choose the operating system of the server

Migrating the company's systems to Azure Database for MariaDB will result in:

Having high availability - Azure Database for MariaDB guarantees 99.99% up-time for its service, which is often called four nines.
Having automatic backups -  Azure Database for MariaDB provides automatic backups and enables administrators to enact a point-in-time restore for up to 35 days.
Having built-in performance monitoring - Azure Database for MariaDB provides various metrics and logs to help administrators understand how their database performs. They can also set up alerts based on these metrics if an item needs their attention.

Azure Database for MariaDB is a Platform as a Service (PaaS) service, meaning that Microsoft, and not the user, is responsible for the infrastructure of the virtual hardware it runs on (including the operating systems).

Azure Database for MariaDB will allow the company to continue using MariaDB, but as a service. It will not need to adapt its systems to run on Azure SQL Database or perform a migration.


# Question 6
Evaluate the following statement: "You need to define a strict schema on semi-structured data." Is this correct?

    Yes
    No

Answer: No.

You do not need to define a strict schema on semi-structured data. With semi-structured data, you do not need to define a schema. It focuses on storing the entity attributes data as-is rather than manipulating the data in tables and columns, that follow a strict schema, like a relational database.




# Question 7
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Lake Storage is capable of storing a large amount of data in a cost-effective way.

    Yes
    No

Answer: Yes.

Azure Data Lake Storage is capable of storing a large amount of data in a cost-effective way. Azure Data Lake Storage can store large amounts of data, such as hundreds of terabytes and more, and you only pay for what you use. You can reduce the storage cost even more by using features such as storage lifecycle to archive or move data that is not used frequently to cheaper storage tiers.

# Question 8
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Factory can load data from Azure Blob Storage, Azure Data Lake Storage, Azure Cosmos DB, and Azure Synapse Analytics.

    Yes
    No

Answer: Yes.

Azure Data Factory can load data from Azure Blob Storage, Azure Data Lake Storage, Azure Cosmos DB, and Azure Synapse Analytics. You can even load data from services outside Azure, such as Amazon S3.


# Question 9
Which Azure storage service includes support for Hot, Cool, and Archive access tiers?

    Azure Blob
    Azure Table
    Azure File

Azure Blob is the only Azure storage option that supports access tiers. The default is the Hot tier, which is designed for frequently accessed data. The Cool tier is optimized for data that will be stored for at least 30 days. The Cool tier has lower storage costs than the Hot tier but higher costs for early access. The Archive tier is designed for data that is rarely accessed and will remain in storage for at least 180 days. Access to Archive tier data requires the data to be rehydrated to a Hot or Cool tier. This can mean a latency of several hours. Access tier support requires Data Lake Storage Gen2.

Azure Blob also supports two performance tiers. The Standard performance tier provides for high performance using hard disk-based storage media. The Premium performance provides greater throughput than the Standard tier and uses solid-state drive (SSD) media. The Standard and Premium tiers are also supported for other storage options including Azure File storage and Azure SQL Database.

Azure Table and Azure File do not support access tiers. Access tiers is a feature supported through Cosmos DB. Azure Table and Azure File are distinct storage types and are not implemented through Cosmos DB APIs. Table storage is used for storing structured, non-relational data. File storage provides file storage with shared access, similar to a file server.


# Question 10
Evaluate the following statement: "You can use semi-structured data to store data that has a highly variable structure." Is this correct?

    Yes
    No

Answer: Yes

You can use semi-structured data to store data that has a highly variable structure. You can store entities with different fields with semi-structured data, for example, a customer in an e-commerce platform could have multiple contact numbers or addresses, while another customer could have only one contact number. Semi-structured data provides you with this flexibility.




# Question 11
You need to write a query within Azure Data Explorer. Which query language should you use?

    Gremlin
    FetchXML
    KQL
    SQL

You should use KQL. Azure Data Explorer uses Kusto Query Language (KQL), an open-source language based on SQL.

You should not use SQL. Structured Query Language (SQL) is used to query relational databases.

You should not use Gremlin. Gremlin is used to query graph databases.

You should not use FetchXML. FetchXML is an XML-based query language used to query Microsoft Dataverse in the Power Platform.


# Question 12
It´s a big data processing service which is used to provision and manage a cluster of open-source analytics solutions such as Apache Spark, Hadoop, and Kafka.

    Azure Analysis Services
    Azure Databricks
    Azure HDInsight

Azure HDInsight is a big data processing service which is used to provision and manage a cluster of open-source analytics solutions such as Apache Spark, Hadoop, and Kafka.

Azure Databricks is a complete platform for big data processing, streaming, and machine learning, which is optimized for the Microsoft Azure cloud services platform and built on top of Apache Spark.

Azure Analysis Services is a service used to build multidimensional or tabular models used by online analytical processing (OLAP) queries. You can combine data from multiple sources, such as Azure Synapse Analytics, Azure Data Lake Store, Azure Cosmos DB, and others to build the tabular models.


# Question 13
Evaluate the following statement: "You can use XML or JSON as a file format to store semi-structured data." Is this correct?

    Yes
    No

Answer: Yes.

You can use Extensible Markup Language (XML) or JavaScript Object Notation (JSON) as a file format to store semi-structured data. Both file formats are flexible enough to store semi-structured data. You can add new attributes to entities by adding new keys to a JSON object or adding new elements or attributes to an XML document.



# Question 14
Azure File storage

    Allows you to select the underlying hardware and operating system.
    Is the recommended storage solution for key/value storage implementation.
    Supports direct mounting by Windows, MacOS, and Linux.
    Supports redundancy across multiple regions by default.

Answer: supports direct mounting by Windows, macOS, and Linux.

Azure File storage supports direct mounting by Windows, macOS, and Linux. This includes support for concurrent access from the cloud and on-premises. Azure File storage can be used to supplement or replace on-premises file server shares.

Azure File storage does not allow you to select the underlying hardware and operating system. Azure File storage is implemented as a serverless file service in which you have neither direct access to, or administrative responsibilities for, the underlying architecture. The one infrastructure choice you can make is between hard disk (HDD) standard file shares and solid-state disk (SSD) premium file shares.

Azure File storage is not the recommended storage solution for key/value storage implementation. Microsoft recommends Azure Cosmos DB Core (SQL) API for new key/value requirements. Key/value storage is also supported by Azure Table storage and Cosmos DB Table API.

Azure File storage does not support redundancy across multiple regions by default. Standard file shares support locally-redundant storage (LRS) by default with options for zone redundant storage (ZRS), geo-redundant storage (GRS), and geo-zone-redundant storage (GZRS). Replication across multiple regions is supported as an option, but not as a default setting. The large file share feature and premium file shares support LRS and ZRS only.



# Question 15
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Lake Storage enables hierarchical namespace compatible with Hadoop Distributed File System (HDFS).

    Yes
    No

Answer: Yes.

Azure Data Lake Storage enables hierarchical namespace compatible with Hadoop Distributed File System (HDFS). Azure Data Lake Storage provides a layer to access Azure Blob Storage data as an HDFS storage, including support to organize files in directories and subdirectories, allowing you to examine large quantities of data quickly.



# Question 16
A car hire company maintains a spreadsheet with a list of its vehicles, containing the license plate, make, model, color and year purchased. Evaluate the following statement: "Vehicle is a data entity." Is this correct?

    Yes
    No

Answer: Yes.

 Vehicle is a data entity. A data entity models a real-world object, which has characteristics (attributes). The car hire company's data models two entities: vehicle and rental. In the case of the vehicle, its attributes are the license plate, make, model, color and year purchased. 


# Question 17
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Factory can export data to Azure Data Lake Storage and Azure Synapse Analytics only.

    Yes
    No

Answer: No.

Azure Data Factory can export data to Azure Data Lake Storage, Azure Synapse Analytics, and many other destinations, such as Azure SQL Database, Azure Blob Storage, and Azure Cosmos DB.


# Question 18
You plan to reduce storage costs to store older, non-structured data in Azure Blob storage. The data needs to be accessible occasionally to generate reports that must be available as soon as possible. You need to choose the most appropriate data tier for this data. Which tier should you use?

    Archive
    Hot
    Cool

You should use the cool tier. This tier is optimized for storing data that is infrequently accessed, with a lower storage cost than the hot tier.

You should not use the hot tier. This tier is optimized for frequently accessed data and has the highest storage cost among the storage tiers.

You should not use the archive tier. This tier is optimized for storing data that is rarely accessed, with the lowest storage cost among the storage tiers. The archive tier data is saved in offline storage, requiring you to wait for the rehydration of the data to an online tier before you can access the data.


# Question 19
A car hire company maintains a spreadsheet with a list of its vehicles, containing the license plate, make, model, color and year purchased. Evaluate the following statement: "License plate is a key value." Is this correct?

    Yes
    No

Answer: Yes.

License plate is a key value. License plate is a unique value for vehicles. It is referenced in both the vehicle spreadsheet and the rental spreadsheet, allowing a single vehicle to be related to many rentals; this is called a one-to-many relationship. The license plate value acts as a foreign key for rentals.




# Question 20
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You should use stream processing to measure the weekly gas consumption in a neighborhood.

    Yes
    No

Answer: No.

You should not use stream processing to measure the weekly gas consumption in a neighborhood. This scenario is best suited for a batch processing workload.


# Question 21
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Databricks is an analytics platform based on Apache Spark.

    Yes
    No

Answer: Yes.

Azure Databricks is an analytics platform based on Apache Spark. Azure Databricks is a complete platform for big data processing, streaming, and machine learning optimized for the Microsoft Azure cloud services platform and built on top of Apache Spark.


# Question 22
You are migrating an application to Azure. This application uses a shared network folder as a data store. You need to move the shared network folder to Azure storage. Which type of Azure storage should you use?

    Azure File storage
    Azure Blob storage
    Azure Table storage
    Azure Queue storage

You should use Azure File storage. Azure File storage provides file shares compatible with the Server Message Block (SMB) protocol, replacing traditional on-premises file servers with a cloud solution.

You should not use Azure Queue storage. Azure Queue storage is a service used for storing messages that are used by distributed applications. A queue message can be up to 64 KB in size.

You should not use Azure Table storage. Azure Table storage is used to store data as rows and columns, forming a table in which the number of columns may vary according to each row.

You should not use Azure Blob storage. Azure Blob storage can store unstructured data, such as binary objects, images, media files, and large text files, in a cost-efficient and scalable manner.



# Question 23
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Factory can have multiple pipelines.

    Yes
    No

Answer: Yes.

Azure Data Factory can have multiple pipelines. Azure Data Factory allows you to create multiple data pipelines.


# Question 24
A car hire company maintains a spreadsheet with a list of its vehicles, containing the license plate, make, model, color and year purchased. Evaluate the following statement: "The car hire company´s data is semi-structured." Is this correct?

    Yes
    No

Answer: No.

The car hire company's data is structured. Structured data is regular; the same set of information is recorded for each entity instance (in this instance, each line in the spreadsheet). For this reason, it is often referred to as tabular data. In semi-structured data, similar information with some variation is recorded for each instance and it is often hierarchical (one record can be a parent to another). For example, one record could record a home address and an e-mail address, and the next one might have a home address and a shipping address but not an e-mail address. For this car hire company, the same information is held for all records in the vehicle and rental spreadsheets, and so the data is structured. The rental and vehicle tables are related, and the two spreadsheets act as a basic relational database.



# Question 25
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Factory can run SQL Server Integration Service (SSIS) packages using the Execute SSIS Package activity.

    Yes
    No

Answer: Yes.

Azure Data Factory can run SQL Server Integration Service (SSIS) packages using the Execute SSIS Package activity. To use the Execute SSIS Package activity, you need to configure the Azure-SSIS integration runtime (IR).


# Question 26
You need to describe which elements compose a key in Azure Table storage. Which two elements compose a key? Each correct answer presents part of the solution.
Select all answers that apply:

    Timestamp
    Partition key
    Table name
    Row key
    Value

The two elements that compose a key in Azure Table storage are the partition key and the row key. Data stored in Azure Table storage is referred to as rows and columns, and it forms a table in which the columns may vary according to each row. The rows in a table are split into partitions, and related rows are grouped based on a common property. This common property is called a partition key. The partition key identifies the partition inside the Azure Table storage and a row key is used to uniquely identify each row in a given partition.

The table name does not compose a key in Azure Table storage. The table name is an identifier in the Azure Storage account used to store a set of data in the key/value format.

The value does not compose a key in Azure Table storage. The value represents the other properties related to a given key. This is the data that is returned when you query a given key.

The timestamp does not compose a key in Azure Table storage. The timestamp is a property used to record the time an entity was last modified. The timestamp is used internally by the Azure Table storage to provide optimistic concurrency.




# Question 27
You are building a Power BI report for your company. You need to add a visual that will allow report viewers to ask questions about the data using natural language. Which type of visual should you select?

    Treemap
    Q&A 
    Doughnut chart
    Gauge chart

You should select Q&A. The Q&A visual gives users a question (text input) box that they can use to ask questions in natural language as well as a pre-populated list of suggested questions and receive visual answers.

You should not select doughnut chart. A doughnut chart is similar to a pie chart; it shows the relationship of parts to a whole.

You should not select gauge chart. These display a semi-circle gauge displaying progress toward a goal or KPI.

You should not select Treemap. These are composed of colored rectangles and are used to represent hierarchical data or portions of parts toward a whole where there are too many parts to display in a pie or doughnut chart adequately.


# Question 28
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Databricks can handle batch processing only.

    Yes
    No

Answer: No.

Azure Databricks can handle batch and stream processing. You can also perform real-time data processing and event streaming from Azure Event Hubs with Azure Databricks.


# Question 29
Which type of database is used to store structured data?

    Relational
    Key-value
    Column family
    Graph

Relational databases store structured data in tables. Records in separate tables are related to each other using keys, which are columns storing unique values per table row. Tables allow the storage of records in the same structure, containing the same attributes. Structured data is usually stored in a relational fashion; it minimizes storage costs through reducing duplication of data. Structured data is commonly queried using SQL (structured query language), which is why non-relational databases that store semi-structured data are sometimes referred to as NoSQL.

Key-value databases are non-relational and can be used to store semi-structured data. Semi-structured data allows for variation between each instance of a data entity. For example, one record may contain a single email address as an attribute, another may contain three, and another may not contain any email addresses. Key-value databases allow two components of data to be stored related to an individual record: a unique key and a value, which can contain different types, formats and amounts of data per record.

Column family databases are non-relational and can be used to store semi-structured data. Tables in column family databases can be divided into groups (column-families), holding sets of columns that are related to each other.

Graph databases are non-relational and can be used to store semi-structured data. Graph databases contain an additional dimension to many other types of database; they store entities as nodes and allow relationships to other nodes (edges) to have a direction. For instance, a parent/child relationship between two person nodes would indicate which is the parent and which is the child. 


# Question 30
In Azure Table storage, data is stored as rows and columns, forming a table in

    A group of columns is stored in different partitions
    The number of columns is exactly the same in each row
    The number of columns may vary according to each row

Answer: the number of columns may vary according to each row.

In Azure Table storage, a group of columns is not stored in different partitions. The rows in a table are split into partitions, which group together related rows based on a common property. This common property is called the partition key.

The number of columns in each row may not be exactly the same. Azure Table lets you store semi-structured data. Unlike in a relational table, each row can have different columns of data.

In Azure Table storage, data is stored as rows and columns, forming a table in which the number of columns may vary according to each row.



# Question 31
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Pipeline can have multiple activities.

    Yes
    No

Answer: Yes.

Pipeline is a logical grouping of activities that performs a task. You can have multiple activities in a pipeline.


# Question 32
An Azure Data Factory pipeline ingests employee data, geocodes each record (adding latitude and longitude values), then outputs the data into a data warehouse. For each of the below statements about the pipeline, select Yes if the statement is true. Otherwise, select No. Statement: The pipeline is orchestrating an ETL process.

    Yes
    No

Answer: Yes.

The pipeline is orchestrating an ETL process. ETL stands for extract, transform, load. This means that some manipulation operations are performed on the data before reaching its final destination. This operation is called data enrichment (data is being added). As the geocoding is being applied before the data reaches the target warehouse, this process is an example of ETL.


# Question 33
You need to store training videos for company users. What Azure data service should you use?

    Azure SQL Database
    Azure Table storage
    Azure File storage
    Azure Blob storage

You should use Azure Blob storage to store training videos. Azure Blob storage allows you to store large object files such as images, videos, and virtual machines (VMs).

You should not use Azure Table storage to store training videos. Azure Table storage allows you to store semi-structured data into key/value format. This means it stores data into a rows and columns format, but unlike a relational database, each row has a key and each column contains entire data value.

You should not use Azure File storage to store training videos. Azure File storage allows you to create file shares in the cloud, which can be accessible for network users.

You should not use Azure SQL database to store training videos. Azure SQL database allows you to store relational data in a cloud database.




# Question 34
You need to collect real-time data generated by the anti-cheating platform of an online game. Which type of workload or processing should you use?

    Online transaction processing (OLTP)
    Stream processing
    Online analytical processing (OLAP)
    Batch processing

You should use stream processing. You can use streaming processing workloads to handle a continuous stream of data used by time-critical operations.

You should not use batch processing. You can use batch processing workloads to collect a group of data with a scheduled time interval or when a certain amount of data has arrived that is not time-sensitive.

You should not use an OLTP workload. You can use OLTP workloads with transactional systems used in the day-to-day operations of an organization, like accounting, financial, and other systems that require strong consistency for transactions.

You should not use an OLAP workload. You can use OLAP workloads to organize large business databases and perform complex analyses without negatively affecting transactional systems.


# Question 35
Evaluate the following statement: "Semi-structured data must adhere to a fixed schema." Is this correct?

    Yes
    No

Answer: No.

Semi-structured data does not need to adhere to a fixed schema. Semi-structured data allows for flexibility in the data being stored. Each instance of a data element (e.g. a customer) can have different attributes, which can be stored in a different order. Structured data requires a fixed schema; that is, each row of data must contain the same set of attributes in the same order. 

Semi-structured data allows for variation between instances of data entities. Semi-structured data allows the storage of different sets of attributes per instance of a data entity. For example, one customer may have two email addresses and no mobile phone number, and a second customer might have three mobile phone numbers and one email address. 

Semi-structured data allows for a hierarchical schema. Semi-structured data allows data entities to be set up in a hierarchical fashion; that is, some entities can be modeled in a parent/child relationship. For example, it can represent a complex manager and employee relationship, whereby an employee may report to many managers, or a manager may be responsible for many employees, potentially sharing responsibility for some employees with other managers. 

Semi-structured data does not require all data entities to have the same attributes. This is true for structured data. Semi-structured data allows for variation between instances of data entities; different attributes and numbers of the same attribute may be recorded for each instance. 





# Question 36
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Databricks provides an interactive workspace for exploration and data visualization.

    Yes
    No

Answer: Yes.

Azure Databricks provides an interactive workspace for exploration and data visualization. Azure Databricks provides a workspace for collaboration between data scientists, data engineers, and business analysts. You can run notebooks in R, Python, Scala, or SQL, and interact with the data very quickly.



# Question 37
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Activities in a pipeline can only run sequentially.

    Yes
    No

Answer: No.

Activities in a pipeline can either run sequentially or operate in parallel. An activity represents a step in a pipeline.


# Question 38
An Azure Data Factory pipeline ingests employee data, geocodes each record (adding latitude and longitude values), then outputs the data into a data warehouse. For each of the below statements about the pipeline, select Yes if the statement is true. Otherwise, select No. Statement: The pipeline is orchestrating and ELT process

    Yes
    No

Answer: No.

The pipeline is not orchestrating an ELT process. ELT stands for extract, load, transform. Manipulation operations are performed in-situ in the target system. The data is originally loaded into the target system as it was in the source system. As the geocoding is being applied before the data reaches the target warehouse, this process is ETL.


# Question 39
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Azure Data Lake Storage is built on top of Azure File storage.

    Yes
    No

Answer: No.

Azure Data Lake Storage is not built on top of Azure File storage. Azure Data Lake Storage Gen2 is built on top of Azure Blob storage, combining the features of the previous generation of Azure Data Lake Storage with Azure Blob storage.

# Question 40
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You can load a large set of data at once using batch processing.

    Yes
    No

Answer: Yes.

You can load a large set of data at once using batch processing. You should use batch processing to process large datasets at once, generally scheduling the processing to run when the systems are not being used, such as overnight, or during off-peak hours.


# Question 41
To implement folder and directory level security in Azure Storage, you need to:

    Enable hierarchical namespace
    Use the cool access tier as default
    use premium performance

Answer: Enable hierarchical namespace.

To implement folder and directory level security in Azure Storage, you need to enable hierarchical namespace. Enabling hierarchical namespace allows you to organize your blob containers in folders and directories, allowing you to define POSIX-compatible permissions and role-based access control (RBAC) in your container.

You should not use the cool access tier as default or use premium performance. You can use the cool access tier to reduce storage costs, and premium performance to improve data access performance. These features are not related to folder or directory access control in Azure Storage.



# Question 42
Your company uses both relational and non-relational data. You need to determine which tools are suitable for each of the following tasks. Task: Extract data from external sources.

    Azure Data Factory
    Azure Data Lake Storage
    Azure Synapse Analytics

You should use Azure Data Factory to extract data from external sources. Azure Data Factory allows you to extract data from both relational and non-relational data stores.



# Question 43
An Azure Data Factory pipeline ingests employee data, geocodes each record (adding latitude and longitude values), then outputs the data into a data warehouse. For each of the below statements about the pipeline, select Yes if the statement is true. Otherwise, select No. Statement: Geocoding the employee records is a pipeline activity.

    Yes
    No

Answer: Yes.

Geocoding the employee records is a pipeline activity. Activities are operations that are performed on a data pipeline.



# Question 44
You are building a Power BI report for your company. You need to display a list of rows of data and show users additional headline information regarding the row they have selected. Which two visuals should you use to achieve this goal? Each correct answer presents a complete solution.
Select all answers that apply:

    Table
    Key influencers chart
    Card
    Basic map
    Funnel chart

You should use Table. Table visuals allow you to display data in two dimensions with columns and rows, like a spreadsheet.

You should also use Card. Card visuals display one or more data points about a particular row.

You should not use Funnel chart. Funnel charts are used to display a process with stages; for instance, a sales pipeline.

You should not use Key influencers chart. Key influencers chart are used to help users understand the reasons behind a metric.

You should not select Basic map. Basic maps allow you to associate data with a geographic area and display it on a map view.


# Question 45
Your company is using Azure Files. You need to improve the performance of serving files to users inside your on-premises network. What should you use to synchronize the Azure Files locally shared files with a local cache inside your company network?

    Azure Files AD Authentication
    AzCopy
    Azure storage account
    Azure File Sync

You should select Azure File Sync. The Azure File Sync service connects an on-premises server with cached copies of files with Azure File Storage data. This will allow users to access files via the cached copies inside your on-premises network, which improves performance.

You should not select AzCopy. This utility allows users to upload files to Azure File Storage.

You should not select Azure storage account. A storage account is a shared pool for storage. You can use it to create Azure file shares or Blob Storage containers.

You should not select Azure Files AD Authentication. This allows users to authenticate via single sign-on (SSO) when they access an Azure file share and a directory, just as they would with Office 365 applications. There would be no improvement in file-serving performance.



# Question 46
Your company uses both relational and non-relational data. You need to determine which tools are suitable for each of the following tasks. Task: Maintain relational and NoSQL data in a data store.

    Azure Data Factory
    Azure Data Lake Storage
    Azure Synapse Analytics

You should use Azure Data Lake Storage to maintain relational and NoSQL data in a data store. You can load raw data into Azure Data lake storage.


# Question 47
With which three of the following services can you use Spark Structured Streaming, in order to create complex data-streaming solutions? Each correct answer presents a complete solution.
Select all answers that apply:

    Azure HDInsight
    Azure Databricks
    Azure Synapse Analytics
    Azure SQL Database
    Power BI

Spark Structured Streaming can be used with Azure Synapse Analytics, Azure Databricks, and Azure HDInsight. Spark Structured Streaming is an open-source library for Apache Spark-based services.

Spark Structured Streaming cannot be used with Azure SQL Database or Power BI. Azure SQL Database is a relational database service, and Power BI is a Power Platform analytics tool.


# Question 48
Which are three components of Azure Synapse Analytics?
Select all answers that apply:

    Azure SQL Database
    Workspaces
    Pipelines
    Azure Data Lake Storage Gen 2
    Power BI

Azure Data Lake Storage Gen 2 is a component of Azure Synapse Analytics. This is where data, scripts, and other items are stored within Azure Synapse Analytics. Azure Synapse Analytics is a tool that allows massive and efficient data storage, built-in machine learning, and artificial intelligence (AI) to provide data insights.

Pipelines are also a component of Azure Synapse Analytics. These are used to ingest and transform data within Azure Synapse. They use the same engine as Azure Data Factory.

Workspaces are a component of Azure Synapse Analytics. These are where you work within Synapse Studio.

Power BI is not a component of Azure Synapse Analytics. Power BI is a Power Platform App that allows users to visualize and analyze their data to gain insights. It can connect to Azure Synapse Analytics, but it is a separate app.

Azure SQL Database is not a component of Azure Synapse Analytics. Azure SQL Database is a cloud-managed relational database service. Azure Synapse Analytics uses an Azure Data Lake to store data.


# Question 49
Your company is using Azure blob storage to store recordings of conference speeches as video files, and the marketing department wishes to start storing audio recordings as well. You need to explain how they can separate this type of files from the existing videos. What should you recommend?

    Container
    Blob
    Storage account
    Archive tier

You should recommend a container. Containers act like folders in a file system under your Blob Storage account. They are used to logically group related blob files together. For instance, those with different extensions. You can create an unlimited number of containers, and each container can store an unlimited number of blobs.

You should not recommend a storage account. Storage accounts are your unique namespace in Azure, containers live under them to logically group different types of files together.

You should not recommend a blob. Blobs (or binary large objects) are individual files. Blobs are added to containers, which act like directories under your storage account.

You should not recommend an archive tier. The archive tier is one of the three tiers (hot, cool, and archive) which governs how quickly you can retrieve blobs. The archive tier is the slowest retrieval (and therefore the cheapest), which is intended for blobs that you will not need to access frequently.


# Question 50
Your company uses both relational and non-relational data. You need to determine which tools are suitable for each of the following tasks. Task: Analyze relational and NoSQL data.

Azure Data Factory
Azure Data Lake Storage
Azure Synapse Analytics

You should use Azure Synapse Analytics to analyze relational and NoSQL data. You can analyze a high volume of structured and unstructured data with Azure Synapse Analytics.

# Question 51
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You should use stream processing to monitor temperature sensors on a production line.

    Yes
    No

Answer: Yes.

You should use stream processing to monitor temperature sensors on a production line. Streaming processing workloads are best suited to handling continuous data used by time-critical operations.


# Question 52
Which service model does Azure Stream Analytics provide?

    On-premises
    IaaS
    SaaS
    PaaS

Azure Stream Analytics provides a platform as a service (PaaS) service model.

Azure Stream Analytics is an event processing and analytics engine. It allows users to ingest a continuous amount of streaming data from various sources like Azure Event Hubs or IoT devices, perform operations on top of the streamed data, and finally send the output to a target like a data warehouse.

An example use case would be to use machine learning to apply a predictive score of how likely a car is to need maintenance, based on information ingested from in-car sensors. The data could then be output to Power BI to produce a report alerting users to these insights.

Azure Stream Analytics does not require users to provision their own infrastructure, but users will write their own software to create their own queries to analyze the streaming data.

Software as a service (SaaS) gives users the least level of responsibility of all cloud services; it only requires users to control access to their data and maintain user authentication.

Infrastructure as a service (IaaS) requires users to configure their network and the operating systems of services provided.

On-premises systems are not cloud services; they require users to provide everything required for their solutions from the ground up, including the physical machines they will run on.


# Question 53
You need to identify which non-relational data stores support multi-region writes

    Azure Table storage only
    Cosmos DB Table API only
    Cosmos DB Table API and Azure Table storage

Cosmos DB Table API supports multi-region writes and read replicas. You can configure read replicas in a Cosmos DB account to multiple regions, including support to create multi-region writes.

Azure Table storage supports multi-region reads replicas only. You can configure read replicas in Azure Table storage by configuring the storage account to use Read-access geo-redundant storage (RA-GRS) redundancy. This enables a readable replica in a secondary region. However, you cannot write data in the secondary region.


# Question 54
In Azure Data Factory, what is a logical grouping of activities that define tasks to perform on your data?

    A dataset
    A linked service
    A pipeline

In Azure Data Factory, a pipeline is a logical grouping of activities that define tasks to perform on your data.

A dataset is a representation that maps the data structure inside a pipeline with an external source or destination. Azure Data Factory uses datasets to perform tasks defined in your pipeline activities to move or transform data.

A linked service is used to provide the connection between a data store and Azure Data Factory. A linked service is associated with a dataset and is used to extract or load data in the pipeline.


# Question 55
You need to identify which non-relational data stores support read replicas

    Azure Table storage only
    Cosmos DB Table API only
    Cosmos DB Table API and Azure Table storage

Cosmos DB Table API supports multi-region writes and read replicas. You can configure read replicas in a Cosmos DB account to multiple regions, including support to create multi-region writes.

Azure Table storage supports multi-region reads replicas only. You can configure read replicas in Azure Table storage by configuring the storage account to use Read-access geo-redundant storage (RA-GRS) redundancy. This enables a readable replica in a secondary region. However, you cannot write data in the secondary region.


# Question 56
You need to describe the characteristics of data used in stream processing. For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You can process stream data at the moment it is generated.

    Yes
    No

Answer: Yes.

You can process stream data at the moment it is generated. Stream data should be processed continuously as quickly as it is generated, requiring a short latency measured in milliseconds.


# Question 57
You work for a company that is developing a new massively multiplayer online (MMO) game, which will be launched in 20 countries next year. The data architects have opted to use Azure Cosmos DB as the games database tier. What are two characteristics of using Azure Cosmos DB? Each correct answer presents a complete solution.
Select all answers that apply:

    It requires no administration
    It supports multiple geographic regions
    It supports relational data only
    It has very low latency for data reads and writes
    It supports a single application programming interface (API)

Azure Cosmos DB has very low latency for data reads and writes, and it is very fast and elastically scalable. It will support the very fast data reads and writes required for an online game. Halo 5: Guardians uses Azure Cosmos DB as its database tier.

Azure Cosmos DB supports multiple geographic regions. You can enable multi-region writes, adding the Azure regions of your choice to your Cosmos DB account so that globally distributed users can each work with data in their local replica.

Azure Cosmos DB is platform as a service (PaaS) application, and so the Database Administrators do need to perform some administration with this model.

Azure Cosmos DB is a NoSQL database, meaning that it is designed to support semi-structured data, such as that used by an online game.

Azure Cosmos DB supports multiple APIs such as Cassandra, Gremin, and Table.





# Question 58
You are building a report using Power BI Desktop. Which function should you use to cleanse and transform data, in order to get it ready for modeling?

    Publish to Power BI Service
    Connect to data
    Report view
    Power Query Editor

You should use the Power Query Editor. This is a tool within Power BI Desktop that allows you to interact with data by applying a series of transformations that are recorded for you as steps, which can be undone if necessary.

You should not use Report view. This is the canvas where you can drag your visuals to create your report using data you have already imported, transformed, and modeled.

You should not use Publish to Power BI Service. This button takes the Power BI report you have built using Power BI Desktop and send it to the Power BI Service to allow you to share it with colleagues.

You should not use Connect to data. This function allows you to connect to raw data sources, for instance, and Azure SQL database. This is the step before transforming and shaping your data before the model is created.


# Question 59
You need to describe the characteristics of data used in stream processing. For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You can stream a large set of data at once in stream processing.

    Yes
    No

Answer: No.

You cannot stream a large set of data at once in stream processing. Stream processing should be used to process individual or a few records of data continuously. You should use batch processing to process large datasets at once.


# Question 60
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You should use batch processing to build a monthly payroll for your company.

    Yes
    No

Answer: Yes.

You should use batch processing to build a monthly payroll for your company. Batch processing workloads are best suited to collecting a group of data within a scheduled time interval or when a certain amount of data has arrived.


# Question 61
Which two of the following Azure Cosmos DB APIs are used to query data using the SQL syntax? Each correct answer presents a complete solution.
Select all answers that apply:

    MongoDB
    Core
    Cassandra
    Table
    Gremlin

The Core (SQL) API allows developers to work with Cosmos DB data using SQL syntax.

The Cassandra API is compatible with Apache Cassandra, a column-family structured database. It supports SQL syntax to allow developers to manipulate and retrieve data.

The Gremlin API allows developers to work with graph data. It supports graph syntax.

The Table API allows developers to work with key-value data in Cosmos DB. It supports requests based on a namespace, much like retrieving data from Azure Blob Storage.

The MongoDB API supports MongoDB Query Language (MQL), which is object-oriented.




# Question 62
Your company uses Apache Spark for data processing tasks. You need to provision Azure services that are compatible with Apache Spark. Which two services should you use? Each correct answer presents part of the solution.
Select all answers that apply:

    Azure HDInsight
    Azure Data Lake Storage
    Azure Data Factory
    Azure Databricks

You should use Azure HDInsight. Azure HDInsight is a big data processing service that is used to provision and manage a cluster of open-source analytics solutions, such as Apache Spark, Hadoop, and Kafka.

You should also use Azure Databricks. Azure Databricks is a complete platform for big data processing, streaming, and machine learning that is optimized for the Microsoft Azure cloud services platform and is built on top of Apache Spark.

You should not use Azure Data Factory. Azure Data Factory is a service that is used to ingest both relational and non-structured data from multiple sources

You should not use Azure Data Lake Storage. Azure Data Lake Storage is a storage service that is built on top of Azure Blob Storage, which is capable of storing large amounts of data in a cost-effective way, and which also provides a compatible Hadoop Distributed File System (HDFS) layer for analytics solutions.


# Question 63
For each of the following statements about Azure Cosmos DB, select Yes if the statement is true. Otherwise, select No. Statement: It allows simpler queries to retrieve data than a relational database.

    Yes
    No

Answer: Yes.

Azure Cosmos DB allows simpler queries to retrieve data than a relational database. Azure Cosmos DB is a NoSQL database that supports storing data in a denormalized way. Denormalization reduces the number of tables within a data model because all attributes from an entity are stored together rather than in different tables. With fewer tables, data read (or retrieval) queries become less complex due to the reduced table joins needed.


# Question 64
You need to determine the most appropriate database tier for each of the use cases below. Use case: A human resources system storing employee data on a fixed schema.

    Azure Cosmos DB
    Azure SQL Database

Answer: Azure SQL Database.

Azure SQL database is appropriate for the human resources system. As Azure SQL database uses a fixed schema, meaning the data will not change over time, a relational database like Azure SQL is a good choice.



# Question 65
For the following statements regarding Power BI Service, select Yes if the statement is true. Otherwise, select No. Statement: You can apply role-based security to data.

    Yes
    No

Answer: Yes.

You can apply role-based security to data. Power BI service is a software as a Service (SaaS) application that allows users to share and collaborate on Power BI reports and dashboards, and also lets administrators assign users to roles for a specific report. These roles are created by the report's author on the Power BI desktop during the data modeling, allowing you to filter data in the visuals that specific users can access and interact with.


# Question 66
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You can perform complex analytics using batch processing.

    Yes
    No

Answer: Yes.

You can perform complex analytics using batch processing, such as aggregates, calculations, or checking data integrity.


# Question 67
You need to determine the most appropriate database tier for each of the use cases below. Use case: A social network storing interaction data in a complex structure that changes frequently.

    Azure Cosmos DB
    Azure SQL Database

Answer: Azure Cosmos DB.

Azure Cosmos DB is appropriate for the social network. Representing complex relation structures between the entities is best stored in a NoSQL database, specifically in a graph database.



# Question 68
For each of the following statements about Azure Cosmos DB, select Yes if the statement is true. Otherwise, select No. Statement: It reduces data duplication through normalization.

    Yes
    No

Answer: No.

Azure Cosmos DB does not reduce data duplication through normalization. As a NoSQL database, Azure Cosmos DB supports the denormalization of data, which increases the need for data duplication but also reduces the complexity of the schema, and, therefore, the queries needed to manipulate it. Normalization is the process of reducing data duplication by creating additional reference tables, which are supported by relational databases.





# Question 69
You need to describe the characteristics of data used in stream processing. For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: You can use stream data to perform complex analytics.

    Yes
    No

Answer: No.

You cannot use stream data to perform complex analytics. You can use stream processing for simple functions, aggregates, or calculations with individual sets of data. You should use batch processing to perform complex analytics.


# Question 70
For the following statements regarding Power BI Service, select Yes if the statement is true. Otherwise, select No. Statement: You can share dashboards you create with colleagues.

    Yes
    No

Answer: Yes.

You can share dashboards you create with colleagues. Power BI Service allows you to share the dashboards that you create with your colleagues. Dashboards are one-page visual data displays that allow users to interact with and collaborate on data.


# Question 71
You need to determine the most appropriate database tier for each of the use cases below. Use case: A chemical plant storing vast amounts of data from various sensor arrays.

    Azure Cosmos DB
    Azure SQL Database

Answer: Azure Cosmos DB.

Azure Cosmos DB is appropriate for the chemical plant. Azure Cosmos DB is very low-latency and highly scalable, allowing it to ingest and process huge amounts of data. This makes it perfect for IoT (internet of things) scenarios like sensor data. 


# Question 72
For each of the following statements about Azure Cosmos DB, select Yes if the statement is true. Otherwise, select No. Statement: It supports applications with a global user base.

    Yes
    No

Answer: Yes.

Azure Cosmos DB supports applications with a global user base. Azure Cosmos DB supports multi-region writes, allowing users to work with a replicated set of data in their own region.



# Question 73
For each of the following statements, select Yes if the statement is true. Otherwise, select No. Statement: Batch processing requires near real-time data latency.

    Yes
    No

Answer: No.

Batch processing does not require near real-time data latency. In batch processing, data is collected over time for periodic processing, based on a schedule or the number of records collected. A long latency is acceptable in batch processing because data is collected over time.


# Question 74
A database administrator writes the following query for an Azure Cosmos DB environment. :> g.V().hasLabel('person').order().by('firstName', decr) Which Azure Cosmos DB API does the query refer to?

    Cassandra API
    MongoDB API
    Core API
    Table API
    Gremlin API

The query refers to the Gremlin API. Gremlin syntax includes functions to operate on nodes (instances of data entities) and edges (relationships between nodes), enabling users to navigate around the complex graph structure. The g. in the example query stands for graph. The example statement will retrieve person vertices in descending order of their first names.

The query does not refer to the Core API, also called SQL API. SQL syntax uses keywords in capital letters, spaces, and quotes for string values. An example would be as follows:

SELECT FirstName, LastName
FROM PERSON
WHERE IsChild = true

The above query would return the first and last name columns of all rows on the person table marked as children.

The query does not refer to the Table API. This API allows the manipulation of key/value pair data. An example query would be:

https:///People(PartitionKey='Harp',RowKey='Walter')

The above query would retrieve an entity from the People table, by filtering on the PartitionKey Harp and the RowKey Walter.

The query does not refer to the Cassandra API. Query syntax for this API looks similar to that used for the Core API.

The query does not refer to the MongoDB API. This API uses an object-oriented syntax for queries. An example would be:

db.people.find( { "isChild" : true })

The above query would retrieve people that are children.


# Question 75
For each of the following statements about Azure Database for MySQL, select Yes if the statement is true. Otherwise, select No. Statement: Azure Database for MySQL is a relational database management system.

    Yes
    No

Answer: Yes.

Azure Database for MySQL is a relational database management system. MySQL is an open-source relational database management system. The Azure Database for MySQL service is a PaaS implementation of MySQL on the Azure cloud.
