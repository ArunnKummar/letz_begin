sap.ui.define(
	["sap/ui/core/mvc/Controller", "model/model/model_global", "model/formatter_function/format"],
	function(baseController, gMod, forMat){
		return baseController.extend("model.controller.center",{
			
			formatter:forMat,
			
			onInit: function(){
				/*Calling the reuse method to create model*/			
				var oValo = gMod.createModel();
				sap.ui.getCore().setModel(oValo);   /*this XML type is used maximum times*/
				
				/*XML Model*/
				var xValo = gMod.createXMLModel("/model/modelxml.xml");
				sap.ui.getCore().setModel(xValo,"xmlValo");
				
				/*Resource Model*/
				var oResource = gMod.createResourceModel();
				sap.ui.getCore().setModel(oResource,"i18n");
				
				/*Data binding by JS method i.e using id's */
				/*Syntax 1*/
				var agg = this.getView().byId("idAgent");
				agg.bindValue("/valo/agentType");
				/*or
				this.getView().byId("agTy").bindValue("/valo/agentType");
				*/
				
				/*Syntax 2*/
				this.getView().byId("idMap").bindProperty("value","/valo/favMap");
				
			},
			
			oPlay: function(){
				this.getView().byId("idPlay").bindValue("/valo/gamePlay");
			},
			
			oDisable:function(){
				var dis = sap.ui.getCore().getModel();
				dis.setProperty("/valo/disable", false);
			},
			
			idInsert:function(){
				var oModel = sap.ui.getCore().getModel();
				var valoo = oModel.getProperty("/valo");
				var valTab = oModel.getProperty("/valoTable");
				valTab.push(valoo);
				oModel.setproperty("/valoTable");
			},
			
			onRowSelect:function(oNo){
				var elementAddress = oNo.getParameter("rowContext");
				var oSimpleForm = this.getView().byId("idSF");
				oSimpleForm.bindElement(elementAddress.sPath);
			}
			
			
		});
	}
	);
