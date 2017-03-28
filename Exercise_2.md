---
layout: module
exercise: Exercise 2
title: Conditionally Rendering Visualforce Pages for the Underlying UX Environment
---

### Objectives
In this exercise you will learn how to:

* Identify which UX environment (Classic or Lightning Experience) a page is running in
* Add conditional rendering logic to a page to provide the native look and feel for the UX environment the page is running in  
* Use the Salesforce Lightning Design System markup and styles

### Step 1 - Add a check for the User Theme to the Apex controller

1. In the Developer Console, open the **DreamhouseProspects** Apex class
1. Below the `public String sortOrder {set; get;}`, add the following method to detect the User's current theme:

	```public Boolean getIsClassic() {
          return (UserInfo.getUiThemeDisplayed() == 'Theme3' && ApexPages.currentPage().getParameters().get('beLightning') == null);
      }
	```

1. Save the class.

1. To see the whole class as expected at this step, check out [this file](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_2/src/classes/DreamhouseProspects.cls).

### Step 2 - Remove the previous CSS changes and add dynamic blocks based on getIsClassic

1. In the Developer Console, open the **DreamhouseLeads** page.
1. Remove the `styleClass="slds-table slds-table--bordered slds-table--cell-buffer"` that you added to the `<apex:pageBlockTable>` in the previous exercise.
1. Remove the `<apex:slds />` tag.
1. Remove the opening and closing `<div class="slds-scope">` tags.
1. Update the `<apex:page>` tag to refer to the Apex variable:

	```<apex:page controller="DreamhouseProspects" standardStylesheets="{!isClassic}" applyBodyTag="{!isClassic}">
	```

1. Wrap the `<apex:pageBlock>` with the following tag to render it only when the page is running in Salesforce Classic:

	```html
	<apex:outputPanel rendered="{!isClassic}"> ... </apex:outputPanel>
	```

1. Paste the following code immediately after the closing `</apex:outputPanel>` tag. This block will only be rendered when the page is running in the Lightning Experience:

	```html
    <apex:outputPanel rendered="{! !isClassic}">
        <apex:slds />
        <div class="slds-scope">
            <div class="slds-page-header">
                Header goes here
            </div>
            Lead table goes here
        </div>
    </apex:outputPanel>
	```

1. Save the page.

1. Load the page in **Salesforce Classic**: the page displays with the Salesforce Classic look and feel.

1. Load the page in the **Lightning Experience**: the page displays the basic scaffolding for the Lightning Experience implementation. We will provide the complete implementation in the next steps.

> **Not working as expected?** Check out [this file](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_2/src/pages/DreamhouseLeads-2.1.page) to see what the code should look like at this stage. Feel free to cut and paste it in your own page.

### Step 3 - Add the SLDS Header

