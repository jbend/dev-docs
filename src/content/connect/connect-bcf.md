---
title: "Connect BCF Topics"
description: "Connect BCF Topics API"
---

## Overview

BCF Topics are meant for communication between the construction project members. The communication topics can be, for example issues, requests, questions, or clashes.

BCF stands for BIM Collaboration Format and it is an open industry standard from buildingSMART International. It is adopted by many software applications in the construction industry. Because it’s an open standard, it means that you can share issues between applications that support the standard, using Trimble Connect as the BCF server.

Connect BCF Topics enables model-based communication, which means that you can link your issue directly to a BIM model using 3D viewpoints and links to model objects. However, it’s not a must to have a BIM model to communicate with BCF Topics. You can also create an issue and use other rich communication fields like the description, status, priority, assignees, comments, and document references. Use Connect BCF Topics for example, in design, procurement, construction, and operation phases of your construction project.

The Connect BCF Topics API is currently available as a **public beta** version for evaluation and feedback purposes. It is a data-level service with a REST API and a corresponding .NET SDK. It is part of the Trimble Connect platform.

### Use Cases

In general, BCF allows different BIM applications to communicate model-based issues with each other by leveraging BIM models. There are two different ways to utilize BCF; using a file-based exchange or using a web service. The Connect BCF Topics API represents the web service-based (RESTful) API mode for BCF where Trimble Connect acts as the BCF Server enabling project participants to sync the creation, editing, and management of BCF topics in one centralized location.

There are a number of phases in a construction project that can benefit from BCF-enabled workflows, for example:

- Design - QA/QC, clash checking, annotating
- Procurement - Bidding coordination
- Construction - QA/QC of installation vs BIM, tracking
- Operations - Notations and owner notes

### Concepts

When looking at the Connect BCF Topics API, it is good to have a basic understanding of some of the terminology:

- BCF - BIM Collaboration Format - open industry standard by BuildingSMART (<a href="https://technical.buildingsmart.org/standards/bcf/" target="_blank">BuildingSmart</a>)
- Topic - A unit of communication. Each Topic has a type, title, description, status, priority, and assignee(s). A topic can have comments, tags, document reference(s), viewpoint(s), and linked model objects
- BCF-API - BuildingSMART standard API specification. Connect BCF Topics API supports the <a href="https://github.com/buildingSMART/BCF-API/tree/release_2_1" target="_blank">standard version 2.1</a>.

![](https://coreconsole-assets.console.trimblecloud.com/api/5609501f-dfcc-460e-ae9f-73dd6abebd9f/image1.png)

#### Regions

Trimble Connect offers regional API endpoints that you can use to make your requests. The resources in each region are independent of similar resources in other regions. Each Trimble Connect project is hosted in a specific region, therefore all data in the project must be accessed through that regional API endpoint (see **/regions** API).

### Dependencies

Topics exist in the context of a Trimble Connect project. The user must be part of the project to work with project data. The Connect BCF Topics API supports the <a href="https://github.com/buildingSMART/BCF-API/tree/release_2_1" target="_blank">standard version 2.1</a>.

## Getting Started

### Authentication

- Please follow the instructions regarding authenticating with Trimble ID <a href="https://app.swaggerhub.com/apis/Trimble-Connect/topic" target="_blank">in the API specification</a>

### Authorization

The Connect BCF Topics API methods must be called as an authenticated Trimble ID user. You need to complete steps in the <a href="https://community.trimble.com/viewdocument/trimble-connect-authentication-guid?CommunityKey=0e642f2e-5208-4774-b947-c9099ce52e81&tab=librarydocuments" target="_blank">Trimble Connect Authentication guide</a> to be able to call the BCF Topics Service APIs.

<!-- # Code Samples

Coming Soon

-->

## Error messages

- <a href="https://app.swaggerhub.com/apis/Trimble-Connect/topic" target="_blank">See error messages and handling in the API specification</a>.

## Additional Links

- <a href="https://www.nuget.org/packages/Trimble.Connect.Topic.Client" target="_blank"> Trimble Connect .NET Topics SDK</a> (NuGet)
- <a href="https://community.trimble.com/viewdocument/introducing-trimble-connect-bcf-top?CommunityKey=2ba352bf-190c-4712-8473-09e331f39bf2&tab=librarydocuments" target="_blank">Connect BCF Topics (BETA) announcement</a>
