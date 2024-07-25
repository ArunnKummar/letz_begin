sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("fiorilike.controller.view3", {
		onInit:function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//this.oRouter = this.getOwnerComponent().getRouter();
		},
		
		
		onRenderMap:function(){
			var map;
				
			function initMap(){
				map = new google.maps.Map(document.getElementById('map'),{
					center:{
						lat:12.920754902078146,
						lng:77.52615266626353
					},
					zoom:10
				});
			}
			initMap();
		},
		
		onSearchMap:function(oEvent){
			var query = oEvent.getParameter("query");
			var oGeoCoder = new google.maps.Geocoder();
			var that = this;
			oGeoCoder.geocode({address: query},
			function(results, status){
				if(status === "OK"){
					var firstItem = results[0];
					var loc = {
						lat:firstItem.geometry.location.lat(),
						lng:firstItem.geometry.location.lng()
					};
					that.map.setCenter(loc);
					
					new google.maps.Marker({
						map:that.map,
						title:query,
						position:loc
					});
				}
			});
		},
		
		oLogout:function(){
			MessageBox.confirm("Are you sure dear!?",{
				title:"Confirmation",
				onclose:this.oncls.bind(this)
			});
			this.oRouter.navTo("log_pg");
		},
			
		oLogin:function(){
			MessageToast.show("congratulations!");
		}

	});

});
