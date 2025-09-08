# AZ-104 Quiz Questions

### Question 1

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

Name
RG1
Action1

Description
Resource group
Action group that sends an email message to adminl@contoso.com

Sub1 contains the following alert rule:  
- Name: Alert1  
- Scope: All resource groups in Sub1  
o Include all future resources  
- Condition: All administrative operations  
- Actions: Action1  
Sub1 contains the following alert processing rule:  
- Name: Rule1  
- Scope: Sub1  
- Rule type: Suppress notifications  
- Apply the rule: On a specific time  
o Start: August 10, 2022  
o End: August 13, 2022  

For the following statement, select Yes if the statement is true. Otherwise, select No.  

If you create a resource group in Sub1 on August 11 2022 Alert1 is listed in the Azure
portal.

Answer: yes

### Question 2

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

Name
RG1
Action1

Description
Resource group
Action group that sends an email message to adminl@contoso.com

Sub1 contains the following alert rule:  
- Name: Alert1  
- Scope: All resource groups in Sub1  
o Include all future resources  
- Condition: All administrative operations  
- Actions: Action1  
Sub1 contains the following alert processing rule:  
- Name: Rule1  
- Scope: Sub1  
- Rule type: Suppress notifications  
- Apply the rule: On a specific time  
o Start: August 10, 2022  
o End: August 13, 2022  

For the following statement, select Yes if the statement is true. Otherwise, select No.  

If you create a resource group in Sub1 on August 12, 2022, an email message is sent to
adminl@contoso.com.

Answer: no

### Question 3

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

Name
RG1
Action1

Description
Resource group
Action group that sends an email message to adminl@contoso.com

Sub1 contains the following alert rule:  
- Name: Alert1  
- Scope: All resource groups in Sub1  
o Include all future resources  
- Condition: All administrative operations  
- Actions: Action1  
Sub1 contains the following alert processing rule:  
- Name: Rule1  
- Scope: Sub1  
- Rule type: Suppress notifications  
- Apply the rule: On a specific time  
o Start: August 10, 2022  
o End: August 13, 2022  

For the following statement, select Yes if the statement is true. Otherwise, select No.  

If you add a tag to RGI on August 15, 2022. an email message is sent to
adminl@contoso.com.

Answer: yes

### Question 4

Your on-premises network contains an Active Directory domain named adatum.com that is synced to Azure Active Directory (Azure AD). Password writeback is disabled.  
In adatum.com, you create the users shown in the following table.

Name
User1
User2
User3

Account option
User must change password at next logon.
Store password by using reversible encrypti on.
A smart card is required for interactive logon.

Which users must sign in from a computer joined to adatum.com?

**A.** User1, User2, and User3

**B.** User2 only

**C.** User1 only

**D.** User2 and User3 only

**E.** User1 and User3 only

Answer: C

### Question 5

You have an Azure web app named webapp1.  
Users report that they often experience HTTP 500 errors when they connect to webapp1.  
You need to provide the developers of webapp1 with real-time access to the connection errors.  
The solution must provide all the connection error details.  
What should you do first?

**A.** From webapp1, turn on Application Logging

**B.** From Azure Monitor, create a Service Health alert

**C.** From webapp1, enable Web server logging

**D.** From Azure Monitor, create a workbook

Answer: C

### Question 6

You have an Azure subscription that contains a web app named webapp1.  
You need to add a custom domain named www.contoso.com to webapp1.  
What should you do first?

**A.** Stop webapp1.

**B.** Upload a certificate.

**C.** Add a connection string.

**D.** Create a DNS record.

Answer: D

### Question 7

You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the following table:

Name
VMI
VM2
VM3
VM4

Operating system
Windows Server 2012 R2
Windows Server 2016
Ubuntu Setver 18.04 LTS
Windows 10

Auto-shutdown
Off
19:00
Off
19:00

You plan to schedule backups to occur every night at 23:00.  
Which virtual machines can you back up by using Azure Backup?

**A.** VM1 only

**B.** VM1 and VM2 only

**C.** VM1, VM2, VM3 and VM4

**D.** VM1 and VM3 only

Answer: C

### Question 8

You have an Azure subscription that contains a storage account named storage1.  
You need to configure a shared access signature (SAS) to ensure that users can only download blobs securely by name.  
Which setting should you configure?

Allowed resource types:
- Service
- Container
- Object

Answer: object

### Question 9

You have an Azure subscription that contains a storage account named storage1.  
You need to configure a shared access signature (SAS) to ensure that users can only download blobs securely by name.  
Which setting should you configure? 

Allowed permissions:
- Read
- Write
- Delete
- List
- Add
- Create
- Update
- Process
- Immutable storage
- Permanent delete

Answer: Read

### Question 10

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure web app named App1. App1 runs in an Azure App Service plan named Plan1. Plan1 is associated to the Free pricing tier.  
You discover that App1 stops each day after running continuously for 60 minutes.  
You need to ensure that App1 can run continuously for the entire day.  
Solution: You add a triggered WebJob to App1.  
Does this meet the goal?

