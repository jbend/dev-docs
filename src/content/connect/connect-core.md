---
title: "Introduction"
description: "Connect Core"
---

## Overview

Connect the right people to the right data at the right time with Trimble Connect, a cloud-based common data environment (CDE) and collaboration platform designed specifically for the construction industry. With Trimble Connect, everyone involved in a project can see the big picture, right down to the tiniest detail. Bring people, technology & information together to deliver what you need, when you need it.

Trimble Connect links data throughout each phase of the building life cycle to keep your project on schedule and on budget. You can upload and share documents from over 60 industry tools, or add your own source using the powerful API (Application Programming Interface).

Our open API enables data flow from a variety of Trimble products, as well as 3rd-party applications. This allows stakeholders across the project lifecycle to access the data and applications that they need to get the job done.

## Use Cases

The Connect Core APIs allow you to accomplish a variety of tasks:

- Common Data Environment - Utilize to store, organize, collaborate, and share all files related to construction
- Viewer - View 3D models
- Hardware Integration - Integrate with field hardware
- Field to Office - Integrate with a variety of in-the-field hardware and software in order to streamline the data synchronization with the back office workflows

## Concepts

When looking at the Connect APIs, it is good to have a basic understanding of some of the terminology:

![](https://coreconsole-assets.console.trimblecloud.com/api/61f71a0d-f8cd-4a84-a872-5c4428789bf4/image1.png)

### Regions

Trimble Connect offers regional API endpoints that you can use to make your requests. The resources in each region are independent of similar resources in other regions. Each Trimble Connect project is hosted in a specific region, therefore all data in the project must be accessed through that regional API endpoint (see the <a href="https://app.swaggerhub.com/apis/Trimble-Connect/tcps/2.0#/Regions/GetAvailableRegions" target="_blank">**regions API**</a>).

### Accounts

To Connect, an Account is an entity from either Trimble’s Entitlement Management System or Tekla licensing system (most commonly called a Company or Customer) that contains the product entitlements and users.

When a user creates a project in Trimble Connect, they are required to associate a license to that project which then associates the project under the account.

### Licenses

Licenses are used in a few different ways in Connect:

- To associate projects to accounts (for data ownership)
- Enable application-specific functionality for the user
- Enable application-specific functionality for the user under a project

The API response for a user’s license contains a set of features that dictate what functionality the user has access to inside a project or project-specific limitations.

**<a href="https://docs.browser.connect.trimble.com/what-is-trimble-connect/connect-licensing#h.kxf1dqxra9lh" target="_blank">Learn more about the license features for Connect</a>**

### Projects

Projects are containers/objects which are used for storing construction data. Each Trimble Connect project is hosted in a single region (North America, Europe, Asia) in which the project data will be stored. A project’s region is selected at its creation time.

Supported editable project attributes:

- Name
- Thumbnail
- Address
- Location (can only be specified during project creation - and cannot be changed after)
- Description
- Start date
- End date
- License

#### Project Types

Project type and Connect licenses go hand-in-hand. When you create a project, the license that is assigned to the user is also applied to the project. If the user has more than one license assigned to them, they can select which license to apply to the project. The account which the license comes from becomes the owner of the project data.

Some features may be restricted based on the license that is associated with the project. As a rule of thumb, the following is a breakdown of the type of project that is created based on the license that is used/assigned to the project:

- Personal License ➞ Personal Project
- Business License ➞ Business Project
- Business Premium License ➞ Business Project
- Enterprise License ➞ Enterprise Project
- Project License ➞ Enterprise Project

**<a href="https://docs.browser.connect.trimble.com/what-is-trimble-connect/connect-licensing#h.h0x8fvf7k3p6" target="_blank">Learn more about features by project type</a>**

#### Project Roles

Connect currently supports two user roles in a project - Project Administrators and Project Users. The user who created the project is the initial Project Administrator.

**General rules for project users:**

- Depending on project settings, users can invite others to collaborate in projects
- A user has access to all folders and files of the project unless the access is restricted by the administrator
- Users will be able to perform some management operations for the data that they create within the project, like deleting Views, ToDos, and revoking access to data they shared with a specific user — but they will not be able to restore deleted files or folder content (even if they were the one who performed the delete operation)
- Users will have limited access to data created by other users unless the data has been explicitly shared with or assigned to them

**General rules for project admins:**

- An administrator can invite anyone to the project and provide administrator access to the project to users
- Only administrators can create/edit/delete user groups and or add users to groups
- An administrator can set folder permissions for any user, however, folder permissions do not apply to administrators because they have full access
- An administrator can remove any user and edit user roles
- Project administrators can also perform other operations like setting up notifications, defining Property Set Libraries, including having full access to all the data created by project users

#### Users

User profile information is maintained outside the context of projects and the User API allows you to:

**GET**

- Language: user-specified language preference (which should be used for translation purposes)
- Timezone
- Licenses
- User details

**PATCH**

- User settings/details

#### User Groups

User Groups are always in relation to a project. User Groups are created by a Project Administrator and are for creating groupings of multiple project members. User groups can be used for:

- Sharing data with Groups
- Assign ToDos to Groups
- Assign folder permissions to Groups
- Assign Property Set Library permissions to Groups (see **Property Set API**)
- Assign Organizer group permissions Groups (see **Organizer API**)
- Filter Activity by Groups

#### Files

The BIM (Building Information Model) content or data is saved in a storage unit called a File. Files in the context of BIM, have data such as model element ID, dimensions (length, area, volume), location, and so forth that help identify a constructible physical object.

BIM Files can be rendered in the different viewers of Connect and other Trimble applications depending upon the context.

In Trimble Connect, there are 3 major categories of files:

1. 3D - Model files
2. 2D - Images, PDFs, Documents
3. Others - Files other than the 2 categories above

#### Folders

A Folder is the most common way of arranging and grouping related files in Connect. Users can independently arrange files in folder hierarchies depending on their workflows. For example, users can group files such as in folders based on datewise tasks, and floors of the building.

Project members with appropriate permissions can open, move, export details, and delete folders.

#### Shares

Sharing files is one of the most powerful means of collaboration in Connect. Sharing gives access to the exact file(s) that are relevant to the recipient(s). Sharing avoids the need for users to browse through deep folder hierarchies in Connect to find the needed file.

Once a 3D or 2D file is shared with a user, they can open the file directly in the relevant viewer.

Connect also allows sharing files directly with members outside the project - for ease of collaboration.

#### Releases

Releases are used to send versions of files privately to users who are part of a project. Using this API you can create and manage Releases in Trimble Connect.

Releases have two states, Draft and Sent. If a Release is in the Draft state, it can still be edited. After a Release has been sent, it will be locked and not editable.

#### Views 2D

2D views are snapshots of documents, images, drawings, PDFs, and sheets (<a href="https://community.trimble.com/viewdocument/supported-files?CommunityKey=48f38a6e-5abb-4ba1-8880-972ff53882ff&tab=librarydocuments" target="_blank">any 2D File type</a>) with annotations and measurements that help signify calls to action or tasks. Views are accessible to those users who are view assignees.

#### Views 3D

3D Views are snapshots of 3D models (<a href="https://community.trimble.com/viewdocument/supported-files?CommunityKey=48f38a6e-5abb-4ba1-8880-972ff53882ff&tab=librarydocuments" target="_blank">any 3D file type</a>). 3D Views provide the capability to collaborate through visibility tools such as annotations, measurements (linear and angular), camera angles, zoom positions, colors, and so forth. 3D Views may be used to indicate calls to action to assignees.

#### View Groups

View groups may be used to arrange and organize related Views. Using View Groups avoids searching for relevant views from a long list. For example, all measurement views of a fabrication task can be grouped together.

#### Tags

A Tag is an element presented with a keyword or phrase that enables the user to quickly label or categorize objects. Tags are actually pieces of metadata that provide an additional method for content classification.

Tags exist within the context of a project. Tags can be applied to:

- Folders
- Files
- ToDos
- Topics
- Views

All project users can add or create tags within the project. Only project administrators can edit or delete tags.

#### Search

The Search API in Connect allows you to query for a string/parameter. The search can be used across multiple projects or narrowed down to a specific project and object type.

The results returned are dependent on the data the querying user has access to within the Project.

#### Activities

Activities in Trimble Connect are a summary of events that happen within the project. Activities are tracked against the various objects in the project (files, folders, users, todos, clashes, comments, shares, releases, views, and the project itself). To view the full list of all tracked activities see the **<a href="https://docs.browser.connect.trimble.com/activity/tracked-activities" target="_blank">user guide documentation</a>**.

#### Object links

Object links in Connect provide a means to associate 3D model elements with references (Files or tasks) so that project collaborators working with models can immediately find relevant information next to the 3D model element. For example, cost estimation and material details sheets (XLSX/PDF) can be attached to a rebar (3D model element) in a reinforcement cage.

#### ObjectSync

During the different phases of the construction lifecycle, there are ongoing changes to the project. It becomes essential to detect if there are changes in the project and what changed to decide on the next steps and assess the impact on current work. For example, if there is a change to a drawing and new content is made available, it will impact the ongoing task of an onsite project member.

ObjectSync helps detect changes to project content after a specified date and time. Project content includes Files, Folders, Releases, Views, User groups, and Users.

#### ToDos

ToDos are meant for communication between construction project members. For example, ToDos can be created to communicate issues, requests, questions, or clashes. Each ToDo has predefined data fields of title, description, type, status, priority, assignee(s), due date, and completion %.

In addition, a ToDo can have tags, object links (attachments and linked model objects), and 2D and 3D views in it. Supported types of attachments include any document in the project, 3D & 2D views, and clashes.

Notifications will be sent about ToDo-related events if they are enabled in the project settings.

A project admin can select between two ToDo visibility options in the project permissions settings: shared ToDo visibility and restricted Todo visibility. The ToDo permissions follow the rules outlined in the user guide: **<a href="https://docs.browser.connect.trimble.com/todos/todo-permissions#h.atvvq5poykvd" target="_blank">Learn more about ToDo permissions</a>**

**Notice!** Trimble Connect offers another API for model-based communication: The <a href="https://app.swaggerhub.com/apis/Trimble-Connect/topic" target="_blank">BCF Topics API (BETA)</a>. The BCF Topics API is designed to be compatible with the industry standard BIM Collaboration Format BCF-API.

#### Comments

While working in Trimble Connect, you will be able to add comments to Files, Folders, ToDos, Views, and Releases. The comments appear in the detail panel for a file, folder, View, Release, or ToDo. The attachment types that can be added to a comment are project files, views, and web links. The comment permissions follow the rules outlined in the user guide.

**<a href="https://docs.browser.connect.trimble.com/comments/comment-permissions" target="_blank">Learn more about Comment permissions</a>**

#### Clash check

A clash is a structural conflict between 3D models. Checking for clashes is a common part of the design coordination workflow between different construction disciplines. For example, the MEP designer and the structural designer may want to check that the 3D BIM models they produce for their domains don’t conflict in a way that would cause issues during the construction phase.

The Trimble Connect clash check feature uses a Connect platform cloud-based clash detection engine to check for clashes between two or more models in the project. The clash engine can check for clashes (objects are overlapping/conflicting) or clearances (objects are too near each other) and takes, as an input parameter, the user-defined numerical tolerance value.

As a result, the clash engine produces a clash set. The clash set contains all the individual clashes found during the check. Each individual clash stores the clashing objects and a distance value. Clash sets can be viewed and shared with other project users. Individual clashes can be attached to ToDos and Topics.

The Connect clash detection engine has limitations in what kind of clashes it can detect. See the user community post to learn more about the capabilities of the clash detection engine:

**<a href="https://community.trimble.com/viewdocument/product-update-09-05-2020-new-tri?CommunityKey=2ba352bf-190c-4712-8473-09e331f39bf2&tab=librarydocuments" target="_blank">Learn more about Clash Detection Engine</a>**

# Getting Started

## Authentication

- Please follow the instructions regarding authenticating with Trimble ID <a href="https://app.swaggerhub.com/apis/Trimble-Connect/tcps/2.0" target="_blank">in the API specification</a>.

## Authorization

The Service API methods must be called as an authenticated Trimble ID user. You need to complete steps in the <a href="https://community.trimble.com/viewdocument/trimble-connect-authentication-guid" target="_blank">Trimble Connect Authentication guide</a> to be able to call the API.

Access to data is based on the authenticated user making the Connect API calls.

Generally, most data resides under a project. **Project membership** grants users access to project data. Read/write access to project data can be separately controlled by permissions. **Project admins** have full access to data in a project. **Account admins** have full visibility into projects created under the account. See the [Concepts](#concepts) section for more details.

# Code Samples

- <a href="https://github.com/Trimble-Connect/samples" target="_blank">https://github.com/Trimble-Connect/samples</a>

# Error messages

- <a href="https://app.swaggerhub.com/apis/Trimble-Connect/tcps/2.0" target="_blank">See error messages and handling in the API specification</a>

# Additional Links

SDKs

- <a href="https://github.com/Trimble-Connect/dotnet-sdk-docs" target="_blank">Trimble Connect .NET SDK </a>(NuGet) - API client, local data management and synchronization for the Connect Core, Organizer, and Property Set APIs
- <a href="https://www.npmjs.com/package/trimble-connect-sdk" target="_blank">Trimble Connect typescript SDK </a>(npm) - API client for the Connect Core, Organizer, and Property Set APIs
