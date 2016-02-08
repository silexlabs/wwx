(function (console) { "use strict";
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
var Swag = function() { };
Swag.__name__ = true;
Swag.main = function() {
	var nav = window.document.getElementsByTagName("nav")[0];
	var updateNav = function() {
		if(window.scrollY > 100) nav.classList.remove("transparent"); else nav.classList.add("transparent");
	};
	window.addEventListener("scroll",updateNav);
	updateNav();
	var d = new Date();
	d.setUTCDate(26);
	d.setUTCMonth(1);
	d.setUTCHours(15);
	d.setUTCMinutes(0);
	d.setUTCSeconds(0);
	var opens = d.getTime();
	var hours = window.document.querySelector(".countdown .hours");
	var minutes = window.document.querySelector(".countdown .minutes");
	var seconds = window.document.querySelector(".countdown .seconds");
	window.document.querySelector(".countdown").classList.remove("nodisplay");
	var updateTime = function() {
		var delta = Std["int"]((opens - new Date().getTime()) / 1000);
		var time = function(target,f) {
			return target.innerHTML = StringTools.lpad(Std.string(f | 0),"0",2);
		};
		time(hours,delta / 3600);
		time(minutes,delta % 3600 / 60);
		time(seconds,delta % 60);
	};
	updateTime();
	var t = new haxe_Timer(1000);
	t.run = updateTime;
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.prototype = {
	run: function() {
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
Swag.main();
})(typeof console != "undefined" ? console : {log:function(){}});
