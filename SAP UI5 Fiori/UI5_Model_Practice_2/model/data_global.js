sap.ui.define(
	[],
	function(){
		return{
			createModel:function(){
				var oJson = new sap.ui.model.json.JSONModel();
				oJson.loadData("model/valoData.json");
				return oJson;
			}
		};
	});