**A.** Yes

**B.** No

Answer: no

### Question 11


You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network. Which tunneling protocol should you use?

**A.** IKEv2

**B.** IKEv1

**C.** L2TP

**D.** PPTP

Answer: A

### Question 12

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.  
You create a blob lifecycle rule named rule1.  
You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from contained to the Cool access tier.  

How should you complete the rule? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```json
{
  "rules": [
    {
      "enabled": true,
      "name": "rule1",
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": [ "__________" ],
          "prefixMatch": [ "container1/" ] 
        },
        "actions": {
          "baseBlob": {
            "tierToCool": { "__________": 45 }
          }
	    }
      }
    }
  ]
}
```

How should you complete "blobTypes"?

AppendBlob
Blockblob
Pageblob

Answer: Blockblob

### Question 13

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.  
You create a blob lifecycle rule named rule1.  
You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from contained to the Cool access tier.  

How should you complete the rule? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```json
{
  "rules": [
    {
      "enabled": true,
      "name": "rule1",
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": [ "__________" ],
          "prefixMatch": [ "container1/" ] 
        },
        "actions": {
          "baseBlob": {
            "tierToCool": { "__________": 45 }
          }
	    }
      }
    }
  ]
}
```

How should you complete "tierToCool"?

daysAfterCreationCreaterThan
daysAfterLastAccessTimeGreaterThan
daysAfterModificationGreaterThan

Answer: daysAfterModificationGreaterThan

### Question 14

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the subnets in the following table:

Name
Subnet0
Subnet 1
Subnet2
GatewaySubnet

IP address range
10.0.0.0/24
10.0.1.0/24
10.0.2.0/24
10.0.254.0/24

Subnet1 contains a virtual appliance named VM1 that operates as a router.  
You create a routing table named RT1.  
You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.  
How should you configure RT1? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

RT1 Address prefix:

10.0.0.0/16
10.0.1.0/24
10.0.254.0/24

Answer: 10.0.0.0/16

### Question 15

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the subnets in the following table:

Name
Subnet0
Subnet 1
Subnet2
GatewaySubnet

IP address range
10.0.0.0/24
10.0.1.0/24
10.0.2.0/24
10.0.254.0/24

Subnet1 contains a virtual appliance named VM1 that operates as a router.  
You create a routing table named RT1.  
You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.  
How should you configure RT1? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

RT1 Next hop type:

Virtual appliance
Virtual network
Virtual network gateway

Answer: Virtual appliance

### Question 16

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the subnets in the following table:

Name
Subnet0
Subnet 1
Subnet2
GatewaySubnet

IP address range
10.0.0.0/24
10.0.1.0/24
10.0.2.0/24
10.0.254.0/24

Subnet1 contains a virtual appliance named VM1 that operates as a router.  
You create a routing table named RT1.  
You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.  
How should you configure RT1? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

RT1 Assigned to:

GatewaySubnet
Subnet0
Subnet1 and Subnet2

Answer: GatewaySubnet

### Question 17

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.  
You receive a notification that VM1 will be affected by maintenance.  
You need to move VM1 to a different host immediately.  
Solution: From the resource group blade, move VM1 to another subscription.  
Does this meet the goal?

**A.** Yes

**B.** No

Answer: no

### Question 18


Hotspot Question  
You have an Azure Storage account named storage1 that stores images.  
You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.  
How should you configure the new account? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Account type:

StorageV2 only
StorageV2 or FileStorage only
StorageV2 or BlobStorage only
StorageV2, BlobStorage, or FileStorage

Answer: StorageV2 or BlobStorage only


### Question 19


Hotspot Question  
You have an Azure Storage account named storage1 that stores images.  
You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.  
How should you configure the new account? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Object type to create in the new account:

Container
File share
Table
Queue

Answer: Container

### Question 20

Note: The question is included in a number of questions that depicts the identical set-up.  
However, every question has a distinctive result. Establish if the solution satisfies the requirements.  
Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.  
After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi- Factor Authentication.  
To achieve this, the Per Enabled User setting must be set for the usage model.  
Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.  
Does the solution meet the goal?

**A.** Yes

**B.** No

Answer: B

### Question 21

Hotspot Question  
Your company purchases a new Azure subscription.  
You create a file named Deploy.json as shown in the following exhibit.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {},
  "variables": {},
  "resources": [
    {
      "type": "Microsoft.Resources/resourceGroups",
      "apiVersion": "2018-05-01",
      "location": "eastus",
      "name": "[concat('RG', copyIndex())]",
      "copy": {
        "name": "copy",
        "count": 3
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG1",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG1')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "CanNotDelete"
              }
            }
          ]
        }
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG2",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG2')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "ReadOnly"
              }
            }
          ]
        }
      }
    }
  ],
  "outputs": {}
}
```

You connect to the subscription and run the following cmdlet.  
New-AzDeployment -Location westus -TemplateFile "deploy.json"  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

You can deploy a virtual machine to RGI.

Answer: yes

### Question 22

Hotspot Question  
Your company purchases a new Azure subscription.  
You create a file named Deploy.json as shown in the following exhibit.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {},
  "variables": {},
  "resources": [
    {
      "type": "Microsoft.Resources/resourceGroups",
      "apiVersion": "2018-05-01",
      "location": "eastus",
      "name": "[concat('RG', copyIndex())]",
      "copy": {
        "name": "copy",
        "count": 3
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG1",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG1')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "CanNotDelete"
              }
            }
          ]
        }
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG2",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG2')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "ReadOnly"
              }
            }
          ]
        }
      }
    }
  ],
  "outputs": {}
}
```

