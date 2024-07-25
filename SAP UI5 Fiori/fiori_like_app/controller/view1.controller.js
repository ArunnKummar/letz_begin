sap.ui.define(
	["fiorilike/controller/baseController"],
	function(controller){
	return controller.extend("fiorilike.controller.view1",{
		onInit:function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		/*oLogout:function(){
			var oApp=this.getAppObject();
			oApp.to("id_welcome");
			
			this.oRouter.navTo("loginPage");
		},*/
		
		onSearch:function(oEvent){
			var queryString = oEvent.getParameter("query");
			if(!queryString){
				queryString = oEvent.getParameter("newValue");
			}
			var oFilter1 = new sap.ui.model.Filter("agentName",sap.ui.model.FilterOperator.Contains, queryString);
			var oFilter2 = new sap.ui.model.Filter("roleType",sap.ui.model.FilterOperator.Contains, queryString);
			var oMainFilter = new sap.ui.model.Filter({
				filters:[oFilter1,oFilter2],
				and:false });
			var aFilter = [oMainFilter];
			var oList = this.getView().byId("id_list");
			oList.getBinding("items").filter(aFilter);
		},
		
		onView2:function(){
			/*var oApp=this.getAppObject();
			oApp.to("id_view2");*/
			this.oRouter.navTo("V1_to_V2");
		},
		
		onView3:function(){
			this.oRouter.navTo("V1_to_V3");
		},
		
		onSelect:function(oEvent){
			var oItem = oEvent.getParameter("listItem");
			var sPath = oItem.getBindingContextPath();
			/*var oApp = this.getAppObject();
			var oView = oApp.getDetailPages()[1];
			oView.bindElement(sPath);
			this.onView2();*/
			var sItemIndex = sPath.split("/")[sPath.split("/").length-1];
			this.oRouter.navTo("V1_to_V2",{
				valoId:sItemIndex
			});
			console.log(sPath);
		}
		
	
		
	});
});
