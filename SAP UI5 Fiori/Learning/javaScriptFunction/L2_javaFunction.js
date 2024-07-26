function testing(){
				window.alert("I clicked")
				document.write("What just happend")
			}
				
			function testing2()
			{
				var nName = document.getElementById("nN").value;
				var pPass = document.getElementById("pP").value;
				
				if(nName == "arun" && pPass == "Arun@123")
				{
					document.write("Valid Credentials");
				}
				else
				{
					var lLabel = document.getElementById("lL");
					lLabel.innerText = "Invalid Credentials";
					window.alert("Invalid Credentials");
					blinkEffect();
				}
			}
			
			function blinkEffect(){
				$("#lL").fadeOut(1000, function(){
					$(this).fadeIn(1000, function(){
						blinkEffect();
					});
				});
			}
			
			function danceClick(){
				$("#nN").animate({width:"+10px",height:"+10px"},function(){
					$(this).animate({width:"-10px",height:"-10px"},function(){	
						danceClick();
					});
				});
			}
			
			function danceClick1(){
				$("#nN").animate({width:"+10px",height:"+10px"},function(){
					$(this).animate({width:"-10px",height:"-10px"},function(){	
						danceClick1();
					});
				});
			}
			
			function danceClick2(){
				$("#pP").animate({width:"+10px",height:"+10px"},function(){
					$(this).animate({width:"-10px",height:"-10px"},function(){	
						danceClick2();
					});
				});
			}
			
			function changeColor()
			{
				var chCo = document.getElementsByClassName("box-content");
				
				for(i=0;i<chCo.length;i++)
				{
					chCo[i].style.backgroundColor="black";
					chCo[i].style.color="white";
				}
			}
			
			function changeColor2()
			{
				var chCo = document.getElementsByClassName("box-content");
				
				for(i=0;i<chCo.length;i++)
				{
					chCo[i].style.backgroundColor="green";
					chCo[i].style.color="yellow";
				}
			}
			
			function insert()
			{
				var placeHolder = document.getElementById("aruu");
				var newEle = document.createElement("h3");
				var nodeText = document.createTextNode("Well done");
				newEle.appendChild(nodeText);
				placeHolder.appendChild(newEle);
			}
			
			function insertAnything()
			{
				var placeHolder = document.getElementById("aruuu");
				var newEle = document.createElement("h3");
				var nodeText = document.createTextNode(document.getElementById("enter").value);
				newEle.appendChild(nodeText);
				placeHolder.appendChild(newEle);
			}
			
			function empadd()
			{
				var placehold1 = document.getElementById("taId");
				var placehold2 = document.getElementById("taNa");
				var newElem1 = document.createElement("h4");
				var newElem2 = document.createElement("h4");
				var nodeText1 = document.createTextNode(document.getElementById("id1").value);
				var nodeText2 = document.createTextNode(document.getElementById("id2").value);
				newElem1.appendChild(nodeText1);
				newElem2.appendChild(nodeText2);
				placehold1.appendChild(newElem1);
				placehold2.appendChild(newElem2);				
			}
