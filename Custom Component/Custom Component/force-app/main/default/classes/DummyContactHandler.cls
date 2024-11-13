public without sharing class DummyContactHandler {
    public DummyContactHandler() {

    }


    @AuraEnabled
    public static Contact dummContactCreateMethod(
        String s1,
        String s2,
        String s3,
        String s4,
        String s5,
        String s6,
        String s7,
        String s8,
        String s9,
        String s10,
        List<String> li){
        System.debug(s1);
        System.debug(s2);

        System.debug(s3);
        System.debug(s4);

        System.debug(s5);
        System.debug(s6);

        System.debug(s7);
        System.debug(s8);

        System.debug(s9);
        System.debug(s10);

        System.debug(li);

        String str = '';

        for(Integer i =0;i<li.size();i++){
            if( i != li.size()-1){
                str = str + li.get(i)+', ';
            }else{
                str = str + li.get(i)+'.';
            }
            
        }
        System.debug(str);



        // fetch date from s8 : 2024-02-03T00:00:00.000Z

        Account communityAccount = [SELECT Id FROM Account where Name = 'Developers' LIMIT 1];
        System.debug(communityAccount);
        Contact newContact = new Contact();
    
        newContact.AccountId = communityAccount.ID;
        newContact.FirstName = s1;
        newContact.LastName = s2;
        newContact.MailingCity = s4;
        newContact.Phone = s3;
        newContact.email = s5;
        newContact.Opt_in_for_Notifications__c = s6;
        newContact.Aadhar__c = s7;
        newContact.Guardian_Name__c = s9;
        newContact.Guardian_Adhaar_Number__c = s10;
        newContact.Roles_Interested_In__c = str;    
        insert newContact;


        return newContact;
    }

    @AuraEnabled
    public static boolean isEmailExist(String validEmail){
        System.debug('email : '+validEmail);
        List<User> li = [Select Id,Name,UserName from User where username = :validEmail];
        return li.size()>0 ? true : false;
    }


    @AuraEnabled
    public static void saveImgFile(String fileName, String fileType, String base64Body) {
        Blob fileBody = EncodingUtil.base64Decode(base64Body);
        
        ContentVersion cv = new ContentVersion();
        cv.Title = fileName;
        cv.PathOnClient = fileName;
        cv.VersionData = fileBody;
        cv.IsMajorVersion = true;
        insert cv;
        
        // if you have to send it via REST Api you could use
        // request.setBodyAsBlob(fileBody);
    }


}