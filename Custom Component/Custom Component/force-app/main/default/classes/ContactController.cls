public with sharing class ContactController {
    // wrapper class
    public class Filters {
        @AuraEnabled
        public String searchKey{get;set;}
    }
 
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts(Filters filters){
        String key, whereClause = '';
        String[] criteria = new List<String>{};
 
        if(filters != NULL)
        {
            if(!String.isEmpty(filters.searchKey))
            {
                key = '%' + filters.searchKey + '%';
                criteria.add('Name Like: key');
            }
 
            if(criteria.size() > 0){
                whereClause = 'WHERE ' + criteria[0];
            }
        }
 
        String query = 'SELECT Name, AccountId, Id, FirstName, LastName, Title, Phone, Email FROM Contact ' + whereClause + ' WITH SECURITY_ENFORCED';
        return Database.query(query);
 
    }
 
   
 
 
    @AuraEnabled
    public static String updateContacts(Object data){
        List<Contact> contactsForUpdate = (List<Contact>) JSON.deserialize(
            JSON.serialize(data),
            List<Contact>.class
        );
        try{
            update contactsForUpdate;
            return 'Success: contacts updated successfully';
        }
        catch(Exception e){
            return 'The following exception has occurred: ' + e.getMessage();
        }
    }



    
}