---
layout: module
exercise: Exercise 6
title: Data Binding with force:recordPreview (Developer Orgs Only)
---

### Exercise Goals

* Leverage Lightning Data Service to read and update records without an Apex Controller
* Understand cross component communication

### Step 1 - Leverage force:recordPreview to Bind the Data
1. In the Developer Console, switch to the **SimilarProperties** component markup.
2. Add a new line following the last `<aura:attribute>` on line 4 and paste:

	```html
	<aura:attribute name="property" type="Property__c" />
	<aura:attribute name="remoteRecordId" type="Id" />
	<aura:attribute name="showDialog" type="String" default="false" />
	```

3. Make another new line below the `<aura:handler>` tag (currently line 8, if your line numbers match) and add:

	```html
	<force:recordPreview aura:id="propertyService" 
	                     recordId="{!v.recordId}" 
	                     targetRecord="{!v.property}" 
	                     recordUpdated="{!c.doSearch}" 
	                     layoutType="FULL" /> 
	```

4. Save the file.
5. Click on the Helper tile on the right-hand side of the Developer Console.
6. Select all and delete the default contents of the Helper.
7. Paste the following into the helper:

	```js
	({
		getProps : function(component) {
			var recId = component.get("v.recordId");
	        var compValue = component.get("v.searchCriteria");
	        var action = component.get("c.getSimilarProperties");
	        action.setParams({
	            recordId: recId,
	            searchCriteria: compValue
	        });
	        action.setCallback(this, function(response){
	            var res = response.getReturnValue();
	            component.set("v.similarProperties", res);
	        });
	        $A.enqueueAction(action);
		}
	})
	```

8. Switch to the SimilarProperties controller tab.
9. Replace the contents with:

	```js
	({
	    doInit : function(component, event, helper) {
	        helper.getProps(component);
	    },
	    doSearch : function (component, event, helper) {
	        helper.getProps(component);
	    }
	})
	```

10. Save the file(s).	
11. Reload the Property Record Detail page.
12. Change the Price of the Record to be +/- more than 100000.
13. Click Save and watch the Similar Properties component update.

### Step 2 - Creating a Record Detail Component
1. In the Dev Console, create a new Lightning Component (File > New > Lightning Component).
2. Give the component a name of **SimilarProperty**, and leave all of the checkboxes **unchecked**.
3. Replace the contents of the **SimilarProperty.cmp** file with:

	```html
	<aura:component implements="force:hasRecordId" access="global">
	    <aura:attribute name="propertyId" type="Id" />
	    <aura:attribute name="selectedProperty" type="Property__c" />
	    <aura:attribute name="showDialog" type="String" />
	    <aura:attribute name="remoteRecordId" type="Id" />
	
	    <force:recordPreview aura:id="propertyRecord" 
	                         recordId="{!v.propertyId}" 
	                         targetRecord="{!v.selectedProperty}" 
	                         layoutType="FULL" />
	
	    <div class="slds-media">
	        <div class="slds-media__figure">
	            <img src="{!v.selectedProperty.Thumbnail__c}" class="slds-avatar--large slds-avatar--circle" alt="{!v.selectedProperty.Title_c}" />
	        </div>
	        <div class="slds-media__body">
	            <div class="slds-grid">
	                <a data-record="{!v.selectedProperty.Id}" onclick="{!c.navToRecord}">
	                    <h3 class="slds-text-heading--small slds-m-bottom--xx-small">{!v.selectedProperty.Name}</h3>
	                </a>
	                <lightning:buttonIcon iconName="utility:edit" class="slds-col--bump-left" variant="bare" alternativeText="Edit Record" onclick="{!c.editMini}" value="{!v.selectedProperty.Id}" />
	            </div>
	            <div class="slds-m-top--small">
	                <ul class="slds-grid slds-wrap">
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Beds:</span> {!v.selectedProperty.Beds__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Baths:</span> {!v.selectedProperty.Baths__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Price:</span> {!v.selectedProperty.Price__c}</li>
	                    <li class="slds-list__item slds-size--1-of-2"><span class="slds-text-color--weak slds-m-right--small">Status:</span> {!v.selectedProperty.Status__c}</li>
	                </ul>
	            </div>
	        </div>
	    </div>
	</aura:component>
	```
	
