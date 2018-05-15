---
layout: module
exercise: Exercise 4
title: Customize the Opportunity Workspace  
---


### 4A. Create a path on opportunities

1. From Setup, enter **Path Settings** in the Quick Find box, then select **Path Settings**.
    1. Click Edit on the Opportunity Path.  New orgs have default paths setup for Leads and Opportunities.
    2. Review the settings and Click **Next**.
        1. Click the **Prospecting** stage.
            1. Click **+Add/Update Fields.**
                1. Add **Description** and **Expected Revenue** to the Selected Fields section and **Save.**
            2. In the **Guidance for Success** text area, add *“Refer to the Sales Playbook for details around Prospecting.”*
        2. Click the **Needs Analysis** stage.
            1. Click **+Add/Update Fields**.
                1. Add **Close Date, Description, and Amount** to the Selected Fields section and **Save.**
            2. In the **Guidance for Success** text area, add *“Please be sure to update the Close date for this as you move along the sales cycle.”*
        3. Click **Next**.
        4. Select **Active** and click **Finish**.

### **4B.  Update Opportunity Highlights Panel**

The Highlights Panel provides important information about a record without clicking into the Details.  It answers the question, “What do my reps need to see at first glance?:”

1. Click the **Object Manager** tab within the Setup Menu.
2. Select **Opportunity**.
3. Select **Compact Layouts** and click on the **System Default** label.
    1. Click **Clone**.
        1. Label:  **Lightning Highlight Panel**
        2. Name:  **[this field auto-completes]**
        3. Adjust the following Fields:
            1. Remove **Score** from the Selected Fields section.
            2. Add **Order Number** to the Selected Fields Section.
    2. Click **Save**.
    3. Click on **Compact Layout Assignment**
        1. Click on Edit Assignment
        2. In the Primary Compact Layout field, select **Lightning Highlight Panel**.
        3. Click **Save**.

### **4C.  Create an Update Action To use in our workspace**

Lightning Experience allows us to make updating records easy as pie!  We are going to create an update action that we will use on Accounts and will use on our Opportunity Lightning Record Page.  

1. Click the **Object Manager** tab within the Setup Menu
2. Select **Account**.
3. Select **Buttons, Links, Actions**.
4. Click **New Action**.
    1. Action Type:  **Update a Record**
    2. Standard Label Type:  **Update [Record]**
    3. Name: **Account_Update**
    4. Click **Save**.
    5. Drag and drop the **Account Number** field from the top section of the layout menu to the page layout section below (below the Industry field).
    6. Drag and drop the **Parent** **Account** field from the top section of the layout menu to the page layout section below (below the Website field).
    7. Click on the **Phone Number** field in the page layout (lower section) and click the **Remove** button.
    8. Click **Save**.
 5. **Update Account Action on Account**
    1. In Object Manager, Select **Page Layouts**.
    2. Select **Account Layout**.
          1. Scroll down to locate the **Salesforce Mobile and Lightning Experience Actions section** in the page layout edit.
          2. Click **override the predefined actions** text. 
          3. Within the top section, select the **Mobile & Lightning Actions** menu.
          4. Find **Update Account** action & drag into **Salesforce Mobile and Lightning Experience Actions** section of the page layout editor.
          5. Click **Save**.
    3. On the Sales Console App tab (in your browser), select **All Accounts** from the Accounts list view:
        1. Select the **Edge Communications** Account
        2. Now, let's click on the **Update Account action** and see how it works!


### **4D.  customize the Opportunity and account Pages using Lightning App Builder**

It's time to customize our opportunity page for our pilot!  This is the last step before preparing our users for the pilot.  Our opportunity page should provide relevant information for our users to do their jobs more efficiently.  

1. Click on Search and search for the **Express Logistics Portable Truck Generators** opportunity.  
    1. Click the **Gear icon** in the upper right and select **Edit Page**.
        1. Click the **Related Record** Component from the left side menu to add to the page.
            1. Lookup Field:  **Account Name**
            2. Update Action will auto-populate with Update Account
        2. Click the **Related List Quick Links** Component from the left side menu to add to the page.
        3. Click the **Rich Text** Component from the left side menu to add to the page.
            1. In the text area on the right, enter the message:  *“You are a Winner!!”*
                1. Format the text to **Font: Tahoma, Size: 20, Text Alignment: Middle, Color: Red**.
                2. Click **+Add Filter** under Set Component Visibility.
                    1. Filter Type: Record Field
                    2. Field:  Stage
                    3. Operator: Equal
                    4. Value: Closed Won
                3. Click **Done**.
        4. Hover over the Data.com Insights tile on the page layout section and click the X to **remove the Data.com Insights** tile from this page.
        5. Click on the **Tab Component** in the main window.
            1. Let's make the **Detail** tab the default tab.
                1. In the configuration panel, select **Detail** Tab in the Default Tab dropdown.
            2. Let's add a Tab for the Cases for this account.  
                1. In the configuration panel, select **Add Tab**.
                2. Click on the new Tab labeled **Details**.
                3. Select **Custom** as the new Label and enter **Cases** and click **Done**.
                4. Navigate to the new tab in the main window and click on it.  
                5. From the Component menu, select and drag the **Related List - Single** component to this tab.
                    1. In the configuration panel, for Parent Record, select **Account Name**.
                    2. For Related List, select **Cases**.
        6. Click **Save**.
        7. Click **Activate**.
        8. Click **App Default**.
        7. Click the **Assign as App Default button** and click **Save**.
        8. Click **Back** in the upper right corner.
    2. Within the **Express Logistics Portable Truck Generators** opportunity, click the **Closed stage** on the Sales Path.
        1. Click the **Select Closed Stage** button.
        2. Choose **Closed Won** and click **Save.**
            1. See message displayed

Give yourself a round of applause! You have finished customizing your sales console app for your pilot!



<div class="row" style="margin-top:40px;">
    <div class="col-sm-12">
        <a href="Exercise_d3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
        <a href="Exercise_d5.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
</div>
