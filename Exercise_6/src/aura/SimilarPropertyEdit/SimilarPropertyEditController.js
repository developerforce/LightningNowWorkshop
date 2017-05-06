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
        var tempRec = component.find("editRecord");
        tempRec.saveRecord($A.getCallback(function(result) {
            console.log(result.state);
            var event = $A.get("e.c:recordUpdated");
            event.fire();
        }));
        helper.showHideModal(component);
    }
})
