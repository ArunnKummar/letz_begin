sap.ui.define(
	["fiori/controller/baseController", "fiori/model/global_model"],
	function(Controller, lets){
		return Controller.extend("fiori.controller.app",{
			onInit:function()
			{
				var oJson=new lets.createModel();
				sap.ui.getCore().setModel(oJson);
				
				var oApp = this.getView().byId("myApp");
				
				var oView1 = new sap.ui.view({
					id:"idView1",
					viewName:"fiori.view.view1",
					type:sap.ui.core.mvc.ViewType.XML
				});
				
				var oView2 = new sap.ui.view({
					id:"idView2",
					viewName:"fiori.view.view2",
					type:"XML"     
				});
				
				var oView3 = new sap.ui.view({
					id:"idView3",
					viewName:"fiori.view.view3",
					type:"XML"     /*"type" can be written in two ways*/
				});
				
				var oInitial = new sap.ui.view({
					id:"idView0",
					viewName:"fiori.view.initial",
					type:sap.ui.core.mvc.ViewType.XML
				});
				
				oApp.addDetailPage(oInitial);
				oApp.addMasterPage(oView1);
				oApp.addMasterPage(oView2);
				oApp.addDetailPage(oView3);
				oApp.setInitialDetail("idView0"); 
			}
		});
	});
