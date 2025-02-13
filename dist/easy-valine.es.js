var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var md5$1 = { exports: {} };
(function(module) {
  (function($) {
    function safeAdd(x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t2) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t2)), s), b);
    }
    function md5ff(a, b, c, d2, x, s, t2) {
      return md5cmn(b & c | ~b & d2, a, b, x, s, t2);
    }
    function md5gg(a, b, c, d2, x, s, t2) {
      return md5cmn(b & d2 | c & ~d2, a, b, x, s, t2);
    }
    function md5hh(a, b, c, d2, x, s, t2) {
      return md5cmn(b ^ c ^ d2, a, b, x, s, t2);
    }
    function md5ii(a, b, c, d2, x, s, t2) {
      return md5cmn(c ^ (b | ~d2), a, b, x, s, t2);
    }
    function binlMD5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var i2;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d2 = 271733878;
      for (i2 = 0; i2 < x.length; i2 += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d2;
        a = md5ff(a, b, c, d2, x[i2], 7, -680876936);
        d2 = md5ff(d2, a, b, c, x[i2 + 1], 12, -389564586);
        c = md5ff(c, d2, a, b, x[i2 + 2], 17, 606105819);
        b = md5ff(b, c, d2, a, x[i2 + 3], 22, -1044525330);
        a = md5ff(a, b, c, d2, x[i2 + 4], 7, -176418897);
        d2 = md5ff(d2, a, b, c, x[i2 + 5], 12, 1200080426);
        c = md5ff(c, d2, a, b, x[i2 + 6], 17, -1473231341);
        b = md5ff(b, c, d2, a, x[i2 + 7], 22, -45705983);
        a = md5ff(a, b, c, d2, x[i2 + 8], 7, 1770035416);
        d2 = md5ff(d2, a, b, c, x[i2 + 9], 12, -1958414417);
        c = md5ff(c, d2, a, b, x[i2 + 10], 17, -42063);
        b = md5ff(b, c, d2, a, x[i2 + 11], 22, -1990404162);
        a = md5ff(a, b, c, d2, x[i2 + 12], 7, 1804603682);
        d2 = md5ff(d2, a, b, c, x[i2 + 13], 12, -40341101);
        c = md5ff(c, d2, a, b, x[i2 + 14], 17, -1502002290);
        b = md5ff(b, c, d2, a, x[i2 + 15], 22, 1236535329);
        a = md5gg(a, b, c, d2, x[i2 + 1], 5, -165796510);
        d2 = md5gg(d2, a, b, c, x[i2 + 6], 9, -1069501632);
        c = md5gg(c, d2, a, b, x[i2 + 11], 14, 643717713);
        b = md5gg(b, c, d2, a, x[i2], 20, -373897302);
        a = md5gg(a, b, c, d2, x[i2 + 5], 5, -701558691);
        d2 = md5gg(d2, a, b, c, x[i2 + 10], 9, 38016083);
        c = md5gg(c, d2, a, b, x[i2 + 15], 14, -660478335);
        b = md5gg(b, c, d2, a, x[i2 + 4], 20, -405537848);
        a = md5gg(a, b, c, d2, x[i2 + 9], 5, 568446438);
        d2 = md5gg(d2, a, b, c, x[i2 + 14], 9, -1019803690);
        c = md5gg(c, d2, a, b, x[i2 + 3], 14, -187363961);
        b = md5gg(b, c, d2, a, x[i2 + 8], 20, 1163531501);
        a = md5gg(a, b, c, d2, x[i2 + 13], 5, -1444681467);
        d2 = md5gg(d2, a, b, c, x[i2 + 2], 9, -51403784);
        c = md5gg(c, d2, a, b, x[i2 + 7], 14, 1735328473);
        b = md5gg(b, c, d2, a, x[i2 + 12], 20, -1926607734);
        a = md5hh(a, b, c, d2, x[i2 + 5], 4, -378558);
        d2 = md5hh(d2, a, b, c, x[i2 + 8], 11, -2022574463);
        c = md5hh(c, d2, a, b, x[i2 + 11], 16, 1839030562);
        b = md5hh(b, c, d2, a, x[i2 + 14], 23, -35309556);
        a = md5hh(a, b, c, d2, x[i2 + 1], 4, -1530992060);
        d2 = md5hh(d2, a, b, c, x[i2 + 4], 11, 1272893353);
        c = md5hh(c, d2, a, b, x[i2 + 7], 16, -155497632);
        b = md5hh(b, c, d2, a, x[i2 + 10], 23, -1094730640);
        a = md5hh(a, b, c, d2, x[i2 + 13], 4, 681279174);
        d2 = md5hh(d2, a, b, c, x[i2], 11, -358537222);
        c = md5hh(c, d2, a, b, x[i2 + 3], 16, -722521979);
        b = md5hh(b, c, d2, a, x[i2 + 6], 23, 76029189);
        a = md5hh(a, b, c, d2, x[i2 + 9], 4, -640364487);
        d2 = md5hh(d2, a, b, c, x[i2 + 12], 11, -421815835);
        c = md5hh(c, d2, a, b, x[i2 + 15], 16, 530742520);
        b = md5hh(b, c, d2, a, x[i2 + 2], 23, -995338651);
        a = md5ii(a, b, c, d2, x[i2], 6, -198630844);
        d2 = md5ii(d2, a, b, c, x[i2 + 7], 10, 1126891415);
        c = md5ii(c, d2, a, b, x[i2 + 14], 15, -1416354905);
        b = md5ii(b, c, d2, a, x[i2 + 5], 21, -57434055);
        a = md5ii(a, b, c, d2, x[i2 + 12], 6, 1700485571);
        d2 = md5ii(d2, a, b, c, x[i2 + 3], 10, -1894986606);
        c = md5ii(c, d2, a, b, x[i2 + 10], 15, -1051523);
        b = md5ii(b, c, d2, a, x[i2 + 1], 21, -2054922799);
        a = md5ii(a, b, c, d2, x[i2 + 8], 6, 1873313359);
        d2 = md5ii(d2, a, b, c, x[i2 + 15], 10, -30611744);
        c = md5ii(c, d2, a, b, x[i2 + 6], 15, -1560198380);
        b = md5ii(b, c, d2, a, x[i2 + 13], 21, 1309151649);
        a = md5ii(a, b, c, d2, x[i2 + 4], 6, -145523070);
        d2 = md5ii(d2, a, b, c, x[i2 + 11], 10, -1120210379);
        c = md5ii(c, d2, a, b, x[i2 + 2], 15, 718787259);
        b = md5ii(b, c, d2, a, x[i2 + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d2 = safeAdd(d2, oldd);
      }
      return [a, b, c, d2];
    }
    function binl2rstr(input) {
      var i2;
      var output = "";
      var length32 = input.length * 32;
      for (i2 = 0; i2 < length32; i2 += 8) {
        output += String.fromCharCode(input[i2 >> 5] >>> i2 % 32 & 255);
      }
      return output;
    }
    function rstr2binl(input) {
      var i2;
      var output = [];
      output[(input.length >> 2) - 1] = void 0;
      for (i2 = 0; i2 < output.length; i2 += 1) {
        output[i2] = 0;
      }
      var length8 = input.length * 8;
      for (i2 = 0; i2 < length8; i2 += 8) {
        output[i2 >> 5] |= (input.charCodeAt(i2 / 8) & 255) << i2 % 32;
      }
      return output;
    }
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }
    function rstrHMACMD5(key, data2) {
      var i2;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = void 0;
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
      }
      for (i2 = 0; i2 < 16; i2 += 1) {
        ipad[i2] = bkey[i2] ^ 909522486;
        opad[i2] = bkey[i2] ^ 1549556828;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data2)), 512 + data2.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i2;
      for (i2 = 0; i2 < input.length; i2 += 1) {
        x = input.charCodeAt(i2);
        output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
      }
      return output;
    }
    function str2rstrUTF8(input) {
      return unescape(encodeURIComponent(input));
    }
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }
    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }
    function rawHMACMD5(k, d2) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d2));
    }
    function hexHMACMD5(k, d2) {
      return rstr2hex(rawHMACMD5(k, d2));
    }
    function md52(string, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string);
        }
        return rawMD5(string);
      }
      if (!raw) {
        return hexHMACMD5(key, string);
      }
      return rawHMACMD5(key, string);
    }
    if (module.exports) {
      module.exports = md52;
    } else {
      $.md5 = md52;
    }
  })(commonjsGlobal);
})(md5$1);
var md5 = md5$1.exports;
var e, t, n = typeof Map == "function" ? new Map() : (e = [], t = [], { has: function(t2) {
  return e.indexOf(t2) > -1;
}, get: function(n2) {
  return t[e.indexOf(n2)];
}, set: function(n2, o2) {
  e.indexOf(n2) === -1 && (e.push(n2), t.push(o2));
}, delete: function(n2) {
  var o2 = e.indexOf(n2);
  o2 > -1 && (e.splice(o2, 1), t.splice(o2, 1));
} }), o = function(e2) {
  return new Event(e2, { bubbles: true });
};
try {
  new Event("test");
} catch (e2) {
  o = function(e3) {
    var t2 = document.createEvent("Event");
    return t2.initEvent(e3, true, false), t2;
  };
}
function r(e2) {
  var t2 = n.get(e2);
  t2 && t2.destroy();
}
function i(e2) {
  var t2 = n.get(e2);
  t2 && t2.update();
}
var l = null;
typeof window == "undefined" || typeof window.getComputedStyle != "function" ? ((l = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, l.update = function(e2) {
  return e2;
}) : ((l = function(e2, t2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], function(e3) {
    return function(e4) {
      if (e4 && e4.nodeName && e4.nodeName === "TEXTAREA" && !n.has(e4)) {
        var t3, r2 = null, i2 = null, l2 = null, d2 = function() {
          e4.clientWidth !== i2 && c();
        }, a = function(t4) {
          window.removeEventListener("resize", d2, false), e4.removeEventListener("input", c, false), e4.removeEventListener("keyup", c, false), e4.removeEventListener("autosize:destroy", a, false), e4.removeEventListener("autosize:update", c, false), Object.keys(t4).forEach(function(n2) {
            e4.style[n2] = t4[n2];
          }), n.delete(e4);
        }.bind(e4, { height: e4.style.height, resize: e4.style.resize, overflowY: e4.style.overflowY, overflowX: e4.style.overflowX, wordWrap: e4.style.wordWrap });
        e4.addEventListener("autosize:destroy", a, false), "onpropertychange" in e4 && "oninput" in e4 && e4.addEventListener("keyup", c, false), window.addEventListener("resize", d2, false), e4.addEventListener("input", c, false), e4.addEventListener("autosize:update", c, false), e4.style.overflowX = "hidden", e4.style.wordWrap = "break-word", n.set(e4, { destroy: a, update: c }), (t3 = window.getComputedStyle(e4, null)).resize === "vertical" ? e4.style.resize = "none" : t3.resize === "both" && (e4.style.resize = "horizontal"), r2 = t3.boxSizing === "content-box" ? -(parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom)) : parseFloat(t3.borderTopWidth) + parseFloat(t3.borderBottomWidth), isNaN(r2) && (r2 = 0), c();
      }
      function u(t4) {
        var n2 = e4.style.width;
        e4.style.width = "0px", e4.style.width = n2, e4.style.overflowY = t4;
      }
      function s() {
        if (e4.scrollHeight !== 0) {
          var t4 = function(e5) {
            for (var t5 = []; e5 && e5.parentNode && e5.parentNode instanceof Element; )
              e5.parentNode.scrollTop && t5.push({ node: e5.parentNode, scrollTop: e5.parentNode.scrollTop }), e5 = e5.parentNode;
            return t5;
          }(e4), n2 = document.documentElement && document.documentElement.scrollTop;
          e4.style.height = "", e4.style.height = e4.scrollHeight + r2 + "px", i2 = e4.clientWidth, t4.forEach(function(e5) {
            e5.node.scrollTop = e5.scrollTop;
          }), n2 && (document.documentElement.scrollTop = n2);
        }
      }
      function c() {
        s();
        var t4 = Math.round(parseFloat(e4.style.height)), n2 = window.getComputedStyle(e4, null), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(n2.height)) : e4.offsetHeight;
        if (r3 < t4 ? n2.overflowY === "hidden" && (u("scroll"), s(), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight) : n2.overflowY !== "hidden" && (u("hidden"), s(), r3 = n2.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight), l2 !== r3) {
          l2 = r3;
          var i3 = o("autosize:resized");
          try {
            e4.dispatchEvent(i3);
          } catch (e5) {
          }
        }
      }
    }(e3);
  }), e2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], r), e2;
}, l.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], i), e2;
});
var d = l;
const timeAgo = (date, locale) => {
  if (date) {
    try {
      var oldTime = date.getTime();
      var currTime = new Date().getTime();
      var diffValue = currTime - oldTime;
      var days = Math.floor(diffValue / (24 * 3600 * 1e3));
      if (days === 0) {
        var leave1 = diffValue % (24 * 3600 * 1e3);
        var hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours === 0) {
          var leave2 = leave1 % (3600 * 1e3);
          var minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes === 0) {
            var leave3 = leave2 % (60 * 1e3);
            var seconds = Math.round(leave3 / 1e3);
            return seconds + ` ${locale["timeago"]["seconds"]}`;
          }
          return minutes + ` ${locale["timeago"]["minutes"]}`;
        }
        return hours + ` ${locale["timeago"]["hours"]}`;
      }
      if (days < 0)
        return locale["timeago"]["now"];
      if (days < 8) {
        return days + ` ${locale["timeago"]["days"]}`;
      } else {
        return dateFormat(date);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
const dateFormat = (date) => {
  var vDay = padWithZeros(date.getDate(), 2);
  var vMonth = padWithZeros(date.getMonth() + 1, 2);
  var vYear = padWithZeros(date.getFullYear(), 2);
  return `${vYear}-${vMonth}-${vDay}`;
};
const padWithZeros = (vNumber, width) => {
  var numAsString = vNumber.toString();
  while (numAsString.length < width) {
    numAsString = "0" + numAsString;
  }
  return numAsString;
};
function detectFactory(u) {
  var _this = this;
  var match = {
    "Trident": u.indexOf("Trident") > -1 || u.indexOf("NET CLR") > -1,
    "Presto": u.indexOf("Presto") > -1,
    "WebKit": u.indexOf("AppleWebKit") > -1,
    "Gecko": u.indexOf("Gecko/") > -1,
    "Safari": u.indexOf("Safari") > -1,
    "Chrome": u.indexOf("Chrome") > -1 || u.indexOf("CriOS") > -1,
    "IE": u.indexOf("MSIE") > -1 || u.indexOf("Trident") > -1,
    "Edge": u.indexOf("Edge") > -1,
    "Firefox": u.indexOf("Firefox") > -1 || u.indexOf("FxiOS") > -1,
    "Firefox Focus": u.indexOf("Focus") > -1,
    "Chromium": u.indexOf("Chromium") > -1,
    "Opera": u.indexOf("Opera") > -1 || u.indexOf("OPR") > -1,
    "Vivaldi": u.indexOf("Vivaldi") > -1,
    "Yandex": u.indexOf("YaBrowser") > -1,
    "Kindle": u.indexOf("Kindle") > -1 || u.indexOf("Silk/") > -1,
    "360": u.indexOf("360EE") > -1 || u.indexOf("360SE") > -1,
    "UC": u.indexOf("UC") > -1 || u.indexOf(" UBrowser") > -1,
    "QQBrowser": u.indexOf("QQBrowser") > -1,
    "QQ": u.indexOf("QQ/") > -1,
    "Baidu": u.indexOf("Baidu") > -1 || u.indexOf("BIDUBrowser") > -1,
    "Maxthon": u.indexOf("Maxthon") > -1,
    "Sogou": u.indexOf("MetaSr") > -1 || u.indexOf("Sogou") > -1,
    "LBBROWSER": u.indexOf("LBBROWSER") > -1,
    "2345Explorer": u.indexOf("2345Explorer") > -1,
    "TheWorld": u.indexOf("TheWorld") > -1,
    "XiaoMi": u.indexOf("MiuiBrowser") > -1,
    "Quark": u.indexOf("Quark") > -1,
    "Qiyu": u.indexOf("Qiyu") > -1,
    "Wechat": u.indexOf("MicroMessenger") > -1,
    "Taobao": u.indexOf("AliApp(TB") > -1,
    "Alipay": u.indexOf("AliApp(AP") > -1,
    "Weibo": u.indexOf("Weibo") > -1,
    "Douban": u.indexOf("com.douban.frodo") > -1,
    "Suning": u.indexOf("SNEBUY-APP") > -1,
    "iQiYi": u.indexOf("IqiyiApp") > -1,
    "Windows": u.indexOf("Windows") > -1,
    "Linux": u.indexOf("Linux") > -1 || u.indexOf("X11") > -1,
    "Mac OS": u.indexOf("Macintosh") > -1,
    "Android": u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
    "Ubuntu": u.indexOf("Ubuntu") > -1,
    "FreeBSD": u.indexOf("FreeBSD") > -1,
    "Debian": u.indexOf("Debian") > -1,
    "Windows Phone": u.indexOf("IEMobile") > -1 || u.indexOf("Windows Phone") > -1,
    "BlackBerry": u.indexOf("BlackBerry") > -1 || u.indexOf("RIM") > -1,
    "MeeGo": u.indexOf("MeeGo") > -1,
    "Symbian": u.indexOf("Symbian") > -1,
    "iOS": u.indexOf("like Mac OS X") > -1,
    "Chrome OS": u.indexOf("CrOS") > -1,
    "WebOS": u.indexOf("hpwOS") > -1,
    "Mobile": u.indexOf("Mobi") > -1 || u.indexOf("iPh") > -1 || u.indexOf("480") > -1,
    "Tablet": u.indexOf("Tablet") > -1 || u.indexOf("Pad") > -1 || u.indexOf("Nexus 7") > -1
  };
  if (match["Mobile"]) {
    match["Mobile"] = !(u.indexOf("iPad") > -1);
  }
  var hash = {
    engine: ["WebKit", "Trident", "Gecko", "Presto"],
    browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
    os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
    device: ["Mobile", "Tablet"]
  };
  _this.device = "PC";
  for (var s in hash) {
    for (var i2 = 0; i2 < hash[s].length; i2++) {
      var value = hash[s][i2];
      if (match[value]) {
        _this[s] = value;
      }
    }
  }
  var osVersion = {
    "Windows": function() {
      var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
      var hash2 = {
        "6.4": "10",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "7",
        "6.0": "Vista",
        "5.2": "XP",
        "5.1": "XP",
        "5.0": "2000"
      };
      return hash2[v] || v;
    },
    "Android": function() {
      return u.replace(/^.*Android ([\d.]+);.*$/, "$1");
    },
    "iOS": function() {
      return u.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
    },
    "Debian": function() {
      return u.replace(/^.*Debian\/([\d.]+).*$/, "$1");
    },
    "Windows Phone": function() {
      return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
    },
    "Mac OS": function() {
      return u.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".");
    },
    "WebOS": function() {
      return u.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1");
    }
  };
  _this.osVersion = "";
  if (osVersion[_this.os]) {
    _this.osVersion = osVersion[_this.os]();
    if (_this.osVersion == u) {
      _this.osVersion = "";
    }
  }
  var version = {
    "Safari": function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    "Chrome": function() {
      return u.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1");
    },
    "IE": function() {
      return u.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1");
    },
    "Edge": function() {
      return u.replace(/^.*Edge\/([\d.]+).*$/, "$1");
    },
    "Firefox": function() {
      return u.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
    },
    "Firefox Focus": function() {
      return u.replace(/^.*Focus\/([\d.]+).*$/, "$1");
    },
    "Chromium": function() {
      return u.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
    },
    "Opera": function() {
      return u.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1");
    },
    "Vivaldi": function() {
      return u.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
    },
    "Yandex": function() {
      return u.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
    },
    "Kindle": function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    "Maxthon": function() {
      return u.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
    },
    "QQBrowser": function() {
      return u.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
    },
    "QQ": function() {
      return u.replace(/^.*QQ\/([\d.]+).*$/, "$1");
    },
    "Baidu": function() {
      return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1");
    },
    "UC": function() {
      return u.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1");
    },
    "Sogou": function() {
      return u.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
    },
    "2345Explorer": function() {
      return u.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1");
    },
    "TheWorld": function() {
      return u.replace(/^.*TheWorld ([\d.]+).*$/, "$1");
    },
    "XiaoMi": function() {
      return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
    },
    "Quark": function() {
      return u.replace(/^.*Quark\/([\d.]+).*$/, "$1");
    },
    "Qiyu": function() {
      return u.replace(/^.*Qiyu\/([\d.]+).*$/, "$1");
    },
    "Wechat": function() {
      return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
    },
    "Taobao": function() {
      return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
    },
    "Alipay": function() {
      return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
    },
    "Weibo": function() {
      return u.replace(/^.*weibo__([\d.]+).*$/, "$1");
    },
    "Douban": function() {
      return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1");
    },
    "Suning": function() {
      return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1");
    },
    "iQiYi": function() {
      return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1");
    }
  };
  _this.version = "";
  if (version[_this.browser]) {
    _this.version = version[_this.browser]();
    if (_this.version == u) {
      _this.version = "";
    }
  }
  if (_this.browser == "Edge") {
    _this.engine = "EdgeHTML";
  } else if (_this.browser == "Chrome" && parseInt(_this.version) > 27) {
    _this.engine = "Blink";
  } else if (_this.browser == "Opera" && parseInt(_this.version) > 12) {
    _this.engine = "Blink";
  } else if (_this.browser == "Yandex") {
    _this.engine = "Blink";
  } else if (_this.browser == void 0) {
    _this.browser = "Unknow App";
  }
}
function detect(u) {
  return new detectFactory(u);
}
const unescapeMap = {};
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#x60;",
  "\\": "&#x5c;"
};
for (let key in escapeMap) {
  unescapeMap[escapeMap[key]] = key;
}
const reUnescapedHtml = /[&<>"'`\\]/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
const reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);
const utils$f = {
  on(type, el, handler, capture) {
    type = type.split(" ");
    for (let i2 = 0, len = type.length; i2 < len; i2++) {
      utils$f.off(type[i2], el, handler, capture);
      if (el.addEventListener)
        el.addEventListener(type[i2], handler, capture || false);
      else if (el.attachEvent)
        el.attachEvent(`on${type[i2]}`, handler);
      else
        el[`on${type[i2]}`] = handler;
    }
  },
  off(type, el, handler, capture) {
    type = type.split(" ");
    for (let i2 = 0, len = type.length; i2 < len; i2++) {
      if (el.removeEventListener)
        el.removeEventListener(type, handler, capture || false);
      else if (el.detachEvent)
        el.detachEvent(`on${type}`, handler);
      else
        el[`on${type}`] = null;
    }
  },
  escape(s) {
    return s && reHasUnescapedHtml.test(s) ? s.replace(reUnescapedHtml, (chr) => escapeMap[chr]) : s;
  },
  unescape(s) {
    return s && reHasEscapedHtml.test(s) ? s.replace(reEscapedHtml, (entity) => unescapeMap[entity]) : s;
  },
  create(name, attrName, attrVal) {
    let el = document.createElement(name);
    utils$f.attr(el, attrName, attrVal);
    return el;
  },
  find(el, selector) {
    return el.querySelector(selector);
  },
  findAll(el, selector) {
    return el.querySelectorAll(selector);
  },
  attr(el, name, value) {
    if (typeof el.getAttribute === "undefined")
      return utils$f.prop(el, name, value);
    if (value !== void 0) {
      if (value === null)
        utils$f.removeAttr(el, name);
      else
        el.setAttribute(name, value);
    } else if ({}.toString.call(name) === "[object Object]") {
      utils$f.each(name, (k, v) => {
        el.setAttribute(k, v);
      });
    } else
      return el.getAttribute(name);
  },
  prop(el, name, value) {
    if (value !== void 0)
      return el[name] = value;
    else if ({}.toString.call(name) === "[object Object]") {
      utils$f.each(name, (k, v) => {
        el[k] = v;
      });
    } else
      return el[name];
  },
  removeAttr(el, names) {
    let name, i2 = 0, attrNames = names && names.match(/[^\x20\t\r\n\f\*\/\\]+/g);
    if (attrNames && el.nodeType === 1) {
      while (name = attrNames[i2++]) {
        el.removeAttribute(name);
      }
    }
    return el;
  },
  clearAttr(el) {
    let attrs = el.attributes;
    let ignoreAttrs = ["align", "alt", "checked", "class", "disabled", "href", "id", "target", "title", "type", "src", "style"];
    utils$f.each(attrs, (idx, attr) => {
      let name = attr.name;
      switch (name.toLowerCase()) {
        case "style":
          let style = attr.value;
          utils$f.each(style.split(";"), (idx2, item) => {
            if (item.indexOf("color") > -1)
              utils$f.attr(el, "style", item);
            else
              utils$f.removeAttr(el, "style");
          });
          break;
        case "class":
          if (el.nodeName == "CODE")
            return false;
          let clazz = attr.value;
          if (clazz.indexOf("at") > -1)
            utils$f.attr(el, "class", "at");
          else if (clazz.indexOf("vemoji") > -1)
            utils$f.attr(el, "class", "vemoji");
          else
            utils$f.removeAttr(el, "class");
          break;
        default:
          if (ignoreAttrs.indexOf(name) > -1)
            return true;
          else
            utils$f.removeAttr(el, name);
          break;
      }
    });
    return el;
  },
  remove(child) {
    try {
      if (child.parentNode)
        child.parentNode.removeChild(child);
    } catch (error) {
    }
  },
  each(collection, callback) {
    let i2 = 0, length = collection.length, likeArray = ["[object Array]", "[object NodeList]"], type = {}.toString.call(collection);
    if (likeArray.indexOf(type) > -1) {
      for (; i2 < length; i2++) {
        if (callback && callback.call(collection[i2], i2, collection[i2]) === false)
          break;
      }
    } else {
      for (i2 in collection) {
        if (collection.hasOwnProperty(i2)) {
          if (callback && callback.call(collection[i2], i2, collection[i2]) === false)
            break;
        }
      }
    }
    return collection;
  }
};
const data$1 = {
  "grinning": "\u{1F600}",
  "smiley": "\u{1F603}",
  "smile": "\u{1F604}",
  "grin": "\u{1F601}",
  "laughing": "\u{1F606}",
  "sweat_smile": "\u{1F605}",
  "joy": "\u{1F602}",
  "blush": "\u{1F60A}",
  "innocent": "\u{1F607}",
  "wink": "\u{1F609}",
  "relieved": "\u{1F60C}",
  "heart_eyes": "\u{1F60D}",
  "kissing_heart": "\u{1F618}",
  "kissing": "\u{1F617}",
  "kissing_smiling_eyes": "\u{1F619}",
  "kissing_closed_eyes": "\u{1F61A}",
  "yum": "\u{1F60B}",
  "stuck_out_tongue_winking_eye": "\u{1F61C}",
  "stuck_out_tongue_closed_eyes": "\u{1F61D}",
  "stuck_out_tongue": "\u{1F61B}",
  "sunglasses": "\u{1F60E}",
  "smirk": "\u{1F60F}",
  "unamused": "\u{1F612}",
  "disappointed": "\u{1F61E}",
  "pensive": "\u{1F614}",
  "worried": "\u{1F61F}",
  "confused": "\u{1F615}",
  "persevere": "\u{1F623}",
  "confounded": "\u{1F616}",
  "tired_face": "\u{1F62B}",
  "weary": "\u{1F629}",
  "angry": "\u{1F620}",
  "rage": "\u{1F621}",
  "no_mouth": "\u{1F636}",
  "neutral_face": "\u{1F610}",
  "expressionless": "\u{1F611}",
  "hushed": "\u{1F62F}",
  "frowning": "\u{1F626}",
  "anguished": "\u{1F627}",
  "open_mouth": "\u{1F62E}",
  "astonished": "\u{1F632}",
  "dizzy_face": "\u{1F635}",
  "flushed": "\u{1F633}",
  "scream": "\u{1F631}",
  "fearful": "\u{1F628}",
  "cold_sweat": "\u{1F630}",
  "cry": "\u{1F622}",
  "disappointed_relieved": "\u{1F625}",
  "sob": "\u{1F62D}",
  "sweat": "\u{1F613}",
  "sleepy": "\u{1F62A}",
  "sleeping": "\u{1F634}",
  "mask": "\u{1F637}",
  "smiling_imp": "\u{1F608}",
  "smiley_cat": "\u{1F63A}",
  "smile_cat": "\u{1F638}",
  "joy_cat": "\u{1F639}",
  "heart_eyes_cat": "\u{1F63B}",
  "smirk_cat": "\u{1F63C}",
  "kissing_cat": "\u{1F63D}",
  "scream_cat": "\u{1F640}",
  "crying_cat_face": "\u{1F63F}",
  "pouting_cat": "\u{1F63E}",
  "cat": "\u{1F431}",
  "mouse": "\u{1F42D}",
  "cow": "\u{1F42E}",
  "monkey_face": "\u{1F435}",
  "hand": "\u270B",
  "fist": "\u270A",
  "v": "\u270C\uFE0F",
  "point_up": "\u{1F446}",
  "point_down": "\u{1F447}",
  "point_left": "\u{1F448}",
  "point_right": "\u{1F449}",
  "facepunch": "\u{1F44A}",
  "wave": "\u{1F44B}",
  "clap": "\u{1F44F}",
  "open_hands": "\u{1F450}",
  "+1": "\u{1F44D}",
  "-1": "\u{1F44E}",
  "ok_hand": "\u{1F44C}",
  "pray": "\u{1F64F}",
  "ear": "\u{1F442}",
  "eyes": "\u{1F440}",
  "nose": "\u{1F443}",
  "lips": "\u{1F444}",
  "tongue": "\u{1F445}",
  "heart": "\u2764\uFE0F",
  "cupid": "\u{1F498}",
  "sparkling_heart": "\u{1F496}",
  "star": "\u2B50\uFE0F",
  "sparkles": "\u2728",
  "zap": "\u26A1\uFE0F",
  "sunny": "\u2600\uFE0F",
  "cloud": "\u2601\uFE0F",
  "snowflake": "\u2744\uFE0F",
  "umbrella": "\u2614\uFE0F",
  "coffee": "\u2615\uFE0F",
  "airplane": "\u2708\uFE0F",
  "anchor": "\u2693\uFE0F",
  "watch": "\u231A\uFE0F",
  "phone": "\u260E\uFE0F",
  "hourglass": "\u231B\uFE0F",
  "email": "\u2709\uFE0F",
  "scissors": "\u2702\uFE0F",
  "black_nib": "\u2712\uFE0F",
  "pencil2": "\u270F\uFE0F",
  "x": "\u274C",
  "recycle": "\u267B\uFE0F",
  "white_check_mark": "\u2705",
  "negative_squared_cross_mark": "\u274E",
  "m": "\u24C2\uFE0F",
  "i": "\u2139\uFE0F",
  "tm": "\u2122\uFE0F",
  "copyright": "\xA9\uFE0F",
  "registered": "\xAE\uFE0F"
};
const Emoji = {
  data: data$1,
  parse: (str) => String(str).replace(/:(.+?):/g, (placeholder, key) => Emoji.data[key] || placeholder)
};
var av = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 171);
    }([
      function(module2, __webpack_exports__, __webpack_require__) {
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        var __WEBPACK_IMPORTED_MODULE_0__index_default_js__ = __webpack_require__(194);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return __WEBPACK_IMPORTED_MODULE_0__index_default_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(74);
        __webpack_require__.d(__webpack_exports__, "VERSION", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["VERSION"];
        });
        __webpack_require__.d(__webpack_exports__, "restArguments", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["restArguments"];
        });
        __webpack_require__.d(__webpack_exports__, "isObject", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isObject"];
        });
        __webpack_require__.d(__webpack_exports__, "isNull", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNull"];
        });
        __webpack_require__.d(__webpack_exports__, "isUndefined", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isUndefined"];
        });
        __webpack_require__.d(__webpack_exports__, "isBoolean", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isBoolean"];
        });
        __webpack_require__.d(__webpack_exports__, "isElement", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isElement"];
        });
        __webpack_require__.d(__webpack_exports__, "isString", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isString"];
        });
        __webpack_require__.d(__webpack_exports__, "isNumber", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNumber"];
        });
        __webpack_require__.d(__webpack_exports__, "isDate", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDate"];
        });
        __webpack_require__.d(__webpack_exports__, "isRegExp", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isRegExp"];
        });
        __webpack_require__.d(__webpack_exports__, "isError", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isError"];
        });
        __webpack_require__.d(__webpack_exports__, "isSymbol", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSymbol"];
        });
        __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArrayBuffer"];
        });
        __webpack_require__.d(__webpack_exports__, "isDataView", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDataView"];
        });
        __webpack_require__.d(__webpack_exports__, "isArray", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArray"];
        });
        __webpack_require__.d(__webpack_exports__, "isFunction", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFunction"];
        });
        __webpack_require__.d(__webpack_exports__, "isArguments", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArguments"];
        });
        __webpack_require__.d(__webpack_exports__, "isFinite", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFinite"];
        });
        __webpack_require__.d(__webpack_exports__, "isNaN", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNaN"];
        });
        __webpack_require__.d(__webpack_exports__, "isTypedArray", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isTypedArray"];
        });
        __webpack_require__.d(__webpack_exports__, "isEmpty", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEmpty"];
        });
        __webpack_require__.d(__webpack_exports__, "isMatch", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMatch"];
        });
        __webpack_require__.d(__webpack_exports__, "isEqual", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEqual"];
        });
        __webpack_require__.d(__webpack_exports__, "isMap", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMap"];
        });
        __webpack_require__.d(__webpack_exports__, "isWeakMap", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakMap"];
        });
        __webpack_require__.d(__webpack_exports__, "isSet", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSet"];
        });
        __webpack_require__.d(__webpack_exports__, "isWeakSet", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakSet"];
        });
        __webpack_require__.d(__webpack_exports__, "keys", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["keys"];
        });
        __webpack_require__.d(__webpack_exports__, "allKeys", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["allKeys"];
        });
        __webpack_require__.d(__webpack_exports__, "values", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["values"];
        });
        __webpack_require__.d(__webpack_exports__, "pairs", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["pairs"];
        });
        __webpack_require__.d(__webpack_exports__, "invert", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["invert"];
        });
        __webpack_require__.d(__webpack_exports__, "functions", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["functions"];
        });
        __webpack_require__.d(__webpack_exports__, "methods", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["methods"];
        });
        __webpack_require__.d(__webpack_exports__, "extend", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["extend"];
        });
        __webpack_require__.d(__webpack_exports__, "extendOwn", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["extendOwn"];
        });
        __webpack_require__.d(__webpack_exports__, "assign", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["assign"];
        });
        __webpack_require__.d(__webpack_exports__, "defaults", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["defaults"];
        });
        __webpack_require__.d(__webpack_exports__, "create", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["create"];
        });
        __webpack_require__.d(__webpack_exports__, "clone", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["clone"];
        });
        __webpack_require__.d(__webpack_exports__, "tap", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["tap"];
        });
        __webpack_require__.d(__webpack_exports__, "get", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["get"];
        });
        __webpack_require__.d(__webpack_exports__, "has", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["has"];
        });
        __webpack_require__.d(__webpack_exports__, "mapObject", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["mapObject"];
        });
        __webpack_require__.d(__webpack_exports__, "identity", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["identity"];
        });
        __webpack_require__.d(__webpack_exports__, "constant", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["constant"];
        });
        __webpack_require__.d(__webpack_exports__, "noop", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["noop"];
        });
        __webpack_require__.d(__webpack_exports__, "toPath", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["toPath"];
        });
        __webpack_require__.d(__webpack_exports__, "property", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["property"];
        });
        __webpack_require__.d(__webpack_exports__, "propertyOf", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["propertyOf"];
        });
        __webpack_require__.d(__webpack_exports__, "matcher", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["matcher"];
        });
        __webpack_require__.d(__webpack_exports__, "matches", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["matches"];
        });
        __webpack_require__.d(__webpack_exports__, "times", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["times"];
        });
        __webpack_require__.d(__webpack_exports__, "random", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["random"];
        });
        __webpack_require__.d(__webpack_exports__, "now", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["now"];
        });
        __webpack_require__.d(__webpack_exports__, "escape", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["escape"];
        });
        __webpack_require__.d(__webpack_exports__, "unescape", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["unescape"];
        });
        __webpack_require__.d(__webpack_exports__, "templateSettings", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["templateSettings"];
        });
        __webpack_require__.d(__webpack_exports__, "template", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["template"];
        });
        __webpack_require__.d(__webpack_exports__, "result", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["result"];
        });
        __webpack_require__.d(__webpack_exports__, "uniqueId", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniqueId"];
        });
        __webpack_require__.d(__webpack_exports__, "chain", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["chain"];
        });
        __webpack_require__.d(__webpack_exports__, "iteratee", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["iteratee"];
        });
        __webpack_require__.d(__webpack_exports__, "partial", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["partial"];
        });
        __webpack_require__.d(__webpack_exports__, "bind", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["bind"];
        });
        __webpack_require__.d(__webpack_exports__, "bindAll", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["bindAll"];
        });
        __webpack_require__.d(__webpack_exports__, "memoize", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["memoize"];
        });
        __webpack_require__.d(__webpack_exports__, "delay", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["delay"];
        });
        __webpack_require__.d(__webpack_exports__, "defer", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["defer"];
        });
        __webpack_require__.d(__webpack_exports__, "throttle", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["throttle"];
        });
        __webpack_require__.d(__webpack_exports__, "debounce", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["debounce"];
        });
        __webpack_require__.d(__webpack_exports__, "wrap", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["wrap"];
        });
        __webpack_require__.d(__webpack_exports__, "negate", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["negate"];
        });
        __webpack_require__.d(__webpack_exports__, "compose", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["compose"];
        });
        __webpack_require__.d(__webpack_exports__, "after", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["after"];
        });
        __webpack_require__.d(__webpack_exports__, "before", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["before"];
        });
        __webpack_require__.d(__webpack_exports__, "once", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["once"];
        });
        __webpack_require__.d(__webpack_exports__, "findKey", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["findKey"];
        });
        __webpack_require__.d(__webpack_exports__, "findIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["findIndex"];
        });
        __webpack_require__.d(__webpack_exports__, "findLastIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["findLastIndex"];
        });
        __webpack_require__.d(__webpack_exports__, "sortedIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortedIndex"];
        });
        __webpack_require__.d(__webpack_exports__, "indexOf", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexOf"];
        });
        __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["lastIndexOf"];
        });
        __webpack_require__.d(__webpack_exports__, "find", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["find"];
        });
        __webpack_require__.d(__webpack_exports__, "detect", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["detect"];
        });
        __webpack_require__.d(__webpack_exports__, "findWhere", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["findWhere"];
        });
        __webpack_require__.d(__webpack_exports__, "each", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["each"];
        });
        __webpack_require__.d(__webpack_exports__, "forEach", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["forEach"];
        });
        __webpack_require__.d(__webpack_exports__, "map", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["map"];
        });
        __webpack_require__.d(__webpack_exports__, "collect", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["collect"];
        });
        __webpack_require__.d(__webpack_exports__, "reduce", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduce"];
        });
        __webpack_require__.d(__webpack_exports__, "foldl", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldl"];
        });
        __webpack_require__.d(__webpack_exports__, "inject", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["inject"];
        });
        __webpack_require__.d(__webpack_exports__, "reduceRight", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduceRight"];
        });
        __webpack_require__.d(__webpack_exports__, "foldr", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldr"];
        });
        __webpack_require__.d(__webpack_exports__, "filter", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["filter"];
        });
        __webpack_require__.d(__webpack_exports__, "select", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["select"];
        });
        __webpack_require__.d(__webpack_exports__, "reject", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["reject"];
        });
        __webpack_require__.d(__webpack_exports__, "every", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["every"];
        });
        __webpack_require__.d(__webpack_exports__, "all", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["all"];
        });
        __webpack_require__.d(__webpack_exports__, "some", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["some"];
        });
        __webpack_require__.d(__webpack_exports__, "any", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["any"];
        });
        __webpack_require__.d(__webpack_exports__, "contains", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["contains"];
        });
        __webpack_require__.d(__webpack_exports__, "includes", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["includes"];
        });
        __webpack_require__.d(__webpack_exports__, "include", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["include"];
        });
        __webpack_require__.d(__webpack_exports__, "invoke", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["invoke"];
        });
        __webpack_require__.d(__webpack_exports__, "pluck", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["pluck"];
        });
        __webpack_require__.d(__webpack_exports__, "where", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["where"];
        });
        __webpack_require__.d(__webpack_exports__, "max", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["max"];
        });
        __webpack_require__.d(__webpack_exports__, "min", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["min"];
        });
        __webpack_require__.d(__webpack_exports__, "shuffle", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["shuffle"];
        });
        __webpack_require__.d(__webpack_exports__, "sample", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["sample"];
        });
        __webpack_require__.d(__webpack_exports__, "sortBy", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortBy"];
        });
        __webpack_require__.d(__webpack_exports__, "groupBy", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["groupBy"];
        });
        __webpack_require__.d(__webpack_exports__, "indexBy", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexBy"];
        });
        __webpack_require__.d(__webpack_exports__, "countBy", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["countBy"];
        });
        __webpack_require__.d(__webpack_exports__, "partition", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["partition"];
        });
        __webpack_require__.d(__webpack_exports__, "toArray", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["toArray"];
        });
        __webpack_require__.d(__webpack_exports__, "size", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["size"];
        });
        __webpack_require__.d(__webpack_exports__, "pick", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["pick"];
        });
        __webpack_require__.d(__webpack_exports__, "omit", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["omit"];
        });
        __webpack_require__.d(__webpack_exports__, "first", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["first"];
        });
        __webpack_require__.d(__webpack_exports__, "head", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["head"];
        });
        __webpack_require__.d(__webpack_exports__, "take", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["take"];
        });
        __webpack_require__.d(__webpack_exports__, "initial", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["initial"];
        });
        __webpack_require__.d(__webpack_exports__, "last", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["last"];
        });
        __webpack_require__.d(__webpack_exports__, "rest", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["rest"];
        });
        __webpack_require__.d(__webpack_exports__, "tail", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["tail"];
        });
        __webpack_require__.d(__webpack_exports__, "drop", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["drop"];
        });
        __webpack_require__.d(__webpack_exports__, "compact", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["compact"];
        });
        __webpack_require__.d(__webpack_exports__, "flatten", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["flatten"];
        });
        __webpack_require__.d(__webpack_exports__, "without", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["without"];
        });
        __webpack_require__.d(__webpack_exports__, "uniq", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniq"];
        });
        __webpack_require__.d(__webpack_exports__, "unique", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["unique"];
        });
        __webpack_require__.d(__webpack_exports__, "union", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["union"];
        });
        __webpack_require__.d(__webpack_exports__, "intersection", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["intersection"];
        });
        __webpack_require__.d(__webpack_exports__, "difference", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["difference"];
        });
        __webpack_require__.d(__webpack_exports__, "unzip", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["unzip"];
        });
        __webpack_require__.d(__webpack_exports__, "transpose", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["transpose"];
        });
        __webpack_require__.d(__webpack_exports__, "zip", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["zip"];
        });
        __webpack_require__.d(__webpack_exports__, "object", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["object"];
        });
        __webpack_require__.d(__webpack_exports__, "range", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["range"];
        });
        __webpack_require__.d(__webpack_exports__, "chunk", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["chunk"];
        });
        __webpack_require__.d(__webpack_exports__, "mixin", function() {
          return __WEBPACK_IMPORTED_MODULE_1__index_js__["mixin"];
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        (function(global2) {
          __webpack_require__.d(__webpack_exports__, "e", function() {
            return VERSION2;
          });
          __webpack_require__.d(__webpack_exports__, "p", function() {
            return root;
          });
          __webpack_require__.d(__webpack_exports__, "a", function() {
            return ArrayProto;
          });
          __webpack_require__.d(__webpack_exports__, "c", function() {
            return ObjProto;
          });
          __webpack_require__.d(__webpack_exports__, "d", function() {
            return SymbolProto;
          });
          __webpack_require__.d(__webpack_exports__, "o", function() {
            return push;
          });
          __webpack_require__.d(__webpack_exports__, "q", function() {
            return slice;
          });
          __webpack_require__.d(__webpack_exports__, "t", function() {
            return toString3;
          });
          __webpack_require__.d(__webpack_exports__, "i", function() {
            return hasOwnProperty;
          });
          __webpack_require__.d(__webpack_exports__, "r", function() {
            return supportsArrayBuffer;
          });
          __webpack_require__.d(__webpack_exports__, "s", function() {
            return supportsDataView;
          });
          __webpack_require__.d(__webpack_exports__, "k", function() {
            return nativeIsArray;
          });
          __webpack_require__.d(__webpack_exports__, "m", function() {
            return nativeKeys;
          });
          __webpack_require__.d(__webpack_exports__, "j", function() {
            return nativeCreate;
          });
          __webpack_require__.d(__webpack_exports__, "l", function() {
            return nativeIsView;
          });
          __webpack_require__.d(__webpack_exports__, "g", function() {
            return _isNaN;
          });
          __webpack_require__.d(__webpack_exports__, "f", function() {
            return _isFinite;
          });
          __webpack_require__.d(__webpack_exports__, "h", function() {
            return hasEnumBug;
          });
          __webpack_require__.d(__webpack_exports__, "n", function() {
            return nonEnumerableProps;
          });
          __webpack_require__.d(__webpack_exports__, "b", function() {
            return MAX_ARRAY_INDEX;
          });
          var VERSION2 = "1.12.1";
          var root = typeof self == "object" && self.self === self && self || typeof global2 == "object" && global2.global === global2 && global2 || Function("return this")() || {};
          var ArrayProto = Array.prototype, ObjProto = Object.prototype;
          var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
          var push = ArrayProto.push, slice = ArrayProto.slice, toString3 = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
          var supportsArrayBuffer = typeof ArrayBuffer !== "undefined", supportsDataView = typeof DataView !== "undefined";
          var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeCreate = Object.create, nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
          var _isNaN = isNaN, _isFinite = isFinite;
          var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
          var nonEnumerableProps = [
            "valueOf",
            "isPrototypeOf",
            "toString",
            "propertyIsEnumerable",
            "hasOwnProperty",
            "toLocaleString"
          ];
          var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
        }).call(__webpack_exports__, __webpack_require__(109));
      },
      function(module2, exports2) {
        var core = module2.exports = { version: "2.6.9" };
        if (typeof __e == "number")
          __e = core;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(174), __esModule: true };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = keys;
        var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(22);
        var __WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__ = __webpack_require__(120);
        function keys(obj) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a"])(obj))
            return [];
          if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["m"])
            return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__["m"])(obj);
          var keys2 = [];
          for (var key in obj)
            if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__["a"])(obj, key))
              keys2.push(key);
          if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["h"])
            Object(__WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__["a"])(obj, keys2);
          return keys2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = tagTester;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function tagTester(name) {
          var tag = "[object " + name + "]";
          return function(obj) {
            return __WEBPACK_IMPORTED_MODULE_0__setup_js__["t"].call(obj) === tag;
          };
        }
      },
      function(module2, exports2) {
        var global2 = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number")
          __g = global2;
      },
      function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__(69)("wks");
        var uid = __webpack_require__(54);
        var Symbol2 = __webpack_require__(6).Symbol;
        var USE_SYMBOL = typeof Symbol2 == "function";
        var $exports = module2.exports = function(name) {
          return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
        };
        $exports.store = store;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = cb;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(130);
        var __WEBPACK_IMPORTED_MODULE_2__iteratee_js__ = __webpack_require__(131);
        function cb(value, context, argCount) {
          if (__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].iteratee !== __WEBPACK_IMPORTED_MODULE_2__iteratee_js__["a"])
            return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].iteratee(value, context);
          return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__["a"])(value, context, argCount);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = restArguments;
        function restArguments(func, startIndex) {
          startIndex = startIndex == null ? func.length - 1 : +startIndex;
          return function() {
            var length = Math.max(arguments.length - startIndex, 0), rest = Array(length), index2 = 0;
            for (; index2 < length; index2++) {
              rest[index2] = arguments[index2 + startIndex];
            }
            switch (startIndex) {
              case 0:
                return func.call(this, rest);
              case 1:
                return func.call(this, arguments[0], rest);
              case 2:
                return func.call(this, arguments[0], arguments[1], rest);
            }
            var args = Array(startIndex + 1);
            for (index2 = 0; index2 < startIndex; index2++) {
              args[index2] = arguments[index2];
            }
            args[startIndex] = rest;
            return func.apply(this, args);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = _;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function _(obj) {
          if (obj instanceof _)
            return obj;
          if (!(this instanceof _))
            return new _(obj);
          this._wrapped = obj;
        }
        _.VERSION = __WEBPACK_IMPORTED_MODULE_0__setup_js__["e"];
        _.prototype.value = function() {
          return this._wrapped;
        };
        _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
        _.prototype.toString = function() {
          return String(this._wrapped);
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(118);
        var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a"]);
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var md52 = __webpack_require__(312);
        var _require = __webpack_require__(0), extend2 = _require.extend;
        var AV2 = __webpack_require__(36);
        var _require2 = __webpack_require__(15), getSessionToken = _require2.getSessionToken;
        var ajax = __webpack_require__(60);
        var sign = function sign2(key, isMasterKey) {
          var now = new Date().getTime();
          var signature = md52(now + key);
          if (isMasterKey) {
            return signature + "," + now + ",master";
          }
          return signature + "," + now;
        };
        var setAppKey = function setAppKey2(headers, signKey) {
          if (signKey) {
            headers["X-LC-Sign"] = sign(AV2.applicationKey);
          } else {
            headers["X-LC-Key"] = AV2.applicationKey;
          }
        };
        var setHeaders = function setHeaders2() {
          var authOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var signKey = arguments[1];
          var headers = {
            "X-LC-Id": AV2.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          };
          var useMasterKey = false;
          if (typeof authOptions.useMasterKey === "boolean") {
            useMasterKey = authOptions.useMasterKey;
          } else if (typeof AV2._config.useMasterKey === "boolean") {
            useMasterKey = AV2._config.useMasterKey;
          }
          if (useMasterKey) {
            if (AV2.masterKey) {
              if (signKey) {
                headers["X-LC-Sign"] = sign(AV2.masterKey, true);
              } else {
                headers["X-LC-Key"] = AV2.masterKey + ",master";
              }
            } else {
              console.warn("masterKey is not set, fall back to use appKey");
              setAppKey(headers, signKey);
            }
          } else {
            setAppKey(headers, signKey);
          }
          if (AV2.hookKey) {
            headers["X-LC-Hook-Key"] = AV2.hookKey;
          }
          if (AV2._config.production !== null) {
            headers["X-LC-Prod"] = String(AV2._config.production);
          }
          headers["X-LC-UA"] = AV2._sharedConfig.userAgent;
          return _promise2.default.resolve().then(function() {
            var sessionToken = getSessionToken(authOptions);
            if (sessionToken) {
              headers["X-LC-Session"] = sessionToken;
            } else if (!AV2._config.disableCurrentUser) {
              return AV2.User.currentAsync().then(function(currentUser) {
                if (currentUser && currentUser._sessionToken) {
                  headers["X-LC-Session"] = currentUser._sessionToken;
                }
                return headers;
              });
            }
            return headers;
          });
        };
        var createApiUrl = function createApiUrl2(_ref) {
          var _ref$service = _ref.service, service = _ref$service === void 0 ? "api" : _ref$service, _ref$version = _ref.version, version = _ref$version === void 0 ? "1.1" : _ref$version, path = _ref.path;
          var apiURL = AV2._config.serverURLs[service];
          if (!apiURL)
            throw new Error("undefined server URL for " + service);
          if (apiURL.charAt(apiURL.length - 1) !== "/") {
            apiURL += "/";
          }
          apiURL += version;
          if (path) {
            apiURL += path;
          }
          return apiURL;
        };
        var request2 = function request3(_ref2) {
          var service = _ref2.service, version = _ref2.version, method = _ref2.method, path = _ref2.path, query = _ref2.query, data2 = _ref2.data, authOptions = _ref2.authOptions, _ref2$signKey = _ref2.signKey, signKey = _ref2$signKey === void 0 ? true : _ref2$signKey;
          if (!(AV2.applicationId && (AV2.applicationKey || AV2.masterKey))) {
            throw new Error("Not initialized");
          }
          if (AV2._appRouter) {
            AV2._appRouter.refresh();
          }
          var timeout = AV2._config.requestTimeout;
          var url = createApiUrl({ service, path, version });
          return setHeaders(authOptions, signKey).then(function(headers) {
            return ajax({ method, url, query, data: data2, headers, timeout }).catch(function(error) {
              var errorJSON = {
                code: error.code || -1,
                error: error.message || error.responseText
              };
              if (error.response && error.response.code) {
                errorJSON = error.response;
              } else if (error.responseText) {
                try {
                  errorJSON = JSON.parse(error.responseText);
                } catch (e2) {
                }
              }
              errorJSON.rawMessage = errorJSON.rawMessage || errorJSON.error;
              if (!AV2._sharedConfig.keepErrorRawMessage) {
                errorJSON.error += " [" + (error.statusCode || "N/A") + " " + method + " " + url + "]";
              }
              var err = new Error(errorJSON.error);
              delete errorJSON.error;
              throw _.extend(err, errorJSON);
            });
          });
        };
        var _request = function _request2(route, className, objectId, method, data2, authOptions, query) {
          var path = "";
          if (route)
            path += "/" + route;
          if (className)
            path += "/" + className;
          if (objectId)
            path += "/" + objectId;
          if (data2 && data2._fetchWhenSave)
            throw new Error("_fetchWhenSave should be in the query");
          if (data2 && data2._where)
            throw new Error("_where should be in the query");
          if (method && method.toLowerCase() === "get") {
            query = extend2({}, query, data2);
            data2 = null;
          }
          return request2({
            method,
            path,
            query,
            data: data2,
            authOptions
          });
        };
        AV2.request = request2;
        module2.exports = {
          _request,
          request: request2
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var isFunction2 = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Function");
        var nodelist = __WEBPACK_IMPORTED_MODULE_1__setup_js__["p"].document && __WEBPACK_IMPORTED_MODULE_1__setup_js__["p"].document.childNodes;
        if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
          isFunction2 = function(obj) {
            return typeof obj == "function" || false;
          };
        }
        __webpack_exports__["a"] = isFunction2;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(119);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__["a"])("length");
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        var _getPrototypeOf = __webpack_require__(160);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var isNullOrUndefined = function isNullOrUndefined2(x) {
          return _.isNull(x) || _.isUndefined(x);
        };
        var ensureArray = function ensureArray2(target) {
          if (_.isArray(target)) {
            return target;
          }
          if (target === void 0 || target === null) {
            return [];
          }
          return [target];
        };
        var transformFetchOptions = function transformFetchOptions2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, keys = _ref.keys, include = _ref.include, includeACL = _ref.includeACL;
          var fetchOptions = {};
          if (keys) {
            fetchOptions.keys = ensureArray(keys).join(",");
          }
          if (include) {
            fetchOptions.include = ensureArray(include).join(",");
          }
          if (includeACL) {
            fetchOptions.returnACL = includeACL;
          }
          return fetchOptions;
        };
        var getSessionToken = function getSessionToken2(authOptions) {
          if (authOptions.sessionToken) {
            return authOptions.sessionToken;
          }
          if (authOptions.user && typeof authOptions.user.getSessionToken === "function") {
            return authOptions.user.getSessionToken();
          }
        };
        var tap = function tap2(interceptor) {
          return function(value) {
            return interceptor(value), value;
          };
        };
        var EmptyConstructor = function EmptyConstructor2() {
        };
        var inherits = function inherits2(parent, protoProps, staticProps) {
          var child;
          if (protoProps && protoProps.hasOwnProperty("constructor")) {
            child = protoProps.constructor;
          } else {
            child = function child2() {
              parent.apply(this, arguments);
            };
          }
          _.extend(child, parent);
          EmptyConstructor.prototype = parent.prototype;
          child.prototype = new EmptyConstructor();
          if (protoProps) {
            _.extend(child.prototype, protoProps);
          }
          if (staticProps) {
            _.extend(child, staticProps);
          }
          child.prototype.constructor = child;
          child.__super__ = parent.prototype;
          return child;
        };
        var parseDate = function parseDate2(iso8601) {
          return new Date(iso8601);
        };
        var setValue = function setValue2(target, key, value) {
          var segs = key.split(".");
          var lastSeg = segs.pop();
          var currentTarget = target;
          segs.forEach(function(seg) {
            if (currentTarget[seg] === void 0)
              currentTarget[seg] = {};
            currentTarget = currentTarget[seg];
          });
          currentTarget[lastSeg] = value;
          return target;
        };
        var findValue = function findValue2(target, key) {
          var segs = key.split(".");
          var firstSeg = segs[0];
          var lastSeg = segs.pop();
          var currentTarget = target;
          for (var i2 = 0; i2 < segs.length; i2++) {
            currentTarget = currentTarget[segs[i2]];
            if (currentTarget === void 0) {
              return [void 0, void 0, lastSeg];
            }
          }
          var value = currentTarget[lastSeg];
          return [value, currentTarget, lastSeg, firstSeg];
        };
        var isPlainObject2 = function isPlainObject3(obj) {
          return _.isObject(obj) && (0, _getPrototypeOf2.default)(obj) === Object.prototype;
        };
        var continueWhile = function continueWhile2(predicate, asyncFunction) {
          if (predicate()) {
            return asyncFunction().then(function() {
              return continueWhile2(predicate, asyncFunction);
            });
          }
          return _promise2.default.resolve();
        };
        module2.exports = {
          isNullOrUndefined,
          ensureArray,
          transformFetchOptions,
          getSessionToken,
          tap,
          inherits,
          parseDate,
          setValue,
          findValue,
          isPlainObject: isPlainObject2,
          continueWhile
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var core = __webpack_require__(2);
        var ctx = __webpack_require__(31);
        var hide = __webpack_require__(23);
        var has = __webpack_require__(24);
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source2) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports3[PROTOTYPE];
          var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] : (global2[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL)
            source2 = name;
          for (key in source2) {
            own = !IS_FORCED && target && target[key] !== void 0;
            if (own && has(exports3, key))
              continue;
            out = own ? target[key] : source2[key];
            exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source2[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
              var F = function(a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();
                    case 1:
                      return new C(a);
                    case 2:
                      return new C(a, b);
                  }
                  return new C(a, b, c);
                }
                return C.apply(this, arguments);
              };
              F[PROTOTYPE] = C[PROTOTYPE];
              return F;
            }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
            if (IS_PROTO) {
              (exports3.virtual || (exports3.virtual = {}))[key] = out;
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out);
            }
          }
        };
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module2.exports = $export;
      },
      function(module2, exports2, __webpack_require__) {
        var isObject2 = __webpack_require__(20);
        module2.exports = function(it) {
          if (!isObject2(it))
            throw TypeError(it + " is not an object!");
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        var IE8_DOM_DEFINE = __webpack_require__(97);
        var toPrimitive = __webpack_require__(65);
        var dP = Object.defineProperty;
        exports2.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return dP(O, P, Attributes);
            } catch (e2) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported!");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(266), __esModule: true };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__(41)(function() {
          return Object.defineProperty({}, "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = has;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function has(obj, key) {
          return obj != null && __WEBPACK_IMPORTED_MODULE_0__setup_js__["i"].call(obj, key);
        }
      },
      function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__(18);
        var createDesc = __webpack_require__(42);
        module2.exports = __webpack_require__(21) ? function(object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var IObject = __webpack_require__(178);
        var defined = __webpack_require__(63);
        module2.exports = function(it) {
          return IObject(defined(it));
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isObject2;
        function isObject2(obj) {
          var type = typeof obj;
          return type === "function" || type === "object" && !!obj;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__setup_js__["k"] || Object(__WEBPACK_IMPORTED_MODULE_1__tagTester_js__["a"])("Array");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = each;
        var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(48);
        var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
        function each(obj, iteratee, context) {
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__["a"])(iteratee, context);
          var i2, length;
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a"])(obj)) {
            for (i2 = 0, length = obj.length; i2 < length; i2++) {
              iteratee(obj[i2], i2, obj);
            }
          } else {
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a"])(obj);
            for (i2 = 0, length = _keys.length; i2 < length; i2++) {
              iteratee(obj[_keys[i2]], _keys[i2], obj);
            }
          }
          return obj;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        function AVError(code, message) {
          var error = new Error(message);
          error.code = code;
          return error;
        }
        _.extend(AVError, {
          OTHER_CAUSE: -1,
          INTERNAL_SERVER_ERROR: 1,
          CONNECTION_FAILED: 100,
          OBJECT_NOT_FOUND: 101,
          INVALID_QUERY: 102,
          INVALID_CLASS_NAME: 103,
          MISSING_OBJECT_ID: 104,
          INVALID_KEY_NAME: 105,
          INVALID_POINTER: 106,
          INVALID_JSON: 107,
          COMMAND_UNAVAILABLE: 108,
          NOT_INITIALIZED: 109,
          INCORRECT_TYPE: 111,
          INVALID_CHANNEL_NAME: 112,
          PUSH_MISCONFIGURED: 115,
          OBJECT_TOO_LARGE: 116,
          OPERATION_FORBIDDEN: 119,
          CACHE_MISS: 120,
          INVALID_NESTED_KEY: 121,
          INVALID_FILE_NAME: 122,
          INVALID_ACL: 123,
          TIMEOUT: 124,
          INVALID_EMAIL_ADDRESS: 125,
          MISSING_CONTENT_TYPE: 126,
          MISSING_CONTENT_LENGTH: 127,
          INVALID_CONTENT_LENGTH: 128,
          FILE_TOO_LARGE: 129,
          FILE_SAVE_ERROR: 130,
          FILE_DELETE_ERROR: 153,
          DUPLICATE_VALUE: 137,
          INVALID_ROLE_NAME: 139,
          EXCEEDED_QUOTA: 140,
          SCRIPT_FAILED: 141,
          VALIDATION_ERROR: 142,
          INVALID_IMAGE_DATA: 150,
          UNSAVED_FILE_ERROR: 151,
          INVALID_PUSH_TIME_ERROR: 152,
          USERNAME_MISSING: 200,
          PASSWORD_MISSING: 201,
          USERNAME_TAKEN: 202,
          EMAIL_TAKEN: 203,
          EMAIL_MISSING: 204,
          EMAIL_NOT_FOUND: 205,
          SESSION_MISSING: 206,
          MUST_CREATE_USER_THROUGH_SIGNUP: 207,
          ACCOUNT_ALREADY_LINKED: 208,
          LINKED_ID_MISSING: 250,
          INVALID_LINKED_SESSION: 251,
          UNSUPPORTED_SERVICE: 252,
          X_DOMAIN_REQUEST: 602
        });
        module2.exports = AVError;
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _iterator = __webpack_require__(61);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(51);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
          return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function(obj) {
          return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(52);
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      function(module2, exports2) {
        module2.exports = {};
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = values;
        var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
        function values(obj) {
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a"])(obj);
          var length = _keys.length;
          var values2 = Array(length);
          for (var i2 = 0; i2 < length; i2++) {
            values2[i2] = obj[_keys[i2]];
          }
          return values2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = flatten;
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(77);
        function flatten(input, depth, strict, output) {
          output = output || [];
          if (!depth && depth !== 0) {
            depth = Infinity;
          } else if (depth <= 0) {
            return output.concat(input);
          }
          var idx = output.length;
          for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(input); i2 < length; i2++) {
            var value = input[i2];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a"])(value) && (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a"])(value) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__["a"])(value))) {
              if (depth > 1) {
                flatten(value, depth - 1, strict, output);
                idx = output.length;
              } else {
                var j = 0, len = value.length;
                while (j < len)
                  output[idx++] = value[j++];
              }
            } else if (!strict) {
              output[idx++] = value;
            }
          }
          return output;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = map;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
        function map(obj, iteratee, context) {
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(iteratee, context);
          var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a"])(obj), length = (_keys || obj).length, results = Array(length);
          for (var index2 = 0; index2 < length; index2++) {
            var currentKey = _keys ? _keys[index2] : index2;
            results[index2] = iteratee(obj[currentKey], currentKey, obj);
          }
          return results;
        }
      },
      function(module2, exports2, __webpack_require__) {
        (function(global2) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _keys = __webpack_require__(158);
          var _keys2 = _interopRequireDefault(_keys);
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var uuid = __webpack_require__(159);
          var debug = __webpack_require__(37);
          var _require = __webpack_require__(15), inherits = _require.inherits, parseDate = _require.parseDate;
          var version = __webpack_require__(161);
          var _require2 = __webpack_require__(38), setAdapters = _require2.setAdapters, adapterManager = _require2.adapterManager;
          var AV2 = global2.AV || {};
          AV2._config = {
            serverURLs: {},
            useMasterKey: false,
            production: null,
            realtime: null,
            requestTimeout: null
          };
          var initialUserAgent = "LeanCloud-JS-SDK/" + version;
          AV2._sharedConfig = {
            userAgent: initialUserAgent,
            liveQueryRealtime: null
          };
          adapterManager.on("platformInfo", function(platformInfo) {
            var ua = initialUserAgent;
            if (platformInfo) {
              if (platformInfo.userAgent) {
                ua = platformInfo.userAgent;
              } else {
                var comments = platformInfo.name;
                if (platformInfo.version) {
                  comments += "/" + platformInfo.version;
                }
                if (platformInfo.extra) {
                  comments += "; " + platformInfo.extra;
                }
                ua += " (" + comments + ")";
              }
            }
            AV2._sharedConfig.userAgent = ua;
          });
          AV2._getAVPath = function(path) {
            if (!AV2.applicationId) {
              throw new Error("You need to call AV.initialize before using AV.");
            }
            if (!path) {
              path = "";
            }
            if (!_.isString(path)) {
              throw new Error("Tried to get a localStorage path that wasn't a String.");
            }
            if (path[0] === "/") {
              path = path.substring(1);
            }
            return "AV/" + AV2.applicationId + "/" + path;
          };
          AV2._installationId = null;
          AV2._getInstallationId = function() {
            if (AV2._installationId) {
              return _promise2.default.resolve(AV2._installationId);
            }
            var path = AV2._getAVPath("installationId");
            return AV2.localStorage.getItemAsync(path).then(function(_installationId) {
              AV2._installationId = _installationId;
              if (!AV2._installationId) {
                AV2._installationId = _installationId = uuid();
                return AV2.localStorage.setItemAsync(path, _installationId).then(function() {
                  return _installationId;
                });
              }
              return _installationId;
            });
          };
          AV2._subscriptionId = null;
          AV2._refreshSubscriptionId = function() {
            var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AV2._getAVPath("subscriptionId");
            var subscriptionId = AV2._subscriptionId = uuid();
            return AV2.localStorage.setItemAsync(path, subscriptionId).then(function() {
              return subscriptionId;
            });
          };
          AV2._getSubscriptionId = function() {
            if (AV2._subscriptionId) {
              return _promise2.default.resolve(AV2._subscriptionId);
            }
            var path = AV2._getAVPath("subscriptionId");
            return AV2.localStorage.getItemAsync(path).then(function(_subscriptionId) {
              AV2._subscriptionId = _subscriptionId;
              if (!AV2._subscriptionId) {
                _subscriptionId = AV2._refreshSubscriptionId(path);
              }
              return _subscriptionId;
            });
          };
          AV2._parseDate = parseDate;
          AV2._extend = function(protoProps, classProps) {
            var child = inherits(this, protoProps, classProps);
            child.extend = this.extend;
            return child;
          };
          AV2._encode = function(value, seenObjects, disallowObjects) {
            var full = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
            if (value instanceof AV2.Object) {
              if (disallowObjects) {
                throw new Error("AV.Objects not allowed here");
              }
              if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
                return value._toPointer();
              }
              return value._toFullJSON(seenObjects.concat(value), full);
            }
            if (value instanceof AV2.ACL) {
              return value.toJSON();
            }
            if (_.isDate(value)) {
              return full ? { __type: "Date", iso: value.toJSON() } : value.toJSON();
            }
            if (value instanceof AV2.GeoPoint) {
              return value.toJSON();
            }
            if (_.isArray(value)) {
              return _.map(value, function(x) {
                return AV2._encode(x, seenObjects, disallowObjects, full);
              });
            }
            if (_.isRegExp(value)) {
              return value.source;
            }
            if (value instanceof AV2.Relation) {
              return value.toJSON();
            }
            if (value instanceof AV2.Op) {
              return value.toJSON();
            }
            if (value instanceof AV2.File) {
              if (!value.url() && !value.id) {
                throw new Error("Tried to save an object containing an unsaved file.");
              }
              return value._toFullJSON(seenObjects, full);
            }
            if (_.isObject(value)) {
              return _.mapObject(value, function(v, k) {
                return AV2._encode(v, seenObjects, disallowObjects, full);
              });
            }
            return value;
          };
          AV2._decode = function(value, key) {
            if (!_.isObject(value) || _.isDate(value)) {
              return value;
            }
            if (_.isArray(value)) {
              return _.map(value, function(v2) {
                return AV2._decode(v2);
              });
            }
            if (value instanceof AV2.Object) {
              return value;
            }
            if (value instanceof AV2.File) {
              return value;
            }
            if (value instanceof AV2.Op) {
              return value;
            }
            if (value instanceof AV2.GeoPoint) {
              return value;
            }
            if (value instanceof AV2.ACL) {
              return value;
            }
            if (key === "ACL") {
              return new AV2.ACL(value);
            }
            if (value.__op) {
              return AV2.Op._decode(value);
            }
            var className;
            if (value.__type === "Pointer") {
              className = value.className;
              var pointer = AV2.Object._create(className);
              if ((0, _keys2.default)(value).length > 3) {
                var v = _.clone(value);
                delete v.__type;
                delete v.className;
                pointer._finishFetch(v, true);
              } else {
                pointer._finishFetch({ objectId: value.objectId }, false);
              }
              return pointer;
            }
            if (value.__type === "Object") {
              className = value.className;
              var _v = _.clone(value);
              delete _v.__type;
              delete _v.className;
              var object = AV2.Object._create(className);
              object._finishFetch(_v, true);
              return object;
            }
            if (value.__type === "Date") {
              return AV2._parseDate(value.iso);
            }
            if (value.__type === "GeoPoint") {
              return new AV2.GeoPoint({
                latitude: value.latitude,
                longitude: value.longitude
              });
            }
            if (value.__type === "Relation") {
              if (!key)
                throw new Error("key missing decoding a Relation");
              var relation = new AV2.Relation(null, key);
              relation.targetClassName = value.className;
              return relation;
            }
            if (value.__type === "File") {
              var file = new AV2.File(value.name);
              var _v2 = _.clone(value);
              delete _v2.__type;
              file._finishFetch(_v2);
              return file;
            }
            return _.mapObject(value, AV2._decode);
          };
          AV2.parseJSON = AV2._decode;
          AV2.parse = function(text) {
            return AV2.parseJSON(JSON.parse(text));
          };
          AV2.stringify = function(target) {
            return (0, _stringify2.default)(AV2._encode(target, [], false, true));
          };
          AV2._encodeObjectOrArray = function(value) {
            var encodeAVObject = function encodeAVObject2(object) {
              if (object && object._toFullJSON) {
                object = object._toFullJSON([]);
              }
              return _.mapObject(object, function(value2) {
                return AV2._encode(value2, []);
              });
            };
            if (_.isArray(value)) {
              return value.map(function(object) {
                return encodeAVObject(object);
              });
            } else {
              return encodeAVObject(value);
            }
          };
          AV2._arrayEach = _.each;
          AV2._traverse = function(object, func, seen) {
            if (object instanceof AV2.Object) {
              seen = seen || [];
              if (_.indexOf(seen, object) >= 0) {
                return;
              }
              seen.push(object);
              AV2._traverse(object.attributes, func, seen);
              return func(object);
            }
            if (object instanceof AV2.Relation || object instanceof AV2.File) {
              return func(object);
            }
            if (_.isArray(object)) {
              _.each(object, function(child, index2) {
                var newChild = AV2._traverse(child, func, seen);
                if (newChild) {
                  object[index2] = newChild;
                }
              });
              return func(object);
            }
            if (_.isObject(object)) {
              AV2._each(object, function(child, key) {
                var newChild = AV2._traverse(child, func, seen);
                if (newChild) {
                  object[key] = newChild;
                }
              });
              return func(object);
            }
            return func(object);
          };
          AV2._objectEach = AV2._each = function(obj, callback) {
            if (_.isObject(obj)) {
              _.each(_.keys(obj), function(key) {
                callback(obj[key], key);
              });
            } else {
              _.each(obj, callback);
            }
          };
          AV2.debug = {
            enable: function enable() {
              var namespaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "leancloud*";
              return debug.enable(namespaces);
            },
            disable: debug.disable
          };
          AV2.setAdapters = setAdapters;
          module2.exports = AV2;
        }).call(exports2, __webpack_require__(109));
      },
      function(module2, exports2, __webpack_require__) {
        function _typeof(obj) {
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        exports2.log = log;
        exports2.formatArgs = formatArgs;
        exports2.save = save;
        exports2.load = load;
        exports2.useColors = useColors;
        exports2.storage = localstorage();
        exports2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
        function useColors() {
          if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
            return true;
          }
          if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          }
          return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        function formatArgs(args) {
          args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
          if (!this.useColors) {
            return;
          }
          var c = "color: " + this.color;
          args.splice(1, 0, c, "color: inherit");
          var index2 = 0;
          var lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function(match) {
            if (match === "%%") {
              return;
            }
            index2++;
            if (match === "%c") {
              lastC = index2;
            }
          });
          args.splice(lastC, 0, c);
        }
        function log() {
          var _console;
          return (typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && console.log && (_console = console).log.apply(_console, arguments);
        }
        function save(namespaces) {
          try {
            if (namespaces) {
              exports2.storage.setItem("debug", namespaces);
            } else {
              exports2.storage.removeItem("debug");
            }
          } catch (error) {
          }
        }
        function load() {
          var r2;
          try {
            r2 = exports2.storage.getItem("debug");
          } catch (error) {
          }
          if (!r2 && typeof process !== "undefined" && "env" in process) {
            r2 = {}.DEBUG;
          }
          return r2;
        }
        function localstorage() {
          try {
            return localStorage;
          } catch (error) {
          }
        }
        module2.exports = __webpack_require__(271)(exports2);
        var formatters = module2.exports.formatters;
        formatters.j = function(v) {
          try {
            return JSON.stringify(v);
          } catch (error) {
            return "[UnexpectedJSONParseError]: " + error.message;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        var EventEmitter = __webpack_require__(162);
        var _require = __webpack_require__(15), inherits = _require.inherits;
        var AdapterManager = inherits(EventEmitter, {
          constructor: function constructor() {
            EventEmitter.apply(this);
            this._adapters = {};
          },
          getAdapter: function getAdapter(name) {
            var adapter = this._adapters[name];
            if (adapter === void 0) {
              throw new Error(name + " adapter is not configured");
            }
            return adapter;
          },
          setAdapters: function setAdapters(newAdapters) {
            var _this = this;
            _.extend(this._adapters, newAdapters);
            _.keys(newAdapters).forEach(function(name) {
              return _this.emit(name, newAdapters[name]);
            });
          }
        });
        var adapterManager = new AdapterManager();
        module2.exports = {
          getAdapter: adapterManager.getAdapter.bind(adapterManager),
          setAdapters: adapterManager.setAdapters.bind(adapterManager),
          adapterManager
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $at = __webpack_require__(175)(true);
        __webpack_require__(96)(String, "String", function(iterated) {
          this._t = String(iterated);
          this._i = 0;
        }, function() {
          var O = this._t;
          var index2 = this._i;
          var point;
          if (index2 >= O.length)
            return { value: void 0, done: true };
          point = $at(O, index2);
          this._i += point.length;
          return { value: point, done: false };
        });
      },
      function(module2, exports2) {
        module2.exports = true;
      },
      function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (e2) {
            return true;
          }
        };
      },
      function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      function(module2, exports2) {
        var toString3 = {}.toString;
        module2.exports = function(it) {
          return toString3.call(it).slice(8, -1);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defined = __webpack_require__(63);
        module2.exports = function(it) {
          return Object(defined(it));
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return hasStringTagBug;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return isIE11;
        });
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__ = __webpack_require__(200);
        var hasStringTagBug = __WEBPACK_IMPORTED_MODULE_0__setup_js__["s"] && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__["a"])(new DataView(new ArrayBuffer(8))), isIE11 = typeof Map !== "undefined" && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__["a"])(new Map());
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = allKeys;
        var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__ = __webpack_require__(120);
        function allKeys(obj) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a"])(obj))
            return [];
          var keys = [];
          for (var key in obj)
            keys.push(key);
          if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["h"])
            Object(__WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__["a"])(obj, keys);
          return keys;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = toPath;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        __webpack_require__(129);
        function toPath(path) {
          return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].toPath(path);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = optimizeCb;
        function optimizeCb(func, context, argCount) {
          if (context === void 0)
            return func;
          switch (argCount == null ? 3 : argCount) {
            case 1:
              return function(value) {
                return func.call(context, value);
              };
            case 3:
              return function(value, index2, collection) {
                return func.call(context, value, index2, collection);
              };
            case 4:
              return function(accumulator, value, index2, collection) {
                return func.call(context, accumulator, value, index2, collection);
              };
          }
          return function() {
            return func.apply(context, arguments);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = filter;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
        function filter(obj, predicate, context) {
          var results = [];
          predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(predicate, context);
          Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a"])(obj, function(value, index2, list) {
            if (predicate(value, index2, list))
              results.push(value);
          });
          return results;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = contains;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
        var __WEBPACK_IMPORTED_MODULE_2__indexOf_js__ = __webpack_require__(145);
        function contains(obj, item, fromIndex, guard) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj))
            obj = Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a"])(obj);
          if (typeof fromIndex != "number" || guard)
            fromIndex = 0;
          return Object(__WEBPACK_IMPORTED_MODULE_2__indexOf_js__["a"])(obj, item, fromIndex) >= 0;
        }
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(280), __esModule: true };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__(99);
        var enumBugKeys = __webpack_require__(70);
        module2.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
      },
      function(module2, exports2) {
        var id = 0;
        var px = Math.random();
        module2.exports = function(key) {
          return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var def = __webpack_require__(18).f;
        var has = __webpack_require__(24);
        var TAG = __webpack_require__(7)("toStringTag");
        module2.exports = function(it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG))
            def(it, TAG, { configurable: true, value: tag });
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(181);
        var global2 = __webpack_require__(6);
        var hide = __webpack_require__(23);
        var Iterators = __webpack_require__(32);
        var TO_STRING_TAG = __webpack_require__(7)("toStringTag");
        var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
        for (var i2 = 0; i2 < DOMIterables.length; i2++) {
          var NAME = DOMIterables[i2];
          var Collection = global2[NAME];
          var proto = Collection && Collection.prototype;
          if (proto && !proto[TO_STRING_TAG])
            hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = Iterators.Array;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = matcher;
        var __WEBPACK_IMPORTED_MODULE_0__extendOwn_js__ = __webpack_require__(81);
        var __WEBPACK_IMPORTED_MODULE_1__isMatch_js__ = __webpack_require__(121);
        function matcher(attrs) {
          attrs = Object(__WEBPACK_IMPORTED_MODULE_0__extendOwn_js__["a"])({}, attrs);
          return function(obj) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__isMatch_js__["a"])(obj, attrs);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__executeBound_js__ = __webpack_require__(137);
        var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(10);
        var partial = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(func, boundArgs) {
          var placeholder = partial.placeholder;
          var bound = function() {
            var position = 0, length = boundArgs.length;
            var args = Array(length);
            for (var i2 = 0; i2 < length; i2++) {
              args[i2] = boundArgs[i2] === placeholder ? arguments[position++] : boundArgs[i2];
            }
            while (position < arguments.length)
              args.push(arguments[position++]);
            return Object(__WEBPACK_IMPORTED_MODULE_1__executeBound_js__["a"])(func, bound, this, this, args);
          };
          return bound;
        });
        partial.placeholder = __WEBPACK_IMPORTED_MODULE_2__underscore_js__["a"];
        __webpack_exports__["a"] = partial;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = group;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
        function group(behavior, partition) {
          return function(obj, iteratee, context) {
            var result = partition ? [[], []] : {};
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(iteratee, context);
            Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a"])(obj, function(value, index2) {
              var key = iteratee(value, index2, obj);
              behavior(result, value, key);
            });
            return result;
          };
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        var _typeof2 = __webpack_require__(30);
        var _typeof3 = _interopRequireDefault(_typeof2);
        var _keys = __webpack_require__(158);
        var _keys2 = _interopRequireDefault(_keys);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        __webpack_require__(0);
        var _require = __webpack_require__(288), timeout = _require.timeout;
        var debug = __webpack_require__(37);
        var debugRequest = debug("leancloud:request");
        var debugRequestError = debug("leancloud:request:error");
        var _require2 = __webpack_require__(38), getAdapter = _require2.getAdapter;
        var requestsCount = 0;
        var ajax = function ajax2(_ref) {
          var method = _ref.method, url = _ref.url, query = _ref.query, data2 = _ref.data, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, time = _ref.timeout, onprogress = _ref.onprogress;
          if (query) {
            var queryString = (0, _keys2.default)(query).map(function(key) {
              var value = query[key];
              if (value === void 0)
                return void 0;
              var v = (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" ? (0, _stringify2.default)(value) : value;
              return encodeURIComponent(key) + "=" + encodeURIComponent(v);
            }).filter(function(qs) {
              return qs;
            }).join("&");
            url = url + "?" + queryString;
          }
          var count = requestsCount++;
          debugRequest("request(%d) %s %s %o %o %o", count, method, url, query, data2, headers);
          var request2 = getAdapter("request");
          var promise = request2(url, { method, headers, data: data2, onprogress }).then(function(response) {
            debugRequest("response(%d) %d %O %o", count, response.status, response.data || response.text, response.header);
            if (response.ok === false) {
              var error = new Error();
              error.response = response;
              throw error;
            }
            return response.data;
          }).catch(function(error) {
            if (error.response) {
              if (!debug.enabled("leancloud:request")) {
                debugRequestError("request(%d) %s %s %o %o %o", count, method, url, query, data2, headers);
              }
              debugRequestError("response(%d) %d %O %o", count, error.response.status, error.response.data || error.response.text, error.response.header);
              error.statusCode = error.response.status;
              error.responseText = error.response.text;
              error.response = error.response.data;
            }
            throw error;
          });
          return time ? timeout(promise, time) : promise;
        };
        module2.exports = ajax;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(279), __esModule: true };
      },
      function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on  " + it);
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var isObject2 = __webpack_require__(20);
        var document2 = __webpack_require__(6).document;
        var is = isObject2(document2) && isObject2(document2.createElement);
        module2.exports = function(it) {
          return is ? document2.createElement(it) : {};
        };
      },
      function(module2, exports2, __webpack_require__) {
        var isObject2 = __webpack_require__(20);
        module2.exports = function(it, S) {
          if (!isObject2(it))
            return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it)))
            return val;
          if (typeof (fn = it.valueOf) == "function" && !isObject2(val = fn.call(it)))
            return val;
          if (!S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        var dPs = __webpack_require__(177);
        var enumBugKeys = __webpack_require__(70);
        var IE_PROTO = __webpack_require__(68)("IE_PROTO");
        var Empty = function() {
        };
        var PROTOTYPE = "prototype";
        var createDict = function() {
          var iframe = __webpack_require__(64)("iframe");
          var i2 = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__(100).appendChild(iframe);
          iframe.src = "javascript:";
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i2--)
            delete createDict[PROTOTYPE][enumBugKeys[i2]];
          return createDict();
        };
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = createDict();
          return Properties === void 0 ? result : dPs(result, Properties);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var min = Math.min;
        module2.exports = function(it) {
          return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__(69)("keys");
        var uid = __webpack_require__(54);
        module2.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var core = __webpack_require__(2);
        var global2 = __webpack_require__(6);
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || (global2[SHARED] = {});
        (module2.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__(40) ? "pure" : "global",
          copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
        });
      },
      function(module2, exports2) {
        module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(43);
        var TAG = __webpack_require__(7)("toStringTag");
        var ARG = cof(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e2) {
          }
        };
        module2.exports = function(it) {
          var O, T, B;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__(71);
        var ITERATOR = __webpack_require__(7)("iterator");
        var Iterators = __webpack_require__(32);
        module2.exports = __webpack_require__(2).getIteratorMethod = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(52);
        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== void 0 || reject !== void 0)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }
        module2.exports.f = function(C) {
          return new PromiseCapability(C);
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "VERSION", function() {
          return __WEBPACK_IMPORTED_MODULE_0__setup_js__["e"];
        });
        var __WEBPACK_IMPORTED_MODULE_1__restArguments_js__ = __webpack_require__(9);
        __webpack_require__.d(__webpack_exports__, "restArguments", function() {
          return __WEBPACK_IMPORTED_MODULE_1__restArguments_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(26);
        __webpack_require__.d(__webpack_exports__, "isObject", function() {
          return __WEBPACK_IMPORTED_MODULE_2__isObject_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_3__isNull_js__ = __webpack_require__(195);
        __webpack_require__.d(__webpack_exports__, "isNull", function() {
          return __WEBPACK_IMPORTED_MODULE_3__isNull_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__ = __webpack_require__(110);
        __webpack_require__.d(__webpack_exports__, "isUndefined", function() {
          return __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__ = __webpack_require__(111);
        __webpack_require__.d(__webpack_exports__, "isBoolean", function() {
          return __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_6__isElement_js__ = __webpack_require__(196);
        __webpack_require__.d(__webpack_exports__, "isElement", function() {
          return __WEBPACK_IMPORTED_MODULE_6__isElement_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_7__isString_js__ = __webpack_require__(75);
        __webpack_require__.d(__webpack_exports__, "isString", function() {
          return __WEBPACK_IMPORTED_MODULE_7__isString_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_8__isNumber_js__ = __webpack_require__(112);
        __webpack_require__.d(__webpack_exports__, "isNumber", function() {
          return __WEBPACK_IMPORTED_MODULE_8__isNumber_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_9__isDate_js__ = __webpack_require__(197);
        __webpack_require__.d(__webpack_exports__, "isDate", function() {
          return __WEBPACK_IMPORTED_MODULE_9__isDate_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__ = __webpack_require__(198);
        __webpack_require__.d(__webpack_exports__, "isRegExp", function() {
          return __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_11__isError_js__ = __webpack_require__(199);
        __webpack_require__.d(__webpack_exports__, "isError", function() {
          return __WEBPACK_IMPORTED_MODULE_11__isError_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__ = __webpack_require__(113);
        __webpack_require__.d(__webpack_exports__, "isSymbol", function() {
          return __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__ = __webpack_require__(114);
        __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() {
          return __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_14__isDataView_js__ = __webpack_require__(76);
        __webpack_require__.d(__webpack_exports__, "isDataView", function() {
          return __WEBPACK_IMPORTED_MODULE_14__isDataView_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_15__isArray_js__ = __webpack_require__(27);
        __webpack_require__.d(__webpack_exports__, "isArray", function() {
          return __WEBPACK_IMPORTED_MODULE_15__isArray_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_16__isFunction_js__ = __webpack_require__(13);
        __webpack_require__.d(__webpack_exports__, "isFunction", function() {
          return __WEBPACK_IMPORTED_MODULE_16__isFunction_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_17__isArguments_js__ = __webpack_require__(77);
        __webpack_require__.d(__webpack_exports__, "isArguments", function() {
          return __WEBPACK_IMPORTED_MODULE_17__isArguments_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_18__isFinite_js__ = __webpack_require__(201);
        __webpack_require__.d(__webpack_exports__, "isFinite", function() {
          return __WEBPACK_IMPORTED_MODULE_18__isFinite_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_19__isNaN_js__ = __webpack_require__(115);
        __webpack_require__.d(__webpack_exports__, "isNaN", function() {
          return __WEBPACK_IMPORTED_MODULE_19__isNaN_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__ = __webpack_require__(116);
        __webpack_require__.d(__webpack_exports__, "isTypedArray", function() {
          return __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__ = __webpack_require__(203);
        __webpack_require__.d(__webpack_exports__, "isEmpty", function() {
          return __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_22__isMatch_js__ = __webpack_require__(121);
        __webpack_require__.d(__webpack_exports__, "isMatch", function() {
          return __WEBPACK_IMPORTED_MODULE_22__isMatch_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_23__isEqual_js__ = __webpack_require__(204);
        __webpack_require__.d(__webpack_exports__, "isEqual", function() {
          return __WEBPACK_IMPORTED_MODULE_23__isEqual_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_24__isMap_js__ = __webpack_require__(206);
        __webpack_require__.d(__webpack_exports__, "isMap", function() {
          return __WEBPACK_IMPORTED_MODULE_24__isMap_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__ = __webpack_require__(207);
        __webpack_require__.d(__webpack_exports__, "isWeakMap", function() {
          return __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_26__isSet_js__ = __webpack_require__(208);
        __webpack_require__.d(__webpack_exports__, "isSet", function() {
          return __WEBPACK_IMPORTED_MODULE_26__isSet_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__ = __webpack_require__(209);
        __webpack_require__.d(__webpack_exports__, "isWeakSet", function() {
          return __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_28__keys_js__ = __webpack_require__(4);
        __webpack_require__.d(__webpack_exports__, "keys", function() {
          return __WEBPACK_IMPORTED_MODULE_28__keys_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_29__allKeys_js__ = __webpack_require__(46);
        __webpack_require__.d(__webpack_exports__, "allKeys", function() {
          return __WEBPACK_IMPORTED_MODULE_29__allKeys_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_30__values_js__ = __webpack_require__(33);
        __webpack_require__.d(__webpack_exports__, "values", function() {
          return __WEBPACK_IMPORTED_MODULE_30__values_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_31__pairs_js__ = __webpack_require__(210);
        __webpack_require__.d(__webpack_exports__, "pairs", function() {
          return __WEBPACK_IMPORTED_MODULE_31__pairs_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_32__invert_js__ = __webpack_require__(122);
        __webpack_require__.d(__webpack_exports__, "invert", function() {
          return __WEBPACK_IMPORTED_MODULE_32__invert_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_33__functions_js__ = __webpack_require__(123);
        __webpack_require__.d(__webpack_exports__, "functions", function() {
          return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "methods", function() {
          return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_34__extend_js__ = __webpack_require__(124);
        __webpack_require__.d(__webpack_exports__, "extend", function() {
          return __WEBPACK_IMPORTED_MODULE_34__extend_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__ = __webpack_require__(81);
        __webpack_require__.d(__webpack_exports__, "extendOwn", function() {
          return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "assign", function() {
          return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_36__defaults_js__ = __webpack_require__(125);
        __webpack_require__.d(__webpack_exports__, "defaults", function() {
          return __WEBPACK_IMPORTED_MODULE_36__defaults_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_37__create_js__ = __webpack_require__(211);
        __webpack_require__.d(__webpack_exports__, "create", function() {
          return __WEBPACK_IMPORTED_MODULE_37__create_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_38__clone_js__ = __webpack_require__(127);
        __webpack_require__.d(__webpack_exports__, "clone", function() {
          return __WEBPACK_IMPORTED_MODULE_38__clone_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_39__tap_js__ = __webpack_require__(212);
        __webpack_require__.d(__webpack_exports__, "tap", function() {
          return __WEBPACK_IMPORTED_MODULE_39__tap_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_40__get_js__ = __webpack_require__(128);
        __webpack_require__.d(__webpack_exports__, "get", function() {
          return __WEBPACK_IMPORTED_MODULE_40__get_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_41__has_js__ = __webpack_require__(213);
        __webpack_require__.d(__webpack_exports__, "has", function() {
          return __WEBPACK_IMPORTED_MODULE_41__has_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_42__mapObject_js__ = __webpack_require__(214);
        __webpack_require__.d(__webpack_exports__, "mapObject", function() {
          return __WEBPACK_IMPORTED_MODULE_42__mapObject_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_43__identity_js__ = __webpack_require__(83);
        __webpack_require__.d(__webpack_exports__, "identity", function() {
          return __WEBPACK_IMPORTED_MODULE_43__identity_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_44__constant_js__ = __webpack_require__(117);
        __webpack_require__.d(__webpack_exports__, "constant", function() {
          return __WEBPACK_IMPORTED_MODULE_44__constant_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_45__noop_js__ = __webpack_require__(132);
        __webpack_require__.d(__webpack_exports__, "noop", function() {
          return __WEBPACK_IMPORTED_MODULE_45__noop_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_46__toPath_js__ = __webpack_require__(129);
        __webpack_require__.d(__webpack_exports__, "toPath", function() {
          return __WEBPACK_IMPORTED_MODULE_46__toPath_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_47__property_js__ = __webpack_require__(84);
        __webpack_require__.d(__webpack_exports__, "property", function() {
          return __WEBPACK_IMPORTED_MODULE_47__property_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__ = __webpack_require__(215);
        __webpack_require__.d(__webpack_exports__, "propertyOf", function() {
          return __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_49__matcher_js__ = __webpack_require__(57);
        __webpack_require__.d(__webpack_exports__, "matcher", function() {
          return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "matches", function() {
          return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_50__times_js__ = __webpack_require__(216);
        __webpack_require__.d(__webpack_exports__, "times", function() {
          return __WEBPACK_IMPORTED_MODULE_50__times_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_51__random_js__ = __webpack_require__(133);
        __webpack_require__.d(__webpack_exports__, "random", function() {
          return __WEBPACK_IMPORTED_MODULE_51__random_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_52__now_js__ = __webpack_require__(85);
        __webpack_require__.d(__webpack_exports__, "now", function() {
          return __WEBPACK_IMPORTED_MODULE_52__now_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_53__escape_js__ = __webpack_require__(217);
        __webpack_require__.d(__webpack_exports__, "escape", function() {
          return __WEBPACK_IMPORTED_MODULE_53__escape_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_54__unescape_js__ = __webpack_require__(218);
        __webpack_require__.d(__webpack_exports__, "unescape", function() {
          return __WEBPACK_IMPORTED_MODULE_54__unescape_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__ = __webpack_require__(136);
        __webpack_require__.d(__webpack_exports__, "templateSettings", function() {
          return __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_56__template_js__ = __webpack_require__(220);
        __webpack_require__.d(__webpack_exports__, "template", function() {
          return __WEBPACK_IMPORTED_MODULE_56__template_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_57__result_js__ = __webpack_require__(221);
        __webpack_require__.d(__webpack_exports__, "result", function() {
          return __WEBPACK_IMPORTED_MODULE_57__result_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__ = __webpack_require__(222);
        __webpack_require__.d(__webpack_exports__, "uniqueId", function() {
          return __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_59__chain_js__ = __webpack_require__(223);
        __webpack_require__.d(__webpack_exports__, "chain", function() {
          return __WEBPACK_IMPORTED_MODULE_59__chain_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_60__iteratee_js__ = __webpack_require__(131);
        __webpack_require__.d(__webpack_exports__, "iteratee", function() {
          return __WEBPACK_IMPORTED_MODULE_60__iteratee_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_61__partial_js__ = __webpack_require__(58);
        __webpack_require__.d(__webpack_exports__, "partial", function() {
          return __WEBPACK_IMPORTED_MODULE_61__partial_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_62__bind_js__ = __webpack_require__(138);
        __webpack_require__.d(__webpack_exports__, "bind", function() {
          return __WEBPACK_IMPORTED_MODULE_62__bind_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_63__bindAll_js__ = __webpack_require__(224);
        __webpack_require__.d(__webpack_exports__, "bindAll", function() {
          return __WEBPACK_IMPORTED_MODULE_63__bindAll_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_64__memoize_js__ = __webpack_require__(225);
        __webpack_require__.d(__webpack_exports__, "memoize", function() {
          return __WEBPACK_IMPORTED_MODULE_64__memoize_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_65__delay_js__ = __webpack_require__(139);
        __webpack_require__.d(__webpack_exports__, "delay", function() {
          return __WEBPACK_IMPORTED_MODULE_65__delay_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_66__defer_js__ = __webpack_require__(226);
        __webpack_require__.d(__webpack_exports__, "defer", function() {
          return __WEBPACK_IMPORTED_MODULE_66__defer_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_67__throttle_js__ = __webpack_require__(227);
        __webpack_require__.d(__webpack_exports__, "throttle", function() {
          return __WEBPACK_IMPORTED_MODULE_67__throttle_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_68__debounce_js__ = __webpack_require__(228);
        __webpack_require__.d(__webpack_exports__, "debounce", function() {
          return __WEBPACK_IMPORTED_MODULE_68__debounce_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_69__wrap_js__ = __webpack_require__(229);
        __webpack_require__.d(__webpack_exports__, "wrap", function() {
          return __WEBPACK_IMPORTED_MODULE_69__wrap_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_70__negate_js__ = __webpack_require__(86);
        __webpack_require__.d(__webpack_exports__, "negate", function() {
          return __WEBPACK_IMPORTED_MODULE_70__negate_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_71__compose_js__ = __webpack_require__(230);
        __webpack_require__.d(__webpack_exports__, "compose", function() {
          return __WEBPACK_IMPORTED_MODULE_71__compose_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_72__after_js__ = __webpack_require__(231);
        __webpack_require__.d(__webpack_exports__, "after", function() {
          return __WEBPACK_IMPORTED_MODULE_72__after_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_73__before_js__ = __webpack_require__(140);
        __webpack_require__.d(__webpack_exports__, "before", function() {
          return __WEBPACK_IMPORTED_MODULE_73__before_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_74__once_js__ = __webpack_require__(232);
        __webpack_require__.d(__webpack_exports__, "once", function() {
          return __WEBPACK_IMPORTED_MODULE_74__once_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_75__findKey_js__ = __webpack_require__(141);
        __webpack_require__.d(__webpack_exports__, "findKey", function() {
          return __WEBPACK_IMPORTED_MODULE_75__findKey_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_76__findIndex_js__ = __webpack_require__(87);
        __webpack_require__.d(__webpack_exports__, "findIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_76__findIndex_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__ = __webpack_require__(143);
        __webpack_require__.d(__webpack_exports__, "findLastIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__ = __webpack_require__(144);
        __webpack_require__.d(__webpack_exports__, "sortedIndex", function() {
          return __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_79__indexOf_js__ = __webpack_require__(145);
        __webpack_require__.d(__webpack_exports__, "indexOf", function() {
          return __WEBPACK_IMPORTED_MODULE_79__indexOf_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__ = __webpack_require__(233);
        __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() {
          return __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_81__find_js__ = __webpack_require__(147);
        __webpack_require__.d(__webpack_exports__, "find", function() {
          return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "detect", function() {
          return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_82__findWhere_js__ = __webpack_require__(234);
        __webpack_require__.d(__webpack_exports__, "findWhere", function() {
          return __WEBPACK_IMPORTED_MODULE_82__findWhere_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_83__each_js__ = __webpack_require__(28);
        __webpack_require__.d(__webpack_exports__, "each", function() {
          return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "forEach", function() {
          return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_84__map_js__ = __webpack_require__(35);
        __webpack_require__.d(__webpack_exports__, "map", function() {
          return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "collect", function() {
          return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_85__reduce_js__ = __webpack_require__(235);
        __webpack_require__.d(__webpack_exports__, "reduce", function() {
          return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "foldl", function() {
          return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "inject", function() {
          return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__ = __webpack_require__(236);
        __webpack_require__.d(__webpack_exports__, "reduceRight", function() {
          return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "foldr", function() {
          return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_87__filter_js__ = __webpack_require__(49);
        __webpack_require__.d(__webpack_exports__, "filter", function() {
          return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "select", function() {
          return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_88__reject_js__ = __webpack_require__(237);
        __webpack_require__.d(__webpack_exports__, "reject", function() {
          return __WEBPACK_IMPORTED_MODULE_88__reject_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_89__every_js__ = __webpack_require__(238);
        __webpack_require__.d(__webpack_exports__, "every", function() {
          return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "all", function() {
          return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_90__some_js__ = __webpack_require__(239);
        __webpack_require__.d(__webpack_exports__, "some", function() {
          return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "any", function() {
          return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_91__contains_js__ = __webpack_require__(50);
        __webpack_require__.d(__webpack_exports__, "contains", function() {
          return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "includes", function() {
          return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "include", function() {
          return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_92__invoke_js__ = __webpack_require__(240);
        __webpack_require__.d(__webpack_exports__, "invoke", function() {
          return __WEBPACK_IMPORTED_MODULE_92__invoke_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_93__pluck_js__ = __webpack_require__(88);
        __webpack_require__.d(__webpack_exports__, "pluck", function() {
          return __WEBPACK_IMPORTED_MODULE_93__pluck_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_94__where_js__ = __webpack_require__(241);
        __webpack_require__.d(__webpack_exports__, "where", function() {
          return __WEBPACK_IMPORTED_MODULE_94__where_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_95__max_js__ = __webpack_require__(149);
        __webpack_require__.d(__webpack_exports__, "max", function() {
          return __WEBPACK_IMPORTED_MODULE_95__max_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_96__min_js__ = __webpack_require__(242);
        __webpack_require__.d(__webpack_exports__, "min", function() {
          return __WEBPACK_IMPORTED_MODULE_96__min_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_97__shuffle_js__ = __webpack_require__(243);
        __webpack_require__.d(__webpack_exports__, "shuffle", function() {
          return __WEBPACK_IMPORTED_MODULE_97__shuffle_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_98__sample_js__ = __webpack_require__(150);
        __webpack_require__.d(__webpack_exports__, "sample", function() {
          return __WEBPACK_IMPORTED_MODULE_98__sample_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_99__sortBy_js__ = __webpack_require__(244);
        __webpack_require__.d(__webpack_exports__, "sortBy", function() {
          return __WEBPACK_IMPORTED_MODULE_99__sortBy_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_100__groupBy_js__ = __webpack_require__(245);
        __webpack_require__.d(__webpack_exports__, "groupBy", function() {
          return __WEBPACK_IMPORTED_MODULE_100__groupBy_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_101__indexBy_js__ = __webpack_require__(246);
        __webpack_require__.d(__webpack_exports__, "indexBy", function() {
          return __WEBPACK_IMPORTED_MODULE_101__indexBy_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_102__countBy_js__ = __webpack_require__(247);
        __webpack_require__.d(__webpack_exports__, "countBy", function() {
          return __WEBPACK_IMPORTED_MODULE_102__countBy_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_103__partition_js__ = __webpack_require__(248);
        __webpack_require__.d(__webpack_exports__, "partition", function() {
          return __WEBPACK_IMPORTED_MODULE_103__partition_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_104__toArray_js__ = __webpack_require__(249);
        __webpack_require__.d(__webpack_exports__, "toArray", function() {
          return __WEBPACK_IMPORTED_MODULE_104__toArray_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_105__size_js__ = __webpack_require__(250);
        __webpack_require__.d(__webpack_exports__, "size", function() {
          return __WEBPACK_IMPORTED_MODULE_105__size_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_106__pick_js__ = __webpack_require__(151);
        __webpack_require__.d(__webpack_exports__, "pick", function() {
          return __WEBPACK_IMPORTED_MODULE_106__pick_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_107__omit_js__ = __webpack_require__(252);
        __webpack_require__.d(__webpack_exports__, "omit", function() {
          return __WEBPACK_IMPORTED_MODULE_107__omit_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_108__first_js__ = __webpack_require__(253);
        __webpack_require__.d(__webpack_exports__, "first", function() {
          return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "head", function() {
          return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "take", function() {
          return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_109__initial_js__ = __webpack_require__(152);
        __webpack_require__.d(__webpack_exports__, "initial", function() {
          return __WEBPACK_IMPORTED_MODULE_109__initial_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_110__last_js__ = __webpack_require__(254);
        __webpack_require__.d(__webpack_exports__, "last", function() {
          return __WEBPACK_IMPORTED_MODULE_110__last_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_111__rest_js__ = __webpack_require__(153);
        __webpack_require__.d(__webpack_exports__, "rest", function() {
          return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "tail", function() {
          return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "drop", function() {
          return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_112__compact_js__ = __webpack_require__(255);
        __webpack_require__.d(__webpack_exports__, "compact", function() {
          return __WEBPACK_IMPORTED_MODULE_112__compact_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_113__flatten_js__ = __webpack_require__(256);
        __webpack_require__.d(__webpack_exports__, "flatten", function() {
          return __WEBPACK_IMPORTED_MODULE_113__flatten_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_114__without_js__ = __webpack_require__(257);
        __webpack_require__.d(__webpack_exports__, "without", function() {
          return __WEBPACK_IMPORTED_MODULE_114__without_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_115__uniq_js__ = __webpack_require__(155);
        __webpack_require__.d(__webpack_exports__, "uniq", function() {
          return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "unique", function() {
          return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_116__union_js__ = __webpack_require__(258);
        __webpack_require__.d(__webpack_exports__, "union", function() {
          return __WEBPACK_IMPORTED_MODULE_116__union_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_117__intersection_js__ = __webpack_require__(259);
        __webpack_require__.d(__webpack_exports__, "intersection", function() {
          return __WEBPACK_IMPORTED_MODULE_117__intersection_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_118__difference_js__ = __webpack_require__(154);
        __webpack_require__.d(__webpack_exports__, "difference", function() {
          return __WEBPACK_IMPORTED_MODULE_118__difference_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_119__unzip_js__ = __webpack_require__(156);
        __webpack_require__.d(__webpack_exports__, "unzip", function() {
          return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "transpose", function() {
          return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_120__zip_js__ = __webpack_require__(260);
        __webpack_require__.d(__webpack_exports__, "zip", function() {
          return __WEBPACK_IMPORTED_MODULE_120__zip_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_121__object_js__ = __webpack_require__(261);
        __webpack_require__.d(__webpack_exports__, "object", function() {
          return __WEBPACK_IMPORTED_MODULE_121__object_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_122__range_js__ = __webpack_require__(262);
        __webpack_require__.d(__webpack_exports__, "range", function() {
          return __WEBPACK_IMPORTED_MODULE_122__range_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_123__chunk_js__ = __webpack_require__(263);
        __webpack_require__.d(__webpack_exports__, "chunk", function() {
          return __WEBPACK_IMPORTED_MODULE_123__chunk_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_124__mixin_js__ = __webpack_require__(264);
        __webpack_require__.d(__webpack_exports__, "mixin", function() {
          return __WEBPACK_IMPORTED_MODULE_124__mixin_js__["a"];
        });
        var __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__ = __webpack_require__(265);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__["a"];
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("String");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__ = __webpack_require__(114);
        var __WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__ = __webpack_require__(45);
        var isDataView = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("DataView");
        function ie10IsDataView(obj) {
          return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(obj.getInt8) && Object(__WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__["a"])(obj.buffer);
        }
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__["a"] ? ie10IsDataView : isDataView;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
        var isArguments = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Arguments");
        (function() {
          if (!isArguments(arguments)) {
            isArguments = function(obj) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a"])(obj, "callee");
            };
          }
        })();
        __webpack_exports__["a"] = isArguments;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(119);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__["a"])("byteLength");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = ie11fingerprint;
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return mapMethods;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return weakMapMethods;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return setMethods;
        });
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__allKeys_js__ = __webpack_require__(46);
        function ie11fingerprint(methods) {
          var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(methods);
          return function(obj) {
            if (obj == null)
              return false;
            var keys = Object(__WEBPACK_IMPORTED_MODULE_2__allKeys_js__["a"])(obj);
            if (Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(keys))
              return false;
            for (var i2 = 0; i2 < length; i2++) {
              if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(obj[methods[i2]]))
                return false;
            }
            return methods !== weakMapMethods || !Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(obj[forEachName]);
          };
        }
        var forEachName = "forEach", hasName = "has", commonInit = ["clear", "delete"], mapTail = ["get", hasName, "set"];
        var mapMethods = commonInit.concat(forEachName, mapTail), weakMapMethods = commonInit.concat(mapTail), setMethods = ["add"].concat(commonInit, forEachName, hasName);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createAssigner;
        function createAssigner(keysFunc, defaults2) {
          return function(obj) {
            var length = arguments.length;
            if (defaults2)
              obj = Object(obj);
            if (length < 2 || obj == null)
              return obj;
            for (var index2 = 1; index2 < length; index2++) {
              var source2 = arguments[index2], keys = keysFunc(source2), l2 = keys.length;
              for (var i2 = 0; i2 < l2; i2++) {
                var key = keys[i2];
                if (!defaults2 || obj[key] === void 0)
                  obj[key] = source2[key];
              }
            }
            return obj;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
        var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = deepGet;
        function deepGet(obj, path) {
          var length = path.length;
          for (var i2 = 0; i2 < length; i2++) {
            if (obj == null)
              return void 0;
            obj = obj[path[i2]];
          }
          return length ? obj : void 0;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = identity;
        function identity(value) {
          return value;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = property;
        var __WEBPACK_IMPORTED_MODULE_0__deepGet_js__ = __webpack_require__(82);
        var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
        function property(path) {
          path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a"])(path);
          return function(obj) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__deepGet_js__["a"])(obj, path);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = Date.now || function() {
          return new Date().getTime();
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = negate;
        function negate(predicate) {
          return function() {
            return !predicate.apply(this, arguments);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(142);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__["a"])(1);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = pluck;
        var __WEBPACK_IMPORTED_MODULE_0__map_js__ = __webpack_require__(35);
        var __WEBPACK_IMPORTED_MODULE_1__property_js__ = __webpack_require__(84);
        function pluck(obj, key) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__map_js__["a"])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__property_js__["a"])(key));
        }
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        var core = __webpack_require__(2);
        var fails = __webpack_require__(41);
        module2.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export($export.S + $export.F * fails(function() {
            fn(1);
          }), "Object", exp);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(276), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.f = __webpack_require__(7);
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var core = __webpack_require__(2);
        var LIBRARY = __webpack_require__(40);
        var wksExt = __webpack_require__(91);
        var defineProperty = __webpack_require__(18).f;
        module2.exports = function(name) {
          var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
          if (name.charAt(0) != "_" && !(name in $Symbol))
            defineProperty($Symbol, name, { value: wksExt.f(name) });
        };
      },
      function(module2, exports2) {
        exports2.f = {}.propertyIsEnumerable;
      },
      function(module2, exports2, __webpack_require__) {
        var pIE = __webpack_require__(93);
        var createDesc = __webpack_require__(42);
        var toIObject = __webpack_require__(25);
        var toPrimitive = __webpack_require__(65);
        var has = __webpack_require__(24);
        var IE8_DOM_DEFINE = __webpack_require__(97);
        var gOPD = Object.getOwnPropertyDescriptor;
        exports2.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return gOPD(O, P);
            } catch (e2) {
            }
          if (has(O, P))
            return createDesc(!pIE.f.call(O, P), O[P]);
        };
      },
      function(module2, exports2) {
      },
      function(module2, exports2, __webpack_require__) {
        var LIBRARY = __webpack_require__(40);
        var $export = __webpack_require__(16);
        var redefine = __webpack_require__(98);
        var hide = __webpack_require__(23);
        var Iterators = __webpack_require__(32);
        var $iterCreate = __webpack_require__(176);
        var setToStringTag = __webpack_require__(55);
        var getPrototypeOf = __webpack_require__(101);
        var ITERATOR = __webpack_require__(7)("iterator");
        var BUGGY = !([].keys && "next" in [].keys());
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto)
              return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              setToStringTag(IteratorPrototype, TAG, true);
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto))
                  redefine(proto, key, methods[key]);
              }
            else
              $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__(21) && !__webpack_require__(41)(function() {
          return Object.defineProperty(__webpack_require__(64)("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(23);
      },
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(24);
        var toIObject = __webpack_require__(25);
        var arrayIndexOf = __webpack_require__(179)(false);
        var IE_PROTO = __webpack_require__(68)("IE_PROTO");
        module2.exports = function(object, names) {
          var O = toIObject(object);
          var i2 = 0;
          var result = [];
          var key;
          for (key in O)
            if (key != IE_PROTO)
              has(O, key) && result.push(key);
          while (names.length > i2)
            if (has(O, key = names[i2++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var document2 = __webpack_require__(6).document;
        module2.exports = document2 && document2.documentElement;
      },
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(24);
        var toObject = __webpack_require__(44);
        var IE_PROTO = __webpack_require__(68)("IE_PROTO");
        var ObjectProto = Object.prototype;
        module2.exports = Object.getPrototypeOf || function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectProto : null;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        module2.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (e2) {
            var ret = iterator["return"];
            if (ret !== void 0)
              anObject(ret.call(iterator));
            throw e2;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var Iterators = __webpack_require__(32);
        var ITERATOR = __webpack_require__(7)("iterator");
        var ArrayProto = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        var aFunction = __webpack_require__(52);
        var SPECIES = __webpack_require__(7)("species");
        module2.exports = function(O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var ctx = __webpack_require__(31);
        var invoke = __webpack_require__(187);
        var html = __webpack_require__(100);
        var cel = __webpack_require__(64);
        var global2 = __webpack_require__(6);
        var process2 = global2.process;
        var setTask = global2.setImmediate;
        var clearTask = global2.clearImmediate;
        var MessageChannel = global2.MessageChannel;
        var Dispatch = global2.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;
        var run = function() {
          var id = +this;
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function(event2) {
          run.call(event2.data);
        };
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i2 = 1;
            while (arguments.length > i2)
              args.push(arguments[i2++]);
            queue[++counter] = function() {
              invoke(typeof fn == "function" ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          if (__webpack_require__(43)(process2) == "process") {
            defer = function(id) {
              process2.nextTick(ctx(run, id, 1));
            };
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(ctx(run, id, 1));
            };
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
          } else if (global2.addEventListener && typeof postMessage == "function" && !global2.importScripts) {
            defer = function(id) {
              global2.postMessage(id + "", "*");
            };
            global2.addEventListener("message", listener, false);
          } else if (ONREADYSTATECHANGE in cel("script")) {
            defer = function(id) {
              html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run.call(id);
              };
            };
          } else {
            defer = function(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module2.exports = {
          set: setTask,
          clear: clearTask
        };
      },
      function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return { e: false, v: exec() };
          } catch (e2) {
            return { e: true, v: e2 };
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        var isObject2 = __webpack_require__(20);
        var newPromiseCapability = __webpack_require__(73);
        module2.exports = function(C, x) {
          anObject(C);
          if (isObject2(x) && x.constructor === C)
            return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var ITERATOR = __webpack_require__(7)("iterator");
        var SAFE_CLOSING = false;
        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e2) {
        }
        module2.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING)
            return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return { done: safe = true };
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e2) {
          }
          return safe;
        };
      },
      function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e2) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isUndefined2;
        function isUndefined2(obj) {
          return obj === void 0;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isBoolean;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function isBoolean(obj) {
          return obj === true || obj === false || __WEBPACK_IMPORTED_MODULE_0__setup_js__["t"].call(obj) === "[object Boolean]";
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Number");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Symbol");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("ArrayBuffer");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isNaN2;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__isNumber_js__ = __webpack_require__(112);
        function isNaN2(obj) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__isNumber_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["g"])(obj);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__isDataView_js__ = __webpack_require__(76);
        var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(117);
        var __WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__ = __webpack_require__(202);
        var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
        function isTypedArray(obj) {
          return __WEBPACK_IMPORTED_MODULE_0__setup_js__["l"] ? Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["l"])(obj) && !Object(__WEBPACK_IMPORTED_MODULE_1__isDataView_js__["a"])(obj) : Object(__WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__["a"])(obj) && typedArrayPattern.test(__WEBPACK_IMPORTED_MODULE_0__setup_js__["t"].call(obj));
        }
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__setup_js__["r"] ? isTypedArray : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a"])(false);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = constant;
        function constant(value) {
          return function() {
            return value;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createSizePropertyCheck;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function createSizePropertyCheck(getSizeProperty) {
          return function(collection) {
            var sizeProperty = getSizeProperty(collection);
            return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= __WEBPACK_IMPORTED_MODULE_0__setup_js__["b"];
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = shallowProperty;
        function shallowProperty(key) {
          return function(obj) {
            return obj == null ? void 0 : obj[key];
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = collectNonEnumProps;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(22);
        function emulatedSet(keys) {
          var hash = {};
          for (var l2 = keys.length, i2 = 0; i2 < l2; ++i2)
            hash[keys[i2]] = true;
          return {
            contains: function(key) {
              return hash[key];
            },
            push: function(key) {
              hash[key] = true;
              return keys.push(key);
            }
          };
        }
        function collectNonEnumProps(obj, keys) {
          keys = emulatedSet(keys);
          var nonEnumIdx = __WEBPACK_IMPORTED_MODULE_0__setup_js__["n"].length;
          var constructor = obj.constructor;
          var proto = Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(constructor) && constructor.prototype || __WEBPACK_IMPORTED_MODULE_0__setup_js__["c"];
          var prop = "constructor";
          if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__["a"])(obj, prop) && !keys.contains(prop))
            keys.push(prop);
          while (nonEnumIdx--) {
            prop = __WEBPACK_IMPORTED_MODULE_0__setup_js__["n"][nonEnumIdx];
            if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
              keys.push(prop);
            }
          }
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isMatch;
        var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
        function isMatch(object, attrs) {
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a"])(attrs), length = _keys.length;
          if (object == null)
            return !length;
          var obj = Object(object);
          for (var i2 = 0; i2 < length; i2++) {
            var key = _keys[i2];
            if (attrs[key] !== obj[key] || !(key in obj))
              return false;
          }
          return true;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = invert;
        var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
        function invert(obj) {
          var result = {};
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a"])(obj);
          for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
            result[obj[_keys[i2]]] = _keys[i2];
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = functions;
        var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(13);
        function functions(obj) {
          var names = [];
          for (var key in obj) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a"])(obj[key]))
              names.push(key);
          }
          return names.sort();
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
        var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(46);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
        var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(46);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__["a"], true);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = baseCreate;
        var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        function ctor() {
          return function() {
          };
        }
        function baseCreate(prototype) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a"])(prototype))
            return {};
          if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["j"])
            return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__["j"])(prototype);
          var Ctor = ctor();
          Ctor.prototype = prototype;
          var result = new Ctor();
          Ctor.prototype = null;
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = clone;
        var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_2__extend_js__ = __webpack_require__(124);
        function clone(obj) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a"])(obj))
            return obj;
          return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a"])(obj) ? obj.slice() : Object(__WEBPACK_IMPORTED_MODULE_2__extend_js__["a"])({}, obj);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = get;
        var __WEBPACK_IMPORTED_MODULE_0__toPath_js__ = __webpack_require__(47);
        var __WEBPACK_IMPORTED_MODULE_1__deepGet_js__ = __webpack_require__(82);
        var __WEBPACK_IMPORTED_MODULE_2__isUndefined_js__ = __webpack_require__(110);
        function get(object, path, defaultValue) {
          var value = Object(__WEBPACK_IMPORTED_MODULE_1__deepGet_js__["a"])(object, Object(__WEBPACK_IMPORTED_MODULE_0__toPath_js__["a"])(path));
          return Object(__WEBPACK_IMPORTED_MODULE_2__isUndefined_js__["a"])(value) ? defaultValue : value;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = toPath;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
        function toPath(path) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a"])(path) ? path : [path];
        }
        __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].toPath = toPath;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = baseIteratee;
        var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(83);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_4__matcher_js__ = __webpack_require__(57);
        var __WEBPACK_IMPORTED_MODULE_5__property_js__ = __webpack_require__(84);
        var __WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__ = __webpack_require__(48);
        function baseIteratee(value, context, argCount) {
          if (value == null)
            return __WEBPACK_IMPORTED_MODULE_0__identity_js__["a"];
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(value))
            return Object(__WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__["a"])(value, context, argCount);
          if (Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__["a"])(value) && !Object(__WEBPACK_IMPORTED_MODULE_3__isArray_js__["a"])(value))
            return Object(__WEBPACK_IMPORTED_MODULE_4__matcher_js__["a"])(value);
          return Object(__WEBPACK_IMPORTED_MODULE_5__property_js__["a"])(value);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = iteratee;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(130);
        function iteratee(value, context) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__["a"])(value, context, Infinity);
        }
        __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].iteratee = iteratee;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = noop;
        function noop() {
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = random;
        function random(min, max) {
          if (max == null) {
            max = min;
            min = 0;
          }
          return min + Math.floor(Math.random() * (max - min + 1));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createEscaper;
        var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
        function createEscaper(map) {
          var escaper = function(match) {
            return map[match];
          };
          var source2 = "(?:" + Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a"])(map).join("|") + ")";
          var testRegexp = RegExp(source2);
          var replaceRegexp = RegExp(source2, "g");
          return function(string) {
            string = string == null ? "" : "" + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = executeBound;
        var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(126);
        var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(26);
        function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
          if (!(callingContext instanceof boundFunc))
            return sourceFunc.apply(context, args);
          var self2 = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__["a"])(sourceFunc.prototype);
          var result = sourceFunc.apply(self2, args);
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a"])(result))
            return result;
          return self2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__executeBound_js__ = __webpack_require__(137);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(func, context, args) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(func))
            throw new TypeError("Bind must be called on a function");
          var bound = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(callArgs) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__executeBound_js__["a"])(func, bound, context, this, args.concat(callArgs));
          });
          return bound;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(func, wait, args) {
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = before;
        function before(times, func) {
          var memo;
          return function() {
            if (--times > 0) {
              memo = func.apply(this, arguments);
            }
            if (times <= 1)
              func = null;
            return memo;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = findKey;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
        function findKey(obj, predicate, context) {
          predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(predicate, context);
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a"])(obj), key;
          for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
            key = _keys[i2];
            if (predicate(obj[key], key, obj))
              return key;
          }
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createPredicateIndexFinder;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
        function createPredicateIndexFinder(dir) {
          return function(array, predicate, context) {
            predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(predicate, context);
            var length = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a"])(array);
            var index2 = dir > 0 ? 0 : length - 1;
            for (; index2 >= 0 && index2 < length; index2 += dir) {
              if (predicate(array[index2], index2, array))
                return index2;
            }
            return -1;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(142);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__["a"])(-1);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = sortedIndex;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
        function sortedIndex(array, obj, iteratee, context) {
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(iteratee, context, 1);
          var value = iteratee(obj);
          var low = 0, high = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a"])(array);
          while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value)
              low = mid + 1;
            else
              high = mid;
          }
          return low;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__ = __webpack_require__(144);
        var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(87);
        var __WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__ = __webpack_require__(146);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__["a"])(1, __WEBPACK_IMPORTED_MODULE_1__findIndex_js__["a"], __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createIndexFinder;
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__isNaN_js__ = __webpack_require__(115);
        function createIndexFinder(dir, predicateFind, sortedIndex) {
          return function(array, item, idx) {
            var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(array);
            if (typeof idx == "number") {
              if (dir > 0) {
                i2 = idx >= 0 ? idx : Math.max(idx + length, i2);
              } else {
                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
              }
            } else if (sortedIndex && idx && length) {
              idx = sortedIndex(array, item);
              return array[idx] === item ? idx : -1;
            }
            if (item !== item) {
              idx = predicateFind(__WEBPACK_IMPORTED_MODULE_1__setup_js__["q"].call(array, i2, length), __WEBPACK_IMPORTED_MODULE_2__isNaN_js__["a"]);
              return idx >= 0 ? idx + i2 : -1;
            }
            for (idx = dir > 0 ? i2 : length - 1; idx >= 0 && idx < length; idx += dir) {
              if (array[idx] === item)
                return idx;
            }
            return -1;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = find;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(87);
        var __WEBPACK_IMPORTED_MODULE_2__findKey_js__ = __webpack_require__(141);
        function find(obj, predicate, context) {
          var keyFinder = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) ? __WEBPACK_IMPORTED_MODULE_1__findIndex_js__["a"] : __WEBPACK_IMPORTED_MODULE_2__findKey_js__["a"];
          var key = keyFinder(obj, predicate, context);
          if (key !== void 0 && key !== -1)
            return obj[key];
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = createReduce;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(48);
        function createReduce(dir) {
          var reducer = function(obj, iteratee, memo, initial) {
            var _keys = !Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a"])(obj), length = (_keys || obj).length, index2 = dir > 0 ? 0 : length - 1;
            if (!initial) {
              memo = obj[_keys ? _keys[index2] : index2];
              index2 += dir;
            }
            for (; index2 >= 0 && index2 < length; index2 += dir) {
              var currentKey = _keys ? _keys[index2] : index2;
              memo = iteratee(memo, obj[currentKey], currentKey, obj);
            }
            return memo;
          };
          return function(obj, iteratee, memo, context) {
            var initial = arguments.length >= 3;
            return reducer(obj, Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__["a"])(iteratee, context, 4), memo, initial);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = max;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
        var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(28);
        function max(obj, iteratee, context) {
          var result = -Infinity, lastComputed = -Infinity, value, computed;
          if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
            obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a"])(obj);
            for (var i2 = 0, length = obj.length; i2 < length; i2++) {
              value = obj[i2];
              if (value != null && value > result) {
                result = value;
              }
            }
          } else {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a"])(iteratee, context);
            Object(__WEBPACK_IMPORTED_MODULE_3__each_js__["a"])(obj, function(v, index2, list) {
              computed = iteratee(v, index2, list);
              if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                result = v;
                lastComputed = computed;
              }
            });
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = sample;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__clone_js__ = __webpack_require__(127);
        var __WEBPACK_IMPORTED_MODULE_2__values_js__ = __webpack_require__(33);
        var __WEBPACK_IMPORTED_MODULE_3__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_4__random_js__ = __webpack_require__(133);
        function sample(obj, n2, guard) {
          if (n2 == null || guard) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj))
              obj = Object(__WEBPACK_IMPORTED_MODULE_2__values_js__["a"])(obj);
            return obj[Object(__WEBPACK_IMPORTED_MODULE_4__random_js__["a"])(obj.length - 1)];
          }
          var sample2 = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) ? Object(__WEBPACK_IMPORTED_MODULE_1__clone_js__["a"])(obj) : Object(__WEBPACK_IMPORTED_MODULE_2__values_js__["a"])(obj);
          var length = Object(__WEBPACK_IMPORTED_MODULE_3__getLength_js__["a"])(sample2);
          n2 = Math.max(Math.min(n2, length), 0);
          var last = length - 1;
          for (var index2 = 0; index2 < n2; index2++) {
            var rand = Object(__WEBPACK_IMPORTED_MODULE_4__random_js__["a"])(index2, last);
            var temp = sample2[index2];
            sample2[index2] = sample2[rand];
            sample2[rand] = temp;
          }
          return sample2.slice(0, n2);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(48);
        var __WEBPACK_IMPORTED_MODULE_3__allKeys_js__ = __webpack_require__(46);
        var __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__ = __webpack_require__(251);
        var __WEBPACK_IMPORTED_MODULE_5__flatten_js__ = __webpack_require__(34);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(obj, keys) {
          var result = {}, iteratee = keys[0];
          if (obj == null)
            return result;
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(iteratee)) {
            if (keys.length > 1)
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__["a"])(iteratee, keys[1]);
            keys = Object(__WEBPACK_IMPORTED_MODULE_3__allKeys_js__["a"])(obj);
          } else {
            iteratee = __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__["a"];
            keys = Object(__WEBPACK_IMPORTED_MODULE_5__flatten_js__["a"])(keys, false, false);
            obj = Object(obj);
          }
          for (var i2 = 0, length = keys.length; i2 < length; i2++) {
            var key = keys[i2];
            var value = obj[key];
            if (iteratee(value, key, obj))
              result[key] = value;
          }
          return result;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = initial;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function initial(array, n2, guard) {
          return __WEBPACK_IMPORTED_MODULE_0__setup_js__["q"].call(array, 0, Math.max(0, array.length - (n2 == null || guard ? 1 : n2)));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = rest;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function rest(array, n2, guard) {
          return __WEBPACK_IMPORTED_MODULE_0__setup_js__["q"].call(array, n2 == null || guard ? 1 : n2);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(34);
        var __WEBPACK_IMPORTED_MODULE_2__filter_js__ = __webpack_require__(49);
        var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(50);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(array, rest) {
          rest = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__["a"])(rest, true, true);
          return Object(__WEBPACK_IMPORTED_MODULE_2__filter_js__["a"])(array, function(value) {
            return !Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a"])(rest, value);
          });
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = uniq;
        var __WEBPACK_IMPORTED_MODULE_0__isBoolean_js__ = __webpack_require__(111);
        var __WEBPACK_IMPORTED_MODULE_1__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_2__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(50);
        function uniq(array, isSorted, iteratee, context) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isBoolean_js__["a"])(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
          }
          if (iteratee != null)
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_1__cb_js__["a"])(iteratee, context);
          var result = [];
          var seen = [];
          for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_2__getLength_js__["a"])(array); i2 < length; i2++) {
            var value = array[i2], computed = iteratee ? iteratee(value, i2, array) : value;
            if (isSorted && !iteratee) {
              if (!i2 || seen !== computed)
                result.push(value);
              seen = computed;
            } else if (iteratee) {
              if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a"])(seen, computed)) {
                seen.push(computed);
                result.push(value);
              }
            } else if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a"])(result, value)) {
              result.push(value);
            }
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = unzip;
        var __WEBPACK_IMPORTED_MODULE_0__max_js__ = __webpack_require__(149);
        var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_2__pluck_js__ = __webpack_require__(88);
        function unzip(array) {
          var length = array && Object(__WEBPACK_IMPORTED_MODULE_0__max_js__["a"])(array, __WEBPACK_IMPORTED_MODULE_1__getLength_js__["a"]).length || 0;
          var result = Array(length);
          for (var index2 = 0; index2 < length; index2++) {
            result[index2] = Object(__WEBPACK_IMPORTED_MODULE_2__pluck_js__["a"])(array, index2);
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = chainResult;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        function chainResult(instance, obj) {
          return instance._chain ? Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"])(obj).chain() : obj;
        }
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(267), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        var rng = __webpack_require__(269);
        var bytesToUuid = __webpack_require__(270);
        function v4(options, buf, offset) {
          var i2 = buf && offset || 0;
          if (typeof options == "string") {
            buf = options === "binary" ? new Array(16) : null;
            options = null;
          }
          options = options || {};
          var rnds = options.random || (options.rng || rng)();
          rnds[6] = rnds[6] & 15 | 64;
          rnds[8] = rnds[8] & 63 | 128;
          if (buf) {
            for (var ii = 0; ii < 16; ++ii) {
              buf[i2 + ii] = rnds[ii];
            }
          }
          return buf || bytesToUuid(rnds);
        }
        module2.exports = v4;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(273), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = "4.12.0";
      },
      function(module2, exports2, __webpack_require__) {
        var has = Object.prototype.hasOwnProperty, prefix = "~";
        function Events() {
        }
        if (Object.create) {
          Events.prototype = Object.create(null);
          if (!new Events().__proto__)
            prefix = false;
        }
        function EE(fn, context, once) {
          this.fn = fn;
          this.context = context;
          this.once = once || false;
        }
        function EventEmitter() {
          this._events = new Events();
          this._eventsCount = 0;
        }
        EventEmitter.prototype.eventNames = function eventNames() {
          var names = [], events, name;
          if (this._eventsCount === 0)
            return names;
          for (name in events = this._events) {
            if (has.call(events, name))
              names.push(prefix ? name.slice(1) : name);
          }
          if (Object.getOwnPropertySymbols) {
            return names.concat(Object.getOwnPropertySymbols(events));
          }
          return names;
        };
        EventEmitter.prototype.listeners = function listeners(event2, exists) {
          var evt = prefix ? prefix + event2 : event2, available = this._events[evt];
          if (exists)
            return !!available;
          if (!available)
            return [];
          if (available.fn)
            return [available.fn];
          for (var i2 = 0, l2 = available.length, ee = new Array(l2); i2 < l2; i2++) {
            ee[i2] = available[i2].fn;
          }
          return ee;
        };
        EventEmitter.prototype.emit = function emit(event2, a1, a2, a3, a4, a5) {
          var evt = prefix ? prefix + event2 : event2;
          if (!this._events[evt])
            return false;
          var listeners = this._events[evt], len = arguments.length, args, i2;
          if (listeners.fn) {
            if (listeners.once)
              this.removeListener(event2, listeners.fn, void 0, true);
            switch (len) {
              case 1:
                return listeners.fn.call(listeners.context), true;
              case 2:
                return listeners.fn.call(listeners.context, a1), true;
              case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
              case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
              case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
              case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
            }
            for (i2 = 1, args = new Array(len - 1); i2 < len; i2++) {
              args[i2 - 1] = arguments[i2];
            }
            listeners.fn.apply(listeners.context, args);
          } else {
            var length = listeners.length, j;
            for (i2 = 0; i2 < length; i2++) {
              if (listeners[i2].once)
                this.removeListener(event2, listeners[i2].fn, void 0, true);
              switch (len) {
                case 1:
                  listeners[i2].fn.call(listeners[i2].context);
                  break;
                case 2:
                  listeners[i2].fn.call(listeners[i2].context, a1);
                  break;
                case 3:
                  listeners[i2].fn.call(listeners[i2].context, a1, a2);
                  break;
                case 4:
                  listeners[i2].fn.call(listeners[i2].context, a1, a2, a3);
                  break;
                default:
                  if (!args)
                    for (j = 1, args = new Array(len - 1); j < len; j++) {
                      args[j - 1] = arguments[j];
                    }
                  listeners[i2].fn.apply(listeners[i2].context, args);
              }
            }
          }
          return true;
        };
        EventEmitter.prototype.on = function on(event2, fn, context) {
          var listener = new EE(fn, context || this), evt = prefix ? prefix + event2 : event2;
          if (!this._events[evt])
            this._events[evt] = listener, this._eventsCount++;
          else if (!this._events[evt].fn)
            this._events[evt].push(listener);
          else
            this._events[evt] = [this._events[evt], listener];
          return this;
        };
        EventEmitter.prototype.once = function once(event2, fn, context) {
          var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event2 : event2;
          if (!this._events[evt])
            this._events[evt] = listener, this._eventsCount++;
          else if (!this._events[evt].fn)
            this._events[evt].push(listener);
          else
            this._events[evt] = [this._events[evt], listener];
          return this;
        };
        EventEmitter.prototype.removeListener = function removeListener(event2, fn, context, once) {
          var evt = prefix ? prefix + event2 : event2;
          if (!this._events[evt])
            return this;
          if (!fn) {
            if (--this._eventsCount === 0)
              this._events = new Events();
            else
              delete this._events[evt];
            return this;
          }
          var listeners = this._events[evt];
          if (listeners.fn) {
            if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
              if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
            }
          } else {
            for (var i2 = 0, events = [], length = listeners.length; i2 < length; i2++) {
              if (listeners[i2].fn !== fn || once && !listeners[i2].once || context && listeners[i2].context !== context) {
                events.push(listeners[i2]);
              }
            }
            if (events.length)
              this._events[evt] = events.length === 1 ? events[0] : events;
            else if (--this._eventsCount === 0)
              this._events = new Events();
            else
              delete this._events[evt];
          }
          return this;
        };
        EventEmitter.prototype.removeAllListeners = function removeAllListeners(event2) {
          var evt;
          if (event2) {
            evt = prefix ? prefix + event2 : event2;
            if (this._events[evt]) {
              if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
            }
          } else {
            this._events = new Events();
            this._eventsCount = 0;
          }
          return this;
        };
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
          return this;
        };
        EventEmitter.prefixed = prefix;
        EventEmitter.EventEmitter = EventEmitter;
        {
          module2.exports = EventEmitter;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
        var syncApiNames = ["getItem", "setItem", "removeItem", "clear"];
        var localStorage2 = {
          get async() {
            return getAdapter("storage").async;
          }
        };
        syncApiNames.forEach(function(apiName) {
          localStorage2[apiName + "Async"] = function() {
            var storage = getAdapter("storage");
            return _promise2.default.resolve(storage[apiName].apply(storage, arguments));
          };
          localStorage2[apiName] = function() {
            var storage = getAdapter("storage");
            if (!storage.async) {
              return storage[apiName].apply(storage, arguments);
            }
            var error = new Error("Synchronous API [" + apiName + "] is not available in this runtime.");
            error.code = "SYNC_API_NOT_AVAILABLE";
            throw error;
          };
        });
        module2.exports = localStorage2;
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var storage = __webpack_require__(163);
        var AV2 = __webpack_require__(36);
        var removeAsync = exports2.removeAsync = storage.removeItemAsync.bind(storage);
        var getCacheData = function getCacheData2(cacheData, key) {
          try {
            cacheData = JSON.parse(cacheData);
          } catch (e2) {
            return null;
          }
          if (cacheData) {
            var expired = cacheData.expiredAt && cacheData.expiredAt < Date.now();
            if (!expired) {
              return cacheData.value;
            }
            return removeAsync(key).then(function() {
              return null;
            });
          }
          return null;
        };
        exports2.getAsync = function(key) {
          key = "AV/" + AV2.applicationId + "/" + key;
          return storage.getItemAsync(key).then(function(cache) {
            return getCacheData(cache, key);
          });
        };
        exports2.setAsync = function(key, value, ttl) {
          var cache = { value };
          if (typeof ttl === "number") {
            cache.expiredAt = Date.now() + ttl;
          }
          return storage.setItemAsync("AV/" + AV2.applicationId + "/" + key, (0, _stringify2.default)(cache));
        };
      },
      function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__(99);
        var hiddenKeys = __webpack_require__(70).concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(308), __esModule: true };
      },
      function(module2, exports2) {
        var charenc = {
          utf8: {
            stringToBytes: function(str) {
              return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            bytesToString: function(bytes) {
              return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
          },
          bin: {
            stringToBytes: function(str) {
              for (var bytes = [], i2 = 0; i2 < str.length; i2++)
                bytes.push(str.charCodeAt(i2) & 255);
              return bytes;
            },
            bytesToString: function(bytes) {
              for (var str = [], i2 = 0; i2 < bytes.length; i2++)
                str.push(String.fromCharCode(bytes[i2]));
              return str.join("");
            }
          }
        };
        module2.exports = charenc;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(321), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        var _iterator = __webpack_require__(61);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _typeof3 = __webpack_require__(30);
        var _typeof4 = _interopRequireDefault(_typeof3);
        var _symbol = __webpack_require__(51);
        var _symbol2 = _interopRequireDefault(_symbol);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          }
          return _typeof(obj);
        }
        function isObject2(obj) {
          return obj !== null && _typeof(obj) === "object";
        }
        module2.exports = isObject2;
      },
      function(module2, exports2, __webpack_require__) {
        var AV2 = __webpack_require__(172);
        var useAdatpers = __webpack_require__(337);
        module2.exports = useAdatpers(AV2);
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(173);
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        /*!
         * LeanCloud JavaScript SDK
         * https://leancloud.cn
         *
         * Copyright 2016 LeanCloud.cn, Inc.
         * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
         */
        var _ = __webpack_require__(0);
        var AV2 = __webpack_require__(36);
        AV2._ = _;
        AV2.version = __webpack_require__(161);
        AV2.Promise = _promise2.default;
        AV2.localStorage = __webpack_require__(163);
        AV2.Cache = __webpack_require__(164);
        AV2.Error = __webpack_require__(29);
        __webpack_require__(275);
        __webpack_require__(289)(AV2);
        __webpack_require__(290)(AV2);
        __webpack_require__(291)(AV2);
        __webpack_require__(292)(AV2);
        __webpack_require__(293)(AV2);
        __webpack_require__(294)(AV2);
        __webpack_require__(316)(AV2);
        __webpack_require__(323)(AV2);
        __webpack_require__(324)(AV2);
        __webpack_require__(326)(AV2);
        __webpack_require__(327)(AV2);
        __webpack_require__(328)(AV2);
        __webpack_require__(329)(AV2);
        __webpack_require__(330)(AV2);
        __webpack_require__(331)(AV2);
        __webpack_require__(332)(AV2);
        __webpack_require__(333)(AV2);
        __webpack_require__(334)(AV2);
        AV2.Conversation = __webpack_require__(335);
        __webpack_require__(336);
        module2.exports = AV2;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(95);
        __webpack_require__(39);
        __webpack_require__(56);
        __webpack_require__(184);
        __webpack_require__(192);
        __webpack_require__(193);
        module2.exports = __webpack_require__(2).Promise;
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var defined = __webpack_require__(63);
        module2.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that));
            var i2 = toInteger(pos);
            var l2 = s.length;
            var a, b;
            if (i2 < 0 || i2 >= l2)
              return TO_STRING ? "" : void 0;
            a = s.charCodeAt(i2);
            return a < 55296 || a > 56319 || i2 + 1 === l2 || (b = s.charCodeAt(i2 + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i2) : a : TO_STRING ? s.slice(i2, i2 + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var create = __webpack_require__(66);
        var descriptor = __webpack_require__(42);
        var setToStringTag = __webpack_require__(55);
        var IteratorPrototype = {};
        __webpack_require__(23)(IteratorPrototype, __webpack_require__(7)("iterator"), function() {
          return this;
        });
        module2.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + " Iterator");
        };
      },
      function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__(18);
        var anObject = __webpack_require__(17);
        var getKeys = __webpack_require__(53);
        module2.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i2 = 0;
          var P;
          while (length > i2)
            dP.f(O, P = keys[i2++], Properties[P]);
          return O;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(43);
        module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
          return cof(it) == "String" ? it.split("") : Object(it);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__(25);
        var toLength = __webpack_require__(67);
        var toAbsoluteIndex = __webpack_require__(180);
        module2.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index2 = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index2) {
                value = O[index2++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index2; index2++)
                if (IS_INCLUDES || index2 in O) {
                  if (O[index2] === el)
                    return IS_INCLUDES || index2 || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index2, length) {
          index2 = toInteger(index2);
          return index2 < 0 ? max(index2 + length, 0) : min(index2, length);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var addToUnscopables = __webpack_require__(182);
        var step = __webpack_require__(183);
        var Iterators = __webpack_require__(32);
        var toIObject = __webpack_require__(25);
        module2.exports = __webpack_require__(96)(Array, "Array", function(iterated, kind) {
          this._t = toIObject(iterated);
          this._i = 0;
          this._k = kind;
        }, function() {
          var O = this._t;
          var kind = this._k;
          var index2 = this._i++;
          if (!O || index2 >= O.length) {
            this._t = void 0;
            return step(1);
          }
          if (kind == "keys")
            return step(0, index2);
          if (kind == "values")
            return step(0, O[index2]);
          return step(0, [index2, O[index2]]);
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      function(module2, exports2) {
        module2.exports = function() {
        };
      },
      function(module2, exports2) {
        module2.exports = function(done, value) {
          return { value, done: !!done };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var LIBRARY = __webpack_require__(40);
        var global2 = __webpack_require__(6);
        var ctx = __webpack_require__(31);
        var classof = __webpack_require__(71);
        var $export = __webpack_require__(16);
        var isObject2 = __webpack_require__(20);
        var aFunction = __webpack_require__(52);
        var anInstance = __webpack_require__(185);
        var forOf = __webpack_require__(186);
        var speciesConstructor = __webpack_require__(104);
        var task = __webpack_require__(105).set;
        var microtask = __webpack_require__(188)();
        var newPromiseCapabilityModule = __webpack_require__(73);
        var perform = __webpack_require__(106);
        var userAgent = __webpack_require__(189);
        var promiseResolve = __webpack_require__(107);
        var PROMISE = "Promise";
        var TypeError2 = global2.TypeError;
        var process2 = global2.process;
        var versions = process2 && process2.versions;
        var v8 = versions && versions.v8 || "";
        var $Promise = global2[PROMISE];
        var isNode = classof(process2) == "process";
        var empty = function() {
        };
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
        var USE_NATIVE = !!function() {
          try {
            var promise = $Promise.resolve(1);
            var FakePromise = (promise.constructor = {})[__webpack_require__(7)("species")] = function(exec) {
              exec(empty, empty);
            };
            return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
          } catch (e2) {
          }
        }();
        var isThenable = function(it) {
          var then;
          return isObject2(it) && typeof (then = it.then) == "function" ? then : false;
        };
        var notify = function(promise, isReject) {
          if (promise._n)
            return;
          promise._n = true;
          var chain = promise._c;
          microtask(function() {
            var value = promise._v;
            var ok = promise._s == 1;
            var i2 = 0;
            var run = function(reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2)
                      onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true)
                    result = value;
                  else {
                    if (domain)
                      domain.enter();
                    result = handler(value);
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError2("Promise-chain cycle"));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else
                    resolve(result);
                } else
                  reject(value);
              } catch (e2) {
                if (domain && !exited)
                  domain.exit();
                reject(e2);
              }
            };
            while (chain.length > i2)
              run(chain[i2++]);
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h)
              onUnhandled(promise);
          });
        };
        var onUnhandled = function(promise) {
          task.call(global2, function() {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console2;
            if (unhandled) {
              result = perform(function() {
                if (isNode) {
                  process2.emit("unhandledRejection", value, promise);
                } else if (handler = global2.onunhandledrejection) {
                  handler({ promise, reason: value });
                } else if ((console2 = global2.console) && console2.error) {
                  console2.error("Unhandled promise rejection", value);
                }
              });
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }
            promise._a = void 0;
            if (unhandled && result.e)
              throw result.v;
          });
        };
        var isUnhandled = function(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function(promise) {
          task.call(global2, function() {
            var handler;
            if (isNode) {
              process2.emit("rejectionHandled", promise);
            } else if (handler = global2.onrejectionhandled) {
              handler({ promise, reason: promise._v });
            }
          });
        };
        var $reject = function(value) {
          var promise = this;
          if (promise._d)
            return;
          promise._d = true;
          promise = promise._w || promise;
          promise._v = value;
          promise._s = 2;
          if (!promise._a)
            promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function(value) {
          var promise = this;
          var then;
          if (promise._d)
            return;
          promise._d = true;
          promise = promise._w || promise;
          try {
            if (promise === value)
              throw TypeError2("Promise can't be resolved itself");
            if (then = isThenable(value)) {
              microtask(function() {
                var wrapper = { _w: promise, _d: false };
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e2) {
                  $reject.call(wrapper, e2);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e2) {
            $reject.call({ _w: promise, _d: false }, e2);
          }
        };
        if (!USE_NATIVE) {
          $Promise = function Promise2(executor) {
            anInstance(this, $Promise, PROMISE, "_h");
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          Internal = function Promise2(executor) {
            this._c = [];
            this._a = void 0;
            this._s = 0;
            this._d = false;
            this._v = void 0;
            this._h = 0;
            this._n = false;
          };
          Internal.prototype = __webpack_require__(190)($Promise.prototype, {
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = isNode ? process2.domain : void 0;
              this._c.push(reaction);
              if (this._a)
                this._a.push(reaction);
              if (this._s)
                notify(this, false);
              return reaction.promise;
            },
            "catch": function(onRejected) {
              return this.then(void 0, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__(55)($Promise, PROMISE);
        __webpack_require__(191)(PROMISE);
        Wrapper = __webpack_require__(2)[PROMISE];
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          reject: function reject(r2) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r2);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          resolve: function resolve(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
          }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(108)(function(iter) {
          $Promise.all(iter)["catch"](empty);
        })), PROMISE, {
          all: function all2(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function() {
              var values = [];
              var index2 = 0;
              var remaining = 1;
              forOf(iterable, false, function(promise) {
                var $index = index2++;
                var alreadyCalled = false;
                values.push(void 0);
                remaining++;
                C.resolve(promise).then(function(value) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.e)
              reject(result.v);
            return capability.promise;
          },
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function() {
              forOf(iterable, false, function(promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (result.e)
              reject(result.v);
            return capability.promise;
          }
        });
      },
      function(module2, exports2) {
        module2.exports = function(it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
            throw TypeError(name + ": incorrect invocation!");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var ctx = __webpack_require__(31);
        var call = __webpack_require__(102);
        var isArrayIter = __webpack_require__(103);
        var anObject = __webpack_require__(17);
        var toLength = __webpack_require__(67);
        var getIterFn = __webpack_require__(72);
        var BREAK = {};
        var RETURN = {};
        var exports2 = module2.exports = function(iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function() {
            return iterable;
          } : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index2 = 0;
          var length, step, iterator, result;
          if (typeof iterFn != "function")
            throw TypeError(iterable + " is not iterable!");
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index2; index2++) {
              result = entries ? f(anObject(step = iterable[index2])[0], step[1]) : f(iterable[index2]);
              if (result === BREAK || result === RETURN)
                return result;
            }
          else
            for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
              result = call(iterator, f, step.value, entries);
              if (result === BREAK || result === RETURN)
                return result;
            }
        };
        exports2.BREAK = BREAK;
        exports2.RETURN = RETURN;
      },
      function(module2, exports2) {
        module2.exports = function(fn, args, that) {
          var un = that === void 0;
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
            case 3:
              return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
            case 4:
              return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          }
          return fn.apply(that, args);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var macrotask = __webpack_require__(105).set;
        var Observer = global2.MutationObserver || global2.WebKitMutationObserver;
        var process2 = global2.process;
        var Promise2 = global2.Promise;
        var isNode = __webpack_require__(43)(process2) == "process";
        module2.exports = function() {
          var head, last, notify;
          var flush = function() {
            var parent, fn;
            if (isNode && (parent = process2.domain))
              parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e2) {
                if (head)
                  notify();
                else
                  last = void 0;
                throw e2;
              }
            }
            last = void 0;
            if (parent)
              parent.enter();
          };
          if (isNode) {
            notify = function() {
              process2.nextTick(flush);
            };
          } else if (Observer && !(global2.navigator && global2.navigator.standalone)) {
            var toggle = true;
            var node = document.createTextNode("");
            new Observer(flush).observe(node, { characterData: true });
            notify = function() {
              node.data = toggle = !toggle;
            };
          } else if (Promise2 && Promise2.resolve) {
            var promise = Promise2.resolve(void 0);
            notify = function() {
              promise.then(flush);
            };
          } else {
            notify = function() {
              macrotask.call(global2, flush);
            };
          }
          return function(fn) {
            var task = { fn, next: void 0 };
            if (last)
              last.next = task;
            if (!head) {
              head = task;
              notify();
            }
            last = task;
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var navigator2 = global2.navigator;
        module2.exports = navigator2 && navigator2.userAgent || "";
      },
      function(module2, exports2, __webpack_require__) {
        var hide = __webpack_require__(23);
        module2.exports = function(target, src, safe) {
          for (var key in src) {
            if (safe && target[key])
              target[key] = src[key];
            else
              hide(target, key, src[key]);
          }
          return target;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var core = __webpack_require__(2);
        var dP = __webpack_require__(18);
        var DESCRIPTORS = __webpack_require__(21);
        var SPECIES = __webpack_require__(7)("species");
        module2.exports = function(KEY) {
          var C = typeof core[KEY] == "function" ? core[KEY] : global2[KEY];
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        var core = __webpack_require__(2);
        var global2 = __webpack_require__(6);
        var speciesConstructor = __webpack_require__(104);
        var promiseResolve = __webpack_require__(107);
        $export($export.P + $export.R, "Promise", { "finally": function(onFinally) {
          var C = speciesConstructor(this, core.Promise || global2.Promise);
          var isFunction2 = typeof onFinally == "function";
          return this.then(isFunction2 ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          } : onFinally, isFunction2 ? function(e2) {
            return promiseResolve(C, onFinally()).then(function() {
              throw e2;
            });
          } : onFinally);
        } });
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        var newPromiseCapability = __webpack_require__(73);
        var perform = __webpack_require__(106);
        $export($export.S, "Promise", { "try": function(callbackfn) {
          var promiseCapability = newPromiseCapability.f(this);
          var result = perform(callbackfn);
          (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
          return promiseCapability.promise;
        } });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(74);
        var _ = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["mixin"])(__WEBPACK_IMPORTED_MODULE_0__index_js__);
        _._ = _;
        __webpack_exports__["a"] = _;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isNull;
        function isNull(obj) {
          return obj === null;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isElement;
        function isElement(obj) {
          return !!(obj && obj.nodeType === 1);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Date");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("RegExp");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Error");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Object");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isFinite2;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(113);
        function isFinite2(obj) {
          return !Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["f"])(obj) && !isNaN(parseFloat(obj));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(118);
        var __WEBPACK_IMPORTED_MODULE_1__getByteLength_js__ = __webpack_require__(78);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__getByteLength_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isEmpty;
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(75);
        var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(77);
        var __WEBPACK_IMPORTED_MODULE_4__keys_js__ = __webpack_require__(4);
        function isEmpty(obj) {
          if (obj == null)
            return true;
          var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(obj);
          if (typeof length == "number" && (Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a"])(obj) || Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__["a"])(obj) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__["a"])(obj)))
            return length === 0;
          return Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_4__keys_js__["a"])(obj)) === 0;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = isEqual;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__getByteLength_js__ = __webpack_require__(78);
        var __WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__ = __webpack_require__(116);
        var __WEBPACK_IMPORTED_MODULE_4__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__ = __webpack_require__(45);
        var __WEBPACK_IMPORTED_MODULE_6__isDataView_js__ = __webpack_require__(76);
        var __WEBPACK_IMPORTED_MODULE_7__keys_js__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_8__has_js__ = __webpack_require__(22);
        var __WEBPACK_IMPORTED_MODULE_9__toBufferView_js__ = __webpack_require__(205);
        var tagDataView = "[object DataView]";
        function eq(a, b, aStack, bStack) {
          if (a === b)
            return a !== 0 || 1 / a === 1 / b;
          if (a == null || b == null)
            return false;
          if (a !== a)
            return b !== b;
          var type = typeof a;
          if (type !== "function" && type !== "object" && typeof b != "object")
            return false;
          return deepEq(a, b, aStack, bStack);
        }
        function deepEq(a, b, aStack, bStack) {
          if (a instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"])
            a = a._wrapped;
          if (b instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"])
            b = b._wrapped;
          var className = __WEBPACK_IMPORTED_MODULE_1__setup_js__["t"].call(a);
          if (className !== __WEBPACK_IMPORTED_MODULE_1__setup_js__["t"].call(b))
            return false;
          if (__WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__["a"] && className == "[object Object]" && Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__["a"])(a)) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__["a"])(b))
              return false;
            className = tagDataView;
          }
          switch (className) {
            case "[object RegExp]":
            case "[object String]":
              return "" + a === "" + b;
            case "[object Number]":
              if (+a !== +a)
                return +b !== +b;
              return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
              return +a === +b;
            case "[object Symbol]":
              return __WEBPACK_IMPORTED_MODULE_1__setup_js__["d"].valueOf.call(a) === __WEBPACK_IMPORTED_MODULE_1__setup_js__["d"].valueOf.call(b);
            case "[object ArrayBuffer]":
            case tagDataView:
              return deepEq(Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__["a"])(a), Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__["a"])(b), aStack, bStack);
          }
          var areArrays = className === "[object Array]";
          if (!areArrays && Object(__WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__["a"])(a)) {
            var byteLength = Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__["a"])(a);
            if (byteLength !== Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__["a"])(b))
              return false;
            if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
              return true;
            areArrays = true;
          }
          if (!areArrays) {
            if (typeof a != "object" || typeof b != "object")
              return false;
            var aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__["a"])(aCtor) && aCtor instanceof aCtor && Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__["a"])(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
              return false;
            }
          }
          aStack = aStack || [];
          bStack = bStack || [];
          var length = aStack.length;
          while (length--) {
            if (aStack[length] === a)
              return bStack[length] === b;
          }
          aStack.push(a);
          bStack.push(b);
          if (areArrays) {
            length = a.length;
            if (length !== b.length)
              return false;
            while (length--) {
              if (!eq(a[length], b[length], aStack, bStack))
                return false;
            }
          } else {
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__["a"])(a), key;
            length = _keys.length;
            if (Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__["a"])(b).length !== length)
              return false;
            while (length--) {
              key = _keys[length];
              if (!(Object(__WEBPACK_IMPORTED_MODULE_8__has_js__["a"])(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
            }
          }
          aStack.pop();
          bStack.pop();
          return true;
        }
        function isEqual(a, b) {
          return eq(a, b);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = toBufferView;
        var __WEBPACK_IMPORTED_MODULE_0__getByteLength_js__ = __webpack_require__(78);
        function toBufferView(bufferSource) {
          return new Uint8Array(bufferSource.buffer || bufferSource, bufferSource.byteOffset || 0, Object(__WEBPACK_IMPORTED_MODULE_0__getByteLength_js__["a"])(bufferSource));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
        var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b"] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a"])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["b"]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Map");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
        var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b"] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a"])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["d"]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("WeakMap");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
        var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b"] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a"])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["c"]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("Set");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a"])("WeakSet");
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = pairs;
        var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
        function pairs(obj) {
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a"])(obj);
          var length = _keys.length;
          var pairs2 = Array(length);
          for (var i2 = 0; i2 < length; i2++) {
            pairs2[i2] = [_keys[i2], obj[_keys[i2]]];
          }
          return pairs2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = create;
        var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(126);
        var __WEBPACK_IMPORTED_MODULE_1__extendOwn_js__ = __webpack_require__(81);
        function create(prototype, props) {
          var result = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__["a"])(prototype);
          if (props)
            Object(__WEBPACK_IMPORTED_MODULE_1__extendOwn_js__["a"])(result, props);
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = tap;
        function tap(obj, interceptor) {
          interceptor(obj);
          return obj;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = has;
        var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(22);
        var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
        function has(obj, path) {
          path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a"])(path);
          var length = path.length;
          for (var i2 = 0; i2 < length; i2++) {
            var key = path[i2];
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__["a"])(obj, key))
              return false;
            obj = obj[key];
          }
          return !!length;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = mapObject;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
        function mapObject(obj, iteratee, context) {
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(iteratee, context);
          var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a"])(obj), length = _keys.length, results = {};
          for (var index2 = 0; index2 < length; index2++) {
            var currentKey = _keys[index2];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
          }
          return results;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = propertyOf;
        var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(132);
        var __WEBPACK_IMPORTED_MODULE_1__get_js__ = __webpack_require__(128);
        function propertyOf(obj) {
          if (obj == null)
            return __WEBPACK_IMPORTED_MODULE_0__noop_js__["a"];
          return function(path) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__get_js__["a"])(obj, path);
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = times;
        var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(48);
        function times(n2, iteratee, context) {
          var accum = Array(Math.max(0, n2));
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__["a"])(iteratee, context, 1);
          for (var i2 = 0; i2 < n2; i2++)
            accum[i2] = iteratee(i2);
          return accum;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(134);
        var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(135);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(134);
        var __WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__ = __webpack_require__(219);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__invert_js__ = __webpack_require__(122);
        var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(135);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__invert_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = template;
        var __WEBPACK_IMPORTED_MODULE_0__defaults_js__ = __webpack_require__(125);
        var __WEBPACK_IMPORTED_MODULE_1__underscore_js__ = __webpack_require__(10);
        __webpack_require__(136);
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        function escapeChar(match) {
          return "\\" + escapes[match];
        }
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        function template(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = Object(__WEBPACK_IMPORTED_MODULE_0__defaults_js__["a"])({}, settings, __WEBPACK_IMPORTED_MODULE_1__underscore_js__["a"].templateSettings);
          var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
          ].join("|") + "|$", "g");
          var index2 = 0;
          var source2 = "__p+='";
          text.replace(matcher, function(match, escape2, interpolate, evaluate, offset) {
            source2 += text.slice(index2, offset).replace(escapeRegExp, escapeChar);
            index2 = offset + match.length;
            if (escape2) {
              source2 += "'+\n((__t=(" + escape2 + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source2 += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source2 += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source2 += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error(argument);
          } else {
            source2 = "with(obj||{}){\n" + source2 + "}\n";
            argument = "obj";
          }
          source2 = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source2 + "return __p;\n";
          var render;
          try {
            render = new Function(argument, "_", source2);
          } catch (e2) {
            e2.source = source2;
            throw e2;
          }
          var template2 = function(data2) {
            return render.call(this, data2, __WEBPACK_IMPORTED_MODULE_1__underscore_js__["a"]);
          };
          template2.source = "function(" + argument + "){\n" + source2 + "}";
          return template2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = result;
        var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
        function result(obj, path, fallback) {
          path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a"])(path);
          var length = path.length;
          if (!length) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a"])(fallback) ? fallback.call(obj) : fallback;
          }
          for (var i2 = 0; i2 < length; i2++) {
            var prop = obj == null ? void 0 : obj[path[i2]];
            if (prop === void 0) {
              prop = fallback;
              i2 = length;
            }
            obj = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a"])(prop) ? prop.call(obj) : prop;
          }
          return obj;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = uniqueId;
        var idCounter = 0;
        function uniqueId(prefix) {
          var id = ++idCounter + "";
          return prefix ? prefix + id : id;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = chain;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        function chain(obj) {
          var instance = Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"])(obj);
          instance._chain = true;
          return instance;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(34);
        var __WEBPACK_IMPORTED_MODULE_2__bind_js__ = __webpack_require__(138);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(obj, keys) {
          keys = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__["a"])(keys, false, false);
          var index2 = keys.length;
          if (index2 < 1)
            throw new Error("bindAll must be passed function names");
          while (index2--) {
            var key = keys[index2];
            obj[key] = Object(__WEBPACK_IMPORTED_MODULE_2__bind_js__["a"])(obj[key], obj);
          }
          return obj;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = memoize;
        var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(22);
        function memoize(func, hasher) {
          var memoize2 = function(key) {
            var cache = memoize2.cache;
            var address = "" + (hasher ? hasher.apply(this, arguments) : key);
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__["a"])(cache, address))
              cache[address] = func.apply(this, arguments);
            return cache[address];
          };
          memoize2.cache = {};
          return memoize2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
        var __WEBPACK_IMPORTED_MODULE_1__delay_js__ = __webpack_require__(139);
        var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(10);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__delay_js__["a"], __WEBPACK_IMPORTED_MODULE_2__underscore_js__["a"], 1);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = throttle;
        var __WEBPACK_IMPORTED_MODULE_0__now_js__ = __webpack_require__(85);
        function throttle(func, wait, options) {
          var timeout, context, args, result;
          var previous = 0;
          if (!options)
            options = {};
          var later = function() {
            previous = options.leading === false ? 0 : Object(__WEBPACK_IMPORTED_MODULE_0__now_js__["a"])();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          };
          var throttled = function() {
            var _now = Object(__WEBPACK_IMPORTED_MODULE_0__now_js__["a"])();
            if (!previous && options.leading === false)
              previous = _now;
            var remaining = wait - (_now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = _now;
              result = func.apply(context, args);
              if (!timeout)
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
          throttled.cancel = function() {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
          };
          return throttled;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = debounce;
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(85);
        function debounce(func, wait, immediate) {
          var timeout, previous, args, result, context;
          var later = function() {
            var passed = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a"])() - previous;
            if (wait > passed) {
              timeout = setTimeout(later, wait - passed);
            } else {
              timeout = null;
              if (!immediate)
                result = func.apply(context, args);
              if (!timeout)
                args = context = null;
            }
          };
          var debounced = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(_args) {
            context = this;
            args = _args;
            previous = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a"])();
            if (!timeout) {
              timeout = setTimeout(later, wait);
              if (immediate)
                result = func.apply(context, args);
            }
            return result;
          });
          debounced.cancel = function() {
            clearTimeout(timeout);
            timeout = args = context = null;
          };
          return debounced;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = wrap;
        var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
        function wrap(func, wrapper) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a"])(wrapper, func);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = compose;
        function compose() {
          var args = arguments;
          var start = args.length - 1;
          return function() {
            var i2 = start;
            var result = args[start].apply(this, arguments);
            while (i2--)
              result = args[i2].call(this, result);
            return result;
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = after;
        function after(times, func) {
          return function() {
            if (--times < 1) {
              return func.apply(this, arguments);
            }
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
        var __WEBPACK_IMPORTED_MODULE_1__before_js__ = __webpack_require__(140);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__before_js__["a"], 2);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__ = __webpack_require__(143);
        var __WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__ = __webpack_require__(146);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__["a"])(-1, __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = findWhere;
        var __WEBPACK_IMPORTED_MODULE_0__find_js__ = __webpack_require__(147);
        var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(57);
        function findWhere(obj, attrs) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__find_js__["a"])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__["a"])(attrs));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(148);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__["a"])(1);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(148);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__["a"])(-1);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = reject;
        var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
        var __WEBPACK_IMPORTED_MODULE_1__negate_js__ = __webpack_require__(86);
        var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
        function reject(obj, predicate, context) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a"])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__negate_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a"])(predicate)), context);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = every;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
        function every(obj, predicate, context) {
          predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(predicate, context);
          var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a"])(obj), length = (_keys || obj).length;
          for (var index2 = 0; index2 < length; index2++) {
            var currentKey = _keys ? _keys[index2] : index2;
            if (!predicate(obj[currentKey], currentKey, obj))
              return false;
          }
          return true;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = some;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
        function some(obj, predicate, context) {
          predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(predicate, context);
          var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a"])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a"])(obj), length = (_keys || obj).length;
          for (var index2 = 0; index2 < length; index2++) {
            var currentKey = _keys ? _keys[index2] : index2;
            if (predicate(obj[currentKey], currentKey, obj))
              return true;
          }
          return false;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(35);
        var __WEBPACK_IMPORTED_MODULE_3__deepGet_js__ = __webpack_require__(82);
        var __WEBPACK_IMPORTED_MODULE_4__toPath_js__ = __webpack_require__(47);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(obj, path, args) {
          var contextPath, func;
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(path)) {
            func = path;
          } else {
            path = Object(__WEBPACK_IMPORTED_MODULE_4__toPath_js__["a"])(path);
            contextPath = path.slice(0, -1);
            path = path[path.length - 1];
          }
          return Object(__WEBPACK_IMPORTED_MODULE_2__map_js__["a"])(obj, function(context) {
            var method = func;
            if (!method) {
              if (contextPath && contextPath.length) {
                context = Object(__WEBPACK_IMPORTED_MODULE_3__deepGet_js__["a"])(context, contextPath);
              }
              if (context == null)
                return void 0;
              method = context[path];
            }
            return method == null ? method : method.apply(context, args);
          });
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = where;
        var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
        var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(57);
        function where(obj, attrs) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a"])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__["a"])(attrs));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = min;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
        var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(28);
        function min(obj, iteratee, context) {
          var result = Infinity, lastComputed = Infinity, value, computed;
          if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
            obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a"])(obj);
            for (var i2 = 0, length = obj.length; i2 < length; i2++) {
              value = obj[i2];
              if (value != null && value < result) {
                result = value;
              }
            }
          } else {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a"])(iteratee, context);
            Object(__WEBPACK_IMPORTED_MODULE_3__each_js__["a"])(obj, function(v, index2, list) {
              computed = iteratee(v, index2, list);
              if (computed < lastComputed || computed === Infinity && result === Infinity) {
                result = v;
                lastComputed = computed;
              }
            });
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = shuffle;
        var __WEBPACK_IMPORTED_MODULE_0__sample_js__ = __webpack_require__(150);
        function shuffle(obj) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__sample_js__["a"])(obj, Infinity);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = sortBy;
        var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__pluck_js__ = __webpack_require__(88);
        var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(35);
        function sortBy(obj, iteratee, context) {
          var index2 = 0;
          iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a"])(iteratee, context);
          return Object(__WEBPACK_IMPORTED_MODULE_1__pluck_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_2__map_js__["a"])(obj, function(value, key, list) {
            return {
              value,
              index: index2++,
              criteria: iteratee(value, key, list)
            };
          }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
              if (a > b || a === void 0)
                return 1;
              if (a < b || b === void 0)
                return -1;
            }
            return left.index - right.index;
          }), "value");
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
        var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a"])(function(result, value, key) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a"])(result, key))
            result[key].push(value);
          else
            result[key] = [value];
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a"])(function(result, value, key) {
          result[key] = value;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
        var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a"])(function(result, value, key) {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a"])(result, key))
            result[key]++;
          else
            result[key] = 1;
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a"])(function(result, value, pass) {
          result[pass ? 0 : 1].push(value);
        }, true);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = toArray;
        var __WEBPACK_IMPORTED_MODULE_0__isArray_js__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(75);
        var __WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_4__map_js__ = __webpack_require__(35);
        var __WEBPACK_IMPORTED_MODULE_5__identity_js__ = __webpack_require__(83);
        var __WEBPACK_IMPORTED_MODULE_6__values_js__ = __webpack_require__(33);
        var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        function toArray(obj) {
          if (!obj)
            return [];
          if (Object(__WEBPACK_IMPORTED_MODULE_0__isArray_js__["a"])(obj))
            return __WEBPACK_IMPORTED_MODULE_1__setup_js__["q"].call(obj);
          if (Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__["a"])(obj)) {
            return obj.match(reStrSymbol);
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__["a"])(obj))
            return Object(__WEBPACK_IMPORTED_MODULE_4__map_js__["a"])(obj, __WEBPACK_IMPORTED_MODULE_5__identity_js__["a"]);
          return Object(__WEBPACK_IMPORTED_MODULE_6__values_js__["a"])(obj);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = size;
        var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
        var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
        function size(obj) {
          if (obj == null)
            return 0;
          return Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a"])(obj) ? obj.length : Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a"])(obj).length;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = keyInObj;
        function keyInObj(value, key, obj) {
          return key in obj;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_2__negate_js__ = __webpack_require__(86);
        var __WEBPACK_IMPORTED_MODULE_3__map_js__ = __webpack_require__(35);
        var __WEBPACK_IMPORTED_MODULE_4__flatten_js__ = __webpack_require__(34);
        var __WEBPACK_IMPORTED_MODULE_5__contains_js__ = __webpack_require__(50);
        var __WEBPACK_IMPORTED_MODULE_6__pick_js__ = __webpack_require__(151);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(obj, keys) {
          var iteratee = keys[0], context;
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a"])(iteratee)) {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__negate_js__["a"])(iteratee);
            if (keys.length > 1)
              context = keys[1];
          } else {
            keys = Object(__WEBPACK_IMPORTED_MODULE_3__map_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_4__flatten_js__["a"])(keys, false, false), String);
            iteratee = function(value, key) {
              return !Object(__WEBPACK_IMPORTED_MODULE_5__contains_js__["a"])(keys, key);
            };
          }
          return Object(__WEBPACK_IMPORTED_MODULE_6__pick_js__["a"])(obj, iteratee, context);
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = first;
        var __WEBPACK_IMPORTED_MODULE_0__initial_js__ = __webpack_require__(152);
        function first(array, n2, guard) {
          if (array == null || array.length < 1)
            return n2 == null || guard ? void 0 : [];
          if (n2 == null || guard)
            return array[0];
          return Object(__WEBPACK_IMPORTED_MODULE_0__initial_js__["a"])(array, array.length - n2);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = last;
        var __WEBPACK_IMPORTED_MODULE_0__rest_js__ = __webpack_require__(153);
        function last(array, n2, guard) {
          if (array == null || array.length < 1)
            return n2 == null || guard ? void 0 : [];
          if (n2 == null || guard)
            return array[array.length - 1];
          return Object(__WEBPACK_IMPORTED_MODULE_0__rest_js__["a"])(array, Math.max(0, array.length - n2));
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = compact;
        var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
        function compact(array) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a"])(array, Boolean);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = flatten;
        var __WEBPACK_IMPORTED_MODULE_0__flatten_js__ = __webpack_require__(34);
        function flatten(array, depth) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__flatten_js__["a"])(array, depth, false);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__difference_js__ = __webpack_require__(154);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(array, otherArrays) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__difference_js__["a"])(array, otherArrays);
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__uniq_js__ = __webpack_require__(155);
        var __WEBPACK_IMPORTED_MODULE_2__flatten_js__ = __webpack_require__(34);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(function(arrays) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__uniq_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_2__flatten_js__["a"])(arrays, true, true));
        });
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = intersection;
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        var __WEBPACK_IMPORTED_MODULE_1__contains_js__ = __webpack_require__(50);
        function intersection(array) {
          var result = [];
          var argsLength = arguments.length;
          for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(array); i2 < length; i2++) {
            var item = array[i2];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__["a"])(result, item))
              continue;
            var j;
            for (j = 1; j < argsLength; j++) {
              if (!Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__["a"])(arguments[j], item))
                break;
            }
            if (j === argsLength)
              result.push(item);
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
        var __WEBPACK_IMPORTED_MODULE_1__unzip_js__ = __webpack_require__(156);
        __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a"])(__WEBPACK_IMPORTED_MODULE_1__unzip_js__["a"]);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = object;
        var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
        function object(list, values) {
          var result = {};
          for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a"])(list); i2 < length; i2++) {
            if (values) {
              result[list[i2]] = values[i2];
            } else {
              result[list[i2][0]] = list[i2][1];
            }
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = range;
        function range(start, stop, step) {
          if (stop == null) {
            stop = start || 0;
            start = 0;
          }
          if (!step) {
            step = stop < start ? -1 : 1;
          }
          var length = Math.max(Math.ceil((stop - start) / step), 0);
          var range2 = Array(length);
          for (var idx = 0; idx < length; idx++, start += step) {
            range2[idx] = start;
          }
          return range2;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = chunk;
        var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
        function chunk(array, count) {
          if (count == null || count < 1)
            return [];
          var result = [];
          var i2 = 0, length = array.length;
          while (i2 < length) {
            result.push(__WEBPACK_IMPORTED_MODULE_0__setup_js__["q"].call(array, i2, i2 += count));
          }
          return result;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = mixin;
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
        var __WEBPACK_IMPORTED_MODULE_2__functions_js__ = __webpack_require__(123);
        var __WEBPACK_IMPORTED_MODULE_3__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_4__chainResult_js__ = __webpack_require__(157);
        function mixin(obj) {
          Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a"])(Object(__WEBPACK_IMPORTED_MODULE_2__functions_js__["a"])(obj), function(name) {
            var func = __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"][name] = obj[name];
            __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].prototype[name] = function() {
              var args = [this._wrapped];
              __WEBPACK_IMPORTED_MODULE_3__setup_js__["o"].apply(args, arguments);
              return Object(__WEBPACK_IMPORTED_MODULE_4__chainResult_js__["a"])(this, func.apply(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"], args));
            };
          });
          return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"];
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
        var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_3__chainResult_js__ = __webpack_require__(157);
        Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a"])(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
          var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"][name];
          __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].prototype[name] = function() {
            var obj = this._wrapped;
            if (obj != null) {
              method.apply(obj, arguments);
              if ((name === "shift" || name === "splice") && obj.length === 0) {
                delete obj[0];
              }
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__["a"])(this, obj);
          };
        });
        Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a"])(["concat", "join", "slice"], function(name) {
          var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"][name];
          __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"].prototype[name] = function() {
            var obj = this._wrapped;
            if (obj != null)
              obj = method.apply(obj, arguments);
            return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__["a"])(this, obj);
          };
        });
        __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a"];
      },
      function(module2, exports2, __webpack_require__) {
        var core = __webpack_require__(2);
        var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
        module2.exports = function stringify(it) {
          return $JSON.stringify.apply($JSON, arguments);
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(268);
        module2.exports = __webpack_require__(2).Object.keys;
      },
      function(module2, exports2, __webpack_require__) {
        var toObject = __webpack_require__(44);
        var $keys = __webpack_require__(53);
        __webpack_require__(89)("keys", function() {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });
      },
      function(module2, exports2) {
        var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (getRandomValues) {
          var rnds8 = new Uint8Array(16);
          module2.exports = function whatwgRNG() {
            getRandomValues(rnds8);
            return rnds8;
          };
        } else {
          var rnds = new Array(16);
          module2.exports = function mathRNG() {
            for (var i2 = 0, r2; i2 < 16; i2++) {
              if ((i2 & 3) === 0)
                r2 = Math.random() * 4294967296;
              rnds[i2] = r2 >>> ((i2 & 3) << 3) & 255;
            }
            return rnds;
          };
        }
      },
      function(module2, exports2) {
        var byteToHex = [];
        for (var i2 = 0; i2 < 256; ++i2) {
          byteToHex[i2] = (i2 + 256).toString(16).substr(1);
        }
        function bytesToUuid(buf, offset) {
          var i3 = offset || 0;
          var bth = byteToHex;
          return [
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]],
            "-",
            bth[buf[i3++]],
            bth[buf[i3++]],
            "-",
            bth[buf[i3++]],
            bth[buf[i3++]],
            "-",
            bth[buf[i3++]],
            bth[buf[i3++]],
            "-",
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]],
            bth[buf[i3++]]
          ].join("");
        }
        module2.exports = bytesToUuid;
      },
      function(module2, exports2, __webpack_require__) {
        function setup(env) {
          createDebug.debug = createDebug;
          createDebug.default = createDebug;
          createDebug.coerce = coerce;
          createDebug.disable = disable;
          createDebug.enable = enable;
          createDebug.enabled = enabled;
          createDebug.humanize = __webpack_require__(272);
          Object.keys(env).forEach(function(key) {
            createDebug[key] = env[key];
          });
          createDebug.instances = [];
          createDebug.names = [];
          createDebug.skips = [];
          createDebug.formatters = {};
          function selectColor(namespace) {
            var hash = 0;
            for (var i2 = 0; i2 < namespace.length; i2++) {
              hash = (hash << 5) - hash + namespace.charCodeAt(i2);
              hash |= 0;
            }
            return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
          }
          createDebug.selectColor = selectColor;
          function createDebug(namespace) {
            var prevTime;
            function debug() {
              if (!debug.enabled) {
                return;
              }
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              var self2 = debug;
              var curr = Number(new Date());
              var ms = curr - (prevTime || curr);
              self2.diff = ms;
              self2.prev = prevTime;
              self2.curr = curr;
              prevTime = curr;
              args[0] = createDebug.coerce(args[0]);
              if (typeof args[0] !== "string") {
                args.unshift("%O");
              }
              var index2 = 0;
              args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                if (match === "%%") {
                  return match;
                }
                index2++;
                var formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                  var val = args[index2];
                  match = formatter.call(self2, val);
                  args.splice(index2, 1);
                  index2--;
                }
                return match;
              });
              createDebug.formatArgs.call(self2, args);
              var logFn = self2.log || createDebug.log;
              logFn.apply(self2, args);
            }
            debug.namespace = namespace;
            debug.enabled = createDebug.enabled(namespace);
            debug.useColors = createDebug.useColors();
            debug.color = selectColor(namespace);
            debug.destroy = destroy;
            debug.extend = extend2;
            if (typeof createDebug.init === "function") {
              createDebug.init(debug);
            }
            createDebug.instances.push(debug);
            return debug;
          }
          function destroy() {
            var index2 = createDebug.instances.indexOf(this);
            if (index2 !== -1) {
              createDebug.instances.splice(index2, 1);
              return true;
            }
            return false;
          }
          function extend2(namespace, delimiter) {
            return createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          }
          function enable(namespaces) {
            createDebug.save(namespaces);
            createDebug.names = [];
            createDebug.skips = [];
            var i2;
            var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
            var len = split.length;
            for (i2 = 0; i2 < len; i2++) {
              if (!split[i2]) {
                continue;
              }
              namespaces = split[i2].replace(/\*/g, ".*?");
              if (namespaces[0] === "-") {
                createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
              } else {
                createDebug.names.push(new RegExp("^" + namespaces + "$"));
              }
            }
            for (i2 = 0; i2 < createDebug.instances.length; i2++) {
              var instance = createDebug.instances[i2];
              instance.enabled = createDebug.enabled(instance.namespace);
            }
          }
          function disable() {
            createDebug.enable("");
          }
          function enabled(name) {
            if (name[name.length - 1] === "*") {
              return true;
            }
            var i2;
            var len;
            for (i2 = 0, len = createDebug.skips.length; i2 < len; i2++) {
              if (createDebug.skips[i2].test(name)) {
                return false;
              }
            }
            for (i2 = 0, len = createDebug.names.length; i2 < len; i2++) {
              if (createDebug.names[i2].test(name)) {
                return true;
              }
            }
            return false;
          }
          function coerce(val) {
            if (val instanceof Error) {
              return val.stack || val.message;
            }
            return val;
          }
          createDebug.enable(createDebug.load());
          return createDebug;
        }
        module2.exports = setup;
      },
      function(module2, exports2) {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d2 = h * 24;
        var w = d2 * 7;
        var y = d2 * 365.25;
        module2.exports = function(val, options) {
          options = options || {};
          var type = typeof val;
          if (type === "string" && val.length > 0) {
            return parse(val);
          } else if (type === "number" && isFinite(val)) {
            return options.long ? fmtLong(val) : fmtShort(val);
          }
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
          str = String(str);
          if (str.length > 100) {
            return;
          }
          var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
          if (!match) {
            return;
          }
          var n2 = parseFloat(match[1]);
          var type = (match[2] || "ms").toLowerCase();
          switch (type) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n2 * y;
            case "weeks":
            case "week":
            case "w":
              return n2 * w;
            case "days":
            case "day":
            case "d":
              return n2 * d2;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n2 * h;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n2 * m;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n2 * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n2;
            default:
              return void 0;
          }
        }
        function fmtShort(ms) {
          var msAbs = Math.abs(ms);
          if (msAbs >= d2) {
            return Math.round(ms / d2) + "d";
          }
          if (msAbs >= h) {
            return Math.round(ms / h) + "h";
          }
          if (msAbs >= m) {
            return Math.round(ms / m) + "m";
          }
          if (msAbs >= s) {
            return Math.round(ms / s) + "s";
          }
          return ms + "ms";
        }
        function fmtLong(ms) {
          var msAbs = Math.abs(ms);
          if (msAbs >= d2) {
            return plural(ms, msAbs, d2, "day");
          }
          if (msAbs >= h) {
            return plural(ms, msAbs, h, "hour");
          }
          if (msAbs >= m) {
            return plural(ms, msAbs, m, "minute");
          }
          if (msAbs >= s) {
            return plural(ms, msAbs, s, "second");
          }
          return ms + " ms";
        }
        function plural(ms, msAbs, n2, name) {
          var isPlural = msAbs >= n2 * 1.5;
          return Math.round(ms / n2) + " " + name + (isPlural ? "s" : "");
        }
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(274);
        module2.exports = __webpack_require__(2).Object.getPrototypeOf;
      },
      function(module2, exports2, __webpack_require__) {
        var toObject = __webpack_require__(44);
        var $getPrototypeOf = __webpack_require__(101);
        __webpack_require__(89)("getPrototypeOf", function() {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _defineProperty = __webpack_require__(90);
        var _defineProperty2 = _interopRequireDefault(_defineProperty);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var AV2 = __webpack_require__(36);
        var AppRouter = __webpack_require__(278);
        var _require = __webpack_require__(15), isNullOrUndefined = _require.isNullOrUndefined;
        var _require2 = __webpack_require__(0), extend2 = _require2.extend, isObject2 = _require2.isObject, isEmpty = _require2.isEmpty;
        var isCNApp = function isCNApp2(appId) {
          return appId.slice(-9) !== "-MdYXbMMI";
        };
        var fillServerURLs = function fillServerURLs2(url) {
          return {
            push: url,
            stats: url,
            engine: url,
            api: url,
            rtm: url
          };
        };
        function getDefaultServerURLs(appId) {
          if (isCNApp(appId)) {
            return {};
          }
          var id = appId.slice(0, 8).toLowerCase();
          var domain = "lncldglobal.com";
          return {
            push: "https://" + id + ".push." + domain,
            stats: "https://" + id + ".stats." + domain,
            engine: "https://" + id + ".engine." + domain,
            api: "https://" + id + ".api." + domain,
            rtm: "https://" + id + ".rtm." + domain
          };
        }
        var _disableAppRouter = false;
        var _initialized = false;
        AV2.init = function init(options) {
          if (!isObject2(options)) {
            return AV2.init({
              appId: options,
              appKey: arguments.length <= 1 ? void 0 : arguments[1],
              masterKey: arguments.length <= 2 ? void 0 : arguments[2]
            });
          }
          var appId = options.appId, appKey = options.appKey, masterKey = options.masterKey, hookKey = options.hookKey, serverURL = options.serverURL, _options$serverURLs = options.serverURLs, serverURLs = _options$serverURLs === void 0 ? serverURL : _options$serverURLs, disableCurrentUser = options.disableCurrentUser, production = options.production, realtime = options.realtime;
          if (_initialized)
            console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.");
          if (!appId)
            throw new TypeError("appId must be a string");
          if (!appKey)
            throw new TypeError("appKey must be a string");
          if (masterKey)
            console.warn("MasterKey is not supposed to be used at client side.");
          if (isCNApp(appId)) {
            if (!serverURLs && isEmpty(AV2._config.serverURLs)) {
              throw new TypeError("serverURL option is required for apps from CN region");
            }
          }
          if (appId !== AV2._config.applicationId) {
            AV2._config.masterKey = masterKey;
            AV2._config.hookKey = hookKey;
          } else {
            if (masterKey)
              AV2._config.masterKey = masterKey;
            if (hookKey)
              AV2._config.hookKey = hookKey;
          }
          AV2._config.applicationId = appId;
          AV2._config.applicationKey = appKey;
          if (!isNullOrUndefined(production)) {
            AV2.setProduction(production);
          }
          if (typeof disableCurrentUser !== "undefined")
            AV2._config.disableCurrentUser = disableCurrentUser;
          var disableAppRouter = _disableAppRouter || typeof serverURLs !== "undefined";
          if (!disableAppRouter) {
            AV2._appRouter = new AppRouter(AV2);
          }
          AV2._setServerURLs(extend2({}, getDefaultServerURLs(appId), AV2._config.serverURLs, typeof serverURLs === "string" ? fillServerURLs(serverURLs) : serverURLs), disableAppRouter);
          if (realtime) {
            AV2._config.realtime = realtime;
          } else if (AV2._sharedConfig.liveQueryRealtime) {
            var _AV$_config$serverURL = AV2._config.serverURLs, api = _AV$_config$serverURL.api, rtm = _AV$_config$serverURL.rtm;
            AV2._config.realtime = new AV2._sharedConfig.liveQueryRealtime({
              appId,
              appKey,
              server: {
                api,
                RTMRouter: rtm
              }
            });
          }
          _initialized = true;
        };
        AV2.setProduction = function(production) {
          if (!isNullOrUndefined(production)) {
            AV2._config.production = production ? 1 : 0;
          } else {
            AV2._config.production = null;
          }
        };
        AV2._setServerURLs = function(urls) {
          var disableAppRouter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          if (typeof urls !== "string") {
            extend2(AV2._config.serverURLs, urls);
          } else {
            AV2._config.serverURLs = fillServerURLs(urls);
          }
          if (disableAppRouter) {
            if (AV2._appRouter) {
              AV2._appRouter.disable();
            } else {
              _disableAppRouter = true;
            }
          }
        };
        AV2.setServerURL = function(urls) {
          return AV2._setServerURLs(urls);
        };
        AV2.setServerURLs = AV2.setServerURL;
        AV2.keepErrorRawMessage = function(value) {
          AV2._sharedConfig.keepErrorRawMessage = value;
        };
        AV2.setRequestTimeout = function(ms) {
          AV2._config.requestTimeout = ms;
        };
        AV2.initialize = AV2.init;
        var defineConfig = function defineConfig2(property) {
          return (0, _defineProperty2.default)(AV2, property, {
            get: function get() {
              return AV2._config[property];
            },
            set: function set(value) {
              AV2._config[property] = value;
            }
          });
        };
        ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(defineConfig);
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(277);
        var $Object = __webpack_require__(2).Object;
        module2.exports = function defineProperty(it, key, desc) {
          return $Object.defineProperty(it, key, desc);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        $export($export.S + $export.F * !__webpack_require__(21), "Object", { defineProperty: __webpack_require__(18).f });
      },
      function(module2, exports2, __webpack_require__) {
        var ajax = __webpack_require__(60);
        var Cache = __webpack_require__(164);
        function AppRouter(AV2) {
          var _this = this;
          this.AV = AV2;
          this.lockedUntil = 0;
          Cache.getAsync("serverURLs").then(function(data2) {
            if (_this.disabled)
              return;
            if (!data2)
              return _this.lock(0);
            var serverURLs = data2.serverURLs, lockedUntil = data2.lockedUntil;
            _this.AV._setServerURLs(serverURLs, false);
            _this.lockedUntil = lockedUntil;
          }).catch(function() {
            return _this.lock(0);
          });
        }
        AppRouter.prototype.disable = function disable() {
          this.disabled = true;
        };
        AppRouter.prototype.lock = function lock(ttl) {
          this.lockedUntil = Date.now() + ttl;
        };
        AppRouter.prototype.refresh = function refresh() {
          var _this2 = this;
          if (this.disabled)
            return;
          if (Date.now() < this.lockedUntil)
            return;
          this.lock(10);
          var url = "https://app-router.com/2/route";
          return ajax({
            method: "get",
            url,
            query: {
              appId: this.AV.applicationId
            }
          }).then(function(servers) {
            if (_this2.disabled)
              return;
            var ttl = servers.ttl;
            if (!ttl)
              throw new Error("missing ttl");
            ttl = ttl * 1e3;
            var protocal = "https://";
            var serverURLs = {
              push: protocal + servers.push_server,
              stats: protocal + servers.stats_server,
              engine: protocal + servers.engine_server,
              api: protocal + servers.api_server
            };
            _this2.AV._setServerURLs(serverURLs, false);
            _this2.lock(ttl);
            return Cache.setAsync("serverURLs", {
              serverURLs,
              lockedUntil: _this2.lockedUntil
            }, ttl);
          }).catch(function(error) {
            console.warn("refresh server URLs failed: " + error.message);
            _this2.lock(600);
          });
        };
        module2.exports = AppRouter;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(39);
        __webpack_require__(56);
        module2.exports = __webpack_require__(91).f("iterator");
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(281);
        __webpack_require__(95);
        __webpack_require__(286);
        __webpack_require__(287);
        module2.exports = __webpack_require__(2).Symbol;
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(6);
        var has = __webpack_require__(24);
        var DESCRIPTORS = __webpack_require__(21);
        var $export = __webpack_require__(16);
        var redefine = __webpack_require__(98);
        var META2 = __webpack_require__(282).KEY;
        var $fails = __webpack_require__(41);
        var shared = __webpack_require__(69);
        var setToStringTag = __webpack_require__(55);
        var uid = __webpack_require__(54);
        var wks = __webpack_require__(7);
        var wksExt = __webpack_require__(91);
        var wksDefine = __webpack_require__(92);
        var enumKeys = __webpack_require__(283);
        var isArray2 = __webpack_require__(284);
        var anObject = __webpack_require__(17);
        var isObject2 = __webpack_require__(20);
        var toObject = __webpack_require__(44);
        var toIObject = __webpack_require__(25);
        var toPrimitive = __webpack_require__(65);
        var createDesc = __webpack_require__(42);
        var _create = __webpack_require__(66);
        var gOPNExt = __webpack_require__(285);
        var $GOPD = __webpack_require__(94);
        var $GOPS = __webpack_require__(165);
        var $DP = __webpack_require__(18);
        var $keys = __webpack_require__(53);
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global2.Symbol;
        var $JSON = global2.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = "prototype";
        var HIDDEN = wks("_hidden");
        var TO_PRIMITIVE = wks("toPrimitive");
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared("symbol-registry");
        var AllSymbols = shared("symbols");
        var OPSymbols = shared("op-symbols");
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
        var QObject = global2.QObject;
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
          return _create(dP({}, "a", {
            get: function() {
              return dP(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(it, key, D) {
          var protoDesc = gOPD(ObjectProto, key);
          if (protoDesc)
            delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto)
            dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
          var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
          sym._k = tag;
          return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto)
            $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN))
                dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key])
                it[HIDDEN][key] = false;
              D = _create(D, { enumerable: createDesc(0, false) });
            }
            return setSymbolDesc(it, key, D);
          }
          return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys(P = toIObject(P));
          var i2 = 0;
          var l2 = keys.length;
          var key;
          while (l2 > i2)
            $defineProperty(it, key = keys[i2++], P[key]);
          return it;
        };
        var $create = function create(it, P) {
          return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, key = toPrimitive(key, true));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return false;
          return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return;
          var D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
            D.enumerable = true;
          return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i2 = 0;
          var key;
          while (names.length > i2) {
            if (!has(AllSymbols, key = names[i2++]) && key != HIDDEN && key != META2)
              result.push(key);
          }
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i2 = 0;
          var key;
          while (names.length > i2) {
            if (has(AllSymbols, key = names[i2++]) && (IS_OP ? has(ObjectProto, key) : true))
              result.push(AllSymbols[key]);
          }
          return result;
        };
        if (!USE_NATIVE) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
            var $set = function(value) {
              if (this === ObjectProto)
                $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter)
              setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
            return wrap(tag);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString3() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          __webpack_require__(166).f = gOPNExt.f = $getOwnPropertyNames;
          __webpack_require__(93).f = $propertyIsEnumerable;
          $GOPS.f = $getOwnPropertySymbols;
          if (DESCRIPTORS && !__webpack_require__(40)) {
            redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
          }
          wksExt.f = function(name) {
            return wrap(wks(name));
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
        for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; )
          wks(es6Symbols[j++]);
        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
          wksDefine(wellKnownSymbols[k++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
          "for": function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym)
                return key;
          },
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        var FAILS_ON_PRIMITIVES = $fails(function() {
          $GOPS.f(1);
        });
        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it));
          }
        });
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
          var S = $Symbol();
          return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
          stringify: function stringify(it) {
            var args = [it];
            var i2 = 1;
            var replacer, $replacer;
            while (arguments.length > i2)
              args.push(arguments[i2++]);
            $replacer = replacer = args[1];
            if (!isObject2(replacer) && it === void 0 || isSymbol(it))
              return;
            if (!isArray2(replacer))
              replacer = function(key, value) {
                if (typeof $replacer == "function")
                  value = $replacer.call(this, key, value);
                if (!isSymbol(value))
                  return value;
              };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
          }
        });
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, "Symbol");
        setToStringTag(Math, "Math", true);
        setToStringTag(global2.JSON, "JSON", true);
      },
      function(module2, exports2, __webpack_require__) {
        var META2 = __webpack_require__(54)("meta");
        var isObject2 = __webpack_require__(20);
        var has = __webpack_require__(24);
        var setDesc = __webpack_require__(18).f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var FREEZE = !__webpack_require__(41)(function() {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
          setDesc(it, META2, { value: {
            i: "O" + ++id,
            w: {}
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject2(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, META2)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMeta(it);
          }
          return it[META2].i;
        };
        var getWeak = function(it, create) {
          if (!has(it, META2)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMeta(it);
          }
          return it[META2].w;
        };
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META2))
            setMeta(it);
          return it;
        };
        var meta = module2.exports = {
          KEY: META2,
          NEED: false,
          fastKey,
          getWeak,
          onFreeze
        };
      },
      function(module2, exports2, __webpack_require__) {
        var getKeys = __webpack_require__(53);
        var gOPS = __webpack_require__(165);
        var pIE = __webpack_require__(93);
        module2.exports = function(it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;
          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i2 = 0;
            var key;
            while (symbols.length > i2)
              if (isEnum.call(it, key = symbols[i2++]))
                result.push(key);
          }
          return result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(43);
        module2.exports = Array.isArray || function isArray2(arg) {
          return cof(arg) == "Array";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__(25);
        var gOPN = __webpack_require__(166).f;
        var toString3 = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return gOPN(it);
          } catch (e2) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString3.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(92)("asyncIterator");
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(92)("observable");
      },
      function(module2, exports2, __webpack_require__) {
        var TimeoutError;
        module2.exports.timeout = function(promise, timeoutMillis) {
          var error = new TimeoutError(), timeout;
          return Promise.race([
            promise,
            new Promise(function(resolve, reject) {
              timeout = setTimeout(function() {
                reject(error);
              }, timeoutMillis);
            })
          ]).then(function(v) {
            clearTimeout(timeout);
            return v;
          }, function(err) {
            clearTimeout(timeout);
            throw err;
          });
        };
        TimeoutError = module2.exports.TimeoutError = function() {
          Error.call(this);
          this.stack = Error().stack;
          this.message = "Timeout";
        };
        TimeoutError.prototype = Object.create(Error.prototype);
        TimeoutError.prototype.name = "TimeoutError";
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        module2.exports = function(AV2) {
          var eventSplitter = /\s+/;
          var slice = Array.prototype.slice;
          AV2.Events = {
            on: function on(events, callback, context) {
              var calls, event2, node, tail, list;
              if (!callback) {
                return this;
              }
              events = events.split(eventSplitter);
              calls = this._callbacks || (this._callbacks = {});
              event2 = events.shift();
              while (event2) {
                list = calls[event2];
                node = list ? list.tail : {};
                node.next = tail = {};
                node.context = context;
                node.callback = callback;
                calls[event2] = { tail, next: list ? list.next : node };
                event2 = events.shift();
              }
              return this;
            },
            off: function off(events, callback, context) {
              var event2, calls, node, tail, cb, ctx;
              if (!(calls = this._callbacks)) {
                return;
              }
              if (!(events || callback || context)) {
                delete this._callbacks;
                return this;
              }
              events = events ? events.split(eventSplitter) : _.keys(calls);
              event2 = events.shift();
              while (event2) {
                node = calls[event2];
                delete calls[event2];
                if (!node || !(callback || context)) {
                  continue;
                }
                tail = node.tail;
                node = node.next;
                while (node !== tail) {
                  cb = node.callback;
                  ctx = node.context;
                  if (callback && cb !== callback || context && ctx !== context) {
                    this.on(event2, cb, ctx);
                  }
                  node = node.next;
                }
                event2 = events.shift();
              }
              return this;
            },
            trigger: function trigger(events) {
              var event2, node, calls, tail, args, all2, rest;
              if (!(calls = this._callbacks)) {
                return this;
              }
              all2 = calls.all;
              events = events.split(eventSplitter);
              rest = slice.call(arguments, 1);
              event2 = events.shift();
              while (event2) {
                node = calls[event2];
                if (node) {
                  tail = node.tail;
                  while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                  }
                }
                node = all2;
                if (node) {
                  tail = node.tail;
                  args = [event2].concat(rest);
                  while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, args);
                  }
                }
                event2 = events.shift();
              }
              return this;
            }
          };
          AV2.Events.bind = AV2.Events.on;
          AV2.Events.unbind = AV2.Events.off;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        module2.exports = function(AV2) {
          AV2.GeoPoint = function(arg1, arg2) {
            if (_.isArray(arg1)) {
              AV2.GeoPoint._validate(arg1[0], arg1[1]);
              this.latitude = arg1[0];
              this.longitude = arg1[1];
            } else if (_.isObject(arg1)) {
              AV2.GeoPoint._validate(arg1.latitude, arg1.longitude);
              this.latitude = arg1.latitude;
              this.longitude = arg1.longitude;
            } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
              AV2.GeoPoint._validate(arg1, arg2);
              this.latitude = arg1;
              this.longitude = arg2;
            } else {
              this.latitude = 0;
              this.longitude = 0;
            }
            var self2 = this;
            if (this.__defineGetter__ && this.__defineSetter__) {
              this._latitude = this.latitude;
              this._longitude = this.longitude;
              this.__defineGetter__("latitude", function() {
                return self2._latitude;
              });
              this.__defineGetter__("longitude", function() {
                return self2._longitude;
              });
              this.__defineSetter__("latitude", function(val) {
                AV2.GeoPoint._validate(val, self2.longitude);
                self2._latitude = val;
              });
              this.__defineSetter__("longitude", function(val) {
                AV2.GeoPoint._validate(self2.latitude, val);
                self2._longitude = val;
              });
            }
          };
          AV2.GeoPoint._validate = function(latitude, longitude) {
            if (latitude < -90) {
              throw new Error("AV.GeoPoint latitude " + latitude + " < -90.0.");
            }
            if (latitude > 90) {
              throw new Error("AV.GeoPoint latitude " + latitude + " > 90.0.");
            }
            if (longitude < -180) {
              throw new Error("AV.GeoPoint longitude " + longitude + " < -180.0.");
            }
            if (longitude > 180) {
              throw new Error("AV.GeoPoint longitude " + longitude + " > 180.0.");
            }
          };
          AV2.GeoPoint.current = function() {
            return new _promise2.default(function(resolve, reject) {
              navigator.geolocation.getCurrentPosition(function(location2) {
                resolve(new AV2.GeoPoint({
                  latitude: location2.coords.latitude,
                  longitude: location2.coords.longitude
                }));
              }, reject);
            });
          };
          _.extend(AV2.GeoPoint.prototype, {
            toJSON: function toJSON() {
              AV2.GeoPoint._validate(this.latitude, this.longitude);
              return {
                __type: "GeoPoint",
                latitude: this.latitude,
                longitude: this.longitude
              };
            },
            radiansTo: function radiansTo(point) {
              var d2r = Math.PI / 180;
              var lat1rad = this.latitude * d2r;
              var long1rad = this.longitude * d2r;
              var lat2rad = point.latitude * d2r;
              var long2rad = point.longitude * d2r;
              var deltaLat = lat1rad - lat2rad;
              var deltaLong = long1rad - long2rad;
              var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
              var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
              var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
              a = Math.min(1, a);
              return 2 * Math.asin(Math.sqrt(a));
            },
            kilometersTo: function kilometersTo(point) {
              return this.radiansTo(point) * 6371;
            },
            milesTo: function milesTo(point) {
              return this.radiansTo(point) * 3958.8;
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        module2.exports = function(AV2) {
          var PUBLIC_KEY = "*";
          AV2.ACL = function(arg1) {
            var self2 = this;
            self2.permissionsById = {};
            if (_.isObject(arg1)) {
              if (arg1 instanceof AV2.User) {
                self2.setReadAccess(arg1, true);
                self2.setWriteAccess(arg1, true);
              } else {
                if (_.isFunction(arg1)) {
                  throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                }
                AV2._objectEach(arg1, function(accessList, userId) {
                  if (!_.isString(userId)) {
                    throw new Error("Tried to create an ACL with an invalid userId.");
                  }
                  self2.permissionsById[userId] = {};
                  AV2._objectEach(accessList, function(allowed, permission) {
                    if (permission !== "read" && permission !== "write") {
                      throw new Error("Tried to create an ACL with an invalid permission type.");
                    }
                    if (!_.isBoolean(allowed)) {
                      throw new Error("Tried to create an ACL with an invalid permission value.");
                    }
                    self2.permissionsById[userId][permission] = allowed;
                  });
                });
              }
            }
          };
          AV2.ACL.prototype.toJSON = function() {
            return _.clone(this.permissionsById);
          };
          AV2.ACL.prototype._setAccess = function(accessType, userId, allowed) {
            if (userId instanceof AV2.User) {
              userId = userId.id;
            } else if (userId instanceof AV2.Role) {
              userId = "role:" + userId.getName();
            }
            if (!_.isString(userId)) {
              throw new Error("userId must be a string.");
            }
            if (!_.isBoolean(allowed)) {
              throw new Error("allowed must be either true or false.");
            }
            var permissions = this.permissionsById[userId];
            if (!permissions) {
              if (!allowed) {
                return;
              } else {
                permissions = {};
                this.permissionsById[userId] = permissions;
              }
            }
            if (allowed) {
              this.permissionsById[userId][accessType] = true;
            } else {
              delete permissions[accessType];
              if (_.isEmpty(permissions)) {
                delete this.permissionsById[userId];
              }
            }
          };
          AV2.ACL.prototype._getAccess = function(accessType, userId) {
            if (userId instanceof AV2.User) {
              userId = userId.id;
            } else if (userId instanceof AV2.Role) {
              userId = "role:" + userId.getName();
            }
            var permissions = this.permissionsById[userId];
            if (!permissions) {
              return false;
            }
            return permissions[accessType] ? true : false;
          };
          AV2.ACL.prototype.setReadAccess = function(userId, allowed) {
            this._setAccess("read", userId, allowed);
          };
          AV2.ACL.prototype.getReadAccess = function(userId) {
            return this._getAccess("read", userId);
          };
          AV2.ACL.prototype.setWriteAccess = function(userId, allowed) {
            this._setAccess("write", userId, allowed);
          };
          AV2.ACL.prototype.getWriteAccess = function(userId) {
            return this._getAccess("write", userId);
          };
          AV2.ACL.prototype.setPublicReadAccess = function(allowed) {
            this.setReadAccess(PUBLIC_KEY, allowed);
          };
          AV2.ACL.prototype.getPublicReadAccess = function() {
            return this.getReadAccess(PUBLIC_KEY);
          };
          AV2.ACL.prototype.setPublicWriteAccess = function(allowed) {
            this.setWriteAccess(PUBLIC_KEY, allowed);
          };
          AV2.ACL.prototype.getPublicWriteAccess = function() {
            return this.getWriteAccess(PUBLIC_KEY);
          };
          AV2.ACL.prototype.getRoleReadAccess = function(role) {
            if (role instanceof AV2.Role) {
              role = role.getName();
            }
            if (_.isString(role)) {
              return this.getReadAccess("role:" + role);
            }
            throw new Error("role must be a AV.Role or a String");
          };
          AV2.ACL.prototype.getRoleWriteAccess = function(role) {
            if (role instanceof AV2.Role) {
              role = role.getName();
            }
            if (_.isString(role)) {
              return this.getWriteAccess("role:" + role);
            }
            throw new Error("role must be a AV.Role or a String");
          };
          AV2.ACL.prototype.setRoleReadAccess = function(role, allowed) {
            if (role instanceof AV2.Role) {
              role = role.getName();
            }
            if (_.isString(role)) {
              this.setReadAccess("role:" + role, allowed);
              return;
            }
            throw new Error("role must be a AV.Role or a String");
          };
          AV2.ACL.prototype.setRoleWriteAccess = function(role, allowed) {
            if (role instanceof AV2.Role) {
              role = role.getName();
            }
            if (_.isString(role)) {
              this.setWriteAccess("role:" + role, allowed);
              return;
            }
            throw new Error("role must be a AV.Role or a String");
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        module2.exports = function(AV2) {
          AV2.Op = function() {
            this._initialize.apply(this, arguments);
          };
          _.extend(AV2.Op.prototype, {
            _initialize: function _initialize() {
            }
          });
          _.extend(AV2.Op, {
            _extend: AV2._extend,
            _opDecoderMap: {},
            _registerDecoder: function _registerDecoder(opName, decoder) {
              AV2.Op._opDecoderMap[opName] = decoder;
            },
            _decode: function _decode(json) {
              var decoder = AV2.Op._opDecoderMap[json.__op];
              if (decoder) {
                return decoder(json);
              } else {
                return void 0;
              }
            }
          });
          AV2.Op._registerDecoder("Batch", function(json) {
            var op = null;
            AV2._arrayEach(json.ops, function(nextOp) {
              nextOp = AV2.Op._decode(nextOp);
              op = nextOp._mergeWithPrevious(op);
            });
            return op;
          });
          AV2.Op.Set = AV2.Op._extend({
            _initialize: function _initialize(value) {
              this._value = value;
            },
            value: function value() {
              return this._value;
            },
            toJSON: function toJSON() {
              return AV2._encode(this.value());
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              return this;
            },
            _estimate: function _estimate(oldValue) {
              return this.value();
            }
          });
          AV2.Op._UNSET = {};
          AV2.Op.Unset = AV2.Op._extend({
            toJSON: function toJSON() {
              return { __op: "Delete" };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              return this;
            },
            _estimate: function _estimate(oldValue) {
              return AV2.Op._UNSET;
            }
          });
          AV2.Op._registerDecoder("Delete", function(json) {
            return new AV2.Op.Unset();
          });
          AV2.Op.Increment = AV2.Op._extend({
            _initialize: function _initialize(amount) {
              this._amount = amount;
            },
            amount: function amount() {
              return this._amount;
            },
            toJSON: function toJSON() {
              return { __op: "Increment", amount: this._amount };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(this.amount());
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(previous.value() + this.amount());
              } else if (previous instanceof AV2.Op.Increment) {
                return new AV2.Op.Increment(this.amount() + previous.amount());
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              if (!oldValue) {
                return this.amount();
              }
              return oldValue + this.amount();
            }
          });
          AV2.Op._registerDecoder("Increment", function(json) {
            return new AV2.Op.Increment(json.amount);
          });
          AV2.Op.BitAnd = AV2.Op._extend({
            _initialize: function _initialize(value) {
              this._value = value;
            },
            value: function value() {
              return this._value;
            },
            toJSON: function toJSON() {
              return { __op: "BitAnd", value: this.value() };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(0);
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(previous.value() & this.value());
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              return oldValue & this.value();
            }
          });
          AV2.Op._registerDecoder("BitAnd", function(json) {
            return new AV2.Op.BitAnd(json.value);
          });
          AV2.Op.BitOr = AV2.Op._extend({
            _initialize: function _initialize(value) {
              this._value = value;
            },
            value: function value() {
              return this._value;
            },
            toJSON: function toJSON() {
              return { __op: "BitOr", value: this.value() };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(this.value());
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(previous.value() | this.value());
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              return oldValue | this.value();
            }
          });
          AV2.Op._registerDecoder("BitOr", function(json) {
            return new AV2.Op.BitOr(json.value);
          });
          AV2.Op.BitXor = AV2.Op._extend({
            _initialize: function _initialize(value) {
              this._value = value;
            },
            value: function value() {
              return this._value;
            },
            toJSON: function toJSON() {
              return { __op: "BitXor", value: this.value() };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(this.value());
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(previous.value() ^ this.value());
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              return oldValue ^ this.value();
            }
          });
          AV2.Op._registerDecoder("BitXor", function(json) {
            return new AV2.Op.BitXor(json.value);
          });
          AV2.Op.Add = AV2.Op._extend({
            _initialize: function _initialize(objects) {
              this._objects = objects;
            },
            objects: function objects() {
              return this._objects;
            },
            toJSON: function toJSON() {
              return { __op: "Add", objects: AV2._encode(this.objects()) };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(this.objects());
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(this._estimate(previous.value()));
              } else if (previous instanceof AV2.Op.Add) {
                return new AV2.Op.Add(previous.objects().concat(this.objects()));
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              if (!oldValue) {
                return _.clone(this.objects());
              } else {
                return oldValue.concat(this.objects());
              }
            }
          });
          AV2.Op._registerDecoder("Add", function(json) {
            return new AV2.Op.Add(AV2._decode(json.objects));
          });
          AV2.Op.AddUnique = AV2.Op._extend({
            _initialize: function _initialize(objects) {
              this._objects = _.uniq(objects);
            },
            objects: function objects() {
              return this._objects;
            },
            toJSON: function toJSON() {
              return { __op: "AddUnique", objects: AV2._encode(this.objects()) };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return new AV2.Op.Set(this.objects());
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(this._estimate(previous.value()));
              } else if (previous instanceof AV2.Op.AddUnique) {
                return new AV2.Op.AddUnique(this._estimate(previous.objects()));
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              if (!oldValue) {
                return _.clone(this.objects());
              } else {
                var newValue = _.clone(oldValue);
                AV2._arrayEach(this.objects(), function(obj) {
                  if (obj instanceof AV2.Object && obj.id) {
                    var matchingObj = _.find(newValue, function(anObj) {
                      return anObj instanceof AV2.Object && anObj.id === obj.id;
                    });
                    if (!matchingObj) {
                      newValue.push(obj);
                    } else {
                      var index2 = _.indexOf(newValue, matchingObj);
                      newValue[index2] = obj;
                    }
                  } else if (!_.contains(newValue, obj)) {
                    newValue.push(obj);
                  }
                });
                return newValue;
              }
            }
          });
          AV2.Op._registerDecoder("AddUnique", function(json) {
            return new AV2.Op.AddUnique(AV2._decode(json.objects));
          });
          AV2.Op.Remove = AV2.Op._extend({
            _initialize: function _initialize(objects) {
              this._objects = _.uniq(objects);
            },
            objects: function objects() {
              return this._objects;
            },
            toJSON: function toJSON() {
              return { __op: "Remove", objects: AV2._encode(this.objects()) };
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                return previous;
              } else if (previous instanceof AV2.Op.Set) {
                return new AV2.Op.Set(this._estimate(previous.value()));
              } else if (previous instanceof AV2.Op.Remove) {
                return new AV2.Op.Remove(_.union(previous.objects(), this.objects()));
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue) {
              if (!oldValue) {
                return [];
              } else {
                var newValue = _.difference(oldValue, this.objects());
                AV2._arrayEach(this.objects(), function(obj) {
                  if (obj instanceof AV2.Object && obj.id) {
                    newValue = _.reject(newValue, function(other) {
                      return other instanceof AV2.Object && other.id === obj.id;
                    });
                  }
                });
                return newValue;
              }
            }
          });
          AV2.Op._registerDecoder("Remove", function(json) {
            return new AV2.Op.Remove(AV2._decode(json.objects));
          });
          AV2.Op.Relation = AV2.Op._extend({
            _initialize: function _initialize(adds, removes) {
              this._targetClassName = null;
              var self2 = this;
              var pointerToId = function pointerToId2(object) {
                if (object instanceof AV2.Object) {
                  if (!object.id) {
                    throw new Error("You can't add an unsaved AV.Object to a relation.");
                  }
                  if (!self2._targetClassName) {
                    self2._targetClassName = object.className;
                  }
                  if (self2._targetClassName !== object.className) {
                    throw new Error("Tried to create a AV.Relation with 2 different types: " + self2._targetClassName + " and " + object.className + ".");
                  }
                  return object.id;
                }
                return object;
              };
              this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
              this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
            },
            added: function added() {
              var self2 = this;
              return _.map(this.relationsToAdd, function(objectId) {
                var object = AV2.Object._create(self2._targetClassName);
                object.id = objectId;
                return object;
              });
            },
            removed: function removed() {
              var self2 = this;
              return _.map(this.relationsToRemove, function(objectId) {
                var object = AV2.Object._create(self2._targetClassName);
                object.id = objectId;
                return object;
              });
            },
            toJSON: function toJSON() {
              var adds = null;
              var removes = null;
              var self2 = this;
              var idToPointer = function idToPointer2(id) {
                return {
                  __type: "Pointer",
                  className: self2._targetClassName,
                  objectId: id
                };
              };
              var pointers = null;
              if (this.relationsToAdd.length > 0) {
                pointers = _.map(this.relationsToAdd, idToPointer);
                adds = { __op: "AddRelation", objects: pointers };
              }
              if (this.relationsToRemove.length > 0) {
                pointers = _.map(this.relationsToRemove, idToPointer);
                removes = { __op: "RemoveRelation", objects: pointers };
              }
              if (adds && removes) {
                return { __op: "Batch", ops: [adds, removes] };
              }
              return adds || removes || {};
            },
            _mergeWithPrevious: function _mergeWithPrevious(previous) {
              if (!previous) {
                return this;
              } else if (previous instanceof AV2.Op.Unset) {
                throw new Error("You can't modify a relation after deleting it.");
              } else if (previous instanceof AV2.Op.Relation) {
                if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
                  throw new Error("Related object must be of class " + previous._targetClassName + ", but " + this._targetClassName + " was passed in.");
                }
                var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);
                var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);
                var newRelation = new AV2.Op.Relation(newAdd, newRemove);
                newRelation._targetClassName = this._targetClassName;
                return newRelation;
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            },
            _estimate: function _estimate(oldValue, object, key) {
              if (!oldValue) {
                var relation = new AV2.Relation(object, key);
                relation.targetClassName = this._targetClassName;
              } else if (oldValue instanceof AV2.Relation) {
                if (this._targetClassName) {
                  if (oldValue.targetClassName) {
                    if (oldValue.targetClassName !== this._targetClassName) {
                      throw new Error("Related object must be a " + oldValue.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                    }
                  } else {
                    oldValue.targetClassName = this._targetClassName;
                  }
                }
                return oldValue;
              } else {
                throw new Error("Op is invalid after previous op.");
              }
            }
          });
          AV2.Op._registerDecoder("AddRelation", function(json) {
            return new AV2.Op.Relation(AV2._decode(json.objects), []);
          });
          AV2.Op._registerDecoder("RemoveRelation", function(json) {
            return new AV2.Op.Relation([], AV2._decode(json.objects));
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        module2.exports = function(AV2) {
          AV2.Relation = function(parent, key) {
            if (!_.isString(key)) {
              throw new TypeError("key must be a string");
            }
            this.parent = parent;
            this.key = key;
            this.targetClassName = null;
          };
          AV2.Relation.reverseQuery = function(parentClass, relationKey, child) {
            var query = new AV2.Query(parentClass);
            query.equalTo(relationKey, child._toPointer());
            return query;
          };
          _.extend(AV2.Relation.prototype, {
            _ensureParentAndKey: function _ensureParentAndKey(parent, key) {
              this.parent = this.parent || parent;
              this.key = this.key || key;
              if (this.parent !== parent) {
                throw new Error("Internal Error. Relation retrieved from two different Objects.");
              }
              if (this.key !== key) {
                throw new Error("Internal Error. Relation retrieved from two different keys.");
              }
            },
            add: function add(objects) {
              if (!_.isArray(objects)) {
                objects = [objects];
              }
              var change = new AV2.Op.Relation(objects, []);
              this.parent.set(this.key, change);
              this.targetClassName = change._targetClassName;
            },
            remove: function remove(objects) {
              if (!_.isArray(objects)) {
                objects = [objects];
              }
              var change = new AV2.Op.Relation([], objects);
              this.parent.set(this.key, change);
              this.targetClassName = change._targetClassName;
            },
            toJSON: function toJSON() {
              return { __type: "Relation", className: this.targetClassName };
            },
            query: function query() {
              var targetClass;
              var query2;
              if (!this.targetClassName) {
                targetClass = AV2.Object._getSubclass(this.parent.className);
                query2 = new AV2.Query(targetClass);
                query2._defaultParams.redirectClassNameForKey = this.key;
              } else {
                targetClass = AV2.Object._getSubclass(this.targetClassName);
                query2 = new AV2.Query(targetClass);
              }
              query2._addCondition("$relatedTo", "object", this.parent._toPointer());
              query2._addCondition("$relatedTo", "key", this.key);
              return query2;
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var cos = __webpack_require__(295);
        var qiniu = __webpack_require__(296);
        var s3 = __webpack_require__(311);
        var AVError = __webpack_require__(29);
        var AVRequest = __webpack_require__(12)._request;
        var _require = __webpack_require__(15), tap = _require.tap, transformFetchOptions = _require.transformFetchOptions;
        var debug = __webpack_require__(37)("leancloud:file");
        var parseBase64 = __webpack_require__(315);
        module2.exports = function(AV2) {
          var extname = function extname2(path) {
            if (!_.isString(path))
              return "";
            return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
          };
          var b64Digit = function b64Digit2(number) {
            if (number < 26) {
              return String.fromCharCode(65 + number);
            }
            if (number < 52) {
              return String.fromCharCode(97 + (number - 26));
            }
            if (number < 62) {
              return String.fromCharCode(48 + (number - 52));
            }
            if (number === 62) {
              return "+";
            }
            if (number === 63) {
              return "/";
            }
            throw new Error("Tried to encode large digit " + number + " in base64.");
          };
          var encodeBase64 = function encodeBase642(array) {
            var chunks = [];
            chunks.length = Math.ceil(array.length / 3);
            _.times(chunks.length, function(i2) {
              var b1 = array[i2 * 3];
              var b2 = array[i2 * 3 + 1] || 0;
              var b3 = array[i2 * 3 + 2] || 0;
              var has2 = i2 * 3 + 1 < array.length;
              var has3 = i2 * 3 + 2 < array.length;
              chunks[i2] = [b64Digit(b1 >> 2 & 63), b64Digit(b1 << 4 & 48 | b2 >> 4 & 15), has2 ? b64Digit(b2 << 2 & 60 | b3 >> 6 & 3) : "=", has3 ? b64Digit(b3 & 63) : "="].join("");
            });
            return chunks.join("");
          };
          AV2.File = function(name, data2, mimeType) {
            this.attributes = {
              name,
              url: "",
              metaData: {},
              base64: ""
            };
            if (_.isString(data2)) {
              throw new TypeError("Creating an AV.File from a String is not yet supported.");
            }
            if (_.isArray(data2)) {
              this.attributes.metaData.size = data2.length;
              data2 = { base64: encodeBase64(data2) };
            }
            this._extName = "";
            this._data = data2;
            this._uploadHeaders = {};
            if (data2 && data2.blob && typeof data2.blob.uri === "string") {
              this._extName = extname(data2.blob.uri);
            }
            if (typeof Blob !== "undefined" && data2 instanceof Blob) {
              if (data2.size) {
                this.attributes.metaData.size = data2.size;
              }
              if (data2.name) {
                this._extName = extname(data2.name);
              }
            }
            var owner = void 0;
            if (data2 && data2.owner) {
              owner = data2.owner;
            } else if (!AV2._config.disableCurrentUser) {
              try {
                owner = AV2.User.current();
              } catch (error) {
                if (error.code !== "SYNC_API_NOT_AVAILABLE") {
                  throw error;
                }
              }
            }
            this.attributes.metaData.owner = owner ? owner.id : "unknown";
            this.set("mime_type", mimeType);
          };
          AV2.File.withURL = function(name, url, metaData, type) {
            if (!name || !url) {
              throw new Error("Please provide file name and url");
            }
            var file = new AV2.File(name, null, type);
            if (metaData) {
              for (var prop in metaData) {
                if (!file.attributes.metaData[prop])
                  file.attributes.metaData[prop] = metaData[prop];
              }
            }
            file.attributes.url = url;
            file.attributes.metaData.__source = "external";
            file.attributes.metaData.size = 0;
            return file;
          };
          AV2.File.createWithoutData = function(objectId) {
            if (!objectId) {
              throw new TypeError("The objectId must be provided");
            }
            var file = new AV2.File();
            file.id = objectId;
            return file;
          };
          _.extend(AV2.File.prototype, {
            className: "_File",
            _toFullJSON: function _toFullJSON(seenObjects) {
              var _this = this;
              var full = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              var json = _.clone(this.attributes);
              AV2._objectEach(json, function(val, key) {
                json[key] = AV2._encode(val, seenObjects, void 0, full);
              });
              AV2._objectEach(this._operations, function(val, key) {
                json[key] = val;
              });
              if (_.has(this, "id")) {
                json.objectId = this.id;
              }
              ["createdAt", "updatedAt"].forEach(function(key) {
                if (_.has(_this, key)) {
                  var val = _this[key];
                  json[key] = _.isDate(val) ? val.toJSON() : val;
                }
              });
              if (full) {
                json.__type = "File";
              }
              return json;
            },
            toFullJSON: function toFullJSON() {
              var seenObjects = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              return this._toFullJSON(seenObjects);
            },
            toJSON: function toJSON(key, holder) {
              var seenObjects = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [this];
              return this._toFullJSON(seenObjects, false);
            },
            _toPointer: function _toPointer() {
              return {
                __type: "Pointer",
                className: this.className,
                objectId: this.id
              };
            },
            getACL: function getACL() {
              return this._acl;
            },
            setACL: function setACL(acl) {
              if (!(acl instanceof AV2.ACL)) {
                return new AVError(AVError.OTHER_CAUSE, "ACL must be a AV.ACL.");
              }
              this._acl = acl;
              return this;
            },
            name: function name() {
              return this.get("name");
            },
            url: function url() {
              return this.get("url");
            },
            get: function get(attrName) {
              switch (attrName) {
                case "objectId":
                  return this.id;
                case "url":
                case "name":
                case "mime_type":
                case "metaData":
                case "createdAt":
                case "updatedAt":
                  return this.attributes[attrName];
                default:
                  return this.attributes.metaData[attrName];
              }
            },
            set: function set() {
              var _this2 = this;
              var set2 = function set3(attrName, value) {
                switch (attrName) {
                  case "name":
                  case "url":
                  case "mime_type":
                  case "base64":
                  case "metaData":
                    _this2.attributes[attrName] = value;
                    break;
                  default:
                    _this2.attributes.metaData[attrName] = value;
                    break;
                }
              };
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              switch (args.length) {
                case 1:
                  for (var k in args[0]) {
                    set2(k, args[0][k]);
                  }
                  break;
                case 2:
                  set2(args[0], args[1]);
                  break;
              }
              return this;
            },
            setUploadHeader: function setUploadHeader(key, value) {
              this._uploadHeaders[key] = value;
              return this;
            },
            metaData: function metaData(attr, value) {
              if (attr && value) {
                this.attributes.metaData[attr] = value;
                return this;
              } else if (attr && !value) {
                return this.attributes.metaData[attr];
              } else {
                return this.attributes.metaData;
              }
            },
            thumbnailURL: function thumbnailURL(width, height) {
              var quality = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
              var scaleToFit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
              var fmt = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "png";
              var url = this.attributes.url;
              if (!url) {
                throw new Error("Invalid url.");
              }
              if (!width || !height || width <= 0 || height <= 0) {
                throw new Error("Invalid width or height value.");
              }
              if (quality <= 0 || quality > 100) {
                throw new Error("Invalid quality value.");
              }
              var mode = scaleToFit ? 2 : 1;
              return url + "?imageView/" + mode + "/w/" + width + "/h/" + height + "/q/" + quality + "/format/" + fmt;
            },
            size: function size() {
              return this.metaData().size;
            },
            ownerId: function ownerId() {
              return this.metaData().owner;
            },
            destroy: function destroy(options) {
              if (!this.id) {
                return _promise2.default.reject(new Error("The file id does not eixst."));
              }
              var request2 = AVRequest("files", null, this.id, "DELETE", null, options);
              return request2;
            },
            _fileToken: function _fileToken(type, authOptions) {
              var name = this.attributes.name;
              var extName = extname(name);
              if (!extName && this._extName) {
                name += this._extName;
                extName = this._extName;
              }
              var data2 = {
                name,
                keep_file_name: authOptions.keepFileName,
                key: authOptions.key,
                ACL: this._acl,
                mime_type: type,
                metaData: this.attributes.metaData
              };
              return AVRequest("fileTokens", null, null, "POST", data2, authOptions);
            },
            save: function save() {
              var _this3 = this;
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (this.id) {
                throw new Error("File is already saved.");
              }
              if (!this._previousSave) {
                if (this._data) {
                  var mimeType = this.get("mime_type");
                  this._previousSave = this._fileToken(mimeType, options).then(function(uploadInfo) {
                    if (uploadInfo.mime_type) {
                      mimeType = uploadInfo.mime_type;
                      _this3.set("mime_type", mimeType);
                    }
                    _this3._token = uploadInfo.token;
                    return _promise2.default.resolve().then(function() {
                      var data3 = _this3._data;
                      if (data3 && data3.base64) {
                        return parseBase64(data3.base64, mimeType);
                      }
                      if (data3 && data3.blob) {
                        if (!data3.blob.type && mimeType) {
                          data3.blob.type = mimeType;
                        }
                        if (!data3.blob.name) {
                          data3.blob.name = _this3.get("name");
                        }
                        return data3.blob;
                      }
                      if (typeof Blob !== "undefined" && data3 instanceof Blob) {
                        return data3;
                      }
                      throw new TypeError("malformed file data");
                    }).then(function(data3) {
                      var _options = _.extend({}, options);
                      if (options.onprogress) {
                        _options.onprogress = function(event2) {
                          if (event2.direction === "download")
                            return;
                          return options.onprogress(event2);
                        };
                      }
                      switch (uploadInfo.provider) {
                        case "s3":
                          return s3(uploadInfo, data3, _this3, _options);
                        case "qcloud":
                          return cos(uploadInfo, data3, _this3, _options);
                        case "qiniu":
                        default:
                          return qiniu(uploadInfo, data3, _this3, _options);
                      }
                    }).then(tap(function() {
                      return _this3._callback(true);
                    }), function(error) {
                      _this3._callback(false);
                      throw error;
                    });
                  });
                } else if (this.attributes.url && this.attributes.metaData.__source === "external") {
                  var data2 = {
                    name: this.attributes.name,
                    ACL: this._acl,
                    metaData: this.attributes.metaData,
                    mime_type: this.mimeType,
                    url: this.attributes.url
                  };
                  this._previousSave = AVRequest("files", null, null, "post", data2, options).then(function(response) {
                    _this3.id = response.objectId;
                    return _this3;
                  });
                }
              }
              return this._previousSave;
            },
            _callback: function _callback(success) {
              AVRequest("fileCallback", null, null, "post", {
                token: this._token,
                result: success
              }).catch(debug);
              delete this._token;
              delete this._data;
            },
            fetch: function fetch(fetchOptions, options) {
              if (!this.id) {
                throw new Error("Cannot fetch unsaved file");
              }
              var request2 = AVRequest("files", null, this.id, "GET", transformFetchOptions(fetchOptions), options);
              return request2.then(this._finishFetch.bind(this));
            },
            _finishFetch: function _finishFetch(response) {
              var value = AV2.Object.prototype.parse(response);
              value.attributes = {
                name: value.name,
                url: value.url,
                mime_type: value.mime_type,
                bucket: value.bucket
              };
              value.attributes.metaData = value.metaData || {};
              value.id = value.objectId;
              delete value.objectId;
              delete value.metaData;
              delete value.url;
              delete value.name;
              delete value.mime_type;
              delete value.bucket;
              _.extend(this, value);
              return this;
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
        var debug = __webpack_require__(37)("cos");
        module2.exports = function(uploadInfo, data2, file) {
          var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var url = uploadInfo.upload_url + "?sign=" + encodeURIComponent(uploadInfo.token);
          var fileFormData = {
            field: "fileContent",
            data: data2,
            name: file.attributes.name
          };
          var options = {
            headers: file._uploadHeaders,
            data: {
              op: "upload"
            },
            onprogress: saveOptions.onprogress
          };
          debug("url: %s, file: %o, options: %o", url, fileFormData, options);
          var upload = getAdapter("upload");
          return upload(url, fileFormData, options).then(function(response) {
            debug(response.status, response.data);
            if (response.ok === false) {
              var error = new Error(response.status);
              error.response = response;
              throw error;
            }
            file.attributes.url = uploadInfo.url;
            file._bucket = uploadInfo.bucket;
            file.id = uploadInfo.objectId;
            return file;
          }, function(error) {
            var response = error.response;
            if (response) {
              debug(response.status, response.data);
              error.statusCode = response.status;
              error.response = response.data;
            }
            throw error;
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _getPrototypeOf = __webpack_require__(160);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _possibleConstructorReturn2 = __webpack_require__(297);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(298);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        var _classCallCheck2 = __webpack_require__(306);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(307);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _getIterator2 = __webpack_require__(167);
        var _getIterator3 = _interopRequireDefault(_getIterator2);
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
        var debug = __webpack_require__(37)("leancloud:qiniu");
        var ajax = __webpack_require__(60);
        var btoa2 = __webpack_require__(310);
        var SHARD_THRESHOLD = 1024 * 1024 * 64;
        var CHUNK_SIZE = 1024 * 1024 * 16;
        function upload(uploadInfo, data2, file) {
          var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var uptoken = uploadInfo.token;
          var url = uploadInfo.upload_url || "https://upload.qiniup.com";
          var fileFormData = {
            field: "file",
            data: data2,
            name: file.attributes.name
          };
          var options = {
            headers: file._uploadHeaders,
            data: {
              name: file.attributes.name,
              key: uploadInfo.key,
              token: uptoken
            },
            onprogress: saveOptions.onprogress
          };
          debug("url: %s, file: %o, options: %o", url, fileFormData, options);
          var upload2 = getAdapter("upload");
          return upload2(url, fileFormData, options).then(function(response) {
            debug(response.status, response.data);
            if (response.ok === false) {
              var message = response.status;
              if (response.data) {
                if (response.data.error) {
                  message = response.data.error;
                } else {
                  message = (0, _stringify2.default)(response.data);
                }
              }
              var error = new Error(message);
              error.response = response;
              throw error;
            }
            file.attributes.url = uploadInfo.url;
            file._bucket = uploadInfo.bucket;
            file.id = uploadInfo.objectId;
            return file;
          }, function(error) {
            var response = error.response;
            if (response) {
              debug(response.status, response.data);
              error.statusCode = response.status;
              error.response = response.data;
            }
            throw error;
          });
        }
        function urlSafeBase64(string) {
          var base64 = btoa2(unescape(encodeURIComponent(string)));
          var result = "";
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = (0, _getIterator3.default)(base64), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var ch = _step.value;
              switch (ch) {
                case "+":
                  result += "-";
                  break;
                case "/":
                  result += "_";
                  break;
                default:
                  result += ch;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
          return result;
        }
        var ShardUploader = function() {
          function ShardUploader2(uploadInfo, data2, file, saveOptions) {
            var _this = this;
            (0, _classCallCheck3.default)(this, ShardUploader2);
            this.uploadInfo = uploadInfo;
            this.data = data2;
            this.file = file;
            this.size = void 0;
            this.offset = 0;
            this.uploadedChunks = 0;
            var key = urlSafeBase64(uploadInfo.key);
            var uploadURL = uploadInfo.upload_url || "https://upload.qiniup.com";
            this.baseURL = uploadURL + "/buckets/" + uploadInfo.bucket + "/objects/" + key + "/uploads";
            this.upToken = "UpToken " + uploadInfo.token;
            this.uploaded = 0;
            if (saveOptions && saveOptions.onprogress) {
              this.onProgress = function(_ref) {
                var loaded = _ref.loaded;
                loaded += _this.uploadedChunks * CHUNK_SIZE;
                if (loaded <= _this.uploaded) {
                  return;
                }
                if (_this.size) {
                  saveOptions.onprogress({
                    loaded,
                    total: _this.size,
                    percent: loaded / _this.size * 100
                  });
                } else {
                  saveOptions.onprogress({ loaded });
                }
                _this.uploaded = loaded;
              };
            }
          }
          (0, _createClass3.default)(ShardUploader2, [{
            key: "getUploadId",
            value: function getUploadId() {
              return ajax({
                method: "POST",
                url: this.baseURL,
                headers: {
                  Authorization: this.upToken
                }
              }).then(function(res) {
                return res.uploadId;
              });
            }
          }, {
            key: "getChunk",
            value: function getChunk() {
              throw new Error("Not implemented");
            }
          }, {
            key: "uploadPart",
            value: function uploadPart(uploadId, partNumber, data2) {
              return ajax({
                method: "PUT",
                url: this.baseURL + "/" + uploadId + "/" + partNumber,
                headers: {
                  Authorization: this.upToken
                },
                data: data2,
                onprogress: this.onProgress
              }).then(function(_ref2) {
                var etag = _ref2.etag;
                return { partNumber, etag };
              });
            }
          }, {
            key: "stopUpload",
            value: function stopUpload(uploadId) {
              return ajax({
                method: "DELETE",
                url: this.baseURL + "/" + uploadId,
                headers: {
                  Authorization: this.upToken
                }
              });
            }
          }, {
            key: "upload",
            value: function upload2() {
              var _this2 = this;
              var parts = [];
              return this.getUploadId().then(function(uploadId) {
                var uploadPart = function uploadPart2() {
                  return _promise2.default.resolve(_this2.getChunk()).then(function(chunk) {
                    if (!chunk) {
                      return;
                    }
                    var partNumber = parts.length + 1;
                    return _this2.uploadPart(uploadId, partNumber, chunk).then(function(part) {
                      parts.push(part);
                      _this2.uploadedChunks++;
                      return uploadPart2();
                    });
                  }).catch(function(error) {
                    return _this2.stopUpload(uploadId).then(function() {
                      return _promise2.default.reject(error);
                    });
                  });
                };
                return uploadPart().then(function() {
                  return ajax({
                    method: "POST",
                    url: _this2.baseURL + "/" + uploadId,
                    headers: {
                      Authorization: _this2.upToken
                    },
                    data: {
                      parts,
                      fname: _this2.file.attributes.name,
                      mimeType: _this2.file.attributes.mime_type
                    }
                  });
                });
              }).then(function() {
                _this2.file.attributes.url = _this2.uploadInfo.url;
                _this2.file._bucket = _this2.uploadInfo.bucket;
                _this2.file.id = _this2.uploadInfo.objectId;
                return _this2.file;
              });
            }
          }]);
          return ShardUploader2;
        }();
        var BlobUploader = function(_ShardUploader) {
          (0, _inherits3.default)(BlobUploader2, _ShardUploader);
          function BlobUploader2(uploadInfo, data2, file, saveOptions) {
            (0, _classCallCheck3.default)(this, BlobUploader2);
            var _this3 = (0, _possibleConstructorReturn3.default)(this, (BlobUploader2.__proto__ || (0, _getPrototypeOf2.default)(BlobUploader2)).call(this, uploadInfo, data2, file, saveOptions));
            _this3.size = data2.size;
            return _this3;
          }
          (0, _createClass3.default)(BlobUploader2, [{
            key: "getChunk",
            value: function getChunk() {
              if (this.offset >= this.size) {
                return null;
              }
              var chunk = this.data.slice(this.offset, this.offset + CHUNK_SIZE);
              this.offset += chunk.size;
              return chunk;
            }
          }]);
          return BlobUploader2;
        }(ShardUploader);
        function isBlob2(data2) {
          return typeof Blob !== "undefined" && data2 instanceof Blob;
        }
        module2.exports = function(uploadInfo, data2, file) {
          var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (isBlob2(data2) && data2.size >= SHARD_THRESHOLD) {
            return new BlobUploader(uploadInfo, data2, file, saveOptions).upload();
          }
          return upload(uploadInfo, data2, file, saveOptions);
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _typeof2 = __webpack_require__(30);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self2;
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _setPrototypeOf = __webpack_require__(299);
        var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
        var _create = __webpack_require__(303);
        var _create2 = _interopRequireDefault(_create);
        var _typeof2 = __webpack_require__(30);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
          }
          subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass)
            _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(300), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(301);
        module2.exports = __webpack_require__(2).Object.setPrototypeOf;
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        $export($export.S, "Object", { setPrototypeOf: __webpack_require__(302).set });
      },
      function(module2, exports2, __webpack_require__) {
        var isObject2 = __webpack_require__(20);
        var anObject = __webpack_require__(17);
        var check = function(O, proto) {
          anObject(O);
          if (!isObject2(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!");
        };
        module2.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
            try {
              set = __webpack_require__(31)(Function.call, __webpack_require__(94).f(Object.prototype, "__proto__").set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e2) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy)
                O.__proto__ = proto;
              else
                set(O, proto);
              return O;
            };
          }({}, false) : void 0),
          check
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(304), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(305);
        var $Object = __webpack_require__(2).Object;
        module2.exports = function create(P, D) {
          return $Object.create(P, D);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(16);
        $export($export.S, "Object", { create: __webpack_require__(66) });
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.default = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _defineProperty = __webpack_require__(90);
        var _defineProperty2 = _interopRequireDefault(_defineProperty);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function() {
          function defineProperties(target, props) {
            for (var i2 = 0; i2 < props.length; i2++) {
              var descriptor = props[i2];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              (0, _defineProperty2.default)(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(56);
        __webpack_require__(39);
        module2.exports = __webpack_require__(309);
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(17);
        var get = __webpack_require__(72);
        module2.exports = __webpack_require__(2).getIterator = function(it) {
          var iterFn = get(it);
          if (typeof iterFn != "function")
            throw TypeError(it + " is not iterable!");
          return anObject(iterFn.call(it));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        module2.exports = function(string) {
          var result = "";
          for (var i2 = 0; i2 < string.length; ) {
            var a = string.charCodeAt(i2++);
            var b = string.charCodeAt(i2++);
            var c = string.charCodeAt(i2++);
            if (a > 255 || b > 255 || c > 255) {
              throw new TypeError("Failed to encode base64: The string to be encoded contains characters outside of the Latin1 range.");
            }
            var bitmap = a << 16 | b << 8 | c;
            result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
          }
          var rest = string.length % 3;
          return rest ? result.slice(0, rest - 3) + "===".substring(rest) : result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        var ajax = __webpack_require__(60);
        module2.exports = function upload(uploadInfo, data2, file) {
          var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return ajax({
            url: uploadInfo.upload_url,
            method: "PUT",
            data: data2,
            headers: _.extend({
              "Content-Type": file.get("mime_type"),
              "Cache-Control": "public, max-age=31536000"
            }, file._uploadHeaders),
            onprogress: saveOptions.onprogress
          }).then(function() {
            file.attributes.url = uploadInfo.url;
            file._bucket = uploadInfo.bucket;
            file.id = uploadInfo.objectId;
            return file;
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        (function() {
          var crypt = __webpack_require__(313), utf8 = __webpack_require__(168).utf8, isBuffer2 = __webpack_require__(314), bin = __webpack_require__(168).bin, md52 = function(message, options) {
            if (message.constructor == String)
              if (options && options.encoding === "binary")
                message = bin.stringToBytes(message);
              else
                message = utf8.stringToBytes(message);
            else if (isBuffer2(message))
              message = Array.prototype.slice.call(message, 0);
            else if (!Array.isArray(message))
              message = message.toString();
            var m = crypt.bytesToWords(message), l2 = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d2 = 271733878;
            for (var i2 = 0; i2 < m.length; i2++) {
              m[i2] = (m[i2] << 8 | m[i2] >>> 24) & 16711935 | (m[i2] << 24 | m[i2] >>> 8) & 4278255360;
            }
            m[l2 >>> 5] |= 128 << l2 % 32;
            m[(l2 + 64 >>> 9 << 4) + 14] = l2;
            var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
            for (var i2 = 0; i2 < m.length; i2 += 16) {
              var aa = a, bb = b, cc = c, dd = d2;
              a = FF(a, b, c, d2, m[i2 + 0], 7, -680876936);
              d2 = FF(d2, a, b, c, m[i2 + 1], 12, -389564586);
              c = FF(c, d2, a, b, m[i2 + 2], 17, 606105819);
              b = FF(b, c, d2, a, m[i2 + 3], 22, -1044525330);
              a = FF(a, b, c, d2, m[i2 + 4], 7, -176418897);
              d2 = FF(d2, a, b, c, m[i2 + 5], 12, 1200080426);
              c = FF(c, d2, a, b, m[i2 + 6], 17, -1473231341);
              b = FF(b, c, d2, a, m[i2 + 7], 22, -45705983);
              a = FF(a, b, c, d2, m[i2 + 8], 7, 1770035416);
              d2 = FF(d2, a, b, c, m[i2 + 9], 12, -1958414417);
              c = FF(c, d2, a, b, m[i2 + 10], 17, -42063);
              b = FF(b, c, d2, a, m[i2 + 11], 22, -1990404162);
              a = FF(a, b, c, d2, m[i2 + 12], 7, 1804603682);
              d2 = FF(d2, a, b, c, m[i2 + 13], 12, -40341101);
              c = FF(c, d2, a, b, m[i2 + 14], 17, -1502002290);
              b = FF(b, c, d2, a, m[i2 + 15], 22, 1236535329);
              a = GG(a, b, c, d2, m[i2 + 1], 5, -165796510);
              d2 = GG(d2, a, b, c, m[i2 + 6], 9, -1069501632);
              c = GG(c, d2, a, b, m[i2 + 11], 14, 643717713);
              b = GG(b, c, d2, a, m[i2 + 0], 20, -373897302);
              a = GG(a, b, c, d2, m[i2 + 5], 5, -701558691);
              d2 = GG(d2, a, b, c, m[i2 + 10], 9, 38016083);
              c = GG(c, d2, a, b, m[i2 + 15], 14, -660478335);
              b = GG(b, c, d2, a, m[i2 + 4], 20, -405537848);
              a = GG(a, b, c, d2, m[i2 + 9], 5, 568446438);
              d2 = GG(d2, a, b, c, m[i2 + 14], 9, -1019803690);
              c = GG(c, d2, a, b, m[i2 + 3], 14, -187363961);
              b = GG(b, c, d2, a, m[i2 + 8], 20, 1163531501);
              a = GG(a, b, c, d2, m[i2 + 13], 5, -1444681467);
              d2 = GG(d2, a, b, c, m[i2 + 2], 9, -51403784);
              c = GG(c, d2, a, b, m[i2 + 7], 14, 1735328473);
              b = GG(b, c, d2, a, m[i2 + 12], 20, -1926607734);
              a = HH(a, b, c, d2, m[i2 + 5], 4, -378558);
              d2 = HH(d2, a, b, c, m[i2 + 8], 11, -2022574463);
              c = HH(c, d2, a, b, m[i2 + 11], 16, 1839030562);
              b = HH(b, c, d2, a, m[i2 + 14], 23, -35309556);
              a = HH(a, b, c, d2, m[i2 + 1], 4, -1530992060);
              d2 = HH(d2, a, b, c, m[i2 + 4], 11, 1272893353);
              c = HH(c, d2, a, b, m[i2 + 7], 16, -155497632);
              b = HH(b, c, d2, a, m[i2 + 10], 23, -1094730640);
              a = HH(a, b, c, d2, m[i2 + 13], 4, 681279174);
              d2 = HH(d2, a, b, c, m[i2 + 0], 11, -358537222);
              c = HH(c, d2, a, b, m[i2 + 3], 16, -722521979);
              b = HH(b, c, d2, a, m[i2 + 6], 23, 76029189);
              a = HH(a, b, c, d2, m[i2 + 9], 4, -640364487);
              d2 = HH(d2, a, b, c, m[i2 + 12], 11, -421815835);
              c = HH(c, d2, a, b, m[i2 + 15], 16, 530742520);
              b = HH(b, c, d2, a, m[i2 + 2], 23, -995338651);
              a = II(a, b, c, d2, m[i2 + 0], 6, -198630844);
              d2 = II(d2, a, b, c, m[i2 + 7], 10, 1126891415);
              c = II(c, d2, a, b, m[i2 + 14], 15, -1416354905);
              b = II(b, c, d2, a, m[i2 + 5], 21, -57434055);
              a = II(a, b, c, d2, m[i2 + 12], 6, 1700485571);
              d2 = II(d2, a, b, c, m[i2 + 3], 10, -1894986606);
              c = II(c, d2, a, b, m[i2 + 10], 15, -1051523);
              b = II(b, c, d2, a, m[i2 + 1], 21, -2054922799);
              a = II(a, b, c, d2, m[i2 + 8], 6, 1873313359);
              d2 = II(d2, a, b, c, m[i2 + 15], 10, -30611744);
              c = II(c, d2, a, b, m[i2 + 6], 15, -1560198380);
              b = II(b, c, d2, a, m[i2 + 13], 21, 1309151649);
              a = II(a, b, c, d2, m[i2 + 4], 6, -145523070);
              d2 = II(d2, a, b, c, m[i2 + 11], 10, -1120210379);
              c = II(c, d2, a, b, m[i2 + 2], 15, 718787259);
              b = II(b, c, d2, a, m[i2 + 9], 21, -343485551);
              a = a + aa >>> 0;
              b = b + bb >>> 0;
              c = c + cc >>> 0;
              d2 = d2 + dd >>> 0;
            }
            return crypt.endian([a, b, c, d2]);
          };
          md52._ff = function(a, b, c, d2, x, s, t2) {
            var n2 = a + (b & c | ~b & d2) + (x >>> 0) + t2;
            return (n2 << s | n2 >>> 32 - s) + b;
          };
          md52._gg = function(a, b, c, d2, x, s, t2) {
            var n2 = a + (b & d2 | c & ~d2) + (x >>> 0) + t2;
            return (n2 << s | n2 >>> 32 - s) + b;
          };
          md52._hh = function(a, b, c, d2, x, s, t2) {
            var n2 = a + (b ^ c ^ d2) + (x >>> 0) + t2;
            return (n2 << s | n2 >>> 32 - s) + b;
          };
          md52._ii = function(a, b, c, d2, x, s, t2) {
            var n2 = a + (c ^ (b | ~d2)) + (x >>> 0) + t2;
            return (n2 << s | n2 >>> 32 - s) + b;
          };
          md52._blocksize = 16;
          md52._digestsize = 16;
          module2.exports = function(message, options) {
            if (message === void 0 || message === null)
              throw new Error("Illegal argument " + message);
            var digestbytes = crypt.wordsToBytes(md52(message, options));
            return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
          };
        })();
      },
      function(module2, exports2) {
        (function() {
          var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
            rotl: function(n2, b) {
              return n2 << b | n2 >>> 32 - b;
            },
            rotr: function(n2, b) {
              return n2 << 32 - b | n2 >>> b;
            },
            endian: function(n2) {
              if (n2.constructor == Number) {
                return crypt.rotl(n2, 8) & 16711935 | crypt.rotl(n2, 24) & 4278255360;
              }
              for (var i2 = 0; i2 < n2.length; i2++)
                n2[i2] = crypt.endian(n2[i2]);
              return n2;
            },
            randomBytes: function(n2) {
              for (var bytes = []; n2 > 0; n2--)
                bytes.push(Math.floor(Math.random() * 256));
              return bytes;
            },
            bytesToWords: function(bytes) {
              for (var words = [], i2 = 0, b = 0; i2 < bytes.length; i2++, b += 8)
                words[b >>> 5] |= bytes[i2] << 24 - b % 32;
              return words;
            },
            wordsToBytes: function(words) {
              for (var bytes = [], b = 0; b < words.length * 32; b += 8)
                bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
              return bytes;
            },
            bytesToHex: function(bytes) {
              for (var hex = [], i2 = 0; i2 < bytes.length; i2++) {
                hex.push((bytes[i2] >>> 4).toString(16));
                hex.push((bytes[i2] & 15).toString(16));
              }
              return hex.join("");
            },
            hexToBytes: function(hex) {
              for (var bytes = [], c = 0; c < hex.length; c += 2)
                bytes.push(parseInt(hex.substr(c, 2), 16));
              return bytes;
            },
            bytesToBase64: function(bytes) {
              for (var base64 = [], i2 = 0; i2 < bytes.length; i2 += 3) {
                var triplet = bytes[i2] << 16 | bytes[i2 + 1] << 8 | bytes[i2 + 2];
                for (var j = 0; j < 4; j++)
                  if (i2 * 8 + j * 6 <= bytes.length * 8)
                    base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                  else
                    base64.push("=");
              }
              return base64.join("");
            },
            base64ToBytes: function(base64) {
              base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
              for (var bytes = [], i2 = 0, imod4 = 0; i2 < base64.length; imod4 = ++i2 % 4) {
                if (imod4 == 0)
                  continue;
                bytes.push((base64map.indexOf(base64.charAt(i2 - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i2)) >>> 6 - imod4 * 2);
              }
              return bytes;
            }
          };
          module2.exports = crypt;
        })();
      },
      function(module2, exports2) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        module2.exports = function(obj) {
          return obj != null && (isBuffer2(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
        };
        function isBuffer2(obj) {
          return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
        }
        function isSlowBuffer(obj) {
          return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer2(obj.slice(0, 0));
        }
      },
      function(module2, exports2, __webpack_require__) {
        var dataURItoBlob = function dataURItoBlob2(dataURI, type) {
          var byteString;
          if (dataURI.indexOf("base64") < 0) {
            byteString = atob(dataURI);
          } else if (dataURI.split(",")[0].indexOf("base64") >= 0) {
            type = type || dataURI.split(",")[0].split(":")[1].split(";")[0];
            byteString = atob(dataURI.split(",")[1]);
          } else {
            byteString = unescape(dataURI.split(",")[1]);
          }
          var ia = new Uint8Array(byteString.length);
          for (var i2 = 0; i2 < byteString.length; i2++) {
            ia[i2] = byteString.charCodeAt(i2);
          }
          return new Blob([ia], { type });
        };
        module2.exports = dataURItoBlob;
      },
      function(module2, exports2, __webpack_require__) {
        var _getOwnPropertyDescriptor = __webpack_require__(317);
        var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        var _slicedToArray2 = __webpack_require__(320);
        var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var AVError = __webpack_require__(29);
        var _require = __webpack_require__(12), _request = _require._request;
        var _require2 = __webpack_require__(15), isNullOrUndefined = _require2.isNullOrUndefined, ensureArray = _require2.ensureArray, transformFetchOptions = _require2.transformFetchOptions, setValue = _require2.setValue, findValue = _require2.findValue, isPlainObject2 = _require2.isPlainObject, continueWhile = _require2.continueWhile;
        var recursiveToPointer = function recursiveToPointer2(value) {
          if (_.isArray(value))
            return value.map(recursiveToPointer2);
          if (isPlainObject2(value))
            return _.mapObject(value, recursiveToPointer2);
          if (_.isObject(value) && value._toPointer)
            return value._toPointer();
          return value;
        };
        var RESERVED_KEYS = ["objectId", "createdAt", "updatedAt"];
        var checkReservedKey = function checkReservedKey2(key) {
          if (RESERVED_KEYS.indexOf(key) !== -1) {
            throw new Error("key[" + key + "] is reserved");
          }
        };
        var handleBatchResults = function handleBatchResults2(results) {
          var firstError = _.find(results, function(result) {
            return result instanceof Error;
          });
          if (!firstError) {
            return results;
          }
          var error = new AVError(firstError.code, firstError.message);
          error.results = results;
          throw error;
        };
        function getValue(object, prop) {
          if (!(object && object[prop])) {
            return null;
          }
          return _.isFunction(object[prop]) ? object[prop]() : object[prop];
        }
        module2.exports = function(AV2) {
          AV2.Object = function(attributes, options) {
            if (_.isString(attributes)) {
              return AV2.Object._create.apply(this, arguments);
            }
            attributes = attributes || {};
            if (options && options.parse) {
              attributes = this.parse(attributes);
              attributes = this._mergeMagicFields(attributes);
            }
            var defaults2 = getValue(this, "defaults");
            if (defaults2) {
              attributes = _.extend({}, defaults2, attributes);
            }
            if (options && options.collection) {
              this.collection = options.collection;
            }
            this._serverData = {};
            this._opSetQueue = [{}];
            this._flags = {};
            this.attributes = {};
            this._hashedJSON = {};
            this._escapedAttributes = {};
            this.cid = _.uniqueId("c");
            this.changed = {};
            this._silent = {};
            this._pending = {};
            this.set(attributes, { silent: true });
            this.changed = {};
            this._silent = {};
            this._pending = {};
            this._hasData = true;
            this._previousAttributes = _.clone(this.attributes);
            this.initialize.apply(this, arguments);
          };
          AV2.Object.saveAll = function(list, options) {
            return AV2.Object._deepSaveAsync(list, null, options);
          };
          AV2.Object.fetchAll = function(objects, options) {
            return _promise2.default.resolve().then(function() {
              return _request("batch", null, null, "POST", {
                requests: _.map(objects, function(object) {
                  if (!object.className)
                    throw new Error("object must have className to fetch");
                  if (!object.id)
                    throw new Error("object must have id to fetch");
                  if (object.dirty())
                    throw new Error("object is modified but not saved");
                  return {
                    method: "GET",
                    path: "/1.1/classes/" + object.className + "/" + object.id
                  };
                })
              }, options);
            }).then(function(response) {
              var results = _.map(objects, function(object, i2) {
                if (response[i2].success) {
                  var fetchedAttrs = object.parse(response[i2].success);
                  object._cleanupUnsetKeys(fetchedAttrs);
                  object._finishFetch(fetchedAttrs);
                  return object;
                }
                if (response[i2].success === null) {
                  return new AVError(AVError.OBJECT_NOT_FOUND, "Object not found.");
                }
                return new AVError(response[i2].error.code, response[i2].error.error);
              });
              return handleBatchResults(results);
            });
          };
          _.extend(AV2.Object.prototype, AV2.Events, {
            _fetchWhenSave: false,
            initialize: function initialize() {
            },
            fetchWhenSave: function fetchWhenSave(enable) {
              console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.");
              if (!_.isBoolean(enable)) {
                throw new Error("Expect boolean value for fetchWhenSave");
              }
              this._fetchWhenSave = enable;
            },
            getObjectId: function getObjectId() {
              return this.id;
            },
            getCreatedAt: function getCreatedAt() {
              return this.createdAt;
            },
            getUpdatedAt: function getUpdatedAt() {
              return this.updatedAt;
            },
            toJSON: function toJSON(key, holder) {
              var seenObjects = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
              return this._toFullJSON(seenObjects, false);
            },
            toFullJSON: function toFullJSON() {
              var seenObjects = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              return this._toFullJSON(seenObjects);
            },
            _toFullJSON: function _toFullJSON(seenObjects) {
              var _this = this;
              var full = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              var json = _.clone(this.attributes);
              if (_.isArray(seenObjects)) {
                var newSeenObjects = seenObjects.concat(this);
              }
              AV2._objectEach(json, function(val, key) {
                json[key] = AV2._encode(val, newSeenObjects, void 0, full);
              });
              AV2._objectEach(this._operations, function(val, key) {
                json[key] = val;
              });
              if (_.has(this, "id")) {
                json.objectId = this.id;
              }
              ["createdAt", "updatedAt"].forEach(function(key) {
                if (_.has(_this, key)) {
                  var val = _this[key];
                  json[key] = _.isDate(val) ? val.toJSON() : val;
                }
              });
              if (full) {
                json.__type = "Object";
                if (_.isArray(seenObjects) && seenObjects.length)
                  json.__type = "Pointer";
                json.className = this.className;
              }
              return json;
            },
            _refreshCache: function _refreshCache() {
              var self2 = this;
              if (self2._refreshingCache) {
                return;
              }
              self2._refreshingCache = true;
              AV2._objectEach(this.attributes, function(value, key) {
                if (value instanceof AV2.Object) {
                  value._refreshCache();
                } else if (_.isObject(value)) {
                  if (self2._resetCacheForKey(key)) {
                    self2.set(key, new AV2.Op.Set(value), { silent: true });
                  }
                }
              });
              delete self2._refreshingCache;
            },
            dirty: function dirty(attr) {
              this._refreshCache();
              var currentChanges = _.last(this._opSetQueue);
              if (attr) {
                return currentChanges[attr] ? true : false;
              }
              if (!this.id) {
                return true;
              }
              if (_.keys(currentChanges).length > 0) {
                return true;
              }
              return false;
            },
            dirtyKeys: function dirtyKeys() {
              this._refreshCache();
              var currentChanges = _.last(this._opSetQueue);
              return _.keys(currentChanges);
            },
            _toPointer: function _toPointer() {
              return {
                __type: "Pointer",
                className: this.className,
                objectId: this.id
              };
            },
            get: function get(attr) {
              switch (attr) {
                case "objectId":
                  return this.id;
                case "createdAt":
                case "updatedAt":
                  return this[attr];
                default:
                  return this.attributes[attr];
              }
            },
            relation: function relation(attr) {
              var value = this.get(attr);
              if (value) {
                if (!(value instanceof AV2.Relation)) {
                  throw new Error("Called relation() on non-relation field " + attr);
                }
                value._ensureParentAndKey(this, attr);
                return value;
              } else {
                return new AV2.Relation(this, attr);
              }
            },
            escape: function escape2(attr) {
              var html = this._escapedAttributes[attr];
              if (html) {
                return html;
              }
              var val = this.attributes[attr];
              var escaped;
              if (isNullOrUndefined(val)) {
                escaped = "";
              } else {
                escaped = _.escape(val.toString());
              }
              this._escapedAttributes[attr] = escaped;
              return escaped;
            },
            has: function has(attr) {
              return !isNullOrUndefined(this.attributes[attr]);
            },
            _mergeMagicFields: function _mergeMagicFields(attrs) {
              var model = this;
              var specialFields = ["objectId", "createdAt", "updatedAt"];
              AV2._arrayEach(specialFields, function(attr) {
                if (attrs[attr]) {
                  if (attr === "objectId") {
                    model.id = attrs[attr];
                  } else if ((attr === "createdAt" || attr === "updatedAt") && !_.isDate(attrs[attr])) {
                    model[attr] = AV2._parseDate(attrs[attr]);
                  } else {
                    model[attr] = attrs[attr];
                  }
                  delete attrs[attr];
                }
              });
              return attrs;
            },
            _startSave: function _startSave() {
              this._opSetQueue.push({});
            },
            _cancelSave: function _cancelSave() {
              var failedChanges = _.first(this._opSetQueue);
              this._opSetQueue = _.rest(this._opSetQueue);
              var nextChanges = _.first(this._opSetQueue);
              AV2._objectEach(failedChanges, function(op, key) {
                var op1 = failedChanges[key];
                var op2 = nextChanges[key];
                if (op1 && op2) {
                  nextChanges[key] = op2._mergeWithPrevious(op1);
                } else if (op1) {
                  nextChanges[key] = op1;
                }
              });
              this._saving = this._saving - 1;
            },
            _finishSave: function _finishSave(serverData) {
              var fetchedObjects = {};
              AV2._traverse(this.attributes, function(object) {
                if (object instanceof AV2.Object && object.id && object._hasData) {
                  fetchedObjects[object.id] = object;
                }
              });
              var savedChanges = _.first(this._opSetQueue);
              this._opSetQueue = _.rest(this._opSetQueue);
              this._applyOpSet(savedChanges, this._serverData);
              this._mergeMagicFields(serverData);
              var self2 = this;
              AV2._objectEach(serverData, function(value, key) {
                self2._serverData[key] = AV2._decode(value, key);
                var fetched = AV2._traverse(self2._serverData[key], function(object) {
                  if (object instanceof AV2.Object && fetchedObjects[object.id]) {
                    return fetchedObjects[object.id];
                  }
                });
                if (fetched) {
                  self2._serverData[key] = fetched;
                }
              });
              this._rebuildAllEstimatedData();
              var opSetQueue = this._opSetQueue.map(_.clone);
              this._refreshCache();
              this._opSetQueue = opSetQueue;
              this._saving = this._saving - 1;
            },
            _finishFetch: function _finishFetch(serverData, hasData) {
              this._opSetQueue = [{}];
              this._mergeMagicFields(serverData);
              var self2 = this;
              AV2._objectEach(serverData, function(value, key) {
                self2._serverData[key] = AV2._decode(value, key);
              });
              this._rebuildAllEstimatedData();
              this._refreshCache();
              this._opSetQueue = [{}];
              this._hasData = hasData;
            },
            _applyOpSet: function _applyOpSet(opSet, target) {
              var self2 = this;
              AV2._objectEach(opSet, function(change, key) {
                var _findValue = findValue(target, key), _findValue2 = (0, _slicedToArray3.default)(_findValue, 3), value = _findValue2[0], actualTarget = _findValue2[1], actualKey = _findValue2[2];
                setValue(target, key, change._estimate(value, self2, key));
                if (actualTarget && actualTarget[actualKey] === AV2.Op._UNSET) {
                  delete actualTarget[actualKey];
                }
              });
            },
            _resetCacheForKey: function _resetCacheForKey(key) {
              var value = this.attributes[key];
              if (_.isObject(value) && !(value instanceof AV2.Object) && !(value instanceof AV2.File)) {
                var json = (0, _stringify2.default)(recursiveToPointer(value));
                if (this._hashedJSON[key] !== json) {
                  var wasSet = !!this._hashedJSON[key];
                  this._hashedJSON[key] = json;
                  return wasSet;
                }
              }
              return false;
            },
            _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(key) {
              var self2 = this;
              delete this.attributes[key];
              if (this._serverData[key]) {
                this.attributes[key] = this._serverData[key];
              }
              AV2._arrayEach(this._opSetQueue, function(opSet) {
                var op = opSet[key];
                if (op) {
                  var _findValue3 = findValue(self2.attributes, key), _findValue4 = (0, _slicedToArray3.default)(_findValue3, 4), value = _findValue4[0], actualTarget = _findValue4[1], actualKey = _findValue4[2], firstKey = _findValue4[3];
                  setValue(self2.attributes, key, op._estimate(value, self2, key));
                  if (actualTarget && actualTarget[actualKey] === AV2.Op._UNSET) {
                    delete actualTarget[actualKey];
                  }
                  self2._resetCacheForKey(firstKey);
                }
              });
            },
            _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
              var self2 = this;
              var previousAttributes = _.clone(this.attributes);
              this.attributes = _.clone(this._serverData);
              AV2._arrayEach(this._opSetQueue, function(opSet) {
                self2._applyOpSet(opSet, self2.attributes);
                AV2._objectEach(opSet, function(op, key) {
                  self2._resetCacheForKey(key);
                });
              });
              AV2._objectEach(previousAttributes, function(oldValue, key) {
                if (self2.attributes[key] !== oldValue) {
                  self2.trigger("change:" + key, self2, self2.attributes[key], {});
                }
              });
              AV2._objectEach(this.attributes, function(newValue, key) {
                if (!_.has(previousAttributes, key)) {
                  self2.trigger("change:" + key, self2, newValue, {});
                }
              });
            },
            set: function set(key, value, options) {
              var attrs;
              if (_.isObject(key) || isNullOrUndefined(key)) {
                attrs = _.mapObject(key, function(v, k) {
                  checkReservedKey(k);
                  return AV2._decode(v, k);
                });
                options = value;
              } else {
                attrs = {};
                checkReservedKey(key);
                attrs[key] = AV2._decode(value, key);
              }
              options = options || {};
              if (!attrs) {
                return this;
              }
              if (attrs instanceof AV2.Object) {
                attrs = attrs.attributes;
              }
              if (options.unset) {
                AV2._objectEach(attrs, function(unused_value, key2) {
                  attrs[key2] = new AV2.Op.Unset();
                });
              }
              var dataToValidate = _.clone(attrs);
              var self2 = this;
              AV2._objectEach(dataToValidate, function(value2, key2) {
                if (value2 instanceof AV2.Op) {
                  dataToValidate[key2] = value2._estimate(self2.attributes[key2], self2, key2);
                  if (dataToValidate[key2] === AV2.Op._UNSET) {
                    delete dataToValidate[key2];
                  }
                }
              });
              this._validate(attrs, options);
              options.changes = {};
              var escaped = this._escapedAttributes;
              AV2._arrayEach(_.keys(attrs), function(attr) {
                var val = attrs[attr];
                if (val instanceof AV2.Relation) {
                  val.parent = self2;
                }
                if (!(val instanceof AV2.Op)) {
                  val = new AV2.Op.Set(val);
                }
                var isRealChange = true;
                if (val instanceof AV2.Op.Set && _.isEqual(self2.attributes[attr], val.value)) {
                  isRealChange = false;
                }
                if (isRealChange) {
                  delete escaped[attr];
                  if (options.silent) {
                    self2._silent[attr] = true;
                  } else {
                    options.changes[attr] = true;
                  }
                }
                var currentChanges = _.last(self2._opSetQueue);
                currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
                self2._rebuildEstimatedDataForKey(attr);
                if (isRealChange) {
                  self2.changed[attr] = self2.attributes[attr];
                  if (!options.silent) {
                    self2._pending[attr] = true;
                  }
                } else {
                  delete self2.changed[attr];
                  delete self2._pending[attr];
                }
              });
              if (!options.silent) {
                this.change(options);
              }
              return this;
            },
            unset: function unset(attr, options) {
              options = options || {};
              options.unset = true;
              return this.set(attr, null, options);
            },
            increment: function increment(attr, amount) {
              if (_.isUndefined(amount) || _.isNull(amount)) {
                amount = 1;
              }
              return this.set(attr, new AV2.Op.Increment(amount));
            },
            add: function add(attr, item) {
              return this.set(attr, new AV2.Op.Add(ensureArray(item)));
            },
            addUnique: function addUnique(attr, item) {
              return this.set(attr, new AV2.Op.AddUnique(ensureArray(item)));
            },
            remove: function remove(attr, item) {
              return this.set(attr, new AV2.Op.Remove(ensureArray(item)));
            },
            bitAnd: function bitAnd(attr, value) {
              return this.set(attr, new AV2.Op.BitAnd(value));
            },
            bitOr: function bitOr(attr, value) {
              return this.set(attr, new AV2.Op.BitOr(value));
            },
            bitXor: function bitXor(attr, value) {
              return this.set(attr, new AV2.Op.BitXor(value));
            },
            op: function op(attr) {
              return _.last(this._opSetQueue)[attr];
            },
            clear: function clear(options) {
              options = options || {};
              options.unset = true;
              var keysToClear = _.extend(this.attributes, this._operations);
              return this.set(keysToClear, options);
            },
            revert: function revert(keys) {
              var lastOp = _.last(this._opSetQueue);
              var _keys = ensureArray(keys || _.keys(lastOp));
              _keys.forEach(function(key) {
                delete lastOp[key];
              });
              this._rebuildAllEstimatedData();
              return this;
            },
            _getSaveJSON: function _getSaveJSON() {
              var json = _.clone(_.first(this._opSetQueue));
              AV2._objectEach(json, function(op, key) {
                json[key] = op.toJSON();
              });
              return json;
            },
            _canBeSerialized: function _canBeSerialized() {
              return AV2.Object._canBeSerializedAsValue(this.attributes);
            },
            fetch: function fetch() {
              var fetchOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var options = arguments[1];
              if (!this.id) {
                throw new Error("Cannot fetch unsaved object");
              }
              var self2 = this;
              var request2 = _request("classes", this.className, this.id, "GET", transformFetchOptions(fetchOptions), options);
              return request2.then(function(response) {
                var fetchedAttrs = self2.parse(response);
                self2._cleanupUnsetKeys(fetchedAttrs, fetchOptions.keys ? ensureArray(fetchOptions.keys).join(",").split(",") : void 0);
                self2._finishFetch(fetchedAttrs, true);
                return self2;
              });
            },
            _cleanupUnsetKeys: function _cleanupUnsetKeys(fetchedAttrs) {
              var _this2 = this;
              var fetchedKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.keys(this._serverData);
              _.forEach(fetchedKeys, function(key) {
                if (fetchedAttrs[key] === void 0)
                  delete _this2._serverData[key];
              });
            },
            save: function save(arg1, arg2, arg3) {
              var attrs, current, options;
              if (_.isObject(arg1) || isNullOrUndefined(arg1)) {
                attrs = arg1;
                options = arg2;
              } else {
                attrs = {};
                attrs[arg1] = arg2;
                options = arg3;
              }
              options = _.clone(options) || {};
              if (options.wait) {
                current = _.clone(this.attributes);
              }
              var setOptions = _.clone(options) || {};
              if (setOptions.wait) {
                setOptions.silent = true;
              }
              if (attrs) {
                this.set(attrs, setOptions);
              }
              var model = this;
              var unsavedChildren = [];
              var unsavedFiles = [];
              AV2.Object._findUnsavedChildren(model, unsavedChildren, unsavedFiles);
              if (unsavedChildren.length + unsavedFiles.length > 1) {
                return AV2.Object._deepSaveAsync(this, model, options);
              }
              this._startSave();
              this._saving = (this._saving || 0) + 1;
              this._allPreviousSaves = this._allPreviousSaves || _promise2.default.resolve();
              this._allPreviousSaves = this._allPreviousSaves.catch(function(e2) {
              }).then(function() {
                var method = model.id ? "PUT" : "POST";
                var json = model._getSaveJSON();
                var query = {};
                if (model._fetchWhenSave || options.fetchWhenSave) {
                  query["new"] = "true";
                }
                if (options._failOnNotExist) {
                  query.failOnNotExist = "true";
                }
                if (options.query) {
                  var queryParams;
                  if (typeof options.query._getParams === "function") {
                    queryParams = options.query._getParams();
                    if (queryParams) {
                      query.where = queryParams.where;
                    }
                  }
                  if (!query.where) {
                    var error = new Error("options.query is not an AV.Query");
                    throw error;
                  }
                }
                _.extend(json, model._flags);
                var route = "classes";
                var className = model.className;
                if (model.className === "_User" && !model.id) {
                  route = "users";
                  className = null;
                }
                var makeRequest = options._makeRequest || _request;
                var requestPromise = makeRequest(route, className, model.id, method, json, options, query);
                requestPromise = requestPromise.then(function(resp) {
                  var serverAttrs = model.parse(resp);
                  if (options.wait) {
                    serverAttrs = _.extend(attrs || {}, serverAttrs);
                  }
                  model._finishSave(serverAttrs);
                  if (options.wait) {
                    model.set(current, setOptions);
                  }
                  return model;
                }, function(error2) {
                  model._cancelSave();
                  throw error2;
                });
                return requestPromise;
              });
              return this._allPreviousSaves;
            },
            destroy: function destroy(options) {
              options = options || {};
              var model = this;
              var triggerDestroy = function triggerDestroy2() {
                model.trigger("destroy", model, model.collection, options);
              };
              if (!this.id) {
                return triggerDestroy();
              }
              if (!options.wait) {
                triggerDestroy();
              }
              var request2 = _request("classes", this.className, this.id, "DELETE", this._flags, options);
              return request2.then(function() {
                if (options.wait) {
                  triggerDestroy();
                }
                return model;
              });
            },
            parse: function parse(resp) {
              var output = _.clone(resp);
              ["createdAt", "updatedAt"].forEach(function(key) {
                if (output[key]) {
                  output[key] = AV2._parseDate(output[key]);
                }
              });
              if (output.createdAt && !output.updatedAt) {
                output.updatedAt = output.createdAt;
              }
              return output;
            },
            clone: function clone() {
              return new this.constructor(this.attributes);
            },
            isNew: function isNew() {
              return !this.id;
            },
            change: function change(options) {
              options = options || {};
              var changing = this._changing;
              this._changing = true;
              var self2 = this;
              AV2._objectEach(this._silent, function(attr) {
                self2._pending[attr] = true;
              });
              var changes = _.extend({}, options.changes, this._silent);
              this._silent = {};
              AV2._objectEach(changes, function(unused_value, attr) {
                self2.trigger("change:" + attr, self2, self2.get(attr), options);
              });
              if (changing) {
                return this;
              }
              var deleteChanged = function deleteChanged2(value, attr) {
                if (!self2._pending[attr] && !self2._silent[attr]) {
                  delete self2.changed[attr];
                }
              };
              while (!_.isEmpty(this._pending)) {
                this._pending = {};
                this.trigger("change", this, options);
                AV2._objectEach(this.changed, deleteChanged);
                self2._previousAttributes = _.clone(this.attributes);
              }
              this._changing = false;
              return this;
            },
            previous: function previous(attr) {
              if (!arguments.length || !this._previousAttributes) {
                return null;
              }
              return this._previousAttributes[attr];
            },
            previousAttributes: function previousAttributes() {
              return _.clone(this._previousAttributes);
            },
            isValid: function isValid() {
              try {
                this.validate(this.attributes);
              } catch (error) {
                return false;
              }
              return true;
            },
            validate: function validate(attrs) {
              if (_.has(attrs, "ACL") && !(attrs.ACL instanceof AV2.ACL)) {
                throw new AVError(AVError.OTHER_CAUSE, "ACL must be a AV.ACL.");
              }
            },
            _validate: function _validate(attrs, options) {
              if (options.silent || !this.validate) {
                return;
              }
              attrs = _.extend({}, this.attributes, attrs);
              this.validate(attrs);
            },
            getACL: function getACL() {
              return this.get("ACL");
            },
            setACL: function setACL(acl, options) {
              return this.set("ACL", acl, options);
            },
            disableBeforeHook: function disableBeforeHook() {
              this.ignoreHook("beforeSave");
              this.ignoreHook("beforeUpdate");
              this.ignoreHook("beforeDelete");
            },
            disableAfterHook: function disableAfterHook() {
              this.ignoreHook("afterSave");
              this.ignoreHook("afterUpdate");
              this.ignoreHook("afterDelete");
            },
            ignoreHook: function ignoreHook(hookName) {
              if (!_.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], hookName)) {
                throw new Error("Unsupported hookName: " + hookName);
              }
              if (!AV2.hookKey) {
                throw new Error("ignoreHook required hookKey");
              }
              if (!this._flags.__ignore_hooks) {
                this._flags.__ignore_hooks = [];
              }
              this._flags.__ignore_hooks.push(hookName);
            }
          });
          AV2.Object.createWithoutData = function(klass, id, hasData) {
            var _klass = void 0;
            if (_.isString(klass)) {
              _klass = AV2.Object._getSubclass(klass);
            } else if (klass.prototype && klass.prototype instanceof AV2.Object) {
              _klass = klass;
            } else {
              throw new Error("class must be a string or a subclass of AV.Object.");
            }
            if (!id) {
              throw new TypeError("The objectId must be provided");
            }
            var object = new _klass();
            object.id = id;
            object._hasData = hasData;
            return object;
          };
          AV2.Object.destroyAll = function(objects) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!objects || objects.length === 0) {
              return _promise2.default.resolve();
            }
            var objectsByClassNameAndFlags = _.groupBy(objects, function(object) {
              return (0, _stringify2.default)({
                className: object.className,
                flags: object._flags
              });
            });
            var body = {
              requests: _.map(objectsByClassNameAndFlags, function(objects2) {
                var ids = _.map(objects2, "id").join(",");
                return {
                  method: "DELETE",
                  path: "/1.1/classes/" + objects2[0].className + "/" + ids,
                  body: objects2[0]._flags
                };
              })
            };
            return _request("batch", null, null, "POST", body, options).then(function(response) {
              var firstError = _.find(response, function(result) {
                return !result.success;
              });
              if (firstError)
                throw new AVError(firstError.error.code, firstError.error.error);
              return void 0;
            });
          };
          AV2.Object._getSubclass = function(className) {
            if (!_.isString(className)) {
              throw new Error("AV.Object._getSubclass requires a string argument.");
            }
            var ObjectClass = AV2.Object._classMap[className];
            if (!ObjectClass) {
              ObjectClass = AV2.Object.extend(className);
              AV2.Object._classMap[className] = ObjectClass;
            }
            return ObjectClass;
          };
          AV2.Object._create = function(className, attributes, options) {
            var ObjectClass = AV2.Object._getSubclass(className);
            return new ObjectClass(attributes, options);
          };
          AV2.Object._classMap = {};
          AV2.Object._extend = AV2._extend;
          AV2.Object["new"] = function(attributes, options) {
            return new AV2.Object(attributes, options);
          };
          AV2.Object.extend = function(className, protoProps, classProps) {
            if (!_.isString(className)) {
              if (className && _.has(className, "className")) {
                return AV2.Object.extend(className.className, className, protoProps);
              } else {
                throw new Error("AV.Object.extend's first argument should be the className.");
              }
            }
            if (className === "User") {
              className = "_User";
            }
            var NewClassObject = null;
            if (_.has(AV2.Object._classMap, className)) {
              var OldClassObject = AV2.Object._classMap[className];
              if (protoProps || classProps) {
                NewClassObject = OldClassObject._extend(protoProps, classProps);
              } else {
                return OldClassObject;
              }
            } else {
              protoProps = protoProps || {};
              protoProps._className = className;
              NewClassObject = this._extend(protoProps, classProps);
            }
            NewClassObject.extend = function(arg0) {
              if (_.isString(arg0) || arg0 && _.has(arg0, "className")) {
                return AV2.Object.extend.apply(NewClassObject, arguments);
              }
              var newArguments = [className].concat(_.toArray(arguments));
              return AV2.Object.extend.apply(NewClassObject, newArguments);
            };
            Object.defineProperty(NewClassObject, "query", (0, _getOwnPropertyDescriptor2.default)(AV2.Object, "query"));
            NewClassObject["new"] = function(attributes, options) {
              return new NewClassObject(attributes, options);
            };
            AV2.Object._classMap[className] = NewClassObject;
            return NewClassObject;
          };
          Object.defineProperty(AV2.Object.prototype, "className", {
            get: function get() {
              var className = this._className || this.constructor._LCClassName || this.constructor.name;
              if (className === "User") {
                return "_User";
              }
              return className;
            }
          });
          AV2.Object.register = function(klass, name) {
            if (!(klass.prototype instanceof AV2.Object)) {
              throw new Error("registered class is not a subclass of AV.Object");
            }
            var className = name || klass.name;
            if (!className.length) {
              throw new Error("registered class must be named");
            }
            if (name) {
              klass._LCClassName = name;
            }
            AV2.Object._classMap[className] = klass;
          };
          Object.defineProperty(AV2.Object, "query", {
            get: function get() {
              return new AV2.Query(this.prototype.className);
            }
          });
          AV2.Object._findUnsavedChildren = function(objects, children, files) {
            AV2._traverse(objects, function(object) {
              if (object instanceof AV2.Object) {
                if (object.dirty()) {
                  children.push(object);
                }
                return;
              }
              if (object instanceof AV2.File) {
                if (!object.id) {
                  files.push(object);
                }
                return;
              }
            });
          };
          AV2.Object._canBeSerializedAsValue = function(object) {
            var canBeSerializedAsValue = true;
            if (object instanceof AV2.Object || object instanceof AV2.File) {
              canBeSerializedAsValue = !!object.id;
            } else if (_.isArray(object)) {
              AV2._arrayEach(object, function(child) {
                if (!AV2.Object._canBeSerializedAsValue(child)) {
                  canBeSerializedAsValue = false;
                }
              });
            } else if (_.isObject(object)) {
              AV2._objectEach(object, function(child) {
                if (!AV2.Object._canBeSerializedAsValue(child)) {
                  canBeSerializedAsValue = false;
                }
              });
            }
            return canBeSerializedAsValue;
          };
          AV2.Object._deepSaveAsync = function(object, model, options) {
            var unsavedChildren = [];
            var unsavedFiles = [];
            AV2.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);
            var promise = _promise2.default.resolve();
            _.each(unsavedFiles, function(file) {
              promise = promise.then(function() {
                return file.save();
              });
            });
            var objects = _.uniq(unsavedChildren);
            var remaining = _.uniq(objects);
            return promise.then(function() {
              return continueWhile(function() {
                return remaining.length > 0;
              }, function() {
                var batch = [];
                var newRemaining = [];
                AV2._arrayEach(remaining, function(object2) {
                  if (object2._canBeSerialized()) {
                    batch.push(object2);
                  } else {
                    newRemaining.push(object2);
                  }
                });
                remaining = newRemaining;
                if (batch.length === 0) {
                  return _promise2.default.reject(new AVError(AVError.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                }
                var readyToStart = _promise2.default.resolve(_.map(batch, function(object2) {
                  return object2._allPreviousSaves || _promise2.default.resolve();
                }));
                var bathSavePromise = readyToStart.then(function() {
                  return _request("batch", null, null, "POST", {
                    requests: _.map(batch, function(object2) {
                      var method = object2.id ? "PUT" : "POST";
                      var json = object2._getSaveJSON();
                      _.extend(json, object2._flags);
                      var route = "classes";
                      var className = object2.className;
                      var path = "/" + route + "/" + className;
                      if (object2.className === "_User" && !object2.id) {
                        path = "/users";
                      }
                      var path = "/1.1" + path;
                      if (object2.id) {
                        path = path + "/" + object2.id;
                      }
                      object2._startSave();
                      return {
                        method,
                        path,
                        body: json,
                        params: options && options.fetchWhenSave ? { fetchWhenSave: true } : void 0
                      };
                    })
                  }, options).then(function(response) {
                    var results = _.map(batch, function(object2, i2) {
                      if (response[i2].success) {
                        object2._finishSave(object2.parse(response[i2].success));
                        return object2;
                      }
                      object2._cancelSave();
                      return new AVError(response[i2].error.code, response[i2].error.error);
                    });
                    return handleBatchResults(results);
                  });
                });
                AV2._arrayEach(batch, function(object2) {
                  object2._allPreviousSaves = bathSavePromise;
                });
                return bathSavePromise;
              });
            }).then(function() {
              return object;
            });
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(318), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(319);
        var $Object = __webpack_require__(2).Object;
        module2.exports = function getOwnPropertyDescriptor(it, key) {
          return $Object.getOwnPropertyDescriptor(it, key);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__(25);
        var $getOwnPropertyDescriptor = __webpack_require__(94).f;
        __webpack_require__(89)("getOwnPropertyDescriptor", function() {
          return function getOwnPropertyDescriptor(it, key) {
            return $getOwnPropertyDescriptor(toIObject(it), key);
          };
        });
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _isIterable2 = __webpack_require__(169);
        var _isIterable3 = _interopRequireDefault(_isIterable2);
        var _getIterator2 = __webpack_require__(167);
        var _getIterator3 = _interopRequireDefault(_getIterator2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function() {
          function sliceIterator(arr, i2) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i2 && _arr.length === i2)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i2) {
            if (Array.isArray(arr)) {
              return arr;
            } else if ((0, _isIterable3.default)(Object(arr))) {
              return sliceIterator(arr, i2);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(56);
        __webpack_require__(39);
        module2.exports = __webpack_require__(322);
      },
      function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__(71);
        var ITERATOR = __webpack_require__(7)("iterator");
        var Iterators = __webpack_require__(32);
        module2.exports = __webpack_require__(2).isIterable = function(it) {
          var O = Object(it);
          return O[ITERATOR] !== void 0 || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        var AVError = __webpack_require__(29);
        module2.exports = function(AV2) {
          AV2.Role = AV2.Object.extend("_Role", {
            constructor: function constructor(name, acl) {
              if (_.isString(name)) {
                AV2.Object.prototype.constructor.call(this, null, null);
                this.setName(name);
              } else {
                AV2.Object.prototype.constructor.call(this, name, acl);
              }
              if (acl) {
                if (!(acl instanceof AV2.ACL)) {
                  throw new TypeError("acl must be an instance of AV.ACL");
                } else {
                  this.setACL(acl);
                }
              }
            },
            getName: function getName() {
              return this.get("name");
            },
            setName: function setName(name, options) {
              return this.set("name", name, options);
            },
            getUsers: function getUsers() {
              return this.relation("users");
            },
            getRoles: function getRoles() {
              return this.relation("roles");
            },
            validate: function validate(attrs, options) {
              if ("name" in attrs && attrs.name !== this.getName()) {
                var newName = attrs.name;
                if (this.id && this.id !== attrs.objectId) {
                  return new AVError(AVError.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                }
                if (!_.isString(newName)) {
                  return new AVError(AVError.OTHER_CAUSE, "A role's name must be a String.");
                }
                if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
                  return new AVError(AVError.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
                }
              }
              if (AV2.Object.prototype.validate) {
                return AV2.Object.prototype.validate.call(this, attrs, options);
              }
              return false;
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        var _defineProperty2 = __webpack_require__(325);
        var _defineProperty3 = _interopRequireDefault(_defineProperty2);
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var uuid = __webpack_require__(159);
        var AVError = __webpack_require__(29);
        var _require = __webpack_require__(12), AVRequest = _require._request, request2 = _require.request;
        var _require2 = __webpack_require__(38), getAdapter = _require2.getAdapter;
        var PLATFORM_ANONYMOUS = "anonymous";
        var PLATFORM_QQAPP = "lc_qqapp";
        var mergeUnionDataIntoAuthData = function mergeUnionDataIntoAuthData2() {
          var defaultUnionIdPlatform = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "weixin";
          return function(authData, unionId) {
            var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$unionIdPlatform = _ref.unionIdPlatform, unionIdPlatform = _ref$unionIdPlatform === void 0 ? defaultUnionIdPlatform : _ref$unionIdPlatform, _ref$asMainAccount = _ref.asMainAccount, asMainAccount = _ref$asMainAccount === void 0 ? false : _ref$asMainAccount;
            if (typeof unionId !== "string")
              throw new AVError(AVError.OTHER_CAUSE, "unionId is not a string");
            if (typeof unionIdPlatform !== "string")
              throw new AVError(AVError.OTHER_CAUSE, "unionIdPlatform is not a string");
            return _.extend({}, authData, {
              platform: unionIdPlatform,
              unionid: unionId,
              main_account: Boolean(asMainAccount)
            });
          };
        };
        module2.exports = function(AV2) {
          AV2.User = AV2.Object.extend("_User", {
            _isCurrentUser: false,
            _mergeMagicFields: function _mergeMagicFields(attrs) {
              if (attrs.sessionToken) {
                this._sessionToken = attrs.sessionToken;
                delete attrs.sessionToken;
              }
              return AV2.User.__super__._mergeMagicFields.call(this, attrs);
            },
            _cleanupAuthData: function _cleanupAuthData() {
              if (!this.isCurrent()) {
                return;
              }
              var authData = this.get("authData");
              if (!authData) {
                return;
              }
              AV2._objectEach(this.get("authData"), function(value, key) {
                if (!authData[key]) {
                  delete authData[key];
                }
              });
            },
            _synchronizeAllAuthData: function _synchronizeAllAuthData() {
              var authData = this.get("authData");
              if (!authData) {
                return;
              }
              var self2 = this;
              AV2._objectEach(this.get("authData"), function(value, key) {
                self2._synchronizeAuthData(key);
              });
            },
            _synchronizeAuthData: function _synchronizeAuthData(provider) {
              if (!this.isCurrent()) {
                return;
              }
              var authType;
              if (_.isString(provider)) {
                authType = provider;
                provider = AV2.User._authProviders[authType];
              } else {
                authType = provider.getAuthType();
              }
              var authData = this.get("authData");
              if (!authData || !provider) {
                return;
              }
              var success = provider.restoreAuthentication(authData[authType]);
              if (!success) {
                this.dissociateAuthData(provider);
              }
            },
            _handleSaveResult: function _handleSaveResult(makeCurrent) {
              if (makeCurrent && !AV2._config.disableCurrentUser) {
                this._isCurrentUser = true;
              }
              this._cleanupAuthData();
              this._synchronizeAllAuthData();
              delete this._serverData.password;
              this._rebuildEstimatedDataForKey("password");
              this._refreshCache();
              if ((makeCurrent || this.isCurrent()) && !AV2._config.disableCurrentUser) {
                return _promise2.default.resolve(AV2.User._saveCurrentUser(this));
              } else {
                return _promise2.default.resolve();
              }
            },
            _linkWith: function _linkWith(provider, data2) {
              var _this = this;
              var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$failOnNotExist = _ref2.failOnNotExist, failOnNotExist = _ref2$failOnNotExist === void 0 ? false : _ref2$failOnNotExist;
              var authType;
              if (_.isString(provider)) {
                authType = provider;
                provider = AV2.User._authProviders[provider];
              } else {
                authType = provider.getAuthType();
              }
              if (data2) {
                return this.save({ authData: (0, _defineProperty3.default)({}, authType, data2) }, {
                  fetchWhenSave: !!this.get("authData"),
                  _failOnNotExist: failOnNotExist
                }).then(function(model) {
                  return model._handleSaveResult(true).then(function() {
                    return model;
                  });
                });
              } else {
                return provider.authenticate().then(function(result) {
                  return _this._linkWith(provider, result);
                });
              }
            },
            associateWithAuthData: function associateWithAuthData(authData, platform) {
              return this._linkWith(platform, authData);
            },
            associateWithAuthDataAndUnionId: function associateWithAuthDataAndUnionId(authData, platform, unionId, unionOptions) {
              return this._linkWith(platform, mergeUnionDataIntoAuthData()(authData, unionId, unionOptions));
            },
            associateWithMiniApp: function associateWithMiniApp(authInfo, option) {
              var _this2 = this;
              if (authInfo === void 0) {
                var getAuthInfo = getAdapter("getAuthInfo");
                return getAuthInfo().then(function(authInfo2) {
                  return _this2._linkWith(authInfo2.provider, authInfo2.authData, option);
                });
              }
              return this._linkWith(authInfo.provider, authInfo.authData, option);
            },
            associateWithQQApp: function associateWithQQApp() {
              var _this3 = this;
              var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$preferUnionId = _ref3.preferUnionId, preferUnionId = _ref3$preferUnionId === void 0 ? false : _ref3$preferUnionId, _ref3$unionIdPlatform = _ref3.unionIdPlatform, unionIdPlatform = _ref3$unionIdPlatform === void 0 ? "qq" : _ref3$unionIdPlatform, _ref3$asMainAccount = _ref3.asMainAccount, asMainAccount = _ref3$asMainAccount === void 0 ? true : _ref3$asMainAccount;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                authInfo.provider = PLATFORM_QQAPP;
                return _this3.associateWithMiniApp(authInfo);
              });
            },
            associateWithWeapp: function associateWithWeapp() {
              var _this4 = this;
              var _ref4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref4$preferUnionId = _ref4.preferUnionId, preferUnionId = _ref4$preferUnionId === void 0 ? false : _ref4$preferUnionId, _ref4$unionIdPlatform = _ref4.unionIdPlatform, unionIdPlatform = _ref4$unionIdPlatform === void 0 ? "weixin" : _ref4$unionIdPlatform, _ref4$asMainAccount = _ref4.asMainAccount, asMainAccount = _ref4$asMainAccount === void 0 ? true : _ref4$asMainAccount;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                return _this4.associateWithMiniApp(authInfo);
              });
            },
            linkWithWeapp: function linkWithWeapp(options) {
              console.warn("DEPRECATED: User#linkWithWeapp \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 User#associateWithWeapp \u4EE3\u66FF");
              return this.associateWithWeapp(options);
            },
            associateWithQQAppWithUnionId: function associateWithQQAppWithUnionId(unionId) {
              var _this5 = this;
              var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref5$unionIdPlatform = _ref5.unionIdPlatform, unionIdPlatform = _ref5$unionIdPlatform === void 0 ? "qq" : _ref5$unionIdPlatform, _ref5$asMainAccount = _ref5.asMainAccount, asMainAccount = _ref5$asMainAccount === void 0 ? false : _ref5$asMainAccount;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                authInfo.provider = PLATFORM_QQAPP;
                return _this5.associateWithMiniApp(authInfo);
              });
            },
            associateWithWeappWithUnionId: function associateWithWeappWithUnionId(unionId) {
              var _this6 = this;
              var _ref6 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref6$unionIdPlatform = _ref6.unionIdPlatform, unionIdPlatform = _ref6$unionIdPlatform === void 0 ? "weixin" : _ref6$unionIdPlatform, _ref6$asMainAccount = _ref6.asMainAccount, asMainAccount = _ref6$asMainAccount === void 0 ? false : _ref6$asMainAccount;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                return _this6.associateWithMiniApp(authInfo);
              });
            },
            dissociateAuthData: function dissociateAuthData(provider) {
              this.unset("authData." + provider);
              return this.save().then(function(model) {
                return model._handleSaveResult(true).then(function() {
                  return model;
                });
              });
            },
            _unlinkFrom: function _unlinkFrom(provider) {
              console.warn("DEPRECATED: User#_unlinkFrom \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 User#dissociateAuthData \u4EE3\u66FF");
              return this.dissociateAuthData(provider);
            },
            _isLinked: function _isLinked(provider) {
              var authType;
              if (_.isString(provider)) {
                authType = provider;
              } else {
                authType = provider.getAuthType();
              }
              var authData = this.get("authData") || {};
              return !!authData[authType];
            },
            isAnonymous: function isAnonymous() {
              return this._isLinked(PLATFORM_ANONYMOUS);
            },
            logOut: function logOut() {
              this._logOutWithAll();
              this._isCurrentUser = false;
            },
            _logOutWithAll: function _logOutWithAll() {
              var authData = this.get("authData");
              if (!authData) {
                return;
              }
              var self2 = this;
              AV2._objectEach(this.get("authData"), function(value, key) {
                self2._logOutWith(key);
              });
            },
            _logOutWith: function _logOutWith(provider) {
              if (!this.isCurrent()) {
                return;
              }
              if (_.isString(provider)) {
                provider = AV2.User._authProviders[provider];
              }
              if (provider && provider.deauthenticate) {
                provider.deauthenticate();
              }
            },
            signUp: function signUp(attrs, options) {
              var error;
              var username = attrs && attrs.username || this.get("username");
              if (!username || username === "") {
                error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                throw error;
              }
              var password = attrs && attrs.password || this.get("password");
              if (!password || password === "") {
                error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                throw error;
              }
              return this.save(attrs, options).then(function(model) {
                if (model.isAnonymous()) {
                  model.unset("authData." + PLATFORM_ANONYMOUS);
                  model._opSetQueue = [{}];
                }
                return model._handleSaveResult(true).then(function() {
                  return model;
                });
              });
            },
            signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(attrs) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var error;
              var mobilePhoneNumber = attrs && attrs.mobilePhoneNumber || this.get("mobilePhoneNumber");
              if (!mobilePhoneNumber || mobilePhoneNumber === "") {
                error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                throw error;
              }
              var smsCode = attrs && attrs.smsCode || this.get("smsCode");
              if (!smsCode || smsCode === "") {
                error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                throw error;
              }
              options._makeRequest = function(route, className, id, method, json) {
                return AVRequest("usersByMobilePhone", null, null, "POST", json);
              };
              return this.save(attrs, options).then(function(model) {
                delete model.attributes.smsCode;
                delete model._serverData.smsCode;
                return model._handleSaveResult(true).then(function() {
                  return model;
                });
              });
            },
            loginWithAuthData: function loginWithAuthData(authData, platform, options) {
              return this._linkWith(platform, authData, options);
            },
            loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
              return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
            },
            loginWithWeapp: function loginWithWeapp() {
              var _this7 = this;
              var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref7$preferUnionId = _ref7.preferUnionId, preferUnionId = _ref7$preferUnionId === void 0 ? false : _ref7$preferUnionId, _ref7$unionIdPlatform = _ref7.unionIdPlatform, unionIdPlatform = _ref7$unionIdPlatform === void 0 ? "weixin" : _ref7$unionIdPlatform, _ref7$asMainAccount = _ref7.asMainAccount, asMainAccount = _ref7$asMainAccount === void 0 ? true : _ref7$asMainAccount, _ref7$failOnNotExist = _ref7.failOnNotExist, failOnNotExist = _ref7$failOnNotExist === void 0 ? false : _ref7$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                return _this7.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
              var _this8 = this;
              var _ref8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref8$unionIdPlatform = _ref8.unionIdPlatform, unionIdPlatform = _ref8$unionIdPlatform === void 0 ? "weixin" : _ref8$unionIdPlatform, _ref8$asMainAccount = _ref8.asMainAccount, asMainAccount = _ref8$asMainAccount === void 0 ? false : _ref8$asMainAccount, _ref8$failOnNotExist = _ref8.failOnNotExist, failOnNotExist = _ref8$failOnNotExist === void 0 ? false : _ref8$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                return _this8.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithQQApp: function loginWithQQApp() {
              var _this9 = this;
              var _ref9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref9$preferUnionId = _ref9.preferUnionId, preferUnionId = _ref9$preferUnionId === void 0 ? false : _ref9$preferUnionId, _ref9$unionIdPlatform = _ref9.unionIdPlatform, unionIdPlatform = _ref9$unionIdPlatform === void 0 ? "qq" : _ref9$unionIdPlatform, _ref9$asMainAccount = _ref9.asMainAccount, asMainAccount = _ref9$asMainAccount === void 0 ? true : _ref9$asMainAccount, _ref9$failOnNotExist = _ref9.failOnNotExist, failOnNotExist = _ref9$failOnNotExist === void 0 ? false : _ref9$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                authInfo.provider = PLATFORM_QQAPP;
                return _this9.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
              var _this10 = this;
              var _ref10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref10$unionIdPlatfor = _ref10.unionIdPlatform, unionIdPlatform = _ref10$unionIdPlatfor === void 0 ? "qq" : _ref10$unionIdPlatfor, _ref10$asMainAccount = _ref10.asMainAccount, asMainAccount = _ref10$asMainAccount === void 0 ? false : _ref10$asMainAccount, _ref10$failOnNotExist = _ref10.failOnNotExist, failOnNotExist = _ref10$failOnNotExist === void 0 ? false : _ref10$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                authInfo.provider = PLATFORM_QQAPP;
                return _this10.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
              var _this11 = this;
              if (authInfo === void 0) {
                var getAuthInfo = getAdapter("getAuthInfo");
                return getAuthInfo().then(function(authInfo2) {
                  return _this11.loginWithAuthData(authInfo2.authData, authInfo2.provider, option);
                });
              }
              return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
            },
            logIn: function logIn() {
              var model = this;
              var request3 = AVRequest("login", null, null, "POST", this.toJSON());
              return request3.then(function(resp) {
                var serverAttrs = model.parse(resp);
                model._finishFetch(serverAttrs);
                return model._handleSaveResult(true).then(function() {
                  if (!serverAttrs.smsCode)
                    delete model.attributes["smsCode"];
                  return model;
                });
              });
            },
            save: function save(arg1, arg2, arg3) {
              var attrs, options;
              if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
                attrs = arg1;
                options = arg2;
              } else {
                attrs = {};
                attrs[arg1] = arg2;
                options = arg3;
              }
              options = options || {};
              return AV2.Object.prototype.save.call(this, attrs, options).then(function(model) {
                return model._handleSaveResult(false).then(function() {
                  return model;
                });
              });
            },
            follow: function follow(options, authOptions) {
              if (!this.id) {
                throw new Error("Please signin.");
              }
              var user = void 0;
              var attributes = void 0;
              if (options.user) {
                user = options.user;
                attributes = options.attributes;
              } else {
                user = options;
              }
              var userObjectId = _.isString(user) ? user : user.id;
              if (!userObjectId) {
                throw new Error("Invalid target user.");
              }
              var route = "users/" + this.id + "/friendship/" + userObjectId;
              var request3 = AVRequest(route, null, null, "POST", AV2._encode(attributes), authOptions);
              return request3;
            },
            unfollow: function unfollow(options, authOptions) {
              if (!this.id) {
                throw new Error("Please signin.");
              }
              var user = void 0;
              if (options.user) {
                user = options.user;
              } else {
                user = options;
              }
              var userObjectId = _.isString(user) ? user : user.id;
              if (!userObjectId) {
                throw new Error("Invalid target user.");
              }
              var route = "users/" + this.id + "/friendship/" + userObjectId;
              var request3 = AVRequest(route, null, null, "DELETE", null, authOptions);
              return request3;
            },
            getFollowersAndFollowees: function getFollowersAndFollowees(options, authOptions) {
              if (!this.id) {
                throw new Error("Please signin.");
              }
              return request2({
                method: "GET",
                path: "/users/" + this.id + "/followersAndFollowees",
                query: {
                  skip: options && options.skip,
                  limit: options && options.limit,
                  include: "follower,followee",
                  keys: "follower,followee"
                },
                authOptions
              }).then(function(_ref11) {
                var followers = _ref11.followers, followees = _ref11.followees;
                return {
                  followers: followers.map(function(_ref12) {
                    var follower = _ref12.follower;
                    return AV2._decode(follower);
                  }),
                  followees: followees.map(function(_ref13) {
                    var followee = _ref13.followee;
                    return AV2._decode(followee);
                  })
                };
              });
            },
            followerQuery: function followerQuery() {
              return AV2.User.followerQuery(this.id);
            },
            followeeQuery: function followeeQuery() {
              return AV2.User.followeeQuery(this.id);
            },
            fetch: function fetch(fetchOptions, options) {
              return AV2.Object.prototype.fetch.call(this, fetchOptions, options).then(function(model) {
                return model._handleSaveResult(false).then(function() {
                  return model;
                });
              });
            },
            updatePassword: function updatePassword(oldPassword, newPassword, options) {
              var _this12 = this;
              var route = "users/" + this.id + "/updatePassword";
              var params = {
                old_password: oldPassword,
                new_password: newPassword
              };
              var request3 = AVRequest(route, null, null, "PUT", params, options);
              return request3.then(function(resp) {
                _this12._finishFetch(_this12.parse(resp));
                return _this12._handleSaveResult(true).then(function() {
                  return resp;
                });
              });
            },
            isCurrent: function isCurrent() {
              return this._isCurrentUser;
            },
            getUsername: function getUsername() {
              return this.get("username");
            },
            getMobilePhoneNumber: function getMobilePhoneNumber() {
              return this.get("mobilePhoneNumber");
            },
            setMobilePhoneNumber: function setMobilePhoneNumber(phone, options) {
              return this.set("mobilePhoneNumber", phone, options);
            },
            setUsername: function setUsername(username, options) {
              return this.set("username", username, options);
            },
            setPassword: function setPassword(password, options) {
              return this.set("password", password, options);
            },
            getEmail: function getEmail() {
              return this.get("email");
            },
            setEmail: function setEmail(email, options) {
              return this.set("email", email, options);
            },
            authenticated: function authenticated() {
              console.warn("DEPRECATED: \u5982\u679C\u8981\u5224\u65AD\u5F53\u524D\u7528\u6237\u7684\u767B\u5F55\u72B6\u6001\u662F\u5426\u6709\u6548\uFF0C\u8BF7\u4F7F\u7528 currentUser.isAuthenticated().then()\uFF0C\u5982\u679C\u8981\u5224\u65AD\u8BE5\u7528\u6237\u662F\u5426\u662F\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF0C\u8BF7\u4F7F\u7528 user.id === currentUser.id\u3002");
              return !!this._sessionToken && !AV2._config.disableCurrentUser && AV2.User.current() && AV2.User.current().id === this.id;
            },
            isAuthenticated: function isAuthenticated() {
              var _this13 = this;
              return _promise2.default.resolve().then(function() {
                return !!_this13._sessionToken && AV2.User._fetchUserBySessionToken(_this13._sessionToken).then(function() {
                  return true;
                }, function(error) {
                  if (error.code === 211) {
                    return false;
                  }
                  throw error;
                });
              });
            },
            getSessionToken: function getSessionToken() {
              return this._sessionToken;
            },
            refreshSessionToken: function refreshSessionToken(options) {
              var _this14 = this;
              return AVRequest("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, options).then(function(response) {
                _this14._finishFetch(response);
                return _this14._handleSaveResult(true).then(function() {
                  return _this14;
                });
              });
            },
            getRoles: function getRoles(options) {
              return AV2.Relation.reverseQuery("_Role", "users", this).find(options);
            }
          }, {
            _currentUser: null,
            _currentUserMatchesDisk: false,
            _CURRENT_USER_KEY: "currentUser",
            _authProviders: {},
            signUp: function signUp(username, password, attrs, options) {
              attrs = attrs || {};
              attrs.username = username;
              attrs.password = password;
              var user = AV2.Object._create("_User");
              return user.signUp(attrs, options);
            },
            logIn: function logIn(username, password) {
              var user = AV2.Object._create("_User");
              user._finishFetch({ username, password });
              return user.logIn();
            },
            become: function become(sessionToken) {
              return this._fetchUserBySessionToken(sessionToken).then(function(user) {
                return user._handleSaveResult(true).then(function() {
                  return user;
                });
              });
            },
            _fetchUserBySessionToken: function _fetchUserBySessionToken(sessionToken) {
              if (sessionToken === void 0) {
                return _promise2.default.reject(new Error("The sessionToken cannot be undefined"));
              }
              var user = AV2.Object._create("_User");
              return request2({
                method: "GET",
                path: "/users/me",
                authOptions: {
                  sessionToken
                }
              }).then(function(resp) {
                var serverAttrs = user.parse(resp);
                user._finishFetch(serverAttrs);
                return user;
              });
            },
            logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(mobilePhone, smsCode) {
              var user = AV2.Object._create("_User");
              user._finishFetch({ mobilePhoneNumber: mobilePhone, smsCode });
              return user.logIn();
            },
            signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(mobilePhoneNumber, smsCode, attrs, options) {
              attrs = attrs || {};
              attrs.mobilePhoneNumber = mobilePhoneNumber;
              attrs.smsCode = smsCode;
              var user = AV2.Object._create("_User");
              return user.signUpOrlogInWithMobilePhone(attrs, options);
            },
            logInWithMobilePhone: function logInWithMobilePhone(mobilePhone, password) {
              var user = AV2.Object._create("_User");
              user._finishFetch({
                mobilePhoneNumber: mobilePhone,
                password
              });
              return user.logIn();
            },
            loginWithEmail: function loginWithEmail(email, password) {
              var user = AV2.Object._create("_User");
              user._finishFetch({
                email,
                password
              });
              return user.logIn();
            },
            loginWithAuthData: function loginWithAuthData(authData, platform, options) {
              return AV2.User._logInWith(platform, authData, options);
            },
            signUpOrlogInWithAuthData: function signUpOrlogInWithAuthData() {
              console.warn("DEPRECATED: User.signUpOrlogInWithAuthData \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 User#loginWithAuthData \u4EE3\u66FF");
              return this.loginWithAuthData.apply(this, arguments);
            },
            loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
              return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
            },
            signUpOrlogInWithAuthDataAndUnionId: function signUpOrlogInWithAuthDataAndUnionId() {
              console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 User#loginWithAuthDataAndUnionId \u4EE3\u66FF");
              return this.loginWithAuthDataAndUnionId.apply(this, arguments);
            },
            mergeUnionId: function mergeUnionId(authInfo, unionId) {
              var _ref14 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref14$asMainAccount = _ref14.asMainAccount, asMainAccount = _ref14$asMainAccount === void 0 ? false : _ref14$asMainAccount;
              authInfo = JSON.parse((0, _stringify2.default)(authInfo));
              var _authInfo = authInfo, authData = _authInfo.authData, platform = _authInfo.platform;
              authData.platform = platform;
              authData.main_account = asMainAccount;
              authData.unionid = unionId;
              return authInfo;
            },
            loginWithWeapp: function loginWithWeapp() {
              var _this15 = this;
              var _ref15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref15$preferUnionId = _ref15.preferUnionId, preferUnionId = _ref15$preferUnionId === void 0 ? false : _ref15$preferUnionId, _ref15$unionIdPlatfor = _ref15.unionIdPlatform, unionIdPlatform = _ref15$unionIdPlatfor === void 0 ? "weixin" : _ref15$unionIdPlatfor, _ref15$asMainAccount = _ref15.asMainAccount, asMainAccount = _ref15$asMainAccount === void 0 ? true : _ref15$asMainAccount, _ref15$failOnNotExist = _ref15.failOnNotExist, failOnNotExist = _ref15$failOnNotExist === void 0 ? false : _ref15$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                return _this15.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
              var _this16 = this;
              var _ref16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref16$unionIdPlatfor = _ref16.unionIdPlatform, unionIdPlatform = _ref16$unionIdPlatfor === void 0 ? "weixin" : _ref16$unionIdPlatfor, _ref16$asMainAccount = _ref16.asMainAccount, asMainAccount = _ref16$asMainAccount === void 0 ? false : _ref16$asMainAccount, _ref16$failOnNotExist = _ref16.failOnNotExist, failOnNotExist = _ref16$failOnNotExist === void 0 ? false : _ref16$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                return _this16.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithQQApp: function loginWithQQApp() {
              var _this17 = this;
              var _ref17 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref17$preferUnionId = _ref17.preferUnionId, preferUnionId = _ref17$preferUnionId === void 0 ? false : _ref17$preferUnionId, _ref17$unionIdPlatfor = _ref17.unionIdPlatform, unionIdPlatform = _ref17$unionIdPlatfor === void 0 ? "qq" : _ref17$unionIdPlatfor, _ref17$asMainAccount = _ref17.asMainAccount, asMainAccount = _ref17$asMainAccount === void 0 ? true : _ref17$asMainAccount, _ref17$failOnNotExist = _ref17.failOnNotExist, failOnNotExist = _ref17$failOnNotExist === void 0 ? false : _ref17$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({
                preferUnionId,
                asMainAccount,
                platform: unionIdPlatform
              }).then(function(authInfo) {
                authInfo.provider = PLATFORM_QQAPP;
                return _this17.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
              var _this18 = this;
              var _ref18 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref18$unionIdPlatfor = _ref18.unionIdPlatform, unionIdPlatform = _ref18$unionIdPlatfor === void 0 ? "qq" : _ref18$unionIdPlatfor, _ref18$asMainAccount = _ref18.asMainAccount, asMainAccount = _ref18$asMainAccount === void 0 ? false : _ref18$asMainAccount, _ref18$failOnNotExist = _ref18.failOnNotExist, failOnNotExist = _ref18$failOnNotExist === void 0 ? false : _ref18$failOnNotExist;
              var getAuthInfo = getAdapter("getAuthInfo");
              return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                authInfo.provider = PLATFORM_QQAPP;
                return _this18.loginWithMiniApp(authInfo, { failOnNotExist });
              });
            },
            loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
              var _this19 = this;
              if (authInfo === void 0) {
                var getAuthInfo = getAdapter("getAuthInfo");
                return getAuthInfo().then(function(authInfo2) {
                  return _this19.loginWithAuthData(authInfo2.authData, authInfo2.provider, option);
                });
              }
              return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
            },
            _genId: function _genId() {
              return uuid();
            },
            loginAnonymously: function loginAnonymously() {
              return this.loginWithAuthData({
                id: AV2.User._genId()
              }, "anonymous");
            },
            associateWithAuthData: function associateWithAuthData(userObj, platform, authData) {
              console.warn("DEPRECATED: User.associateWithAuthData \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 User#associateWithAuthData \u4EE3\u66FF");
              return userObj._linkWith(platform, authData);
            },
            logOut: function logOut() {
              if (AV2._config.disableCurrentUser) {
                console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                return _promise2.default.resolve(null);
              }
              if (AV2.User._currentUser !== null) {
                AV2.User._currentUser._logOutWithAll();
                AV2.User._currentUser._isCurrentUser = false;
              }
              AV2.User._currentUserMatchesDisk = true;
              AV2.User._currentUser = null;
              return AV2.localStorage.removeItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY)).then(function() {
                return AV2._refreshSubscriptionId();
              });
            },
            followerQuery: function followerQuery(userObjectId) {
              if (!userObjectId || !_.isString(userObjectId)) {
                throw new Error("Invalid user object id.");
              }
              var query = new AV2.FriendShipQuery("_Follower");
              query._friendshipTag = "follower";
              query.equalTo("user", AV2.Object.createWithoutData("_User", userObjectId));
              return query;
            },
            followeeQuery: function followeeQuery(userObjectId) {
              if (!userObjectId || !_.isString(userObjectId)) {
                throw new Error("Invalid user object id.");
              }
              var query = new AV2.FriendShipQuery("_Followee");
              query._friendshipTag = "followee";
              query.equalTo("user", AV2.Object.createWithoutData("_User", userObjectId));
              return query;
            },
            requestPasswordReset: function requestPasswordReset(email) {
              var json = { email };
              var request3 = AVRequest("requestPasswordReset", null, null, "POST", json);
              return request3;
            },
            requestEmailVerify: function requestEmailVerify(email) {
              var json = { email };
              var request3 = AVRequest("requestEmailVerify", null, null, "POST", json);
              return request3;
            },
            requestMobilePhoneVerify: function requestMobilePhoneVerify(mobilePhoneNumber) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var data2 = {
                mobilePhoneNumber
              };
              if (options.validateToken) {
                data2.validate_token = options.validateToken;
              }
              var request3 = AVRequest("requestMobilePhoneVerify", null, null, "POST", data2, options);
              return request3;
            },
            requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(mobilePhoneNumber) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var data2 = {
                mobilePhoneNumber
              };
              if (options.validateToken) {
                data2.validate_token = options.validateToken;
              }
              var request3 = AVRequest("requestPasswordResetBySmsCode", null, null, "POST", data2, options);
              return request3;
            },
            requestChangePhoneNumber: function requestChangePhoneNumber(mobilePhoneNumber, ttl, options) {
              var data2 = { mobilePhoneNumber };
              if (ttl) {
                data2.ttl = options.ttl;
              }
              if (options && options.validateToken) {
                data2.validate_token = options.validateToken;
              }
              return AVRequest("requestChangePhoneNumber", null, null, "POST", data2, options);
            },
            changePhoneNumber: function changePhoneNumber(mobilePhoneNumber, code) {
              var data2 = { mobilePhoneNumber, code };
              return AVRequest("changePhoneNumber", null, null, "POST", data2);
            },
            resetPasswordBySmsCode: function resetPasswordBySmsCode(code, password) {
              var json = { password };
              var request3 = AVRequest("resetPasswordBySmsCode", null, code, "PUT", json);
              return request3;
            },
            verifyMobilePhone: function verifyMobilePhone(code) {
              var request3 = AVRequest("verifyMobilePhone", null, code, "POST", null);
              return request3;
            },
            requestLoginSmsCode: function requestLoginSmsCode(mobilePhoneNumber) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var data2 = {
                mobilePhoneNumber
              };
              if (options.validateToken) {
                data2.validate_token = options.validateToken;
              }
              var request3 = AVRequest("requestLoginSmsCode", null, null, "POST", data2, options);
              return request3;
            },
            currentAsync: function currentAsync() {
              if (AV2._config.disableCurrentUser) {
                console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                return _promise2.default.resolve(null);
              }
              if (AV2.User._currentUser) {
                return _promise2.default.resolve(AV2.User._currentUser);
              }
              if (AV2.User._currentUserMatchesDisk) {
                return _promise2.default.resolve(AV2.User._currentUser);
              }
              return AV2.localStorage.getItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY)).then(function(userData) {
                if (!userData) {
                  return null;
                }
                AV2.User._currentUserMatchesDisk = true;
                AV2.User._currentUser = AV2.Object._create("_User");
                AV2.User._currentUser._isCurrentUser = true;
                var json = JSON.parse(userData);
                AV2.User._currentUser.id = json._id;
                delete json._id;
                AV2.User._currentUser._sessionToken = json._sessionToken;
                delete json._sessionToken;
                AV2.User._currentUser._finishFetch(json);
                AV2.User._currentUser._synchronizeAllAuthData();
                AV2.User._currentUser._refreshCache();
                AV2.User._currentUser._opSetQueue = [{}];
                return AV2.User._currentUser;
              });
            },
            current: function current() {
              if (AV2._config.disableCurrentUser) {
                console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                return null;
              }
              if (AV2.localStorage.async) {
                var error = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                error.code = "SYNC_API_NOT_AVAILABLE";
                throw error;
              }
              if (AV2.User._currentUser) {
                return AV2.User._currentUser;
              }
              if (AV2.User._currentUserMatchesDisk) {
                return AV2.User._currentUser;
              }
              AV2.User._currentUserMatchesDisk = true;
              var userData = AV2.localStorage.getItem(AV2._getAVPath(AV2.User._CURRENT_USER_KEY));
              if (!userData) {
                return null;
              }
              AV2.User._currentUser = AV2.Object._create("_User");
              AV2.User._currentUser._isCurrentUser = true;
              var json = JSON.parse(userData);
              AV2.User._currentUser.id = json._id;
              delete json._id;
              AV2.User._currentUser._sessionToken = json._sessionToken;
              delete json._sessionToken;
              AV2.User._currentUser._finishFetch(json);
              AV2.User._currentUser._synchronizeAllAuthData();
              AV2.User._currentUser._refreshCache();
              AV2.User._currentUser._opSetQueue = [{}];
              return AV2.User._currentUser;
            },
            _saveCurrentUser: function _saveCurrentUser(user) {
              var promise;
              if (AV2.User._currentUser !== user) {
                promise = AV2.User.logOut();
              } else {
                promise = _promise2.default.resolve();
              }
              return promise.then(function() {
                user._isCurrentUser = true;
                AV2.User._currentUser = user;
                var json = user._toFullJSON();
                json._id = user.id;
                json._sessionToken = user._sessionToken;
                return AV2.localStorage.setItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY), (0, _stringify2.default)(json)).then(function() {
                  AV2.User._currentUserMatchesDisk = true;
                  return AV2._refreshSubscriptionId();
                });
              });
            },
            _registerAuthenticationProvider: function _registerAuthenticationProvider(provider) {
              AV2.User._authProviders[provider.getAuthType()] = provider;
              if (!AV2._config.disableCurrentUser && AV2.User.current()) {
                AV2.User.current()._synchronizeAuthData(provider.getAuthType());
              }
            },
            _logInWith: function _logInWith(provider, authData, options) {
              var user = AV2.Object._create("_User");
              return user._linkWith(provider, authData, options);
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        var _defineProperty = __webpack_require__(90);
        var _defineProperty2 = _interopRequireDefault(_defineProperty);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(obj, key, value) {
          if (key in obj) {
            (0, _defineProperty2.default)(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var debug = __webpack_require__(37)("leancloud:query");
        var AVError = __webpack_require__(29);
        var _require = __webpack_require__(12), _request = _require._request, request2 = _require.request;
        var _require2 = __webpack_require__(15), ensureArray = _require2.ensureArray, transformFetchOptions = _require2.transformFetchOptions, continueWhile = _require2.continueWhile;
        var requires = function requires2(value, message) {
          if (value === void 0) {
            throw new Error(message);
          }
        };
        module2.exports = function(AV2) {
          AV2.Query = function(objectClass) {
            if (_.isString(objectClass)) {
              objectClass = AV2.Object._getSubclass(objectClass);
            }
            this.objectClass = objectClass;
            this.className = objectClass.prototype.className;
            this._where = {};
            this._include = [];
            this._select = [];
            this._limit = -1;
            this._skip = 0;
            this._defaultParams = {};
          };
          AV2.Query.or = function() {
            var queries = _.toArray(arguments);
            var className = null;
            AV2._arrayEach(queries, function(q) {
              if (_.isNull(className)) {
                className = q.className;
              }
              if (className !== q.className) {
                throw new Error("All queries must be for the same class");
              }
            });
            var query = new AV2.Query(className);
            query._orQuery(queries);
            return query;
          };
          AV2.Query.and = function() {
            var queries = _.toArray(arguments);
            var className = null;
            AV2._arrayEach(queries, function(q) {
              if (_.isNull(className)) {
                className = q.className;
              }
              if (className !== q.className) {
                throw new Error("All queries must be for the same class");
              }
            });
            var query = new AV2.Query(className);
            query._andQuery(queries);
            return query;
          };
          AV2.Query.doCloudQuery = function(cql, pvalues, options) {
            var params = { cql };
            if (_.isArray(pvalues)) {
              params.pvalues = pvalues;
            } else {
              options = pvalues;
            }
            var request3 = _request("cloudQuery", null, null, "GET", params, options);
            return request3.then(function(response) {
              var query = new AV2.Query(response.className);
              var results = _.map(response.results, function(json) {
                var obj = query._newObject(response);
                if (obj._finishFetch) {
                  obj._finishFetch(query._processResult(json), true);
                }
                return obj;
              });
              return {
                results,
                count: response.count,
                className: response.className
              };
            });
          };
          AV2.Query.fromJSON = function(_ref) {
            var className = _ref.className, where = _ref.where, include = _ref.include, select = _ref.select, includeACL = _ref.includeACL, limit = _ref.limit, skip = _ref.skip, order = _ref.order;
            if (typeof className !== "string") {
              throw new TypeError("Invalid Query JSON, className must be a String.");
            }
            var query = new AV2.Query(className);
            _.extend(query, {
              _where: where,
              _include: include,
              _select: select,
              _includeACL: includeACL,
              _limit: limit,
              _skip: skip,
              _order: order
            });
            return query;
          };
          AV2.Query._extend = AV2._extend;
          _.extend(AV2.Query.prototype, {
            _processResult: function _processResult(obj) {
              return obj;
            },
            get: function get(objectId, options) {
              if (!_.isString(objectId)) {
                throw new Error("objectId must be a string");
              }
              if (objectId === "") {
                return _promise2.default.reject(new AVError(AVError.OBJECT_NOT_FOUND, "Object not found."));
              }
              var obj = this._newObject();
              obj.id = objectId;
              var queryJSON = this._getParams();
              var fetchOptions = {};
              if (queryJSON.keys)
                fetchOptions.keys = queryJSON.keys;
              if (queryJSON.include)
                fetchOptions.include = queryJSON.include;
              if (queryJSON.includeACL)
                fetchOptions.includeACL = queryJSON.includeACL;
              return _request("classes", this.className, objectId, "GET", transformFetchOptions(fetchOptions), options).then(function(response) {
                if (_.isEmpty(response))
                  throw new AVError(AVError.OBJECT_NOT_FOUND, "Object not found.");
                obj._finishFetch(obj.parse(response), true);
                return obj;
              });
            },
            toJSON: function toJSON() {
              var className = this.className, where = this._where, include = this._include, select = this._select, includeACL = this._includeACL, limit = this._limit, skip = this._skip, order = this._order;
              return {
                className,
                where,
                include,
                select,
                includeACL,
                limit,
                skip,
                order
              };
            },
            _getParams: function _getParams() {
              var params = _.extend({}, this._defaultParams, {
                where: this._where
              });
              if (this._include.length > 0) {
                params.include = this._include.join(",");
              }
              if (this._select.length > 0) {
                params.keys = this._select.join(",");
              }
              if (this._includeACL !== void 0) {
                params.returnACL = this._includeACL;
              }
              if (this._limit >= 0) {
                params.limit = this._limit;
              }
              if (this._skip > 0) {
                params.skip = this._skip;
              }
              if (this._order !== void 0) {
                params.order = this._order;
              }
              return params;
            },
            _newObject: function _newObject(response) {
              var obj;
              if (response && response.className) {
                obj = new AV2.Object(response.className);
              } else {
                obj = new this.objectClass();
              }
              return obj;
            },
            _createRequest: function _createRequest() {
              var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._getParams();
              var options = arguments[1];
              var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "/classes/" + this.className;
              if (encodeURIComponent((0, _stringify2.default)(params)).length > 2e3) {
                var body = {
                  requests: [{
                    method: "GET",
                    path: "/1.1" + path,
                    params
                  }]
                };
                return request2({
                  path: "/batch",
                  method: "POST",
                  data: body,
                  authOptions: options
                }).then(function(response) {
                  var result = response[0];
                  if (result.success) {
                    return result.success;
                  }
                  var error = new Error(result.error.error || "Unknown batch error");
                  error.code = result.error.code;
                  throw error;
                });
              }
              return request2({
                method: "GET",
                path,
                query: params,
                authOptions: options
              });
            },
            _parseResponse: function _parseResponse(response) {
              var _this = this;
              return _.map(response.results, function(json) {
                var obj = _this._newObject(response);
                if (obj._finishFetch) {
                  obj._finishFetch(_this._processResult(json), true);
                }
                return obj;
              });
            },
            find: function find(options) {
              var request3 = this._createRequest(void 0, options);
              return request3.then(this._parseResponse.bind(this));
            },
            findAndCount: function findAndCount(options) {
              var _this2 = this;
              var params = this._getParams();
              params.count = 1;
              var request3 = this._createRequest(params, options);
              return request3.then(function(response) {
                return [_this2._parseResponse(response), response.count];
              });
            },
            scan: function scan() {
              var _this3 = this;
              var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, orderedBy = _ref2.orderedBy, batchSize = _ref2.batchSize;
              var authOptions = arguments[1];
              var condition = this._getParams();
              debug("scan %O", condition);
              if (condition.order) {
                console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.");
                delete condition.order;
              }
              if (condition.skip) {
                console.warn("The skip option of the query is ignored for Query#scan.");
                delete condition.skip;
              }
              if (condition.limit) {
                console.warn("The limit option of the query is ignored for Query#scan.");
                delete condition.limit;
              }
              if (orderedBy)
                condition.scan_key = orderedBy;
              if (batchSize)
                condition.limit = batchSize;
              var promise = _promise2.default.resolve([]);
              var cursor = void 0;
              var done = false;
              return {
                next: function next() {
                  promise = promise.then(function(remainResults) {
                    if (done)
                      return [];
                    if (remainResults.length > 1)
                      return remainResults;
                    if (!cursor && remainResults.length !== 0) {
                      done = true;
                      return remainResults;
                    }
                    return _request("scan/classes", _this3.className, null, "GET", cursor ? _.extend({}, condition, { cursor }) : condition, authOptions).then(function(response) {
                      cursor = response.cursor;
                      return _this3._parseResponse(response);
                    }).then(function(results) {
                      if (!results.length)
                        done = true;
                      return remainResults.concat(results);
                    });
                  });
                  return promise.then(function(remainResults) {
                    return remainResults.shift();
                  }).then(function(result) {
                    return {
                      value: result,
                      done
                    };
                  });
                }
              };
            },
            destroyAll: function destroyAll(options) {
              var self2 = this;
              return self2.find(options).then(function(objects) {
                return AV2.Object.destroyAll(objects, options);
              });
            },
            count: function count(options) {
              var params = this._getParams();
              params.limit = 0;
              params.count = 1;
              var request3 = this._createRequest(params, options);
              return request3.then(function(response) {
                return response.count;
              });
            },
            first: function first(options) {
              var self2 = this;
              var params = this._getParams();
              params.limit = 1;
              var request3 = this._createRequest(params, options);
              return request3.then(function(response) {
                return _.map(response.results, function(json) {
                  var obj = self2._newObject();
                  if (obj._finishFetch) {
                    obj._finishFetch(self2._processResult(json), true);
                  }
                  return obj;
                })[0];
              });
            },
            skip: function skip(n2) {
              requires(n2, "undefined is not a valid skip value");
              this._skip = n2;
              return this;
            },
            limit: function limit(n2) {
              requires(n2, "undefined is not a valid limit value");
              this._limit = n2;
              return this;
            },
            equalTo: function equalTo(key, value) {
              requires(key, "undefined is not a valid key");
              requires(value, "undefined is not a valid value");
              this._where[key] = AV2._encode(value);
              return this;
            },
            _addCondition: function _addCondition(key, condition, value) {
              requires(key, "undefined is not a valid condition key");
              requires(condition, "undefined is not a valid condition");
              requires(value, "undefined is not a valid condition value");
              if (!this._where[key]) {
                this._where[key] = {};
              }
              this._where[key][condition] = AV2._encode(value);
              return this;
            },
            sizeEqualTo: function sizeEqualTo(key, value) {
              this._addCondition(key, "$size", value);
              return this;
            },
            notEqualTo: function notEqualTo(key, value) {
              this._addCondition(key, "$ne", value);
              return this;
            },
            lessThan: function lessThan(key, value) {
              this._addCondition(key, "$lt", value);
              return this;
            },
            greaterThan: function greaterThan(key, value) {
              this._addCondition(key, "$gt", value);
              return this;
            },
            lessThanOrEqualTo: function lessThanOrEqualTo(key, value) {
              this._addCondition(key, "$lte", value);
              return this;
            },
            greaterThanOrEqualTo: function greaterThanOrEqualTo(key, value) {
              this._addCondition(key, "$gte", value);
              return this;
            },
            containedIn: function containedIn(key, values) {
              this._addCondition(key, "$in", values);
              return this;
            },
            notContainedIn: function notContainedIn(key, values) {
              this._addCondition(key, "$nin", values);
              return this;
            },
            containsAll: function containsAll(key, values) {
              this._addCondition(key, "$all", values);
              return this;
            },
            exists: function exists(key) {
              this._addCondition(key, "$exists", true);
              return this;
            },
            doesNotExist: function doesNotExist(key) {
              this._addCondition(key, "$exists", false);
              return this;
            },
            matches: function matches(key, regex, modifiers) {
              this._addCondition(key, "$regex", regex);
              if (!modifiers) {
                modifiers = "";
              }
              if (regex.ignoreCase) {
                modifiers += "i";
              }
              if (regex.multiline) {
                modifiers += "m";
              }
              if (modifiers && modifiers.length) {
                this._addCondition(key, "$options", modifiers);
              }
              return this;
            },
            matchesQuery: function matchesQuery(key, query) {
              var queryJSON = query._getParams();
              queryJSON.className = query.className;
              this._addCondition(key, "$inQuery", queryJSON);
              return this;
            },
            doesNotMatchQuery: function doesNotMatchQuery(key, query) {
              var queryJSON = query._getParams();
              queryJSON.className = query.className;
              this._addCondition(key, "$notInQuery", queryJSON);
              return this;
            },
            matchesKeyInQuery: function matchesKeyInQuery(key, queryKey, query) {
              var queryJSON = query._getParams();
              queryJSON.className = query.className;
              this._addCondition(key, "$select", { key: queryKey, query: queryJSON });
              return this;
            },
            doesNotMatchKeyInQuery: function doesNotMatchKeyInQuery(key, queryKey, query) {
              var queryJSON = query._getParams();
              queryJSON.className = query.className;
              this._addCondition(key, "$dontSelect", {
                key: queryKey,
                query: queryJSON
              });
              return this;
            },
            _orQuery: function _orQuery(queries) {
              var queryJSON = _.map(queries, function(q) {
                return q._getParams().where;
              });
              this._where.$or = queryJSON;
              return this;
            },
            _andQuery: function _andQuery(queries) {
              var queryJSON = _.map(queries, function(q) {
                return q._getParams().where;
              });
              this._where.$and = queryJSON;
              return this;
            },
            _quote: function _quote(s) {
              return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
            },
            contains: function contains(key, value) {
              this._addCondition(key, "$regex", this._quote(value));
              return this;
            },
            startsWith: function startsWith(key, value) {
              this._addCondition(key, "$regex", "^" + this._quote(value));
              return this;
            },
            endsWith: function endsWith(key, value) {
              this._addCondition(key, "$regex", this._quote(value) + "$");
              return this;
            },
            ascending: function ascending(key) {
              requires(key, "undefined is not a valid key");
              this._order = key;
              return this;
            },
            addAscending: function addAscending(key) {
              requires(key, "undefined is not a valid key");
              if (this._order)
                this._order += "," + key;
              else
                this._order = key;
              return this;
            },
            descending: function descending(key) {
              requires(key, "undefined is not a valid key");
              this._order = "-" + key;
              return this;
            },
            addDescending: function addDescending(key) {
              requires(key, "undefined is not a valid key");
              if (this._order)
                this._order += ",-" + key;
              else
                this._order = "-" + key;
              return this;
            },
            near: function near(key, point) {
              if (!(point instanceof AV2.GeoPoint)) {
                point = new AV2.GeoPoint(point);
              }
              this._addCondition(key, "$nearSphere", point);
              return this;
            },
            withinRadians: function withinRadians(key, point, distance) {
              this.near(key, point);
              this._addCondition(key, "$maxDistance", distance);
              return this;
            },
            withinMiles: function withinMiles(key, point, distance) {
              return this.withinRadians(key, point, distance / 3958.8);
            },
            withinKilometers: function withinKilometers(key, point, distance) {
              return this.withinRadians(key, point, distance / 6371);
            },
            withinGeoBox: function withinGeoBox(key, southwest, northeast) {
              if (!(southwest instanceof AV2.GeoPoint)) {
                southwest = new AV2.GeoPoint(southwest);
              }
              if (!(northeast instanceof AV2.GeoPoint)) {
                northeast = new AV2.GeoPoint(northeast);
              }
              this._addCondition(key, "$within", { $box: [southwest, northeast] });
              return this;
            },
            include: function include(keys) {
              var _this4 = this;
              requires(keys, "undefined is not a valid key");
              _.forEach(arguments, function(keys2) {
                _this4._include = _this4._include.concat(ensureArray(keys2));
              });
              return this;
            },
            includeACL: function includeACL() {
              var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              this._includeACL = value;
              return this;
            },
            select: function select(keys) {
              var _this5 = this;
              requires(keys, "undefined is not a valid key");
              _.forEach(arguments, function(keys2) {
                _this5._select = _this5._select.concat(ensureArray(keys2));
              });
              return this;
            },
            each: function each(callback) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (this._order || this._skip || this._limit >= 0) {
                var error = new Error("Cannot iterate on a query with sort, skip, or limit.");
                return _promise2.default.reject(error);
              }
              var query = new AV2.Query(this.objectClass);
              query._limit = options.batchSize || 100;
              query._where = _.clone(this._where);
              query._include = _.clone(this._include);
              query.ascending("objectId");
              var finished = false;
              return continueWhile(function() {
                return !finished;
              }, function() {
                return query.find(options).then(function(results) {
                  var callbacksDone = _promise2.default.resolve();
                  _.each(results, function(result) {
                    callbacksDone = callbacksDone.then(function() {
                      return callback(result);
                    });
                  });
                  return callbacksDone.then(function() {
                    if (results.length >= query._limit) {
                      query.greaterThan("objectId", results[results.length - 1].id);
                    } else {
                      finished = true;
                    }
                  });
                });
              });
            },
            subscribe: function subscribe2(options) {
              return AV2.LiveQuery.init(this, options);
            }
          });
          AV2.FriendShipQuery = AV2.Query._extend({
            _newObject: function _newObject() {
              var UserClass = AV2.Object._getSubclass("_User");
              return new UserClass();
            },
            _processResult: function _processResult(json) {
              if (json && json[this._friendshipTag]) {
                var user = json[this._friendshipTag];
                if (user.__type === "Pointer" && user.className === "_User") {
                  delete user.__type;
                  delete user.className;
                }
                return user;
              } else {
                return null;
              }
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var EventEmitter = __webpack_require__(162);
        var _require = __webpack_require__(15), inherits = _require.inherits;
        var _require2 = __webpack_require__(12), request2 = _require2.request;
        var subscribe2 = function subscribe3(queryJSON, subscriptionId) {
          return request2({
            method: "POST",
            path: "/LiveQuery/subscribe",
            data: {
              query: queryJSON,
              id: subscriptionId
            }
          });
        };
        module2.exports = function(AV2) {
          var requireRealtime = function requireRealtime2() {
            if (!AV2._config.realtime) {
              throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
            }
          };
          AV2.LiveQuery = inherits(EventEmitter, {
            constructor: function constructor(id, client, queryJSON, subscriptionId) {
              var _this = this;
              EventEmitter.apply(this);
              this.id = id;
              this._client = client;
              this._client.register(this);
              this._queryJSON = queryJSON;
              this._subscriptionId = subscriptionId;
              this._onMessage = this._dispatch.bind(this);
              this._onReconnect = function() {
                subscribe2(_this._queryJSON, _this._subscriptionId).catch(function(error) {
                  return console.error("LiveQuery resubscribe error: " + error.message);
                });
              };
              client.on("message", this._onMessage);
              client.on("reconnect", this._onReconnect);
            },
            _dispatch: function _dispatch(message) {
              var _this2 = this;
              message.forEach(function(_ref) {
                var op = _ref.op, object = _ref.object, queryId = _ref.query_id, updatedKeys = _ref.updatedKeys;
                if (queryId !== _this2.id)
                  return;
                var target = AV2.parseJSON(_.extend({
                  __type: object.className === "_File" ? "File" : "Object"
                }, object));
                if (updatedKeys) {
                  _this2.emit(op, target, updatedKeys);
                } else {
                  _this2.emit(op, target);
                }
              });
            },
            unsubscribe: function unsubscribe2() {
              var client = this._client;
              client.off("message", this._onMessage);
              client.off("reconnect", this._onReconnect);
              client.deregister(this);
              return request2({
                method: "POST",
                path: "/LiveQuery/unsubscribe",
                data: {
                  id: client.id,
                  query_id: this.id
                }
              });
            }
          }, {
            init: function init(query) {
              var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$subscriptionId = _ref2.subscriptionId, userDefinedSubscriptionId = _ref2$subscriptionId === void 0 ? AV2._getSubscriptionId() : _ref2$subscriptionId;
              requireRealtime();
              if (!(query instanceof AV2.Query))
                throw new TypeError("LiveQuery must be inited with a Query");
              return _promise2.default.resolve(userDefinedSubscriptionId).then(function(subscriptionId) {
                return AV2._config.realtime.createLiveQueryClient(subscriptionId).then(function(liveQueryClient) {
                  var _query$_getParams = query._getParams(), where = _query$_getParams.where, keys = _query$_getParams.keys, returnACL = _query$_getParams.returnACL;
                  var queryJSON = {
                    where,
                    keys,
                    returnACL,
                    className: query.className
                  };
                  var promise = subscribe2(queryJSON, subscriptionId).then(function(_ref3) {
                    var queryId = _ref3.query_id;
                    return new AV2.LiveQuery(queryId, liveQueryClient, queryJSON, subscriptionId);
                  }).finally(function() {
                    liveQueryClient.deregister(promise);
                  });
                  liveQueryClient.register(promise);
                  return promise;
                });
              });
            },
            pause: function pause() {
              requireRealtime();
              return AV2._config.realtime.pause();
            },
            resume: function resume() {
              requireRealtime();
              return AV2._config.realtime.resume();
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        var _require = __webpack_require__(15), tap = _require.tap;
        module2.exports = function(AV2) {
          AV2.Captcha = function Captcha(options, authOptions) {
            this._options = options;
            this._authOptions = authOptions;
            this.url = void 0;
            this.captchaToken = void 0;
            this.validateToken = void 0;
          };
          AV2.Captcha.prototype.refresh = function refresh() {
            var _this = this;
            return AV2.Cloud._requestCaptcha(this._options, this._authOptions).then(function(_ref) {
              var captchaToken = _ref.captchaToken, url = _ref.url;
              _.extend(_this, { captchaToken, url });
              return url;
            });
          };
          AV2.Captcha.prototype.verify = function verify(code) {
            var _this2 = this;
            return AV2.Cloud.verifyCaptcha(code, this.captchaToken).then(tap(function(validateToken) {
              return _this2.validateToken = validateToken;
            }));
          };
          {
            AV2.Captcha.prototype.bind = function bind3(_ref2, _ref3) {
              var _this3 = this;
              var textInput = _ref2.textInput, image = _ref2.image, verifyButton = _ref2.verifyButton;
              var success = _ref3.success, error = _ref3.error;
              if (typeof textInput === "string") {
                textInput = document.getElementById(textInput);
                if (!textInput)
                  throw new Error("textInput with id " + textInput + " not found");
              }
              if (typeof image === "string") {
                image = document.getElementById(image);
                if (!image)
                  throw new Error("image with id " + image + " not found");
              }
              if (typeof verifyButton === "string") {
                verifyButton = document.getElementById(verifyButton);
                if (!verifyButton)
                  throw new Error("verifyButton with id " + verifyButton + " not found");
              }
              this.__refresh = function() {
                return _this3.refresh().then(function(url) {
                  image.src = url;
                  if (textInput) {
                    textInput.value = "";
                    textInput.focus();
                  }
                }).catch(function(err) {
                  return console.warn("refresh captcha fail: " + err.message);
                });
              };
              if (image) {
                this.__image = image;
                image.src = this.url;
                image.addEventListener("click", this.__refresh);
              }
              this.__verify = function() {
                var code = textInput.value;
                _this3.verify(code).catch(function(err) {
                  _this3.__refresh();
                  throw err;
                }).then(success, error).catch(function(err) {
                  return console.warn("verify captcha fail: " + err.message);
                });
              };
              if (textInput && verifyButton) {
                this.__verifyButton = verifyButton;
                verifyButton.addEventListener("click", this.__verify);
              }
            };
            AV2.Captcha.prototype.unbind = function unbind() {
              if (this.__image)
                this.__image.removeEventListener("click", this.__refresh);
              if (this.__verifyButton)
                this.__verifyButton.removeEventListener("click", this.__verify);
            };
          }
          AV2.Captcha.request = function(options, authOptions) {
            var captcha = new AV2.Captcha(options, authOptions);
            return captcha.refresh().then(function() {
              return captcha;
            });
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var _require = __webpack_require__(12), _request = _require._request, request2 = _require.request;
        module2.exports = function(AV2) {
          AV2.Cloud = AV2.Cloud || {};
          _.extend(AV2.Cloud, {
            run: function run(name, data2, options) {
              return request2({
                service: "engine",
                method: "POST",
                path: "/functions/" + name,
                data: AV2._encode(data2, null, true),
                authOptions: options
              }).then(function(resp) {
                return AV2._decode(resp).result;
              });
            },
            rpc: function rpc(name, data2, options) {
              if (_.isArray(data2)) {
                return _promise2.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."));
              }
              return request2({
                service: "engine",
                method: "POST",
                path: "/call/" + name,
                data: AV2._encodeObjectOrArray(data2),
                authOptions: options
              }).then(function(resp) {
                return AV2._decode(resp).result;
              });
            },
            getServerDate: function getServerDate() {
              return _request("date", null, null, "GET").then(function(resp) {
                return AV2._decode(resp);
              });
            },
            requestSmsCode: function requestSmsCode(data2) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (_.isString(data2)) {
                data2 = { mobilePhoneNumber: data2 };
              }
              if (!data2.mobilePhoneNumber) {
                throw new Error("Missing mobilePhoneNumber.");
              }
              if (options.validateToken) {
                data2 = _.extend({}, data2, {
                  validate_token: options.validateToken
                });
              }
              return _request("requestSmsCode", null, null, "POST", data2, options);
            },
            verifySmsCode: function verifySmsCode(code, phone) {
              if (!code)
                throw new Error("Missing sms code.");
              var params = {};
              if (_.isString(phone)) {
                params["mobilePhoneNumber"] = phone;
              }
              return _request("verifySmsCode", code, null, "POST", params);
            },
            _requestCaptcha: function _requestCaptcha(options, authOptions) {
              return _request("requestCaptcha", null, null, "GET", options, authOptions).then(function(_ref) {
                var url = _ref.captcha_url, captchaToken = _ref.captcha_token;
                return {
                  captchaToken,
                  url
                };
              });
            },
            requestCaptcha: AV2.Captcha.request,
            verifyCaptcha: function verifyCaptcha(code, captchaToken) {
              return _request("verifyCaptcha", null, null, "POST", {
                captcha_code: code,
                captcha_token: captchaToken
              }).then(function(_ref2) {
                var validateToken = _ref2.validate_token;
                return validateToken;
              });
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var request2 = __webpack_require__(12).request;
        module2.exports = function(AV2) {
          AV2.Installation = AV2.Object.extend("_Installation");
          AV2.Push = AV2.Push || {};
          AV2.Push.send = function(data2, options) {
            if (data2.where) {
              data2.where = data2.where._getParams().where;
            }
            if (data2.where && data2.cql) {
              throw new Error("Both where and cql can't be set");
            }
            if (data2.push_time) {
              data2.push_time = data2.push_time.toJSON();
            }
            if (data2.expiration_time) {
              data2.expiration_time = data2.expiration_time.toJSON();
            }
            if (data2.expiration_time && data2.expiration_interval) {
              throw new Error("Both expiration_time and expiration_interval can't be set");
            }
            return request2({
              service: "push",
              method: "POST",
              path: "/push",
              data: data2,
              authOptions: options
            });
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        var _typeof2 = __webpack_require__(30);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var AVRequest = __webpack_require__(12)._request;
        var _require = __webpack_require__(15), getSessionToken = _require.getSessionToken;
        module2.exports = function(AV2) {
          var getUser = function getUser2() {
            var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var sessionToken = getSessionToken(options);
            if (sessionToken) {
              return AV2.User._fetchUserBySessionToken(getSessionToken(options));
            }
            return AV2.User.currentAsync();
          };
          var getUserPointer = function getUserPointer2(options) {
            return getUser(options).then(function(currUser) {
              return AV2.Object.createWithoutData("_User", currUser.id)._toPointer();
            });
          };
          AV2.Status = function(imageUrl, message) {
            this.data = {};
            this.inboxType = "default";
            this.query = null;
            if (imageUrl && (typeof imageUrl === "undefined" ? "undefined" : (0, _typeof3.default)(imageUrl)) === "object") {
              this.data = imageUrl;
            } else {
              if (imageUrl) {
                this.data.image = imageUrl;
              }
              if (message) {
                this.data.message = message;
              }
            }
            return this;
          };
          _.extend(AV2.Status.prototype, {
            get: function get(attr) {
              return this.data[attr];
            },
            set: function set(key, value) {
              this.data[key] = value;
              return this;
            },
            destroy: function destroy(options) {
              if (!this.id)
                return _promise2.default.reject(new Error("The status id is not exists."));
              var request2 = AVRequest("statuses", null, this.id, "DELETE", options);
              return request2;
            },
            toObject: function toObject() {
              if (!this.id)
                return null;
              return AV2.Object.createWithoutData("_Status", this.id);
            },
            _getDataJSON: function _getDataJSON() {
              var json = _.clone(this.data);
              return AV2._encode(json);
            },
            send: function send() {
              var _this = this;
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (!getSessionToken(options) && !AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              if (!this.query) {
                return AV2.Status.sendStatusToFollowers(this, options);
              }
              return getUserPointer(options).then(function(currUser) {
                var query = _this.query._getParams();
                query.className = _this.query.className;
                var data2 = {};
                data2.query = query;
                _this.data = _this.data || {};
                _this.data.source = _this.data.source || currUser;
                data2.data = _this._getDataJSON();
                data2.inboxType = _this.inboxType || "default";
                return AVRequest("statuses", null, null, "POST", data2, options);
              }).then(function(response) {
                _this.id = response.objectId;
                _this.createdAt = AV2._parseDate(response.createdAt);
                return _this;
              });
            },
            _finishFetch: function _finishFetch(serverData) {
              this.id = serverData.objectId;
              this.createdAt = AV2._parseDate(serverData.createdAt);
              this.updatedAt = AV2._parseDate(serverData.updatedAt);
              this.messageId = serverData.messageId;
              delete serverData.messageId;
              delete serverData.objectId;
              delete serverData.createdAt;
              delete serverData.updatedAt;
              this.data = AV2._decode(serverData);
            }
          });
          AV2.Status.sendStatusToFollowers = function(status) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!getSessionToken(options) && !AV2.User.current()) {
              throw new Error("Please signin an user.");
            }
            return getUserPointer(options).then(function(currUser) {
              var query = {};
              query.className = "_Follower";
              query.keys = "follower";
              query.where = { user: currUser };
              var data2 = {};
              data2.query = query;
              status.data = status.data || {};
              status.data.source = status.data.source || currUser;
              data2.data = status._getDataJSON();
              data2.inboxType = status.inboxType || "default";
              var request2 = AVRequest("statuses", null, null, "POST", data2, options);
              return request2.then(function(response) {
                status.id = response.objectId;
                status.createdAt = AV2._parseDate(response.createdAt);
                return status;
              });
            });
          };
          AV2.Status.sendPrivateStatus = function(status, target) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!getSessionToken(options) && !AV2.User.current()) {
              throw new Error("Please signin an user.");
            }
            if (!target) {
              throw new Error("Invalid target user.");
            }
            var userObjectId = _.isString(target) ? target : target.id;
            if (!userObjectId) {
              throw new Error("Invalid target user.");
            }
            return getUserPointer(options).then(function(currUser) {
              var query = {};
              query.className = "_User";
              query.where = { objectId: userObjectId };
              var data2 = {};
              data2.query = query;
              status.data = status.data || {};
              status.data.source = status.data.source || currUser;
              data2.data = status._getDataJSON();
              data2.inboxType = "private";
              status.inboxType = "private";
              var request2 = AVRequest("statuses", null, null, "POST", data2, options);
              return request2.then(function(response) {
                status.id = response.objectId;
                status.createdAt = AV2._parseDate(response.createdAt);
                return status;
              });
            });
          };
          AV2.Status.countUnreadStatuses = function(owner) {
            var inboxType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!_.isString(inboxType))
              options = inboxType;
            if (!getSessionToken(options) && owner == null && !AV2.User.current()) {
              throw new Error("Please signin an user or pass the owner objectId.");
            }
            return _promise2.default.resolve(owner || getUser(options)).then(function(owner2) {
              var params = {};
              params.inboxType = AV2._encode(inboxType);
              params.owner = AV2._encode(owner2);
              return AVRequest("subscribe/statuses/count", null, null, "GET", params, options);
            });
          };
          AV2.Status.resetUnreadCount = function(owner) {
            var inboxType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!_.isString(inboxType))
              options = inboxType;
            if (!getSessionToken(options) && owner == null && !AV2.User.current()) {
              throw new Error("Please signin an user or pass the owner objectId.");
            }
            return _promise2.default.resolve(owner || getUser(options)).then(function(owner2) {
              var params = {};
              params.inboxType = AV2._encode(inboxType);
              params.owner = AV2._encode(owner2);
              return AVRequest("subscribe/statuses/resetUnreadCount", null, null, "POST", params, options);
            });
          };
          AV2.Status.statusQuery = function(source2) {
            var query = new AV2.Query("_Status");
            if (source2) {
              query.equalTo("source", source2);
            }
            return query;
          };
          AV2.InboxQuery = AV2.Query._extend({
            _objectClass: AV2.Status,
            _sinceId: 0,
            _maxId: 0,
            _inboxType: "default",
            _owner: null,
            _newObject: function _newObject() {
              return new AV2.Status();
            },
            _createRequest: function _createRequest(params, options) {
              return AV2.InboxQuery.__super__._createRequest.call(this, params, options, "/subscribe/statuses");
            },
            sinceId: function sinceId(id) {
              this._sinceId = id;
              return this;
            },
            maxId: function maxId(id) {
              this._maxId = id;
              return this;
            },
            owner: function owner(_owner) {
              this._owner = _owner;
              return this;
            },
            inboxType: function inboxType(type) {
              this._inboxType = type;
              return this;
            },
            _getParams: function _getParams() {
              var params = AV2.InboxQuery.__super__._getParams.call(this);
              params.owner = AV2._encode(this._owner);
              params.inboxType = AV2._encode(this._inboxType);
              params.sinceId = AV2._encode(this._sinceId);
              params.maxId = AV2._encode(this._maxId);
              return params;
            }
          });
          AV2.Status.inboxQuery = function(owner, inboxType) {
            var query = new AV2.InboxQuery(AV2.Status);
            if (owner) {
              query._owner = owner;
            }
            if (inboxType) {
              query._inboxType = inboxType;
            }
            return query;
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var AVRequest = __webpack_require__(12)._request;
        module2.exports = function(AV2) {
          AV2.SearchSortBuilder = function() {
            this._sortFields = [];
          };
          _.extend(AV2.SearchSortBuilder.prototype, {
            _addField: function _addField(key, order, mode, missing) {
              var field = {};
              field[key] = {
                order: order || "asc",
                mode: mode || "avg",
                missing: "_" + (missing || "last")
              };
              this._sortFields.push(field);
              return this;
            },
            ascending: function ascending(key, mode, missing) {
              return this._addField(key, "asc", mode, missing);
            },
            descending: function descending(key, mode, missing) {
              return this._addField(key, "desc", mode, missing);
            },
            whereNear: function whereNear(key, point, options) {
              options = options || {};
              var field = {};
              var geo = {
                lat: point.latitude,
                lon: point.longitude
              };
              var m = {
                order: options.order || "asc",
                mode: options.mode || "avg",
                unit: options.unit || "km"
              };
              m[key] = geo;
              field["_geo_distance"] = m;
              this._sortFields.push(field);
              return this;
            },
            build: function build() {
              return (0, _stringify2.default)(AV2._encode(this._sortFields));
            }
          });
          AV2.SearchQuery = AV2.Query._extend({
            _sid: null,
            _hits: 0,
            _queryString: null,
            _highlights: null,
            _sortBuilder: null,
            _clazz: null,
            constructor: function constructor(className) {
              if (className) {
                this._clazz = className;
              } else {
                className = "__INVALID_CLASS";
              }
              AV2.Query.call(this, className);
            },
            _createRequest: function _createRequest(params, options) {
              return AVRequest("search/select", null, null, "GET", params || this._getParams(), options);
            },
            sid: function sid(_sid) {
              this._sid = _sid;
              return this;
            },
            queryString: function queryString(q) {
              this._queryString = q;
              return this;
            },
            highlights: function highlights(_highlights) {
              var objects;
              if (_highlights && _.isString(_highlights)) {
                objects = _.toArray(arguments);
              } else {
                objects = _highlights;
              }
              this._highlights = objects;
              return this;
            },
            sortBy: function sortBy(builder) {
              this._sortBuilder = builder;
              return this;
            },
            hits: function hits() {
              if (!this._hits) {
                this._hits = 0;
              }
              return this._hits;
            },
            _processResult: function _processResult(json) {
              delete json["className"];
              delete json["_app_url"];
              delete json["_deeplink"];
              return json;
            },
            hasMore: function hasMore() {
              return !this._hitEnd;
            },
            reset: function reset() {
              this._hitEnd = false;
              this._sid = null;
              this._hits = 0;
            },
            find: function find(options) {
              var self2 = this;
              var request2 = this._createRequest(void 0, options);
              return request2.then(function(response) {
                if (response.sid) {
                  self2._oldSid = self2._sid;
                  self2._sid = response.sid;
                } else {
                  self2._sid = null;
                  self2._hitEnd = true;
                }
                self2._hits = response.hits || 0;
                return _.map(response.results, function(json) {
                  if (json.className) {
                    response.className = json.className;
                  }
                  var obj = self2._newObject(response);
                  obj.appURL = json["_app_url"];
                  obj._finishFetch(self2._processResult(json), true);
                  return obj;
                });
              });
            },
            _getParams: function _getParams() {
              var params = AV2.SearchQuery.__super__._getParams.call(this);
              delete params.where;
              if (this._clazz) {
                params.clazz = this.className;
              }
              if (this._sid) {
                params.sid = this._sid;
              }
              if (!this._queryString) {
                throw new Error("Please set query string.");
              } else {
                params.q = this._queryString;
              }
              if (this._highlights) {
                params.highlights = this._highlights.join(",");
              }
              if (this._sortBuilder && params.order) {
                throw new Error("sort and order can not be set at same time.");
              }
              if (this._sortBuilder) {
                params.sort = this._sortBuilder.build();
              }
              return params;
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var AVError = __webpack_require__(29);
        var _require = __webpack_require__(12), request2 = _require.request;
        module2.exports = function(AV2) {
          AV2.Insight = AV2.Insight || {};
          _.extend(AV2.Insight, {
            startJob: function startJob(jobConfig, options) {
              if (!jobConfig || !jobConfig.sql) {
                throw new Error("Please provide the sql to run the job.");
              }
              var data2 = {
                jobConfig,
                appId: AV2.applicationId
              };
              return request2({
                path: "/bigquery/jobs",
                method: "POST",
                data: AV2._encode(data2, null, true),
                authOptions: options,
                signKey: false
              }).then(function(resp) {
                return AV2._decode(resp).id;
              });
            },
            on: function on(event2, cb) {
            }
          });
          AV2.Insight.JobQuery = function(id, className) {
            if (!id) {
              throw new Error("Please provide the job id.");
            }
            this.id = id;
            this.className = className;
            this._skip = 0;
            this._limit = 100;
          };
          _.extend(AV2.Insight.JobQuery.prototype, {
            skip: function skip(n2) {
              this._skip = n2;
              return this;
            },
            limit: function limit(n2) {
              this._limit = n2;
              return this;
            },
            find: function find(options) {
              var params = {
                skip: this._skip,
                limit: this._limit
              };
              return request2({
                path: "/bigquery/jobs/" + this.id,
                method: "GET",
                query: params,
                authOptions: options,
                signKey: false
              }).then(function(response) {
                if (response.error) {
                  return _promise2.default.reject(new AVError(response.code, response.error));
                }
                return _promise2.default.resolve(response);
              });
            }
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(0);
        var _require = __webpack_require__(12), LCRequest = _require.request;
        var _require2 = __webpack_require__(15), getSessionToken = _require2.getSessionToken;
        module2.exports = function(AV2) {
          AV2.Friendship = {
            request: function request2(options, authOptions) {
              if (!AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              var friend = void 0;
              var attributes = void 0;
              if (options.friend) {
                friend = options.friend;
                attributes = options.attributes;
              } else {
                friend = options;
              }
              var friendObject = _.isString(friend) ? AV2.Object.createWithoutData("_User", friend) : friend;
              return LCRequest({
                method: "POST",
                path: "/users/friendshipRequests",
                data: AV2._encode({
                  user: AV2.User.current(),
                  friend: friendObject,
                  friendship: attributes
                }),
                authOptions
              });
            },
            acceptRequest: function acceptRequest(options) {
              var authOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (!getSessionToken(authOptions) && !AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              var request2 = void 0;
              var attributes = void 0;
              if (options.request) {
                request2 = options.request;
                attributes = options.attributes;
              } else {
                request2 = options;
              }
              var requestId = _.isString(request2) ? request2 : request2.id;
              return LCRequest({
                method: "PUT",
                path: "/users/friendshipRequests/" + requestId + "/accept",
                data: {
                  friendship: AV2._encode(attributes)
                },
                authOptions
              });
            },
            declineRequest: function declineRequest(request2) {
              var authOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (!getSessionToken(authOptions) && !AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              var requestId = _.isString(request2) ? request2 : request2.id;
              return LCRequest({
                method: "PUT",
                path: "/users/friendshipRequests/" + requestId + "/decline",
                authOptions
              });
            }
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _stringify = __webpack_require__(19);
        var _stringify2 = _interopRequireDefault(_stringify);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var _require = __webpack_require__(12), _request = _require._request;
        var AV2 = __webpack_require__(36);
        var serializeMessage = function serializeMessage2(message) {
          if (typeof message === "string") {
            return message;
          }
          if (typeof message.getPayload === "function") {
            return (0, _stringify2.default)(message.getPayload());
          }
          return (0, _stringify2.default)(message);
        };
        module2.exports = AV2.Object.extend("_Conversation", {
          constructor: function constructor(name) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            AV2.Object.prototype.constructor.call(this, null, null);
            this.set("name", name);
            if (options.isSystem !== void 0) {
              this.set("sys", options.isSystem ? true : false);
            }
            if (options.isTransient !== void 0) {
              this.set("tr", options.isTransient ? true : false);
            }
          },
          getCreator: function getCreator() {
            return this.get("c");
          },
          getLastMessageAt: function getLastMessageAt() {
            return this.get("lm");
          },
          getMembers: function getMembers() {
            return this.get("m");
          },
          addMember: function addMember(member) {
            return this.add("m", member);
          },
          getMutedMembers: function getMutedMembers() {
            return this.get("mu");
          },
          getName: function getName() {
            return this.get("name");
          },
          isTransient: function isTransient() {
            return this.get("tr");
          },
          isSystem: function isSystem() {
            return this.get("sys");
          },
          send: function send(fromClient, message) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var authOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            var data2 = {
              from_peer: fromClient,
              conv_id: this.id,
              transient: false,
              message: serializeMessage(message)
            };
            if (options.toClients !== void 0) {
              data2.to_peers = options.toClients;
            }
            if (options.transient !== void 0) {
              data2.transient = options.transient ? true : false;
            }
            if (options.pushData !== void 0) {
              data2.push_data = options.pushData;
            }
            return _request("rtm", "messages", null, "POST", data2, authOptions);
          },
          broadcast: function broadcast(fromClient, message) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var authOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            var data2 = {
              from_peer: fromClient,
              conv_id: this.id,
              message: serializeMessage(message)
            };
            if (options.pushData !== void 0) {
              data2.push = options.pushData;
            }
            if (options.validTill !== void 0) {
              var ts = options.validTill;
              if (_.isDate(ts)) {
                ts = ts.getTime();
              }
              options.valid_till = ts;
            }
            return _request("rtm", "broadcast", null, "POST", data2, authOptions);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _ = __webpack_require__(0);
        var _require = __webpack_require__(12), request2 = _require.request;
        var _require2 = __webpack_require__(15), ensureArray = _require2.ensureArray, parseDate = _require2.parseDate;
        var AV2 = __webpack_require__(36);
        AV2.LeaderboardVersionChangeInterval = {
          NEVER: "never",
          DAY: "day",
          WEEK: "week",
          MONTH: "month"
        };
        AV2.LeaderboardOrder = {
          ASCENDING: "ascending",
          DESCENDING: "descending"
        };
        AV2.LeaderboardUpdateStrategy = {
          BETTER: "better",
          LAST: "last",
          SUM: "sum"
        };
        function Statistic(_ref) {
          var name = _ref.name, value = _ref.value, version = _ref.version;
          this.name = name;
          this.value = value;
          this.version = version;
        }
        var parseStatisticData = function parseStatisticData2(statisticData) {
          var _AV$_decode = AV2._decode(statisticData), name = _AV$_decode.statisticName, value = _AV$_decode.statisticValue, version = _AV$_decode.version;
          return new Statistic({ name, value, version });
        };
        AV2.Leaderboard = function Leaderboard2(statisticName) {
          this.statisticName = statisticName;
          this.order = void 0;
          this.updateStrategy = void 0;
          this.versionChangeInterval = void 0;
          this.version = void 0;
          this.nextResetAt = void 0;
          this.createdAt = void 0;
        };
        var Leaderboard = AV2.Leaderboard;
        AV2.Leaderboard.createWithoutData = function(statisticName) {
          return new Leaderboard(statisticName);
        };
        AV2.Leaderboard.createLeaderboard = function(_ref2, authOptions) {
          var statisticName = _ref2.statisticName, order = _ref2.order, versionChangeInterval = _ref2.versionChangeInterval, updateStrategy = _ref2.updateStrategy;
          return request2({
            method: "POST",
            path: "/leaderboard/leaderboards",
            data: {
              statisticName,
              order,
              versionChangeInterval,
              updateStrategy
            },
            authOptions
          }).then(function(data2) {
            var leaderboard = new Leaderboard(statisticName);
            return leaderboard._finishFetch(data2);
          });
        };
        AV2.Leaderboard.getLeaderboard = function(statisticName, authOptions) {
          return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
        };
        AV2.Leaderboard.getStatistics = function(user) {
          var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, statisticNames = _ref3.statisticNames;
          var authOptions = arguments[2];
          return _promise2.default.resolve().then(function() {
            if (!(user && user.id))
              throw new Error("user must be an AV.User");
            return request2({
              method: "GET",
              path: "/leaderboard/users/" + user.id + "/statistics",
              query: {
                statistics: statisticNames ? ensureArray(statisticNames).join(",") : void 0
              },
              authOptions
            }).then(function(_ref4) {
              var results = _ref4.results;
              return results.map(parseStatisticData);
            });
          });
        };
        AV2.Leaderboard.updateStatistics = function(user, statistics) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return _promise2.default.resolve().then(function() {
            if (!(user && user.id))
              throw new Error("user must be an AV.User");
            var data2 = _.map(statistics, function(value, key) {
              return {
                statisticName: key,
                statisticValue: value
              };
            });
            var overwrite = options.overwrite;
            return request2({
              method: "POST",
              path: "/leaderboard/users/" + user.id + "/statistics",
              query: {
                overwrite: overwrite ? 1 : void 0
              },
              data: data2,
              authOptions: options
            }).then(function(_ref5) {
              var results = _ref5.results;
              return results.map(parseStatisticData);
            });
          });
        };
        AV2.Leaderboard.deleteStatistics = function(user, statisticNames, authOptions) {
          return _promise2.default.resolve().then(function() {
            if (!(user && user.id))
              throw new Error("user must be an AV.User");
            return request2({
              method: "DELETE",
              path: "/leaderboard/users/" + user.id + "/statistics",
              query: {
                statistics: ensureArray(statisticNames).join(",")
              },
              authOptions
            }).then(function() {
              return void 0;
            });
          });
        };
        _.extend(Leaderboard.prototype, {
          _finishFetch: function _finishFetch(data2) {
            var _this = this;
            _.forEach(data2, function(value, key) {
              if (key === "updatedAt" || key === "objectId")
                return;
              if (key === "expiredAt") {
                key = "nextResetAt";
              }
              if (key === "createdAt") {
                value = parseDate(value);
              }
              if (value && value.__type === "Date") {
                value = parseDate(value.iso);
              }
              _this[key] = value;
            });
            return this;
          },
          fetch: function fetch(authOptions) {
            var _this2 = this;
            return request2({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              authOptions
            }).then(function(data2) {
              return _this2._finishFetch(data2);
            });
          },
          count: function count() {
            var _ref6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, version = _ref6.version;
            var authOptions = arguments[1];
            return request2({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
              query: {
                count: 1,
                limit: 0,
                version
              },
              authOptions
            }).then(function(_ref7) {
              var count2 = _ref7.count;
              return count2;
            });
          },
          _getResults: function _getResults(_ref8, authOptions, userId) {
            var skip = _ref8.skip, limit = _ref8.limit, selectUserKeys = _ref8.selectUserKeys, includeUserKeys = _ref8.includeUserKeys, includeStatistics = _ref8.includeStatistics, version = _ref8.version;
            return request2({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (userId ? "/" + userId : ""),
              query: {
                skip,
                limit,
                selectUserKeys: _.union(ensureArray(selectUserKeys), ensureArray(includeUserKeys)).join(",") || void 0,
                includeUser: includeUserKeys ? ensureArray(includeUserKeys).join(",") : void 0,
                includeStatistics: includeStatistics ? ensureArray(includeStatistics).join(",") : void 0,
                version
              },
              authOptions
            }).then(function(_ref9) {
              var rankings = _ref9.results;
              return rankings.map(function(rankingData) {
                var _AV$_decode2 = AV2._decode(rankingData), user = _AV$_decode2.user, value = _AV$_decode2.statisticValue, rank = _AV$_decode2.rank, _AV$_decode2$statisti = _AV$_decode2.statistics, statistics = _AV$_decode2$statisti === void 0 ? [] : _AV$_decode2$statisti;
                return {
                  user,
                  value,
                  rank,
                  includedStatistics: statistics.map(parseStatisticData)
                };
              });
            });
          },
          getResults: function getResults() {
            var _ref10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, skip = _ref10.skip, limit = _ref10.limit, selectUserKeys = _ref10.selectUserKeys, includeUserKeys = _ref10.includeUserKeys, includeStatistics = _ref10.includeStatistics, version = _ref10.version;
            var authOptions = arguments[1];
            return this._getResults({
              skip,
              limit,
              selectUserKeys,
              includeUserKeys,
              includeStatistics,
              version
            }, authOptions);
          },
          getResultsAroundUser: function getResultsAroundUser(user) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var authOptions = arguments[2];
            if (user && typeof user.id !== "string") {
              return this.getResultsAroundUser(void 0, user, options);
            }
            var limit = options.limit, selectUserKeys = options.selectUserKeys, includeUserKeys = options.includeUserKeys, includeStatistics = options.includeStatistics, version = options.version;
            return this._getResults({ limit, selectUserKeys, includeUserKeys, includeStatistics, version }, authOptions, user ? user.id : "self");
          },
          _update: function _update(data2, authOptions) {
            var _this3 = this;
            return request2({
              method: "PUT",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              data: data2,
              authOptions
            }).then(function(result) {
              return _this3._finishFetch(result);
            });
          },
          updateVersionChangeInterval: function updateVersionChangeInterval(versionChangeInterval, authOptions) {
            return this._update({ versionChangeInterval }, authOptions);
          },
          updateUpdateStrategy: function updateUpdateStrategy(updateStrategy, authOptions) {
            return this._update({ updateStrategy }, authOptions);
          },
          reset: function reset(authOptions) {
            var _this4 = this;
            return request2({
              method: "PUT",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
              authOptions
            }).then(function(data2) {
              return _this4._finishFetch(data2);
            });
          },
          destroy: function destroy(authOptions) {
            return AV2.request({
              method: "DELETE",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              authOptions
            }).then(function() {
              return void 0;
            });
          },
          getArchives: function getArchives() {
            var _this5 = this;
            var _ref11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, skip = _ref11.skip, limit = _ref11.limit;
            var authOptions = arguments[1];
            return request2({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
              query: {
                skip,
                limit
              },
              authOptions
            }).then(function(_ref12) {
              var results = _ref12.results;
              return results.map(function(_ref13) {
                var version = _ref13.version, status = _ref13.status, url = _ref13.url, activatedAt = _ref13.activatedAt, deactivatedAt = _ref13.deactivatedAt;
                return {
                  statisticName: _this5.statisticName,
                  version,
                  status,
                  url,
                  activatedAt: parseDate(activatedAt.iso),
                  deactivatedAt: parseDate(deactivatedAt.iso)
                };
              });
            });
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var adapters = __webpack_require__(338);
        module2.exports = function(AV2) {
          AV2.setAdapters(adapters);
          return AV2;
        };
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _adaptersSuperagent = __webpack_require__(339);
        Object.defineProperty(exports2, "request", {
          enumerable: true,
          get: function get() {
            return _adaptersSuperagent.request;
          }
        });
        Object.defineProperty(exports2, "upload", {
          enumerable: true,
          get: function get() {
            return _adaptersSuperagent.upload;
          }
        });
        var storage = window.localStorage;
        var WebSocket = window.WebSocket;
        var platformInfo = {
          name: "Browser"
        };
        exports2.WebSocket = WebSocket;
        exports2.platformInfo = platformInfo;
        exports2.storage = storage;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.upload = exports2.request = void 0;
        var adapter_utils_1 = __webpack_require__(340);
        var superagent = __webpack_require__(341);
        function convertResponse(res) {
          return {
            ok: res.ok,
            status: res.status,
            headers: res.header,
            data: res.body
          };
        }
        exports2.request = function(url, options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.method, method = _a === void 0 ? "GET" : _a, data2 = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
          if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            return Promise.reject(new adapter_utils_1.AbortError("Request aborted"));
          }
          var req = superagent(method, url);
          if (headers) {
            req.set(headers);
          }
          if (onprogress) {
            req.on("progress", onprogress);
          }
          return new Promise(function(resolve, reject) {
            var abortListener = function() {
              reject(new adapter_utils_1.AbortError("Request aborted"));
              req.abort();
            };
            signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", abortListener);
            req.send(data2).then(function(res) {
              return resolve(convertResponse(res));
            }).catch(function(err) {
              if (err.response) {
                resolve(convertResponse(err.response));
              } else {
                reject(err);
              }
            }).finally(function() {
              return signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", abortListener);
            });
          });
        };
        exports2.upload = function(url, file, options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.method, method = _a === void 0 ? "POST" : _a, data2 = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
          if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            return Promise.reject(new adapter_utils_1.AbortError("Request aborted"));
          }
          var req = superagent(method, url).attach(file.field, file.data, file.name);
          if (data2) {
            req.field(data2);
          }
          if (headers) {
            req.set(headers);
          }
          if (onprogress) {
            req.on("progress", onprogress);
          }
          return new Promise(function(resolve, reject) {
            var abortListener = function() {
              reject(new adapter_utils_1.AbortError("Request aborted"));
              req.abort();
            };
            signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", abortListener);
            req.then(function(res) {
              return resolve(convertResponse(res));
            }).catch(function(err) {
              if (err.response) {
                resolve(convertResponse(err.response));
              } else {
                reject(err);
              }
            }).finally(function() {
              return signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", abortListener);
            });
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        __webpack_require__.d(__webpack_exports__, "AbortError", function() {
          return AbortError;
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
        
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        var extendStatics = function(d2, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
            d3.__proto__ = b2;
          } || function(d3, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d3[p] = b2[p];
          };
          return extendStatics(d2, b);
        };
        function __extends(d2, b) {
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var AbortError = function(_super) {
          __extends(AbortError2, _super);
          function AbortError2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "AbortError";
            return _this;
          }
          return AbortError2;
        }(Error);
      },
      function(module2, exports2, __webpack_require__) {
        var _iterator = __webpack_require__(61);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _typeof3 = __webpack_require__(30);
        var _typeof4 = _interopRequireDefault(_typeof3);
        var _symbol = __webpack_require__(51);
        var _symbol2 = _interopRequireDefault(_symbol);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          }
          return _typeof(obj);
        }
        var root;
        if (typeof window !== "undefined") {
          root = window;
        } else if (typeof self === "undefined") {
          console.warn("Using browser-only version of superagent in non-browser environment");
          root = void 0;
        } else {
          root = self;
        }
        var Emitter = __webpack_require__(342);
        var safeStringify = __webpack_require__(343);
        var RequestBase = __webpack_require__(344);
        var isObject2 = __webpack_require__(170);
        var ResponseBase = __webpack_require__(345);
        var Agent = __webpack_require__(347);
        function noop() {
        }
        module2.exports = function(method, url) {
          if (typeof url === "function") {
            return new exports2.Request("GET", method).end(url);
          }
          if (arguments.length === 1) {
            return new exports2.Request("GET", method);
          }
          return new exports2.Request(method, url);
        };
        exports2 = module2.exports;
        var request2 = exports2;
        exports2.Request = Request;
        request2.getXHR = function() {
          if (root.XMLHttpRequest && (!root.location || root.location.protocol !== "file:" || !root.ActiveXObject)) {
            return new XMLHttpRequest();
          }
          try {
            return new ActiveXObject("Microsoft.XMLHTTP");
          } catch (_unused) {
          }
          try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
          } catch (_unused2) {
          }
          try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
          } catch (_unused3) {
          }
          try {
            return new ActiveXObject("Msxml2.XMLHTTP");
          } catch (_unused4) {
          }
          throw new Error("Browser-only version of superagent could not find XHR");
        };
        var trim2 = "".trim ? function(s) {
          return s.trim();
        } : function(s) {
          return s.replace(/(^\s*|\s*$)/g, "");
        };
        function serialize(obj) {
          if (!isObject2(obj))
            return obj;
          var pairs = [];
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              pushEncodedKeyValuePair(pairs, key, obj[key]);
          }
          return pairs.join("&");
        }
        function pushEncodedKeyValuePair(pairs, key, val) {
          if (val === void 0)
            return;
          if (val === null) {
            pairs.push(encodeURI(key));
            return;
          }
          if (Array.isArray(val)) {
            val.forEach(function(v) {
              pushEncodedKeyValuePair(pairs, key, v);
            });
          } else if (isObject2(val)) {
            for (var subkey in val) {
              if (Object.prototype.hasOwnProperty.call(val, subkey))
                pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
            }
          } else {
            pairs.push(encodeURI(key) + "=" + encodeURIComponent(val));
          }
        }
        request2.serializeObject = serialize;
        function parseString(str) {
          var obj = {};
          var pairs = str.split("&");
          var pair;
          var pos;
          for (var i2 = 0, len = pairs.length; i2 < len; ++i2) {
            pair = pairs[i2];
            pos = pair.indexOf("=");
            if (pos === -1) {
              obj[decodeURIComponent(pair)] = "";
            } else {
              obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
            }
          }
          return obj;
        }
        request2.parseString = parseString;
        request2.types = {
          html: "text/html",
          json: "application/json",
          xml: "text/xml",
          urlencoded: "application/x-www-form-urlencoded",
          form: "application/x-www-form-urlencoded",
          "form-data": "application/x-www-form-urlencoded"
        };
        request2.serialize = {
          "application/x-www-form-urlencoded": serialize,
          "application/json": safeStringify
        };
        request2.parse = {
          "application/x-www-form-urlencoded": parseString,
          "application/json": JSON.parse
        };
        function parseHeader(str) {
          var lines = str.split(/\r?\n/);
          var fields = {};
          var index2;
          var line;
          var field;
          var val;
          for (var i2 = 0, len = lines.length; i2 < len; ++i2) {
            line = lines[i2];
            index2 = line.indexOf(":");
            if (index2 === -1) {
              continue;
            }
            field = line.slice(0, index2).toLowerCase();
            val = trim2(line.slice(index2 + 1));
            fields[field] = val;
          }
          return fields;
        }
        function isJSON(mime) {
          return /[/+]json($|[^-\w])/.test(mime);
        }
        function Response(req) {
          this.req = req;
          this.xhr = this.req.xhr;
          this.text = this.req.method !== "HEAD" && (this.xhr.responseType === "" || this.xhr.responseType === "text") || typeof this.xhr.responseType === "undefined" ? this.xhr.responseText : null;
          this.statusText = this.req.xhr.statusText;
          var status = this.xhr.status;
          if (status === 1223) {
            status = 204;
          }
          this._setStatusProperties(status);
          this.headers = parseHeader(this.xhr.getAllResponseHeaders());
          this.header = this.headers;
          this.header["content-type"] = this.xhr.getResponseHeader("content-type");
          this._setHeaderProperties(this.header);
          if (this.text === null && req._responseType) {
            this.body = this.xhr.response;
          } else {
            this.body = this.req.method === "HEAD" ? null : this._parseBody(this.text ? this.text : this.xhr.response);
          }
        }
        ResponseBase(Response.prototype);
        Response.prototype._parseBody = function(str) {
          var parse = request2.parse[this.type];
          if (this.req._parser) {
            return this.req._parser(this, str);
          }
          if (!parse && isJSON(this.type)) {
            parse = request2.parse["application/json"];
          }
          return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
        };
        Response.prototype.toError = function() {
          var req = this.req;
          var method = req.method;
          var url = req.url;
          var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
          var err = new Error(msg);
          err.status = this.status;
          err.method = method;
          err.url = url;
          return err;
        };
        request2.Response = Response;
        function Request(method, url) {
          var self2 = this;
          this._query = this._query || [];
          this.method = method;
          this.url = url;
          this.header = {};
          this._header = {};
          this.on("end", function() {
            var err = null;
            var res = null;
            try {
              res = new Response(self2);
            } catch (err_) {
              err = new Error("Parser is unable to parse the response");
              err.parse = true;
              err.original = err_;
              if (self2.xhr) {
                err.rawResponse = typeof self2.xhr.responseType === "undefined" ? self2.xhr.responseText : self2.xhr.response;
                err.status = self2.xhr.status ? self2.xhr.status : null;
                err.statusCode = err.status;
              } else {
                err.rawResponse = null;
                err.status = null;
              }
              return self2.callback(err);
            }
            self2.emit("response", res);
            var new_err;
            try {
              if (!self2._isResponseOK(res)) {
                new_err = new Error(res.statusText || res.text || "Unsuccessful HTTP response");
              }
            } catch (err_) {
              new_err = err_;
            }
            if (new_err) {
              new_err.original = err;
              new_err.response = res;
              new_err.status = res.status;
              self2.callback(new_err, res);
            } else {
              self2.callback(null, res);
            }
          });
        }
        Emitter(Request.prototype);
        RequestBase(Request.prototype);
        Request.prototype.type = function(type) {
          this.set("Content-Type", request2.types[type] || type);
          return this;
        };
        Request.prototype.accept = function(type) {
          this.set("Accept", request2.types[type] || type);
          return this;
        };
        Request.prototype.auth = function(user, pass, options) {
          if (arguments.length === 1)
            pass = "";
          if (_typeof(pass) === "object" && pass !== null) {
            options = pass;
            pass = "";
          }
          if (!options) {
            options = {
              type: typeof btoa === "function" ? "basic" : "auto"
            };
          }
          var encoder = function encoder2(string) {
            if (typeof btoa === "function") {
              return btoa(string);
            }
            throw new Error("Cannot use basic auth, btoa is not a function");
          };
          return this._auth(user, pass, options, encoder);
        };
        Request.prototype.query = function(val) {
          if (typeof val !== "string")
            val = serialize(val);
          if (val)
            this._query.push(val);
          return this;
        };
        Request.prototype.attach = function(field, file, options) {
          if (file) {
            if (this._data) {
              throw new Error("superagent can't mix .send() and .attach()");
            }
            this._getFormData().append(field, file, options || file.name);
          }
          return this;
        };
        Request.prototype._getFormData = function() {
          if (!this._formData) {
            this._formData = new root.FormData();
          }
          return this._formData;
        };
        Request.prototype.callback = function(err, res) {
          if (this._shouldRetry(err, res)) {
            return this._retry();
          }
          var fn = this._callback;
          this.clearTimeout();
          if (err) {
            if (this._maxRetries)
              err.retries = this._retries - 1;
            this.emit("error", err);
          }
          fn(err, res);
        };
        Request.prototype.crossDomainError = function() {
          var err = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
          err.crossDomain = true;
          err.status = this.status;
          err.method = this.method;
          err.url = this.url;
          this.callback(err);
        };
        Request.prototype.agent = function() {
          console.warn("This is not supported in browser version of superagent");
          return this;
        };
        Request.prototype.ca = Request.prototype.agent;
        Request.prototype.buffer = Request.prototype.ca;
        Request.prototype.write = function() {
          throw new Error("Streaming is not supported in browser version of superagent");
        };
        Request.prototype.pipe = Request.prototype.write;
        Request.prototype._isHost = function(obj) {
          return obj && _typeof(obj) === "object" && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== "[object Object]";
        };
        Request.prototype.end = function(fn) {
          if (this._endCalled) {
            console.warn("Warning: .end() was called twice. This is not supported in superagent");
          }
          this._endCalled = true;
          this._callback = fn || noop;
          this._finalizeQueryString();
          this._end();
        };
        Request.prototype._setUploadTimeout = function() {
          var self2 = this;
          if (this._uploadTimeout && !this._uploadTimeoutTimer) {
            this._uploadTimeoutTimer = setTimeout(function() {
              self2._timeoutError("Upload timeout of ", self2._uploadTimeout, "ETIMEDOUT");
            }, this._uploadTimeout);
          }
        };
        Request.prototype._end = function() {
          if (this._aborted)
            return this.callback(new Error("The request has been aborted even before .end() was called"));
          var self2 = this;
          this.xhr = request2.getXHR();
          var xhr2 = this.xhr;
          var data2 = this._formData || this._data;
          this._setTimeouts();
          xhr2.onreadystatechange = function() {
            var readyState = xhr2.readyState;
            if (readyState >= 2 && self2._responseTimeoutTimer) {
              clearTimeout(self2._responseTimeoutTimer);
            }
            if (readyState !== 4) {
              return;
            }
            var status;
            try {
              status = xhr2.status;
            } catch (_unused5) {
              status = 0;
            }
            if (!status) {
              if (self2.timedout || self2._aborted)
                return;
              return self2.crossDomainError();
            }
            self2.emit("end");
          };
          var handleProgress = function handleProgress2(direction, e2) {
            if (e2.total > 0) {
              e2.percent = e2.loaded / e2.total * 100;
              if (e2.percent === 100) {
                clearTimeout(self2._uploadTimeoutTimer);
              }
            }
            e2.direction = direction;
            self2.emit("progress", e2);
          };
          if (this.hasListeners("progress")) {
            try {
              xhr2.addEventListener("progress", handleProgress.bind(null, "download"));
              if (xhr2.upload) {
                xhr2.upload.addEventListener("progress", handleProgress.bind(null, "upload"));
              }
            } catch (_unused6) {
            }
          }
          if (xhr2.upload) {
            this._setUploadTimeout();
          }
          try {
            if (this.username && this.password) {
              xhr2.open(this.method, this.url, true, this.username, this.password);
            } else {
              xhr2.open(this.method, this.url, true);
            }
          } catch (err) {
            return this.callback(err);
          }
          if (this._withCredentials)
            xhr2.withCredentials = true;
          if (!this._formData && this.method !== "GET" && this.method !== "HEAD" && typeof data2 !== "string" && !this._isHost(data2)) {
            var contentType = this._header["content-type"];
            var _serialize = this._serializer || request2.serialize[contentType ? contentType.split(";")[0] : ""];
            if (!_serialize && isJSON(contentType)) {
              _serialize = request2.serialize["application/json"];
            }
            if (_serialize)
              data2 = _serialize(data2);
          }
          for (var field in this.header) {
            if (this.header[field] === null)
              continue;
            if (Object.prototype.hasOwnProperty.call(this.header, field))
              xhr2.setRequestHeader(field, this.header[field]);
          }
          if (this._responseType) {
            xhr2.responseType = this._responseType;
          }
          this.emit("request", this);
          xhr2.send(typeof data2 === "undefined" ? null : data2);
        };
        request2.agent = function() {
          return new Agent();
        };
        ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
          Agent.prototype[method.toLowerCase()] = function(url, fn) {
            var req = new request2.Request(method, url);
            this._setDefaults(req);
            if (fn) {
              req.end(fn);
            }
            return req;
          };
        });
        Agent.prototype.del = Agent.prototype.delete;
        request2.get = function(url, data2, fn) {
          var req = request2("GET", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.query(data2);
          if (fn)
            req.end(fn);
          return req;
        };
        request2.head = function(url, data2, fn) {
          var req = request2("HEAD", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.query(data2);
          if (fn)
            req.end(fn);
          return req;
        };
        request2.options = function(url, data2, fn) {
          var req = request2("OPTIONS", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.send(data2);
          if (fn)
            req.end(fn);
          return req;
        };
        function del(url, data2, fn) {
          var req = request2("DELETE", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.send(data2);
          if (fn)
            req.end(fn);
          return req;
        }
        request2.del = del;
        request2.delete = del;
        request2.patch = function(url, data2, fn) {
          var req = request2("PATCH", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.send(data2);
          if (fn)
            req.end(fn);
          return req;
        };
        request2.post = function(url, data2, fn) {
          var req = request2("POST", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.send(data2);
          if (fn)
            req.end(fn);
          return req;
        };
        request2.put = function(url, data2, fn) {
          var req = request2("PUT", url);
          if (typeof data2 === "function") {
            fn = data2;
            data2 = null;
          }
          if (data2)
            req.send(data2);
          if (fn)
            req.end(fn);
          return req;
        };
      },
      function(module2, exports2, __webpack_require__) {
        {
          module2.exports = Emitter;
        }
        function Emitter(obj) {
          if (obj)
            return mixin(obj);
        }
        function mixin(obj) {
          for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
          }
          return obj;
        }
        Emitter.prototype.on = Emitter.prototype.addEventListener = function(event2, fn) {
          this._callbacks = this._callbacks || {};
          (this._callbacks["$" + event2] = this._callbacks["$" + event2] || []).push(fn);
          return this;
        };
        Emitter.prototype.once = function(event2, fn) {
          function on() {
            this.off(event2, on);
            fn.apply(this, arguments);
          }
          on.fn = fn;
          this.on(event2, on);
          return this;
        };
        Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event2, fn) {
          this._callbacks = this._callbacks || {};
          if (arguments.length == 0) {
            this._callbacks = {};
            return this;
          }
          var callbacks = this._callbacks["$" + event2];
          if (!callbacks)
            return this;
          if (arguments.length == 1) {
            delete this._callbacks["$" + event2];
            return this;
          }
          var cb;
          for (var i2 = 0; i2 < callbacks.length; i2++) {
            cb = callbacks[i2];
            if (cb === fn || cb.fn === fn) {
              callbacks.splice(i2, 1);
              break;
            }
          }
          if (callbacks.length === 0) {
            delete this._callbacks["$" + event2];
          }
          return this;
        };
        Emitter.prototype.emit = function(event2) {
          this._callbacks = this._callbacks || {};
          var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event2];
          for (var i2 = 1; i2 < arguments.length; i2++) {
            args[i2 - 1] = arguments[i2];
          }
          if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
              callbacks[i2].apply(this, args);
            }
          }
          return this;
        };
        Emitter.prototype.listeners = function(event2) {
          this._callbacks = this._callbacks || {};
          return this._callbacks["$" + event2] || [];
        };
        Emitter.prototype.hasListeners = function(event2) {
          return !!this.listeners(event2).length;
        };
      },
      function(module2, exports2) {
        module2.exports = stringify;
        stringify.default = stringify;
        stringify.stable = deterministicStringify;
        stringify.stableStringify = deterministicStringify;
        var arr = [];
        var replacerStack = [];
        function stringify(obj, replacer, spacer) {
          decirc(obj, "", [], void 0);
          var res;
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
          return res;
        }
        function decirc(val, k, stack, parent) {
          var i2;
          if (typeof val === "object" && val !== null) {
            for (i2 = 0; i2 < stack.length; i2++) {
              if (stack[i2] === val) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
                if (propertyDescriptor.get !== void 0) {
                  if (propertyDescriptor.configurable) {
                    Object.defineProperty(parent, k, { value: "[Circular]" });
                    arr.push([parent, k, val, propertyDescriptor]);
                  } else {
                    replacerStack.push([val, k]);
                  }
                } else {
                  parent[k] = "[Circular]";
                  arr.push([parent, k, val]);
                }
                return;
              }
            }
            stack.push(val);
            if (Array.isArray(val)) {
              for (i2 = 0; i2 < val.length; i2++) {
                decirc(val[i2], i2, stack, val);
              }
            } else {
              var keys = Object.keys(val);
              for (i2 = 0; i2 < keys.length; i2++) {
                var key = keys[i2];
                decirc(val[key], key, stack, val);
              }
            }
            stack.pop();
          }
        }
        function compareFunction(a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        }
        function deterministicStringify(obj, replacer, spacer) {
          var tmp = deterministicDecirc(obj, "", [], void 0) || obj;
          var res;
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
          return res;
        }
        function deterministicDecirc(val, k, stack, parent) {
          var i2;
          if (typeof val === "object" && val !== null) {
            for (i2 = 0; i2 < stack.length; i2++) {
              if (stack[i2] === val) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
                if (propertyDescriptor.get !== void 0) {
                  if (propertyDescriptor.configurable) {
                    Object.defineProperty(parent, k, { value: "[Circular]" });
                    arr.push([parent, k, val, propertyDescriptor]);
                  } else {
                    replacerStack.push([val, k]);
                  }
                } else {
                  parent[k] = "[Circular]";
                  arr.push([parent, k, val]);
                }
                return;
              }
            }
            if (typeof val.toJSON === "function") {
              return;
            }
            stack.push(val);
            if (Array.isArray(val)) {
              for (i2 = 0; i2 < val.length; i2++) {
                deterministicDecirc(val[i2], i2, stack, val);
              }
            } else {
              var tmp = {};
              var keys = Object.keys(val).sort(compareFunction);
              for (i2 = 0; i2 < keys.length; i2++) {
                var key = keys[i2];
                deterministicDecirc(val[key], key, stack, val);
                tmp[key] = val[key];
              }
              if (parent !== void 0) {
                arr.push([parent, k, val]);
                parent[k] = tmp;
              } else {
                return tmp;
              }
            }
            stack.pop();
          }
        }
        function replaceGetterValues(replacer) {
          replacer = replacer !== void 0 ? replacer : function(k, v) {
            return v;
          };
          return function(key, val) {
            if (replacerStack.length > 0) {
              for (var i2 = 0; i2 < replacerStack.length; i2++) {
                var part = replacerStack[i2];
                if (part[1] === key && part[0] === val) {
                  val = "[Circular]";
                  replacerStack.splice(i2, 1);
                  break;
                }
              }
            }
            return replacer.call(this, key, val);
          };
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _promise = __webpack_require__(3);
        var _promise2 = _interopRequireDefault(_promise);
        var _iterator = __webpack_require__(61);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _typeof3 = __webpack_require__(30);
        var _typeof4 = _interopRequireDefault(_typeof3);
        var _symbol = __webpack_require__(51);
        var _symbol2 = _interopRequireDefault(_symbol);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
            };
          }
          return _typeof(obj);
        }
        var isObject2 = __webpack_require__(170);
        module2.exports = RequestBase;
        function RequestBase(obj) {
          if (obj)
            return mixin(obj);
        }
        function mixin(obj) {
          for (var key in RequestBase.prototype) {
            if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key))
              obj[key] = RequestBase.prototype[key];
          }
          return obj;
        }
        RequestBase.prototype.clearTimeout = function() {
          clearTimeout(this._timer);
          clearTimeout(this._responseTimeoutTimer);
          clearTimeout(this._uploadTimeoutTimer);
          delete this._timer;
          delete this._responseTimeoutTimer;
          delete this._uploadTimeoutTimer;
          return this;
        };
        RequestBase.prototype.parse = function(fn) {
          this._parser = fn;
          return this;
        };
        RequestBase.prototype.responseType = function(val) {
          this._responseType = val;
          return this;
        };
        RequestBase.prototype.serialize = function(fn) {
          this._serializer = fn;
          return this;
        };
        RequestBase.prototype.timeout = function(options) {
          if (!options || _typeof(options) !== "object") {
            this._timeout = options;
            this._responseTimeout = 0;
            this._uploadTimeout = 0;
            return this;
          }
          for (var option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option)) {
              switch (option) {
                case "deadline":
                  this._timeout = options.deadline;
                  break;
                case "response":
                  this._responseTimeout = options.response;
                  break;
                case "upload":
                  this._uploadTimeout = options.upload;
                  break;
                default:
                  console.warn("Unknown timeout option", option);
              }
            }
          }
          return this;
        };
        RequestBase.prototype.retry = function(count, fn) {
          if (arguments.length === 0 || count === true)
            count = 1;
          if (count <= 0)
            count = 0;
          this._maxRetries = count;
          this._retries = 0;
          this._retryCallback = fn;
          return this;
        };
        var ERROR_CODES = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        RequestBase.prototype._shouldRetry = function(err, res) {
          if (!this._maxRetries || this._retries++ >= this._maxRetries) {
            return false;
          }
          if (this._retryCallback) {
            try {
              var override = this._retryCallback(err, res);
              if (override === true)
                return true;
              if (override === false)
                return false;
            } catch (err_) {
              console.error(err_);
            }
          }
          if (res && res.status && res.status >= 500 && res.status !== 501)
            return true;
          if (err) {
            if (err.code && ERROR_CODES.includes(err.code))
              return true;
            if (err.timeout && err.code === "ECONNABORTED")
              return true;
            if (err.crossDomain)
              return true;
          }
          return false;
        };
        RequestBase.prototype._retry = function() {
          this.clearTimeout();
          if (this.req) {
            this.req = null;
            this.req = this.request();
          }
          this._aborted = false;
          this.timedout = false;
          this.timedoutError = null;
          return this._end();
        };
        RequestBase.prototype.then = function(resolve, reject) {
          var _this = this;
          if (!this._fullfilledPromise) {
            var self2 = this;
            if (this._endCalled) {
              console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
            }
            this._fullfilledPromise = new _promise2.default(function(resolve2, reject2) {
              self2.on("abort", function() {
                if (_this._maxRetries && _this._maxRetries > _this._retries) {
                  return;
                }
                if (_this.timedout && _this.timedoutError) {
                  reject2(_this.timedoutError);
                  return;
                }
                var err = new Error("Aborted");
                err.code = "ABORTED";
                err.status = _this.status;
                err.method = _this.method;
                err.url = _this.url;
                reject2(err);
              });
              self2.end(function(err, res) {
                if (err)
                  reject2(err);
                else
                  resolve2(res);
              });
            });
          }
          return this._fullfilledPromise.then(resolve, reject);
        };
        RequestBase.prototype.catch = function(cb) {
          return this.then(void 0, cb);
        };
        RequestBase.prototype.use = function(fn) {
          fn(this);
          return this;
        };
        RequestBase.prototype.ok = function(cb) {
          if (typeof cb !== "function")
            throw new Error("Callback required");
          this._okCallback = cb;
          return this;
        };
        RequestBase.prototype._isResponseOK = function(res) {
          if (!res) {
            return false;
          }
          if (this._okCallback) {
            return this._okCallback(res);
          }
          return res.status >= 200 && res.status < 300;
        };
        RequestBase.prototype.get = function(field) {
          return this._header[field.toLowerCase()];
        };
        RequestBase.prototype.getHeader = RequestBase.prototype.get;
        RequestBase.prototype.set = function(field, val) {
          if (isObject2(field)) {
            for (var key in field) {
              if (Object.prototype.hasOwnProperty.call(field, key))
                this.set(key, field[key]);
            }
            return this;
          }
          this._header[field.toLowerCase()] = val;
          this.header[field] = val;
          return this;
        };
        RequestBase.prototype.unset = function(field) {
          delete this._header[field.toLowerCase()];
          delete this.header[field];
          return this;
        };
        RequestBase.prototype.field = function(name, val) {
          if (name === null || name === void 0) {
            throw new Error(".field(name, val) name can not be empty");
          }
          if (this._data) {
            throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
          }
          if (isObject2(name)) {
            for (var key in name) {
              if (Object.prototype.hasOwnProperty.call(name, key))
                this.field(key, name[key]);
            }
            return this;
          }
          if (Array.isArray(val)) {
            for (var i2 in val) {
              if (Object.prototype.hasOwnProperty.call(val, i2))
                this.field(name, val[i2]);
            }
            return this;
          }
          if (val === null || val === void 0) {
            throw new Error(".field(name, val) val can not be empty");
          }
          if (typeof val === "boolean") {
            val = String(val);
          }
          this._getFormData().append(name, val);
          return this;
        };
        RequestBase.prototype.abort = function() {
          if (this._aborted) {
            return this;
          }
          this._aborted = true;
          if (this.xhr)
            this.xhr.abort();
          if (this.req)
            this.req.abort();
          this.clearTimeout();
          this.emit("abort");
          return this;
        };
        RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
          switch (options.type) {
            case "basic":
              this.set("Authorization", "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
              break;
            case "auto":
              this.username = user;
              this.password = pass;
              break;
            case "bearer":
              this.set("Authorization", "Bearer ".concat(user));
              break;
          }
          return this;
        };
        RequestBase.prototype.withCredentials = function(on) {
          if (on === void 0)
            on = true;
          this._withCredentials = on;
          return this;
        };
        RequestBase.prototype.redirects = function(n2) {
          this._maxRedirects = n2;
          return this;
        };
        RequestBase.prototype.maxResponseSize = function(n2) {
          if (typeof n2 !== "number") {
            throw new TypeError("Invalid argument");
          }
          this._maxResponseSize = n2;
          return this;
        };
        RequestBase.prototype.toJSON = function() {
          return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
          };
        };
        RequestBase.prototype.send = function(data2) {
          var isObj = isObject2(data2);
          var type = this._header["content-type"];
          if (this._formData) {
            throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
          }
          if (isObj && !this._data) {
            if (Array.isArray(data2)) {
              this._data = [];
            } else if (!this._isHost(data2)) {
              this._data = {};
            }
          } else if (data2 && this._data && this._isHost(this._data)) {
            throw new Error("Can't merge these send calls");
          }
          if (isObj && isObject2(this._data)) {
            for (var key in data2) {
              if (Object.prototype.hasOwnProperty.call(data2, key))
                this._data[key] = data2[key];
            }
          } else if (typeof data2 === "string") {
            if (!type)
              this.type("form");
            type = this._header["content-type"];
            if (type === "application/x-www-form-urlencoded") {
              this._data = this._data ? "".concat(this._data, "&").concat(data2) : data2;
            } else {
              this._data = (this._data || "") + data2;
            }
          } else {
            this._data = data2;
          }
          if (!isObj || this._isHost(data2)) {
            return this;
          }
          if (!type)
            this.type("json");
          return this;
        };
        RequestBase.prototype.sortQuery = function(sort) {
          this._sort = typeof sort === "undefined" ? true : sort;
          return this;
        };
        RequestBase.prototype._finalizeQueryString = function() {
          var query = this._query.join("&");
          if (query) {
            this.url += (this.url.includes("?") ? "&" : "?") + query;
          }
          this._query.length = 0;
          if (this._sort) {
            var index2 = this.url.indexOf("?");
            if (index2 >= 0) {
              var queryArr = this.url.slice(index2 + 1).split("&");
              if (typeof this._sort === "function") {
                queryArr.sort(this._sort);
              } else {
                queryArr.sort();
              }
              this.url = this.url.slice(0, index2) + "?" + queryArr.join("&");
            }
          }
        };
        RequestBase.prototype._appendQueryString = function() {
          console.warn("Unsupported");
        };
        RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
          if (this._aborted) {
            return;
          }
          var err = new Error("".concat(reason + timeout, "ms exceeded"));
          err.timeout = timeout;
          err.code = "ECONNABORTED";
          err.errno = errno;
          this.timedout = true;
          this.timedoutError = err;
          this.abort();
          this.callback(err);
        };
        RequestBase.prototype._setTimeouts = function() {
          var self2 = this;
          if (this._timeout && !this._timer) {
            this._timer = setTimeout(function() {
              self2._timeoutError("Timeout of ", self2._timeout, "ETIME");
            }, this._timeout);
          }
          if (this._responseTimeout && !this._responseTimeoutTimer) {
            this._responseTimeoutTimer = setTimeout(function() {
              self2._timeoutError("Response timeout of ", self2._responseTimeout, "ETIMEDOUT");
            }, this._responseTimeout);
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var utils2 = __webpack_require__(346);
        module2.exports = ResponseBase;
        function ResponseBase(obj) {
          if (obj)
            return mixin(obj);
        }
        function mixin(obj) {
          for (var key in ResponseBase.prototype) {
            if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key))
              obj[key] = ResponseBase.prototype[key];
          }
          return obj;
        }
        ResponseBase.prototype.get = function(field) {
          return this.header[field.toLowerCase()];
        };
        ResponseBase.prototype._setHeaderProperties = function(header) {
          var ct = header["content-type"] || "";
          this.type = utils2.type(ct);
          var params = utils2.params(ct);
          for (var key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key))
              this[key] = params[key];
          }
          this.links = {};
          try {
            if (header.link) {
              this.links = utils2.parseLinks(header.link);
            }
          } catch (_unused) {
          }
        };
        ResponseBase.prototype._setStatusProperties = function(status) {
          var type = status / 100 | 0;
          this.statusCode = status;
          this.status = this.statusCode;
          this.statusType = type;
          this.info = type === 1;
          this.ok = type === 2;
          this.redirect = type === 3;
          this.clientError = type === 4;
          this.serverError = type === 5;
          this.error = type === 4 || type === 5 ? this.toError() : false;
          this.created = status === 201;
          this.accepted = status === 202;
          this.noContent = status === 204;
          this.badRequest = status === 400;
          this.unauthorized = status === 401;
          this.notAcceptable = status === 406;
          this.forbidden = status === 403;
          this.notFound = status === 404;
          this.unprocessableEntity = status === 422;
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.type = function(str) {
          return str.split(/ *; */).shift();
        };
        exports2.params = function(str) {
          return str.split(/ *; */).reduce(function(obj, str2) {
            var parts = str2.split(/ *= */);
            var key = parts.shift();
            var val = parts.shift();
            if (key && val)
              obj[key] = val;
            return obj;
          }, {});
        };
        exports2.parseLinks = function(str) {
          return str.split(/ *, */).reduce(function(obj, str2) {
            var parts = str2.split(/ *; */);
            var url = parts[0].slice(1, -1);
            var rel = parts[1].split(/ *= */)[1].slice(1, -1);
            obj[rel] = url;
            return obj;
          }, {});
        };
        exports2.cleanHeader = function(header, changesOrigin) {
          delete header["content-type"];
          delete header["content-length"];
          delete header["transfer-encoding"];
          delete header.host;
          if (changesOrigin) {
            delete header.authorization;
            delete header.cookie;
          }
          return header;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _isIterable2 = __webpack_require__(169);
        var _isIterable3 = _interopRequireDefault(_isIterable2);
        var _symbol = __webpack_require__(51);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _from = __webpack_require__(348);
        var _from2 = _interopRequireDefault(_from);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o2, minLen) {
          if (!o2)
            return;
          if (typeof o2 === "string")
            return _arrayLikeToArray(o2, minLen);
          var n2 = Object.prototype.toString.call(o2).slice(8, -1);
          if (n2 === "Object" && o2.constructor)
            n2 = o2.constructor.name;
          if (n2 === "Map" || n2 === "Set")
            return (0, _from2.default)(o2);
          if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return _arrayLikeToArray(o2, minLen);
        }
        function _iterableToArray(iter) {
          if (typeof _symbol2.default !== "undefined" && (0, _isIterable3.default)(Object(iter)))
            return (0, _from2.default)(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
            arr2[i2] = arr[i2];
          }
          return arr2;
        }
        function Agent() {
          this._defaults = [];
        }
        ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function(fn) {
          Agent.prototype[fn] = function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            this._defaults.push({
              fn,
              args
            });
            return this;
          };
        });
        Agent.prototype._setDefaults = function(req) {
          this._defaults.forEach(function(def) {
            req[def.fn].apply(req, _toConsumableArray(def.args));
          });
        };
        module2.exports = Agent;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(349), __esModule: true };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(39);
        __webpack_require__(350);
        module2.exports = __webpack_require__(2).Array.from;
      },
      function(module2, exports2, __webpack_require__) {
        var ctx = __webpack_require__(31);
        var $export = __webpack_require__(16);
        var toObject = __webpack_require__(44);
        var call = __webpack_require__(102);
        var isArrayIter = __webpack_require__(103);
        var toLength = __webpack_require__(67);
        var createProperty = __webpack_require__(351);
        var getIterFn = __webpack_require__(72);
        $export($export.S + $export.F * !__webpack_require__(108)(function(iter) {
          Array.from(iter);
        }), "Array", {
          from: function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : void 0;
            var mapping = mapfn !== void 0;
            var index2 = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping)
              mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
            if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
              for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index2++) {
                createProperty(result, index2, mapping ? call(iterator, mapfn, [step.value, index2], true) : step.value);
              }
            } else {
              length = toLength(O.length);
              for (result = new C(length); length > index2; index2++) {
                createProperty(result, index2, mapping ? mapfn(O[index2], index2) : O[index2]);
              }
            }
            result.length = index2;
            return result;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var $defineProperty = __webpack_require__(18);
        var createDesc = __webpack_require__(42);
        module2.exports = function(object, index2, value) {
          if (index2 in object)
            $defineProperty.f(object, index2, createDesc(0, value));
          else
            object[index2] = value;
        };
      }
    ]);
  });
})(av);
var AV = /* @__PURE__ */ getDefaultExportFromCjs(av.exports);
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i2)).toLowerCase();
    val = utils$9.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config.transitional || defaults$4.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw enhanceError2(e2, this, "E_JSON_PARSE");
          }
          throw e2;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.25.0"
};
var VERSION$1 = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  if (!config.url) {
    throw new Error("Provided config url is not valid");
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  if (!config.url) {
    throw new Error("Provided config url is not valid");
  }
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l2 = token._listeners.length;
    for (i2 = 0; i2 < l2; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index2 = this._listeners.indexOf(listener);
  if (index2 !== -1) {
    this._listeners.splice(index2, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$e;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
var index = "";
const VERSION = "1.4.16";
const defaultComment = {
  comment: "",
  nick: "Anonymous",
  mail: "",
  link: "",
  ua: navigator.userAgent,
  url: ""
};
const locales = {
  "zh-cn": {
    head: {
      nick: "\u6635\u79F0",
      mail: "\u90AE\u7BB1",
      link: "\u7F51\u5740(http://)"
    },
    tips: {
      comments: "\u8BC4\u8BBA",
      sofa: "\u5FEB\u6765\u505A\u7B2C\u4E00\u4E2A\u8BC4\u8BBA\u7684\u4EBA\u5427~",
      busy: "\u8FD8\u5728\u63D0\u4EA4\u4E2D\uFF0C\u8BF7\u7A0D\u5019...",
      again: "\u8FD9\u4E48\u7B80\u5355\u4E5F\u80FD\u9519\uFF0C\u4E5F\u662F\u6CA1\u8C01\u4E86."
    },
    ctrl: {
      reply: "\u56DE\u590D",
      ok: "\u597D\u7684",
      sure: "\u786E\u8BA4",
      cancel: "\u53D6\u6D88",
      confirm: "\u786E\u8BA4",
      continue: "\u7EE7\u7EED",
      more: "\u67E5\u770B\u66F4\u591A...",
      try: "\u518D\u8BD5\u8BD5?",
      preview: "\u9884\u89C8",
      emoji: "\u8868\u60C5"
    },
    error: {
      99: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5init\u4E2D\u7684`el`\u5143\u7D20.",
      100: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684AppId\u548CAppKey.",
      401: "\u672A\u7ECF\u6388\u6743\u7684\u64CD\u4F5C\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684AppId\u548CAppKey.",
      403: "\u8BBF\u95EE\u88ABapi\u57DF\u540D\u767D\u540D\u5355\u62D2\u7EDD\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u5B89\u5168\u57DF\u540D\u8BBE\u7F6E."
    },
    timeago: {
      seconds: "\u79D2\u524D",
      minutes: "\u5206\u949F\u524D",
      hours: "\u5C0F\u65F6\u524D",
      days: "\u5929\u524D",
      now: "\u521A\u521A"
    }
  },
  en: {
    head: {
      nick: "NickName",
      mail: "E-Mail",
      link: "Website(http://)"
    },
    tips: {
      comments: "Comments",
      sofa: "No comments yet.",
      busy: "Submit is busy, please wait...",
      again: "Sorry, this is a wrong calculation."
    },
    ctrl: {
      reply: "Reply",
      ok: "Ok",
      sure: "Sure",
      cancel: "Cancel",
      confirm: "Confirm",
      continue: "Continue",
      more: "Load More...",
      try: "Once More?",
      preview: "Preview",
      emoji: "Emoji"
    },
    error: {
      99: "Initialization failed, Please check the `el` element in the init method.",
      100: "Initialization failed, Please check your appId and appKey.",
      401: "Unauthorized operation, Please check your appId and appKey.",
      403: "Access denied by api domain white list, Please check your security domain."
    },
    timeago: {
      seconds: "seconds ago",
      minutes: "minutes ago",
      hours: "hours ago",
      days: "days ago",
      now: "just now"
    }
  }
};
let _avatarSetting = {
  cdn: "https://gravatar.loli.net/avatar/",
  ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
  params: "",
  hide: false
}, META = ["nick", "mail", "link"], _store = Storage && localStorage && localStorage instanceof Storage && localStorage;
function ValineFactory(option) {
  let root = this;
  root.init(option);
  return root;
}
ValineFactory.prototype.init = function(option) {
  let root = this;
  root["config"] = option;
  if (typeof document === "undefined") {
    console && console.warn("Sorry, Valine does not support Server-side rendering.");
    return;
  }
  !!option && root._init();
  return root;
};
ValineFactory.prototype._init = function() {
  let root = this;
  try {
    let {
      lang,
      langMode,
      avatar,
      avatarForce,
      avatar_cdn,
      notify,
      verify,
      visitor,
      path = location.pathname,
      pageSize,
      recordIP,
      clazzName = "Comment",
      gotapiNotifierChannel
    } = root.config;
    root["config"]["path"] = path.replace(/index\.html?$/, "");
    root["config"]["clazzName"] = clazzName;
    let ds = _avatarSetting["ds"];
    let force = avatarForce ? "&q=" + Math.random().toString(32).substring(2) : "";
    lang && langMode && root.installLocale(lang, langMode);
    root.locale = root.locale || locales[lang || "zh-cn"];
    root.notify = notify || false;
    root.verify = verify || false;
    _avatarSetting["params"] = `?d=${ds.indexOf(avatar) > -1 ? avatar : "mp"}&v=${VERSION}${force}`;
    _avatarSetting["hide"] = avatar === "hide" ? true : false;
    _avatarSetting["cdn"] = /^https?\:\/\//.test(avatar_cdn) ? avatar_cdn : _avatarSetting["cdn"];
    let size = Number(pageSize || 10);
    root.config.pageSize = !isNaN(size) ? size < 1 ? 10 : size : 10;
    if (recordIP) {
      let ipScript = utils$f.create("script", "src", "//api.ip.sb/jsonip?callback=getIP");
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ipScript, s);
      window.getIP = function(json) {
        defaultComment["ip"] = json.ip;
      };
    }
    let id = root.config.app_id || root.config.appId;
    root.config.gotapiNotifierChannel = gotapiNotifierChannel || "/valine-comment/notifier/" + id;
    console.log("gotapi-ws listen on wss://ws.gotapi.net" + root.config.gotapiNotifierChannel);
    let key = root.config.app_key || root.config.appKey;
    if (!id || !key)
      throw 99;
    let prefix = "https://";
    let serverURLs = "";
    if (!root.config["serverURLs"]) {
      switch (id.slice(-9)) {
        case "-9Nh9j0Va":
          prefix += "tab.";
          break;
        case "-MdYXbMMI":
          prefix += "us.";
          break;
        default:
          break;
      }
    }
    serverURLs = root.config["serverURLs"] || prefix + "avoscloud.com";
    try {
      AV.init({
        appId: id,
        appKey: key,
        serverURLs
      });
    } catch (ex) {
    }
    let els = utils$f.findAll(document, ".valine-comment-count");
    utils$f.each(els, (idx, el2) => {
      if (el2) {
        let k = utils$f.attr(el2, "data-xid");
        if (k) {
          root.Q(k).count().then((n2) => {
            el2.innerText = n2;
          }).catch((ex) => {
            el2.innerText = 0;
          });
        }
      }
    });
    visitor && CounterFactory.add(AV.Object.extend("Counter"), root.config.path);
    let el = root.config.el || null;
    let _el = utils$f.findAll(document, el);
    el = el instanceof HTMLElement ? el : _el[_el.length - 1] || null;
    if (!el)
      return;
    root.el = el;
    try {
      root.el.classList.add("v");
    } catch (ex) {
      root.el.setAttribute("class", root.el.getAttribute("class") + " v");
    }
    _avatarSetting["hide"] && root.el.classList.add("hide-avatar");
    root.config.meta = (root.config.guest_info || root.config.meta || META).filter((item) => META.indexOf(item) > -1);
    let inputEl = (root.config.meta.length == 0 ? META : root.config.meta).map((item) => {
      let _t = item == "mail" ? "email" : "text";
      return META.indexOf(item) > -1 ? `<input name="${item}" placeholder="${root.locale["head"][item]}" class="v${item} vinput" type="${_t}">` : "";
    });
    root.placeholder = root.config.placeholder || "Just Go Go";
    root.el.innerHTML = `<div class="vwrap"><div class="${`vheader item${inputEl.length}`}">${inputEl.join("")}</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="${root.placeholder}"></textarea><div class="vctrl"><span class="vemoji-btn">${root.locale["ctrl"]["emoji"]}</span> | <span class="vpreview-btn">${root.locale["ctrl"]["preview"]}</span></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-20" title="Markdown is supported"><a href="https://segmentfault.com/markdown" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="col col-80 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">${root.locale["ctrl"]["reply"]}</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><div class="vlist"></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center"></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v${VERSION}</div></div>`;
    let vempty = utils$f.find(root.el, ".vempty");
    root.nodata = {
      show(txt) {
        vempty.innerHTML = txt || root.locale["tips"]["sofa"];
        utils$f.attr(vempty, "style", "display:block;");
        return root;
      },
      hide() {
        utils$f.attr(vempty, "style", "display:none;");
        return root;
      }
    };
    let _spinner = utils$f.create("div", "class", "vloading");
    let _vlist = utils$f.find(root.el, ".vlist");
    root.loading = {
      show(mt) {
        let _vlis = utils$f.findAll(_vlist, ".vcard");
        if (mt)
          _vlist.insertBefore(_spinner, _vlis[0]);
        else
          _vlist.appendChild(_spinner);
        root.nodata.hide();
        return root;
      },
      hide() {
        let _loading = utils$f.find(_vlist, ".vloading");
        if (_loading)
          utils$f.remove(_loading);
        utils$f.findAll(_vlist, ".vcard").length === 0 && root.nodata.show();
        return root;
      }
    };
    let _mark = utils$f.find(root.el, ".vmark");
    root.alert = {
      show(o2) {
        _mark.innerHTML = `<div class="valert txt-center"><div class="vtext">${o2 && o2.text || 1}</div><div class="vbtns"></div></div>`;
        let _vbtns = utils$f.find(_mark, ".vbtns");
        let _cBtn = `<button class="vcancel vbtn">${o2 && o2.ctxt || root.locale["ctrl"]["cancel"]}</button>`;
        let _oBtn = `<button class="vsure vbtn">${o2 && o2.otxt || root.locale["ctrl"]["sure"]}</button>`;
        _vbtns.innerHTML = `${_cBtn}${o2 && o2.type && _oBtn}`;
        utils$f.on("click", utils$f.find(_mark, ".vcancel"), (e2) => {
          root.alert.hide();
        });
        utils$f.attr(_mark, "style", "display:block;");
        if (o2 && o2.type) {
          let _ok = utils$f.find(_mark, ".vsure");
          utils$f.on("click", _ok, (e2) => {
            root.alert.hide();
            o2.cb && o2.cb();
          });
        }
        return root;
      },
      hide() {
        utils$f.attr(_mark, "style", "display:none;");
        return root;
      }
    };
    root.bind();
  } catch (ex) {
    root.ErrorHandler(ex, "init");
  }
};
let createCounter = function(Counter, o2) {
  let newCounter = new Counter();
  let acl = new AV.ACL();
  acl.setPublicReadAccess(true);
  acl.setPublicWriteAccess(true);
  newCounter.setACL(acl);
  newCounter.set("url", o2.url);
  newCounter.set("xid", o2.xid);
  newCounter.set("title", o2.title);
  newCounter.set("time", 1);
  newCounter.save().then((ret) => {
    utils$f.find(o2.el, ".leancloud-visitors-count").innerText = 1;
  }).catch((ex) => {
    console.log(ex);
  });
};
let CounterFactory = {
  add(Counter, currPath) {
    let lvs = utils$f.findAll(document, ".leancloud_visitors,.leancloud-visitors");
    if (lvs.length) {
      let lv = lvs[0];
      let url = utils$f.attr(lv, "id");
      let title = utils$f.attr(lv, "data-flag-title");
      let xid = encodeURI(url);
      let o2 = {
        el: lv,
        url,
        xid,
        title
      };
      if (decodeURI(url) === decodeURI(currPath)) {
        let query = new AV.Query(Counter);
        query.equalTo("url", url);
        query.find().then((ret) => {
          if (ret.length > 0) {
            let v = ret[0];
            v.increment("time");
            v.save().then((rt) => {
              utils$f.find(lv, ".leancloud-visitors-count").innerText = rt.get("time");
            }).catch((ex) => {
              console.log(ex);
            });
          } else {
            createCounter(Counter, o2);
          }
        }).catch((ex) => {
          ex.code == 101 && createCounter(Counter, o2);
        });
      } else
        CounterFactory.show(Counter, lvs);
    }
  },
  show(Counter, lvs) {
    let COUNT_CONTAINER_REF = ".leancloud-visitors-count";
    utils$f.each(lvs, (idx, el) => {
      let cel = utils$f.find(el, COUNT_CONTAINER_REF);
      if (cel)
        cel.innerText = 0;
    });
    let urls = [];
    for (let i2 in lvs) {
      if (lvs.hasOwnProperty(i2))
        urls.push(utils$f.attr(lvs[i2], "id"));
    }
    if (urls.length) {
      let query = new AV.Query(Counter);
      query.containedIn("url", urls);
      query.find().then((ret) => {
        if (ret.length > 0) {
          utils$f.each(ret, (idx, item) => {
            let url = item.get("url");
            let time = item.get("time");
            let els = utils$f.findAll(document, `.leancloud_visitors[id="${url}"],.leancloud-visitors[id="${url}"]`);
            utils$f.each(els, (idx2, el) => {
              let cel = utils$f.find(el, COUNT_CONTAINER_REF);
              if (cel)
                cel.innerText = time;
            });
          });
        }
      }).catch((ex) => {
        console.error(ex);
      });
    }
  }
};
ValineFactory.prototype.Q = function(k) {
  let root = this;
  let len = arguments.length;
  if (len == 1) {
    let notExist = new AV.Query(root["config"]["clazzName"]);
    notExist.doesNotExist("rid");
    let isEmpty = new AV.Query(root["config"]["clazzName"]);
    isEmpty.equalTo("rid", "");
    let q = AV.Query.or(notExist, isEmpty);
    if (k === "*")
      q.exists("url");
    else
      q.equalTo("url", decodeURI(k));
    q.addDescending("createdAt");
    q.addDescending("insertedAt");
    return q;
  } else {
    let ids = JSON.stringify(arguments[1]).replace(/(\[|\])/g, "");
    let cql = `select * from ${root["config"]["clazzName"]} where rid in (${ids}) order by -createdAt,-createdAt`;
    return AV.Query.doCloudQuery(cql);
  }
};
ValineFactory.prototype.ErrorHandler = function(ex, origin) {
  console.log(origin);
  console.error(ex);
  console.error(ex.code, ex.message);
  let root = this;
  root.el && root.loading.hide().nodata.hide();
  if ({}.toString.call(ex) === "[object Error]") {
    let code = ex.code || "", t2 = root.locale["error"][code], msg = t2 || ex.message || ex.error || "";
    if (code == 101)
      root.nodata.show();
    else
      root.el && root.nodata.show(`<pre style="text-align:left;">Code ${code}: ${msg}</pre>`) || console && console.error(`Code ${code}: ${msg}`);
  } else {
    root.el && root.nodata.show(`<pre style="text-align:left;">${JSON.stringify(ex)}</pre>`) || console && console.error(JSON.stringify(ex));
  }
  return;
};
ValineFactory.prototype.installLocale = function(locale, mode) {
  let root = this;
  mode = mode || {};
  if (locale) {
    locales[locale] = mode;
    root.locale = locales[locale] || locales["zh-cn"];
  }
  return root;
};
ValineFactory.prototype.setPath = function(path) {
  this.config.path = path;
  return this;
};
ValineFactory.prototype.bind = function(option) {
  let root = this;
  let _vemojis = utils$f.find(root.el, ".vemojis");
  let _vpreview = utils$f.find(root.el, ".vpreview");
  let _emojiCtrl = utils$f.find(root.el, ".vemoji-btn");
  let _vpreviewCtrl = utils$f.find(root.el, `.vpreview-btn`);
  let _veditor = utils$f.find(root.el, ".veditor");
  let emojiData = Emoji.data;
  for (let key in emojiData) {
    if (emojiData.hasOwnProperty(key)) {
      (function(name, val) {
        let _i = utils$f.create("i", {
          "name": name,
          "title": name
        });
        _i.innerHTML = val;
        _vemojis.appendChild(_i);
        utils$f.on("click", _i, (e2) => {
          _insertAtCaret(_veditor, val);
          syncContentEvt(_veditor);
        });
      })(key, emojiData[key]);
    }
  }
  root.emoji = {
    show() {
      root.preview.hide();
      utils$f.attr(_emojiCtrl, "v", 1);
      utils$f.removeAttr(_vpreviewCtrl, "v");
      utils$f.attr(_vemojis, "style", "display:block");
      return root.emoji;
    },
    hide() {
      utils$f.removeAttr(_emojiCtrl, "v");
      utils$f.attr(_vemojis, "style", "display:hide");
      return root.emoji;
    }
  };
  root.preview = {
    show() {
      if (defaultComment["comment"]) {
        root.emoji.hide();
        utils$f.attr(_vpreviewCtrl, "v", 1);
        utils$f.removeAttr(_emojiCtrl, "v");
        _vpreview.innerHTML = defaultComment["comment"];
        utils$f.attr(_vpreview, "style", "display:block");
        _activeOtherFn();
      }
      return root.preview;
    },
    hide() {
      utils$f.removeAttr(_vpreviewCtrl, "v");
      utils$f.attr(_vpreview, "style", "display:none");
      return root.preview;
    },
    empty() {
      _vpreview.innerHtml = "";
      return root.preview;
    }
  };
  let xssFilter = (content) => {
    let vNode = utils$f.create("div");
    vNode.insertAdjacentHTML("afterbegin", content);
    let ns = utils$f.findAll(vNode, "*");
    let rejectNodes = ["INPUT", "STYLE", "SCRIPT", "IFRAME", "FRAME", "AUDIO", "VIDEO", "EMBED", "META", "TITLE", "LINK"];
    let __replaceVal = (node, attr) => {
      let val = utils$f.attr(node, attr);
      val && utils$f.attr(node, attr, val.replace(/(javascript|eval)/ig, ""));
    };
    utils$f.each(ns, (idx, n2) => {
      if (n2.nodeType !== 1)
        return;
      if (rejectNodes.indexOf(n2.nodeName) > -1) {
        if (n2.nodeName === "INPUT" && utils$f.attr(n2, "type") === "checkbox")
          utils$f.attr(n2, "disabled", "disabled");
        else
          utils$f.remove(n2);
      }
      if (n2.nodeName === "A")
        __replaceVal(n2, "href");
      utils$f.clearAttr(n2);
    });
    return vNode.innerHTML;
  };
  let syncContentEvt = (_el) => {
    let _v = "comment";
    let _val = _el.value || "";
    _val = Emoji.parse(_val);
    _el.value = _val;
    let ret = xssFilter(_val);
    defaultComment[_v] = ret;
    _vpreview.innerHTML = ret;
    if (_val)
      d(_el);
    else
      d.destroy(_el);
  };
  utils$f.on("click", _emojiCtrl, (e2) => {
    let _vi = utils$f.attr(_emojiCtrl, "v");
    if (_vi)
      root.emoji.hide();
    else
      root.emoji.show();
  });
  utils$f.on("click", _vpreviewCtrl, function(e2) {
    let _vi = utils$f.attr(_vpreviewCtrl, "v");
    if (_vi)
      root.preview.hide();
    else
      root.preview.show();
  });
  let meta = root.config.meta;
  let inputs = {};
  let mapping = {
    veditor: "comment"
  };
  for (let i2 = 0, len = meta.length; i2 < len; i2++) {
    mapping[`v${meta[i2]}`] = meta[i2];
  }
  for (let i2 in mapping) {
    if (mapping.hasOwnProperty(i2)) {
      let _v = mapping[i2];
      let _el = utils$f.find(root.el, `.${i2}`);
      inputs[_v] = _el;
      _el && utils$f.on("input change blur", _el, (e2) => {
        if (_v === "comment")
          syncContentEvt(_el);
        else
          defaultComment[_v] = utils$f.escape(_el.value.replace(/(^\s*)|(\s*$)/g, "")).substring(0, 20);
      });
    }
  }
  let _insertAtCaret = (field, val) => {
    if (document.selection) {
      field.focus();
      let sel = document.selection.createRange();
      sel.text = val;
      field.focus();
    } else if (field.selectionStart || field.selectionStart == "0") {
      let startPos = field.selectionStart;
      let endPos = field.selectionEnd;
      let scrollTop = field.scrollTop;
      field.value = field.value.substring(0, startPos) + val + field.value.substring(endPos, field.value.length);
      field.focus();
      field.selectionStart = startPos + val.length;
      field.selectionEnd = startPos + val.length;
      field.scrollTop = scrollTop;
    } else {
      field.focus();
      field.value += val;
    }
  };
  let createVquote = (id) => {
    let vcontent = utils$f.find(root.el, ".vh[rootid='" + id + "']");
    let vquote = utils$f.find(vcontent, ".vquote");
    if (!vquote) {
      vquote = utils$f.create("div", "class", "vquote");
      vcontent.appendChild(vquote);
    }
    return vquote;
  };
  let query = (no = 1) => {
    let size = root.config.pageSize;
    let count = Number(utils$f.find(root.el, ".vnum").innerText);
    root.loading.show();
    let cq = root.Q(root.config.path);
    cq.limit(size);
    cq.skip((no - 1) * size);
    cq.find().then((rets) => {
      let len = rets.length;
      let rids = [];
      for (let i2 = 0; i2 < len; i2++) {
        let ret = rets[i2];
        rids.push(ret.id);
        insertDom(ret, utils$f.find(root.el, ".vlist"), true);
      }
      root.Q(root.config.path, rids).then((ret) => {
        let childs = ret && ret.results || [];
        for (let k = 0; k < childs.length; k++) {
          let child = childs[k];
          insertDom(child, createVquote(child.get("rid")));
        }
      });
      let _vpage = utils$f.find(root.el, ".vpage");
      _vpage.innerHTML = size * no < count ? `<button type="button" class="vmore vbtn">${root.locale["ctrl"]["more"]}</button>` : "";
      let _vmore = utils$f.find(_vpage, ".vmore");
      if (_vmore) {
        utils$f.on("click", _vmore, (e2) => {
          _vpage.innerHTML = "";
          query(++no);
        });
      }
      root.loading.hide();
    }).catch((ex) => {
      root.loading.hide().ErrorHandler(ex, "query");
    });
  };
  root.Q(root.config.path).count().then((num) => {
    if (num > 0) {
      utils$f.attr(utils$f.find(root.el, ".vinfo"), "style", "display:block;");
      utils$f.find(root.el, ".vcount").innerHTML = `<span class="vnum">${num}</span> ${root.locale["tips"]["comments"]}`;
      query();
    } else {
      root.loading.hide();
    }
  }).catch((ex) => {
    root.ErrorHandler(ex, "count");
  });
  let insertDom = (rt, node, mt) => {
    let _vcard = utils$f.create("div", {
      "class": "vcard",
      "id": rt.id
    });
    let _img = _avatarSetting["hide"] ? "" : `<img class="vimg" src="${_avatarSetting["cdn"] + md5(rt.get("mail")) + _avatarSetting["params"]}">`;
    let ua = rt.get("ua") || "";
    let uaMeta = "";
    if (ua) {
      ua = detect(ua);
      let browser = `<span class="vsys">${ua.browser} ${ua.version}</span>`;
      let os = `<span class="vsys">${ua.os} ${ua.osVersion}</span>`;
      uaMeta = `${browser} ${os}`;
    }
    if (root.config.path === "*")
      uaMeta = `<a href="${rt.get("url")}" class="vsys">${rt.get("url")}</a>`;
    let _nick = "";
    let _t = rt.get("link") ? /^https?\:\/\//.test(rt.get("link")) ? rt.get("link") : "http://" + rt.get("link") : "";
    _nick = _t ? `<a class="vnick" rel="nofollow" href="${_t}" target="_blank" >${rt.get("nick")}</a>` : `<span class="vnick">${rt.get("nick")}</span>`;
    _vcard.innerHTML = `${_img}
            <div class="vh" rootid=${rt.get("rid") || rt.id}>
                <div class="vhead">${_nick} ${uaMeta}</div>
                <div class="vmeta">
                    <span class="vtime">${timeAgo(rt.get("insertedAt") || rt.createdAt, root.locale)}</span>
                    <span class="vat">${root.locale["ctrl"]["reply"]}</span>
                </div>
                <div class="vcontent">
                    ${xssFilter(rt.get("comment"))}
                </div>
            </div>`;
    let _vat = utils$f.find(_vcard, ".vat");
    let _as = utils$f.findAll(_vcard, "a");
    for (let i2 = 0, len = _as.length; i2 < len; i2++) {
      let _a = _as[i2];
      if (_a && (utils$f.attr(_a, "class") || "").indexOf("at") == -1) {
        utils$f.attr(_a, {
          "target": "_blank",
          "rel": "nofollow"
        });
      }
    }
    let _vlis = utils$f.findAll(node, ".vcard");
    if (mt)
      node.appendChild(_vcard);
    else
      node.insertBefore(_vcard, _vlis[0]);
    let _vcontent = utils$f.find(_vcard, ".vcontent");
    if (_vcontent)
      expandEvt(_vcontent);
    if (_vat)
      bindAtEvt(_vat, rt);
    _activeOtherFn();
  };
  let _activeOtherFn = () => {
    setTimeout(function() {
      try {
        typeof MathJax !== "undefined" && MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        if (typeof hljs !== "undefined") {
          utils$f.each(utils$f.findAll("pre code"), function(i2, block) {
            hljs.highlightBlock(block);
          });
          utils$f.each(utils$f.findAll("code.hljs"), function(i2, block) {
            hljs.lineNumbersBlock(block);
          });
        }
      } catch (ex) {
      }
    }, 200);
  };
  let expandEvt = (el) => {
    setTimeout(function() {
      if (el.offsetHeight > 180) {
        el.classList.add("expand");
        utils$f.on("click", el, (e2) => {
          utils$f.attr(el, "class", "vcontent");
        });
      }
    });
  };
  let atData = {};
  let bindAtEvt = (el, rt) => {
    utils$f.on("click", el, (e2) => {
      let at = `@${utils$f.escape(rt.get("nick"))}`;
      atData = {
        "at": utils$f.escape(at) + " ",
        "rid": rt.get("rid") || rt.id,
        "pid": rt.id,
        "rmail": rt.get("mail")
      };
      utils$f.attr(inputs["comment"], "placeholder", at);
      inputs["comment"].focus();
    });
  };
  let getCache = () => {
    let s = _store && _store.ValineCache;
    if (s) {
      s = JSON.parse(s);
      let m = meta;
      for (let i2 in m) {
        let k = m[i2];
        utils$f.find(root.el, `.v${k}`).value = utils$f.unescape(s[k]);
        defaultComment[k] = s[k];
      }
    }
  };
  getCache();
  let reset = () => {
    defaultComment["comment"] = "";
    inputs["comment"].value = "";
    syncContentEvt(inputs["comment"]);
    utils$f.attr(inputs["comment"], "placeholder", root.placeholder);
    atData = {};
    root.preview.empty().hide();
  };
  let submitBtn = utils$f.find(root.el, ".vsubmit");
  let submitEvt = (e2) => {
    if (utils$f.attr(submitBtn, "disabled")) {
      root.alert.show({
        type: 0,
        text: `${root.locale["tips"]["busy"]}\u30FE(\u0E51\u2579\u25E1\u2579)\uFF89"`,
        ctxt: root.locale["ctrl"]["ok"]
      });
      return;
    }
    if (defaultComment["nick"].length < 3) {
      inputs["nick"].focus();
      return;
    }
    if (defaultComment["mail"].length < 6 || defaultComment["mail"].indexOf("@") < 1 || defaultComment["mail"].indexOf(".") < 3) {
      inputs["mail"].focus();
      return;
    }
    if (defaultComment["comment"] == "") {
      inputs["comment"].focus();
      return;
    }
    defaultComment["nick"] = defaultComment["nick"] || "Anonymous";
    if (root.notify || root.verify) {
      verifyEvt(commitEvt);
    } else {
      commitEvt();
    }
  };
  let getAcl = () => {
    let acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(false);
    return acl;
  };
  let commitEvt = () => {
    utils$f.attr(submitBtn, "disabled", true);
    root.loading.show(true);
    let Ct = AV.Object.extend(root.config.clazzName || "Comment");
    let comment = new Ct();
    defaultComment["url"] = decodeURI(root.config.path);
    defaultComment["insertedAt"] = new Date();
    if (atData["rid"]) {
      let pid = atData["pid"] || atData["rid"];
      comment.set("rid", atData["rid"]);
      comment.set("pid", pid);
      defaultComment["comment"] = defaultComment["comment"].replace("<p>", `<p><a class="at" href="#${pid}">${atData["at"]}</a> , `);
    }
    for (let i2 in defaultComment) {
      if (defaultComment.hasOwnProperty(i2)) {
        let _v = defaultComment[i2];
        comment.set(i2, _v);
      }
    }
    comment.setACL(getAcl());
    comment.save().then((ret) => {
      setTimeout(() => {
        try {
          axios.post("https://ws.gotapi.net" + root.config.gotapiNotifierChannel, {
            type: 2,
            uuid: Math.random() + "-" + Math.random(),
            body: {
              hash: "-",
              data: JSON.stringify(comment),
              sent: false
            }
          }).then((data2) => {
            console.log(data2);
          });
        } catch (e2) {
          console.log("unknown error while spread comment to gotapi");
          console.log(e2);
        }
      }, 10);
      setTimeout(() => {
        try {
          axios.post("https://404.ms/v2/api/newComment", comment).then((data2) => {
            console.log(data2);
          });
        } catch (e2) {
          console.log("unknown error while spread comment to gotapi");
          console.log(e2);
        }
      }, 10);
      defaultComment["nick"] != "Anonymous" && _store && _store.setItem("ValineCache", JSON.stringify({
        nick: defaultComment["nick"],
        link: defaultComment["link"],
        mail: defaultComment["mail"]
      }));
      let _count = utils$f.find(root.el, ".vnum");
      let num = 1;
      try {
        if (atData["rid"]) {
          let vquote = utils$f.find(root.el, '.vquote[rid="' + atData["rid"] + '"]') || createVquote(atData["rid"]);
          insertDom(ret, vquote, true);
        } else {
          if (_count) {
            num = Number(_count.innerText) + 1;
            _count.innerText = num;
          } else {
            utils$f.find(root.el, ".vcount").innerHTML = '<span class="num">1</span> ' + root.locale["tips"]["comments"];
          }
          insertDom(ret, utils$f.find(root.el, ".vlist"));
          root.config.pageSize++;
        }
        defaultComment["mail"] && signUp({
          username: defaultComment["nick"],
          mail: defaultComment["mail"]
        });
        atData["at"] && atData["rmail"] && root.notify && mailEvt({
          username: atData["at"].replace("@", ""),
          mail: atData["rmail"]
        });
        utils$f.removeAttr(submitBtn, "disabled");
        root.loading.hide();
        reset();
      } catch (ex) {
        root.ErrorHandler(ex, "save");
      }
    }).catch((ex) => {
      root.ErrorHandler(ex, "commitEvt");
    });
  };
  let verifyEvt = (fn) => {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let z = Math.floor(Math.random() * 10 + 1);
    let opt = ["+", "-", "x"];
    let o1 = opt[Math.floor(Math.random() * 3)];
    let o2 = opt[Math.floor(Math.random() * 3)];
    let expre = `${x}${o1}${y}${o2}${z}`;
    let subject = `${expre} = <input class='vcode vinput' >`;
    root.alert.show({
      type: 1,
      text: subject,
      ctxt: root.locale["ctrl"]["cancel"],
      otxt: root.locale["ctrl"]["ok"],
      cb() {
        let code = +utils$f.find(root.el, ".vcode").value;
        let ret = new Function(`return ${expre.replace(/x/g, "*")}`)();
        if (ret === code) {
          fn && fn();
        } else {
          root.alert.show({
            type: 1,
            text: `(T\uFF3FT)${root.locale["tips"]["again"]}`,
            ctxt: root.locale["ctrl"]["cancel"],
            otxt: root.locale["ctrl"]["try"],
            cb() {
              verifyEvt(fn);
              return;
            }
          });
        }
      }
    });
  };
  let signUp = (o2) => {
    let u = new AV.User();
    u.setUsername(o2.username);
    u.setPassword(o2.mail);
    u.setEmail(o2.mail);
    u.setACL(getAcl());
    return u.signUp();
  };
  let mailEvt = (o2) => {
    AV.User.requestPasswordReset(o2.mail).then((ret) => {
    }).catch((e2) => {
      if (e2.code == 1) {
        root.alert.show({
          type: 0,
          text: `\u30FE(\uFF4F\uFF65\u03C9\uFF65)\uFF89 At\u592A\u9891\u7E41\u5566\uFF0C\u63D0\u9192\u529F\u80FD\u6682\u65F6\u5B95\u673A\u3002<br>${e2.error}`,
          ctxt: root.locale["ctrl"]["ok"]
        });
      } else {
        signUp(o2).then((ret) => {
          mailEvt(o2);
        }).catch((x) => {
        });
      }
    });
  };
  utils$f.on("click", submitBtn, submitEvt);
  utils$f.on("keydown", document, function(e2) {
    e2 = event || e2;
    let keyCode = e2.keyCode || e2.which || e2.charCode;
    let ctrlKey = e2.ctrlKey || e2.metaKey;
    ctrlKey && keyCode === 13 && submitEvt();
    if (keyCode === 9) {
      let focus = document.activeElement.id || "";
      if (focus == "veditor") {
        e2.preventDefault();
        _insertAtCaret(_veditor, "    ");
      }
    }
  });
  utils$f.on("paste", document, (e2) => {
    let clipboardData = "clipboardData" in e2 ? e2.clipboardData : e2.originalEvent && e2.originalEvent.clipboardData || window.clipboardData;
    let items = clipboardData && clipboardData.items;
    let files = [];
    if (items && items.length > 0) {
      for (let i2 = 0; i2 < items.length; i2++) {
        if (items[i2].type.indexOf("image") !== -1) {
          files.push(items[i2].getAsFile());
          break;
        }
      }
      if (files.length) {
        for (let idx in files) {
          let file = files[idx], uploadText = `![Uploading ${file["name"]}]()`;
          _insertAtCaret(_veditor, uploadText);
          file && uploadImage(file, function(err, ret) {
            if (!err && ret)
              _veditor.value = _veditor.value.replace(uploadText, `\r
![${file["name"]}](${ret["data"]})`);
          });
        }
      }
    }
  });
  let uploadImage = (file, callback) => {
    let formData = new FormData();
    formData.append("file", file);
    let xhr2 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr2.onreadystatechange = function() {
      if (xhr2.readyState == 4 && xhr2.status == 200) {
        try {
          let json = JSON.parse(xhr2.responseText);
          callback && callback(null, json);
        } catch (err) {
          callback && callback(err);
        }
      } else {
        callback && callback(xhr2.status);
      }
    };
    xhr2.onerror = function(e2) {
      console.log(e2);
    };
    xhr2.open("POST", "https://imgkr.com/api/files/upload", true);
    xhr2.send(formData);
  };
};
function Valine(options) {
  return new ValineFactory(options);
}
export { Valine as default };
