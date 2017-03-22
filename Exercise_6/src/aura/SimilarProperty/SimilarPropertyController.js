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