You connect to the subscription and run the following cmdlet.  
New-AzDeployment -Location westus -TemplateFile "deploy.json"  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

You can deploy a virtual machine to RG2.

Answer: no


### Question 23

Hotspot Question  
Your company purchases a new Azure subscription.  
You create a file named Deploy.json as shown in the following exhibit.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {},
  "variables": {},
  "resources": [
    {
      "type": "Microsoft.Resources/resourceGroups",
      "apiVersion": "2018-05-01",
      "location": "eastus",
      "name": "[concat('RG', copyIndex())]",
      "copy": {
        "name": "copy",
        "count": 3
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG1",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG1')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "CanNotDelete"
              }
            }
          ]
        }
      }
    },
    {
      "type": "Microsoft.Resources/deployments",
      "apiVersion": "2021-04-01",
      "name": "lockDeployment",
      "resourceGroup": "RG2",
      "dependsOn": ["[resourceId('Microsoft.Resources/resourceGroups/', 'RG2')]"],
      "properties": {
        "mode": "Incremental",
        "template": {
          "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
          "contentVersion": "1.0.0.0",
          "parameters": {},
          "variables": {},
          "resources": [
            {
              "type": "Microsoft.Authorization/locks",
              "apiVersion": "2016-09-01",
              "name": "rgLock",
              "properties": {
                "level": "ReadOnly"
              }
            }
          ]
        }
      }
    }
  ],
  "outputs": {}
}
```

You connect to the subscription and run the following cmdlet.  
New-AzDeployment -Location westus -TemplateFile "deploy.json"  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

You can manually create a resource group named RG3.

Answer: yes

### Question 24

You have an Azure subscription named AZPT1 that contains the resources shown in the following table:

Name
storage1
VNET1
vM1
VM1Managed
RVAULT1

Type
Azure Storage account
Virtual network
Azure virtual machine
Managed disk for VMI
Recovery Services vault for the site recovery of VM1

You create a new Azure subscription named AZPT2.  
You need to identify which resources can be moved to AZPT2.  
Which resources should you identify?

**A.** VM1, storage1, VNET1, and VM1Managed only

**B.** VM1 and VM1Managed only

**C.** VM1, storage1, VNET1, VM1Managed, and RVAULT1

**D.** RVAULT1 only

Answer: C

### Question 25

You have an Azure subscription.  
You need to create an Azure container instance named cont1. The solution must meet the following requirements:  
- Ensure that specific configuration parameters are applied to cont1  
during the container startup.  
- Provide secure values to cont1 during the container startup.  
What should you configure for cont1?

**A.** environment variables

**B.** a command override

**C.** tags

**D.** customer-managed keys

Answer: A

### Question 26

Drag and Drop Question  
You have an Azure subscription that is used by four departments in your company.  
The subscription contains 10 resource groups. Each department uses resources in several resource groups.  
You need to send a report to the finance department.  
The report must detail the costs for each department.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

Actions
Assign a tag to each resource group-
Assign a tag to each resource.
Download the usage report-
From the Cost analysis blade, filter
the view by tag.
Open the Resource costs blade of each
resource group

Answer:
Assign a tag to each resource.
From the Cost analysis blade, filter
the view by tag-
Download the usage report.

### Question 27

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.  
You need to deploy a YAML file to AKS1.  
Solution: From Azure CLI, you run the kubectl client.  
Does this meet the goal?

**A.** Yes

**B.** No

Answer: yes

### Question 28

You have Azure subscription that includes data in following locations:

Name
container1
share1
DB1
Table1

Type
Blob container
Azure files share
SQL database
Azure Table

You plan to export data by using Azure import/export job named Export1.  
You need to identify the data that can be exported by using Export1.  
Which data should you identify?

**A.** DB1

**B.** container1

**C.** Share1

**D.** Table1

Answer: B

### Question 29

You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.  
You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.  
You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.  
Which two groups should you create? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** an Office 365 group that uses the Assigned membership type

**B.** a Security group that uses the Assigned membership type

**C.** an Office 365 group that uses the Dynamic User membership type

**D.** a Security group that uses the Dynamic User membership type

**E.** a Security group that uses the Dynamic Device membership type

Answer: A, C

### Question 30

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blob data.  
You need to assign a role to a user named User1 to ensure that the user can access the blob data in storage1. The role assignment must support conditions.  
Which two roles can you assign to User1? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.

**A.** Owner

**B.** Storage Account Contributor

**C.** Storage Account Backup Contributor

**D.** Storage Blob Data Contributor

**E.** Storage Blob Data Owner

**F.** Storage Blob Delegator

Answer: D, E

### Question 31

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.  
You need to ensure that NGINX is available on all the virtual machines after they are deployed.  
What should you use?

**A.** the Publish-AzVMDscConfiguration cmdlet

**B.** Azure Application Insights

**C.** Azure Custom Script Extension

**D.** the New-AzConfigurationAssignement cmdlet

Answer: C

### Question 32

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure subscription that contains the resources shown in the following table.

Name
RG1
RG2
storage1
storage2
VM1
VNET1
VNET2

Type
Resource group
Resource group
Storage account
Storage account
Virtual machine
Virtual network
Virtual network

Region
West US
East Asia
West US
East Asia
West US
West US
East Asia

VM1 connects to VNET1.  
You need to connect VM1 to VNET2.  
Solution: You move VM1 to RG2, and then you add a new network interface to VM1.  
Does this meet the goal?

**A.** Yes

**B.** No

Answer: B

### Question 33

You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1.  
You need to ensure that ContReg1 supports geo-replication.  
What should you do first for ContReg1?

**A.** Enable Admin user.

**B.** Add a scope map.

**C.** Add an automation task.

**D.** Create a cache rule.

**E.** Upgrade the SKU.

Answer: E

### Question 34

Hotspot Question  
You have an Azure subscription that contains the storage accounts shown in the following table.

Namc
storage1
storage2
storage3

Kind
StorageV2
BlobStorage
BlockBlobStorage

Redundancy
Geo-zone-redundant storage (GZRS)
Read-access geo-redundant storage (RA-GRS)
BlockBlobStotdge Zone-redundant storage (ZRS)

You need to identify which storage accounts support lifecycle management, and which storage accounts support moving data to the Archive access tier.  
Which storage accounts should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

Lifecycle management:
storage1 only
storage2 only
storage1 and storage3 only
storage2 and storage3 only
storage1, storage2 and storage3

Answer: storage1, storage2 and storage3

### Question 35

Hotspot Question  
You have an Azure subscription that contains the storage accounts shown in the following table.

Namc
storage1
storage2
storage3

Kind
StorageV2
BlobStorage
BlockBlobStorage

Redundancy
Geo-zone-redundant storage (GZRS)
Read-access geo-redundant storage (RA-GRS)
BlockBlobStotdge Zone-redundant storage (ZRS)

You need to identify which storage accounts support lifecycle management, and which storage accounts support moving data to the Archive access tier.  
Which storage accounts should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

The archive access tier:
storage1 only
storage2 only
storage1 and storage3 only
storage2 and storage3 only
storage1, storage2t and storage3

Answer: storage2 only

### Question 36

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:

Name
User1
User2
User3
User4

Role
Global administrator
Global administrator
User administrator
Owner

Scope
Azure Active Directory
Azure Active Directory
Azure Active Directory
Azure Subscription

User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.  
You need to create new user accounts in external.contoso.onmicrosoft.com.  
Solution: You instruct User4 to create the user accounts.  
Does that meet the goal?

**A.** Yes

**B.** No

Answer: B

### Question 37

You have an Azure subscription.  
You need to implement a custom policy that meet the following requirements:  
- Ensures that each new resource group in the subscription has a tag  
named organization set to a value of whizlabs  
- Ensures that resource group can be created from the Azure portal.  
- Ensures that compliance reports in the Azure portal are accurate.  
You need to complete the below policy to match this requirement

```json
{
  "mode": "all",
  "policyRule": {
    "if": {
      "allOf": [
        {
          "field": "tags['organization']",
          "notEquals": "whizlabs"
        },
        {
          "field": "type",
          "equals": "__________"
        }
      ]
    },
    "then": {
      "effect": "__________"
    }
  }
}
```

Which of the following would be the value for the "effect" field?

**A.** "Append"

**B.** "Deny"

**C.** "Modify"

**D.** Audit

Answer: D

### Question 38

You have an Azure subscription.  
You need to implement a custom policy that meet the following requirements:  
- Ensures that each new resource group in the subscription has a tag  
named organization set to a value of whizlabs  
- Ensures that resource group can be created from the Azure portal.  
- Ensures that compliance reports in the Azure portal are accurate.  
You need to complete the below policy to match this requirement

```json
{
  "mode": "all",
  "policyRule": {
    "if": {
      "allOf": [
        {
          "field": "tags['organization']",
          "notEquals": "whizlabs"
        },
        {
          "field": "type",
          "equals": "__________"
        }
      ]
    },
    "then": {
      "effect": "__________"
    }
  }
}
```

Which of the following would be the value for the "equals" field?

**A.** "Microsoft.Resources/subscriptions/resourceGroups"

**B.** "Microsoft.Resources/resourceGroups"

**C.** "resourceGroups"

**D.** "Microsoft.Compute/virtualMachines"

Answer: A

### Question 39


You have an Azure Active Directory (Azure AD) tenant that has Azure AD Privileged Identity Management configured.  
You have 10 users who are assigned the Security Administrator role for the tenant.  
You need the users to verify whether they still require the Security Administrator role.  
What should you do?

**A.** From Azure AD Identity Protection, configure a user risk policy.

**B.** From Azure AD Privileged Identity Management, create an access review.

**C.** From Azure AD Identity Protection, configure the Weekly Digest.

**D.** From Azure AD Privileged Identity Management, create a conditional access policy.

Answer: B

### Question 40

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

Name
RG1
RG2
RG3
VNET1
VM1

Type
Resource group
Resource group
Resource group
Virtual network
Virtual machine

Location
East US
West Europe
North Europe
Central US
West US

Resource group
Not applicable
Not applicable
Not applicable
RG1
RG2

VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.  
You need to create a new network interface named NIC2 for VM1.  
Solution: You create NIC2 in RG1 and West US.  
Does this meet the goal?

**A.** Yes

**B.** No

Answer: A

### Question 41

You have an Azure subscription named Subscription1. Subscription1 contains a resource
group named RG1. RG1 contains resources that were deployed by using templates.
You need to view the date and time when the resources were created in RG1.
Solution: From the Subscriptions blade, you select the subscription, and then click
Resource providers. Does this meet the goal?
a) Yes
b) No

Answer: B

### Question 42

You have an Azure subscription named Subscription1. Subscription1 contains the resource
groups in the following table:

Name
RG1
RG2
RG3

Azure region
West Europe
North Europe
France Central

Policy
Policy 1
Policy2
Policy3

RG1 has a web app named WebApp1. WebApp1 is located in West Europe.
You move WebApp1 to RG2. What is the effect of the move?

a) The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.
b) The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1.
c) The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.
d) The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1

Answer: B

### Question 43

You have an Azure subscription that contains a resource group named RG1. RG1 contains
100 virtual machines.
Your company has three cost centers named Manufacturing, Sales, and Finance.
You need to associate each virtual machine to a specific cost center.
What should you do?
a) Configure locks for the virtual machine.
b) Add an extension to the virtual machines
c) Assign tags to the virtual machines
d) Modify the inventory settings of the virtual machine

Answer: C

### Question 44

You have an Azure policy as shown in the following exhibit.

Scope: Subscription1
Exclusions: Subscription1/ContosoRG1
Policy definition: Not allowed resource types
Assignment name: Not allowed resource types
Assignment ID: .....
Assigned by: admin1@contoso.com
Parameters:
	Not allowed resource types: Microsoft SQL/servers

What is the effect of the policy?

a) You are prevented from creating Azure SQL Servers in ContosoRG1 only.
b) You can create Azure SQL servers in ContosoRG1 only
c) You can create Azure SQL servers in any resource group within Subscription1
d) You are prevented from creating Azure SQL servers anywhere in Subscription1

Answer: b

### Question 45

You have the Azure virtual machines shown in the following table

Name
VMI
VM2
VM3
VM4

IP Address
10.1.0.4
10.1.10.4
172.16.0.4
10.2.0.8

Connected to
VNET1/Subnet1
VNET1/Subnet2
VNET2/SubnetA
VNET3/SubnetB

A DNS service is installed on VM1.You configure the DNS servers’ settings for each virtual
network as shown in the exhibit.
You need to ensure that all the virtual machines
can resolve DNS names by using the DNS service on VM1.
What should you do?

a) Add service endpoints on VNET2 and VNET3
b) Add service endpoints on VNET1
c) Configure a conditional forwarder on VM1
d) Configure peering between VNET1,VNET2, and VNET3

Answer: d

### Question 46

Vraag 7:
You have an Azure Active Directory (Azure AD) tenant named Adatum and an Azure
Subscription named Subscription1. Adatum contains a group named Developers.
Subscription1 contains a resource group named Dev.
You need to provide the Developers group with the ability to create Azure logic apps in
the Dev resource group.
Solution: On Subscription1, you assign the DevTest Labs User role to the Developers
group.
Does this meet the goal?
a) Yes
b) No

Answer: b

### Question 47

Vraag 8:
You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.
You create a new user account named AdminUser1.You need to assign the User
Administrator administrative role to AdminUser1.
What should you do from the user account properties?
a) From the Directory role blade, modify the directory role.
b) From the Licenses blade, assign a new license.
c) From the Groups blade, invite the user account to a new group

Answer: a

### Question 48

Vraag 9:
Your company has an Azure subscription named Subscription1. The company also has two
on-premises servers named Server1 and Server2 that run Windows Server 2016.
Server1 is configured as a DNS server that has a primary DNS zone named adatum.com.
Adatum.com contains 1,000 DNS records.
You manage Server1 and Subscription1 from Server2.
Server2 has the following tools installed:
• The DNS Manager console
• Azure PowerShell
• Azure CLI 2.0
You need to move the adatum.com zone to Subscription1.
The solution must minimize administrative effort. What should you use?
a) The Azure Portal
b) The DNS Manager console
c) Azure PowerShell
d) Azure CLI

Answer: d

### Question 49

Vraag 10:
You have a resource group named RG1. RG1 contains an Azure Storage account named
storageaccount1 and a virtual machine named VM1 that runs Windows Server 2016.
Storageaccount1 contains the disk files for VM1.
You apply a ReadOnly lock to RG1.
What can you do from the Azure portal?
a) Generate an automation script for RG1.
b) View the keys of storageaccount1.
c) Start VM1.
d) Upload a blob to storageaccount1

Answer: b

### Question 50

You purchase a new Azure subscription named Subscription1.You create a virtual machine
named VM1 in Subscription1.VM1 is not protected by Azure Backup.
You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and
stored for 30 days.
What should you do?
a) Store the backups in an Azure File Share and configure the protection of the VM with a batch job
b) Store the backups in a Storage Account and configure the protection of the VM with a recovery plan
c) Store the backups in a batch job and configure the protection of the VM with a Recovery Services Vault
d) Store the backups in a blob container and configure the protection of the VM with a backup policy
e) Store the backups in a Recovery Services Vault and configure the protection with a backup policy

Answer: e

### Question 51

You have an Azure virtual machine named VM1.VM1 was deployed by using a custom Azure
Resource Manager template named ARM1.json.
You receive a notification that VM1 will be affected by maintenance.You need to move VM1
to a different host immediately.
Solution: From the Redeploy blade, you click Redeploy.
Does this meet the goal?
a) Yes
b) No

Answer: a

### Question 52

You sign up for Azure Active Directory (Azure AD) Premium.You need to add a user
named admin1@contoso.com as an administrator on all the computers that will be joined
to the Azure AD domain.
What should you configure in Azure AD?
a) Device settings from the Devices blade.
b) General settings from the Groups blade.
c) User settings from the Users blade.
d) Providers from the MFA Server blade.

Answer: a

### Question 53

You have 5 TB of data that you need to transfer to Subscription.You plan to use an Azure
Import/Export job.
What can you use as the destination of the imported data?
a) Azure SQL Database
b) Azure Data Factory
c) A virtual machine
d) Azure Blob storage

Answer: d

### Question 54

You have two Azure virtual machines named VM1 and VM2.You have two Recovery
Services vaults named RSV1 and RSV2.VM2 is protected by RSV1.
You need to use RSV2 to protect VM2.
What should you do first?
a) From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery
Services vault.
b) From the RSV1 blade, click Backup items and stop the VM2 backup.
c) From the RSV1 blade, click Backup Jobs and export the VM2 backup.
d) From the RSV1 blade, click Backup
e) From the Backup blade, select the backup for the virtual machine, and then click Backup.

Answer: a

### Question 55

You create a virtual machine scale
set named Scale1.
Scale1 is configured as shown
in the following exhibit.

Instances:
	Instance count: 4
	Instance size: DS1_v2
	Deploy as low priority: No
	Use managed disks: Yes
Autoscale:
	Autoscale: Enabled
	Minimum number of VMs: 2
	Maximum number of VM2: 20
Scale out:
	CPU threshold: 80
	Number of VMs to increase by: 2
Scale in:
	CPU threshold: 30
	Number of VMs to decrease by: 4
	
If Scale1 is utilized at 85% for
six minutes, Scale1 will be running ...

a) 2 virtual machines
b) 4 virtual machines
c) 6 virtual machines
d) 10 virtual machines
e) 20 virtual machines

Answer: c

### Question 56

You create a virtual machine scale
set named Scale1.
Scale1 is configured as shown
in the following exhibit.

Instances:
	Instance count: 4
	Instance size: DS1_v2
	Deploy as low priority: No
	Use managed disks: Yes
Autoscale:
	Autoscale: Enabled
	Minimum number of VMs: 2
	Maximum number of VM2: 20
Scale out:
	CPU threshold: 80
	Number of VMs to increase by: 2
Scale in:
	CPU threshold: 30
	Number of VMs to decrease by: 4
	
If Scale1 is utilized at 25% for
six minutes and then utilized at 50%
For six minutes, Scale1 will be running ...

a) 2 virtual machines
b) 4 virtual machines
c) 6 virtual machines
d) 10 virtual machines
e) 20 virtual machines

Answer: a

### Question 57

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.
You hire a temporary vendor. The vendor uses a Microsoft account that has a sign-in of
user1@outlook.com.
You need to ensure that the vendor can authenticate to the tenant by using
user1@outlook.com.
What should you do?

a) From Windows PowerShell, run the New-AzureADUser cmdlet and specify the –UserPrincipalName
user1@outlook.com parameter.
b) From the Azure portal, add a custom domain name, create a new Azure AD user, and then specify
user1@outlook.com as the username.
c) From Azure Cloud Shell, run the New-AzureADUser cmdlet and specify the –UserPrincipalName
user1@outlook.com parameter.
d) From the Azure portal, add a new guest user, and then specify user1@outlook.com as the email address.

answer: d

### Question 58
You have an Azure subscription that contains an Azure file share.
You have an on-premises server named Server1 that runs Windows Server 2016.You plan
to set up Azure File Sync between Server1 and the Azure file share.
You need to prepare the subscription for the planned Azure File Sync.
Which two actions should you perform in the Azure subscription and in what order?

a) Create a Storage Sync Service
b) Create a Sync Group
c) Install the Azure File Sync Agent
d) Run Server registration

answer: a, b

### Question 59

You need to create an Azure Storage account that meets the following requirements:
• Minimizes costs
• Supports hot, cool, and archive blob tiers
• Provides fault tolerance if a disaster affects the Azure region where the account resides

How should you complete the kind argument?

```bash
az storage account create –g RG1 –n stor1 --kind __________ --sku __________
```

a) BlobStorage
b) Storage
c) StorageV2

Answer: c

### Question 60

You need to create an Azure Storage account that meets the following requirements:
• Minimizes costs
• Supports hot, cool, and archive blob tiers
• Provides fault tolerance if a disaster affects the Azure region where the account resides

How should you complete the sku argument?

```bash
az storage account create –g RG1 –n stor1 --kind __________ --sku __________
```

d) Standard_GRS
e) Standard_LRS
f) Standard_RAGRS
g) Premium_LRS

Answer: d

### Question 61

You have an Azure subscription that contains the virtual networks shown in the following table.

Name
VNet1
VNet2
VNet3

Location
East US
West US 2
China East

Cloud type
Azure Government
Public
Azure China

Is a peering between VNET1 and VNET2 a possible configuration?

answer: no

### Question 62

You have an Azure subscription that contains the virtual networks shown in the following table.

Name
VNet1
VNet2
VNet3

Location
East US
West US 2
China East

Cloud type
Azure Government
Public
Azure China

Is a peering between VNET1 and VNET3 a possible configuration?

answer: yes

### Question 63

You have the Azure resources shown on the following exhibit.

Management group: MG1
Subscription: Sub1
Resource group: RG1
Virtual Machine: VM1

You plan to track resource usage and prevent the deletion of resources.  
To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area.

Locks:
RG1 and VM1 only
Sub1 and RG1 only
sub1, RG1, and VM1 only
MG1, sub1, RG1, and VM1 only
Tenant Root Group, MG1, sub1, RG1, and VM1

Answer: sub1, RG1, and VM1 only



### Question 64

You have the Azure resources shown on the following exhibit.

Management group: MG1
Subscription: Sub1
Resource group: RG1
Virtual Machine: VM1

You plan to track resource usage and prevent the deletion of resources.  
To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area.

Tags:
RG1 and VM1 only
Sub1 and RG1 only
sub1, RG1, and VM1 only
MG1, sub1, RG1, and VM1 only
Tenant Root Group, MG1, sub1, RG1, and VM1

Answer: sub1, RG1, and VM1 only

### Question 65

You have an Azure subscription that contains two virtual machines named VM1 and VM2.  
You create an Azure load balancer.  
You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2.  
Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

**A.** a frontend IP address

**B.** a backend pool

**C.** a health probe

**D.** an inbound NAT rule

**E.** a virtual network

answer: b, c

### Question 66

You have an Azure subscription that contains an Azure Storage account named storageaccount1.  
You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections.

```json
{
  "type": "Microsoft.Storage/storageAccounts",
  "apiVersion": "2019-06-01",
  "name": "storageaccount1",
  "location": "eastus",
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "kind": "StorageV2",
  "properties": {
    "networkAcls": {
      "bypass": "AzureServices",
      "virtualNetworkRules": [],
      "ipRules": [],
      "defaultAction": "Allow"
    },
    "supportsHttpsTrafficOnly": true,
    "encryption": {
      "services": {
        "file": {
          "keyType": "Account",
          "enabled": true
        },
        "blob": {
          "keyType": "Account",
          "enabled": true
        }
      },
      "keySource": "Microsoft.Storage"
    },
    "accessTier": "Hot"
  }
}
```


A server that has a public IP address of 131.107.103.10 can access storageaccount1

answer: yes

### Question 67

You have an Azure subscription that contains an Azure Storage account named storageaccount1.  
You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections.

```json
{
  "type": "Microsoft.Storage/storageAccounts",
  "apiVersion": "2019-06-01",
  "name": "storageaccount1",
  "location": "eastus",
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "kind": "StorageV2",
  "properties": {
    "networkAcls": {
      "bypass": "AzureServices",
      "virtualNetworkRules": [],
      "ipRules": [],
      "defaultAction": "Allow"
    },
    "supportsHttpsTrafficOnly": true,
    "encryption": {
      "services": {
        "file": {
          "keyType": "Account",
          "enabled": true
        },
        "blob": {
          "keyType": "Account",
          "enabled": true
        }
      },
      "keySource": "Microsoft.Storage"
    },
    "accessTier": "Hot"
  }
}
```


Individual blobs in storageaccount1 can be set to use the archive tier

answer: yes

### Question 68

You have an Azure subscription that contains an Azure Storage account named storageaccount1.  
You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections.

```json
{
  "type": "Microsoft.Storage/storageAccounts",
  "apiVersion": "2019-06-01",
  "name": "storageaccount1",
  "location": "eastus",
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "kind": "StorageV2",
  "properties": {
    "networkAcls": {
      "bypass": "AzureServices",
      "virtualNetworkRules": [],
      "ipRules": [],
      "defaultAction": "Allow"
    },
    "supportsHttpsTrafficOnly": true,
    "encryption": {
      "services": {
        "file": {
          "keyType": "Account",
          "enabled": true
        },
        "blob": {
          "keyType": "Account",
          "enabled": true
        }
      },
      "keySource": "Microsoft.Storage"
    },
    "accessTier": "Hot"
  }
}
```


Global administrations in Azure Active Directory (Azure AD) can access a file share
hosted in storageaccount1 by using their Azure AD credentials

answer: no

### Question 69

You have an Azure subscription that contains two virtual machines as shown in the following table.

Name
VM1
VM2

Operating system
Windows Server 2019
Windows Server 2019

Location
West Europe
West Europe

IP address
10.0.0.4
10.0.0.5

DNS server
Default (Azure-provided)
Default (Azure-provided)

You perform a reverse DNS lookup for 10.0.0.4 from VM2.  
Which FQDN will be returned?

**A.** vm1.core.windows.net

**B.** vm1.azure.com

**C.** vm1.westeurope.cloudapp.azure.com

**D.** vm1.internal.cloudapp.net

answer: d

### Question 70

You have an Azure subscription that contains the resources shown in the following table

Name
ManagementGroup1
RGI
9c8bc1cd-7655-4c66-b3ea-a8ee101d8f75
Tag1

Type
Management group
Resource group
Subscription ID
Tag

In Azure Cloud Shell, you need to create a virtual machine by using an Azure Resource Manager (ARM) template.  
How should you complete the command? To answer, select the appropriate options in the answer area, NOTE: Each correct selection is worth one point.

```powershell
$adminPassword
= Read-Host -Prompt "Enter the administrator password" -AsSecureString
New-__________
    -TemplateUri "https://mdftpro.com/templates/...."
    -adminUsername admin
    -adminPassword $adminPassword
    __________ 
    -dnsLabelPrefix ContosoVM1 
