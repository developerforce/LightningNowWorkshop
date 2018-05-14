---
layout: module
exercise: Exercise 2
title: Customize Your Home Page 
---

### **2A.  Introduction to the Sales Console App**

Lightning Experience comes automatically configured with standard Apps in addition to your custom Apps that have already been created in Salesforce Classic.  As we prepare for our pilot in our Trailhead Playground, lets take a look at what the Sales Console app looks like in Lightning Experience.  

There are times where you are performing multiple actions at the same time. From working leads, logging calls, updating opportunities, adding contacts, and changing statuses, this means that you are back and forth between multiple records. The Sales Console App makes this task much simpler, as you can open multiple records at the same time, jump quickly from object to object, and log activity very simply. Here you learn what you can do with the Sales Console App, plus more importantly how can you configure it to meet your business needs. Let's jump in and see how this time saver works!

1. Click the **App Launcher** and select **Sales Console.**
    1. Let's pin the Home Page to ensure it is always open in the Console.
        1. Click the down arrow next to the object name and click **Home**.
            1. Click the down arrow next to Home and click **Pin tab**.
    
    2.  Now, let's explore Chatter and and one of its new features, **Chatter Streams**.  Chatter Streams is where your users can create curated lists of records and people to follow. Create up to five Chatter streams that combine posts from different feeds and different feed types. Combine feeds from people, groups, and records, like your accounts, opportunities, and cases.


          1. Click the **down arrow** in the items list and click on **Chatter**.

           1. Click the **+** next to **STREAMS**.
           2. Name the stream **Important Accounts & Opps**.
           3. In the **Search Accounts...** **box** type **Edge**.
              1. Click **Edge Communications**.
           4. In the **Search Accounts... box** type **Burlington**.
              1. Click **Burlington Textiles Corp of America**.
           5. Click the **down arrow** next to the **Accounts icon** and click **Opportunities**.
              1. In the **Search Opportunities**... box type **Edge**.
                 1. Click the first **Edge Emergency Generator** opportunity that appears in the list.
              2. In the **Search Opportunities**... box type Burlington.
                 1. Click **Burlington Textiles Weaving Plant Generator**.
              3. In the **Search Opportunities... box** type **GenePoint**.
                 1. Click **GenePoint Lab Generators**.
           6. Click **Save**.
    
           While we are here, let's create a feedback group for our users to use when they want to tell us how great Lightning is!
           
        2. Click the ➕ symbol next to Recent Groups to create a new group to collect pilot feedback:
            1. Name: **Lightning Feedback**
            2. Description: **Group for Lightning Pilot Feedback**
            3. Access: **Public**
            4. Leave all other items defaulted
            5. Click **Save & Next.**
            6. Click **Next** and then click **Done.**
            7. Click the down arrow next to Lightning Feedback tab and click **Pin tab.**
            
 2. In the Utility bar at the bottom left, you will find components that are available no matter where you are in the App. 
     1. click **History** to view the recent tabs you've had opened.  
        1. Click the link icon next to any of the items to copy it to your clipboard.
     2. **Minimize** the History section.
     3. Click **Notes** to view recent notes you've created.
     4. **Minimize** the Notes section.

Let's start customizing our Console App for our pilot inside sales users!


### **2B. Customize the Sales Console App**

We've explored the console app, now let's customize it for your pilot sales users:

1. Modify the Sales Console App using App Manager
    1. Click the gear icon and select **Setup**.
        1. Enter **App Manager** in Quick Find and select **App Manager**.
        2. Click the down arrow next to Sales Console and click **Edit**.
            1. In the **App Details & Branding** section:
                1. Update the **Primary Color Hex Value** to **#29C41E**.
                2. Click the current app image and select the **Emblem-money.png** image from your desktop.
                3. Click **Save**.
            2. In the **App Options** section:
                1. Leave everything defaulted but notice the App Navigation is set to Console vs. Standard.
            3. In the **Utility Bar** section:
                1.  Click **Add**.
                2. Scroll down the list and click **Rich Text**.
                    1. Rename the Label to **Announcements.**
                    2. Change the Icon from fallback to **announcement**.
                    3. In the Components Properties box type: **Pipeline review meetings start soon! Update your opportunities TODAY!**
                3. Click **Save**.
            4. In the **Select Items** section:
                
                1. Click **Cases** in the Available Items list, hold down **CTRL**, and then click on **Forecasts**.
                
                2. Click the ➡️ to add the two items to Selected Items.
                
                3. Click **Campaigns** in the Selected Items list, and then click the ⬅️ to remove the item.
                4. Click **Save**.
            5. In the **Navigation Rules** section:
                1. Click **Cases**.
                    1. Click the **Subtabs of** radio button.
                        1. Select **Accounts (Account)**.
                    2. Click **Save**.
            6. In the **Assign to User Profile** section:
                1. Click **Marketing User** from the **Selected Profiles** list.
                
                2. Click the ⬅ to remove Marketing User from the list.
                3. Click **Save**.
            7. In the upper right corner, click **Back**.
2. Now let's view the Sales Console App Changes:
    1. Click the **App Launcher icon** and select **Sales Console App**.  Notice the Icon now shows the uploaded image.
    2. Click the ⬇️ next to Leads.  You can now select Cases and Forecasts, but can no longer select Campaigns.
        1. Click **Cases**.
            1. Click the **down arrow** next to Recently Viewed and click **All Open Cases**.
            2. Click case **00001002**.  Notice how the case appears as a subtab within the United Oil & Gas Corp. account.  This is because case 00001002 is associated to that account.  
            3. Click the **United Oil & Gas Corp** subtab to the left of the 00001002 case subtab.  You can toggle back and forth between the account and case records.
            4. Click the **down arrow ** next to the **United Oil & Gas Co.** at the top of the screen and click **Pin Tab**.  Notice that it is the Account that is pinned, not the case.  The case is a subtab of the pinned account.
        2. In the Utility Bar at the bottom of the screen, click** Announcements**.  You can view the announcement you added.
            1. Minimize **Announcements**.
    
    3. Click on the pinned tab with the **Lightning Feedback Group** and the ⬇️ next to Cases and click **Chatter**.in the URL bar at the top of the page, **highlight the URL** and **copy the link** for use in the next section.

4. We're almost finished in the Sales Console App but before we leave we need to customize the Home Page for our pilot users:
    
    1. Click the ⬇️ next to Cases and click **Home**.
       
       1. In the upper right corner, click the ⚙️ and click **Edit Page**.
       
       2. From the Standard list on the left, click the Items to Approve component and drag it to just below Assistant.  The area turns green letting you know you are allowed to drop the component in that location.
       
       3. From the Standard list on the left, click the Rich Text component and drag it to just below the Items to Approve component.
            
            1. In the Rich Text box, type: **Have Lightning feedback for us? Take it Chatter: Click here!**
            2. Highlight the word **Click Here** and click the **Link icon**.
            3. In the **URL box** paste the copied **chatter group URL**.  Click **OK**.
        4. Click **Save**.
            1. If the Page Saved, message appears click Activate, if not click Activation. 
            2. Leave Set this page as the default Home Page selected and click Next
            3. Click **Activate**.
        5. Click **Back**.
        6. Refresh your screen if you do not see the changes.

Great Job! You have customized your Home page for your pilot!


<div class="row" style="margin-top:40px;">
    <div class="col-sm-12">
        <a href="Exercise_d1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
        <a href="Exercise_d3.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
</div>
