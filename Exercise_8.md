---
layout: module
exercise: Exercise 8
title: Using Lightning Components in Visualforce Pages
---

### Objectives

In this exercise, you will learn how to:
* Package Lightning Components for use outside the Lightning Experience
* Use Lightning Components in Visualforce Pages

### Step 1 - Create the container app

1. In the Developer Console, create a new Lightning Application named **PictureGalleryApp**.

1. Implement the app as follows:

    ```html
    <aura:application access="GLOBAL" extends="ltng:outApp"> 
        <aura:dependency resource="c:HelloWorld" />
        <aura:dependency resource="c:PictureCarousel" />
    </aura:application>
    ```

1. Save the file.    
    
### Step 2 - Create the Visualforce page

1. In the Developer Console, create a new Visualforce page named **PictureGallery**.
1. Implement the page as follows:

    ```html
    <apex:page standardStylesheets="false" applyBodyTag="false">
        
        <apex:slds />
        
        <style>
            #content {display:flex}
            #carousel {height:400px;width:600px;padding-left:12px}
        </style>
        
        <div class="slds-scope">    
        
            <p>My awesome Lightning Components running in Visualforce...</p> 
            
            <div id="content">
                <div id="greeting" />
                <div id="carousel" />
            </div>
    
        </div>
            
     </apex:page>
     ```
    
1. In Setup, create a tab called **PictureGallery** for the PictureGallery Visualforce page.
    
1. Add the tab to the **Dreamhouse Classic** app.
    
1. Go back to the **Dreamhouse Classic** app, and click the newly created **PictureGallery** tab to test the page.  

### Step 3 - Load the HelloWord component in the Visualforce page 

1. Go back to the PictureGallery Visualforce page in the Developer console.

1. Add the `<apex:includeLightning />` tag immediately after the opening `<apex:page>` tag.
    
1. Add a `<script> ... </script>` tag immediately **before** the closing `</apex:page>` tag with the following script to instantiate the **HelloWorld** component.
    
    ```html
    <script>
        $Lightning.use("c:PictureGalleryApp", function() {
            $Lightning.createComponent("c:HelloWorld",
                {},
                "greeting",
                function(cmp) {
                    console.log("HelloWorld component loaded");
                }
            );
        });
    </script>
    ```

1. Save the file.

1. Go back to the **PictureGallery** tab and reload the page.
  
### Step 4 - Load the PictureCarousel component in the Visualforce page 

1. Go back to the PictureGallery Visualforce page in the Developer console.

1. Add the following code immediately after the existing `$Lightning.createComponent` block (within the `$Lightning.use("c:PictureGalleryApp"` callback function) to instantiate the **PictureCarousel** component.   
    
    ```js
    $Lightning.createComponent("c:PictureCarousel",
        {slides: [
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/houses/living_room.jpg',
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/houses/eatinkitchen.jpg',
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/houses/kitchen.jpg'
        ]},
        "carousel",
        function(cmp) {
            console.log("Carousel component loaded");
        }
    );
    ```

1. Save the file.

1. Go back to the **PictureGallery** tab and reload the page.

1. Switch to **Salesforce Classic**, click the **Picture Gallery** tab. The Lightning Components are running in a Visualforce page inside Salesforce Classic.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="Exercise_7.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="next.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
