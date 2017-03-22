({
    getRecord: function(component) {
        var tempRec = component.find("editRecord");
        tempRec.set("v.recordId", component.get("v.remoteRecordId"));
        tempRec.reloadRecord();
    },
    toggleDialog: function(component, event, helper) {
        helper.showHideModal(component);
    },
    saveRecord: function(component, event, helper) {
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
        tempRec.saveRecord($A.getCallback(function(result) {
            console.log(result.state);
            var event = $A.get("e.c:recordUpdated");
            event.fire();
        }));
        helper.showHideModal(component);
    }
})