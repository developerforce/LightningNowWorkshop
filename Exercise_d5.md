---
layout: module
exercise: Exercise 5
title: Pilot Readiness & User Access to Lightning Experience
---

## Exercise 5:  Pilot Readiness & User Access to Lightning Experience  

Now that you've seen all the new, cool, and time-saving features Lightning Experience offers, let's walk through the steps you'll need to take to turn it on in your environment.  The first step is to check the readiness of your environment.  We make this super simple by providing two reports: one that shows those areas that will require more time and thought as you transition and the second that shows the readiness of existing Visualforce pages.  There are certain Salesforce Classic features and attributes that are not supported and our goal is to limit issues.  From there, we create a permission set and assign it to those users who need access to Lightning Experience.  

1. **Access the Readiness Report and Visualforce Report Files** 
Not only do we get an email with a link to our two reports, but also we can access them directly from our environment.  Let's take a look at each one to see exactly what they provide.
    1. Click the App Launcher, and click **Files**.
    2. In the **Owned by Me** section, you will see a Visualforce Report PDF and a Lightning Experience Readiness Report PDF.
    3. Click on the **Lightning Experience Report** and it should appear in a preview window.
    4. Scroll through the document to see what is contained within it.
    5. Close the preview when finished.
    6. Click the **Visualforce Report**.
    7. Scroll through the document to see what is contained within it.
    8. Close the preview when finished.
2. **Grant Users Access to Lightning Experience**
    Once Lightning Experience is turned on, create a permission set to control who in your organization can try it out.  You might turn it on for everyone or just a select group.  Either way, a permission set is the way to go.   
    1. In the upper right click the **Gear Icon** and click **Setup**.
    2. In the Quick Find box type **Permission**.
    3. Click on **Permission Sets**.
    4. Click **New**.
        1. Label: **Lightning Experience User**
        2. API Name: **[this field auto-completes]**
        3. License: **--None--**
    5. Click** Save**.
    6. From within the Permission Set, click **System Permissions**.
    7. Click **Edit**.
    8. Check **Lightning Experience User**.
    9. Click **Save**.
    10. Click **Manage Assignments**.
    11. Check the box next to **Chatter Expert**.
    12. Click **Assign**.
    13. Click **Done**.

Congrats, you've now checked the readiness Sales Cloud, turned on Lightning Experience, and granted access.  Now it's time do it for real in your own environment!  Don't be shy, there are lots of resources available to you to help you through the process.



<div class="row" style="margin-top:40px;">
    <div class="col-sm-12">
        <a href="Exercise_d4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
        <a href="Exercise_1.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
</div>