```

How should you complete the "New-" command?

New-AzVm
New-AzResource
New-AzTemplateSpec
New-AzResourceGroupDeployment

answer: New-AzResourceGroupDeployment

### Question 71

You have an Azure subscription that contains the resources shown in the following table

Name
ManagementGroup1
RGI
9c8bc1cd-7655-4c66-b3ea-a8ee101d8f75
Tag1

Type
Management group
Resource group
Subscription ID
Tag

In Azure Cloud Shell, you need to create a virtual machine by using an Azure Resource Manager (ARM) template.  
How should you complete the command? To answer, select the appropriate options in the answer area, NOTE: Each correct selection is worth one point.

```powershell
$adminPassword
= Read-Host -Prompt "Enter the administrator password" -AsSecureString
New-__________
    -TemplateUri "https://mdftpro.com/templates/...."
    -adminUsername admin
    -adminPassword $adminPassword
    __________ 
    -dnsLabelPrefix ContosoVM1 
```

How should you complete the command argument?

-Tag Tag1
-ResourceGroupName RGI
-GroupName ManagementGroup1
-Subscription 9c8bc1cd-76554c66-b3ea.a8ee101d8f75

answer: -ResourceGroupName RGI

### Question 72


You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.  
You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA).  
Which of the following should you use to create the virtual machine?

**A.** The New-AzureRmVm cmdlet.

**B.** The New-AzVM cmdlet.

**C.** The Create-AzVM cmdlet.

**D.** The az vm create command.

answer: d

### Question 73


Vraag 24:
You have an Azure web app named Appl. App1 runs in an Azure App Service plan named
Plan1. Plan1 is associated to the Free pricing tier.
You discover that App1 stops each day after running continuously for 60 minutes.
You need to ensure that App1 can run continuously for the entire day.
Solution:You change the pricing tier of Plan1 to Basic.
Does this meet the goal?

a) Yes
b) No

answer: a

### Question 74

You have an Azure Active Directory (Azure AD) tenant named Adatum and an Azure
Subscription which contains a resource group named RG-DEV.
Adatum contains a group named Developers. You need to provide the Developers group
with the ability to create Azure logic apps in the RG-DEV resource group.
Solution: On RG-Dev you assign the Logic App Contributor role to the Developers group.
Does this meet the goal?

a) Yes
b) No

answer: a

### Question 75

You are building a custom Azure function app to connect to Azure Event Grid.You need to
ensure that resources are allocated dynamically to the function app.
Billing must be based on the executions of the app.
What should you configure when you create the function app?

a) the Windows operating system and the Consumption plan hosting plan
b) the Windows operating system and the App Service plan hosting plan
c) the Docker container and an App Service plan that uses the B1 pricing tier
d) the Docker container and an App Service plan that uses the SI pricing

answer : a



