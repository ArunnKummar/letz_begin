sap.ui.define(["sap/ui/core/UIComponent","fiori/controller/baseController", "sap/ui/model/json/JSONModel"],
function(UIComponent, baseController, JSONModel){
	return UIComponent.extend("fiori.Component",{
		metadata:{},
		
		init:function(){
			UIComponent.prototype.init.apply(this, arguments);
			
			/*var oData = {
	            recipient : {
	               name : "fiori"
	            }
	         };
	         var oModel = new baseController(oData);
	         this.setModel(oModel);*/
		},
		
		createContent:function(){
			var ofa = new sap.ui.view({
				id:"idAppView",
				viewName:"fiori.view.app",
				type:"XML"
			});
			return ofa;
		},
		
		destroy:function(){
		
		}
	});
});
