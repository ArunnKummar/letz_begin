sap.ui.jsview("mvcStart.view.lead", {
	getControllerName:function(){
		return "mvcStart.controller.lead";
	},
	
	createContent:function(oController){
		var bt = new sap.m.Button("butt",{
			text:"pls don't touch me",
			press:oController.diss
		});
		
		var inp1 = new sap.m.Input("iI1",{
			width:"150px",
			placeholder:"Enter name"
		});
		
		var inp2 = new sap.m.Input("iI2",{
			width:"150px",
			type:sap.m.InputType.Password,
			placeholder:"Enter password"
		});
		
		var simp = new sap.ui.layout.form.SimpleForm({
			content:[inp1,inp2]
		});
		
		var bt111 = new sap.m.Button("butt111",{
			text:"SignUp",
			press:oController.check
		});
		
		var inp3 = new sap.m.Input("iI3",{
			width:"150px",
			type:sap.m.InputType.Date
		});
		
		var bt2 = new sap.m.Button("butt2",{
			text:"login2",
			type:sap.m.ButtonType.Up
		});
		
		var bt3 = new sap.m.Button("butt3",{
			text:"login3",
			type:sap.m.ButtonType.Transparent
		});
		
		var bt4 = new sap.m.Button("butt4",{
			text:"login4",
			type:sap.m.ButtonType.Success
		});
		
		var bt5 = new sap.m.Button("butt5",{
			text:"login5",
			type:sap.m.ButtonType.Attention
		});
		
		var bt6 = new sap.m.Button("butt6",{
			text:"login6",
			type:sap.m.ButtonType.Critical
		});
		
		var bt7 = new sap.m.Button("butt7",{
			text:"login7",
			type:sap.m.ButtonType.Neutral
		});
		
		var bt8 = new sap.m.Button("butt8",{
			text:"login8",
			type:sap.m.ButtonType.Negative
		});
		
		var bt9 = new sap.m.Button("butt9",{
			text:"login9",
			type:sap.m.ButtonType.Reject
		});
		
		var lL1 = new sap.m.Label("lLL1",{
			text:"OK",
			type:sap.m.LabelDesign.Standard
		});
		
		return [bt,bt111,inp3,bt2,bt3,bt4,bt5,
		bt6,bt7,bt8,bt9,lL1,simp];
	}
});
