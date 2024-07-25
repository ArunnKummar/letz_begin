sap.ui.define(["sap/ui/core/mvc/Controller"],
function(Controller){
	return Controller.extend("googleMap.controller.map",{
		oMap:null,
		
		onAfterRendering:function(){
			if(this.oMap === null){
				this.oMap = new google.maps.Map(document.getElementById("maaap"),{
					zoom:10,
					center:{lat:12.920754902078146, lng: 77.52615266626353}  //Cordinates of Bengaluru
				});
			}
		},
		
		onSearch:function(oEvent){
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
					that.oMap.setCenter(loc);
					
					new google.maps.Marker({
						map:that.oMap,
						title:query,
						position:loc
					});
				}
			});
		}
	});
});
