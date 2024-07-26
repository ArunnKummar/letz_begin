sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(baseController){
		return baseController.extend("mvcStart.controller.lead",{
			onInit:function(){
				
			},
			
			diss:function(){
				$("#butt").fadeOut(2000,function(){
					alert("woow dude");	
				});
			
				var oCore = sap.ui.getCore();
				var oInp = oCore.byId("iI1");
				alert(oInp.getValue());
			
			},
			
			check:function(){
				var ch1 = sap.ui.getCore().byId("iI1").getValue();
				var ch2 = sap.ui.getCore().byId("iI2").getValue();
				if(ch1 == "arun" && ch2 == "Arun@123")
				{
					alert("Login Sucessful");
				}
				else
				{
					alert("Invalid credientials");
				}
			}
		});
	}
);
