(function(a){a.fn.extend({stickyMojo:function(n){var b=a.extend({footerID:"",contentID:"",orientation:a(this).css("float")},n);var l={el:a(this),stickyLeft:a(b.contentID).outerWidth()+a(b.contentID).offset.left,stickyTop2:a(this).offset().top,stickyHeight:a(this).outerHeight(true),contentHeight:a(b.contentID).outerHeight(true),win:a(window),breakPoint:a(this).outerWidth(true)+a(b.contentID).outerWidth(true),marg:parseInt(a(this).css("margin-top"),10)};var k=d();o();return this.each(function(){m()});function m(){if(!k.length){l.el.css("left",l.stickyLeft);l.win.bind({load:e,scroll:e,resize:function(){l.el.css("left",l.stickyLeft);e()}})}else{if(console&&console.warn){console.warn(k)}else{alert(k)}}}function o(){b.footerID=a(b.footerID);b.contentID=a(b.contentID)}function h(){return{limit:b.footerID.offset().top-l.stickyHeight,windowTop:l.win.scrollTop()+54,stickyTop:l.stickyTop2-l.marg}}function f(){l.el.css({position:"fixed",top:54})}function j(){if(b.orientation==="left"){b.contentID.css("margin-left",l.el.outerWidth(true))}else{l.el.css("margin-left",b.contentID.outerWidth(true))}}function g(){l.el.css({position:"static","margin-left":"0px"});b.contentID.css("margin-left","0px")}function i(p){l.el.css({top:p})}function e(){var r=h();var p=r.stickyTop<r.windowTop&&(l.win.width()>=l.breakPoint);if(p){f();j()}else{g()}if(r.limit<r.windowTop){var q=r.limit-r.windowTop+54;i(q)}}function d(){var q=[];for(var p in b){if(!b[p]){q.push(b[p])}}c()&&q.push("NO IE 7");return q}function c(){if(document.querySelector){return false}else{return true}}}})})(jQuery);