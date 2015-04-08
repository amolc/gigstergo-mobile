starter
	.directive("biddingProjects",[
		function directive(){
			return{
				"restrict":"A",
				"template":"<div class='user-bids'>"+
								
								"<div>"+
									"<img src='./img/bidding-page/profile-icon.png' class='profile-icon'>"+
									"<span class='user-name'>Hemlock</span>"+
								"</div>"+

								"<div class='content-bid'>"+
									
									"<div class='content-div'>"+
										"<p>"+
											"<span class='content-span'>"+"Part Time Helper in Tampines $S 50"+"</span>"+
										"</p>"+
									"</div>"+
									"<div class='border-line'></div>"+
									"<p class='content'><span class='content-desc'>Looking for a caterer to prepare tapas for a corporate event for a boat party for approximately 30 people in July this year.</span></p>"+


						 			"<div  class='social-networks'>"+
										"<ul>"+
											"<li>"+
												"<a href=''><img src='./img/bidding-page/facebook.png'></a>"+
												"<a href=''><img src='./img/bidding-page/g+.png'></a>"+
												"<a href=''><img src='https://s3.amazonaws.com/upload.uxpin/files/69648/76760/1426836167_bubble_chat_comment_message_outline_talk-green.png'></a>"+
												"<a href=''>"+
													"<div class='bid-button'>"+
														"<p class='bid-text'>Bid</p>"+
													"</div>"+
												"</a>"+
											"</li>"+
										"</ul>"+
									"</div>"+

						 		"</div>"+
								
								"<h1><label style='color:transparent'>asd</label><div class='bidding-border' style='margin-top:-37px'></div></h1>"+	

							"</div>",
				"scope": true,
				"controller": "biddingProjectsCtrl",
				"link": function onLink( scope, element , attrs ){
					
				}
			}
		}


	]);