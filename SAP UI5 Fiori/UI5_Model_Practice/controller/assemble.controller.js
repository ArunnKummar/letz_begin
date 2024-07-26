sap.ui.define(
	["sap/ui/core/mvc/Controller", "avenger/model/avengers_global"],
	function(lets, aveng){
		return lets.extend("avenger.controller.assemble",{
			onInit: function(){
				var oAvnIron = new aveng.createModel("model/avenger.json");
				var oAvnCap = new aveng.createModel("model/avenger_capAme.json");	
				
				sap.ui.getCore().setModel(oAvnIron);
				sap.ui.getCore().setModel(oAvnCap, "Captain");
			},
			
			reveal:function(){
				this.getView().byId("id_cName").bindValue("/avnn/charName");
				this.getView().byId("id_hName").bindValue("Captain>/avnn/heroName");		
			},
			
			flip:function(){
				var oMo = sap.ui.getCore().getModel();
				var oMo2 = sap.ui.getCore().getModel("Captain");
				
				sap.ui.getCore().setModel(oMo,"Captain");
				sap.ui.getCore().setModel(oMo2);
			}
		});
	}
);
