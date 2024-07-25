sap.ui.define(
	["fiorilike/controller/baseController", "sap/m/MessageToast"],
	function(Controller,MessageToast){
	return Controller.extend("fiorilike.controller.welcome",{
		onInit:function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		oLogin:function(){
			var in1 = sap.ui.getCore().byId("inp1");
			var in2 = sap.ui.getCore().byId("inp2");
			
			if(in1 === "arun" && in2 === "arun@123")
			{
				MessageToast.show("Login successfull");
			}
			else
			{
				MessageToast.show("Login failed");
			}
			
			/*var oApp=this.getAppObject();
			oApp.to("id_view1");*/
			
			this.oRouter.navTo("wlm_to_V1");
		}
		
	});
});
