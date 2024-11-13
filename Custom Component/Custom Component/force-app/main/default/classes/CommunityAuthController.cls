public without sharing class CommunityAuthController {
    public CommunityAuthController() {

    }

    @AuraEnabled
    public static string doLogin(String username, String password){
        try {
            String startUrl = 'https://hexaviewpvtlmt4-dev-ed.develop.my.site.com/developers/s';
            ApexPages.PageReference pageRef = Site.login(username, password, startUrl);
    
            if(pageRef != null) {
                 return pageRef.getUrl();
            }
    
            throw new CalloutException();
        } catch (Exception e) {
            System.debug('e.getMessagelogin+   '+e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
        // Remove the unreachable return statement
        // return '';
    }


   

  
}