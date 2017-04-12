---
layout: module
exercise: Exercise 7
title: Using Lightning Components Everywhere
---

### Exercise Goals

* Understand how to use Lightning Components as Quick Actions
* Add Lightning Components to the Utility Bar

### Step 1 - Add more Lightning Components to the Page

> If you didn't upgrade your **Dreamhouse Classic** app to **Dreamhouse Lightning**, you need to do that now.
> 
> 1. Click the Setup icon and choose Setup.
> 
> 2. Click on **Apps** and choose **App Manager**.
> 
> 3. Click the Actions dropdown for the **Dreamhouse Classic** app and click **Upgrade**. Name the new application **Dreamhouse Lightning** and click **Save** (this may take a minute to complete).

1. Navigate to a Property Record Detail page.
2. Click the Setup icon and choose **Edit Page**.
3. Drag the **NeighborhoodExplorer**, **Property Map** and **Picture Gallery** components onto the page and place them in the right-hand column.
4. Explore the components which highlight some of the possibilities with Lightning Components.

### Step 2 - Add a Lightning Component to the Utility Bar
1. Click the Setup icon and choose Setup.
2. Click on **Apps** and choose **App Manager**.
3. Click the Actions dropdown for the **Dreamhouse Lightning** app and click **Edit**.
4. Click the **Utility Bar** section at the top of the screen.
5. Click the **Add** button and scroll down to Mortgage Calculator.
6. Click Save.
7. Reload the Property Record Detail page to see the Mortgage Calculator in the Utility Bar.

### Step 3 - Make a Lightning Component a Quick Action
1. In the Dev Console, choose **File > Open Lightning Resources**.
2. Open the **Mortgage Calculator**.
3. In the component, add `force:lightningQuickActionWithoutHeader` to the **implements** attribute. Don't forget the comma to separate the values from one another.
4. Save the file.
5. In **Setup**, choose **Objects Manager**, then click on the **Property** object.
6. Scroll down to **Buttons, Links and Actions**.
7. Click the **New Action** button.
8. For Action, choose **Lightning Component**.
9. Notice that **MortgageCalculator** is already selected. The list only shows components that have the **force:lightningQuickAction** or **force:lightningQuickActionWithoutHeader** interface.
10. Give the Action a height of 300px.
11. Give the Action a label of **Mortgage Calculator**.
12. Save.
11. Click on the Object Manager and open **Property** object again.
12. Scroll down to the **Page Layouts** section and click on the **Property Layout**.
13. Click the **override the predefined actions** link in the **Salesforce1 and Lightning Experience Actions** section.
14. In the **Property Layout** panel at the top of the page, click the **Salesforce1 and Lightning Actions** item.
15. Drag the Mortgage Calculator to the **Salesforce1 and Lightning Experience Actions** section as the first button.
16. Save the layout.
17. Reload the Property Record Detail page to see the new button.


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="Exercise_8.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
