sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller){
		return Controller.extend("fiori.controller.baseController",{
			/*to reuse the variable*/
			
			getAppObject:function(){
				return sap.ui.getCore().byId("idAppView--myApp");
			}
		});
	});
