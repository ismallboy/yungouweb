var CBLFun=null;var CBLPageFun=null;var PagePOPLoginOK=null;var ShareUrl,ShareTitle,SharePic;$(function(){var q=$skin;var s=$www;var C=$("#hidPostID").val();var y=$("#hidIsLogin").val()=="1";var D=$("#em_ReplayCount");var z=$("#b_ReplayCount");var A=$("#commentList");var p=$("#hidCodeID").val();var n=$("#hidSpellbuyProductId").val();var t=$("#resultCount").val();var F=0;if(C<=0){return}var r=function(){OKDialog("\u63d0\u4ea4\u6210\u529f\uff01",140)};var u={cmtErr:"\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57\uff01",repyErr:"\u56de\u590d\u5185\u5bb9\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57\uff01",subFail:"\u63d0\u4ea4\u5931\u8d25\uff01",notMine:"\u4e0d\u80fd\u5bf9\u81ea\u5df2\u56de\u590d\uff01",notrade:"\u4eb2\uff0c\u53c2\u4e0e\u8fc7\u60ca\u559c\u5c31\u53ef\u4ee5\u56de\u590d\u5566\uff01",toofast:"\u4eb2\uff0c\u60a8\u56de\u590d\u9891\u7387\u8fc7\u5feb\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"};var v=function(){try{if(/(msie\s|trident.*rv:)([\w.]+)/.test(navigator.userAgent.toLowerCase())&&parseInt($.browser.version)==6){$.getScript(q+"/js/iepng.js?date=20150214",function(){if(EvPNG!=null&&EvPNG!=undefined){EvPNG.fix(".transparent-png")}})}}catch(a){}};var E=function(){var a=function(){var j=5;var g=false;var G=5;var l=$("#dl_otherget");var k=$("#otherleft");var i=$("#otherright");var h={FIdx:1,EIdx:j,CodeID:p,SIZE:5};var H=function(){var J="pageNo="+h.FIdx+"&pageSize="+h.EIdx+"&productId="+h.CodeID+"&shareId="+n;return J};var f=function(){if(g){return}g=true;l.children("dd").remove();l.append('<div class="other-loading"><i></i></div>');setTimeout(function(){$.ajax({url:"/shareShow/productOtherWinUser.action",data:H(),success:function(K){if(K!=null){h.SIZE=K.length;var L=K;var N="";for(var M=0;M<L.length;M++){N+="<dd>";N+='<cite class="fl"><a href="/u/'+L[M].userId+'.html" title="'+L[M].userName+'" target="_blank"><img src="'+L[M].userFace+'"><s class="transparent-png"></s></a></cite>';N+='<span class="fl">';N+='<p><em class="f-tran-prev"><a href="/u/'+L[M].userId+'.html" title="'+L[M].userName+'" target="_blank">'+L[M].userName+"</a></em>\u83b7\u5f97\u4e86\u7b2c"+L[M].productPeriod+"\u671f</p>";if(L[M].shareStatus=="2"){N+='<a href="/shareShow/'+L[M].shareId+'.html" class="link-btn see-btn" >\u67e5\u770b\u6652\u5355</a>'}else{N+='<a href="javascript:;" class="link-btn">\u6682\u672a\u6652\u5355</a>'}N+="</span>";N+="</dd>"}l.children("div.other-loading").remove();l.append(N);if(K.length>=G){i.removeClass("other-right-none")}else{i.addClass("other-right-none")}if(h.EIdx<=j){k.addClass("other-left-none")}else{k.removeClass("other-left-none")}g=false}}});v()},200)};var I=function(){h.FIdx-=1;h.EIdx-=j;f()};var m=function(){h.FIdx+=1;h.EIdx+=j;f()};k.bind("click",function(){if(h.EIdx>j){I()}});i.bind("click",function(){if(h.SIZE>=G){m()}});f()};a();var e=function(){var i="postHits";var h=w(i);if(h==null||h==""){h=","}var j=$("#p_xianmu");var g=parseInt(j.find("cite").html());var f=function(){$.ajax({url:"/shareShow/upShareInfo.action?shareId="+C,type:"post",data:"string",success:function(l){if(l=="true"){h=h+C+",";o(i,h,1);k()}}});var k=function(){j.addClass("u-xianmu-click");var m=j.find("img");var K=m.width();var J=m.height();var H=m.offset().left;var l=m.offset().top;m.hide();var I=$('<img style="display: none" src='+m.attr("src")+">").prependTo("body");I.css({position:"absolute",left:H+"px",top:l+"px",width:K,height:J,"z-index":9999}).show();I.animate({width:K*2,height:J*2,left:H-K/2,top:l-J/2,opacity:0},700,function(){I.remove();j.find("cite").html(g+1);j.removeClass("u-xianmu-click").addClass("u-xianmu-past").find("em").html("\u5df2\u7fa1\u6155")})}};if(h.indexOf(","+C+",")>=0){j.addClass("u-xianmu-past").find("em").html("\u5df2\u7fa1\u6155")}else{j.bind("click",function(){if(h.indexOf(","+C+",")>=0){return}f()})}};e();var b=function(f){return f.replace(/&/ig,"&amp;").replace(/</ig,"&lt;").replace(/>/ig,"&gt;").replace(/\[(\/)?(b|br)\]/ig,"<$1$2>").replace(/\[s:(\d+)\]/ig,'<img src="http://skin.1yyg.com/Images/Emoticons/$1.gif" alt="" />').replace(/\[url=([^\]]*)\]([^\[]+)\[\/url\]/ig,'<a href="$1" target="_blank" class="blue">$2</a>').replace(/\s{2}/ig,"&nbsp;&nbsp;")};var c=function(){var j="";var m="/Images/defaultUserFace.png";var Q=$("#hidUserFace").val();var T=$("#hidUserWeb").val();var l=$("#bottomComment");var L=new popLogin();var f=w("userId");var i=function(G){PagePOPLoginOK=function(){y=true;L.hide();G();K()};L.show()};var R=function(G){if(y){G()}else{i(G)}};this.checkUserLoginFunEx=function(G){R(G)};var K=function(){l.find("a[name='replyLoginBtn']").click();A.find("input[name='replyDataState'][value='1']").val("0");A.find("a[name='replyLoginBtn']").click()};var N=function(G){if(f==null){G.append('<img name="imgUserPhoto" src="'+m+'" alt="" /><i class="transparent-png"></i>');return}if(Q!=m){G.append('<a target="_blank" href="'+s+"/u/"+T+'.html"><img name="imgUserPhoto" src="'+Q+'" alt="" /><i class="transparent-png"></i></a>')}else{if(f!=null){G.append('<a target="_blank" href="'+s+"/u/"+T+'.html"><img name="imgUserPhoto" src="'+Q+'" alt="" /><i class="transparent-png"></i></a>')}}};var P=function(I,H){var G="";if(f!=null){var G='<div name="InputBox" class="input-comment clrfix">';G+='<div name="userFace" class="input-pic fl"></div>';G+='<div class="input-box fl">';G+='<div name="comment-title" class="from-to-close"  style="display:none;"><span></span><a class="delete-close" href="javascript:"></a></div>';G+='<div class="textCon ke-container ke-container-simple"><textarea  class="ke-edit" id="replyTA'+I+H+'" name="replyTA" style="height:98px;padding:5px;">\u8bf4\u70b9\u4ec0\u4e48\u5427\uff1f</textarea><b><s></s></b>';G+='<div class="Comment_button"><div class="Comment_but"><a class="reply_unbotton disBtn" href="javascript:;" id="btnSubmitMsg">\u63d0\u4ea4</a></div><div class="gray6" id="wordNumber"><em class="orange">0</em>/150</div></div>';G+="</div>";G+="</div>";G+="</div>"}else{G+='<div class="not-login clrfix">';G+='<div name="userFace" class="input-pic fl">';G+="</div>";G+='<div class="point-box fl gray6">';G+='\u8bf7\u60a8<a href="javascript:;" name="replyLoginBtn">\u767b\u5f55</a>\u6216<a href="/register/index.html?forward='+escape(location.href)+'">\u6ce8\u518c</a>\u540e\u518d\u8bc4\u8bba';G+="<b><s></s></b>";G+="</div>";G+="</div>"}return G};var S=function(){var H=function(W){var O=false;if(W.length>0&&W.css("display")=="block"){O=true}return O};var V=function(O){var W="<li>";W+='<div class="input-pic fl">';W+='<a uweb="'+O.userWeb+'" type="showCard" rel="nofollow" href="'+s+O.userWeb+'" target="_blank" title="'+O.username+'">';W+='<img src="'+j+O.face+'" alt="" /><i class="transparent-png"></i></a>';W+="</div>";W+='<div class="m-review fl">';W+="<dl>";W+='<dt><a uweb="'+O.userWeb+'" type="showCard" href="'+s+O.userWeb+'" target="_blank" title="'+O.username+'">'+O.username+'</a><i class="f-tran-prev">'+(parseInt(O.reFloor)>0?"\u56de\u590d "+O.reFloor+"\u697c":"")+"</i> "+O.time+"<em>"+O.floor+"\u697c</em></dt>";W+="<dd>";W+='<span class="gray3">'+b(O.content)+"</span>";if(parseInt(O.isDel)==1){W+='<cite><a href="javascript:;" name="signDelete" replayid="'+O.replayId+'" >\u5220\u9664</a></cite>'}else{W+='<cite><a  href="javascript:;" name="signReply" LoadEditor="0">\u56de\u590d</a></cite>'}W+="</dd>";W+="</dl>";W+="</div>";W+="</li>";return W};var I=function(O,X){var W=function(){var Z="replyId="+O;var Y=function(ab){if(ab.code==0){X()}else{FailDialog("\u5220\u9664\u5931\u8d25\uff01",140)}}};if(O>0){ConfirmDialog("\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",W)}};var G=function(ac,ad,aj,ah,ab){var ak=parseInt(ac.attr("LoadEditor"))=="1"?true:false;var ae=ac.next("input");var af=null;var ag=0;if(ah==0){ag=ac.offset().top-50}if(H(aj)&&ae.val()=="1"&&ah==0){aj.hide()}else{aj.show();var O=function(){var W=aj.find("div[name='ReplyForm']");W.empty().append(aa);var X=aa.find("div[name='userFace']");if(X.length>0){N(X)}if(y){if(ah>0){af=aa.find("div[name='comment-title']").show();af.find("span").html("\u5bf9 "+ah+"\u697c \u8bf4");X.css("margin-top","20px");af.find("a").bind("click",function(){ac.attr("LoadEditor","0");ae.val("2");G(ac,ad,aj,0,0);af.hide();af.find("span").html("");return false})}var Y=function(al){if(al.length<3){FailDialog(u.repyErr,210);return false}var am={action:"InsertPostReply",postid:C,originalContent:al,code:"",refReplyId:ad,refFloor:ah}};var Z=B(aa,Y,ab);ac.attr("LoadEditor","1")}else{aa.find("a[name='replyLoginBtn']").unbind("click").bind("click",function(){var al=function(){aj.hide();ae.val("2");G(ac,ad,aj,ah,ab)};if(y){al()}else{PagePOPLoginOK=function(){y=true;K();L.hide();return false};L.show()}})}};if(!ak){O()}var ai=function(){var X=function(al){if(al.code==0){var am=al.data;if(am.length<=0){return}var an=$("<ul/>");W.empty().append(an).show();$.each(am,function(ap,at){var au=am[ap].replyID;var aq=am[ap].floorID;var ar={username:am[ap].replyUserName,userWeb:am[ap].replyUserWeb,face:am[ap].userPhoto,floor:aq,reFloor:am[ap].replyRefFloor,isDel:am[ap].isDel,time:am[ap].replyTime,content:am[ap].replyContent,replayId:au};var av=$(V(ar));av.find("a[type='showCard']").each(function(){$(this).ShowUserCard()});av.find("a[name='signReply']").unbind("click").bind("click",function(){var aw=function(){ac.attr("LoadEditor","0");ae.val("2");G(ac,ad,aj,aq,1);if(ag>0){$("body,html").animate({scrollTop:ag},500)}};if(y){aw()}else{PagePOPLoginOK=function(){y=true;K();L.hide();aw();return false};L.show()}return false});av.find("a[name='signDelete']").unbind("click").bind("click",function(){var aw=function(){var ay=parseInt(ac.attr("num"))-1;if(ay<=0){ay=0;ac.find("em").html("")}else{ac.find("em").html("("+ay+")")}ac.attr("num",ay);ac.attr("LoadEditor","1");ae.val("2");G(ac,ad,aj,0,0)};var ax=parseInt($(this).attr("replayid"));I(ax,aw);return false});an.append(av)});v();var Y=$('<div  class="put-away"><a href="javascript:;">\u6536\u8d77<b></b></a></div>');Y.bind("click",function(){aj.hide();return false});an.append(Y)}else{W.empty().hide()}ae.val("1");aj.show();var Z=ac.offset();var ao=$(window).scrollTop();if(ao>Z.top){$("body,html").animate({scrollTop:Z.top-40},500)}};var W=aj.find("div[name='ReplyList']");if(W.length>0){}};if(ae.val()=="0"||ae.val()=="2"){ai()}}};var J=function(){this.TotalCount=0;this.PageMax=10;this.CurrentIndex=1;var O={FIdx:1,EIdx:this.PageMax,isCount:1,postid:C};var W=function(){var Y=function(ac){if(ac.code==0){if(O.isCount==1){CBLFun.TotalCount=ac.count}var ab=$("<ul/>");A.empty().append(ab);if(CBLFun.TotalCount>0){var Z=ac.data;$.each(Z,function(ak,af){var ah=Z[ak].replyID;var ae=parseInt(Z[ak].replyCount);var al="<li>";al+='<div class="input-pic fl">';al+='<a uweb="'+Z[ak].replyUserWeb+'" type="showCard" href="'+s+Z[ak].replyUserWeb+'" target="_blank" title="'+Z[ak].replyUserName+'">';al+='<img src="'+j+Z[ak].userPhoto+'" alt=""><i class="transparent-png"></i></a>';al+="</div>";al+='<div class="m-review fl">';al+="<dl>";al+='<dt><a uweb="'+Z[ak].replyUserWeb+'" type="showCard" href="'+s+Z[ak].replyUserWeb+'" target="_blank" title="'+Z[ak].replyUserName+'">'+Z[ak].replyUserName+"</a>"+Z[ak].replyTime+"<em></em></dt>";al+="<dd>";al+='<span class="gray3">'+b(Z[ak].replyContent)+"</span>";al+="<cite>";if(ae>0){al+='<a href="javascript:;" name="SignReplay" num="'+ae+'" LoadEditor="0">\u56de\u590d<em>('+ae+")</em></a>"}else{al+='<a href="javascript:;" name="SignReplay"  num="0" LoadEditor="0">\u56de\u590d<em></em></a>'}al+='<input name="replyDataState" type="hidden" value="0" />';al+="</cite>";al+="</dd>";al+="</dl>";al+='<div name="ReplyBox" class="reply-comment clrfix" style="display:none;">';al+="<!--\u8f93\u5165\u6846-->";al+='<div name="ReplyForm">';al+="</div>";al+="<!--\u8bc4\u8bba-->";al+='<div name="ReplyList" class="comment-main clrfix" style="display:none;">';al+="</div>";al+="</div>";al+="</div>";al+="</li>";var ag=$(al);ag.find("a[type='showCard']").each(function(){$(this).ShowUserCard()});ab.append(ag);var aj=ag.find("div[name='ReplyBox']");var ai=ag.find("a[name='SignReplay']");ai.bind("click",function(){var am=$(this);am.parents("li").siblings().find("div[name='ReplyBox']").hide();var ad=am.offset();var an=$(window).scrollTop();if(an>ad.top){$("body,html").animate({scrollTop:ad.top-40},500)}G(am,ah,aj,0,0);return false})});v();if(CBLFun.TotalCount>CBLFun.PageMax){A.next("div.g-pagination").remove();A.after(getListPaging1(CBLFun.TotalCount,CBLFun.PageMax,CBLFun.CurrentIndex,5,"CBLFun.gotoPageIndex"))}}}};var X="FIdx="+O.FIdx+"&EIdx="+O.EIdx+"&postid="+C};this.gotoPageIndex=function(X){CBLFun.CurrentIndex=X;O.FIdx=(CBLFun.CurrentIndex-1)*CBLFun.PageMax+1;O.EIdx=O.FIdx+CBLFun.PageMax-1;if(CBLFun.CurrentIndex>1){O.isCount=0}else{O.isCount=1}W();var Y=$("#bottomComment").offset().top;$("body,html").animate({scrollTop:Y},500)};this.initData=function(){O.FIdx=1;O.EIdx=CBLFun.PageMax;O.isCount=1;W()}};CBLFun=new J();CBLFun.initData()};$("#pagination").pagination(t,{current_page:F,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:5,callback:U});function U(G){var H="/shareShow/shareCommentListAjaxPage.action?pageNo="+G+"&shareId="+C;$(".pageUL").prepend('<li class="total_page" id="pageLoading"><img src="'+$img+'/Images/loding.gif" /></li>');$.ajax({url:H,beforeSend:g,success:function(V){A.empty();$(".total_page").empty();$(".pageUL").prepend('<li class="total_page">\u9875\u6b21<i>'+(G+1)+"/"+Math.ceil(t/5)+"</i>&nbsp;&nbsp;\u5171<i>"+t+"</i>\u6761\u8bb0\u5f55</li>");var J="<ul>";for(var O=0;O<V.length;O++){var I=parseInt(V[O].reCount);J+='<li class="qcomment_content_box" num="'+I+'">';J+='<div class="input-pic fl"><a title="'+V[O].userName+'" target="_blank" href="'+$www+"/u/"+V[O].userId+'.html" type="showCard" uweb="'+V[O].userId+'">';J+='<img alt="" src="'+V[O].userFace+'"><i class="transparent-png"></i></a></div>';J+='<div class="m-review fl"><dl><dt>';J+='<a title="'+V[O].userName+'" target="_blank" href="'+$www+"/u/"+V[O].userId+'.html" type="showCard" uweb="'+V[O].userId+'">'+V[O].userName+"</a>"+V[O].createDate+"<em></em></dt>";J+='<dd><span class="gray3">'+V[O].content+"</span><cite>";if(I>0){J+='<a href="javascript:;" commId="'+V[O].uid+'" name="SignReplay"  LoadEditor="0">\u56de\u590d<em>('+I+")</em></a>"}else{J+='<a href="javascript:;" commId="'+V[O].uid+'" name="SignReplay" LoadEditor="0">\u56de\u590d<em></em></a>'}J+='<input type="hidden" value="1" name="replyDataState"></cite></dd></dl>';J+='<div style="display: none;" class="reply-comment clrfix" name="ReplyBox"><!--\u8f93\u5165\u6846-->';J+='<div name="ReplyForm">';if(f!=null){J+='<div class="input-comment clrfix" name="InputBox"><div class="input-pic fl" name="userFace"><a href="/u/'+T+'.html" target="_blank">';J+='<img alt="" src="'+Q+'" name="imgUserPhoto"><i class="transparent-png"></i></a></div><div class="input-box fl">';J+='<div style="display:none;" class="from-to-close" name="comment-title"><span></span><a href="javascript:" class="delete-close"></a></div><div class="textCon ke-container ke-container-simple"><textarea style="height: 98px;padding:5px;" class="ke-edit" name="replyTA">\u8bf4\u70b9\u4ec0\u4e48\u5427\uff1f</textarea><b class=""><s></s></b>';J+='<div class="Comment_button"><div class="Comment_but"><a class="reply_unbotton disBtn" href="javascript:;" id="btnSubmitMsg">\u63d0\u4ea4</a></div><div class="gray6" id="wordNumber"><em class="orange">0</em>/150</div></div>';J+='</div><input type="button" class="hidden" name="btnReplyMsg"></div></div>'}else{J+='<div class="not-login clrfix"><div class="input-pic fl" name="userFace"><img alt="" src="'+m+'" name="imgUserPhoto"><i class="transparent-png"></i></div><div class="point-box fl gray6">\u8bf7\u60a8<a name="replyLoginBtn" href="javascript:;">\u767b\u5f55</a>\u6216<a href="/register/index.html?forward='+escape(location.href)+'">\u6ce8\u518c</a>\u540e\u518d\u8bc4\u8bba<b><s></s></b></div></div>'}J+="</div>";if(I>0){J+='<div style="" class="comment-main clrfix" name="ReplyList"></div>'}J+="</div></div></li>"}J+="</ul>";$(J).appendTo($("#commentList"));$("#pageLoading").hide();$(".qcomment_content_box").each(function(ad){var ab=null;var ae=$(this).find("[name=SignReplay]");var Z=$(this).attr("num");var W=$(this).find("[name=ReplyBox]");var ah=$(this).find("[name=ReplyForm]");var ac=$(this).find("[name=ReplyList]");var ag=ah.find("[name=replyTA]");h(ag);var af=function(X){var aj=ae.attr("commId");X.empty();var ai="/shareShow/getReCommentList.action?shareCommentId="+aj;$.ajax({url:ai,type:"get",success:function(al){ab=al.length;var am="<ul>";for(var ak=0;ak<al.length;ak++){am+='<li><div class="input-pic fl"><a title="'+al[ak].userName+'" target="_blank" href="'+$www+"/u/"+al[ak].userId+'.html" rel="nofollow" type="showCard" uweb="'+al[ak].userId+'">';am+='<img alt="" src="'+al[ak].userFace+'"><i class="transparent-png"></i></a></div><div class="m-review fl"><dl>';am+='<dt><a title="'+al[ak].userName+'" target="_blank" href="'+$www+"/u/"+al[ak].userId+'.html" type="showCard" uweb="'+al[ak].userId+'">'+al[ak].userName+'</a><i class="f-tran-prev"></i> '+al[ak].createDate+"<em>"+(al.length-ak)+"\u697c</em></dt><dd>";am+='<span class="gray3">'+al[ak].content+"</span>";am+="</dd></dl></div></li>"}am+='<div class="put-away"><a href="javascript:;">\u6536\u8d77<b></b></a></div>';am+="</ul>";$(am).appendTo(X);$(".put-away").click(function(){W.hide()})}})};ae.bind("click",function(){if(W.is(":visible")){W.hide()}else{$(".qcomment_content_box").find("[name=ReplyBox]").hide();W.show()}if(ab==null&&Z>0){af(ac)}if(f==null){$("[name=replyLoginBtn]").bind("click",function(){PagePOPLoginOK=function(){y=true;L.hide();location.reload();return false};L.show()})}});var Y=ah.find("#btnSubmitMsg");Y.bind("click",function(){if(Y.attr("class")=="reply_unbotton disBtn"){return false}var aj=ah.find("[name=replyTA]").val().trim();if(aj.length<3){$.PageDialog('<dl class="sAltOK"><dd>\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57!</dd></dl>',{W:210,H:50,autoClose:true});return false}var ai="/shareShow/postComment.html";var X=ae.attr("commId");$.ajax({url:ai,type:"post",data:"commentText="+encodeURIComponent(aj)+"&shareId="+C+"&userId="+f+"&reCommentId="+X,success:function(ak){if(ak=="true"){$.PageDialog('<dl class="sAltOK"><dd>\u64cd\u4f5c\u6210\u529f!</dd></dl>',{W:160,H:50,autoClose:true});ah.find("[name=replyTA]").val("\u8bf4\u70b9\u4ec0\u4e48\u5427\uff1f").css({color:"#e4e4e4"});ah.find("#wordNumber").find("em").html("0");af(ac)}else{$.PageDialog('<dl class="sAltOK"><dd>\u64cd\u4f5c\u5931\u8d25!</dd></dl>',{W:160,H:50,autoClose:true});return false}}})})})}})}function g(){$("#pageLoading").show()}var h=function(H){var I=H.parent().find("#wordNumber").find("em");var G="\u8bf4\u70b9\u4ec0\u4e48\u5427\uff1f";H.focusout(function(){if(H.val()==""){H.val(G).css({color:"#e4e4e4"})}});H.focus(function(){if(H.val()==G){H.val("").css({color:"#000"})}});H.bind("keyup",function(J){var X=(window.event)?event.keyCode:J.keyCode;var Y=$(this);var O=Y.val();if(X==13){if(O.indexOf("\n\n\n")!=-1){O=O.replace("\n\n\n","\n\n");Y.val(O)}else{H.css("height",98+"px")}}if(O.length<=150){I.html(O.length)}else{I.html("0");Y.val(O.substr(0,150))}if(O.length>0){H.parent().find("#btnSubmitMsg").attr("class","reply_unbotton")}else{H.parent().find("#btnSubmitMsg").attr("class","reply_unbotton disBtn")}}).bind("keydown",function(J){if(!window.event){var O=J.keyCode;var O=String.fromCharCode(O).toLowerCase();if(J.ctrlKey&&O=="v"){J.preventDefault();J.stopPropagation()}}})};var k=function(){if(y){}else{var I=$(P("M",0));var H=I.find("div[name='userFace']");if(H.length>0){N(H);var G=I.find("[name=replyTA]");h(G);var J=I.find("#btnSubmitMsg");J.bind("click",function(){if(J.attr("class")=="reply_unbotton disBtn"){return false}var V=I.find("[name=replyTA]").val().trim();if(V.length<3){$.PageDialog('<dl class="sAltOK"><dd>\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u5c11\u4e8e3\u4e2a\u5b57!</dd></dl>',{W:210,H:50,autoClose:true});return false}var O="/shareShow/postComment.html";$.ajax({url:O,type:"post",data:"commentText="+encodeURIComponent(V)+"&shareId="+C+"&userId="+f,success:function(W){if(W=="true"){$.PageDialog('<dl class="sAltOK"><dd>\u64cd\u4f5c\u6210\u529f!</dd></dl>',{W:160,H:50,autoClose:true});U(0);$("#replyTAM0").val("\u8bf4\u70b9\u4ec0\u4e48\u5427\uff1f").css({color:"#e4e4e4"});$("#wordNumber").find("em").html("0");$("#btnSubmitMsg").attr("class","reply_unbotton disBtn");$("#resultCount").val(parseInt(t)+1)}else{$.PageDialog('<dl class="sAltOK"><dd>\u64cd\u4f5c\u5931\u8d25!</dd></dl>',{W:160,H:50,autoClose:true});return false}}})})}I.find("a[name='replyLoginBtn']").unbind("click").bind("click",function(){PagePOPLoginOK=function(){y=true;L.hide();location.reload();return false};L.show()});l.empty().append(I)}};k();var M=function(){var G;if(y){G=l.children("div[name='InputBox']")}else{G=l.children("div.not-login")}if(G.length>0){G.addClass("input-comment-bor")}};if(parseInt(D.html())>0){M();A.show();S()}};var d=function(){CBLPageFun=new c()};$.getScript(q+"/js/poplogin.js?date=20150213",d)};E();var x=function(){try{ShareTitle=document.title;SharePic=$("#hidGoodImage").val();var a=function(){$.getScript(q+"/js/bdshare.js?date=20120428")};a()}catch(b){}};x();function o(b,d,a){var c=a;var e=new Date();e.setTime(e.getTime()+c*24*60*60*1000);document.cookie=b+"="+escape(d)+";id=1ypg;path=/;expires="+e.toGMTString()+";domain="+$domain}function w(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$)"));if(a!=null){return unescape(a[2])}return null}$(".scrollLoading").scrollLoading()});