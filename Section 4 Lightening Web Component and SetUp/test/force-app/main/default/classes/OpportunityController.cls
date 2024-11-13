public with sharing class OpportunityController {
   @AuraEnabled
   public static List<Opportunity> getOpportunities(){
       return [SELECT StageName FROM Opportunity];
   }
}