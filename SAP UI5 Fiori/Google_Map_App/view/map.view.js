sap.ui.jsview("googleMap.view.map",{
	getControllerName:function(){
		return "googleMap.controller.map";
	},
	createContent:function(oController){
	
	sap.ui.core.Control.extend("googleMap",{
		metadata:{},
		init:function(){},
		renderer:function(oRm,oControl){
			oRm.write("<div id='maaap' style='width:80%;height:650px;border:2px solid green'></div>");
		}
	});
	
	var oPage = new sap.m.Page({
		title:"Google Map",
		content:[
			new sap.m.SearchField({search:[oController.onSearch, oController]}),
			new googleMap()
			]
	});
	
	var app = new sap.m.App({
		initialPage:"oPage"
	});
	
	app.addPage(oPage);	
	return app;
	}	
});
