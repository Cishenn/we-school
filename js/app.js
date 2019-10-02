(function () {

    // 拓展对象属性方法，默认不覆盖目标对象已存在的属性
    function extend(target, source, override) {
        for (var key in source) {
            (void 0 == target[key] || override) && (target[key] = source[key]);
        }
        return target;
    }


    var iTemplate = (function () {
        var template = function () {
        };
        template.prototype = {
            // 针对数组数据 iTemplate.makeList('<p a="{a}">{b}</p>', [{a:1,b:2},{a:22,b:33}] ) return '<p a="1">2</p><p a="22">33</p>'
            makeList: function (tpl, arr, fn) {
                var res = [], $10 = [], reg = /{(.+?)}/g, json2 = {}, index = 0;
                for (var el = 0; el < arr.length; el++) {
                    if (typeof fn === 'function') {
                        json2 = fn.call(this, el, arr[el], index++) || {};
                    }
                    res.push(
                        tpl.replace(reg, function ($1, $2) {
                            return ($2 in json2) ? json2[$2] : (undefined === arr[el][$2] ? '' : arr[el][$2]);
                        })
                    );
                }
                return res.join('');
            },
            // 针对单个数据 iTemplate.substitute('<p a="{a}">{b}</p>',{a:1,b:2}) return '<p a="1">2</p>'
            substitute: function (tpl, obj) {
                if (!(Object.prototype.toString.call(tpl) === '[object String]')) {
                    return '';
                }
                if (!(Object.prototype.toString.call(obj) === '[object Object]' && 'isPrototypeOf' in obj)) {
                    return tpl;
                }
                //    /\{([^{}]+)\}/g
                return tpl.replace(/\{(.*?)\}/igm, function (match, key) {
                    if (typeof obj[key] != 'undefined') {
                        return obj[key];
                    }
                    return '';
                });
            }
        };
        return new template();
    })();


    var Util = {
        // 获取url 参数 http://www.baidu.com/q?name=1&age=2 return {name:1,age:2}
        getUrlParams: function () {
            var href = location.href,
                arr = href.split('?'),
                result = {}, paramsArr;

            if (!arr[1]) {
                return result;
            }
            // paramsArr ['aa=1','bb=2']
            paramsArr = arr[1].split('&');
            for (var i = 0; i < paramsArr.length; i++) {
                var keys = paramsArr[i].split('=');
                result[keys[0]] = keys[1];
            }

            return result;

        }
    };


    window['IGrow'] = {
        renderResult:function(id,content){
            $('#' + id).html('<div class="result-container"><div class="no-result"></div><div class="result-content">'+content+'</div></div>')
        },
        ajax: function (options) {
            $.ajax({
                type: options.type || 'GET',
                url: options.url,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: options.data,
                success: function (res) {
                    if (res.code === 10000) {
                        options.success && options.success(res);
                    } else {
                        options.error && options.error(res);
                    }
                },
                error: function (res) {
                    options.error && options.error(res);
                }
            });
        },
        iTemplate: iTemplate,
        Util: Util
    };
})();


$(function () {
    $(window).on('scroll', function () {
        $(window).scrollTop() > 20 ? ($('.header').addClass('small'), $('body').removeClass('pt100').addClass('pt60')) :
            ($('.header').removeClass('small'), $('body').addClass('pt80').removeClass('pt60'));
    });
});
