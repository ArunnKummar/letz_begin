function laugh(){
					$(".hH").fadeOut(1000,function(){
						$(".hH").fadeIn(1000,function(){
							laugh();	
						});
					});
				}
