sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(baseController){
		return baseController.extend("fiorilike.contoller.baseController",{
			getAppObject:function(){
				return sap.ui.getCore().byId("id_start--id_mainView");
			}
			
		});
	});
