sap.ui.jsview("queen.view.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf queen.view.main
	 */
	getControllerName: function() {
		return "queen.controller.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf queen.view.main
	 */
	createContent: function(oController) {
		/*var oPage = new sap.m.Page({
			title: "Welcome",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
		*/
		
		var opp = new sap.m.Button("mybut",{
			text:" pls dont touch me",
			press:function(){
				$("#mybut").fadeOut(2000,function(){
					alert("You Bastard");	
				});
			}
		});
		return opp;
		
		
		
		
		
	}

});
