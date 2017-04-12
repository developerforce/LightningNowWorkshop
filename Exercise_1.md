---
layout: module
exercise: Exercise 1
title: Styling a Visualforce page for the Lightning Experience
---

### Objectives

In this exercise you will learn:
* How to run the same Visualforce page in Salesforce Classic and in the Lightning Experience
* What you should pay attention to when running the same Visualforce page in the two environments
* How to add Salesforce Lightning Design System (SLDS) styles to a Visualforce page

### Step 1 - Run the Leads Visualforce Page in Salesforce Classic

1. If you are currently using the Lightning Experience, switch back to **Salesforce Classic**.
1. Select the **Dreamhouse Classic application** and click the **Leads** tab. This is a simple Visualforce page displaying a list of Leads. 

### Step 2 - Run the Leads Visualforce Page in the Lightning Experience

1. Switch back to the **Lightning Experience**.
1. Click the Setup icon and choose Setup.
2. Click on **Apps** and choose **App Manager**.
3. Click the Actions dropdown for the **Dreamhouse Classic** app and click **Upgrade**. Name the new application **Dreamhouse Lightning** and click **Save** (this may take a minute to complete).
1. Click the **Leads** tab. The page works but has the Salesforce Classic look and feel.
1. Right-click on the data table in the page and click **Inspect**.
1. Locate the `<table>` tag and notice it has a **list** class. Classes are CSS rules that define the look of the items on the page.

### Step 3 - Style the Visualforce Page with the Salesforce Lightning Design System

1. Click the **Gear** icon (upper right corner) and select **Developer Console**.
1. Choose File > Open > Pages, select **DreamhouseLeads**. and click **Open**. Familiarize yourself with the code.
1. Add the following directive on the line after the opening `<apex:page>` tag to include the Salesforce Lightning Design System (SLDS) style sheet:

		<apex:slds />
		
1. Wrap the `<apex:pageBlock>` tag with the following `div` tag:

		<div class="slds-scope"> ... </div>
		
1. Add the following attributes to the `<apex:page>` tag:

		standardStylesheets="false" applyBodyTag="false"
		
1. Add `styleClass="slds-button slds-button--neutral"` to the two `<apex:commandButton>` tags.

1. Add `styleClass="slds-table slds-table--bordered slds-table--cell-buffer"` to the `<apex:pageBlockTable>` tag. 

1. Save the page. Go back to the **Leads** tab and refresh the page. You can see that SLDS styles have begun to be applied.

1. Switch back to **Salesforce Classic** and click the **Leads** tab again. Notice that you now have Lightning styles within your Salesforce Classic environment. 
We will address that issue in the next exercise.

> **Not working as expected?** Check out [this file](https://raw.githubusercontent.com/ccoenraets/LightningNowWorkshop/master/Exercise_1/DreamhouseLeads-1.page) to see what the code should look like at this stage. Feel free to cut and paste it in your own page.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_d5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_2.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
