sap.ui.define(
	[],
	function(){
		return{
			createModel:function(sPath){
				var oAvn = new sap.ui.model.json.JSONModel();
				oAvn.loadData(sPath);
				return oAvn;
			}
		};
	}
);
