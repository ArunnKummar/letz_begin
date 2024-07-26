sap.ui.define(
	["sap/ui/core/mvc/Controller", "valo/model/data_global"],
	function(valooo, lets){
		return valooo.extend("valo.controller.game",{
			onInit:function(){
				var oJson=new lets.createModel();
				sap.ui.getCore().setModel(oJson);
			},
			
			diss:function(){
				var oM = sap.ui.getCore().getModel();
				oM.setProperty("/profile/disable",false);
			},
			
			onRowSelect:function(insert){
				var eleAdd = insert.getParameter("rowContext");
				var oSimForm = this.getView().byId("idSF");
				oSimForm.bindElement(eleAdd.sPath);
			},
			
			idInsert:function(){
				var oModel = sap.ui.getCore().getModel();
				var valoo = oModel.getProperty("/val");
				var valTab = oModel.getProperty("/valo");
				valTab.push(valoo);
				oModel.setproperty("/valo");
			}
		});
	});
