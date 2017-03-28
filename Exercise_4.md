---
layout: module
exercise: Exercise 4
title: Creating a "Hello World" Lightning Component
---

### Objectives

In this exercise, you will learn how to:
* Build a simple Lightning Component
* Declare attributes and use data binding
* Retrieve server data in a Lightning Component.

### Step 1 - Hello World

1. In the Developer Console, choose **File > New > Lightning Component**.

2. Specify **HelloWorld** as the component name.

3. Check the **Lightning Record Page** checkbox.

4. Type **Hello World** inside the `<aura:component> ... </aura:component>` tags.

5. Save the file.

### Step 2 - Add the component to a page

1. Navigate to a Property Record Detail page.

2. Select **Edit Page** in the Setup menu.

3. Locate the **HelloWorld** component under **Custom Components**.

4. Drag it onto the page and place it at the top of the right-hand column.

5. Click the Save button.

6. Click the Back button in the upper righthand corner of App Builder to return to the Property page.

### Step 3 - Using data binding

1. In the Developer Console, replace the **Hello World** text with:

	```html
	<aura:attribute name="greeting" type="String" default="World" />

	Hello, {!v.greeting}!
	```

1. Save the component and reload the Property Record Detail page.

1. Add the following input field on a new line under the `<aura:attribute/>` tag:

	```html
    <lightning:input name="Greeting" label="Greeting" value="{!v.greeting}"/>
	```

1. Save the file and reload the Property Record Detail page.

1. Type a name in the input field to see data binding in action.

### Step 4 - Pulling data from Salesforce

1. In the Developer Console, choose **File > New > Apex Class**. Specify **HelloWorldController** as the controller name and click **OK**.

1. Add `with sharing` to the class definition.

    ```java
    public with sharing class HelloWorldController {
    ```

2. Add the following method inside the class:

	```java
    @AuraEnabled
	public static User getCurrentUser() {
		return [SELECT Id, FirstName, LastName FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
	}
    ```

3. Go back to the **HelloWorld** component and add `controller="HelloWorldController"` to the `<aura:component>` tag.

4. Add an `init` event handler right after the **greeting** attribute
declaration.

	```html
	<aura:handler name="init" value="{!this}" action="{!c.doInit}" />
	```

    With this event handler in place, the `doInit()` function of the
    component's JavaScript controller will be called when the component is initialized.

5. Click **CONTROLLER** in the sidebar on the right and implement the client-side controller as follows:

	```js
	({
		doInit : function(component, event, helper) {
            var action = component.get("c.getCurrentUser");
            action.setCallback(this, function(response) {
                var user = response.getReturnValue();
                component.set("v.greeting", user.FirstName);
            })
            $A.enqueueAction(action);
	    }
	})
	```

6. Save all the files.
7. Refresh the Property page.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_5.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
