---
layout: module
exercise: Exercise 3
title: Make your users more Productive with Productivity Features  
---

We are on the way to a fully customized Sales Console App for our pilot and what's better is to discover some of the features that make Lightning Experience more productive for your users.  Users will be able to analyze data in their views without creating a report and be able to answer real-time analytical questions.  We will also see how we can make their data work for them.  So, let's get started.

### 3A. Discovering the Power of List Views

List views in Lightning Experience have many new features to explore!

1. Starting in the **Sales Console App:**
    1. Let's create a List View Chart.  Click the ⬇️ next to **Opportunities** (or which ever object is listed) and click **Leads**.
        1. If you are in the Split View, click the split view icon and click Table.
        2. Click the down arrow next to Recently Viewed and click **All Open Leads**.
            1. Click the **Charts icon**.
            2. Click the ⚙️ underneath the current chart. 
            3. Click **New Chart** and add the following information:
                1. Chart Name: **Leads by Status**
                2. Chart Type: **Vertical Bar Chart**
                3. Aggregate Type: **Count**
                4. Aggregate Field: **Lead Status**
                5. Grouping Field: **Industry**
            4. Click **Save**.
            5. Click the down arrow next to Leads by Status and click **Leads by Lead Source**.  You can have multiple charts and switch between them.
        3. Let's update Bertha's email address.  Within the All Open Leads list, hover over **Bertha Boxer's email address**.
            1. Click the ✏️ .
            2. Update her email address to** **bboxer@fcof.net.**
            3. Click anywhere outside of the email box then click **Save** at the bottom of the screen.
        4. Let's send a list email.  Click the ✅ next to **Bertha Boxer**, **Betty Bair**, **Brenda Mcclure**, **David Monaco**, and **Jeff Glimpse**.
            1. Click the ⬇️ next to Add to Campaign and click **Send List Email**.
            2. In the bottom right of the content screen, click on **insert, create, or update template icon**.
            3. Click **Insert a template**.
            4. Click the ⬇️ next to My Lightning Templates.
            5. Click **Classic Email Templates**.
            6. Click **MARKETING: PRODUCT INQUIRY RESPONSE**.
            7. Click **Send**.
        5. Now, let's verify that the email was sent.
            1. Click on **Berth Boxer**.
            2. In her Activity Timeline, click **GenWatt: Thanks for your inquiry**.  You can view the email here along with who it was sent to.  You also will receive an email with a direct link to this email.
    2. Let's update multiple records usin**g Inline editing.**
        1. In the Navigation bar, click the **down arrow** next to Leads and click **Opportunities**.
        2. Click the **down arrow** next to Recently Viewed and click **All Opportunities**.
            1. If your screen is in split view, click the **down arrow** next to the **split view icon** and click **Table**.
        3. Click the check box next to **Dickenson Mobile  Generators**, **Edge Emergency Generator** (both of them), **Edge Installation**, and **Edge SLA**.
            1. Hover over the **Close Date** for **Dickenson Mobile Generators**.
            2. Click the ✏️.
            3. Change the date to **next Friday's date**.
            4. Check the **Update 5 selected items box**.
            5. Click **Apply** then click **Save** at the bottom of the screen.
        4. Click the **down arrow** next to the **table icon and** click **Kanban**.  The Kanban view displays a visual summary for a selection of records. By seeing all your records at once, users can more effectively monitor their work and keep business processes moving forward. Switch to the Kanban view for almost any object from the object’s list view.
            1. Hover over the **Grand Hotels Kitchen Generator box**, then **click and drag** it from Id. Decision Makers to **Perception Analysis**. 
            2. Click the **down arrow** next to the **list view controls icon**.
            3. To set up Kanban, click **Kanban Settings**.
                1. Change Group By from Stage to **Lead Source**.
                2. Click **Save**.
                3. Notice how nothing changed.  Click the **Refresh icon** and your changes will be reflected.
        5. Finally, let's see how easy it is to log a call in Lightning Experience.
            1. Click on **Grand Hotels Kitchen Generator box**.
            2. From the **Activity** section, click the **Recap your call... box** underneath **Log a Call** and add the following information:
                1. **Subject:** Tried to determine key decision makers
                2. **Comments:** Found out that Karl Thomas will be involved and definitely needs to see a demo.  I was unable to verify his specific role.
                3. Click the **Search Contacts** box and click **Add New Contact**.
                    1. First Name: **Karl**
                    2. Last Name: **Thomas**
                    3. Account Name: **GenePoint**
                    4. Description: **Decision Maker**
                    5. Click **Save**.
                4. Click **Save** to save the activity.  Notice in your Past Activity it shows what you just did.
            3. Click the **Chatter** tab.  The call you logged was posted to this opportunity.