1. Navigate to the [Salesforce Lightning Design System](http://getslds.com) site. Click **Components** in the side bar, then click **Page Headers**, and familiarize yourself with the markup and styles.

1. Back in the Developer Console, replace the **Header goes here** text with the following code, which is a piece of the Page Header component from Salesforce Lightning Design System:

	```html
    <div class="slds-grid">
        <div class="slds-col slds-has-flexi-truncate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <div class="slds-media slds-no-space slds-grow">
                <div class="slds-media__figure">
                    <svg class="slds-icon slds-icon-standard-user" aria-hidden="true">
                        <use xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#lead')}"></use>
                    </svg>
                </div>
                <div class="slds-media__body">
                    <p class="slds-text-title--caps slds-line-height--reset">Record Type</p>
                    <h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="this should match the Record Title">Record Title</h1>
                </div>
            </div>
        </div>
    </div>
	```

1. Save the file.

1. Load the page in the Lightning Experience: the header displays as expected.

### Step 4 - Add the SLDS Data Table

1. Go back to the Salesforce Lightning Design System site. Click **Components** in the side bar, then click **Data Tables**, and familiarize yourself with the markup and styles.

1. Back in the Developer Console, replace the **Lead table goes here** text with the following code:

	```html
	<apex:pageBlock id="leads_list" >
        <table class="slds-table slds-table--bordered slds-table--cell-buffer">
            <thead>
                <tr class="slds-text-title--caps">
                    <th scope="col">
                        <div class="slds-truncate" title="First Name">First Name</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Last Name">Last Name</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Email">Email</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Phone">Phone</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <apex:repeat value="{! leads }" var="lead">
                    <tr>
                        <th scope="row" data-label="First Name">
                            <div class="slds-truncate" title="{! lead.FirstName }"><apex:outputLink value="/{! lead.Id}">{! lead.FirstName }</apex:outputLink></div>
                        </th>
                        <td data-label="Account Name">
                            <div class="slds-truncate" title="{! lead.LastName }">{! lead.LastName }</div>
                        </td>
                        <td data-label="Email">
                            <div class="slds-truncate" title="{! lead.Email }">{! lead.Email }</div>
                        </td>
                        <td data-label="Phone">
                            <div class="slds-truncate" title="{! lead.Phone }">{! lead.Phone }</div>
                        </td>
                    </tr>
                </apex:repeat>
            </tbody>
        </table>
   </apex:pageBlock>
	```

1. Save the file and reload the page (in the Lightning Experience). The lead table should display.

> **Not working as expected?** Check out [this file](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_2/src/pages/DreamhouseLeads-2.3.page) to see what the code should look like at this stage. Feel free to cut and paste it in your own page.

### Step 5 (Optional) - Refine the SLDS Header

1. Select the entire `<div class="slds-page-header"> ... </div>` tag and replace it with:

	```html
	<div class="slds-page-header">
        <apex:form>
        <div class="slds-grid">
            <div class="slds-col slds-has-flexi-truncate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <div class="slds-media slds-no-space slds-grow">
                    <div class="slds-media__figure">
                        <svg class="slds-icon slds-icon-standard-user .slds-icon--small" aria-hidden="true">
                            <use xlink:href="{!URLFOR($Asset.SLDS, 'assets/icons/standard-sprite/svg/symbols.svg#lead')}"></use>
                        </svg>
                    </div>
                    <div class="slds-media__body">
                        <p class="slds-text-title--caps slds-line-height--reset">Lead</p>
                        <h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate"
                            title="this should match the Record Title">Home</h1>
                    </div>
                </div>
                <div class="slds-grid slds-grid--vertical-align-end slds-m-vertical--small">
                    <div class="slds-size--1-of-6 ">
                        <apex:outputLabel value="Sort: " for="sortList" styleClass="slds-form-element__label" />
                        <div class="slds-select_container">
                            <apex:selectList value="{! sortOrder}" size="1" id="sortList" styleClass="slds-select">
                                <apex:selectOption itemvalue="LastName" />
                                <apex:selectOption itemvalue="FirstName" />
                            </apex:selectList>
                        </div>
                    </div>
                    <div class="slds-no-flex">
                        <apex:commandButton value="Sort" action="{!sortList}" reRender="leads_list" styleClass="slds-button slds-button--neutral"/>
                    </div>
                </div>
            </div>
            <div class="slds-col slds-no-flex slds-grid slds-align-top">
                <apex:commandButton action="{!URLFOR($Action.Lead.New)}" value="New" styleClass="slds-button slds-button--neutral"/>
            </div>
        </div>
        </apex:form>
   </div>
	```

1. Save the file and reload the page (in the Lightning Experience).

1. Switch to **Salesforce Classic** and click the **Leads** tab: the page loads with the Salesforce Classic look and feel.

1. Switch back to the Lightning Experience.

> **Not working as expected?** Check out [this file](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_2/src/pages/DreamhouseLeads-2.4.page) to see what the code should look like at this stage. Feel free to cut and paste it in your own page.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_3.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