4. Click on the Controller tile to create **SimilarPropertyController.js**.
5. Replace the contents with:

	```js
	({
		editMini : function(component, event, helper) {
	        var recId = component.get("v.propertyId");
	        component.set("v.remoteRecordId", recId);
	        component.set("v.showDialog", "true");
	    },
	    navToRecord : function (component, event, helper) {
	        var selectedItem = event.currentTarget;
	        var recId = selectedItem.dataset.record;
	        var navEvt = $A.get("e.force:navigateToSObject");
	        navEvt.setParams({
	            "recordId": recId
	        });
	        navEvt.fire();
	  	}
	})
	```
	
6. Save the file(s).
7. Switch to the **SimilarProperties.cmp** tab in the Dev Console.
8. Replace the **contents** of `<li class="slds-list__item">` with:

	```html
	<c:SimilarProperty propertyId="{!item.Id}" selectedProperty="{!item}" remoteRecordId="{!v.remoteRecordId}" showDialog="{!v.showDialog}" />
	```
	
9. Save the file.
10. Refresh the Property Record Detail page. Notice that "nothing" has changed.

### Step 3 - Add a Custom Edit View
1. In the Dev Console, create a new Lightning Component named **SimilarPropertyEdit**. Leave all of the checkboxes **unchecked**.
2. Replace the contents of the file with:

	```html
	<aura:component >
	    <aura:attribute name="showDialog" type="String" default="false" />
	    <aura:attribute name="remoteRecordId" type="Id" />
	    <aura:attribute name="selectedProperty" type="Property__c" />
	    <aura:handler name="change" value="{!v.showDialog}" action="{!c.toggleDialog}" />
	    <aura:handler name="change" value="{!v.remoteRecordId}" action="{!c.getRecord}" />
	
	    <force:recordPreview aura:id="editRecord"
	                         targetRecord="{!v.selectedProperty}"
	                         fields="Id,Name,Beds__c,Baths__c,Price__c,Status__c"
	                         mode="EDIT" />
	
	    <div aura:id="editDialog" role="dialog" tabindex="-1" aria-labelledby="header43" class="slds-modal">
	        <div class="slds-modal__container">
	            <div class="slds-modal__header">
	                <button class="slds-button slds-modal__close " title="Close" onclick="{!c.toggleDialog}">
	                    <lightning:icon iconName="utility:close" variant="bare" ></lightning:icon>
	                    <span class="slds-assistive-text">Close</span>
	                </button>
	                <h2 id="header43" class="slds-text-heading--medium">Edit Record</h2>
	            </div>
	            <div class="slds-modal__content slds-p-around--medium slds-grid slds-wrap slds-grid--align-spread">
	                <lightning:input aura:id="propName" name="propName" label="Property Name" required="true" value="{!v.selectedProperty.Name}" class="slds-size--1-of-1 slds-p-horizontal--x-small" />
	                <lightning:input aura:id="propBeds" name="propBeds" label="Beds" value="{!v.selectedProperty.Beds__c}" class="slds-size--1-of-2 slds-p-horizontal--x-small" />
	                <lightning:input aura:id="propBaths" name="propBaths" label="Baths" value="{!v.selectedProperty.Baths__c}" class="slds-size--1-of-2 slds-p-horizontal--x-small" />
	                <lightning:input aura:id="propPrice" name="propPrice" label="Price" value="{!v.selectedProperty.Price__c}" class="slds-size--1-of-2 slds-p-horizontal--x-small" />
	                <lightning:input aura:id="propStatus" name="propStatus" label="Status" value="{!v.selectedProperty.Status__c}" class="slds-size--1-of-2 slds-p-horizontal--x-small" />
	            </div>
	            <div class="slds-modal__footer">
	                <button class="slds-button slds-button--neutral" onclick="{!c.toggleDialog}">Cancel</button>
	                <button class="slds-button slds-button--brand" onclick="{!c.saveRecord}">Save</button>
	            </div>
	        </div>
	    </div>
	    <div aura:id="overlay" class="slds-backdrop"></div>
	</aura:component>
	```
