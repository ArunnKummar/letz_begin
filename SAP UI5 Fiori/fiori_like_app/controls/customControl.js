sap.ui.define([],function(){
	sap.ui.core.Control.extend("fiorilike.controls.customControl",{
		metadata:{
			properties:{
				"mario":"",
				"coloor":"",
				"bdr":""
			}
		},
		init:function(){},
		renderer:function(oRm,oControl){
			oRm.write("<h1>This is Custom control baby</h1>");
			oRm.write("<h1>" + oControl.getMario() + "</h1>");
			
			//oRm.write("<h1 style='color:"  + oControl.getColor() + "'>" + oControl.getMario() + "</h1>");
			oRm.write("<h1");
			oRm.addStyle("color", oControl.getColoor());
			oRm.addStyle("border", oControl.getBdr());
			oRm.writeStyles();
			oRm.write(">" + oControl.getMario() + "</h1>");
			
		}
	});
});
