sap.ui.define(["sap/ui/core/UIComponent"],
function(UIComponent){
	return UIComponent.extend("fiorilike.Commponent",{
		
		metadata:{
			"manifest":"json"
		},
		init:function(){
			UIComponent.prototype.init.apply(this);
			
			var oRouter = this.getRouter();
			oRouter.initialize();
		},
		/*createContent:function(){
			var fla = new sap.ui.view({
				id:"id_start",
				viewName:"fiorilike.view.main",
				type:"XML"
			});
			return fla;
		},*/
		destroy:function(){}
	});
});
