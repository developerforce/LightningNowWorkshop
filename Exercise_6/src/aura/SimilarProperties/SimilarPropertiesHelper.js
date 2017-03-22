({
    getProps : function(component) {
        var recId = component.get("v.recordId");
        var compValue = component.get("v.searchCriteria");
        var action = component.get("c.getSimilarProperties");
        action.setParams({
            recordId: recId,
            searchCriteria: compValue
        });
        action.setCallback(this, function(response){
            var res = response.getReturnValue();
            component.set("v.similarProperties", res);
        });
        $A.enqueueAction(action);
    }
})