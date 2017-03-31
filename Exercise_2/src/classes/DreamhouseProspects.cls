public with sharing class DreamhouseProspects {
    public String sortOrder {set; get;}


    public Boolean getIsClassic() {
        return (UserInfo.getUiThemeDisplayed() == 'Theme3' && ApexPages.currentPage().getParameters().get('beLightning') == null);
    }


    public List<Lead> getLeads() {
      if (sortOrder == null) {
          sortOrder = 'LastName';
          }
          //return (List<Lead>) setCtrller.getRecords();

          return Database.query('SELECT Description,Email,FirstName,Id,LastName,Phone FROM Lead WHERE Company=\'Dreamhouse\' ORDER BY '+sortOrder);
    }

    public pageReference sortList() {
        getLeads();
        return null;
    }
}
