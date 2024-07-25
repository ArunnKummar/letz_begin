sap.ui.define([
	"fiori/controller/baseController", "sap/m/MessageBox", "sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("fiori.controller.view3", {
		
		
		vi4:function(){
			var oApp = this.getAppObject();
			oApp.to("idView2");
		},
		
		onAcceptPop:function(choice){
			if(choice === "OK")
			{
				MessageToast.show("Accepted");
			}
			else
			{
				MessageToast.show("Cancelled");
				var oIcon = this.getView().byId("iconBar");
				oIcon.setVisible(false);
			}
		},
		
		onAccept:function(){
			MessageBox.confirm("Are you sure you want to accept?",{
				title:"Accurance",
				onClose:this.onAcceptPop.bind(this)
			});
		},
		
		onCancel:function(){
			MessageToast.show("Cancelled");
			
			var oIcon = this.getView().byId("iconBar");
			oIcon.setVisible(false);
		},
		
		filterPopup:null,
		f4Popup:null,
		f4InputField:null,
		
		onF4Confirm:function(oEvent){
			var oItem = oEvent.getParameter("selectedItem");
			sap.ui.getCore().byId(this.f4InputField).setValue(oItem.getTitle());
		},
		
		onFilter:function(){
			/*this two line creates a popup*/
			this.filterPopup = new sap.ui.xmlfragment("fiori.fragments.popup",this);
			this.getView().addDependent(this.filterPopup);
			this.filterPopup.bindAggregation("items",{
				path:"/country",
				template:new sap.m.StandardListItem({
					title:"{name}",
					description:"{code}"
				})
			});           
			this.filterPopup.open();
		},
		
		onF4Help:function(oEvent){
			this.f4InputField = oEvent.getSource().getId();
			this.f4Popup = new sap.ui.xmlfragment("fiori.fragments.popup",this);
			this.getView().addDependent(this.f4Popup);
			this.f4Popup.bindAggregation("items",{
				path:"/country",
				template:new sap.m.StandardListItem({
					title:"{name}",
					description:"{code}"
				})
			});
			this.f4Popup.attachConfirm(this.onF4Confirm,this);
			this.f4Popup.open();
		}
		
		
		
		
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf fiori.view.view3
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf fiori.view.view3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf fiori.view.view3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf fiori.view.view3
		 */
		//	onExit: function() {
		//
		//	}

	});

});
