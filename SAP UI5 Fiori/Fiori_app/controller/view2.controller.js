sap.ui.define(
	["fiori/controller/baseController"],
	function(Controller){
		return Controller.extend("fiori.controller.view2",{
			vi2:function(){
			/*var oApp = this.getAppObject();
			oApp.to("idView1");
			
			OR*/
			this.getAppObject().to("idView1");	
		},
		vi3:function(){
			/*var oApp = this.getAppObject();
			oApp.to("idView1");
			
			OR*/
			this.getAppObject().to("idView3");	
		},
		
		onSearch:function(oEvent){
			var queryString = oEvent.getParameter("query");
			//creating suggestion//
			if(!queryString)
			{
				queryString = oEvent.getParameter("newValue");	
			}
			var oFilter = new sap.ui.model.Filter("cityName", sap.ui.model.FilterOperator.Contains, queryString);
			var oFilter2 = new sap.ui.model.Filter("state", sap.ui.model.FilterOperator.Contains, queryString);
			var oMainFilter = new sap.ui.model.Filter({
				filters:[oFilter, oFilter2],
				and:false
			});
			var aFilter = [oMainFilter];
			var oList = this.getView().byId("myList");
			oList.getBinding("items").filter(aFilter);
		}, 
		
		onPressItem:function(oEvent){
			var oItem = oEvent.getParameter("listItem");
			var sPath = oItem.getBindingContextPath();
			var oApp = this.getAppObject();
			var oView3 = oApp.getDetailPages()[1];
			oView3.bindElement(sPath);
			this.vi3();
			console.log(sPath);
			
		}
		
		});
	});
