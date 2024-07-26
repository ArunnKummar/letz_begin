sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(cont){
		return cont.extend("mvcStart.controller.side",{
			diss1:function(){
				alert("woow dude");	
			},
			
			vali: function(){
				var nNn = this.getView().byId("ii1").getValue();
				var pPp = this.getView().byId("ii2").getValue();
				
				if(nNn == "james" && pPp == "Bond")
				{
					alert("Welcome 007");
				}
				else
				{
					alert("Error");
				}
			}
		});
	});
