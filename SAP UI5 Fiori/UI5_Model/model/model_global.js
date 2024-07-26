sap.ui.define(
	["sap/ui/model/json/JSONModel", "sap/ui/model/xml/XMLModel", "sap/ui/model/resource/ResourceModel"],    
	function(jsonModel,XMLModel,ResourceModel){
		return{
			createModel: function(){
				var oValo = new jsonModel();      /*new sap.ui.model.json.JSONModel()*/
				/*created a external json file and linked here using loadData method*/
				oValo.loadData("model/model.json"); 
				return oValo;	
			},
			/*XML model*/
			createXMLModel:function(){
				var xValo = new XMLModel();
				xValo.loadData("model/modelxml.xml");
				return xValo;
			},
			/*Resource model*/
			createResourceModel:function(){
				var oResource = new ResourceModel({
					bundleUrl:"i18n/i18n.properties"
				});
				return oResource;
			}
		};
	}
);