3. Save the file.
4. Click the Controller tile to create **SimilarPropertyEdit.js**.
5. Replace the contents with the following:

	```js
	({
		getRecord : function(component) {
	        var tempRec = component.find("editRecord");
	        tempRec.set("v.recordId", component.get("v.remoteRecordId"));
	        tempRec.reloadRecord();
	    },
	    toggleDialog : function(component, event, helper) {
	        helper.showHideModal(component);
	    },
	    saveRecord : function(component,event,helper) {
	        var propName = component.find('propName').get("v.value");
	        var propBeds = component.find('propBeds').get("v.value");
	        var propBaths = component.find('propBaths').get("v.value");
	        var propPrice = component.find('propPrice').get("v.value");
	        var propStatus = component.find('propStatus').get("v.value");
	        var tempRec = component.find("editRecord");
	        tempRec.set("v.Name", propName);
	        tempRec.set("v.Name", propBeds);
	        tempRec.set("v.Name", propBaths);
	        tempRec.set("v.Name", propPrice);
	        tempRec.set("v.Name", propStatus);
	        tempRec.saveRecord($A.getCallback(function(result){
	            console.log(result.state);
	            var event = $A.get("e.c:recordUpdated");
	            event.fire();
	        }));       
	        helper.showHideModal(component);
	    }
	})
	```
6. Click the Helper tile to create **SimilarPropertyEditHelper.js**.
7. Replace the contents with:

	```js
	({
	    showHideModal : function(component) {
	        var modal = component.find("editDialog");
	        $A.util.toggleClass(modal, 'slds-fade-in-open');
	        var overlay = component.find("overlay");
	        $A.util.toggleClass(overlay, 'slds-backdrop--open');
	        component.set("v.showDialog", "false");
	    }
	})
	```
8. In the Dev Console, create a **Lightning Event** (File > New > Lightning Event) with the name **recordUpdated**.
9. Switch back to the **SimilarProperties.cmp** tab.
10. Replace the line `<aura:handler event="force:refreshView" action="{!c.doInit}" />` the following:

	```html
	<aura:handler event="c:recordUpdated" action="{!c.doSearch}"/>
	```

11. Add a new line just before the closing `</lightning:card>` (probably line 25) and paste the following:

	```html
	<c:SimilarPropertyEdit showDialog="{!v.showDialog}" remoteRecordId="{!v.remoteRecordId}" />
	```

12. Save the file(s).
13. Switch back to the Property Record Detail page.
14. Choose **Edit page** from the **Setup** icon.
15. Add a second copy of the **Similar Properties** component in the righthand column.
16. Set its **Search Criteria** to **Beds** (or price if the other copy of the component is set to Beds).
17. Save the page layout and click the back link to go back to the page.
18. Click the **Edit** icon for a property in either component and set the beds or price such that it will either appear or disappear from the other component instance.

> **Not working as expected?** The final implementation of the components for this exercise are available here: 
> ##### SimilarPropertyEdit Component
> [SimilarPropertyEdit.cmp](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarPropertyEdit/SimilarPropertyEdit.cmp), [SimilarPropertyEditController.js](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarPropertyEdit/SimilarPropertyEditController.js), [SimilarPropertyEditHelper.js](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarPropertyEdit/SimilarPropertyEditHelper.js)
> ##### SimilarProperty Component
> [SimilarProperty.cmp](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarProperty/SimilarProperty.cmp), [SimilarPropertyController.js](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarProperty/SimilarPropertyController.js)
> ##### SimilarProperties Component
> [SimilarProperties.cmp](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarProperties/SimilarProperties.cmp), [SimilarPropertiesController.js](https://github.com/developerforce/LightningNowWorkshop/blob/master/Exercise_6/src/aura/SimilarProperties/SimilarPropertiesController.js), [SimilarPropertiesHelper.js](https://raw.githubusercontent.com/developerforce/LightningNowWorkshop/master/Exercise_6/src/aura/SimilarProperties/SimilarPropertiesHelper.js) 
>
> Feel free to check it out or cut and paste it in your own component.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_7.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
