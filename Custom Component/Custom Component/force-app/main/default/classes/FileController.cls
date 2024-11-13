public with sharing class FileController {
    @AuraEnabled(Cacheable=true)
    public static List<ContentVersion> getFiles(List<Id> li){
        return [Select Id,Title from ContentVersion WHERE contentBodyId =: li];
    }

    @AuraEnabled
    public static String updateFiles(Object data){
        List<ContentVersion> filesForUpdate = (List<ContentVersion>) JSON.deserialize(
            JSON.serialize(data),
            List<ContentVersion>.class
        );
        try{
            update filesForUpdate;
            return 'Success: contacts updated successfully';
        }
        catch(Exception e){
            return 'The following exception has occurred: ' + e.getMessage();
        }
    }

}