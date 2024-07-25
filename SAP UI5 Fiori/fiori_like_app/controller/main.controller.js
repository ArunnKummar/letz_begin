sap.ui.define([
	"fiorilike/controller/baseController", "fiorilike/models/globalValoModel"
], function(Controller, oModel) {
	"use strict";

	return Controller.extend("fiorilike.controller.main", {
		onInit:function(){
			/*var oJson=oModel.createModel();
			sap.ui.getCore().setModel(oJson);
			*/
			
			/*var oMain = this.getView().byId("id_mainView");
			
			var oWelcome = new sap.ui.view({
				id:"id_welcome",
				viewName:"fiorilike.view.welcome",
				type:"XML"
			});
			
			var oView1 = new sap.ui.view({
				id:"id_view1",
				viewName:"fiorilike.view.view1",
				type:"XML"
			});
		
			var oView2 = new sap.ui.view({
				id:"id_view2",
				viewName:"fiorilike.view.view2",
				type:"XML"
			});
			
			var oEmt = new sap.ui.view({
				id:"id_empty",
				viewName:"fiorilike.view.empty",
				type:"XML"
			});
			
			oMain.addMasterPage(oWelcome);
			oMain.addMasterPage(oView1);
			oMain.addDetailPage(oEmt);
			oMain.setInitialDetail("id_empty");
			oMain.addDetailPage(oView2);*/
		}
	});

});
