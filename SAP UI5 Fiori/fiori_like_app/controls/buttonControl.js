sap.ui.define([],function(){
	sap.m.Button.extend("fiorilike.controls.buttonControl",{
		metadata:{
			events:{
				"onUp":{}
			}
			
		},
		init:function(){},
		renderer:{},
		onmouseover:function(){
			this.fireOnUp();
		}
	});
});
