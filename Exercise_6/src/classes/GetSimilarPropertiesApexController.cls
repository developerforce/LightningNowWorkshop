public class GetSimilarPropertiesApexController {
    @AuraEnabled
    public static List<Property__c> getSimilarProperties (Id recordId, String searchCriteria) {
        if (searchCriteria == 'Beds') {
            List<Property__c> beds = [
                SELECT Beds__c FROM Property__c WHERE Id=:recordId
            ];
            List<Property__c> properties = getThePropertiesByBeds(recordId, beds[0].Beds__c);
            return properties;
        } else {
            List<Property__c> price = [
                SELECT Price__c FROM Property__c WHERE Id=:recordId
            ];
            List<Property__c> properties = getThePropertiesByPrice(recordId, price[0].Price__c);
            return properties;
        }
    }
    
    private static List<Property__c> getThePropertiesByBeds (Id myProp, Decimal beds) {
        List<Property__c> properties = [
            SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Id != :myProp AND Beds__c = :beds
        ];
        return properties;
    }
    
    private static List<Property__c> getThePropertiesByPrice (Id myProp, Decimal price) {
        List<Property__c> properties = [
            SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Id != :myProp AND Price__c < :price + 100000 AND Price__c > :price - 100000
        ];
        return properties;
    }
}