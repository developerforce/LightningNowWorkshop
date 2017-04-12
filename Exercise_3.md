---
layout: module
exercise: Exercise 3
title: Using a Visualforce Page as a Component in a Lightning Page
---

### Objectives
In this exercise you will learn how to:
* Modify a Lightning page with App Builder
* Use a Visualforce page as a component in a Lightning page


### Step 1 - Making a Visualforce page available for Lightning pages

1. In Setup, type **visualforce** in the **Quick Find** box.

1. Click **Visualforce Pages**.

1. Click the **Edit** link for the **SimilarProperties** page.

1. Check the **Available for Salesforce mobile apps and Lightning Pages** checkbox.

1. Click Save.

### Step 2 - Adding a Classic Visualforce page to a Lightning page
1. Select **Properties** Tab

1. Select ** All** Properties in the menu

1. Select **121 Harborwalk Drive** Property

1. Click the Setup menu and choose **Edit Page**.

1. Locate the **Visualforce** component under **Standard Components**.

1. Drag the component onto the page and drop it at the top of the right-hand column.

1. **SimilarProperties** should automatically be selected in the **Visualforce Page Name** pick list on the right-hand side. If it's not, click the pick list and select it.

1. In the **Label** field, type **Similar Properties** and press Tab.

1. Modify the Height field to be **250** and press Return.

1. Click **Save**.

1. Click the **Activate** button if this is the first time you've activated the page. Activate the page as the **Org Default**.

1. Click **Save**.

1. Click the **Back** button to return to the Property page.

1. Notice that the Visualforce page has the Classic look and feel and is rather indented within the Card component.

### Step 3 - Modify the markup to match SLDS

1. In the Dev Console, select File > Open > Pages, select **Similar_Properties** and click **Open**. Familiarize yourself with the code.

1. Select the contents of the page and replace it with the [contents of this page](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_3/src/pages/Similar_Properties.page).

1. Save the page, then reload the Property Record Detail page.

> You could also use the conditional rendering approach covered in exercise 2 
to make sure the Visualforce page renders with the native look and feel in both Saleforce Classic and the Lightning Experience.
 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_4.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
