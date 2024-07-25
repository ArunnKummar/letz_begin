sap.ui.define(
	["fiorilike/controller/baseController", "sap/m/MessageBox", "sap/m/MessageToast"],
	function(controller, MessageBox, MessageToast){
		return controller.extend("fiorilike.controller.view2",{
			onInit:function(){
					//this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					this.oRouter = this.getOwnerComponent().getRouter();
					this.oRouter.attachRoutePatternMatched(this.dataBinnd,this);
			},
			
			//to bind the element in this view
			dataBinnd:function(oParams){
				var sPath = oParams.getParameters().arguments.valoId;
				sPath = "/valorant/" + sPath;
				this.getView().bindElement(sPath);
			},
				
			oncls:function(choice){
				if(choice === "OK")
				{
				
					MessageToast.show("Goodbye dear!");	
				}
			},
			
			onMap:function(){
				this.oRouter.navTo("V1_to_V3");
			},
			
			oLogout:function(){
				MessageBox.confirm("Are you sure dear!?",{
					title:"Confirmation",
					onclose:this.oncls.bind(this)
				});
				
			/*	var oApp=this.getAppObject();
				oApp.to("id_empty");*/
				this.oRouter.navTo("log_pg");
				
			},
			
			oLogin:function(){
				MessageToast.show("congratulations!");
			},
			
			popUp:null,
			onPopUp:function(){
				this.popUp = new sap.ui.xmlfragment("fiorilike.fragments.popup",this);
				this.getView().addDependent(this.popUp);
				this.popUp.bindAggregation("items",{
					path:"/valorant",
					template:new sap.m.StandardListItem({
						title:"{agentName}",
						description:"{roleType}"
					})
				});
				this.popUp.open();
			},
			
			inputField:null,
			onConfirm:function(oEvent){
				var oItem = oEvent.getParameter("selectedItem");
				sap.ui.getCore().byId(this.inputField).setValue(oItem.getDescription());
			},
			onHelp:function(oEvent){
				this.inputField = oEvent.getSource().getId();
				this.popUp = new sap.ui.xmlfragment("fiorilike.fragments.popup",this);
				this.getView().addDependent(this.popUp);
				this.popUp.bindAggregation("items",{
					path:"/valorant",
					template:new sap.m.StandardListItem({
						title:"{agentName}",
						description:"{roleType}"
					})
				});
				this.popUp.attachConfirm(this.onConfirm,this);
				this.popUp.open();
			},
			
			onOnUP:function(){
				sap.m.MessageBox.alert("Here I am");
			}
			
			
			
		});
	});