### **3B. Create a Calendar with my data**

Calendars now allow you to put more than events on it.  You can create a calendar with all of your opportunities by close date:

1. Click the ⬇️ next to Opportunities and click **Calendar**.
    1. Click the ⚙️ next to My Calendars and click **New Calendar**.
        1. Select the **Opportunity** object and click **Next**.
            1. Calendar Name: **Opportunities Closing This Month**
            2. Field for Start: **Close Date**
            3. Field Name to Display: **Name**
            4. Click **Save**.
    2. On the Calendar click **Today**.  You should see Burlington Textiles Weaving Plant Generators.
    3. Click the **down arrow** next to the** calendar icon** and make certain **Week** is checked.  If it isn't, click Week.
    4. Click the **right arrow** to view next week.  You should see the five opportunities closing next Friday.

### **3C. The New Lightning Report Builder**

Turn on the Lightning report builder and give your users a powerful, intuitive tool for analyzing Salesforce data. Group, filter, and summarize records to answer business questions easily.  

1. In the upper right hand corner, click on the ⚙️ and click **Setup**.
2. In the **Quick Find** box, type **Reports**.
3. Click **Reports and Dashboards Settings**.
    1. Check **Enable Lightning Report Builder (Beta)**.
    2. Click **Save**.
4. In the Quick Find box, type **Permission**.
    1. Click **Permission Sets**.
    2. Click **New**.
        1. Label: **Lightning Report Builder**
        2. API: **[this field auto-completes]**
        3. Descriptions: **Grants access to the Lightning Report Builder.**
        4. Click **Save**.
    3. Click **System Permissions**.
        1. Click **Edit**.
        2. Check **Report Builder (Lightning Experience)**, this will auto-check **Run Reports**.  Leave both checked.
        3. Click **Save**.
    4. Click **Management Assignments**.
        1. Click **Add Assignments**.
        2. Check the box next to **Your Name** and click **Assign**.
        3. Click **Done**.
5. Now, let's create a New Report Using Lightning Report Builder
    1. Click the **App Launcher** and select **Sales Console App**.
    2. Click the **down arrow** next to Opportunities (or whatever object is currently displaying) and click **Reports**.
    3. Click **New Report**.
    4. Click Opportunities on the left (this will highlight Opportunities on the right, leave that selected) and click **Continue**.
    5. Click the **down arrow** next to **Stage** and click **Group Rows by this Field**.
    6. Click the **down arrow** next to **Amoun**t, hover over **Summarize**, and click **Sum**.
    7. At the bottom of the screen click the **Subtotals toggle** to shut them off.
    8. Toggle off and on the other options, just to see what they do.
    9. In the upper left, click on **Filters**.
    10. Click **Close Date**.
    11. Change the Range to **All Time** and click **Apply**.
    12. Click the **Add Chart Button**.
    13. Click the ⚙️ in the upper right of the chart.
        1. Chart Type: **Funnel**
        2. Chart Title: **Opportunities Funnel** 
        3. Value: **Sum of Amount**
    14. Click the ⚙️ in the upper right of the chart.
    15. Click **Save & Run**.
    16. Name the report **Opportunities by Stage** and click **Save**.

### **3D.  Create a Chatter Stream**

Chatter Streams is where your users can create curated lists of records and people to follow. Create up to five Chatter streams that combine posts from different feeds and different feed types. Combine feeds from people, groups, and records, like your accounts, opportunities, and cases.


1. Click the **down arrow** next to **Opportunities**  in the items list or whichever object is currently displayed and click on **Chatter**.

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

That's it! Your users should have a good handle on all of these features after you show them how to be more productive in Lightning Experience!




<div class="row" style="margin-top:40px;">
    <div class="col-sm-12">
        <a href="Exercise_d2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
        <a href="Exercise_d4.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
</div>
