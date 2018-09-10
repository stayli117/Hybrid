/*
 AngularJS v1.6.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (w) {
  'use strict';
  function oe(a) {
    if (B(a))
      u(a.objectMaxDepth) && (Mc.objectMaxDepth = Wb(a.objectMaxDepth) ? a.objectMaxDepth : NaN);
    else
      return Mc;
  }
  function Wb(a) {
    return Y(a) && 0 < a;
  }
  function K(a, b) {
    b = b || Error;
    return function () {
      var d = arguments[0], c;
      c = '[' + (a ? a + ':' : '') + d + '] http://errors.angularjs.org/1.6.9/' + (a ? a + '/' : '') + d;
      for (d = 1; d < arguments.length; d++) {
        c = c + (1 == d ? '?' : '&') + 'p' + (d - 1) + '=';
        var e = encodeURIComponent, f;
        f = arguments[d];
        f = 'function' == typeof f ? f.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof f ? 'undefined' : 'string' != typeof f ? JSON.stringify(f) : f;
        c += e(f);
      }
      return new b(c);
    };
  }
  function wa(a) {
    if (null == a || Za(a))
      return !1;
    if (I(a) || E(a) || z && a instanceof z)
      return !0;
    var b = 'length' in Object(a) && a.length;
    return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || 'function' === typeof a.item);
  }
  function r(a, b, d) {
    var c, e;
    if (a)
      if (C(a))
        for (c in a)
          'prototype' !== c && 'length' !== c && 'name' !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
      else if (I(a) || wa(a)) {
        var f = 'object' !== typeof a;
        c = 0;
        for (e = a.length; c < e; c++)
          (f || c in a) && b.call(d, a[c], c, a);
      } else if (a.forEach && a.forEach !== r)
        a.forEach(b, d, a);
      else if (Nc(a))
        for (c in a)
          b.call(d, a[c], c, a);
      else if ('function' === typeof a.hasOwnProperty)
        for (c in a)
          a.hasOwnProperty(c) && b.call(d, a[c], c, a);
      else
        for (c in a)
          ra.call(a, c) && b.call(d, a[c], c, a);
    return a;
  }
  function Oc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)
      b.call(d, a[c[e]], c[e]);
    return c;
  }
  function Xb(a) {
    return function (b, d) {
      a(d, b);
    };
  }
  function pe() {
    return ++qb;
  }
  function Yb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];
      if (B(g) || C(g))
        for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
          var m = h[k], p = g[m];
          d && B(p) ? fa(p) ? a[m] = new Date(p.valueOf()) : $a(p) ? a[m] = new RegExp(p) : p.nodeName ? a[m] = p.cloneNode(!0) : Zb(p) ? a[m] = p.clone() : (B(a[m]) || (a[m] = I(p) ? [] : {}), Yb(a[m], [p], !0)) : a[m] = p;
        }
    }
    c ? a.$$hashKey = c : delete a.$$hashKey;
    return a;
  }
  function O(a) {
    return Yb(a, xa.call(arguments, 1), !1);
  }
  function qe(a) {
    return Yb(a, xa.call(arguments, 1), !0);
  }
  function Z(a) {
    return parseInt(a, 10);
  }
  function $b(a, b) {
    return O(Object.create(a), b);
  }
  function D() {
  }
  function ab(a) {
    return a;
  }
  function la(a) {
    return function () {
      return a;
    };
  }
  function ac(a) {
    return C(a.toString) && a.toString !== ia;
  }
  function x(a) {
    return 'undefined' === typeof a;
  }
  function u(a) {
    return 'undefined' !== typeof a;
  }
  function B(a) {
    return null !== a && 'object' === typeof a;
  }
  function Nc(a) {
    return null !== a && 'object' === typeof a && !Pc(a);
  }
  function E(a) {
    return 'string' === typeof a;
  }
  function Y(a) {
    return 'number' === typeof a;
  }
  function fa(a) {
    return '[object Date]' === ia.call(a);
  }
  function bc(a) {
    switch (ia.call(a)) {
    case '[object Error]':
      return !0;
    case '[object Exception]':
      return !0;
    case '[object DOMException]':
      return !0;
    default:
      return a instanceof Error;
    }
  }
  function C(a) {
    return 'function' === typeof a;
  }
  function $a(a) {
    return '[object RegExp]' === ia.call(a);
  }
  function Za(a) {
    return a && a.window === a;
  }
  function bb(a) {
    return a && a.$evalAsync && a.$watch;
  }
  function Na(a) {
    return 'boolean' === typeof a;
  }
  function re(a) {
    return a && Y(a.length) && se.test(ia.call(a));
  }
  function Zb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }
  function te(a) {
    var b = {};
    a = a.split(',');
    var d;
    for (d = 0; d < a.length; d++)
      b[a[d]] = !0;
    return b;
  }
  function ya(a) {
    return L(a.nodeName || a[0] && a[0].nodeName);
  }
  function cb(a, b) {
    var d = a.indexOf(b);
    0 <= d && a.splice(d, 1);
    return d;
  }
  function pa(a, b, d) {
    function c(a, b, c) {
      c--;
      if (0 > c)
        return '...';
      var d = b.$$hashKey, g;
      if (I(a)) {
        g = 0;
        for (var f = a.length; g < f; g++)
          b.push(e(a[g], c));
      } else if (Nc(a))
        for (g in a)
          b[g] = e(a[g], c);
      else if (a && 'function' === typeof a.hasOwnProperty)
        for (g in a)
          a.hasOwnProperty(g) && (b[g] = e(a[g], c));
      else
        for (g in a)
          ra.call(a, g) && (b[g] = e(a[g], c));
      d ? b.$$hashKey = d : delete b.$$hashKey;
      return b;
    }
    function e(a, b) {
      if (!B(a))
        return a;
      var d = g.indexOf(a);
      if (-1 !== d)
        return h[d];
      if (Za(a) || bb(a))
        throw qa('cpws');
      var d = !1, e = f(a);
      void 0 === e && (e = I(a) ? [] : Object.create(Pc(a)), d = !0);
      g.push(a);
      h.push(e);
      return d ? c(a, e, b) : e;
    }
    function f(a) {
      switch (ia.call(a)) {
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return new a.constructor(e(a.buffer), a.byteOffset, a.length);
      case '[object ArrayBuffer]':
        if (!a.slice) {
          var b = new ArrayBuffer(a.byteLength);
          new Uint8Array(b).set(new Uint8Array(a));
          return b;
        }
        return a.slice(0);
      case '[object Boolean]':
      case '[object Number]':
      case '[object String]':
      case '[object Date]':
        return new a.constructor(a.valueOf());
      case '[object RegExp]':
        return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
      case '[object Blob]':
        return new a.constructor([a], { type: a.type });
      }
      if (C(a.cloneNode))
        return a.cloneNode(!0);
    }
    var g = [], h = [];
    d = Wb(d) ? d : NaN;
    if (b) {
      if (re(b) || '[object ArrayBuffer]' === ia.call(b))
        throw qa('cpta');
      if (a === b)
        throw qa('cpi');
      I(b) ? b.length = 0 : r(b, function (a, c) {
        '$$hashKey' !== c && delete b[c];
      });
      g.push(a);
      h.push(b);
      return c(a, b, d);
    }
    return e(a, d);
  }
  function cc(a, b) {
    return a === b || a !== a && b !== b;
  }
  function sa(a, b) {
    if (a === b)
      return !0;
    if (null === a || null === b)
      return !1;
    if (a !== a && b !== b)
      return !0;
    var d = typeof a, c;
    if (d === typeof b && 'object' === d)
      if (I(a)) {
        if (!I(b))
          return !1;
        if ((d = a.length) === b.length) {
          for (c = 0; c < d; c++)
            if (!sa(a[c], b[c]))
              return !1;
          return !0;
        }
      } else {
        if (fa(a))
          return fa(b) ? cc(a.getTime(), b.getTime()) : !1;
        if ($a(a))
          return $a(b) ? a.toString() === b.toString() : !1;
        if (bb(a) || bb(b) || Za(a) || Za(b) || I(b) || fa(b) || $a(b))
          return !1;
        d = S();
        for (c in a)
          if ('$' !== c.charAt(0) && !C(a[c])) {
            if (!sa(a[c], b[c]))
              return !1;
            d[c] = !0;
          }
        for (c in b)
          if (!(c in d) && '$' !== c.charAt(0) && u(b[c]) && !C(b[c]))
            return !1;
        return !0;
      }
    return !1;
  }
  function db(a, b, d) {
    return a.concat(xa.call(b, d));
  }
  function Ra(a, b) {
    var d = 2 < arguments.length ? xa.call(arguments, 2) : [];
    return !C(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }
  function Qc(a, b) {
    var d = b;
    'string' === typeof a && '$' === a.charAt(0) && '$' === a.charAt(1) ? d = void 0 : Za(b) ? d = '$WINDOW' : b && w.document === b ? d = '$DOCUMENT' : bb(b) && (d = '$SCOPE');
    return d;
  }
  function eb(a, b) {
    if (!x(a))
      return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Qc, b);
  }
  function Rc(a) {
    return E(a) ? JSON.parse(a) : a;
  }
  function Sc(a, b) {
    a = a.replace(ue, '');
    var d = Date.parse('Jan 01, 1970 00:00:00 ' + a) / 60000;
    return U(d) ? b : d;
  }
  function dc(a, b, d) {
    d = d ? -1 : 1;
    var c = a.getTimezoneOffset();
    b = Sc(b, c);
    d *= b - c;
    a = new Date(a.getTime());
    a.setMinutes(a.getMinutes() + d);
    return a;
  }
  function za(a) {
    a = z(a).clone().empty();
    var b = z('<div>').append(a).html();
    try {
      return a[0].nodeType === Oa ? L(b) : b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
        return '<' + L(b);
      });
    } catch (d) {
      return L(b);
    }
  }
  function Tc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
    }
  }
  function ec(a) {
    var b = {};
    r((a || '').split('&'), function (a) {
      var c, e, f;
      a && (e = a = a.replace(/\+/g, '%20'), c = a.indexOf('='), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Tc(e), u(e) && (f = u(f) ? Tc(f) : !0, ra.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [
        b[e],
        f
      ] : b[e] = f));
    });
    return b;
  }
  function fc(a) {
    var b = [];
    r(a, function (a, c) {
      I(a) ? r(a, function (a) {
        b.push(ja(c, !0) + (!0 === a ? '' : '=' + ja(a, !0)));
      }) : b.push(ja(c, !0) + (!0 === a ? '' : '=' + ja(a, !0)));
    });
    return b.length ? b.join('&') : '';
  }
  function fb(a) {
    return ja(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function ja(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, b ? '%20' : '+');
  }
  function ve(a, b) {
    var d, c, e = Ha.length;
    for (c = 0; c < e; ++c)
      if (d = Ha[c] + b, E(d = a.getAttribute(d)))
        return d;
    return null;
  }
  function we(a, b) {
    var d, c, e = {};
    r(Ha, function (b) {
      b += 'app';
      !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });
    r(Ha, function (b) {
      b += 'app';
      var e;
      !d && (e = a.querySelector('[' + b.replace(':', '\\:') + ']')) && (d = e, c = e.getAttribute(b));
    });
    d && (xe ? (e.strictDi = null !== ve(d, 'strict-di'), b(d, c ? [c] : [], e)) : w.console.error('AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.'));
  }
  function Uc(a, b, d) {
    B(d) || (d = {});
    d = O({ strictDi: !1 }, d);
    var c = function () {
        a = z(a);
        if (a.injector()) {
          var c = a[0] === w.document ? 'document' : za(a);
          throw qa('btstrpd', c.replace(/</, '&lt;').replace(/>/, '&gt;'));
        }
        b = b || [];
        b.unshift([
          '$provide',
          function (b) {
            b.value('$rootElement', a);
          }
        ]);
        d.debugInfoEnabled && b.push([
          '$compileProvider',
          function (a) {
            a.debugInfoEnabled(!0);
          }
        ]);
        b.unshift('ng');
        c = gb(b, d.strictDi);
        c.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          function (a, b, c, d) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return c;
      }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
    w && e.test(w.name) && (d.debugInfoEnabled = !0, w.name = w.name.replace(e, ''));
    if (w && !f.test(w.name))
      return c();
    w.name = w.name.replace(f, '');
    $.resumeBootstrap = function (a) {
      r(a, function (a) {
        b.push(a);
      });
      return c();
    };
    C($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
  }
  function ye() {
    w.name = 'NG_ENABLE_DEBUG_INFO!' + w.name;
    w.location.reload();
  }
  function ze(a) {
    a = $.element(a).injector();
    if (!a)
      throw qa('test');
    return a.get('$$testability');
  }
  function Vc(a, b) {
    b = b || '_';
    return a.replace(Ae, function (a, c) {
      return (c ? b : '') + a.toLowerCase();
    });
  }
  function Be() {
    var a;
    if (!Wc) {
      var b = rb();
      (ma = x(b) ? w.jQuery : b ? w[b] : void 0) && ma.fn.on ? (z = ma, O(ma.fn, {
        scope: Sa.scope,
        isolateScope: Sa.isolateScope,
        controller: Sa.controller,
        injector: Sa.injector,
        inheritedData: Sa.inheritedData
      }), a = ma.cleanData, ma.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++)
          (c = ma._data(f, 'events')) && c.$destroy && ma(f).triggerHandler('$destroy');
        a(b);
      }) : z = V;
      $.element = z;
      Wc = !0;
    }
  }
  function hb(a, b, d) {
    if (!a)
      throw qa('areq', b || '?', d || 'required');
    return a;
  }
  function sb(a, b, d) {
    d && I(a) && (a = a[a.length - 1]);
    hb(C(a), b, 'not a function, got ' + (a && 'object' === typeof a ? a.constructor.name || 'Object' : typeof a));
    return a;
  }
  function Ia(a, b) {
    if ('hasOwnProperty' === a)
      throw qa('badname', b);
  }
  function Xc(a, b, d) {
    if (!b)
      return a;
    b = b.split('.');
    for (var c, e = a, f = b.length, g = 0; g < f; g++)
      c = b[g], a && (a = (e = a)[c]);
    return !d && C(a) ? Ra(e, a) : a;
  }
  function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
      if (c || a[e] !== b)
        c || (c = z(xa.call(a, 0, e))), c.push(b);
    return c || a;
  }
  function S() {
    return Object.create(null);
  }
  function gc(a) {
    if (null == a)
      return '';
    switch (typeof a) {
    case 'string':
      break;
    case 'number':
      a = '' + a;
      break;
    default:
      a = !ac(a) || I(a) || fa(a) ? eb(a) : a.toString();
    }
    return a;
  }
  function Ce(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }
    var d = K('$injector'), c = K('ng');
    a = b(a, 'angular', Object);
    a.$$minErr = a.$$minErr || K;
    return b(a, 'module', function () {
      var a = {};
      return function (f, g, h) {
        var k = {};
        if ('hasOwnProperty' === f)
          throw c('badname', 'module');
        g && a.hasOwnProperty(f) && (a[f] = null);
        return b(a, f, function () {
          function a(b, c, d, g) {
            g || (g = e);
            return function () {
              g[d || 'push']([
                b,
                c,
                arguments
              ]);
              return v;
            };
          }
          function b(a, c, d) {
            d || (d = e);
            return function (b, e) {
              e && C(e) && (e.$$moduleName = f);
              d.push([
                a,
                c,
                arguments
              ]);
              return v;
            };
          }
          if (!g)
            throw d('nomod', f);
          var e = [], n = [], F = [], s = a('$injector', 'invoke', 'push', n), v = {
              _invokeQueue: e,
              _configBlocks: n,
              _runBlocks: F,
              info: function (a) {
                if (u(a)) {
                  if (!B(a))
                    throw c('aobj', 'value');
                  k = a;
                  return this;
                }
                return k;
              },
              requires: g,
              name: f,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: a('$provide', 'value'),
              constant: a('$provide', 'constant', 'unshift'),
              decorator: b('$provide', 'decorator', n),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              component: b('$compileProvider', 'component'),
              config: s,
              run: function (a) {
                F.push(a);
                return this;
              }
            };
          h && s(h);
          return v;
        });
      };
    });
  }
  function ka(a, b) {
    if (I(a)) {
      b = b || [];
      for (var d = 0, c = a.length; d < c; d++)
        b[d] = a[d];
    } else if (B(a))
      for (d in b = b || {}, a)
        if ('$' !== d.charAt(0) || '$' !== d.charAt(1))
          b[d] = a[d];
    return b || a;
  }
  function De(a, b) {
    var d = [];
    Wb(b) && (a = $.copy(a, null, b));
    return JSON.stringify(a, function (a, b) {
      b = Qc(a, b);
      if (B(b)) {
        if (0 <= d.indexOf(b))
          return '...';
        d.push(b);
      }
      return b;
    });
  }
  function Ee(a) {
    O(a, {
      errorHandlingConfig: oe,
      bootstrap: Uc,
      copy: pa,
      extend: O,
      merge: qe,
      equals: sa,
      element: z,
      forEach: r,
      injector: gb,
      noop: D,
      bind: Ra,
      toJson: eb,
      fromJson: Rc,
      identity: ab,
      isUndefined: x,
      isDefined: u,
      isString: E,
      isFunction: C,
      isObject: B,
      isNumber: Y,
      isElement: Zb,
      isArray: I,
      version: Fe,
      isDate: fa,
      lowercase: L,
      uppercase: ub,
      callbacks: { $$counter: 0 },
      getTestability: ze,
      reloadWithDebugInfo: ye,
      $$minErr: K,
      $$csp: Ja,
      $$encodeUriSegment: fb,
      $$encodeUriQuery: ja,
      $$stringify: gc
    });
    ic = Ce(w);
    ic('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: Ge });
        a.provider('$compile', Yc).directive({
          a: He,
          input: Zc,
          textarea: Zc,
          form: Ie,
          script: Je,
          select: Ke,
          option: Le,
          ngBind: Me,
          ngBindHtml: Ne,
          ngBindTemplate: Oe,
          ngClass: Pe,
          ngClassEven: Qe,
          ngClassOdd: Re,
          ngCloak: Se,
          ngController: Te,
          ngForm: Ue,
          ngHide: Ve,
          ngIf: We,
          ngInclude: Xe,
          ngInit: Ye,
          ngNonBindable: Ze,
          ngPluralize: $e,
          ngRepeat: af,
          ngShow: bf,
          ngStyle: cf,
          ngSwitch: df,
          ngSwitchWhen: ef,
          ngSwitchDefault: ff,
          ngOptions: gf,
          ngTransclude: hf,
          ngModel: jf,
          ngList: kf,
          ngChange: lf,
          pattern: $c,
          ngPattern: $c,
          required: ad,
          ngRequired: ad,
          minlength: bd,
          ngMinlength: bd,
          maxlength: cd,
          ngMaxlength: cd,
          ngValue: mf,
          ngModelOptions: nf
        }).directive({ ngInclude: of }).directive(vb).directive(dd);
        a.provider({
          $anchorScroll: pf,
          $animate: qf,
          $animateCss: rf,
          $$animateJs: sf,
          $$animateQueue: tf,
          $$AnimateRunner: uf,
          $$animateAsyncRun: vf,
          $browser: wf,
          $cacheFactory: xf,
          $controller: yf,
          $document: zf,
          $$isDocumentHidden: Af,
          $exceptionHandler: Bf,
          $filter: ed,
          $$forceReflow: Cf,
          $interpolate: Df,
          $interval: Ef,
          $http: Ff,
          $httpParamSerializer: Gf,
          $httpParamSerializerJQLike: Hf,
          $httpBackend: If,
          $xhrFactory: Jf,
          $jsonpCallbacks: Kf,
          $location: Lf,
          $log: Mf,
          $parse: Nf,
          $rootScope: Of,
          $q: Pf,
          $$q: Qf,
          $sce: Rf,
          $sceDelegate: Sf,
          $sniffer: Tf,
          $templateCache: Uf,
          $templateRequest: Vf,
          $$testability: Wf,
          $timeout: Xf,
          $window: Yf,
          $$rAF: Zf,
          $$jqLite: $f,
          $$Map: ag,
          $$cookieReader: bg
        });
      }
    ]).info({ angularVersion: '1.6.9' });
  }
  function wb(a, b) {
    return b.toUpperCase();
  }
  function xb(a) {
    return a.replace(cg, wb);
  }
  function jc(a) {
    a = a.nodeType;
    return 1 === a || !a || 9 === a;
  }
  function fd(a, b) {
    var d, c, e = b.createDocumentFragment(), f = [];
    if (kc.test(a)) {
      d = e.appendChild(b.createElement('div'));
      c = (dg.exec(a) || [
        '',
        ''
      ])[1].toLowerCase();
      c = aa[c] || aa._default;
      d.innerHTML = c[1] + a.replace(eg, '<$1></$2>') + c[2];
      for (c = c[0]; c--;)
        d = d.lastChild;
      f = db(f, d.childNodes);
      d = e.firstChild;
      d.textContent = '';
    } else
      f.push(b.createTextNode(a));
    e.textContent = '';
    e.innerHTML = '';
    r(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }
  function V(a) {
    if (a instanceof V)
      return a;
    var b;
    E(a) && (a = Q(a), b = !0);
    if (!(this instanceof V)) {
      if (b && '<' !== a.charAt(0))
        throw lc('nosel');
      return new V(a);
    }
    if (b) {
      b = w.document;
      var d;
      a = (d = fg.exec(a)) ? [b.createElement(d[1])] : (d = fd(a, b)) ? d.childNodes : [];
      mc(this, a);
    } else
      C(a) ? gd(a) : mc(this, a);
  }
  function nc(a) {
    return a.cloneNode(!0);
  }
  function yb(a, b) {
    !b && jc(a) && z.cleanData([a]);
    a.querySelectorAll && z.cleanData(a.querySelectorAll('*'));
  }
  function hd(a, b, d, c) {
    if (u(c))
      throw lc('offargs');
    var e = (c = zb(a)) && c.events, f = c && c.handle;
    if (f)
      if (b) {
        var g = function (b) {
          var c = e[b];
          u(d) && cb(c || [], d);
          u(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b]);
        };
        r(b.split(' '), function (a) {
          g(a);
          Ab[a] && g(Ab[a]);
        });
      } else
        for (b in e)
          '$destroy' !== b && a.removeEventListener(b, f), delete e[b];
  }
  function oc(a, b) {
    var d = a.ng339, c = d && ib[d];
    c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, '$destroy'), hd(a)), delete ib[d], a.ng339 = void 0));
  }
  function zb(a, b) {
    var d = a.ng339, d = d && ib[d];
    b && !d && (a.ng339 = d = ++gg, d = ib[d] = {
      events: {},
      data: {},
      handle: void 0
    });
    return d;
  }
  function pc(a, b, d) {
    if (jc(a)) {
      var c, e = u(d), f = !e && b && !B(b), g = !b;
      a = (a = zb(a, !f)) && a.data;
      if (e)
        a[xb(b)] = d;
      else {
        if (g)
          return a;
        if (f)
          return a && a[xb(b)];
        for (c in b)
          a[xb(c)] = b[c];
      }
    }
  }
  function Bb(a, b) {
    return a.getAttribute ? -1 < (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + b + ' ') : !1;
  }
  function Cb(a, b) {
    if (b && a.setAttribute) {
      var d = (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' '), c = d;
      r(b.split(' '), function (a) {
        a = Q(a);
        c = c.replace(' ' + a + ' ', ' ');
      });
      c !== d && a.setAttribute('class', Q(c));
    }
  }
  function Db(a, b) {
    if (b && a.setAttribute) {
      var d = (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' '), c = d;
      r(b.split(' '), function (a) {
        a = Q(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      c !== d && a.setAttribute('class', Q(c));
    }
  }
  function mc(a, b) {
    if (b)
      if (b.nodeType)
        a[a.length++] = b;
      else {
        var d = b.length;
        if ('number' === typeof d && b.window !== b) {
          if (d)
            for (var c = 0; c < d; c++)
              a[a.length++] = b[c];
        } else
          a[a.length++] = b;
      }
  }
  function id(a, b) {
    return Eb(a, '$' + (b || 'ngController') + 'Controller');
  }
  function Eb(a, b, d) {
    9 === a.nodeType && (a = a.documentElement);
    for (b = I(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++)
        if (u(d = z.data(a, b[c])))
          return d;
      a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }
  function jd(a) {
    for (yb(a, !0); a.firstChild;)
      a.removeChild(a.firstChild);
  }
  function Fb(a, b) {
    b || yb(a);
    var d = a.parentNode;
    d && d.removeChild(a);
  }
  function hg(a, b) {
    b = b || w;
    if ('complete' === b.document.readyState)
      b.setTimeout(a);
    else
      z(b).on('load', a);
  }
  function gd(a) {
    function b() {
      w.document.removeEventListener('DOMContentLoaded', b);
      w.removeEventListener('load', b);
      a();
    }
    'complete' === w.document.readyState ? w.setTimeout(a) : (w.document.addEventListener('DOMContentLoaded', b), w.addEventListener('load', b));
  }
  function kd(a, b) {
    var d = Gb[b.toLowerCase()];
    return d && ld[ya(a)] && d;
  }
  function ig(a, b) {
    var d = function (c, d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = b[d || c.type], g = f ? f.length : 0;
      if (g) {
        if (x(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c);
          };
        }
        c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };
        var k = f.specialHandlerWrapper || jg;
        1 < g && (f = ka(f));
        for (var l = 0; l < g; l++)
          c.isImmediatePropagationStopped() || k(a, c, f[l]);
      }
    };
    d.elem = a;
    return d;
  }
  function jg(a, b, d) {
    d.call(a, b);
  }
  function kg(a, b, d) {
    var c = b.relatedTarget;
    c && (c === a || lg.call(a, c)) || d.call(a, b);
  }
  function $f() {
    this.$get = function () {
      return O(V, {
        hasClass: function (a, b) {
          a.attr && (a = a[0]);
          return Bb(a, b);
        },
        addClass: function (a, b) {
          a.attr && (a = a[0]);
          return Db(a, b);
        },
        removeClass: function (a, b) {
          a.attr && (a = a[0]);
          return Cb(a, b);
        }
      });
    };
  }
  function Pa(a, b) {
    var d = a && a.$$hashKey;
    if (d)
      return 'function' === typeof d && (d = a.$$hashKey()), d;
    d = typeof a;
    return d = 'function' === d || 'object' === d && null !== a ? a.$$hashKey = d + ':' + (b || pe)() : d + ':' + a;
  }
  function md() {
    this._keys = [];
    this._values = [];
    this._lastKey = NaN;
    this._lastIndex = -1;
  }
  function nd(a) {
    a = Function.prototype.toString.call(a).replace(mg, '');
    return a.match(ng) || a.match(og);
  }
  function pg(a) {
    return (a = nd(a)) ? 'function(' + (a[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
  }
  function gb(a, b) {
    function d(a) {
      return function (b, c) {
        if (B(b))
          r(b, Xb(a));
        else
          return a(b, c);
      };
    }
    function c(a, b) {
      Ia(a, 'service');
      if (C(b) || I(b))
        b = n.instantiate(b);
      if (!b.$get)
        throw Ba('pget', a);
      return p[a + 'Provider'] = b;
    }
    function e(a, b) {
      return function () {
        var c = v.invoke(b, this);
        if (x(c))
          throw Ba('undef', a);
        return c;
      };
    }
    function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }
    function g(a) {
      hb(x(a) || I(a), 'modulesToLoad', 'not an array');
      var b = [], c;
      r(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], g = n.get(e[0]);
            g[e[1]].apply(g, e[2]);
          }
        }
        if (!m.get(a)) {
          m.set(a, !0);
          try {
            E(a) ? (c = ic(a), v.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : C(a) ? b.push(n.invoke(a)) : I(a) ? b.push(n.invoke(a)) : sb(a, 'module');
          } catch (e) {
            throw I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), Ba('modulerr', a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k)
            throw Ba('cdep', b + ' <- ' + l.join(' <- '));
          return a[b];
        }
        try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
        } catch (g) {
          throw a[b] === k && delete a[b], g;
        } finally {
          l.shift();
        }
      }
      function e(a, c, g) {
        var f = [];
        a = gb.$$annotate(a, b, g);
        for (var k = 0, h = a.length; k < h; k++) {
          var l = a[k];
          if ('string' !== typeof l)
            throw Ba('itkn', l);
          f.push(c && c.hasOwnProperty(l) ? c[l] : d(l, g));
        }
        return f;
      }
      return {
        invoke: function (a, b, c, d) {
          'string' === typeof c && (d = c, c = null);
          c = e(a, c, d);
          I(a) && (a = a[a.length - 1]);
          d = a;
          if (Ca || 'function' !== typeof d)
            d = !1;
          else {
            var g = d.$$ngIsClass;
            Na(g) || (g = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));
            d = g;
          }
          return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        },
        instantiate: function (a, b, c) {
          var d = I(a) ? a[a.length - 1] : a;
          a = e(a, b, c);
          a.unshift(null);
          return new (Function.prototype.bind.apply(d, a))();
        },
        get: d,
        annotate: gb.$$annotate,
        has: function (b) {
          return p.hasOwnProperty(b + 'Provider') || a.hasOwnProperty(b);
        }
      };
    }
    b = !0 === b;
    var k = {}, l = [], m = new Hb(), p = {
        $provide: {
          provider: d(c),
          factory: d(f),
          service: d(function (a, b) {
            return f(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: d(function (a, b) {
            return f(a, la(b), !1);
          }),
          constant: d(function (a, b) {
            Ia(a, 'constant');
            p[a] = b;
            F[a] = b;
          }),
          decorator: function (a, b) {
            var c = n.get(a + 'Provider'), d = c.$get;
            c.$get = function () {
              var a = v.invoke(d, c);
              return v.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, n = p.$injector = h(p, function (a, b) {
        $.isString(b) && l.push(b);
        throw Ba('unpr', l.join(' <- '));
      }), F = {}, s = h(F, function (a, b) {
        var c = n.get(a + 'Provider', b);
        return v.invoke(c.$get, c, void 0, a);
      }), v = s;
    p.$injectorProvider = { $get: la(s) };
    v.modules = n.modules = S();
    var y = g(a), v = s.get('$injector');
    v.strictDi = b;
    r(y, function (a) {
      a && v.invoke(a);
    });
    v.loadNewModules = function (a) {
      r(g(a), function (a) {
        a && v.invoke(a);
      });
    };
    return v;
  }
  function pf() {
    var a = !0;
    this.disableAutoScrolling = function () {
      a = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (b, d, c) {
        function e(a) {
          var b = null;
          Array.prototype.some.call(a, function (a) {
            if ('a' === ya(a))
              return b = a, !0;
          });
          return b;
        }
        function f(a) {
          if (a) {
            a.scrollIntoView();
            var c;
            c = g.yOffset;
            C(c) ? c = c() : Zb(c) ? (c = c[0], c = 'fixed' !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
            c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
          } else
            b.scrollTo(0, 0);
        }
        function g(a) {
          a = E(a) ? a : Y(a) ? a.toString() : d.hash();
          var b;
          a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : 'top' === a && f(null) : f(null);
        }
        var h = b.document;
        a && c.$watch(function () {
          return d.hash();
        }, function (a, b) {
          a === b && '' === a || hg(function () {
            c.$evalAsync(g);
          });
        });
        return g;
      }
    ];
  }
  function jb(a, b) {
    if (!a && !b)
      return '';
    if (!a)
      return b;
    if (!b)
      return a;
    I(a) && (a = a.join(' '));
    I(b) && (b = b.join(' '));
    return a + ' ' + b;
  }
  function qg(a) {
    E(a) && (a = a.split(' '));
    var b = S();
    r(a, function (a) {
      a.length && (b[a] = !0);
    });
    return b;
  }
  function Ka(a) {
    return B(a) ? a : {};
  }
  function rg(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, xa.call(arguments, 1));
      } finally {
        if (s--, 0 === s)
          for (; v.length;)
            try {
              v.pop()();
            } catch (b) {
              d.error(b);
            }
      }
    }
    function f() {
      A = null;
      h();
    }
    function g() {
      y = H();
      y = x(y) ? null : y;
      sa(y, J) && (y = J);
      t = J = y;
    }
    function h() {
      var a = t;
      g();
      if (Aa !== k.url() || a !== y)
        Aa = k.url(), t = y, r(G, function (a) {
          a(k.url(), y);
        });
    }
    var k = this, l = a.location, m = a.history, p = a.setTimeout, n = a.clearTimeout, F = {};
    k.isMock = !1;
    var s = 0, v = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function () {
      s++;
    };
    k.notifyWhenNoOutstandingRequests = function (a) {
      0 === s ? a() : v.push(a);
    };
    var y, t, Aa = l.href, hc = b.find('base'), A = null, H = c.history ? function () {
        try {
          return m.state;
        } catch (a) {
        }
      } : D;
    g();
    k.url = function (b, d, e) {
      x(e) && (e = null);
      l !== a.location && (l = a.location);
      m !== a.history && (m = a.history);
      if (b) {
        var f = t === e;
        if (Aa === b && (!c.history || f))
          return k;
        var h = Aa && La(Aa) === La(b);
        Aa = b;
        t = e;
        !c.history || h && f ? (h || (A = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf('#'), e = -1 === e ? '' : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (A = b)) : (m[d ? 'replaceState' : 'pushState'](e, '', b), g());
        A && (A = b);
        return k;
      }
      return A || l.href.replace(/%27/g, '\'');
    };
    k.state = function () {
      return y;
    };
    var G = [], ba = !1, J = null;
    k.onUrlChange = function (b) {
      if (!ba) {
        if (c.history)
          z(a).on('popstate', f);
        z(a).on('hashchange', f);
        ba = !0;
      }
      G.push(b);
      return b;
    };
    k.$$applicationDestroyed = function () {
      z(a).off('hashchange popstate', f);
    };
    k.$$checkUrlChange = h;
    k.baseHref = function () {
      var a = hc.attr('href');
      return a ? a.replace(/^(https?:)?\/\/[^\/]*/, '') : '';
    };
    k.defer = function (a, b) {
      var c;
      s++;
      c = p(function () {
        delete F[c];
        e(a);
      }, b || 0);
      F[c] = !0;
      return c;
    };
    k.defer.cancel = function (a) {
      return F[a] ? (delete F[a], n(a), e(D), !0) : !1;
    };
  }
  function wf() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (a, b, d, c) {
        return new rg(a, c, b, d);
      }
    ];
  }
  function xf() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a !== p && (n ? n === a && (n = a.n) : n = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }
        function f(a, b) {
          a !== b && (a && (a.p = b), b && (b.n = a));
        }
        if (a in b)
          throw K('$cacheFactory')('iid', a);
        var g = 0, h = O({}, c, { id: a }), k = S(), l = c && c.capacity || Number.MAX_VALUE, m = S(), p = null, n = null;
        return b[a] = {
          put: function (a, b) {
            if (!x(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });
                e(c);
              }
              a in k || g++;
              k[a] = b;
              g > l && this.remove(n.key);
              return b;
            }
          },
          get: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              e(b);
            }
            return k[a];
          },
          remove: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              b === p && (p = b.p);
              b === n && (n = b.n);
              f(b.n, b.p);
              delete m[a];
            }
            a in k && (delete k[a], g--);
          },
          removeAll: function () {
            k = S();
            g = 0;
            m = S();
            p = n = null;
          },
          destroy: function () {
            m = h = k = null;
            delete b[a];
          },
          info: function () {
            return O({}, h, { size: g });
          }
        };
      }
      var b = {};
      a.info = function () {
        var a = {};
        r(b, function (b, e) {
          a[e] = b.info();
        });
        return a;
      };
      a.get = function (a) {
        return b[a];
      };
      return a;
    };
  }
  function Uf() {
    this.$get = [
      '$cacheFactory',
      function (a) {
        return a('templates');
      }
    ];
  }
  function Yc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/, e = S();
      r(a, function (a, g) {
        if (a in p)
          e[g] = p[a];
        else {
          var f = a.match(d);
          if (!f)
            throw ca('iscp', b, g, a, c ? 'controller bindings definition' : 'isolate scope definition');
          e[g] = {
            mode: f[1][0],
            collection: '*' === f[2],
            optional: '?' === f[3],
            attrName: f[4] || g
          };
          f[4] && (p[a] = e[g]);
        }
      });
      return e;
    }
    function c(a) {
      var b = a.charAt(0);
      if (!b || b !== L(b))
        throw ca('baddir', a);
      if (a !== a.trim())
        throw ca('baddir', a);
    }
    function e(a) {
      var b = a.require || a.controller && a.name;
      !I(b) && B(b) && r(b, function (a, c) {
        var d = a.match(l);
        a.substring(d[0].length) || (b[c] = d[0] + c);
      });
      return b;
    }
    var f = {}, g = /^\s*directive:\s*([\w-]+)\s+(.*)$/, h = /(([\w-]+)(?::([^;]+))?;?)/, k = te('ngSrc,ngSrcset,src,srcset'), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/, p = S();
    this.directive = function hc(b, d) {
      hb(b, 'name');
      Ia(b, 'directive');
      E(b) ? (c(b), hb(d, 'directiveFactory'), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + 'Directive', [
        '$injector',
        '$exceptionHandler',
        function (a, c) {
          var d = [];
          r(f[b], function (g, f) {
            try {
              var h = a.invoke(g);
              C(h) ? h = { compile: la(h) } : !h.compile && h.link && (h.compile = la(h.link));
              h.priority = h.priority || 0;
              h.index = f;
              h.name = h.name || b;
              h.require = e(h);
              var k = h, l = h.restrict;
              if (l && (!E(l) || !/[EACM]/.test(l)))
                throw ca('badrestrict', l, b);
              k.restrict = l || 'EA';
              h.$$moduleName = g.$$moduleName;
              d.push(h);
            } catch (m) {
              c(m);
            }
          });
          return d;
        }
      ])), f[b].push(d)) : r(b, Xb(hc));
      return this;
    };
    this.component = function A(a, b) {
      function c(a) {
        function e(b) {
          return C(b) || I(b) ? function (c, d) {
            return a.invoke(b, this, {
              $element: c,
              $attrs: d
            });
          } : b;
        }
        var g = b.template || b.templateUrl ? b.template : '', f = {
            controller: d,
            controllerAs: sg(b.controller) || b.controllerAs || '$ctrl',
            template: e(g),
            templateUrl: e(b.templateUrl),
            transclude: b.transclude,
            scope: {},
            bindToController: b.bindings || {},
            restrict: 'E',
            require: b.require
          };
        r(b, function (a, b) {
          '$' === b.charAt(0) && (f[b] = a);
        });
        return f;
      }
      if (!E(a))
        return r(a, Xb(Ra(this, A))), this;
      var d = b.controller || function () {
        };
      r(b, function (a, b) {
        '$' === b.charAt(0) && (c[b] = a, C(d) && (d[b] = a));
      });
      c.$inject = ['$injector'];
      return this.directive(a, c);
    };
    this.aHrefSanitizationWhitelist = function (a) {
      return u(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };
    var n = !0;
    this.debugInfoEnabled = function (a) {
      return u(a) ? (n = a, this) : n;
    };
    var F = !1;
    this.preAssignBindingsEnabled = function (a) {
      return u(a) ? (F = a, this) : F;
    };
    var s = !1;
    this.strictComponentBindingsEnabled = function (a) {
      return u(a) ? (s = a, this) : s;
    };
    var v = 10;
    this.onChangesTtl = function (a) {
      return arguments.length ? (v = a, this) : v;
    };
    var y = !0;
    this.commentDirectivesEnabled = function (a) {
      return arguments.length ? (y = a, this) : y;
    };
    var t = !0;
    this.cssClassDirectivesEnabled = function (a) {
      return arguments.length ? (t = a, this) : t;
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$templateRequest',
      '$parse',
      '$controller',
      '$rootScope',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, c, e, p, R, M, T, P, q) {
        function N() {
          try {
            if (!--Fa)
              throw ha = void 0, ca('infchng', v);
            M.$apply(function () {
              for (var a = [], b = 0, c = ha.length; b < c; ++b)
                try {
                  ha[b]();
                } catch (d) {
                  a.push(d);
                }
              ha = void 0;
              if (a.length)
                throw a;
            });
          } finally {
            Fa++;
          }
        }
        function qc(a, b) {
          if (b) {
            var c = Object.keys(b), d, e, g;
            d = 0;
            for (e = c.length; d < e; d++)
              g = c[d], this[g] = b[g];
          } else
            this.$attr = {};
          this.$$element = a;
        }
        function Ta(a, b, c) {
          Ba.innerHTML = '<span ' + b + '>';
          b = Ba.firstChild.attributes;
          var d = b[0];
          b.removeNamedItem(d.name);
          d.value = c;
          a.attributes.setNamedItem(d);
        }
        function na(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function da(a, b, c, d, e) {
          a instanceof z || (a = z(a));
          var g = Ua(a, b, a, c, d, e);
          da.$$addScopeClass(a);
          var f = null;
          return function (b, c, d) {
            if (!a)
              throw ca('multilink');
            hb(b, 'scope');
            e && e.needsNewScope && (b = b.$parent.$new());
            d = d || {};
            var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
            d = d.futureParentElement;
            h && h.$$boundTransclude && (h = h.$$boundTransclude);
            f || (f = (d = d && d[0]) ? 'foreignobject' !== ya(d) && ia.call(d).match(/SVG/) ? 'svg' : 'html' : 'html');
            d = 'html' !== f ? z(ka(f, z('<div>').append(a).html())) : c ? Sa.clone.call(a) : a;
            if (k)
              for (var l in k)
                d.data('$' + l + 'Controller', k[l].instance);
            da.$$addScopeInfo(d, b);
            c && c(d, b);
            g && g(b, d, d, h);
            c || (a = g = null);
            return d;
          };
        }
        function Ua(a, b, c, d, e, g) {
          function f(a, c, d, e) {
            var g, k, l, m, p, n, G;
            if (t)
              for (G = Array(c.length), m = 0; m < h.length; m += 3)
                g = h[m], G[g] = c[g];
            else
              G = c;
            m = 0;
            for (p = h.length; m < p;)
              k = G[h[m++]], c = h[m++], g = h[m++], c ? (c.scope ? (l = a.$new(), da.$$addScopeInfo(z(k), l)) : l = a, n = c.transcludeOnThisElement ? Ma(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? Ma(a, b) : null, c(g, l, k, d, n)) : g && g(a, k.childNodes, void 0, e);
          }
          for (var h = [], k = I(a) || a instanceof z, l, m, p, n, t, G = 0; G < a.length; G++) {
            l = new qc();
            11 === Ca && Da(a, G, k);
            m = K(a[G], [], l, 0 === G ? d : void 0, e);
            (g = m.length ? Y(m, a[G], l, b, c, null, [], [], g) : null) && g.scope && da.$$addScopeClass(l.$$element);
            l = g && g.terminal || !(p = a[G].childNodes) || !p.length ? null : Ua(p, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b);
            if (g || l)
              h.push(G, g, l), n = !0, t = t || g;
            g = null;
          }
          return n ? f : null;
        }
        function Da(a, b, c) {
          var d = a[b], e = d.parentNode, g;
          if (d.nodeType === Oa)
            for (;;) {
              g = e ? d.nextSibling : a[b + 1];
              if (!g || g.nodeType !== Oa)
                break;
              d.nodeValue += g.nodeValue;
              g.parentNode && g.parentNode.removeChild(g);
              c && g === a[b + 1] && a.splice(b + 1, 1);
            }
        }
        function Ma(a, b, c) {
          function d(e, g, f, h, k) {
            e || (e = a.$new(!1, k), e.$$transcluded = !0);
            return b(e, g, {
              parentBoundTranscludeFn: c,
              transcludeControllers: f,
              futureParentElement: h
            });
          }
          var e = d.$$slots = S(), g;
          for (g in b.$$slots)
            e[g] = b.$$slots[g] ? Ma(a, b.$$slots[g], c) : null;
          return d;
        }
        function K(a, b, c, d, e) {
          var g = c.$attr, f;
          switch (a.nodeType) {
          case 1:
            f = ya(a);
            U(b, Ea(f), 'E', d, e);
            for (var k, l, m, p, n = a.attributes, t = 0, G = n && n.length; t < G; t++) {
              var H = !1, F = !1;
              k = n[t];
              l = k.name;
              m = k.value;
              k = Ea(l);
              (p = Pa.test(k)) && (l = l.replace(od, '').substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              }));
              (k = k.match(Qa)) && $(k[1]) && (H = l, F = l.substr(0, l.length - 5) + 'end', l = l.substr(0, l.length - 6));
              k = Ea(l.toLowerCase());
              g[k] = l;
              if (p || !c.hasOwnProperty(k))
                c[k] = m, kd(a, k) && (c[k] = !0);
              wa(a, b, m, k, p);
              U(b, k, 'A', d, e, H, F);
            }
            'input' === f && 'hidden' === a.getAttribute('type') && a.setAttribute('autocomplete', 'off');
            if (!La)
              break;
            g = a.className;
            B(g) && (g = g.animVal);
            if (E(g) && '' !== g)
              for (; a = h.exec(g);)
                k = Ea(a[2]), U(b, k, 'C', d, e) && (c[k] = Q(a[3])), g = g.substr(a.index + a[0].length);
            break;
          case Oa:
            oa(b, a.nodeValue);
            break;
          case 8:
            if (!Ka)
              break;
            rc(a, b, c, d, e);
          }
          b.sort(la);
          return b;
        }
        function rc(a, b, c, d, e) {
          try {
            var f = g.exec(a.nodeValue);
            if (f) {
              var h = Ea(f[1]);
              U(b, h, 'M', d, e) && (c[h] = Q(f[2]));
            }
          } catch (k) {
          }
        }
        function pd(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ca('uterdir', b, c);
              1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return z(d);
        }
        function V(a, b, c) {
          return function (d, e, g, f, h) {
            e = pd(e[0], b, c);
            return a(d, e, g, f, h);
          };
        }
        function W(a, b, c, d, e, g) {
          var f;
          return a ? da(b, c, d, e, g) : function () {
            f || (f = da(b, c, d, e, g), b = c = g = null);
            return f.apply(this, arguments);
          };
        }
        function Y(a, b, d, e, g, f, h, k, l) {
          function m(a, b, c, d) {
            if (a) {
              c && (a = V(a, c, d));
              a.require = s.require;
              a.directiveName = R;
              if (J === s || s.$$isolateScope)
                a = ta(a, { isolateScope: !0 });
              h.push(a);
            }
            if (b) {
              c && (b = V(b, c, d));
              b.require = s.require;
              b.directiveName = R;
              if (J === s || s.$$isolateScope)
                b = ta(b, { isolateScope: !0 });
              k.push(b);
            }
          }
          function p(a, e, g, f, l) {
            function m(a, b, c, d) {
              var e;
              bb(a) || (d = c, c = b, b = a, a = void 0);
              T && (e = M);
              c || (c = T ? ga.parent() : ga);
              if (d) {
                var g = l.$$slots[d];
                if (g)
                  return g(a, b, e, c, N);
                if (x(g))
                  throw ca('noslot', d, za(ga));
              } else
                return l(a, b, e, c, N);
            }
            var n, s, v, y, ba, M, R, ga;
            b === g ? (f = d, ga = d.$$element) : (ga = z(g), f = new qc(ga, d));
            ba = e;
            J ? y = e.$new(!0) : t && (ba = e.$parent);
            l && (R = m, R.$$boundTransclude = l, R.isSlotFilled = function (a) {
              return !!l.$$slots[a];
            });
            H && (M = ea(ga, f, R, H, y, e, J));
            J && (da.$$addScopeInfo(ga, y, !0, !(A && (A === J || A === J.$$originalDirective))), da.$$addScopeClass(ga, !0), y.$$isolateBindings = J.$$isolateBindings, s = qa(e, f, y, y.$$isolateBindings, J), s.removeWatches && y.$on('$destroy', s.removeWatches));
            for (n in M) {
              s = H[n];
              v = M[n];
              var P = s.$$bindings.bindToController;
              if (F) {
                v.bindingInfo = P ? qa(ba, f, v.instance, P, s) : {};
                var q = v();
                q !== v.instance && (v.instance = q, ga.data('$' + s.name + 'Controller', q), v.bindingInfo.removeWatches && v.bindingInfo.removeWatches(), v.bindingInfo = qa(ba, f, v.instance, P, s));
              } else
                v.instance = v(), ga.data('$' + s.name + 'Controller', v.instance), v.bindingInfo = qa(ba, f, v.instance, P, s);
            }
            r(H, function (a, b) {
              var c = a.require;
              a.bindToController && !I(c) && B(c) && O(M[b].instance, X(b, c, ga, M));
            });
            r(M, function (a) {
              var b = a.instance;
              if (C(b.$onChanges))
                try {
                  b.$onChanges(a.bindingInfo.initialChanges);
                } catch (d) {
                  c(d);
                }
              if (C(b.$onInit))
                try {
                  b.$onInit();
                } catch (e) {
                  c(e);
                }
              C(b.$doCheck) && (ba.$watch(function () {
                b.$doCheck();
              }), b.$doCheck());
              C(b.$onDestroy) && ba.$on('$destroy', function () {
                b.$onDestroy();
              });
            });
            n = 0;
            for (s = h.length; n < s; n++)
              v = h[n], va(v, v.isolateScope ? y : e, ga, f, v.require && X(v.directiveName, v.require, ga, M), R);
            var N = e;
            J && (J.template || null === J.templateUrl) && (N = y);
            a && a(N, g.childNodes, void 0, l);
            for (n = k.length - 1; 0 <= n; n--)
              v = k[n], va(v, v.isolateScope ? y : e, ga, f, v.require && X(v.directiveName, v.require, ga, M), R);
            r(M, function (a) {
              a = a.instance;
              C(a.$postLink) && a.$postLink();
            });
          }
          l = l || {};
          for (var n = -Number.MAX_VALUE, t = l.newScopeDirective, H = l.controllerDirectives, J = l.newIsolateScopeDirective, A = l.templateDirective, y = l.nonTlbTranscludeDirective, ba = !1, M = !1, T = l.hasElementTranscludeDirective, v = d.$$element = z(b), s, R, P, q = e, N, u = !1, Ib = !1, w, Da = 0, D = a.length; Da < D; Da++) {
            s = a[Da];
            var Ta = s.$$start, E = s.$$end;
            Ta && (v = pd(b, Ta, E));
            P = void 0;
            if (n > s.priority)
              break;
            if (w = s.scope)
              s.templateUrl || (B(w) ? (aa('new/isolated scope', J || t, s, v), J = s) : aa('new/isolated scope', J, s, v)), t = t || s;
            R = s.name;
            if (!u && (s.replace && (s.templateUrl || s.template) || s.transclude && !s.$$tlb)) {
              for (w = Da + 1; u = a[w++];)
                if (u.transclude && !u.$$tlb || u.replace && (u.templateUrl || u.template)) {
                  Ib = !0;
                  break;
                }
              u = !0;
            }
            !s.templateUrl && s.controller && (H = H || S(), aa('\'' + R + '\' controller', H[R], s, v), H[R] = s);
            if (w = s.transclude)
              if (ba = !0, s.$$tlb || (aa('transclusion', y, s, v), y = s), 'element' === w)
                T = !0, n = s.priority, P = v, v = d.$$element = z(da.$$createComment(R, d[R])), b = v[0], ma(g, xa.call(P, 0), b), P[0].$$parentNode = P[0].parentNode, q = W(Ib, P, e, n, f && f.name, { nonTlbTranscludeDirective: y });
              else {
                var na = S();
                if (B(w)) {
                  P = [];
                  var Ua = S(), Ma = S();
                  r(w, function (a, b) {
                    var c = '?' === a.charAt(0);
                    a = c ? a.substring(1) : a;
                    Ua[a] = b;
                    na[b] = null;
                    Ma[b] = c;
                  });
                  r(v.contents(), function (a) {
                    var b = Ua[Ea(ya(a))];
                    b ? (Ma[b] = !0, na[b] = na[b] || [], na[b].push(a)) : P.push(a);
                  });
                  r(Ma, function (a, b) {
                    if (!a)
                      throw ca('reqslot', b);
                  });
                  for (var L in na)
                    na[L] && (na[L] = W(Ib, na[L], e));
                } else
                  P = z(nc(b)).contents();
                v.empty();
                q = W(Ib, P, e, void 0, void 0, { needsNewScope: s.$$isolateScope || s.$$newScope });
                q.$$slots = na;
              }
            if (s.template)
              if (M = !0, aa('template', A, s, v), A = s, w = C(s.template) ? s.template(v, d) : s.template, w = Ia(w), s.replace) {
                f = s;
                P = kc.test(w) ? qd(ka(s.templateNamespace, Q(w))) : [];
                b = P[0];
                if (1 !== P.length || 1 !== b.nodeType)
                  throw ca('tplrt', R, '');
                ma(g, v, b);
                D = { $attr: {} };
                w = K(b, [], D);
                var rc = a.splice(Da + 1, a.length - (Da + 1));
                (J || t) && Z(w, J, t);
                a = a.concat(w).concat(rc);
                fa(d, D);
                D = a.length;
              } else
                v.html(w);
            if (s.templateUrl)
              M = !0, aa('template', A, s, v), A = s, s.replace && (f = s), p = ja(a.splice(Da, a.length - Da), v, d, g, ba && q, h, k, {
                controllerDirectives: H,
                newScopeDirective: t !== s && t,
                newIsolateScopeDirective: J,
                templateDirective: A,
                nonTlbTranscludeDirective: y
              }), D = a.length;
            else if (s.compile)
              try {
                N = s.compile(v, d, q);
                var U = s.$$originalDirective || s;
                C(N) ? m(null, Ra(U, N), Ta, E) : N && m(Ra(U, N.pre), Ra(U, N.post), Ta, E);
              } catch ($) {
                c($, za(v));
              }
            s.terminal && (p.terminal = !0, n = Math.max(n, s.priority));
          }
          p.scope = t && !0 === t.scope;
          p.transcludeOnThisElement = ba;
          p.templateOnThisElement = M;
          p.transclude = q;
          l.hasElementTranscludeDirective = T;
          return p;
        }
        function X(a, b, c, d) {
          var e;
          if (E(b)) {
            var g = b.match(l);
            b = b.substring(g[0].length);
            var f = g[1] || g[3], g = '?' === g[2];
            '^^' === f ? c = c.parent() : e = (e = d && d[b]) && e.instance;
            if (!e) {
              var h = '$' + b + 'Controller';
              e = f ? c.inheritedData(h) : c.data(h);
            }
            if (!e && !g)
              throw ca('ctreq', b, a);
          } else if (I(b))
            for (e = [], f = 0, g = b.length; f < g; f++)
              e[f] = X(a, b[f], c, d);
          else
            B(b) && (e = {}, r(b, function (b, g) {
              e[g] = X(a, b, c, d);
            }));
          return e || null;
        }
        function ea(a, b, c, d, e, g, f) {
          var h = S(), k;
          for (k in d) {
            var l = d[k], m = {
                $scope: l === f || l.$$isolateScope ? e : g,
                $element: a,
                $attrs: b,
                $transclude: c
              }, p = l.controller;
            '@' === p && (p = b[l.name]);
            m = R(p, m, !0, l.controllerAs);
            h[l.name] = m;
            a.data('$' + l.name + 'Controller', m.instance);
          }
          return h;
        }
        function Z(a, b, c) {
          for (var d = 0, e = a.length; d < e; d++)
            a[d] = $b(a[d], {
              $$isolateScope: b,
              $$newScope: c
            });
        }
        function U(b, c, e, g, h, k, l) {
          if (c === h)
            return null;
          var m = null;
          if (f.hasOwnProperty(c)) {
            h = a.get(c + 'Directive');
            for (var p = 0, n = h.length; p < n; p++)
              if (c = h[p], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
                k && (c = $b(c, {
                  $$start: k,
                  $$end: l
                }));
                if (!c.$$bindings) {
                  var t = m = c, G = c.name, H = {
                      isolateScope: null,
                      bindToController: null
                    };
                  B(t.scope) && (!0 === t.bindToController ? (H.bindToController = d(t.scope, G, !0), H.isolateScope = {}) : H.isolateScope = d(t.scope, G, !1));
                  B(t.bindToController) && (H.bindToController = d(t.bindToController, G, !0));
                  if (H.bindToController && !t.controller)
                    throw ca('noctrl', G);
                  m = m.$$bindings = H;
                  B(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
                }
                b.push(c);
                m = c;
              }
          }
          return m;
        }
        function $(b) {
          if (f.hasOwnProperty(b))
            for (var c = a.get(b + 'Directive'), d = 0, e = c.length; d < e; d++)
              if (b = c[d], b.multiElement)
                return !0;
          return !1;
        }
        function fa(a, b) {
          var c = b.$attr, d = a.$attr;
          r(a, function (d, e) {
            '$' !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (('style' === e ? ';' : ' ') + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
          });
          r(b, function (b, e) {
            a.hasOwnProperty(e) || '$' === e.charAt(0) || (a[e] = b, 'class' !== e && 'style' !== e && (d[e] = c[e]));
          });
        }
        function ja(a, b, d, g, f, h, k, l) {
          var m = [], p, n, t = b[0], H = a.shift(), s = $b(H, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: H
            }), F = C(H.templateUrl) ? H.templateUrl(b, d) : H.templateUrl, v = H.templateNamespace;
          b.empty();
          e(F).then(function (c) {
            var e, G;
            c = Ia(c);
            if (H.replace) {
              c = kc.test(c) ? qd(ka(v, Q(c))) : [];
              e = c[0];
              if (1 !== c.length || 1 !== e.nodeType)
                throw ca('tplrt', H.name, F);
              c = { $attr: {} };
              ma(g, b, e);
              var J = K(e, [], c);
              B(H.scope) && Z(J, !0);
              a = J.concat(a);
              fa(d, c);
            } else
              e = t, b.html(c);
            a.unshift(s);
            p = Y(a, e, d, f, b, H, h, k, l);
            r(g, function (a, c) {
              a === e && (g[c] = b[0]);
            });
            for (n = Ua(b[0].childNodes, f); m.length;) {
              c = m.shift();
              G = m.shift();
              var y = m.shift(), A = m.shift(), J = b[0];
              if (!c.$$destroyed) {
                if (G !== t) {
                  var M = G.className;
                  l.hasElementTranscludeDirective && H.replace || (J = nc(e));
                  ma(y, z(G), J);
                  na(z(J), M);
                }
                G = p.transcludeOnThisElement ? Ma(c, p.transclude, A) : A;
                p(n, c, J, g, G);
              }
            }
            m = null;
          }).catch(function (a) {
            bc(a) && c(a);
          });
          return function (a, b, c, d, e) {
            a = e;
            b.$$destroyed || (m ? m.push(b, c, d, a) : (p.transcludeOnThisElement && (a = Ma(b, p.transclude, e)), p(n, b, c, d, a)));
          };
        }
        function la(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function aa(a, b, c, d) {
          function e(a) {
            return a ? ' (module: ' + a + ')' : '';
          }
          if (b)
            throw ca('multidir', b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, za(d));
        }
        function oa(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: function (a) {
              a = a.parent();
              var b = !!a.length;
              b && da.$$addBindingClass(a);
              return function (a, c) {
                var e = c.parent();
                b || da.$$addBindingClass(e);
                da.$$addBindingInfo(e, d.expressions);
                a.$watch(d, function (a) {
                  c[0].nodeValue = a;
                });
              };
            }
          });
        }
        function ka(a, b) {
          a = L(a || 'html');
          switch (a) {
          case 'svg':
          case 'math':
            var c = w.document.createElement('div');
            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
            return c.childNodes[0].childNodes;
          default:
            return b;
          }
        }
        function ua(a, b) {
          if ('srcdoc' === b)
            return T.HTML;
          var c = ya(a);
          if ('src' === b || 'ngSrc' === b) {
            if (-1 === [
                'img',
                'video',
                'audio',
                'source',
                'track'
              ].indexOf(c))
              return T.RESOURCE_URL;
          } else if ('xlinkHref' === b || 'form' === c && 'action' === b || 'link' === c && 'href' === b)
            return T.RESOURCE_URL;
        }
        function wa(a, c, d, e, g) {
          var f = ua(a, e), h = k[e] || g, l = b(d, !g, f, h);
          if (l) {
            if ('multiple' === e && 'select' === ya(a))
              throw ca('selmulti', za(a));
            if (m.test(e))
              throw ca('nodomevents');
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (a, c, g) {
                    c = g.$$observers || (g.$$observers = S());
                    var k = g[e];
                    k !== d && (l = k && b(k, !0, f, h), d = k);
                    l && (g[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                      'class' === e && a !== b ? g.$updateClass(a, b) : g.$set(e, a);
                    }));
                  }
                };
              }
            });
          }
        }
        function ma(a, b, c) {
          var d = b[0], e = b.length, g = d.parentNode, f, h;
          if (a)
            for (f = 0, h = a.length; f < h; f++)
              if (a[f] === d) {
                a[f++] = c;
                h = f + e - 1;
                for (var k = a.length; f < k; f++, h++)
                  h < k ? a[f] = a[h] : delete a[f];
                a.length -= e - 1;
                a.context === d && (a.context = c);
                break;
              }
          g && g.replaceChild(c, d);
          a = w.document.createDocumentFragment();
          for (f = 0; f < e; f++)
            a.appendChild(b[f]);
          z.hasData(d) && (z.data(c, z.data(d)), z(d).off('$destroy'));
          z.cleanData(a.querySelectorAll('*'));
          for (f = 1; f < e; f++)
            delete b[f];
          b[0] = c;
          b.length = 1;
        }
        function ta(a, b) {
          return O(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        function va(a, b, d, e, g, f) {
          try {
            a(b, d, e, g, f);
          } catch (h) {
            c(h, za(d));
          }
        }
        function pa(a, b) {
          if (s)
            throw ca('missingattr', a, b);
        }
        function qa(a, c, d, e, g) {
          function f(b, c, e) {
            C(d.$onChanges) && !cc(c, e) && (ha || (a.$$postDigest(N), ha = []), m || (m = {}, ha.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Jb(e, c));
          }
          function h() {
            d.$onChanges(m);
            m = void 0;
          }
          var k = [], l = {}, m;
          r(e, function (e, h) {
            var m = e.attrName, n = e.optional, t, G, s, F;
            switch (e.mode) {
            case '@':
              n || ra.call(c, m) || (pa(m, g.name), d[h] = c[m] = void 0);
              n = c.$observe(m, function (a) {
                if (E(a) || Na(a))
                  f(h, a, d[h]), d[h] = a;
              });
              c.$$observers[m].$$scope = a;
              t = c[m];
              E(t) ? d[h] = b(t)(a) : Na(t) && (d[h] = t);
              l[h] = new Jb(sc, d[h]);
              k.push(n);
              break;
            case '=':
              if (!ra.call(c, m)) {
                if (n)
                  break;
                pa(m, g.name);
                c[m] = void 0;
              }
              if (n && !c[m])
                break;
              G = p(c[m]);
              F = G.literal ? sa : cc;
              s = G.assign || function () {
                t = d[h] = G(a);
                throw ca('nonassign', c[m], m, g.name);
              };
              t = d[h] = G(a);
              n = function (b) {
                F(b, d[h]) || (F(b, t) ? s(a, b = d[h]) : d[h] = b);
                return t = b;
              };
              n.$stateful = !0;
              n = e.collection ? a.$watchCollection(c[m], n) : a.$watch(p(c[m], n), null, G.literal);
              k.push(n);
              break;
            case '<':
              if (!ra.call(c, m)) {
                if (n)
                  break;
                pa(m, g.name);
                c[m] = void 0;
              }
              if (n && !c[m])
                break;
              G = p(c[m]);
              var v = G.literal, y = d[h] = G(a);
              l[h] = new Jb(sc, d[h]);
              n = a.$watch(G, function (a, b) {
                if (b === a) {
                  if (b === y || v && sa(b, y))
                    return;
                  b = y;
                }
                f(h, a, b);
                d[h] = a;
              }, v);
              k.push(n);
              break;
            case '&':
              n || ra.call(c, m) || pa(m, g.name);
              G = c.hasOwnProperty(m) ? p(c[m]) : D;
              if (G === D && n)
                break;
              d[h] = function (b) {
                return G(a, b);
              };
            }
          });
          return {
            initialChanges: l,
            removeWatches: k.length && function () {
              for (var a = 0, b = k.length; a < b; ++a)
                k[a]();
            }
          };
        }
        var Ja = /^\w/, Ba = w.document.createElement('div'), Ka = y, La = t, Fa = v, ha;
        qc.prototype = {
          $normalize: Ea,
          $addClass: function (a) {
            a && 0 < a.length && P.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && P.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = rd(a, b);
            c && c.length && P.addClass(this.$$element, c);
            (c = rd(b, a)) && c.length && P.removeClass(this.$$element, c);
          },
          $set: function (a, b, d, e) {
            var g = kd(this.$$element[0], a), f = sd[a], h = a;
            g ? (this.$$element.prop(a, b), e = g) : f && (this[f] = b, h = f);
            this[a] = b;
            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Vc(a, '-'));
            g = ya(this.$$element);
            if ('a' === g && ('href' === a || 'xlinkHref' === a) || 'img' === g && 'src' === a)
              this[a] = b = q(b, 'src' === a);
            else if ('img' === g && 'srcset' === a && u(b)) {
              for (var g = '', f = Q(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(f) ? k : /(,)/, f = f.split(k), k = Math.floor(f.length / 2), l = 0; l < k; l++)
                var m = 2 * l, g = g + q(Q(f[m]), !0), g = g + (' ' + Q(f[m + 1]));
              f = Q(f[2 * l]).split(/\s/);
              g += q(Q(f[0]), !0);
              2 === f.length && (g += ' ' + Q(f[1]));
              this[a] = b = g;
            }
            !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Ja.test(e) ? this.$$element.attr(e, b) : Ta(this.$$element[0], e, b));
            (a = this.$$observers) && r(a[h], function (a) {
              try {
                a(b);
              } catch (d) {
                c(d);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = S()), e = d[a] || (d[a] = []);
            e.push(b);
            M.$evalAsync(function () {
              e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
            });
            return function () {
              cb(e, b);
            };
          }
        };
        var Ga = b.startSymbol(), Ha = b.endSymbol(), Ia = '{{' === Ga && '}}' === Ha ? ab : function (a) {
            return a.replace(/\{\{/g, Ga).replace(/}}/g, Ha);
          }, Pa = /^ngAttr[A-Z]/, Qa = /^(.+)Start$/;
        da.$$addBindingInfo = n ? function (a, b) {
          var c = a.data('$binding') || [];
          I(b) ? c = c.concat(b) : c.push(b);
          a.data('$binding', c);
        } : D;
        da.$$addBindingClass = n ? function (a) {
          na(a, 'ng-binding');
        } : D;
        da.$$addScopeInfo = n ? function (a, b, c, d) {
          a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b);
        } : D;
        da.$$addScopeClass = n ? function (a, b) {
          na(a, b ? 'ng-isolate-scope' : 'ng-scope');
        } : D;
        da.$$createComment = function (a, b) {
          var c = '';
          n && (c = ' ' + (a || '') + ': ', b && (c += b + ' '));
          return w.document.createComment(c);
        };
        return da;
      }
    ];
  }
  function Jb(a, b) {
    this.previousValue = a;
    this.currentValue = b;
  }
  function Ea(a) {
    return a.replace(od, '').replace(tg, function (a, d, c) {
      return c ? d.toUpperCase() : d;
    });
  }
  function rd(a, b) {
    var d = '', c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
    a:
      for (; f < c.length; f++) {
        for (var g = c[f], h = 0; h < e.length; h++)
          if (g === e[h])
            continue a;
        d += (0 < d.length ? ' ' : '') + g;
      }
    return d;
  }
  function qd(a) {
    a = z(a);
    var b = a.length;
    if (1 >= b)
      return a;
    for (; b--;) {
      var d = a[b];
      (8 === d.nodeType || d.nodeType === Oa && '' === d.nodeValue.trim()) && ug.call(a, b, 1);
    }
    return a;
  }
  function sg(a, b) {
    if (b && E(b))
      return b;
    if (E(a)) {
      var d = td.exec(a);
      if (d)
        return d[3];
    }
  }
  function yf() {
    var a = {}, b = !1;
    this.has = function (b) {
      return a.hasOwnProperty(b);
    };
    this.register = function (b, c) {
      Ia(b, 'controller');
      B(b) ? O(a, b) : a[b] = c;
    };
    this.allowGlobals = function () {
      b = !0;
    };
    this.$get = [
      '$injector',
      '$window',
      function (d, c) {
        function e(a, b, c, d) {
          if (!a || !B(a.$scope))
            throw K('$controller')('noscp', d, b);
          a.$scope[b] = c;
        }
        return function (f, g, h, k) {
          var l, m, p;
          h = !0 === h;
          k && E(k) && (p = k);
          if (E(f)) {
            k = f.match(td);
            if (!k)
              throw ud('ctrlfmt', f);
            m = k[1];
            p = p || k[3];
            f = a.hasOwnProperty(m) ? a[m] : Xc(g.$scope, m, !0) || (b ? Xc(c, m, !0) : void 0);
            if (!f)
              throw ud('ctrlreg', m);
            sb(f, m, !0);
          }
          if (h)
            return h = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), p && e(g, p, l, m || f.name), O(function () {
              var a = d.invoke(f, l, g, m);
              a !== l && (B(a) || C(a)) && (l = a, p && e(g, p, l, m || f.name));
              return l;
            }, {
              instance: l,
              identifier: p
            });
          l = d.instantiate(f, g, m);
          p && e(g, p, l, m || f.name);
          return l;
        };
      }
    ];
  }
  function zf() {
    this.$get = [
      '$window',
      function (a) {
        return z(a.document);
      }
    ];
  }
  function Af() {
    this.$get = [
      '$document',
      '$rootScope',
      function (a, b) {
        function d() {
          e = c.hidden;
        }
        var c = a[0], e = c && c.hidden;
        a.on('visibilitychange', d);
        b.$on('$destroy', function () {
          a.off('visibilitychange', d);
        });
        return function () {
          return e;
        };
      }
    ];
  }
  function Bf() {
    this.$get = [
      '$log',
      function (a) {
        return function (b, d) {
          a.error.apply(a, arguments);
        };
      }
    ];
  }
  function tc(a) {
    return B(a) ? fa(a) ? a.toISOString() : eb(a) : a;
  }
  function Gf() {
    this.$get = function () {
      return function (a) {
        if (!a)
          return '';
        var b = [];
        Oc(a, function (a, c) {
          null === a || x(a) || C(a) || (I(a) ? r(a, function (a) {
            b.push(ja(c) + '=' + ja(tc(a)));
          }) : b.push(ja(c) + '=' + ja(tc(a))));
        });
        return b.join('&');
      };
    };
  }
  function Hf() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || x(a) || (I(a) ? r(a, function (a, c) {
            b(a, e + '[' + (B(a) ? c : '') + ']');
          }) : B(a) && !fa(a) ? Oc(a, function (a, c) {
            b(a, e + (f ? '' : '[') + c + (f ? '' : ']'));
          }) : d.push(ja(e) + '=' + ja(tc(a))));
        }
        if (!a)
          return '';
        var d = [];
        b(a, '', !0);
        return d.join('&');
      };
    };
  }
  function uc(a, b) {
    if (E(a)) {
      var d = a.replace(vg, '').trim();
      if (d) {
        var c = b('Content-Type'), c = c && 0 === c.indexOf(vd), e;
        (e = c) || (e = (e = d.match(wg)) && xg[e[0]].test(d));
        if (e)
          try {
            a = Rc(d);
          } catch (f) {
            if (!c)
              return a;
            throw Kb('baddata', a, f);
          }
      }
    }
    return a;
  }
  function wd(a) {
    var b = S(), d;
    E(a) ? r(a.split('\n'), function (a) {
      d = a.indexOf(':');
      var e = L(Q(a.substr(0, d)));
      a = Q(a.substr(d + 1));
      e && (b[e] = b[e] ? b[e] + ', ' + a : a);
    }) : B(a) && r(a, function (a, d) {
      var f = L(d), g = Q(a);
      f && (b[f] = b[f] ? b[f] + ', ' + g : g);
    });
    return b;
  }
  function xd(a) {
    var b;
    return function (d) {
      b || (b = wd(a));
      return d ? (d = b[L(d)], void 0 === d && (d = null), d) : b;
    };
  }
  function yd(a, b, d, c) {
    if (C(c))
      return c(a, b, d);
    r(c, function (c) {
      a = c(a, b, d);
    });
    return a;
  }
  function Ff() {
    var a = this.defaults = {
        transformResponse: [uc],
        transformRequest: [function (a) {
            return B(a) && '[object File]' !== ia.call(a) && '[object Blob]' !== ia.call(a) && '[object FormData]' !== ia.call(a) ? eb(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ka(vc),
          put: ka(vc),
          patch: ka(vc)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        paramSerializer: '$httpParamSerializer',
        jsonpCallbackParam: 'callback'
      }, b = !1;
    this.useApplyAsync = function (a) {
      return u(a) ? (b = !!a, this) : b;
    };
    var d = this.interceptors = [];
    this.$get = [
      '$browser',
      '$httpBackend',
      '$$cookieReader',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      '$sce',
      function (c, e, f, g, h, k, l, m) {
        function p(b) {
          function d(a, b) {
            for (var c = 0, e = b.length; c < e;) {
              var g = b[c++], f = b[c++];
              a = a.then(g, f);
            }
            b.length = 0;
            return a;
          }
          function e(a, b) {
            var c, d = {};
            r(a, function (a, e) {
              C(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
            });
            return d;
          }
          function g(a) {
            var b = O({}, a);
            b.data = yd(a.data, a.headers, a.status, f.transformResponse);
            a = a.status;
            return 200 <= a && 300 > a ? b : k.reject(b);
          }
          if (!B(b))
            throw K('$http')('badreq', b);
          if (!E(m.valueOf(b.url)))
            throw K('$http')('badreq', b.url);
          var f = O({
              method: 'get',
              transformRequest: a.transformRequest,
              transformResponse: a.transformResponse,
              paramSerializer: a.paramSerializer,
              jsonpCallbackParam: a.jsonpCallbackParam
            }, b);
          f.headers = function (b) {
            var c = a.headers, d = O({}, b.headers), g, f, h, c = O({}, c.common, c[L(b.method)]);
            a:
              for (g in c) {
                f = L(g);
                for (h in d)
                  if (L(h) === f)
                    continue a;
                d[g] = c[g];
              }
            return e(d, ka(b));
          }(b);
          f.method = ub(f.method);
          f.paramSerializer = E(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
          c.$$incOutstandingRequestCount();
          var h = [], p = [];
          b = k.resolve(f);
          r(y, function (a) {
            (a.request || a.requestError) && h.unshift(a.request, a.requestError);
            (a.response || a.responseError) && p.push(a.response, a.responseError);
          });
          b = d(b, h);
          b = b.then(function (b) {
            var c = b.headers, d = yd(b.data, xd(c), void 0, b.transformRequest);
            x(d) && r(c, function (a, b) {
              'content-type' === L(b) && delete c[b];
            });
            x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
            return n(b, d).then(g, g);
          });
          b = d(b, p);
          return b = b.finally(function () {
            c.$$completeOutstandingRequest(D);
          });
        }
        function n(c, d) {
          function g(a) {
            if (a) {
              var c = {};
              r(a, function (a, d) {
                c[d] = function (c) {
                  function d() {
                    a(c);
                  }
                  b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
                };
              });
              return c;
            }
          }
          function l(a, c, d, e, g) {
            function f() {
              n(c, a, d, e, g);
            }
            M && (200 <= a && 300 > a ? M.put(N, [
              a,
              c,
              wd(d),
              e,
              g
            ]) : M.remove(N));
            b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
          }
          function n(a, b, d, e, g) {
            b = -1 <= b ? b : 0;
            (200 <= b && 300 > b ? J.resolve : J.reject)({
              data: a,
              status: b,
              headers: xd(d),
              config: c,
              statusText: e,
              xhrStatus: g
            });
          }
          function G(a) {
            n(a.data, a.status, ka(a.headers()), a.statusText, a.xhrStatus);
          }
          function y() {
            var a = p.pendingRequests.indexOf(c);
            -1 !== a && p.pendingRequests.splice(a, 1);
          }
          var J = k.defer(), R = J.promise, M, T, P = c.headers, q = 'jsonp' === L(c.method), N = c.url;
          q ? N = m.getTrustedResourceUrl(N) : E(N) || (N = m.valueOf(N));
          N = F(N, c.paramSerializer(c.params));
          q && (N = s(N, c.jsonpCallbackParam));
          p.pendingRequests.push(c);
          R.then(y, y);
          !c.cache && !a.cache || !1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method || (M = B(c.cache) ? c.cache : B(a.cache) ? a.cache : v);
          M && (T = M.get(N), u(T) ? T && C(T.then) ? T.then(G, G) : I(T) ? n(T[1], T[0], ka(T[2]), T[3], T[4]) : n(T, 200, {}, 'OK', 'complete') : M.put(N, R));
          x(T) && ((T = zd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (P[c.xsrfHeaderName || a.xsrfHeaderName] = T), e(c.method, N, d, l, P, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
          return R;
        }
        function F(a, b) {
          0 < b.length && (a += (-1 === a.indexOf('?') ? '?' : '&') + b);
          return a;
        }
        function s(a, b) {
          var c = a.split('?');
          if (2 < c.length)
            throw Kb('badjsonp', a);
          c = ec(c[1]);
          r(c, function (c, d) {
            if ('JSON_CALLBACK' === c)
              throw Kb('badjsonp', a);
            if (d === b)
              throw Kb('badjsonp', b, a);
          });
          return a += (-1 === a.indexOf('?') ? '?' : '&') + b + '=JSON_CALLBACK';
        }
        var v = g('$http');
        a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
        var y = [];
        r(d, function (a) {
          y.unshift(E(a) ? l.get(a) : l.invoke(a));
        });
        p.pendingRequests = [];
        (function (a) {
          r(arguments, function (a) {
            p[a] = function (b, c) {
              return p(O({}, c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          r(arguments, function (a) {
            p[a] = function (b, c, d) {
              return p(O({}, d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put', 'patch'));
        p.defaults = a;
        return p;
      }
    ];
  }
  function Jf() {
    this.$get = function () {
      return function () {
        return new w.XMLHttpRequest();
      };
    };
  }
  function If() {
    this.$get = [
      '$browser',
      '$jsonpCallbacks',
      '$document',
      '$xhrFactory',
      function (a, b, d, c) {
        return yg(a, c, a.defer, b, d[0]);
      }
    ];
  }
  function yg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace('JSON_CALLBACK', b);
      var f = e.createElement('script'), m = null;
      f.type = 'text/javascript';
      f.src = a;
      f.async = !0;
      m = function (a) {
        f.removeEventListener('load', m);
        f.removeEventListener('error', m);
        e.body.removeChild(f);
        f = null;
        var g = -1, F = 'unknown';
        a && ('load' !== a.type || c.wasCalled(b) || (a = { type: 'error' }), F = a.type, g = 'error' === a.type ? 404 : 200);
        d && d(g, F);
      };
      f.addEventListener('load', m);
      f.addEventListener('error', m);
      e.body.appendChild(f);
      return m;
    }
    return function (e, h, k, l, m, p, n, F, s, v) {
      function y() {
        q && q();
        A && A.abort();
      }
      function t(a, b, c, e, g, f) {
        u(G) && d.cancel(G);
        q = A = null;
        a(b, c, e, g, f);
      }
      h = h || a.url();
      if ('jsonp' === L(e))
        var Aa = c.createCallback(h), q = f(h, Aa, function (a, b) {
            var d = 200 === a && c.getResponse(Aa);
            t(l, a, d, '', b, 'complete');
            c.removeCallback(Aa);
          });
      else {
        var A = b(e, h);
        A.open(e, h, !0);
        r(m, function (a, b) {
          u(a) && A.setRequestHeader(b, a);
        });
        A.onload = function () {
          var a = A.statusText || '', b = 'response' in A ? A.response : A.responseText, c = 1223 === A.status ? 204 : A.status;
          0 === c && (c = b ? 200 : 'file' === ta(h).protocol ? 404 : 0);
          t(l, c, b, A.getAllResponseHeaders(), a, 'complete');
        };
        A.onerror = function () {
          t(l, -1, null, null, '', 'error');
        };
        A.onabort = function () {
          t(l, -1, null, null, '', 'abort');
        };
        A.ontimeout = function () {
          t(l, -1, null, null, '', 'timeout');
        };
        r(s, function (a, b) {
          A.addEventListener(b, a);
        });
        r(v, function (a, b) {
          A.upload.addEventListener(b, a);
        });
        n && (A.withCredentials = !0);
        if (F)
          try {
            A.responseType = F;
          } catch (H) {
            if ('json' !== F)
              throw H;
          }
        A.send(x(k) ? null : k);
      }
      if (0 < p)
        var G = d(y, p);
      else
        p && C(p.then) && p.then(y);
    };
  }
  function Df() {
    var a = '{{', b = '}}';
    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (d, c, e) {
        function f(a) {
          return '\\\\\\' + a;
        }
        function g(c) {
          return c.replace(p, a).replace(n, b);
        }
        function h(a, b, c, d) {
          var e = a.$watch(function (a) {
              e();
              return d(a);
            }, b, c);
          return e;
        }
        function k(f, k, p, n) {
          function t(a) {
            try {
              var b = a;
              a = p ? e.getTrusted(p, b) : e.valueOf(b);
              return n && !u(a) ? a : gc(a);
            } catch (d) {
              c(Fa.interr(f, d));
            }
          }
          if (!f.length || -1 === f.indexOf(a)) {
            var r;
            k || (k = g(f), r = la(k), r.exp = f, r.expressions = [], r.$$watchDelegate = h);
            return r;
          }
          n = !!n;
          var q, A, H = 0, G = [], ba = [];
          r = f.length;
          for (var J = [], R = []; H < r;)
            if (-1 !== (q = f.indexOf(a, H)) && -1 !== (A = f.indexOf(b, q + l)))
              H !== q && J.push(g(f.substring(H, q))), H = f.substring(q + l, A), G.push(H), ba.push(d(H, t)), H = A + m, R.push(J.length), J.push('');
            else {
              H !== r && J.push(g(f.substring(H)));
              break;
            }
          p && 1 < J.length && Fa.throwNoconcat(f);
          if (!k || G.length) {
            var M = function (a) {
              for (var b = 0, c = G.length; b < c; b++) {
                if (n && x(a[b]))
                  return;
                J[R[b]] = a[b];
              }
              return J.join('');
            };
            return O(function (a) {
              var b = 0, d = G.length, e = Array(d);
              try {
                for (; b < d; b++)
                  e[b] = ba[b](a);
                return M(e);
              } catch (g) {
                c(Fa.interr(f, g));
              }
            }, {
              exp: f,
              expressions: G,
              $$watchDelegate: function (a, b) {
                var c;
                return a.$watchGroup(ba, function (d, e) {
                  var g = M(d);
                  b.call(this, g, d !== e ? c : g, a);
                  c = g;
                });
              }
            });
          }
        }
        var l = a.length, m = b.length, p = new RegExp(a.replace(/./g, f), 'g'), n = new RegExp(b.replace(/./g, f), 'g');
        k.startSymbol = function () {
          return a;
        };
        k.endSymbol = function () {
          return b;
        };
        return k;
      }
    ];
  }
  function Ef() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      '$$q',
      '$browser',
      function (a, b, d, c, e) {
        function f(f, k, l, m) {
          function p() {
            n ? f.apply(null, F) : f(y);
          }
          var n = 4 < arguments.length, F = n ? xa.call(arguments, 4) : [], s = b.setInterval, v = b.clearInterval, y = 0, t = u(m) && !m, r = (t ? c : d).defer(), q = r.promise;
          l = u(l) ? l : 0;
          q.$$intervalId = s(function () {
            t ? e.defer(p) : a.$evalAsync(p);
            r.notify(y++);
            0 < l && y >= l && (r.resolve(y), v(q.$$intervalId), delete g[q.$$intervalId]);
            t || a.$apply();
          }, k);
          g[q.$$intervalId] = r;
          return q;
        }
        var g = {};
        f.cancel = function (a) {
          return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.$$state.pur = !0, g[a.$$intervalId].reject('canceled'), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
        };
        return f;
      }
    ];
  }
  function wc(a) {
    a = a.split('/');
    for (var b = a.length; b--;)
      a[b] = fb(a[b].replace(/%2F/g, '/'));
    return a.join('/');
  }
  function Ad(a, b) {
    var d = ta(a);
    b.$$protocol = d.protocol;
    b.$$host = d.hostname;
    b.$$port = Z(d.port) || zg[d.protocol] || null;
  }
  function Bd(a, b, d) {
    if (Ag.test(a))
      throw kb('badpath', a);
    var c = '/' !== a.charAt(0);
    c && (a = '/' + a);
    a = ta(a);
    for (var c = (c && '/' === a.pathname.charAt(0) ? a.pathname.substring(1) : a.pathname).split('/'), e = c.length; e--;)
      c[e] = decodeURIComponent(c[e]), d && (c[e] = c[e].replace(/\//g, '%2F'));
    d = c.join('/');
    b.$$path = d;
    b.$$search = ec(a.search);
    b.$$hash = decodeURIComponent(a.hash);
    b.$$path && '/' !== b.$$path.charAt(0) && (b.$$path = '/' + b.$$path);
  }
  function xc(a, b) {
    return a.slice(0, b.length) === b;
  }
  function ua(a, b) {
    if (xc(b, a))
      return b.substr(a.length);
  }
  function La(a) {
    var b = a.indexOf('#');
    return -1 === b ? a : a.substr(0, b);
  }
  function lb(a) {
    return a.replace(/(#.+)|#$/, '$1');
  }
  function yc(a, b, d) {
    this.$$html5 = !0;
    d = d || '';
    Ad(a, this);
    this.$$parse = function (a) {
      var d = ua(b, a);
      if (!E(d))
        throw kb('ipthprfx', a, b);
      Bd(d, this, !0);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = fc(this.$$search), d = this.$$hash ? '#' + fb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (a ? '?' + a : '') + d;
      this.$$absUrl = b + this.$$url.substr(1);
      this.$$urlUpdatedByLocation = !0;
    };
    this.$$parseLinkUrl = function (c, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      u(f = ua(a, c)) ? (g = f, g = d && u(f = ua(d, f)) ? b + (ua('/', f) || f) : a + g) : u(f = ua(b, c)) ? g = b + f : b === c + '/' && (g = b);
      g && this.$$parse(g);
      return !!g;
    };
  }
  function zc(a, b, d) {
    Ad(a, this);
    this.$$parse = function (c) {
      var e = ua(a, c) || ua(b, c), f;
      x(e) || '#' !== e.charAt(0) ? this.$$html5 ? f = e : (f = '', x(e) && (a = c, this.replace())) : (f = ua(d, e), x(f) && (f = e));
      Bd(f, this, !1);
      c = this.$$path;
      var e = a, g = /^\/[A-Z]:(\/.*)/;
      xc(f, e) && (f = f.replace(e, ''));
      g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
      this.$$path = c;
      this.$$compose();
    };
    this.$$compose = function () {
      var b = fc(this.$$search), e = this.$$hash ? '#' + fb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (b ? '?' + b : '') + e;
      this.$$absUrl = a + (this.$$url ? d + this.$$url : '');
      this.$$urlUpdatedByLocation = !0;
    };
    this.$$parseLinkUrl = function (b, d) {
      return La(a) === La(b) ? (this.$$parse(b), !0) : !1;
    };
  }
  function Cd(a, b, d) {
    this.$$html5 = !0;
    zc.apply(this, arguments);
    this.$$parseLinkUrl = function (c, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      a === La(c) ? f = c : (g = ua(b, c)) ? f = a + d + g : b === c + '/' && (f = b);
      f && this.$$parse(f);
      return !!f;
    };
    this.$$compose = function () {
      var b = fc(this.$$search), e = this.$$hash ? '#' + fb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (b ? '?' + b : '') + e;
      this.$$absUrl = a + d + this.$$url;
      this.$$urlUpdatedByLocation = !0;
    };
  }
  function Lb(a) {
    return function () {
      return this[a];
    };
  }
  function Dd(a, b) {
    return function (d) {
      if (x(d))
        return this[a];
      this[a] = b(d);
      this.$$compose();
      return this;
    };
  }
  function Lf() {
    var a = '!', b = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function (b) {
      return u(b) ? (a = b, this) : a;
    };
    this.html5Mode = function (a) {
      if (Na(a))
        return b.enabled = a, this;
      if (B(a)) {
        Na(a.enabled) && (b.enabled = a.enabled);
        Na(a.requireBase) && (b.requireBase = a.requireBase);
        if (Na(a.rewriteLinks) || E(a.rewriteLinks))
          b.rewriteLinks = a.rewriteLinks;
        return this;
      }
      return b;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      '$window',
      function (d, c, e, f, g) {
        function h(a, b, d) {
          var e = l.url(), g = l.$$state;
          try {
            c.url(a, b, d), l.$$state = c.state();
          } catch (f) {
            throw l.url(e), l.$$state = g, f;
          }
        }
        function k(a, b) {
          d.$broadcast('$locationChangeSuccess', l.absUrl(), a, l.$$state, b);
        }
        var l, m;
        m = c.baseHref();
        var p = c.url(), n;
        if (b.enabled) {
          if (!m && b.requireBase)
            throw kb('nobase');
          n = p.substring(0, p.indexOf('/', p.indexOf('//') + 2)) + (m || '/');
          m = e.history ? yc : Cd;
        } else
          n = La(p), m = zc;
        var F = n.substr(0, La(n).lastIndexOf('/') + 1);
        l = new m(n, F, '#' + a);
        l.$$parseLinkUrl(p, p);
        l.$$state = c.state();
        var s = /^\s*(javascript|mailto):/i;
        f.on('click', function (a) {
          var e = b.rewriteLinks;
          if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
            for (var h = z(a.target); 'a' !== ya(h[0]);)
              if (h[0] === f[0] || !(h = h.parent())[0])
                return;
            if (!E(e) || !x(h.attr(e))) {
              var e = h.prop('href'), k = h.attr('href') || h.attr('xlink:href');
              B(e) && '[object SVGAnimatedString]' === e.toString() && (e = ta(e.animVal).href);
              s.test(e) || !e || h.attr('target') || a.isDefaultPrevented() || !l.$$parseLinkUrl(e, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular['ff-684208-preventDefault'] = !0));
            }
          }
        });
        lb(l.absUrl()) !== lb(p) && c.url(l.absUrl(), !0);
        var v = !0;
        c.onUrlChange(function (a, b) {
          xc(a, F) ? (d.$evalAsync(function () {
            var c = l.absUrl(), e = l.$$state, g;
            a = lb(a);
            l.$$parse(a);
            l.$$state = b;
            g = d.$broadcast('$locationChangeStart', a, c, b, e).defaultPrevented;
            l.absUrl() === a && (g ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (v = !1, k(c, e)));
          }), d.$$phase || d.$digest()) : g.location.href = a;
        });
        d.$watch(function () {
          if (v || l.$$urlUpdatedByLocation) {
            l.$$urlUpdatedByLocation = !1;
            var a = lb(c.url()), b = lb(l.absUrl()), g = c.state(), f = l.$$replace, m = a !== b || l.$$html5 && e.history && g !== l.$$state;
            if (v || m)
              v = !1, d.$evalAsync(function () {
                var b = l.absUrl(), c = d.$broadcast('$locationChangeStart', b, a, l.$$state, g).defaultPrevented;
                l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = g) : (m && h(b, f, g === l.$$state ? null : l.$$state), k(a, g)));
              });
          }
          l.$$replace = !1;
        });
        return l;
      }
    ];
  }
  function Mf() {
    var a = !0, b = this;
    this.debugEnabled = function (b) {
      return u(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$window',
      function (d) {
        function c(a) {
          bc(a) && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = d.console || {}, e = b[a] || b.log || D;
          return function () {
            var a = [];
            r(arguments, function (b) {
              a.push(c(b));
            });
            return Function.prototype.apply.call(e, b, a);
          };
        }
        var f = Ca || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              a && c.apply(b, arguments);
            };
          }()
        };
      }
    ];
  }
  function Bg(a) {
    return a + '';
  }
  function Cg(a, b) {
    return 'undefined' !== typeof a ? a : b;
  }
  function Ed(a, b) {
    return 'undefined' === typeof a ? b : 'undefined' === typeof b ? a : a + b;
  }
  function Dg(a, b) {
    switch (a.type) {
    case q.MemberExpression:
      if (a.computed)
        return !1;
      break;
    case q.UnaryExpression:
      return 1;
    case q.BinaryExpression:
      return '+' !== a.operator ? 1 : !1;
    case q.CallExpression:
      return !1;
    }
    return void 0 === b ? Fd : b;
  }
  function W(a, b, d) {
    var c, e, f = a.isPure = Dg(a, d);
    switch (a.type) {
    case q.Program:
      c = !0;
      r(a.body, function (a) {
        W(a.expression, b, f);
        c = c && a.expression.constant;
      });
      a.constant = c;
      break;
    case q.Literal:
      a.constant = !0;
      a.toWatch = [];
      break;
    case q.UnaryExpression:
      W(a.argument, b, f);
      a.constant = a.argument.constant;
      a.toWatch = a.argument.toWatch;
      break;
    case q.BinaryExpression:
      W(a.left, b, f);
      W(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = a.left.toWatch.concat(a.right.toWatch);
      break;
    case q.LogicalExpression:
      W(a.left, b, f);
      W(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = a.constant ? [] : [a];
      break;
    case q.ConditionalExpression:
      W(a.test, b, f);
      W(a.alternate, b, f);
      W(a.consequent, b, f);
      a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
      a.toWatch = a.constant ? [] : [a];
      break;
    case q.Identifier:
      a.constant = !1;
      a.toWatch = [a];
      break;
    case q.MemberExpression:
      W(a.object, b, f);
      a.computed && W(a.property, b, f);
      a.constant = a.object.constant && (!a.computed || a.property.constant);
      a.toWatch = a.constant ? [] : [a];
      break;
    case q.CallExpression:
      c = d = a.filter ? !b(a.callee.name).$stateful : !1;
      e = [];
      r(a.arguments, function (a) {
        W(a, b, f);
        c = c && a.constant;
        e.push.apply(e, a.toWatch);
      });
      a.constant = c;
      a.toWatch = d ? e : [a];
      break;
    case q.AssignmentExpression:
      W(a.left, b, f);
      W(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = [a];
      break;
    case q.ArrayExpression:
      c = !0;
      e = [];
      r(a.elements, function (a) {
        W(a, b, f);
        c = c && a.constant;
        e.push.apply(e, a.toWatch);
      });
      a.constant = c;
      a.toWatch = e;
      break;
    case q.ObjectExpression:
      c = !0;
      e = [];
      r(a.properties, function (a) {
        W(a.value, b, f);
        c = c && a.value.constant;
        e.push.apply(e, a.value.toWatch);
        a.computed && (W(a.key, b, !1), c = c && a.key.constant, e.push.apply(e, a.key.toWatch));
      });
      a.constant = c;
      a.toWatch = e;
      break;
    case q.ThisExpression:
      a.constant = !1;
      a.toWatch = [];
      break;
    case q.LocalsExpression:
      a.constant = !1, a.toWatch = [];
    }
  }
  function Gd(a) {
    if (1 === a.length) {
      a = a[0].expression;
      var b = a.toWatch;
      return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }
  function Hd(a) {
    return a.type === q.Identifier || a.type === q.MemberExpression;
  }
  function Id(a) {
    if (1 === a.body.length && Hd(a.body[0].expression))
      return {
        type: q.AssignmentExpression,
        left: a.body[0].expression,
        right: { type: q.NGValueParameter },
        operator: '='
      };
  }
  function Jd(a) {
    this.$filter = a;
  }
  function Kd(a) {
    this.$filter = a;
  }
  function Mb(a, b, d) {
    this.ast = new q(a, d);
    this.astCompiler = d.csp ? new Kd(b) : new Jd(b);
  }
  function Ac(a) {
    return C(a.valueOf) ? a.valueOf() : Eg.call(a);
  }
  function Nf() {
    var a = S(), b = {
        'true': !0,
        'false': !1,
        'null': null,
        undefined: void 0
      }, d, c;
    this.addLiteral = function (a, c) {
      b[a] = c;
    };
    this.setIdentifierFns = function (a, b) {
      d = a;
      c = b;
      return this;
    };
    this.$get = [
      '$filter',
      function (e) {
        function f(b, c) {
          var d, g;
          switch (typeof b) {
          case 'string':
            return g = b = b.trim(), d = a[g], d || (d = new Nb(n), d = new Mb(d, e, n).parse(b), d.constant ? d.$$watchDelegate = m : d.oneTime ? d.$$watchDelegate = d.literal ? l : k : d.inputs && (d.$$watchDelegate = h), a[g] = d), p(d, c);
          case 'function':
            return p(b, c);
          default:
            return p(D, c);
          }
        }
        function g(a, b, c) {
          return null == a || null == b ? a === b : 'object' !== typeof a || (a = Ac(a), 'object' !== typeof a || c) ? a === b || a !== a && b !== b : !1;
        }
        function h(a, b, c, d, e) {
          var f = d.inputs, h;
          if (1 === f.length) {
            var k = g, f = f[0];
            return a.$watch(function (a) {
              var b = f(a);
              g(b, k, f.isPure) || (h = d(a, void 0, void 0, [b]), k = b && Ac(b));
              return h;
            }, b, c, e);
          }
          for (var l = [], m = [], p = 0, n = f.length; p < n; p++)
            l[p] = g, m[p] = null;
          return a.$watch(function (a) {
            for (var b = !1, c = 0, e = f.length; c < e; c++) {
              var k = f[c](a);
              if (b || (b = !g(k, l[c], f[c].isPure)))
                m[c] = k, l[c] = k && Ac(k);
            }
            b && (h = d(a, void 0, void 0, m));
            return h;
          }, b, c, e);
        }
        function k(a, b, c, d, e) {
          function g(a) {
            return d(a);
          }
          function f(a, c, d) {
            l = a;
            C(b) && b(a, c, d);
            u(a) && d.$$postDigest(function () {
              u(l) && k();
            });
          }
          var k, l;
          return k = d.inputs ? h(a, f, c, d, e) : a.$watch(g, f, c);
        }
        function l(a, b, c, d) {
          function e(a) {
            var b = !0;
            r(a, function (a) {
              u(a) || (b = !1);
            });
            return b;
          }
          var g, f;
          return g = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            f = a;
            C(b) && b(a, c, d);
            e(a) && d.$$postDigest(function () {
              e(f) && g();
            });
          }, c);
        }
        function m(a, b, c, d) {
          var e = a.$watch(function (a) {
              e();
              return d(a);
            }, b, c);
          return e;
        }
        function p(a, b) {
          if (!b)
            return a;
          var c = a.$$watchDelegate, d = !1, e = c !== l && c !== k ? function (c, e, g, f) {
              g = d && f ? f[0] : a(c, e, g, f);
              return b(g, c, e);
            } : function (c, d, e, g) {
              e = a(c, d, e, g);
              c = b(e, c, d);
              return u(e) ? c : e;
            }, d = !a.inputs;
          c && c !== h ? (e.$$watchDelegate = c, e.inputs = a.inputs) : b.$stateful || (e.$$watchDelegate = h, e.inputs = a.inputs ? a.inputs : [a]);
          e.inputs && (e.inputs = e.inputs.map(function (a) {
            return a.isPure === Fd ? function (b) {
              return a(b);
            } : a;
          }));
          return e;
        }
        var n = {
            csp: Ja().noUnsafeEval,
            literals: pa(b),
            isIdentifierStart: C(d) && d,
            isIdentifierContinue: C(c) && c
          };
        f.$$getAst = function (a) {
          var b = new Nb(n);
          return new Mb(b, e, n).getAst(a).ast;
        };
        return f;
      }
    ];
  }
  function Pf() {
    var a = !0;
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, d) {
        return Ld(function (a) {
          b.$evalAsync(a);
        }, d, a);
      }
    ];
    this.errorOnUnhandledRejections = function (b) {
      return u(b) ? (a = b, this) : a;
    };
  }
  function Qf() {
    var a = !0;
    this.$get = [
      '$browser',
      '$exceptionHandler',
      function (b, d) {
        return Ld(function (a) {
          b.defer(a);
        }, d, a);
      }
    ];
    this.errorOnUnhandledRejections = function (b) {
      return u(b) ? (a = b, this) : a;
    };
  }
  function Ld(a, b, d) {
    function c() {
      return new e();
    }
    function e() {
      var a = this.promise = new f();
      this.resolve = function (b) {
        k(a, b);
      };
      this.reject = function (b) {
        m(a, b);
      };
      this.notify = function (b) {
        n(a, b);
      };
    }
    function f() {
      this.$$state = { status: 0 };
    }
    function g() {
      for (; !u && w.length;) {
        var a = w.shift();
        if (!a.pur) {
          a.pur = !0;
          var c = a.value, c = 'Possibly unhandled rejection: ' + ('function' === typeof c ? c.toString().replace(/ \{[\s\S]*$/, '') : x(c) ? 'undefined' : 'string' !== typeof c ? De(c, void 0) : c);
          bc(a.value) ? b(a.value, c) : b(c);
        }
      }
    }
    function h(c) {
      !d || c.pending || 2 !== c.status || c.pur || (0 === u && 0 === w.length && a(g), w.push(c));
      !c.processScheduled && c.pending && (c.processScheduled = !0, ++u, a(function () {
        var e, f, h;
        h = c.pending;
        c.processScheduled = !1;
        c.pending = void 0;
        try {
          for (var l = 0, p = h.length; l < p; ++l) {
            c.pur = !0;
            f = h[l][0];
            e = h[l][c.status];
            try {
              C(e) ? k(f, e(c.value)) : 1 === c.status ? k(f, c.value) : m(f, c.value);
            } catch (n) {
              m(f, n), n && !0 === n.$$passToExceptionHandler && b(n);
            }
          }
        } finally {
          --u, d && 0 === u && a(g);
        }
      }));
    }
    function k(a, b) {
      a.$$state.status || (b === a ? p(a, t('qcycle', b)) : l(a, b));
    }
    function l(a, b) {
      function c(b) {
        g || (g = !0, l(a, b));
      }
      function d(b) {
        g || (g = !0, p(a, b));
      }
      function e(b) {
        n(a, b);
      }
      var f, g = !1;
      try {
        if (B(b) || C(b))
          f = b.then;
        C(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state));
      } catch (k) {
        d(k);
      }
    }
    function m(a, b) {
      a.$$state.status || p(a, b);
    }
    function p(a, b) {
      a.$$state.value = b;
      a.$$state.status = 2;
      h(a.$$state);
    }
    function n(c, d) {
      var e = c.$$state.pending;
      0 >= c.$$state.status && e && e.length && a(function () {
        for (var a, c, g = 0, f = e.length; g < f; g++) {
          c = e[g][0];
          a = e[g][3];
          try {
            n(c, C(a) ? a(d) : d);
          } catch (h) {
            b(h);
          }
        }
      });
    }
    function F(a) {
      var b = new f();
      m(b, a);
      return b;
    }
    function s(a, b, c) {
      var d = null;
      try {
        C(c) && (d = c());
      } catch (e) {
        return F(e);
      }
      return d && C(d.then) ? d.then(function () {
        return b(a);
      }, F) : b(a);
    }
    function v(a, b, c, d) {
      var e = new f();
      k(e, a);
      return e.then(b, c, d);
    }
    function q(a) {
      if (!C(a))
        throw t('norslvr', a);
      var b = new f();
      a(function (a) {
        k(b, a);
      }, function (a) {
        m(b, a);
      });
      return b;
    }
    var t = K('$q', TypeError), u = 0, w = [];
    O(f.prototype, {
      then: function (a, b, c) {
        if (x(a) && x(b) && x(c))
          return this;
        var d = new f();
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([
          d,
          a,
          b,
          c
        ]);
        0 < this.$$state.status && h(this.$$state);
        return d;
      },
      'catch': function (a) {
        return this.then(null, a);
      },
      'finally': function (a, b) {
        return this.then(function (b) {
          return s(b, A, a);
        }, function (b) {
          return s(b, F, a);
        }, b);
      }
    });
    var A = v;
    q.prototype = f.prototype;
    q.defer = c;
    q.reject = F;
    q.when = v;
    q.resolve = A;
    q.all = function (a) {
      var b = new f(), c = 0, d = I(a) ? [] : {};
      r(a, function (a, e) {
        c++;
        v(a).then(function (a) {
          d[e] = a;
          --c || k(b, d);
        }, function (a) {
          m(b, a);
        });
      });
      0 === c && k(b, d);
      return b;
    };
    q.race = function (a) {
      var b = c();
      r(a, function (a) {
        v(a).then(b.resolve, b.reject);
      });
      return b.promise;
    };
    return q;
  }
  function Zf() {
    this.$get = [
      '$window',
      '$timeout',
      function (a, b) {
        var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
            var b = d(a);
            return function () {
              c(b);
            };
          } : function (a) {
            var c = b(a, 16.66, !1);
            return function () {
              b.cancel(c);
            };
          };
        f.supported = e;
        return f;
      }
    ];
  }
  function Of() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++qb;
        this.$$ChildScope = null;
      }
      b.prototype = a;
      return b;
    }
    var b = 10, d = K('$rootScope'), c = null, e = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (f, g, h) {
        function k(a) {
          a.currentScope.$$destroyed = !0;
        }
        function l(a) {
          9 === Ca && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
          a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
        }
        function m() {
          this.$id = ++qb;
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this.$root = this;
          this.$$destroyed = !1;
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$watchersCount = 0;
          this.$$isolateBindings = null;
        }
        function p(a) {
          if (t.$$phase)
            throw d('inprog', t.$$phase);
          t.$$phase = a;
        }
        function n(a, b) {
          do
            a.$$watchersCount += b;
          while (a = a.$parent);
        }
        function F(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function s() {
        }
        function v() {
          for (; A.length;)
            try {
              A.shift()();
            } catch (a) {
              f(a);
            }
          e = null;
        }
        function q() {
          null === e && (e = h.defer(function () {
            t.$apply(v);
          }));
        }
        m.prototype = {
          constructor: m,
          $new: function (b, c) {
            var d;
            c = c || this;
            b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
            d.$parent = c;
            d.$$prevSibling = c.$$childTail;
            c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
            (b || c !== this) && d.$on('$destroy', k);
            return d;
          },
          $watch: function (a, b, d, e) {
            var f = g(a);
            b = C(b) ? b : D;
            if (f.$$watchDelegate)
              return f.$$watchDelegate(this, b, d, f, a);
            var h = this, k = h.$$watchers, l = {
                fn: b,
                last: s,
                get: f,
                exp: e || a,
                eq: !!d
              };
            c = null;
            k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
            k.unshift(l);
            k.$$digestWatchIndex++;
            n(this, 1);
            return function () {
              var a = cb(k, l);
              0 <= a && (n(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
              c = null;
            };
          },
          $watchGroup: function (a, b) {
            function c() {
              h = !1;
              k ? (k = !1, b(e, e, g)) : b(e, d, g);
            }
            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
            if (!a.length) {
              var l = !0;
              g.$evalAsync(function () {
                l && b(e, e, g);
              });
              return function () {
                l = !1;
              };
            }
            if (1 === a.length)
              return this.$watch(a[0], function (a, c, f) {
                e[0] = a;
                d[0] = c;
                b(e, a === c ? e : d, f);
              });
            r(a, function (a, b) {
              var k = g.$watch(a, function (a, f) {
                  e[b] = a;
                  d[b] = f;
                  h || (h = !0, g.$evalAsync(c));
                });
              f.push(k);
            });
            return function () {
              for (; f.length;)
                f.shift()();
            };
          },
          $watchCollection: function (a, b) {
            function c(a) {
              e = a;
              var b, d, g, h;
              if (!x(e)) {
                if (B(e))
                  if (wa(e))
                    for (f !== p && (f = p, t = f.length = 0, l++), a = e.length, t !== a && (l++, f.length = t = a), b = 0; b < a; b++)
                      h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                  else {
                    f !== n && (f = n = {}, t = 0, l++);
                    a = 0;
                    for (b in e)
                      ra.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (t++, f[b] = g, l++));
                    if (t > a)
                      for (b in l++, f)
                        ra.call(e, b) || (t--, delete f[b]);
                  }
                else
                  f !== e && (f = e, l++);
                return l;
              }
            }
            c.$stateful = !0;
            var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), p = [], n = {}, s = !0, t = 0;
            return this.$watch(m, function () {
              s ? (s = !1, b(e, e, d)) : b(e, h, d);
              if (k)
                if (B(e))
                  if (wa(e)) {
                    h = Array(e.length);
                    for (var a = 0; a < e.length; a++)
                      h[a] = e[a];
                  } else
                    for (a in h = {}, e)
                      ra.call(e, a) && (h[a] = e[a]);
                else
                  h = e;
            });
          },
          $digest: function () {
            var a, g, k, l, m, n, r, F = b, q, A = [], y, x;
            p('$digest');
            h.$$checkUrlChange();
            this === t && null !== e && (h.defer.cancel(e), v());
            c = null;
            do {
              r = !1;
              q = this;
              for (n = 0; n < u.length; n++) {
                try {
                  x = u[n], l = x.fn, l(x.scope, x.locals);
                } catch (z) {
                  f(z);
                }
                c = null;
              }
              u.length = 0;
              a:
                do {
                  if (n = q.$$watchers)
                    for (n.$$digestWatchIndex = n.length; n.$$digestWatchIndex--;)
                      try {
                        if (a = n[n.$$digestWatchIndex])
                          if (m = a.get, (g = m(q)) !== (k = a.last) && !(a.eq ? sa(g, k) : U(g) && U(k)))
                            r = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, q), 5 > F && (y = 4 - F, A[y] || (A[y] = []), A[y].push({
                              msg: C(a.exp) ? 'fn: ' + (a.exp.name || a.exp.toString()) : a.exp,
                              newVal: g,
                              oldVal: k
                            }));
                          else if (a === c) {
                            r = !1;
                            break a;
                          }
                      } catch (D) {
                        f(D);
                      }
                  if (!(n = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling))
                    for (; q !== this && !(n = q.$$nextSibling);)
                      q = q.$parent;
                } while (q = n);
              if ((r || u.length) && !F--)
                throw t.$$phase = null, d('infdig', b, A);
            } while (r || u.length);
            for (t.$$phase = null; H < w.length;)
              try {
                w[H++]();
              } catch (B) {
                f(B);
              }
            w.length = H = 0;
            h.$$checkUrlChange();
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this === t && h.$$applicationDestroyed();
              n(this, -this.$$watchersCount);
              for (var b in this.$$listenerCount)
                F(this, this.$$listenerCount[b], b);
              a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
              a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
              this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
              this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = D;
              this.$on = this.$watch = this.$watchGroup = function () {
                return D;
              };
              this.$$listeners = {};
              this.$$nextSibling = null;
              l(this);
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a, b) {
            t.$$phase || u.length || h.defer(function () {
              u.length && t.$digest();
            });
            u.push({
              scope: this,
              fn: g(a),
              locals: b
            });
          },
          $$postDigest: function (a) {
            w.push(a);
          },
          $apply: function (a) {
            try {
              p('$apply');
              try {
                return this.$eval(a);
              } finally {
                t.$$phase = null;
              }
            } catch (b) {
              f(b);
            } finally {
              try {
                t.$digest();
              } catch (c) {
                throw f(c), c;
              }
            }
          },
          $applyAsync: function (a) {
            function b() {
              c.$eval(a);
            }
            var c = this;
            a && A.push(b);
            a = g(a);
            q();
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              var d = c.indexOf(b);
              -1 !== d && (delete c[d], F(e, 1, a));
            };
          },
          $emit: function (a, b) {
            var c = [], d, e = this, g = !1, h = {
                name: a,
                targetScope: e,
                stopPropagation: function () {
                  g = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, k = db([h], arguments, 1), l, m;
            do {
              d = e.$$listeners[a] || c;
              h.currentScope = e;
              l = 0;
              for (m = d.length; l < m; l++)
                if (d[l])
                  try {
                    d[l].apply(null, k);
                  } catch (n) {
                    f(n);
                  }
                else
                  d.splice(l, 1), l--, m--;
              if (g)
                break;
              e = e.$parent;
            } while (e);
            h.currentScope = null;
            return h;
          },
          $broadcast: function (a, b) {
            var c = this, d = this, e = {
                name: a,
                targetScope: this,
                preventDefault: function () {
                  e.defaultPrevented = !0;
                },
                defaultPrevented: !1
              };
            if (!this.$$listenerCount[a])
              return e;
            for (var g = db([e], arguments, 1), h, k; c = d;) {
              e.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, g);
                  } catch (l) {
                    f(l);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            e.currentScope = null;
            return e;
          }
        };
        var t = new m(), u = t.$$asyncQueue = [], w = t.$$postDigestQueue = [], A = t.$$applyAsyncQueue = [], H = 0;
        return t;
      }
    ];
  }
  function Ge() {
    var a = /^\s*(https?|s?ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (b) {
      return u(b) ? (a = b, this) : a;
    };
    this.imgSrcSanitizationWhitelist = function (a) {
      return u(a) ? (b = a, this) : b;
    };
    this.$get = function () {
      return function (d, c) {
        var e = c ? b : a, f;
        f = ta(d && d.trim()).href;
        return '' === f || f.match(e) ? d : 'unsafe:' + f;
      };
    };
  }
  function Fg(a) {
    if ('self' === a)
      return a;
    if (E(a)) {
      if (-1 < a.indexOf('***'))
        throw va('iwcard', a);
      a = Md(a).replace(/\\\*\\\*/g, '.*').replace(/\\\*/g, '[^:/.?&;]*');
      return new RegExp('^' + a + '$');
    }
    if ($a(a))
      return new RegExp('^' + a.source + '$');
    throw va('imatcher');
  }
  function Nd(a) {
    var b = [];
    u(a) && r(a, function (a) {
      b.push(Fg(a));
    });
    return b;
  }
  function Sf() {
    this.SCE_CONTEXTS = oa;
    var a = ['self'], b = [];
    this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = Nd(b));
      return a;
    };
    this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = Nd(a));
      return b;
    };
    this.$get = [
      '$injector',
      function (d) {
        function c(a, b) {
          return 'self' === a ? zd(b) : !!a.exec(b.href);
        }
        function e(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var f = function (a) {
          throw va('unsafe');
        };
        d.has('$sanitize') && (f = d.get('$sanitize'));
        var g = e(), h = {};
        h[oa.HTML] = e(g);
        h[oa.CSS] = e(g);
        h[oa.URL] = e(g);
        h[oa.JS] = e(g);
        h[oa.RESOURCE_URL] = e(h[oa.URL]);
        return {
          trustAs: function (a, b) {
            var c = h.hasOwnProperty(a) ? h[a] : null;
            if (!c)
              throw va('icontext', a, b);
            if (null === b || x(b) || '' === b)
              return b;
            if ('string' !== typeof b)
              throw va('itype', a);
            return new c(b);
          },
          getTrusted: function (d, e) {
            if (null === e || x(e) || '' === e)
              return e;
            var g = h.hasOwnProperty(d) ? h[d] : null;
            if (g && e instanceof g)
              return e.$$unwrapTrustedValue();
            if (d === oa.RESOURCE_URL) {
              var g = ta(e.toString()), p, n, r = !1;
              p = 0;
              for (n = a.length; p < n; p++)
                if (c(a[p], g)) {
                  r = !0;
                  break;
                }
              if (r)
                for (p = 0, n = b.length; p < n; p++)
                  if (c(b[p], g)) {
                    r = !1;
                    break;
                  }
              if (r)
                return e;
              throw va('insecurl', e.toString());
            }
            if (d === oa.HTML)
              return f(e);
            throw va('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function Rf() {
    var a = !0;
    this.enabled = function (b) {
      arguments.length && (a = !!b);
      return a;
    };
    this.$get = [
      '$parse',
      '$sceDelegate',
      function (b, d) {
        if (a && 8 > Ca)
          throw va('iequirks');
        var c = ka(oa);
        c.isEnabled = function () {
          return a;
        };
        c.trustAs = d.trustAs;
        c.getTrusted = d.getTrusted;
        c.valueOf = d.valueOf;
        a || (c.trustAs = c.getTrusted = function (a, b) {
          return b;
        }, c.valueOf = ab);
        c.parseAs = function (a, d) {
          var e = b(d);
          return e.literal && e.constant ? e : b(d, function (b) {
            return c.getTrusted(a, b);
          });
        };
        var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
        r(oa, function (a, b) {
          var d = L(b);
          c[('parse_as_' + d).replace(Bc, wb)] = function (b) {
            return e(a, b);
          };
          c[('get_trusted_' + d).replace(Bc, wb)] = function (b) {
            return f(a, b);
          };
          c[('trust_as_' + d).replace(Bc, wb)] = function (b) {
            return g(a, b);
          };
        });
        return c;
      }
    ];
  }
  function Tf() {
    this.$get = [
      '$window',
      '$document',
      function (a, b) {
        var d = {}, c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState, e = Z((/android (\d+)/.exec(L((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h = g.body && g.body.style, k = !1, l = !1;
        h && (k = !!('transition' in h || 'webkitTransition' in h), l = !!('animation' in h || 'webkitAnimation' in h));
        return {
          history: !(!c || 4 > e || f),
          hasEvent: function (a) {
            if ('input' === a && Ca)
              return !1;
            if (x(d[a])) {
              var b = g.createElement('div');
              d[a] = 'on' + a in b;
            }
            return d[a];
          },
          csp: Ja(),
          transitions: k,
          animations: l,
          android: e
        };
      }
    ];
  }
  function Vf() {
    var a;
    this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$exceptionHandler',
      '$templateCache',
      '$http',
      '$q',
      '$sce',
      function (b, d, c, e, f) {
        function g(h, k) {
          g.totalPendingRequests++;
          if (!E(h) || x(d.get(h)))
            h = f.getTrustedResourceUrl(h);
          var l = c.defaults && c.defaults.transformResponse;
          I(l) ? l = l.filter(function (a) {
            return a !== uc;
          }) : l === uc && (l = null);
          return c.get(h, O({
            cache: d,
            transformResponse: l
          }, a)).finally(function () {
            g.totalPendingRequests--;
          }).then(function (a) {
            d.put(h, a.data);
            return a.data;
          }, function (a) {
            k || (a = Gg('tpload', h, a.status, a.statusText), b(a));
            return e.reject(a);
          });
        }
        g.totalPendingRequests = 0;
        return g;
      }
    ];
  }
  function Wf() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$location',
      function (a, b, d) {
        return {
          findBindings: function (a, b, d) {
            a = a.getElementsByClassName('ng-binding');
            var g = [];
            r(a, function (a) {
              var c = $.element(a).data('$binding');
              c && r(c, function (c) {
                d ? new RegExp('(^|\\s)' + Md(b) + '(\\s|\\||$)').test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
              });
            });
            return g;
          },
          findModels: function (a, b, d) {
            for (var g = [
                  'ng-',
                  'data-ng-',
                  'ng\\:'
                ], h = 0; h < g.length; ++h) {
              var k = a.querySelectorAll('[' + g[h] + 'model' + (d ? '=' : '*=') + '"' + b + '"]');
              if (k.length)
                return k;
            }
          },
          getLocation: function () {
            return d.url();
          },
          setLocation: function (b) {
            b !== d.url() && (d.url(b), a.$digest());
          },
          whenStable: function (a) {
            b.notifyWhenNoOutstandingRequests(a);
          }
        };
      }
    ];
  }
  function Xf() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$$q',
      '$exceptionHandler',
      function (a, b, d, c, e) {
        function f(f, k, l) {
          C(f) || (l = k, k = f, f = D);
          var m = xa.call(arguments, 3), p = u(l) && !l, n = (p ? c : d).defer(), r = n.promise, s;
          s = b.defer(function () {
            try {
              n.resolve(f.apply(null, m));
            } catch (b) {
              n.reject(b), e(b);
            } finally {
              delete g[r.$$timeoutId];
            }
            p || a.$apply();
          }, k);
          r.$$timeoutId = s;
          g[s] = n;
          return r;
        }
        var g = {};
        f.cancel = function (a) {
          return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.$$state.pur = !0, g[a.$$timeoutId].reject('canceled'), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
        };
        return f;
      }
    ];
  }
  function ta(a) {
    Ca && (X.setAttribute('href', a), a = X.href);
    X.setAttribute('href', a);
    return {
      href: X.href,
      protocol: X.protocol ? X.protocol.replace(/:$/, '') : '',
      host: X.host,
      search: X.search ? X.search.replace(/^\?/, '') : '',
      hash: X.hash ? X.hash.replace(/^#/, '') : '',
      hostname: X.hostname,
      port: X.port,
      pathname: '/' === X.pathname.charAt(0) ? X.pathname : '/' + X.pathname
    };
  }
  function zd(a) {
    a = E(a) ? ta(a) : a;
    return a.protocol === Od.protocol && a.host === Od.host;
  }
  function Yf() {
    this.$get = la(w);
  }
  function Pd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var d = a[0] || {}, c = {}, e = '';
    return function () {
      var a, g, h, k, l;
      try {
        a = d.cookie || '';
      } catch (m) {
        a = '';
      }
      if (a !== e)
        for (e = a, a = e.split('; '), c = {}, h = 0; h < a.length; h++)
          g = a[h], k = g.indexOf('='), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
      return c;
    };
  }
  function bg() {
    this.$get = Pd;
  }
  function ed(a) {
    function b(d, c) {
      if (B(d)) {
        var e = {};
        r(d, function (a, c) {
          e[c] = b(c, a);
        });
        return e;
      }
      return a.factory(d + 'Filter', c);
    }
    this.register = b;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + 'Filter');
        };
      }
    ];
    b('currency', Qd);
    b('date', Rd);
    b('filter', Hg);
    b('json', Ig);
    b('limitTo', Jg);
    b('lowercase', Kg);
    b('number', Sd);
    b('orderBy', Td);
    b('uppercase', Lg);
  }
  function Hg() {
    return function (a, b, d, c) {
      if (!wa(a)) {
        if (null == a)
          return a;
        throw K('filter')('notarray', a);
      }
      c = c || '$';
      var e;
      switch (Cc(b)) {
      case 'function':
        break;
      case 'boolean':
      case 'null':
      case 'number':
      case 'string':
        e = !0;
      case 'object':
        b = Mg(b, d, c, e);
        break;
      default:
        return a;
      }
      return Array.prototype.filter.call(a, b);
    };
  }
  function Mg(a, b, d, c) {
    var e = B(a) && d in a;
    !0 === b ? b = sa : C(b) || (b = function (a, b) {
      if (x(a))
        return !1;
      if (null === a || null === b)
        return a === b;
      if (B(b) || B(a) && !ac(a))
        return !1;
      a = L('' + a);
      b = L('' + b);
      return -1 !== a.indexOf(b);
    });
    return function (f) {
      return e && !B(f) ? ha(f, a[d], b, d, !1) : ha(f, a, b, d, c);
    };
  }
  function ha(a, b, d, c, e, f) {
    var g = Cc(a), h = Cc(b);
    if ('string' === h && '!' === b.charAt(0))
      return !ha(a, b.substring(1), d, c, e);
    if (I(a))
      return a.some(function (a) {
        return ha(a, b, d, c, e);
      });
    switch (g) {
    case 'object':
      var k;
      if (e) {
        for (k in a)
          if (k.charAt && '$' !== k.charAt(0) && ha(a[k], b, d, c, !0))
            return !0;
        return f ? !1 : ha(a, b, d, c, !1);
      }
      if ('object' === h) {
        for (k in b)
          if (f = b[k], !C(f) && !x(f) && (g = k === c, !ha(g ? a : a[k], f, d, c, g, g)))
            return !1;
        return !0;
      }
      return d(a, b);
    case 'function':
      return !1;
    default:
      return d(a, b);
    }
  }
  function Cc(a) {
    return null === a ? 'null' : typeof a;
  }
  function Qd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, e) {
      x(c) && (c = b.CURRENCY_SYM);
      x(e) && (e = b.PATTERNS[1].maxFrac);
      var f = c ? /\u00A4/g : /\s*\u00A4\s*/g;
      return null == a ? a : Ud(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(f, c);
    };
  }
  function Sd(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return null == a ? a : Ud(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }
  function Ng(a) {
    var b = 0, d, c, e, f, g;
    -1 < (c = a.indexOf(Vd)) && (a = a.replace(Vd, ''));
    0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
    for (e = 0; a.charAt(e) === Dc; e++);
    if (e === (g = a.length))
      d = [0], c = 1;
    else {
      for (g--; a.charAt(g) === Dc;)
        g--;
      c -= e;
      d = [];
      for (f = 0; e <= g; e++, f++)
        d[f] = +a.charAt(e);
    }
    c > Wd && (d = d.splice(0, Wd - 1), b = c - 1, c = 1);
    return {
      d: d,
      e: b,
      i: c
    };
  }
  function Og(a, b, d, c) {
    var e = a.d, f = e.length - a.i;
    b = x(b) ? Math.min(Math.max(d, f), c) : +b;
    d = b + a.i;
    c = e[d];
    if (0 < d) {
      e.splice(Math.max(a.i, d));
      for (var g = d; g < e.length; g++)
        e[g] = 0;
    } else
      for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++)
        e[g] = 0;
    if (5 <= c)
      if (0 > d - 1) {
        for (c = 0; c > d; c--)
          e.unshift(0), a.i++;
        e.unshift(1);
        a.i++;
      } else
        e[d - 1]++;
    for (; f < Math.max(0, b); f++)
      e.push(0);
    if (b = e.reduceRight(function (a, b, c, d) {
        b += a;
        d[c] = b % 10;
        return Math.floor(b / 10);
      }, 0))
      e.unshift(b), a.i++;
  }
  function Ud(a, b, d, c, e) {
    if (!E(a) && !Y(a) || isNaN(a))
      return '';
    var f = !isFinite(a), g = !1, h = Math.abs(a) + '', k = '';
    if (f)
      k = '\u221e';
    else {
      g = Ng(h);
      Og(g, e, b.minFrac, b.maxFrac);
      k = g.d;
      h = g.i;
      e = g.e;
      f = [];
      for (g = k.reduce(function (a, b) {
          return a && !b;
        }, !0); 0 > h;)
        k.unshift(0), h++;
      0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);
      h = [];
      for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join('')); k.length > b.gSize;)
        h.unshift(k.splice(-b.gSize, k.length).join(''));
      k.length && h.unshift(k.join(''));
      k = h.join(d);
      f.length && (k += c + f.join(''));
      e && (k += 'e+' + e);
    }
    return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }
  function Ob(a, b, d, c) {
    var e = '';
    if (0 > a || c && 0 >= a)
      c ? a = -a + 1 : (a = -a, e = '-');
    for (a = '' + a; a.length < b;)
      a = Dc + a;
    d && (a = a.substr(a.length - b));
    return e + a;
  }
  function ea(a, b, d, c, e) {
    d = d || 0;
    return function (f) {
      f = f['get' + a]();
      if (0 < d || f > -d)
        f += d;
      0 === f && -12 === d && (f = 12);
      return Ob(f, b, c, e);
    };
  }
  function mb(a, b, d) {
    return function (c, e) {
      var f = c['get' + a](), g = ub((d ? 'STANDALONE' : '') + (b ? 'SHORT' : '') + a);
      return e[g][f];
    };
  }
  function Xd(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }
  function Yd(a) {
    return function (b) {
      var d = Xd(b.getFullYear());
      b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
      b = 1 + Math.round(b / 604800000);
      return Ob(b, a);
    };
  }
  function Ec(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }
  function Rd(a) {
    function b(a) {
      var b;
      if (b = a.match(d)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
        h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
        f = Z(b[4] || 0) - f;
        g = Z(b[5] || 0) - g;
        h = Z(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        k.call(a, f, g, h, b);
      }
      return a;
    }
    var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, f) {
      var g = '', h = [], k, l;
      d = d || 'mediumDate';
      d = a.DATETIME_FORMATS[d] || d;
      E(c) && (c = Pg.test(c) ? Z(c) : b(c));
      Y(c) && (c = new Date(c));
      if (!fa(c) || !isFinite(c.getTime()))
        return c;
      for (; d;)
        (l = Qg.exec(d)) ? (h = db(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      var m = c.getTimezoneOffset();
      f && (m = Sc(f, m), c = dc(c, f, !0));
      r(h, function (b) {
        k = Rg[b];
        g += k ? k(c, a.DATETIME_FORMATS, m) : '\'\'' === b ? '\'' : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Ig() {
    return function (a, b) {
      x(b) && (b = 2);
      return eb(a, b);
    };
  }
  function Jg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);
      if (U(b))
        return a;
      Y(a) && (a = a.toString());
      if (!wa(a))
        return a;
      d = !d || isNaN(d) ? 0 : Z(d);
      d = 0 > d ? Math.max(0, a.length + d) : d;
      return 0 <= b ? Fc(a, d, d + b) : 0 === d ? Fc(a, b, a.length) : Fc(a, Math.max(0, d + b), d);
    };
  }
  function Fc(a, b, d) {
    return E(a) ? a.slice(b, d) : xa.call(a, b, d);
  }
  function Td(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1, d = ab;
        if (C(b))
          d = b;
        else if (E(b)) {
          if ('+' === b.charAt(0) || '-' === b.charAt(0))
            c = '-' === b.charAt(0) ? -1 : 1, b = b.substring(1);
          if ('' !== b && (d = a(b), d.constant))
            var e = d(), d = function (a) {
                return a[e];
              };
        }
        return {
          get: d,
          descending: c
        };
      });
    }
    function d(a) {
      switch (typeof a) {
      case 'number':
      case 'boolean':
      case 'string':
        return !0;
      default:
        return !1;
      }
    }
    function c(a, b) {
      var c = 0, d = a.type, k = b.type;
      if (d === k) {
        var k = a.value, l = b.value;
        'string' === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : 'object' === d && (B(k) && (k = a.index), B(l) && (l = b.index));
        k !== l && (c = k < l ? -1 : 1);
      } else
        c = d < k ? -1 : 1;
      return c;
    }
    return function (a, f, g, h) {
      if (null == a)
        return a;
      if (!wa(a))
        throw K('orderBy')('notarray', a);
      I(f) || (f = [f]);
      0 === f.length && (f = ['+']);
      var k = b(f), l = g ? -1 : 1, m = C(h) ? h : c;
      a = Array.prototype.map.call(a, function (a, b) {
        return {
          value: a,
          tieBreaker: {
            value: b,
            type: 'number',
            index: b
          },
          predicateValues: k.map(function (c) {
            var e = c.get(a);
            c = typeof e;
            if (null === e)
              c = 'string', e = 'null';
            else if ('object' === c)
              a: {
                if (C(e.valueOf) && (e = e.valueOf(), d(e)))
                  break a;
                ac(e) && (e = e.toString(), d(e));
              }
            return {
              value: e,
              type: c,
              index: b
            };
          })
        };
      });
      a.sort(function (a, b) {
        for (var d = 0, e = k.length; d < e; d++) {
          var g = m(a.predicateValues[d], b.predicateValues[d]);
          if (g)
            return g * k[d].descending * l;
        }
        return (m(a.tieBreaker, b.tieBreaker) || c(a.tieBreaker, b.tieBreaker)) * l;
      });
      return a = a.map(function (a) {
        return a.value;
      });
    };
  }
  function Qa(a) {
    C(a) && (a = { link: a });
    a.restrict = a.restrict || 'AC';
    return la(a);
  }
  function Pb(a, b, d, c, e) {
    this.$$controls = [];
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = e(b.name || b.ngForm || '')(d);
    this.$dirty = !1;
    this.$valid = this.$pristine = !0;
    this.$submitted = this.$invalid = !1;
    this.$$parentForm = Qb;
    this.$$element = a;
    this.$$animate = c;
    Zd(this);
  }
  function Zd(a) {
    a.$$classCache = {};
    a.$$classCache[$d] = !(a.$$classCache[nb] = a.$$element.hasClass(nb));
  }
  function ae(a) {
    function b(a, b, c) {
      c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
    }
    function d(a, c, d) {
      c = c ? '-' + Vc(c, '-') : '';
      b(a, nb + c, !0 === d);
      b(a, $d + c, !1 === d);
    }
    var c = a.set, e = a.unset;
    a.clazz.prototype.$setValidity = function (a, g, h) {
      x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && e(this.$pending, a, h), be(this.$pending) && (this.$pending = void 0));
      Na(g) ? g ? (e(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), e(this.$$success, a, h)) : (e(this.$error, a, h), e(this.$$success, a, h));
      this.$pending ? (b(this, 'ng-pending', !0), this.$valid = this.$invalid = void 0, d(this, '', null)) : (b(this, 'ng-pending', !1), this.$valid = be(this.$error), this.$invalid = !this.$valid, d(this, '', this.$valid));
      g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
      d(this, a, g);
      this.$$parentForm.$setValidity(a, g, this);
    };
  }
  function be(a) {
    if (a)
      for (var b in a)
        if (a.hasOwnProperty(b))
          return !1;
    return !0;
  }
  function Gc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }
  function Va(a, b, d, c, e, f) {
    var g = L(b[0].type);
    if (!e.android) {
      var h = !1;
      b.on('compositionstart', function () {
        h = !0;
      });
      b.on('compositionend', function () {
        h = !1;
        l();
      });
    }
    var k, l = function (a) {
        k && (f.defer.cancel(k), k = null);
        if (!h) {
          var e = b.val();
          a = a && a.type;
          'password' === g || d.ngTrim && 'false' === d.ngTrim || (e = Q(e));
          (c.$viewValue !== e || '' === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
        }
      };
    if (e.hasEvent('input'))
      b.on('input', l);
    else {
      var m = function (a, b, c) {
        k || (k = f.defer(function () {
          k = null;
          b && b.value === c || l(a);
        }));
      };
      b.on('keydown', function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });
      if (e.hasEvent('paste'))
        b.on('paste cut drop', m);
    }
    b.on('change', l);
    if (ce[g] && c.$$hasNativeValidators && g === d.type)
      b.on('keydown wheel mousedown', function (a) {
        if (!k) {
          var b = this.validity, c = b.badInput, d = b.typeMismatch;
          k = f.defer(function () {
            k = null;
            b.badInput === c && b.typeMismatch === d || l(a);
          });
        }
      });
    c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? '' : c.$viewValue;
      b.val() !== a && b.val(a);
    };
  }
  function Rb(a, b) {
    return function (d, c) {
      var e, f;
      if (fa(d))
        return d;
      if (E(d)) {
        '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
        if (Sg.test(d))
          return new Date(d);
        a.lastIndex = 0;
        if (e = a.exec(d))
          return e.shift(), f = c ? {
            yyyy: c.getFullYear(),
            MM: c.getMonth() + 1,
            dd: c.getDate(),
            HH: c.getHours(),
            mm: c.getMinutes(),
            ss: c.getSeconds(),
            sss: c.getMilliseconds() / 1000
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, r(e, function (a, c) {
            c < b.length && (f[b[c]] = +a);
          }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1000 * f.sss || 0);
      }
      return NaN;
    };
  }
  function ob(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function p(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }
      function n(a) {
        return u(a) && !fa(a) ? d(a) || void 0 : a;
      }
      Hc(e, f, g, h);
      Va(e, f, g, h, k, l);
      var r = h && h.$options.getOption('timezone'), s;
      h.$$parserName = a;
      h.$parsers.push(function (a) {
        if (h.$isEmpty(a))
          return null;
        if (b.test(a))
          return a = d(a, s), r && (a = dc(a, r)), a;
      });
      h.$formatters.push(function (a) {
        if (a && !fa(a))
          throw pb('datefmt', a);
        if (p(a))
          return (s = a) && r && (s = dc(s, r, !0)), m('date')(a, c, r);
        s = null;
        return '';
      });
      if (u(g.min) || g.ngMin) {
        var q;
        h.$validators.min = function (a) {
          return !p(a) || x(q) || d(a) >= q;
        };
        g.$observe('min', function (a) {
          q = n(a);
          h.$validate();
        });
      }
      if (u(g.max) || g.ngMax) {
        var y;
        h.$validators.max = function (a) {
          return !p(a) || x(y) || d(a) <= y;
        };
        g.$observe('max', function (a) {
          y = n(a);
          h.$validate();
        });
      }
    };
  }
  function Hc(a, b, d, c) {
    (c.$$hasNativeValidators = B(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop('validity') || {};
      return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }
  function de(a) {
    a.$$parserName = 'number';
    a.$parsers.push(function (b) {
      if (a.$isEmpty(b))
        return null;
      if (Tg.test(b))
        return parseFloat(b);
    });
    a.$formatters.push(function (b) {
      if (!a.$isEmpty(b)) {
        if (!Y(b))
          throw pb('numfmt', b);
        b = b.toString();
      }
      return b;
    });
  }
  function Wa(a) {
    u(a) && !Y(a) && (a = parseFloat(a));
    return U(a) ? void 0 : a;
  }
  function Ic(a) {
    var b = a.toString(), d = b.indexOf('.');
    return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
  }
  function ee(a, b, d) {
    a = Number(a);
    var c = (a | 0) !== a, e = (b | 0) !== b, f = (d | 0) !== d;
    if (c || e || f) {
      var g = c ? Ic(a) : 0, h = e ? Ic(b) : 0, k = f ? Ic(d) : 0, g = Math.max(g, h, k), g = Math.pow(10, g);
      a *= g;
      b *= g;
      d *= g;
      c && (a = Math.round(a));
      e && (b = Math.round(b));
      f && (d = Math.round(d));
    }
    return 0 === (a - b) % d;
  }
  function fe(a, b, d, c, e) {
    if (u(c)) {
      a = a(c);
      if (!a.constant)
        throw pb('constexpr', d, c);
      return a(b);
    }
    return e;
  }
  function Jc(a, b) {
    function d(a, b) {
      if (!a || !a.length)
        return [];
      if (!b || !b.length)
        return a;
      var c = [], d = 0;
      a:
        for (; d < a.length; d++) {
          for (var e = a[d], f = 0; f < b.length; f++)
            if (e === b[f])
              continue a;
          c.push(e);
        }
      return c;
    }
    function c(a) {
      var b = a;
      I(a) ? b = a.map(c).join(' ') : B(a) && (b = Object.keys(a).filter(function (b) {
        return a[b];
      }).join(' '));
      return b;
    }
    function e(a) {
      var b = a;
      if (I(a))
        b = a.map(e);
      else if (B(a)) {
        var c = !1, b = Object.keys(a).filter(function (b) {
            b = a[b];
            !c && x(b) && (c = !0);
            return b;
          });
        c && b.push(void 0);
      }
      return b;
    }
    a = 'ngClass' + a;
    var f;
    return [
      '$parse',
      function (g) {
        return {
          restrict: 'AC',
          link: function (h, k, l) {
            function m(a, b) {
              var c = [];
              r(a, function (a) {
                if (0 < b || t[a])
                  t[a] = (t[a] || 0) + b, t[a] === +(0 < b) && c.push(a);
              });
              return c.join(' ');
            }
            function p(a) {
              if (a === b) {
                var c = w, c = m(c && c.split(' '), 1);
                l.$addClass(c);
              } else
                c = w, c = m(c && c.split(' '), -1), l.$removeClass(c);
              u = a;
            }
            function n(a) {
              a = c(a);
              a !== w && q(a);
            }
            function q(a) {
              if (u === b) {
                var c = w && w.split(' '), e = a && a.split(' '), g = d(c, e), c = d(e, c), g = m(g, -1), c = m(c, 1);
                l.$addClass(c);
                l.$removeClass(g);
              }
              w = a;
            }
            var s = l[a].trim(), v = ':' === s.charAt(0) && ':' === s.charAt(1), s = g(s, v ? e : c), y = v ? n : q, t = k.data('$classCounts'), u = !0, w;
            t || (t = S(), k.data('$classCounts', t));
            'ngClass' !== a && (f || (f = g('$index', function (a) {
              return a & 1;
            })), h.$watch(f, p));
            h.$watch(s, y, v);
          }
        };
      }
    ];
  }
  function Sb(a, b, d, c, e, f, g, h, k) {
    this.$modelValue = this.$viewValue = Number.NaN;
    this.$$rawModelValue = void 0;
    this.$validators = {};
    this.$asyncValidators = {};
    this.$parsers = [];
    this.$formatters = [];
    this.$viewChangeListeners = [];
    this.$untouched = !0;
    this.$touched = !1;
    this.$pristine = !0;
    this.$dirty = !1;
    this.$valid = !0;
    this.$invalid = !1;
    this.$error = {};
    this.$$success = {};
    this.$pending = void 0;
    this.$name = k(d.name || '', !1)(a);
    this.$$parentForm = Qb;
    this.$options = Tb;
    this.$$updateEvents = '';
    this.$$updateEventHandler = this.$$updateEventHandler.bind(this);
    this.$$parsedNgModel = e(d.ngModel);
    this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
    this.$$ngModelGet = this.$$parsedNgModel;
    this.$$ngModelSet = this.$$parsedNgModelAssign;
    this.$$pendingDebounce = null;
    this.$$parserValid = void 0;
    this.$$currentValidationRunId = 0;
    Object.defineProperty(this, '$$scope', { value: a });
    this.$$attr = d;
    this.$$element = c;
    this.$$animate = f;
    this.$$timeout = g;
    this.$$parse = e;
    this.$$q = h;
    this.$$exceptionHandler = b;
    Zd(this);
    Ug(this);
  }
  function Ug(a) {
    a.$$scope.$watch(function (b) {
      b = a.$$ngModelGet(b);
      b === a.$modelValue || a.$modelValue !== a.$modelValue && b !== b || a.$$setModelValue(b);
      return b;
    });
  }
  function Kc(a) {
    this.$$options = a;
  }
  function ge(a, b) {
    r(b, function (b, c) {
      u(a[c]) || (a[c] = b);
    });
  }
  function Ga(a, b) {
    a.prop('selected', b);
    a.attr('selected', b);
  }
  var Mc = { objectMaxDepth: 5 }, Vg = /^\/(.+)\/([a-z]*)$/, ra = Object.prototype.hasOwnProperty, L = function (a) {
      return E(a) ? a.toLowerCase() : a;
    }, ub = function (a) {
      return E(a) ? a.toUpperCase() : a;
    }, Ca, z, ma, xa = [].slice, ug = [].splice, Wg = [].push, ia = Object.prototype.toString, Pc = Object.getPrototypeOf, qa = K('ng'), $ = w.angular || (w.angular = {}), ic, qb = 0;
  Ca = w.document.documentMode;
  var U = Number.isNaN || function (a) {
      return a !== a;
    };
  D.$inject = [];
  ab.$inject = [];
  var I = Array.isArray, se = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/, Q = function (a) {
      return E(a) ? a.trim() : a;
    }, Md = function (a) {
      return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
    }, Ja = function () {
      if (!u(Ja.rules)) {
        var a = w.document.querySelector('[ng-csp]') || w.document.querySelector('[data-ng-csp]');
        if (a) {
          var b = a.getAttribute('ng-csp') || a.getAttribute('data-ng-csp');
          Ja.rules = {
            noUnsafeEval: !b || -1 !== b.indexOf('no-unsafe-eval'),
            noInlineStyle: !b || -1 !== b.indexOf('no-inline-style')
          };
        } else {
          a = Ja;
          try {
            new Function(''), b = !1;
          } catch (d) {
            b = !0;
          }
          a.rules = {
            noUnsafeEval: b,
            noInlineStyle: !1
          };
        }
      }
      return Ja.rules;
    }, rb = function () {
      if (u(rb.name_))
        return rb.name_;
      var a, b, d = Ha.length, c, e;
      for (b = 0; b < d; ++b)
        if (c = Ha[b], a = w.document.querySelector('[' + c.replace(':', '\\:') + 'jq]')) {
          e = a.getAttribute(c + 'jq');
          break;
        }
      return rb.name_ = e;
    }, ue = /:/g, Ha = [
      'ng-',
      'data-ng-',
      'ng:',
      'x-ng-'
    ], xe = function (a) {
      var b = a.currentScript;
      if (!b)
        return !0;
      if (!(b instanceof w.HTMLScriptElement || b instanceof w.SVGScriptElement))
        return !1;
      b = b.attributes;
      return [
        b.getNamedItem('src'),
        b.getNamedItem('href'),
        b.getNamedItem('xlink:href')
      ].every(function (b) {
        if (!b)
          return !0;
        if (!b.value)
          return !1;
        var c = a.createElement('a');
        c.href = b.value;
        if (a.location.origin === c.origin)
          return !0;
        switch (c.protocol) {
        case 'http:':
        case 'https:':
        case 'ftp:':
        case 'blob:':
        case 'file:':
        case 'data:':
          return !0;
        default:
          return !1;
        }
      });
    }(w.document), Ae = /[A-Z]/g, Wc = !1, Oa = 3, Fe = {
      full: '1.6.9',
      major: 1,
      minor: 6,
      dot: 9,
      codeName: 'fiery-basilisk'
    };
  V.expando = 'ng339';
  var ib = V.cache = {}, gg = 1;
  V._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };
  var cg = /-([a-z])/g, Xg = /^-ms-/, Ab = {
      mouseleave: 'mouseout',
      mouseenter: 'mouseover'
    }, lc = K('jqLite'), fg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, kc = /<|&#?\w+;/, dg = /<([\w:-]+)/, eg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, aa = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  aa.optgroup = aa.option;
  aa.tbody = aa.tfoot = aa.colgroup = aa.caption = aa.thead;
  aa.th = aa.td;
  var lg = w.Node.prototype.contains || function (a) {
      return !!(this.compareDocumentPosition(a) & 16);
    }, Sa = V.prototype = {
      ready: gd,
      toString: function () {
        var a = [];
        r(this, function (b) {
          a.push('' + b);
        });
        return '[' + a.join(', ') + ']';
      },
      eq: function (a) {
        return 0 <= a ? z(this[a]) : z(this[this.length + a]);
      },
      length: 0,
      push: Wg,
      sort: [].sort,
      splice: [].splice
    }, Gb = {};
  r('multiple selected checked disabled readOnly required open'.split(' '), function (a) {
    Gb[L(a)] = a;
  });
  var ld = {};
  r('input select option textarea button form details'.split(' '), function (a) {
    ld[a] = !0;
  });
  var sd = {
      ngMinlength: 'minlength',
      ngMaxlength: 'maxlength',
      ngMin: 'min',
      ngMax: 'max',
      ngPattern: 'pattern',
      ngStep: 'step'
    };
  r({
    data: pc,
    removeData: oc,
    hasData: function (a) {
      for (var b in ib[a.ng339])
        return !0;
      return !1;
    },
    cleanData: function (a) {
      for (var b = 0, d = a.length; b < d; b++)
        oc(a[b]);
    }
  }, function (a, b) {
    V[b] = a;
  });
  r({
    data: pc,
    inheritedData: Eb,
    scope: function (a) {
      return z.data(a, '$scope') || Eb(a.parentNode || a, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (a) {
      return z.data(a, '$isolateScope') || z.data(a, '$isolateScopeNoTemplate');
    },
    controller: id,
    injector: function (a) {
      return Eb(a, '$injector');
    },
    removeAttr: function (a, b) {
      a.removeAttribute(b);
    },
    hasClass: Bb,
    css: function (a, b, d) {
      b = xb(b.replace(Xg, 'ms-'));
      if (u(d))
        a.style[b] = d;
      else
        return a.style[b];
    },
    attr: function (a, b, d) {
      var c = a.nodeType;
      if (c !== Oa && 2 !== c && 8 !== c && a.getAttribute) {
        var c = L(b), e = Gb[c];
        if (u(d))
          null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b, e ? c : d);
        else
          return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a;
      }
    },
    prop: function (a, b, d) {
      if (u(d))
        a[b] = d;
      else
        return a[b];
    },
    text: function () {
      function a(a, d) {
        if (x(d)) {
          var c = a.nodeType;
          return 1 === c || c === Oa ? a.textContent : '';
        }
        a.textContent = d;
      }
      a.$dv = '';
      return a;
    }(),
    val: function (a, b) {
      if (x(b)) {
        if (a.multiple && 'select' === ya(a)) {
          var d = [];
          r(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });
          return d;
        }
        return a.value;
      }
      a.value = b;
    },
    html: function (a, b) {
      if (x(b))
        return a.innerHTML;
      yb(a, !0);
      a.innerHTML = b;
    },
    empty: jd
  }, function (a, b) {
    V.prototype[b] = function (b, c) {
      var e, f, g = this.length;
      if (a !== jd && x(2 === a.length && a !== Bb && a !== id ? b : c)) {
        if (B(b)) {
          for (e = 0; e < g; e++)
            if (a === pc)
              a(this[e], b);
            else
              for (f in b)
                a(this[e], f, b[f]);
          return this;
        }
        e = a.$dv;
        g = x(e) ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < g; e++)
        a(this[e], b, c);
      return this;
    };
  });
  r({
    removeData: oc,
    on: function (a, b, d, c) {
      if (u(c))
        throw lc('onargs');
      if (jc(a)) {
        c = zb(a, !0);
        var e = c.events, f = c.handle;
        f || (f = c.handle = ig(a, e));
        c = 0 <= b.indexOf(' ') ? b.split(' ') : [b];
        for (var g = c.length, h = function (b, c, g) {
              var h = e[b];
              h || (h = e[b] = [], h.specialHandlerWrapper = c, '$destroy' === b || g || a.addEventListener(b, f));
              h.push(d);
            }; g--;)
          b = c[g], Ab[b] ? (h(Ab[b], kg), h(b, void 0, !0)) : h(b);
      }
    },
    off: hd,
    one: function (a, b, d) {
      a = z(a);
      a.on(b, function e() {
        a.off(b, d);
        a.off(b, e);
      });
      a.on(b, d);
    },
    replaceWith: function (a, b) {
      var d, c = a.parentNode;
      yb(a);
      r(new V(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
        d = b;
      });
    },
    children: function (a) {
      var b = [];
      r(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });
      return b;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, b) {
      var d = a.nodeType;
      if (1 === d || 11 === d) {
        b = new V(b);
        for (var d = 0, c = b.length; d < c; d++)
          a.appendChild(b[d]);
      }
    },
    prepend: function (a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        r(new V(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    },
    wrap: function (a, b) {
      var d = z(b).eq(0).clone()[0], c = a.parentNode;
      c && c.replaceChild(d, a);
      d.appendChild(a);
    },
    remove: Fb,
    detach: function (a) {
      Fb(a, !0);
    },
    after: function (a, b) {
      var d = a, c = a.parentNode;
      if (c) {
        b = new V(b);
        for (var e = 0, f = b.length; e < f; e++) {
          var g = b[e];
          c.insertBefore(g, d.nextSibling);
          d = g;
        }
      }
    },
    addClass: Db,
    removeClass: Cb,
    toggleClass: function (a, b, d) {
      b && r(b.split(' '), function (b) {
        var e = d;
        x(e) && (e = !Bb(a, b));
        (e ? Db : Cb)(a, b);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      return a.nextElementSibling;
    },
    find: function (a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    },
    clone: nc,
    triggerHandler: function (a, b, d) {
      var c, e, f = b.type || b, g = zb(a);
      if (g = (g = g && g.events) && g[f])
        c = {
          preventDefault: function () {
            this.defaultPrevented = !0;
          },
          isDefaultPrevented: function () {
            return !0 === this.defaultPrevented;
          },
          stopImmediatePropagation: function () {
            this.immediatePropagationStopped = !0;
          },
          isImmediatePropagationStopped: function () {
            return !0 === this.immediatePropagationStopped;
          },
          stopPropagation: D,
          type: f,
          target: a
        }, b.type && (c = O(c, b)), b = ka(g), e = d ? [c].concat(d) : [c], r(b, function (b) {
          c.isImmediatePropagationStopped() || b.apply(a, e);
        });
    }
  }, function (a, b) {
    V.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++)
        x(f) ? (f = a(this[g], b, c, e), u(f) && (f = z(f))) : mc(f, a(this[g], b, c, e));
      return u(f) ? f : this;
    };
  });
  V.prototype.bind = V.prototype.on;
  V.prototype.unbind = V.prototype.off;
  var Yg = Object.create(null);
  md.prototype = {
    _idx: function (a) {
      if (a === this._lastKey)
        return this._lastIndex;
      this._lastKey = a;
      return this._lastIndex = this._keys.indexOf(a);
    },
    _transformKey: function (a) {
      return U(a) ? Yg : a;
    },
    get: function (a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 !== a)
        return this._values[a];
    },
    set: function (a, b) {
      a = this._transformKey(a);
      var d = this._idx(a);
      -1 === d && (d = this._lastIndex = this._keys.length);
      this._keys[d] = a;
      this._values[d] = b;
    },
    delete: function (a) {
      a = this._transformKey(a);
      a = this._idx(a);
      if (-1 === a)
        return !1;
      this._keys.splice(a, 1);
      this._values.splice(a, 1);
      this._lastKey = NaN;
      this._lastIndex = -1;
      return !0;
    }
  };
  var Hb = md, ag = [function () {
        this.$get = [function () {
            return Hb;
          }];
      }], ng = /^([^(]+?)=>/, og = /^[^(]*\(\s*([^)]*)\)/m, Zg = /,/, $g = /^\s*(_?)(\S+?)\1\s*$/, mg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ba = K('$injector');
  gb.$$annotate = function (a, b, d) {
    var c;
    if ('function' === typeof a) {
      if (!(c = a.$inject)) {
        c = [];
        if (a.length) {
          if (b)
            throw E(d) && d || (d = a.name || pg(a)), Ba('strictdi', d);
          b = nd(a);
          r(b[1].split(Zg), function (a) {
            a.replace($g, function (a, b, d) {
              c.push(d);
            });
          });
        }
        a.$inject = c;
      }
    } else
      I(a) ? (b = a.length - 1, sb(a[b], 'fn'), c = a.slice(0, b)) : sb(a, 'fn', !0);
    return c;
  };
  var he = K('$animate'), sf = function () {
      this.$get = D;
    }, tf = function () {
      var a = new Hb(), b = [];
      this.$get = [
        '$$AnimateRunner',
        '$rootScope',
        function (d, c) {
          function e(a, b, c) {
            var d = !1;
            b && (b = E(b) ? b.split(' ') : I(b) ? b : [], r(b, function (b) {
              b && (d = !0, a[b] = c);
            }));
            return d;
          }
          function f() {
            r(b, function (b) {
              var c = a.get(b);
              if (c) {
                var d = qg(b.attr('class')), e = '', f = '';
                r(c, function (a, b) {
                  a !== !!d[b] && (a ? e += (e.length ? ' ' : '') + b : f += (f.length ? ' ' : '') + b);
                });
                r(b, function (a) {
                  e && Db(a, e);
                  f && Cb(a, f);
                });
                a.delete(b);
              }
            });
            b.length = 0;
          }
          return {
            enabled: D,
            on: D,
            off: D,
            pin: D,
            push: function (g, h, k, l) {
              l && l();
              k = k || {};
              k.from && g.css(k.from);
              k.to && g.css(k.to);
              if (k.addClass || k.removeClass)
                if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)
                  a.set(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
              g = new d();
              g.complete();
              return g;
            }
          };
        }
      ];
    }, qf = [
      '$provide',
      function (a) {
        var b = this, d = null, c = null;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (c, d) {
          if (c && '.' !== c.charAt(0))
            throw he('notcsel', c);
          var g = c + '-animation';
          b.$$registeredAnimations[c.substr(1)] = g;
          a.factory(g, d);
        };
        this.customFilter = function (a) {
          1 === arguments.length && (c = C(a) ? a : null);
          return c;
        };
        this.classNameFilter = function (a) {
          if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))
            throw d = null, he('nongcls', 'ng-animate');
          return d;
        };
        this.$get = [
          '$$animateQueue',
          function (a) {
            function b(a, c, d) {
              if (d) {
                var e;
                a: {
                  for (e = 0; e < d.length; e++) {
                    var f = d[e];
                    if (1 === f.nodeType) {
                      e = f;
                      break a;
                    }
                  }
                  e = void 0;
                }
                !e || e.parentNode || e.previousElementSibling || (d = null);
              }
              d ? d.after(a) : c.prepend(a);
            }
            return {
              on: a.on,
              off: a.off,
              pin: a.pin,
              enabled: a.enabled,
              cancel: function (a) {
                a.end && a.end();
              },
              enter: function (c, d, k, l) {
                d = d && z(d);
                k = k && z(k);
                d = d || k.parent();
                b(c, d, k);
                return a.push(c, 'enter', Ka(l));
              },
              move: function (c, d, k, l) {
                d = d && z(d);
                k = k && z(k);
                d = d || k.parent();
                b(c, d, k);
                return a.push(c, 'move', Ka(l));
              },
              leave: function (b, c) {
                return a.push(b, 'leave', Ka(c), function () {
                  b.remove();
                });
              },
              addClass: function (b, c, d) {
                d = Ka(d);
                d.addClass = jb(d.addclass, c);
                return a.push(b, 'addClass', d);
              },
              removeClass: function (b, c, d) {
                d = Ka(d);
                d.removeClass = jb(d.removeClass, c);
                return a.push(b, 'removeClass', d);
              },
              setClass: function (b, c, d, f) {
                f = Ka(f);
                f.addClass = jb(f.addClass, c);
                f.removeClass = jb(f.removeClass, d);
                return a.push(b, 'setClass', f);
              },
              animate: function (b, c, d, f, m) {
                m = Ka(m);
                m.from = m.from ? O(m.from, c) : c;
                m.to = m.to ? O(m.to, d) : d;
                m.tempClasses = jb(m.tempClasses, f || 'ng-inline-animate');
                return a.push(b, 'animate', m);
              }
            };
          }
        ];
      }
    ], vf = function () {
      this.$get = [
        '$$rAF',
        function (a) {
          function b(b) {
            d.push(b);
            1 < d.length || a(function () {
              for (var a = 0; a < d.length; a++)
                d[a]();
              d = [];
            });
          }
          var d = [];
          return function () {
            var a = !1;
            b(function () {
              a = !0;
            });
            return function (d) {
              a ? d() : b(d);
            };
          };
        }
      ];
    }, uf = function () {
      this.$get = [
        '$q',
        '$sniffer',
        '$$animateAsyncRun',
        '$$isDocumentHidden',
        '$timeout',
        function (a, b, d, c, e) {
          function f(a) {
            this.setHost(a);
            var b = d();
            this._doneCallbacks = [];
            this._tick = function (a) {
              c() ? e(a, 0, !1) : b(a);
            };
            this._state = 0;
          }
          f.chain = function (a, b) {
            function c() {
              if (d === a.length)
                b(!0);
              else
                a[d](function (a) {
                  !1 === a ? b(!1) : (d++, c());
                });
            }
            var d = 0;
            c();
          };
          f.all = function (a, b) {
            function c(f) {
              e = e && f;
              ++d === a.length && b(e);
            }
            var d = 0, e = !0;
            r(a, function (a) {
              a.done(c);
            });
          };
          f.prototype = {
            setHost: function (a) {
              this.host = a || {};
            },
            done: function (a) {
              2 === this._state ? a() : this._doneCallbacks.push(a);
            },
            progress: D,
            getPromise: function () {
              if (!this.promise) {
                var b = this;
                this.promise = a(function (a, c) {
                  b.done(function (b) {
                    !1 === b ? c() : a();
                  });
                });
              }
              return this.promise;
            },
            then: function (a, b) {
              return this.getPromise().then(a, b);
            },
            'catch': function (a) {
              return this.getPromise()['catch'](a);
            },
            'finally': function (a) {
              return this.getPromise()['finally'](a);
            },
            pause: function () {
              this.host.pause && this.host.pause();
            },
            resume: function () {
              this.host.resume && this.host.resume();
            },
            end: function () {
              this.host.end && this.host.end();
              this._resolve(!0);
            },
            cancel: function () {
              this.host.cancel && this.host.cancel();
              this._resolve(!1);
            },
            complete: function (a) {
              var b = this;
              0 === b._state && (b._state = 1, b._tick(function () {
                b._resolve(a);
              }));
            },
            _resolve: function (a) {
              2 !== this._state && (r(this._doneCallbacks, function (b) {
                b(a);
              }), this._doneCallbacks.length = 0, this._state = 2);
            }
          };
          return f;
        }
      ];
    }, rf = function () {
      this.$get = [
        '$$rAF',
        '$q',
        '$$AnimateRunner',
        function (a, b, d) {
          return function (b, e) {
            function f() {
              a(function () {
                g.addClass && (b.addClass(g.addClass), g.addClass = null);
                g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                g.to && (b.css(g.to), g.to = null);
                h || k.complete();
                h = !0;
              });
              return k;
            }
            var g = e || {};
            g.$$prepared || (g = pa(g));
            g.cleanupStyles && (g.from = g.to = null);
            g.from && (b.css(g.from), g.from = null);
            var h, k = new d();
            return {
              start: f,
              end: f
            };
          };
        }
      ];
    }, ca = K('$compile'), sc = new function () {
    }();
  Yc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  Jb.prototype.isFirstChange = function () {
    return this.previousValue === sc;
  };
  var od = /^((?:x|data)[:\-_])/i, tg = /[:\-_]+(.)/g, ud = K('$controller'), td = /^(\S+)(\s+as\s+([\w$]+))?$/, Cf = function () {
      this.$get = [
        '$document',
        function (a) {
          return function (b) {
            b ? !b.nodeType && b instanceof z && (b = b[0]) : b = a[0].body;
            return b.offsetWidth + 1;
          };
        }
      ];
    }, vd = 'application/json', vc = { 'Content-Type': vd + ';charset=utf-8' }, wg = /^\[|^\{(?!\{)/, xg = {
      '[': /]$/,
      '{': /}$/
    }, vg = /^\)]\}',?\n/, Kb = K('$http'), Fa = $.$interpolateMinErr = K('$interpolate');
  Fa.throwNoconcat = function (a) {
    throw Fa('noconcat', a);
  };
  Fa.interr = function (a, b) {
    return Fa('interr', a, b.toString());
  };
  var Kf = function () {
      this.$get = function () {
        function a(a) {
          var b = function (a) {
            b.data = a;
            b.called = !0;
          };
          b.id = a;
          return b;
        }
        var b = $.callbacks, d = {};
        return {
          createCallback: function (c) {
            c = '_' + (b.$$counter++).toString(36);
            var e = 'angular.callbacks.' + c, f = a(c);
            d[e] = b[c] = f;
            return e;
          },
          wasCalled: function (a) {
            return d[a].called;
          },
          getResponse: function (a) {
            return d[a].data;
          },
          removeCallback: function (a) {
            delete b[d[a].id];
            delete d[a];
          }
        };
      };
    }, ah = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, zg = {
      http: 80,
      https: 443,
      ftp: 21
    }, kb = K('$location'), Ag = /^\s*[\\\/]{2,}/, bh = {
      $$absUrl: '',
      $$html5: !1,
      $$replace: !1,
      absUrl: Lb('$$absUrl'),
      url: function (a) {
        if (x(a))
          return this.$$url;
        var b = ah.exec(a);
        (b[1] || '' === a) && this.path(decodeURIComponent(b[1]));
        (b[2] || b[1] || '' === a) && this.search(b[3] || '');
        this.hash(b[5] || '');
        return this;
      },
      protocol: Lb('$$protocol'),
      host: Lb('$$host'),
      port: Lb('$$port'),
      path: Dd('$$path', function (a) {
        a = null !== a ? a.toString() : '';
        return '/' === a.charAt(0) ? a : '/' + a;
      }),
      search: function (a, b) {
        switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (E(a) || Y(a))
            a = a.toString(), this.$$search = ec(a);
          else if (B(a))
            a = pa(a, {}), r(a, function (b, c) {
              null == b && delete a[c];
            }), this.$$search = a;
          else
            throw kb('isrcharg');
          break;
        default:
          x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
        }
        this.$$compose();
        return this;
      },
      hash: Dd('$$hash', function (a) {
        return null !== a ? a.toString() : '';
      }),
      replace: function () {
        this.$$replace = !0;
        return this;
      }
    };
  r([
    Cd,
    zc,
    yc
  ], function (a) {
    a.prototype = Object.create(bh);
    a.prototype.state = function (b) {
      if (!arguments.length)
        return this.$$state;
      if (a !== yc || !this.$$html5)
        throw kb('nostate');
      this.$$state = x(b) ? null : b;
      this.$$urlUpdatedByLocation = !0;
      return this;
    };
  });
  var Xa = K('$parse'), Eg = {}.constructor.prototype.valueOf, Ub = S();
  r('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function (a) {
    Ub[a] = !0;
  });
  var ch = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Nb = function (a) {
      this.options = a;
    };
  Nb.prototype = {
    constructor: Nb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      for (this.tokens = []; this.index < this.text.length;)
        if (a = this.text.charAt(this.index), '"' === a || '\'' === a)
          this.readString(a);
        else if (this.isNumber(a) || '.' === a && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdentifierStart(this.peekMultichar()))
          this.readIdent();
        else if (this.is(a, '(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: a
          }), this.index++;
        else if (this.isWhitespace(a))
          this.index++;
        else {
          var b = a + this.peek(), d = b + this.peek(2), c = Ub[b], e = Ub[d];
          Ub[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
            index: this.index,
            text: a,
            operator: !0
          }), this.index += a.length) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
      return this.tokens;
    },
    is: function (a, b) {
      return -1 !== b.indexOf(a);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a && 'string' === typeof a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdentifierStart: function (a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    },
    isValidIdentifierStart: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isIdentifierContinue: function (a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    },
    isValidIdentifierContinue: function (a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    },
    codePointAt: function (a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    },
    peekMultichar: function () {
      var a = this.text.charAt(this.index), b = this.peek();
      if (!b)
        return a;
      var d = a.charCodeAt(0), c = b.charCodeAt(0);
      return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, b, d) {
      d = d || this.index;
      b = u(b) ? 's ' + b + '-' + this.index + ' [' + this.text.substring(b, d) + ']' : ' ' + d;
      throw Xa('lexerr', a, b, this.text);
    },
    readNumber: function () {
      for (var a = '', b = this.index; this.index < this.text.length;) {
        var d = L(this.text.charAt(this.index));
        if ('.' === d || this.isNumber(d))
          a += d;
        else {
          var c = this.peek();
          if ('e' === d && this.isExpOperator(c))
            a += d;
          else if (this.isExpOperator(d) && c && this.isNumber(c) && 'e' === a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || c && this.isNumber(c) || 'e' !== a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      this.tokens.push({
        index: b,
        text: a,
        constant: !0,
        value: Number(a)
      });
    },
    readIdent: function () {
      var a = this.index;
      for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();
        if (!this.isIdentifierContinue(b))
          break;
        this.index += b.length;
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      });
    },
    readString: function (a) {
      var b = this.index;
      this.index++;
      for (var d = '', c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index), c = c + f;
        if (e)
          'u' === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + e + ']'), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += ch[f] || f, e = !1;
        else if ('\\' === f)
          e = !0;
        else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: b,
              text: c,
              constant: !0,
              value: d
            });
            return;
          }
          d += f;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', b);
    }
  };
  var q = function (a, b) {
    this.lexer = a;
    this.options = b;
  };
  q.Program = 'Program';
  q.ExpressionStatement = 'ExpressionStatement';
  q.AssignmentExpression = 'AssignmentExpression';
  q.ConditionalExpression = 'ConditionalExpression';
  q.LogicalExpression = 'LogicalExpression';
  q.BinaryExpression = 'BinaryExpression';
  q.UnaryExpression = 'UnaryExpression';
  q.CallExpression = 'CallExpression';
  q.MemberExpression = 'MemberExpression';
  q.Identifier = 'Identifier';
  q.Literal = 'Literal';
  q.ArrayExpression = 'ArrayExpression';
  q.Property = 'Property';
  q.ObjectExpression = 'ObjectExpression';
  q.ThisExpression = 'ThisExpression';
  q.LocalsExpression = 'LocalsExpression';
  q.NGValueParameter = 'NGValueParameter';
  q.prototype = {
    ast: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.program();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      return a;
    },
    program: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.expressionStatement()), !this.expect(';'))
          return {
            type: q.Program,
            body: a
          };
    },
    expressionStatement: function () {
      return {
        type: q.ExpressionStatement,
        expression: this.filterChain()
      };
    },
    filterChain: function () {
      for (var a = this.expression(); this.expect('|');)
        a = this.filter(a);
      return a;
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary();
      if (this.expect('=')) {
        if (!Hd(a))
          throw Xa('lval');
        a = {
          type: q.AssignmentExpression,
          left: a,
          right: this.assignment(),
          operator: '='
        };
      }
      return a;
    },
    ternary: function () {
      var a = this.logicalOR(), b, d;
      return this.expect('?') && (b = this.expression(), this.consume(':')) ? (d = this.expression(), {
        type: q.ConditionalExpression,
        test: a,
        alternate: b,
        consequent: d
      }) : a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(); this.expect('||');)
        a = {
          type: q.LogicalExpression,
          operator: '||',
          left: a,
          right: this.logicalAND()
        };
      return a;
    },
    logicalAND: function () {
      for (var a = this.equality(); this.expect('&&');)
        a = {
          type: q.LogicalExpression,
          operator: '&&',
          left: a,
          right: this.equality()
        };
      return a;
    },
    equality: function () {
      for (var a = this.relational(), b; b = this.expect('==', '!=', '===', '!==');)
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.relational()
        };
      return a;
    },
    relational: function () {
      for (var a = this.additive(), b; b = this.expect('<', '>', '<=', '>=');)
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.additive()
        };
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), b; b = this.expect('+', '-');)
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.multiplicative()
        };
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), b; b = this.expect('*', '/', '%');)
        a = {
          type: q.BinaryExpression,
          operator: b.text,
          left: a,
          right: this.unary()
        };
      return a;
    },
    unary: function () {
      var a;
      return (a = this.expect('+', '-', '!')) ? {
        type: q.UnaryExpression,
        operator: a.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary();
    },
    primary: function () {
      var a;
      this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
        type: q.Literal,
        value: this.options.literals[this.consume().text]
      } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek());
      for (var b; b = this.expect('(', '[', '.');)
        '(' === b.text ? (a = {
          type: q.CallExpression,
          callee: a,
          arguments: this.parseArguments()
        }, this.consume(')')) : '[' === b.text ? (a = {
          type: q.MemberExpression,
          object: a,
          property: this.expression(),
          computed: !0
        }, this.consume(']')) : '.' === b.text ? a = {
          type: q.MemberExpression,
          object: a,
          property: this.identifier(),
          computed: !1
        } : this.throwError('IMPOSSIBLE');
      return a;
    },
    filter: function (a) {
      a = [a];
      for (var b = {
            type: q.CallExpression,
            callee: this.identifier(),
            arguments: a,
            filter: !0
          }; this.expect(':');)
        a.push(this.expression());
      return b;
    },
    parseArguments: function () {
      var a = [];
      if (')' !== this.peekToken().text) {
        do
          a.push(this.filterChain());
        while (this.expect(','));
      }
      return a;
    },
    identifier: function () {
      var a = this.consume();
      a.identifier || this.throwError('is not a valid identifier', a);
      return {
        type: q.Identifier,
        name: a.text
      };
    },
    constant: function () {
      return {
        type: q.Literal,
        value: this.consume().value
      };
    },
    arrayDeclaration: function () {
      var a = [];
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          a.push(this.expression());
        } while (this.expect(','));
      }
      this.consume(']');
      return {
        type: q.ArrayExpression,
        elements: a
      };
    },
    object: function () {
      var a = [], b;
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          b = {
            type: q.Property,
            kind: 'init'
          };
          this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(':'), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(':') ? (this.consume(':'), b.value = this.expression()) : b.value = b.key) : this.peek('[') ? (this.consume('['), b.key = this.expression(), this.consume(']'), b.computed = !0, this.consume(':'), b.value = this.expression()) : this.throwError('invalid key', this.peek());
          a.push(b);
        } while (this.expect(','));
      }
      this.consume('}');
      return {
        type: q.ObjectExpression,
        properties: a
      };
    },
    throwError: function (a, b) {
      throw Xa('syntax', b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    },
    consume: function (a) {
      if (0 === this.tokens.length)
        throw Xa('ueoe', this.text);
      var b = this.expect(a);
      b || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
      return b;
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw Xa('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    },
    peekAhead: function (a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var f = a.text;
        if (f === b || f === d || f === c || f === e || !(b || d || c || e))
          return a;
      }
      return !1;
    },
    expect: function (a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    },
    selfReferential: {
      'this': { type: q.ThisExpression },
      $locals: { type: q.LocalsExpression }
    }
  };
  var Fd = 2;
  Jd.prototype = {
    compile: function (a) {
      var b = this;
      this.state = {
        nextId: 0,
        filters: {},
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      };
      W(a, b.$filter);
      var d = '', c;
      this.stage = 'assign';
      if (c = Id(a))
        this.state.computing = 'assign', d = this.nextId(), this.recurse(c, d), this.return_(d), d = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
      c = Gd(a.body);
      b.stage = 'inputs';
      r(c, function (a, c) {
        var d = 'fn' + c;
        b.state[d] = {
          vars: [],
          body: [],
          own: {}
        };
        b.state.computing = d;
        var h = b.nextId();
        b.recurse(a, h);
        b.return_(h);
        b.state.inputs.push({
          name: d,
          isPure: a.isPure
        });
        a.watchId = c;
      });
      this.state.computing = 'fn';
      this.stage = 'main';
      this.recurse(a);
      a = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + d + this.watchFns() + 'return fn;';
      a = new Function('$filter', 'getStringValue', 'ifDefined', 'plus', a)(this.$filter, Bg, Cg, Ed);
      this.state = this.stage = void 0;
      return a;
    },
    USE: 'use',
    STRICT: 'strict',
    watchFns: function () {
      var a = [], b = this.state.inputs, d = this;
      r(b, function (b) {
        a.push('var ' + b.name + '=' + d.generateFunction(b.name, 's'));
        b.isPure && a.push(b.name, '.isPure=' + JSON.stringify(b.isPure) + ';');
      });
      b.length && a.push('fn.inputs=[' + b.map(function (a) {
        return a.name;
      }).join(',') + '];');
      return a.join('');
    },
    generateFunction: function (a, b) {
      return 'function(' + b + '){' + this.varsPrefix(a) + this.body(a) + '};';
    },
    filterPrefix: function () {
      var a = [], b = this;
      r(this.state.filters, function (d, c) {
        a.push(d + '=$filter(' + b.escape(c) + ')');
      });
      return a.length ? 'var ' + a.join(',') + ';' : '';
    },
    varsPrefix: function (a) {
      return this.state[a].vars.length ? 'var ' + this.state[a].vars.join(',') + ';' : '';
    },
    body: function (a) {
      return this.state[a].body.join('');
    },
    recurse: function (a, b, d, c, e, f) {
      var g, h, k = this, l, m, p;
      c = c || D;
      if (!f && u(a.watchId))
        b = b || this.nextId(), this.if_('i', this.lazyAssign(b, this.computedMember('i', a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));
      else
        switch (a.type) {
        case q.Program:
          r(a.body, function (b, c) {
            k.recurse(b.expression, void 0, void 0, function (a) {
              h = a;
            });
            c !== a.body.length - 1 ? k.current().body.push(h, ';') : k.return_(h);
          });
          break;
        case q.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(b || m);
          break;
        case q.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            h = a;
          });
          m = a.operator + '(' + this.ifDefined(h, 0) + ')';
          this.assign(b, m);
          c(m);
          break;
        case q.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });
          this.recurse(a.right, void 0, void 0, function (a) {
            h = a;
          });
          m = '+' === a.operator ? this.plus(g, h) : '-' === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : '(' + g + ')' + a.operator + '(' + h + ')';
          this.assign(b, m);
          c(m);
          break;
        case q.LogicalExpression:
          b = b || this.nextId();
          k.recurse(a.left, b);
          k.if_('&&' === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
          c(b);
          break;
        case q.ConditionalExpression:
          b = b || this.nextId();
          k.recurse(a.test, b);
          k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
          c(b);
          break;
        case q.Identifier:
          b = b || this.nextId();
          d && (d.context = 'inputs' === k.stage ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', a.name) + '?l:s'), d.computed = !1, d.name = a.name);
          k.if_('inputs' === k.stage || k.not(k.getHasOwnProperty('l', a.name)), function () {
            k.if_('inputs' === k.stage || 's', function () {
              e && 1 !== e && k.if_(k.isNull(k.nonComputedMember('s', a.name)), k.lazyAssign(k.nonComputedMember('s', a.name), '{}'));
              k.assign(b, k.nonComputedMember('s', a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember('l', a.name)));
          c(b);
          break;
        case q.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          k.recurse(a.object, g, void 0, function () {
            k.if_(k.notNull(g), function () {
              a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), '{}')), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (e && 1 !== e && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), '{}')), m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
            }, function () {
              k.assign(b, 'undefined');
            });
            c(b);
          }, !!e);
          break;
        case q.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], r(a.arguments, function (a) {
            var b = k.nextId();
            k.recurse(a, b);
            l.push(b);
          }), m = h + '(' + l.join(',') + ')', k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              r(a.arguments, function (b) {
                k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                  l.push(a);
                });
              });
              m = g.name ? k.member(g.context, g.name, g.computed) + '(' + l.join(',') + ')' : h + '(' + l.join(',') + ')';
              k.assign(b, m);
            }, function () {
              k.assign(b, 'undefined');
            });
            c(b);
          }));
          break;
        case q.AssignmentExpression:
          h = this.nextId();
          g = {};
          this.recurse(a.left, void 0, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);
              m = k.member(g.context, g.name, g.computed) + a.operator + h;
              k.assign(b, m);
              c(b || m);
            });
          }, 1);
          break;
        case q.ArrayExpression:
          l = [];
          r(a.elements, function (b) {
            k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(a);
            });
          });
          m = '[' + l.join(',') + ']';
          this.assign(b, m);
          c(b || m);
          break;
        case q.ObjectExpression:
          l = [];
          p = !1;
          r(a.properties, function (a) {
            a.computed && (p = !0);
          });
          p ? (b = b || this.nextId(), this.assign(b, '{}'), r(a.properties, function (a) {
            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === q.Identifier ? a.key.name : '' + a.key.value;
            h = k.nextId();
            k.recurse(a.value, h);
            k.assign(k.member(b, g, a.computed), h);
          })) : (r(a.properties, function (b) {
            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(k.escape(b.key.type === q.Identifier ? b.key.name : '' + b.key.value) + ':' + a);
            });
          }), m = '{' + l.join(',') + '}', this.assign(b, m));
          c(b || m);
          break;
        case q.ThisExpression:
          this.assign(b, 's');
          c(b || 's');
          break;
        case q.LocalsExpression:
          this.assign(b, 'l');
          c(b || 'l');
          break;
        case q.NGValueParameter:
          this.assign(b, 'v'), c(b || 'v');
        }
    },
    getHasOwnProperty: function (a, b) {
      var d = a + '.' + b, c = this.current().own;
      c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + '&&(' + this.escape(b) + ' in ' + a + ')'));
      return c[d];
    },
    assign: function (a, b) {
      if (a)
        return this.current().body.push(a, '=', b, ';'), a;
    },
    filter: function (a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
      return this.state.filters[a];
    },
    ifDefined: function (a, b) {
      return 'ifDefined(' + a + ',' + this.escape(b) + ')';
    },
    plus: function (a, b) {
      return 'plus(' + a + ',' + b + ')';
    },
    return_: function (a) {
      this.current().body.push('return ', a, ';');
    },
    if_: function (a, b, d) {
      if (!0 === a)
        b();
      else {
        var c = this.current().body;
        c.push('if(', a, '){');
        b();
        c.push('}');
        d && (c.push('else{'), d(), c.push('}'));
      }
    },
    not: function (a) {
      return '!(' + a + ')';
    },
    isNull: function (a) {
      return a + '==null';
    },
    notNull: function (a) {
      return a + '!=null';
    },
    nonComputedMember: function (a, b) {
      var d = /[^$_a-zA-Z0-9]/g;
      return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + '.' + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]';
    },
    computedMember: function (a, b) {
      return a + '[' + b + ']';
    },
    member: function (a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    },
    getStringValue: function (a) {
      this.assign(a, 'getStringValue(' + a + ')');
    },
    lazyRecurse: function (a, b, d, c, e, f) {
      var g = this;
      return function () {
        g.recurse(a, b, d, c, e, f);
      };
    },
    lazyAssign: function (a, b) {
      var d = this;
      return function () {
        d.assign(a, b);
      };
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function (a) {
      return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    },
    escape: function (a) {
      if (E(a))
        return '\'' + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + '\'';
      if (Y(a))
        return a.toString();
      if (!0 === a)
        return 'true';
      if (!1 === a)
        return 'false';
      if (null === a)
        return 'null';
      if ('undefined' === typeof a)
        return 'undefined';
      throw Xa('esc');
    },
    nextId: function (a, b) {
      var d = 'v' + this.state.nextId++;
      a || this.current().vars.push(d + (b ? '=' + b : ''));
      return d;
    },
    current: function () {
      return this.state[this.state.computing];
    }
  };
  Kd.prototype = {
    compile: function (a) {
      var b = this;
      W(a, b.$filter);
      var d, c;
      if (d = Id(a))
        c = this.recurse(d);
      d = Gd(a.body);
      var e;
      d && (e = [], r(d, function (a, c) {
        var d = b.recurse(a);
        d.isPure = a.isPure;
        a.input = d;
        e.push(d);
        a.watchId = c;
      }));
      var f = [];
      r(a.body, function (a) {
        f.push(b.recurse(a.expression));
      });
      a = 0 === a.body.length ? D : 1 === a.body.length ? f[0] : function (a, b) {
        var c;
        r(f, function (d) {
          c = d(a, b);
        });
        return c;
      };
      c && (a.assign = function (a, b, d) {
        return c(a, d, b);
      });
      e && (a.inputs = e);
      return a;
    },
    recurse: function (a, b, d) {
      var c, e, f = this, g;
      if (a.input)
        return this.inputs(a.input, a.watchId);
      switch (a.type) {
      case q.Literal:
        return this.value(a.value, b);
      case q.UnaryExpression:
        return e = this.recurse(a.argument), this['unary' + a.operator](e, b);
      case q.BinaryExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right), this['binary' + a.operator](c, e, b);
      case q.LogicalExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right), this['binary' + a.operator](c, e, b);
      case q.ConditionalExpression:
        return this['ternary?:'](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
      case q.Identifier:
        return f.identifier(a.name, b, d);
      case q.MemberExpression:
        return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);
      case q.CallExpression:
        return g = [], r(a.arguments, function (a) {
          g.push(f.recurse(a));
        }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
          for (var p = [], n = 0; n < g.length; ++n)
            p.push(g[n](a, c, d, f));
          a = e.apply(void 0, p, f);
          return b ? {
            context: void 0,
            name: void 0,
            value: a
          } : a;
        } : function (a, c, d, f) {
          var p = e(a, c, d, f), n;
          if (null != p.value) {
            n = [];
            for (var r = 0; r < g.length; ++r)
              n.push(g[r](a, c, d, f));
            n = p.value.apply(p.context, n);
          }
          return b ? { value: n } : n;
        };
      case q.AssignmentExpression:
        return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, f, g) {
          var p = c(a, d, f, g);
          a = e(a, d, f, g);
          p.context[p.name] = a;
          return b ? { value: a } : a;
        };
      case q.ArrayExpression:
        return g = [], r(a.elements, function (a) {
          g.push(f.recurse(a));
        }), function (a, c, d, e) {
          for (var f = [], n = 0; n < g.length; ++n)
            f.push(g[n](a, c, d, e));
          return b ? { value: f } : f;
        };
      case q.ObjectExpression:
        return g = [], r(a.properties, function (a) {
          a.computed ? g.push({
            key: f.recurse(a.key),
            computed: !0,
            value: f.recurse(a.value)
          }) : g.push({
            key: a.key.type === q.Identifier ? a.key.name : '' + a.key.value,
            computed: !1,
            value: f.recurse(a.value)
          });
        }), function (a, c, d, e) {
          for (var f = {}, n = 0; n < g.length; ++n)
            g[n].computed ? f[g[n].key(a, c, d, e)] = g[n].value(a, c, d, e) : f[g[n].key] = g[n].value(a, c, d, e);
          return b ? { value: f } : f;
        };
      case q.ThisExpression:
        return function (a) {
          return b ? { value: a } : a;
        };
      case q.LocalsExpression:
        return function (a, c) {
          return b ? { value: c } : c;
        };
      case q.NGValueParameter:
        return function (a, c, d) {
          return b ? { value: d } : d;
        };
      }
    },
    'unary+': function (a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = u(d) ? +d : 0;
        return b ? { value: d } : d;
      };
    },
    'unary-': function (a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);
        d = u(d) ? -d : -0;
        return b ? { value: d } : d;
      };
    },
    'unary!': function (a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);
        return b ? { value: d } : d;
      };
    },
    'binary+': function (a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = Ed(h, c);
        return d ? { value: h } : h;
      };
    },
    'binary-': function (a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);
        c = b(c, e, f, g);
        h = (u(h) ? h : 0) - (u(c) ? c : 0);
        return d ? { value: h } : h;
      };
    },
    'binary*': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary/': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary%': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary===': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary!==': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary==': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary!=': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary<': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary>': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary<=': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary>=': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary&&': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'binary||': function (a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);
        return d ? { value: c } : c;
      };
    },
    'ternary?:': function (a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
        return c ? { value: e } : e;
      };
    },
    value: function (a, b) {
      return function () {
        return b ? {
          context: void 0,
          name: void 0,
          value: a
        } : a;
      };
    },
    identifier: function (a, b, d) {
      return function (c, e, f, g) {
        c = e && a in e ? e : c;
        d && 1 !== d && c && null == c[a] && (c[a] = {});
        e = c ? c[a] : void 0;
        return b ? {
          context: c,
          name: a,
          value: e
        } : e;
      };
    },
    computedMember: function (a, b, d, c) {
      return function (e, f, g, h) {
        var k = a(e, f, g, h), l, m;
        null != k && (l = b(e, f, g, h), l += '', c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);
        return d ? {
          context: k,
          name: l,
          value: m
        } : m;
      };
    },
    nonComputedMember: function (a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h);
        c && 1 !== c && e && null == e[b] && (e[b] = {});
        f = null != e ? e[b] : void 0;
        return d ? {
          context: e,
          name: b,
          value: f
        } : f;
      };
    },
    inputs: function (a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    }
  };
  Mb.prototype = {
    constructor: Mb,
    parse: function (a) {
      a = this.getAst(a);
      var b = this.astCompiler.compile(a.ast), d = a.ast;
      b.literal = 0 === d.body.length || 1 === d.body.length && (d.body[0].expression.type === q.Literal || d.body[0].expression.type === q.ArrayExpression || d.body[0].expression.type === q.ObjectExpression);
      b.constant = a.ast.constant;
      b.oneTime = a.oneTime;
      return b;
    },
    getAst: function (a) {
      var b = !1;
      a = a.trim();
      ':' === a.charAt(0) && ':' === a.charAt(1) && (b = !0, a = a.substring(2));
      return {
        ast: this.ast.ast(a),
        oneTime: b
      };
    }
  };
  var va = K('$sce'), oa = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, Bc = /_([a-z])/g, Gg = K('$compile'), X = w.document.createElement('a'), Od = ta(w.location.href);
  Pd.$inject = ['$document'];
  ed.$inject = ['$provide'];
  var Wd = 22, Vd = '.', Dc = '0';
  Qd.$inject = ['$locale'];
  Sd.$inject = ['$locale'];
  var Rg = {
      yyyy: ea('FullYear', 4, 0, !1, !0),
      yy: ea('FullYear', 2, 0, !0, !0),
      y: ea('FullYear', 1, 0, !1, !0),
      MMMM: mb('Month'),
      MMM: mb('Month', !0),
      MM: ea('Month', 2, 1),
      M: ea('Month', 1, 1),
      LLLL: mb('Month', !1, !0),
      dd: ea('Date', 2),
      d: ea('Date', 1),
      HH: ea('Hours', 2),
      H: ea('Hours', 1),
      hh: ea('Hours', 2, -12),
      h: ea('Hours', 1, -12),
      mm: ea('Minutes', 2),
      m: ea('Minutes', 1),
      ss: ea('Seconds', 2),
      s: ea('Seconds', 1),
      sss: ea('Milliseconds', 3),
      EEEE: mb('Day'),
      EEE: mb('Day', !0),
      a: function (a, b) {
        return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
      },
      Z: function (a, b, d) {
        a = -1 * d;
        return a = (0 <= a ? '+' : '') + (Ob(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Ob(Math.abs(a % 60), 2));
      },
      ww: Yd(2),
      w: Yd(1),
      G: Ec,
      GG: Ec,
      GGG: Ec,
      GGGG: function (a, b) {
        return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
      }
    }, Qg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/, Pg = /^-?\d+$/;
  Rd.$inject = ['$locale'];
  var Kg = la(L), Lg = la(ub);
  Td.$inject = ['$parse'];
  var He = la({
      restrict: 'E',
      compile: function (a, b) {
        if (!b.href && !b.xlinkHref)
          return function (a, b) {
            if ('a' === b[0].nodeName.toLowerCase()) {
              var e = '[object SVGAnimatedString]' === ia.call(b.prop('href')) ? 'xlink:href' : 'href';
              b.on('click', function (a) {
                b.attr(e) || a.preventDefault();
              });
            }
          };
      }
    }), vb = {};
  r(Gb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }
    if ('multiple' !== a) {
      var c = Ea('ng-' + b), e = d;
      'checked' === a && (e = function (a, b, e) {
        e.ngModel !== e[c] && d(a, b, e);
      });
      vb[c] = function () {
        return {
          restrict: 'A',
          priority: 100,
          link: e
        };
      };
    }
  });
  r(sd, function (a, b) {
    vb[b] = function () {
      return {
        priority: 100,
        link: function (a, c, e) {
          if ('ngPattern' === b && '/' === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Vg))) {
            e.$set('ngPattern', new RegExp(c[1], c[2]));
            return;
          }
          a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        }
      };
    };
  });
  r([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var b = Ea('ng-' + a);
    vb[b] = function () {
      return {
        priority: 99,
        link: function (d, c, e) {
          var f = a, g = a;
          'href' === a && '[object SVGAnimatedString]' === ia.call(c.prop('href')) && (g = 'xlinkHref', e.$attr[g] = 'xlink:href', f = null);
          e.$observe(b, function (b) {
            b ? (e.$set(g, b), Ca && f && c.prop(f, e[g])) : 'href' === a && e.$set(g, null);
          });
        }
      };
    };
  });
  var Qb = {
      $addControl: D,
      $$renameControl: function (a, b) {
        a.$name = b;
      },
      $removeControl: D,
      $setValidity: D,
      $setDirty: D,
      $setPristine: D,
      $setSubmitted: D
    };
  Pb.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate',
    '$interpolate'
  ];
  Pb.prototype = {
    $rollbackViewValue: function () {
      r(this.$$controls, function (a) {
        a.$rollbackViewValue();
      });
    },
    $commitViewValue: function () {
      r(this.$$controls, function (a) {
        a.$commitViewValue();
      });
    },
    $addControl: function (a) {
      Ia(a.$name, 'input');
      this.$$controls.push(a);
      a.$name && (this[a.$name] = a);
      a.$$parentForm = this;
    },
    $$renameControl: function (a, b) {
      var d = a.$name;
      this[d] === a && delete this[d];
      this[b] = a;
      a.$name = b;
    },
    $removeControl: function (a) {
      a.$name && this[a.$name] === a && delete this[a.$name];
      r(this.$pending, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      r(this.$error, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      r(this.$$success, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);
      cb(this.$$controls, a);
      a.$$parentForm = Qb;
    },
    $setDirty: function () {
      this.$$animate.removeClass(this.$$element, Ya);
      this.$$animate.addClass(this.$$element, Vb);
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$parentForm.$setDirty();
    },
    $setPristine: function () {
      this.$$animate.setClass(this.$$element, Ya, Vb + ' ng-submitted');
      this.$dirty = !1;
      this.$pristine = !0;
      this.$submitted = !1;
      r(this.$$controls, function (a) {
        a.$setPristine();
      });
    },
    $setUntouched: function () {
      r(this.$$controls, function (a) {
        a.$setUntouched();
      });
    },
    $setSubmitted: function () {
      this.$$animate.addClass(this.$$element, 'ng-submitted');
      this.$submitted = !0;
      this.$$parentForm.$setSubmitted();
    }
  };
  ae({
    clazz: Pb,
    set: function (a, b, d) {
      var c = a[b];
      c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
    },
    unset: function (a, b, d) {
      var c = a[b];
      c && (cb(c, d), 0 === c.length && delete a[b]);
    }
  });
  var ie = function (a) {
      return [
        '$timeout',
        '$parse',
        function (b, d) {
          function c(a) {
            return '' === a ? d('this[""]').assign : d(a).assign || D;
          }
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            require: [
              'form',
              '^^?form'
            ],
            controller: Pb,
            compile: function (d, f) {
              d.addClass(Ya).addClass(nb);
              var g = f.name ? 'name' : a && f.ngForm ? 'ngForm' : !1;
              return {
                pre: function (a, d, e, f) {
                  var p = f[0];
                  if (!('action' in e)) {
                    var n = function (b) {
                      a.$apply(function () {
                        p.$commitViewValue();
                        p.$setSubmitted();
                      });
                      b.preventDefault();
                    };
                    d[0].addEventListener('submit', n);
                    d.on('$destroy', function () {
                      b(function () {
                        d[0].removeEventListener('submit', n);
                      }, 0, !1);
                    });
                  }
                  (f[1] || p.$$parentForm).$addControl(p);
                  var r = g ? c(p.$name) : D;
                  g && (r(a, p), e.$observe(g, function (b) {
                    p.$name !== b && (r(a, void 0), p.$$parentForm.$$renameControl(p, b), r = c(p.$name), r(a, p));
                  }));
                  d.on('$destroy', function () {
                    p.$$parentForm.$removeControl(p);
                    r(a, void 0);
                    O(p, Qb);
                  });
                }
              };
            }
          };
        }
      ];
    }, Ie = ie(), Ue = ie(!0), Sg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, dh = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, eh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, Tg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, je = /^(\d{4,})-(\d{2})-(\d{2})$/, ke = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Lc = /^(\d{4,})-W(\d\d)$/, le = /^(\d{4,})-(\d\d)$/, me = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ce = S();
  r([
    'date',
    'datetime-local',
    'month',
    'time',
    'week'
  ], function (a) {
    ce[a] = !0;
  });
  var ne = {
      text: function (a, b, d, c, e, f) {
        Va(a, b, d, c, e, f);
        Gc(c);
      },
      date: ob('date', je, Rb(je, [
        'yyyy',
        'MM',
        'dd'
      ]), 'yyyy-MM-dd'),
      'datetime-local': ob('datetimelocal', ke, Rb(ke, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
      time: ob('time', me, Rb(me, [
        'HH',
        'mm',
        'ss',
        'sss'
      ]), 'HH:mm:ss.sss'),
      week: ob('week', Lc, function (a, b) {
        if (fa(a))
          return a;
        if (E(a)) {
          Lc.lastIndex = 0;
          var d = Lc.exec(a);
          if (d) {
            var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Xd(c), e = 7 * (e - 1);
            b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
            return new Date(c, 0, k.getDate() + e, d, f, g, h);
          }
        }
        return NaN;
      }, 'yyyy-Www'),
      month: ob('month', le, Rb(le, [
        'yyyy',
        'MM'
      ]), 'yyyy-MM'),
      number: function (a, b, d, c, e, f) {
        Hc(a, b, d, c);
        de(c);
        Va(a, b, d, c, e, f);
        var g, h;
        if (u(d.min) || d.ngMin)
          c.$validators.min = function (a) {
            return c.$isEmpty(a) || x(g) || a >= g;
          }, d.$observe('min', function (a) {
            g = Wa(a);
            c.$validate();
          });
        if (u(d.max) || d.ngMax)
          c.$validators.max = function (a) {
            return c.$isEmpty(a) || x(h) || a <= h;
          }, d.$observe('max', function (a) {
            h = Wa(a);
            c.$validate();
          });
        if (u(d.step) || d.ngStep) {
          var k;
          c.$validators.step = function (a, b) {
            return c.$isEmpty(b) || x(k) || ee(b, g || 0, k);
          };
          d.$observe('step', function (a) {
            k = Wa(a);
            c.$validate();
          });
        }
      },
      url: function (a, b, d, c, e, f) {
        Va(a, b, d, c, e, f);
        Gc(c);
        c.$$parserName = 'url';
        c.$validators.url = function (a, b) {
          var d = a || b;
          return c.$isEmpty(d) || dh.test(d);
        };
      },
      email: function (a, b, d, c, e, f) {
        Va(a, b, d, c, e, f);
        Gc(c);
        c.$$parserName = 'email';
        c.$validators.email = function (a, b) {
          var d = a || b;
          return c.$isEmpty(d) || eh.test(d);
        };
      },
      radio: function (a, b, d, c) {
        var e = !d.ngTrim || 'false' !== Q(d.ngTrim);
        x(d.name) && b.attr('name', ++qb);
        b.on('click', function (a) {
          var g;
          b[0].checked && (g = d.value, e && (g = Q(g)), c.$setViewValue(g, a && a.type));
        });
        c.$render = function () {
          var a = d.value;
          e && (a = Q(a));
          b[0].checked = a === c.$viewValue;
        };
        d.$observe('value', c.$render);
      },
      range: function (a, b, d, c, e, f) {
        function g(a, c) {
          b.attr(a, d[a]);
          d.$observe(a, c);
        }
        function h(a) {
          p = Wa(a);
          U(c.$modelValue) || (m ? (a = b.val(), p > a && (a = p, b.val(a)), c.$setViewValue(a)) : c.$validate());
        }
        function k(a) {
          n = Wa(a);
          U(c.$modelValue) || (m ? (a = b.val(), n < a && (b.val(n), a = n < p ? p : n), c.$setViewValue(a)) : c.$validate());
        }
        function l(a) {
          r = Wa(a);
          U(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
        }
        Hc(a, b, d, c);
        de(c);
        Va(a, b, d, c, e, f);
        var m = c.$$hasNativeValidators && 'range' === b[0].type, p = m ? 0 : void 0, n = m ? 100 : void 0, r = m ? 1 : void 0, q = b[0].validity;
        a = u(d.min);
        e = u(d.max);
        f = u(d.step);
        var v = c.$render;
        c.$render = m && u(q.rangeUnderflow) && u(q.rangeOverflow) ? function () {
          v();
          c.$setViewValue(b.val());
        } : v;
        a && (c.$validators.min = m ? function () {
          return !0;
        } : function (a, b) {
          return c.$isEmpty(b) || x(p) || b >= p;
        }, g('min', h));
        e && (c.$validators.max = m ? function () {
          return !0;
        } : function (a, b) {
          return c.$isEmpty(b) || x(n) || b <= n;
        }, g('max', k));
        f && (c.$validators.step = m ? function () {
          return !q.stepMismatch;
        } : function (a, b) {
          return c.$isEmpty(b) || x(r) || ee(b, p || 0, r);
        }, g('step', l));
      },
      checkbox: function (a, b, d, c, e, f, g, h) {
        var k = fe(h, a, 'ngTrueValue', d.ngTrueValue, !0), l = fe(h, a, 'ngFalseValue', d.ngFalseValue, !1);
        b.on('click', function (a) {
          c.$setViewValue(b[0].checked, a && a.type);
        });
        c.$render = function () {
          b[0].checked = c.$viewValue;
        };
        c.$isEmpty = function (a) {
          return !1 === a;
        };
        c.$formatters.push(function (a) {
          return sa(a, k);
        });
        c.$parsers.push(function (a) {
          return a ? k : l;
        });
      },
      hidden: D,
      button: D,
      submit: D,
      reset: D,
      file: D
    }, Zc = [
      '$browser',
      '$sniffer',
      '$filter',
      '$parse',
      function (a, b, d, c) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {
            pre: function (e, f, g, h) {
              h[0] && (ne[L(g.type)] || ne.text)(e, f, g, h[0], b, a, d, c);
            }
          }
        };
      }
    ], fh = /^(true|false|\d+)$/, mf = function () {
      function a(a, d, c) {
        var e = u(c) ? c : 9 === Ca ? '' : null;
        a.prop('value', e);
        d.$set('value', c);
      }
      return {
        restrict: 'A',
        priority: 100,
        compile: function (b, d) {
          return fh.test(d.ngValue) ? function (b, d, f) {
            b = b.$eval(f.ngValue);
            a(d, f, b);
          } : function (b, d, f) {
            b.$watch(f.ngValue, function (b) {
              a(d, f, b);
            });
          };
        }
      };
    }, Me = [
      '$compile',
      function (a) {
        return {
          restrict: 'AC',
          compile: function (b) {
            a.$$addBindingClass(b);
            return function (b, c, e) {
              a.$$addBindingInfo(c, e.ngBind);
              c = c[0];
              b.$watch(e.ngBind, function (a) {
                c.textContent = gc(a);
              });
            };
          }
        };
      }
    ], Oe = [
      '$interpolate',
      '$compile',
      function (a, b) {
        return {
          compile: function (d) {
            b.$$addBindingClass(d);
            return function (c, d, f) {
              c = a(d.attr(f.$attr.ngBindTemplate));
              b.$$addBindingInfo(d, c.expressions);
              d = d[0];
              f.$observe('ngBindTemplate', function (a) {
                d.textContent = x(a) ? '' : a;
              });
            };
          }
        };
      }
    ], Ne = [
      '$sce',
      '$parse',
      '$compile',
      function (a, b, d) {
        return {
          restrict: 'A',
          compile: function (c, e) {
            var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (b) {
                return a.valueOf(b);
              });
            d.$$addBindingClass(c);
            return function (b, c, e) {
              d.$$addBindingInfo(c, e.ngBindHtml);
              b.$watch(g, function () {
                var d = f(b);
                c.html(a.getTrustedHtml(d) || '');
              });
            };
          }
        };
      }
    ], lf = la({
      restrict: 'A',
      require: 'ngModel',
      link: function (a, b, d, c) {
        c.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), Pe = Jc('', !0), Re = Jc('Odd', 0), Qe = Jc('Even', 1), Se = Qa({
      compile: function (a, b) {
        b.$set('ngCloak', void 0);
        a.removeClass('ng-cloak');
      }
    }), Te = [function () {
        return {
          restrict: 'A',
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], dd = {}, gh = {
      blur: !0,
      focus: !0
    };
  r('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var b = Ea('ng-' + a);
    dd[b] = [
      '$parse',
      '$rootScope',
      function (d, c) {
        return {
          restrict: 'A',
          compile: function (e, f) {
            var g = d(f[b]);
            return function (b, d) {
              d.on(a, function (d) {
                var e = function () {
                  g(b, { $event: d });
                };
                gh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
              });
            };
          }
        };
      }
    ];
  });
  var We = [
      '$animate',
      '$compile',
      function (a, b) {
        return {
          multiElement: !0,
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (d, c, e, f, g) {
            var h, k, l;
            d.$watch(e.ngIf, function (d) {
              d ? k || g(function (d, f) {
                k = f;
                d[d.length++] = b.$$createComment('end ngIf', e.ngIf);
                h = { clone: d };
                a.enter(d, c.parent(), c);
              }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).done(function (a) {
                !1 !== a && (l = null);
              }), h = null));
            });
          }
        };
      }
    ], Xe = [
      '$templateRequest',
      '$anchorScroll',
      '$animate',
      function (a, b, d) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: $.noop,
          compile: function (c, e) {
            var f = e.ngInclude || e.src, g = e.onload || '', h = e.autoscroll;
            return function (c, e, m, p, n) {
              var r = 0, q, v, y, t = function () {
                  v && (v.remove(), v = null);
                  q && (q.$destroy(), q = null);
                  y && (d.leave(y).done(function (a) {
                    !1 !== a && (v = null);
                  }), v = y, y = null);
                };
              c.$watch(f, function (f) {
                var m = function (a) {
                    !1 === a || !u(h) || h && !c.$eval(h) || b();
                  }, v = ++r;
                f ? (a(f, !0).then(function (a) {
                  if (!c.$$destroyed && v === r) {
                    var b = c.$new();
                    p.template = a;
                    a = n(b, function (a) {
                      t();
                      d.enter(a, null, e).done(m);
                    });
                    q = b;
                    y = a;
                    q.$emit('$includeContentLoaded', f);
                    c.$eval(g);
                  }
                }, function () {
                  c.$$destroyed || v !== r || (t(), c.$emit('$includeContentError', f));
                }), c.$emit('$includeContentRequested', f)) : (t(), p.template = null);
              });
            };
          }
        };
      }
    ], of = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (b, d, c, e) {
            ia.call(d[0]).match(/SVG/) ? (d.empty(), a(fd(e.template, w.document).childNodes)(b, function (a) {
              d.append(a);
            }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
          }
        };
      }
    ], Ye = Qa({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, b, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), kf = function () {
      return {
        restrict: 'A',
        priority: 100,
        require: 'ngModel',
        link: function (a, b, d, c) {
          var e = d.ngList || ', ', f = 'false' !== d.ngTrim, g = f ? Q(e) : e;
          c.$parsers.push(function (a) {
            if (!x(a)) {
              var b = [];
              a && r(a.split(g), function (a) {
                a && b.push(f ? Q(a) : a);
              });
              return b;
            }
          });
          c.$formatters.push(function (a) {
            if (I(a))
              return a.join(e);
          });
          c.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, nb = 'ng-valid', $d = 'ng-invalid', Ya = 'ng-pristine', Vb = 'ng-dirty', pb = K('ngModel');
  Sb.$inject = '$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate'.split(' ');
  Sb.prototype = {
    $$initGetterSetters: function () {
      if (this.$options.getOption('getterSetter')) {
        var a = this.$$parse(this.$$attr.ngModel + '()'), b = this.$$parse(this.$$attr.ngModel + '($$$p)');
        this.$$ngModelGet = function (b) {
          var c = this.$$parsedNgModel(b);
          C(c) && (c = a(b));
          return c;
        };
        this.$$ngModelSet = function (a, c) {
          C(this.$$parsedNgModel(a)) ? b(a, { $$$p: c }) : this.$$parsedNgModelAssign(a, c);
        };
      } else if (!this.$$parsedNgModel.assign)
        throw pb('nonassign', this.$$attr.ngModel, za(this.$$element));
    },
    $render: D,
    $isEmpty: function (a) {
      return x(a) || '' === a || null === a || a !== a;
    },
    $$updateEmptyClasses: function (a) {
      this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, 'ng-not-empty'), this.$$animate.addClass(this.$$element, 'ng-empty')) : (this.$$animate.removeClass(this.$$element, 'ng-empty'), this.$$animate.addClass(this.$$element, 'ng-not-empty'));
    },
    $setPristine: function () {
      this.$dirty = !1;
      this.$pristine = !0;
      this.$$animate.removeClass(this.$$element, Vb);
      this.$$animate.addClass(this.$$element, Ya);
    },
    $setDirty: function () {
      this.$dirty = !0;
      this.$pristine = !1;
      this.$$animate.removeClass(this.$$element, Ya);
      this.$$animate.addClass(this.$$element, Vb);
      this.$$parentForm.$setDirty();
    },
    $setUntouched: function () {
      this.$touched = !1;
      this.$untouched = !0;
      this.$$animate.setClass(this.$$element, 'ng-untouched', 'ng-touched');
    },
    $setTouched: function () {
      this.$touched = !0;
      this.$untouched = !1;
      this.$$animate.setClass(this.$$element, 'ng-touched', 'ng-untouched');
    },
    $rollbackViewValue: function () {
      this.$$timeout.cancel(this.$$pendingDebounce);
      this.$viewValue = this.$$lastCommittedViewValue;
      this.$render();
    },
    $validate: function () {
      if (!U(this.$modelValue)) {
        var a = this.$$lastCommittedViewValue, b = this.$$rawModelValue, d = this.$valid, c = this.$modelValue, e = this.$options.getOption('allowInvalid'), f = this;
        this.$$runValidators(b, a, function (a) {
          e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope());
        });
      }
    },
    $$runValidators: function (a, b, d) {
      function c() {
        var c = !0;
        r(k.$validators, function (d, e) {
          var g = Boolean(d(a, b));
          c = c && g;
          f(e, g);
        });
        return c ? !0 : (r(k.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }
      function e() {
        var c = [], d = !0;
        r(k.$asyncValidators, function (e, g) {
          var k = e(a, b);
          if (!k || !C(k.then))
            throw pb('nopromise', k);
          f(g, void 0);
          c.push(k.then(function () {
            f(g, !0);
          }, function () {
            d = !1;
            f(g, !1);
          }));
        });
        c.length ? k.$$q.all(c).then(function () {
          g(d);
        }, D) : g(!0);
      }
      function f(a, b) {
        h === k.$$currentValidationRunId && k.$setValidity(a, b);
      }
      function g(a) {
        h === k.$$currentValidationRunId && d(a);
      }
      this.$$currentValidationRunId++;
      var h = this.$$currentValidationRunId, k = this;
      (function () {
        var a = k.$$parserName || 'parse';
        if (x(k.$$parserValid))
          f(a, null);
        else
          return k.$$parserValid || (r(k.$validators, function (a, b) {
            f(b, null);
          }), r(k.$asyncValidators, function (a, b) {
            f(b, null);
          })), f(a, k.$$parserValid), k.$$parserValid;
        return !0;
      }() ? c() ? e() : g(!1) : g(!1));
    },
    $commitViewValue: function () {
      var a = this.$viewValue;
      this.$$timeout.cancel(this.$$pendingDebounce);
      if (this.$$lastCommittedViewValue !== a || '' === a && this.$$hasNativeValidators)
        this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
    },
    $$parseAndValidate: function () {
      var a = this.$$lastCommittedViewValue, b = this;
      if (this.$$parserValid = x(a) ? void 0 : !0)
        for (var d = 0; d < this.$parsers.length; d++)
          if (a = this.$parsers[d](a), x(a)) {
            this.$$parserValid = !1;
            break;
          }
      U(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
      var c = this.$modelValue, e = this.$options.getOption('allowInvalid');
      this.$$rawModelValue = a;
      e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
      this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
        e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
      });
    },
    $$writeModelToScope: function () {
      this.$$ngModelSet(this.$$scope, this.$modelValue);
      r(this.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (b) {
          this.$$exceptionHandler(b);
        }
      }, this);
    },
    $setViewValue: function (a, b) {
      this.$viewValue = a;
      this.$options.getOption('updateOnDefault') && this.$$debounceViewValueCommit(b);
    },
    $$debounceViewValueCommit: function (a) {
      var b = this.$options.getOption('debounce');
      Y(b[a]) ? b = b[a] : Y(b['default']) && (b = b['default']);
      this.$$timeout.cancel(this.$$pendingDebounce);
      var d = this;
      0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
        d.$commitViewValue();
      }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        d.$commitViewValue();
      });
    },
    $overrideModelOptions: function (a) {
      this.$options = this.$options.createChild(a);
      this.$$setUpdateOnEvents();
    },
    $processModelValue: function () {
      var a = this.$$format();
      this.$viewValue !== a && (this.$$updateEmptyClasses(a), this.$viewValue = this.$$lastCommittedViewValue = a, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, D));
    },
    $$format: function () {
      for (var a = this.$formatters, b = a.length, d = this.$modelValue; b--;)
        d = a[b](d);
      return d;
    },
    $$setModelValue: function (a) {
      this.$modelValue = this.$$rawModelValue = a;
      this.$$parserValid = void 0;
      this.$processModelValue();
    },
    $$setUpdateOnEvents: function () {
      this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler);
      if (this.$$updateEvents = this.$options.getOption('updateOn'))
        this.$$element.on(this.$$updateEvents, this.$$updateEventHandler);
    },
    $$updateEventHandler: function (a) {
      this.$$debounceViewValueCommit(a && a.type);
    }
  };
  ae({
    clazz: Sb,
    set: function (a, b) {
      a[b] = !0;
    },
    unset: function (a, b) {
      delete a[b];
    }
  });
  var jf = [
      '$rootScope',
      function (a) {
        return {
          restrict: 'A',
          require: [
            'ngModel',
            '^?form',
            '^?ngModelOptions'
          ],
          controller: Sb,
          priority: 1,
          compile: function (b) {
            b.addClass(Ya).addClass('ng-untouched').addClass(nb);
            return {
              pre: function (a, b, e, f) {
                var g = f[0];
                b = f[1] || g.$$parentForm;
                if (f = f[2])
                  g.$options = f.$options;
                g.$$initGetterSetters();
                b.$addControl(g);
                e.$observe('name', function (a) {
                  g.$name !== a && g.$$parentForm.$$renameControl(g, a);
                });
                a.$on('$destroy', function () {
                  g.$$parentForm.$removeControl(g);
                });
              },
              post: function (b, c, e, f) {
                function g() {
                  h.$setTouched();
                }
                var h = f[0];
                h.$$setUpdateOnEvents();
                c.on('blur', function () {
                  h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
                });
              }
            };
          }
        };
      }
    ], Tb, hh = /(\s+|^)default(\s+|$)/;
  Kc.prototype = {
    getOption: function (a) {
      return this.$$options[a];
    },
    createChild: function (a) {
      var b = !1;
      a = O({}, a);
      r(a, function (d, c) {
        '$inherit' === d ? '*' === c ? b = !0 : (a[c] = this.$$options[c], 'updateOn' === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : 'updateOn' === c && (a.updateOnDefault = !1, a[c] = Q(d.replace(hh, function () {
          a.updateOnDefault = !0;
          return ' ';
        })));
      }, this);
      b && (delete a['*'], ge(a, this.$$options));
      ge(a, Tb.$$options);
      return new Kc(a);
    }
  };
  Tb = new Kc({
    updateOn: '',
    updateOnDefault: !0,
    debounce: 0,
    getterSetter: !1,
    allowInvalid: !1,
    timezone: null
  });
  var nf = function () {
      function a(a, d) {
        this.$$attrs = a;
        this.$$scope = d;
      }
      a.$inject = [
        '$attrs',
        '$scope'
      ];
      a.prototype = {
        $onInit: function () {
          var a = this.parentCtrl ? this.parentCtrl.$options : Tb, d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
          this.$options = a.createChild(d);
        }
      };
      return {
        restrict: 'A',
        priority: 10,
        require: { parentCtrl: '?^^ngModelOptions' },
        bindToController: !0,
        controller: a
      };
    }, Ze = Qa({
      terminal: !0,
      priority: 1000
    }), ih = K('ngOptions'), jh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, gf = [
      '$compile',
      '$document',
      '$parse',
      function (a, b, d) {
        function c(a, b, c) {
          function e(a, b, c, d, f) {
            this.selectValue = a;
            this.viewValue = b;
            this.label = c;
            this.group = d;
            this.disabled = f;
          }
          function f(a) {
            var b;
            if (!r && wa(a))
              b = a;
            else {
              b = [];
              for (var c in a)
                a.hasOwnProperty(c) && '$' !== c.charAt(0) && b.push(c);
            }
            return b;
          }
          var p = a.match(jh);
          if (!p)
            throw ih('iexp', a, za(b));
          var n = p[5] || p[7], r = p[6];
          a = / as /.test(p[0]) && p[1];
          var q = p[9];
          b = d(p[2] ? p[1] : n);
          var v = a && d(a) || b, u = q && d(q), t = q ? function (a, b) {
              return u(c, b);
            } : function (a) {
              return Pa(a);
            }, w = function (a, b) {
              return t(a, C(a, b));
            }, x = d(p[2] || p[1]), A = d(p[3] || ''), H = d(p[4] || ''), G = d(p[8]), z = {}, C = r ? function (a, b) {
              z[r] = b;
              z[n] = a;
              return z;
            } : function (a) {
              z[n] = a;
              return z;
            };
          return {
            trackBy: q,
            getTrackByValue: w,
            getWatchables: d(G, function (a) {
              var b = [];
              a = a || [];
              for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                var h = a === d ? g : d[g], l = a[h], h = C(l, h), l = t(l, h);
                b.push(l);
                if (p[2] || p[1])
                  l = x(c, h), b.push(l);
                p[4] && (h = H(c, h), b.push(h));
              }
              return b;
            }),
            getOptions: function () {
              for (var a = [], b = {}, d = G(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                var p = d === g ? n : g[n], r = C(d[p], p), u = v(c, r), p = t(u, r), y = x(c, r), F = A(c, r), r = H(c, r), u = new e(p, u, y, F, r);
                a.push(u);
                b[p] = u;
              }
              return {
                items: a,
                selectValueMap: b,
                getOptionFromViewValue: function (a) {
                  return b[w(a)];
                },
                getViewValueFromOption: function (a) {
                  return q ? pa(a.viewValue) : a.viewValue;
                }
              };
            }
          };
        }
        var e = w.document.createElement('option'), f = w.document.createElement('optgroup');
        return {
          restrict: 'A',
          terminal: !0,
          require: [
            'select',
            'ngModel'
          ],
          link: {
            pre: function (a, b, c, d) {
              d[0].registerOption = D;
            },
            post: function (d, h, k, l) {
              function m(a) {
                var b = (a = t.getOptionFromViewValue(a)) && a.element;
                b && !b.selected && (b.selected = !0);
                return a;
              }
              function p(a, b) {
                a.element = b;
                b.disabled = a.disabled;
                a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                b.value = a.selectValue;
              }
              var n = l[0], q = l[1], s = k.multiple;
              l = 0;
              for (var v = h.children(), y = v.length; l < y; l++)
                if ('' === v[l].value) {
                  n.hasEmptyOption = !0;
                  n.emptyOption = v.eq(l);
                  break;
                }
              h.empty();
              l = !!n.emptyOption;
              z(e.cloneNode(!1)).val('?');
              var t, w = c(k.ngOptions, h, d), x = b[0].createDocumentFragment();
              n.generateUnknownOptionValue = function (a) {
                return '?';
              };
              s ? (n.writeValue = function (a) {
                if (t) {
                  var b = a && a.map(m) || [];
                  t.items.forEach(function (a) {
                    a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
                  });
                }
              }, n.readValue = function () {
                var a = h.val() || [], b = [];
                r(a, function (a) {
                  (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
                });
                return b;
              }, w.trackBy && d.$watchCollection(function () {
                if (I(q.$viewValue))
                  return q.$viewValue.map(function (a) {
                    return w.getTrackByValue(a);
                  });
              }, function () {
                q.$render();
              })) : (n.writeValue = function (a) {
                if (t) {
                  var b = h[0].options[h[0].selectedIndex], c = t.getOptionFromViewValue(a);
                  b && b.removeAttribute('selected');
                  c ? (h[0].value !== c.selectValue && (n.removeUnknownOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute('selected', 'selected')) : n.selectUnknownOrEmptyOption(a);
                }
              }, n.readValue = function () {
                var a = t.selectValueMap[h.val()];
                return a && !a.disabled ? (n.unselectEmptyOption(), n.removeUnknownOption(), t.getViewValueFromOption(a)) : null;
              }, w.trackBy && d.$watch(function () {
                return w.getTrackByValue(q.$viewValue);
              }, function () {
                q.$render();
              }));
              l && (a(n.emptyOption)(d), h.prepend(n.emptyOption), 8 === n.emptyOption[0].nodeType ? (n.hasEmptyOption = !1, n.registerOption = function (a, b) {
                '' === b.val() && (n.hasEmptyOption = !0, n.emptyOption = b, n.emptyOption.removeClass('ng-scope'), q.$render(), b.on('$destroy', function () {
                  var a = n.$isEmptyOptionSelected();
                  n.hasEmptyOption = !1;
                  n.emptyOption = void 0;
                  a && q.$render();
                }));
              }) : n.emptyOption.removeClass('ng-scope'));
              d.$watchCollection(w.getWatchables, function () {
                var a = t && n.readValue();
                if (t)
                  for (var b = t.items.length - 1; 0 <= b; b--) {
                    var c = t.items[b];
                    u(c.group) ? Fb(c.element.parentNode) : Fb(c.element);
                  }
                t = w.getOptions();
                var d = {};
                t.items.forEach(function (a) {
                  var b;
                  if (u(a.group)) {
                    b = d[a.group];
                    b || (b = f.cloneNode(!1), x.appendChild(b), b.label = null === a.group ? 'null' : a.group, d[a.group] = b);
                    var c = e.cloneNode(!1);
                    b.appendChild(c);
                    p(a, c);
                  } else
                    b = e.cloneNode(!1), x.appendChild(b), p(a, b);
                });
                h[0].appendChild(x);
                q.$render();
                q.$isEmpty(a) || (b = n.readValue(), (w.trackBy || s ? sa(a, b) : a === b) || (q.$setViewValue(b), q.$render()));
              });
            }
          }
        };
      }
    ], $e = [
      '$locale',
      '$interpolate',
      '$log',
      function (a, b, d) {
        var c = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
          link: function (f, g, h) {
            function k(a) {
              g.text(a || '');
            }
            var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, n = f.$eval(m) || {}, q = {}, s = b.startSymbol(), v = b.endSymbol(), u = s + l + '-' + p + v, t = $.noop, w;
            r(h, function (a, b) {
              var c = e.exec(b);
              c && (c = (c[1] ? '-' : '') + L(c[2]), n[c] = g.attr(h.$attr[b]));
            });
            r(n, function (a, d) {
              q[d] = b(a.replace(c, u));
            });
            f.$watch(l, function (b) {
              var c = parseFloat(b), e = U(c);
              e || c in n || (c = a.pluralCat(c - p));
              c === w || e && U(w) || (t(), e = q[c], x(e) ? (null != b && d.debug('ngPluralize: no rule defined for \'' + c + '\' in ' + m), t = D, k()) : t = f.$watch(e, k), w = c);
            });
          }
        };
      }
    ], af = [
      '$parse',
      '$animate',
      '$compile',
      function (a, b, d) {
        var c = K('ngRepeat'), e = function (a, b, c, d, e, m, p) {
            a[c] = d;
            e && (a[e] = m);
            a.$index = b;
            a.$first = 0 === b;
            a.$last = b === p - 1;
            a.$middle = !(a.$first || a.$last);
            a.$odd = !(a.$even = 0 === (b & 1));
          };
        return {
          restrict: 'A',
          multiElement: !0,
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          compile: function (f, g) {
            var h = g.ngRepeat, k = d.$$createComment('end ngRepeat', h), l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!l)
              throw c('iexp', h);
            var m = l[1], p = l[2], n = l[3], q = l[4], l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
            if (!l)
              throw c('iidexp', m);
            var s = l[3] || l[1], v = l[2];
            if (n && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))
              throw c('badident', n);
            var u, t, w, x, z = { $id: Pa };
            q ? u = a(q) : (w = function (a, b) {
              return Pa(b);
            }, x = function (a) {
              return a;
            });
            return function (a, d, f, g, l) {
              u && (t = function (b, c, d) {
                v && (z[v] = b);
                z[s] = c;
                z.$index = d;
                return u(a, z);
              });
              var m = S();
              a.$watchCollection(p, function (f) {
                var g, p, q = d[0], u, y = S(), z, F, C, A, D, B, E;
                n && (a[n] = f);
                if (wa(f))
                  D = f, p = t || w;
                else
                  for (E in p = t || x, D = [], f)
                    ra.call(f, E) && '$' !== E.charAt(0) && D.push(E);
                z = D.length;
                E = Array(z);
                for (g = 0; g < z; g++)
                  if (F = f === D ? g : D[g], C = f[F], A = p(F, C, g), m[A])
                    B = m[A], delete m[A], y[A] = B, E[g] = B;
                  else {
                    if (y[A])
                      throw r(E, function (a) {
                        a && a.scope && (m[a.id] = a);
                      }), c('dupes', h, A, C);
                    E[g] = {
                      id: A,
                      scope: void 0,
                      clone: void 0
                    };
                    y[A] = !0;
                  }
                for (u in m) {
                  B = m[u];
                  A = tb(B.clone);
                  b.leave(A);
                  if (A[0].parentNode)
                    for (g = 0, p = A.length; g < p; g++)
                      A[g].$$NG_REMOVED = !0;
                  B.scope.$destroy();
                }
                for (g = 0; g < z; g++)
                  if (F = f === D ? g : D[g], C = f[F], B = E[g], B.scope) {
                    u = q;
                    do
                      u = u.nextSibling;
                    while (u && u.$$NG_REMOVED);
                    B.clone[0] !== u && b.move(tb(B.clone), null, q);
                    q = B.clone[B.clone.length - 1];
                    e(B.scope, g, s, C, v, F, z);
                  } else
                    l(function (a, c) {
                      B.scope = c;
                      var d = k.cloneNode(!1);
                      a[a.length++] = d;
                      b.enter(a, null, q);
                      q = d;
                      B.clone = a;
                      y[B.id] = B;
                      e(B.scope, g, s, C, v, F, z);
                    });
                m = y;
              });
            };
          }
        };
      }
    ], bf = [
      '$animate',
      function (a) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (b, d, c) {
            b.$watch(c.ngShow, function (b) {
              a[b ? 'removeClass' : 'addClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], Ve = [
      '$animate',
      function (a) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (b, d, c) {
            b.$watch(c.ngHide, function (b) {
              a[b ? 'addClass' : 'removeClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], cf = Qa(function (a, b, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && r(d, function (a, c) {
          b.css(c, '');
        });
        a && b.css(a);
      }, !0);
    }), df = [
      '$animate',
      '$compile',
      function (a, b) {
        return {
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (d, c, e, f) {
            var g = [], h = [], k = [], l = [], m = function (a, b) {
                return function (c) {
                  !1 !== c && a.splice(b, 1);
                };
              };
            d.$watch(e.ngSwitch || e.on, function (c) {
              for (var d, e; k.length;)
                a.cancel(k.pop());
              d = 0;
              for (e = l.length; d < e; ++d) {
                var q = tb(h[d].clone);
                l[d].$destroy();
                (k[d] = a.leave(q)).done(m(k, d));
              }
              h.length = 0;
              l.length = 0;
              (g = f.cases['!' + c] || f.cases['?']) && r(g, function (c) {
                c.transclude(function (d, e) {
                  l.push(e);
                  var f = c.element;
                  d[d.length++] = b.$$createComment('end ngSwitchWhen');
                  h.push({ clone: d });
                  a.enter(d, f.parent(), f);
                });
              });
            });
          }
        };
      }
    ], ef = Qa({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (a, b, d, c, e) {
        a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
          return c[b - 1] !== a;
        });
        r(a, function (a) {
          c.cases['!' + a] = c.cases['!' + a] || [];
          c.cases['!' + a].push({
            transclude: e,
            element: b
          });
        });
      }
    }), ff = Qa({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (a, b, d, c, e) {
        c.cases['?'] = c.cases['?'] || [];
        c.cases['?'].push({
          transclude: e,
          element: b
        });
      }
    }), kh = K('ngTransclude'), hf = [
      '$compile',
      function (a) {
        return {
          restrict: 'EAC',
          compile: function (b) {
            var d = a(b.contents());
            b.empty();
            return function (a, b, f, g, h) {
              function k() {
                d(a, function (a) {
                  b.append(a);
                });
              }
              if (!h)
                throw kh('orphan', za(b));
              f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = '');
              f = f.ngTransclude || f.ngTranscludeSlot;
              h(function (a, c) {
                var d;
                if (d = a.length)
                  a: {
                    d = 0;
                    for (var f = a.length; d < f; d++) {
                      var g = a[d];
                      if (g.nodeType !== Oa || g.nodeValue.trim()) {
                        d = !0;
                        break a;
                      }
                    }
                    d = void 0;
                  }
                d ? b.append(a) : (k(), c.$destroy());
              }, null, f);
              f && !h.isSlotFilled(f) && k();
            };
          }
        };
      }
    ], Je = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (b, d) {
            'text/ng-template' === d.type && a.put(d.id, b[0].text);
          }
        };
      }
    ], lh = {
      $setViewValue: D,
      $render: D
    }, mh = [
      '$element',
      '$scope',
      function (a, b) {
        function d() {
          g || (g = !0, b.$$postDigest(function () {
            g = !1;
            e.ngModelCtrl.$render();
          }));
        }
        function c(a) {
          h || (h = !0, b.$$postDigest(function () {
            b.$$destroyed || (h = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
          }));
        }
        var e = this, f = new Hb();
        e.selectValueMap = {};
        e.ngModelCtrl = lh;
        e.multiple = !1;
        e.unknownOption = z(w.document.createElement('option'));
        e.hasEmptyOption = !1;
        e.emptyOption = void 0;
        e.renderUnknownOption = function (b) {
          b = e.generateUnknownOptionValue(b);
          e.unknownOption.val(b);
          a.prepend(e.unknownOption);
          Ga(e.unknownOption, !0);
          a.val(b);
        };
        e.updateUnknownOption = function (b) {
          b = e.generateUnknownOptionValue(b);
          e.unknownOption.val(b);
          Ga(e.unknownOption, !0);
          a.val(b);
        };
        e.generateUnknownOptionValue = function (a) {
          return '? ' + Pa(a) + ' ?';
        };
        e.removeUnknownOption = function () {
          e.unknownOption.parent() && e.unknownOption.remove();
        };
        e.selectEmptyOption = function () {
          e.emptyOption && (a.val(''), Ga(e.emptyOption, !0));
        };
        e.unselectEmptyOption = function () {
          e.hasEmptyOption && Ga(e.emptyOption, !1);
        };
        b.$on('$destroy', function () {
          e.renderUnknownOption = D;
        });
        e.readValue = function () {
          var b = a.val(), b = b in e.selectValueMap ? e.selectValueMap[b] : b;
          return e.hasOption(b) ? b : null;
        };
        e.writeValue = function (b) {
          var c = a[0].options[a[0].selectedIndex];
          c && Ga(z(c), !1);
          e.hasOption(b) ? (e.removeUnknownOption(), c = Pa(b), a.val(c in e.selectValueMap ? c : b), Ga(z(a[0].options[a[0].selectedIndex]), !0)) : e.selectUnknownOrEmptyOption(b);
        };
        e.addOption = function (a, b) {
          if (8 !== b[0].nodeType) {
            Ia(a, '"option value"');
            '' === a && (e.hasEmptyOption = !0, e.emptyOption = b);
            var c = f.get(a) || 0;
            f.set(a, c + 1);
            d();
          }
        };
        e.removeOption = function (a) {
          var b = f.get(a);
          b && (1 === b ? (f.delete(a), '' === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1));
        };
        e.hasOption = function (a) {
          return !!f.get(a);
        };
        e.$hasEmptyOption = function () {
          return e.hasEmptyOption;
        };
        e.$isUnknownOptionSelected = function () {
          return a[0].options[0] === e.unknownOption[0];
        };
        e.$isEmptyOptionSelected = function () {
          return e.hasEmptyOption && a[0].options[a[0].selectedIndex] === e.emptyOption[0];
        };
        e.selectUnknownOrEmptyOption = function (a) {
          null == a && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(a) : e.renderUnknownOption(a);
        };
        var g = !1, h = !1;
        e.registerOption = function (a, b, f, g, h) {
          if (f.$attr.ngValue) {
            var q, r = NaN;
            f.$observe('value', function (a) {
              var d, f = b.prop('selected');
              u(r) && (e.removeOption(q), delete e.selectValueMap[r], d = !0);
              r = Pa(a);
              q = a;
              e.selectValueMap[r] = a;
              e.addOption(a, b);
              b.attr('value', r);
              d && f && c();
            });
          } else
            g ? f.$observe('value', function (a) {
              e.readValue();
              var d, f = b.prop('selected');
              u(q) && (e.removeOption(q), d = !0);
              q = a;
              e.addOption(a, b);
              d && f && c();
            }) : h ? a.$watch(h, function (a, d) {
              f.$set('value', a);
              var g = b.prop('selected');
              d !== a && e.removeOption(d);
              e.addOption(a, b);
              d && g && c();
            }) : e.addOption(f.value, b);
          f.$observe('disabled', function (a) {
            if ('true' === a || a && b.prop('selected'))
              e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
          });
          b.on('$destroy', function () {
            var a = e.readValue(), b = f.value;
            e.removeOption(b);
            d();
            (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
          });
        };
      }
    ], Ke = function () {
      return {
        restrict: 'E',
        require: [
          'select',
          '?ngModel'
        ],
        controller: mh,
        priority: 1,
        link: {
          pre: function (a, b, d, c) {
            var e = c[0], f = c[1];
            if (f) {
              if (e.ngModelCtrl = f, b.on('change', function () {
                  e.removeUnknownOption();
                  a.$apply(function () {
                    f.$setViewValue(e.readValue());
                  });
                }), d.multiple) {
                e.multiple = !0;
                e.readValue = function () {
                  var a = [];
                  r(b.find('option'), function (b) {
                    b.selected && !b.disabled && (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b));
                  });
                  return a;
                };
                e.writeValue = function (a) {
                  r(b.find('option'), function (b) {
                    var c = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));
                    c !== b.selected && Ga(z(b), c);
                  });
                };
                var g, h = NaN;
                a.$watch(function () {
                  h !== f.$viewValue || sa(g, f.$viewValue) || (g = ka(f.$viewValue), f.$render());
                  h = f.$viewValue;
                });
                f.$isEmpty = function (a) {
                  return !a || 0 === a.length;
                };
              }
            } else
              e.registerOption = D;
          },
          post: function (a, b, d, c) {
            var e = c[1];
            if (e) {
              var f = c[0];
              e.$render = function () {
                f.writeValue(e.$viewValue);
              };
            }
          }
        }
      };
    }, Le = [
      '$interpolate',
      function (a) {
        return {
          restrict: 'E',
          priority: 100,
          compile: function (b, d) {
            var c, e;
            u(d.ngValue) || (u(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set('value', b.text()));
            return function (a, b, d) {
              var k = b.parent();
              (k = k.data('$selectController') || k.parent().data('$selectController')) && k.registerOption(a, b, d, c, e);
            };
          }
        };
      }
    ], ad = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, b, d, c) {
          c && (d.required = !0, c.$validators.required = function (a, b) {
            return !d.required || !c.$isEmpty(b);
          }, d.$observe('required', function () {
            c.$validate();
          }));
        }
      };
    }, $c = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, b, d, c) {
          if (c) {
            var e, f = d.ngPattern || d.pattern;
            d.$observe('pattern', function (a) {
              E(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
              if (a && !a.test)
                throw K('ngPattern')('noregexp', f, a, za(b));
              e = a || void 0;
              c.$validate();
            });
            c.$validators.pattern = function (a, b) {
              return c.$isEmpty(b) || x(e) || e.test(b);
            };
          }
        }
      };
    }, cd = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, b, d, c) {
          if (c) {
            var e = -1;
            d.$observe('maxlength', function (a) {
              a = Z(a);
              e = U(a) ? -1 : a;
              c.$validate();
            });
            c.$validators.maxlength = function (a, b) {
              return 0 > e || c.$isEmpty(b) || b.length <= e;
            };
          }
        }
      };
    }, bd = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, b, d, c) {
          if (c) {
            var e = 0;
            d.$observe('minlength', function (a) {
              e = Z(a) || 0;
              c.$validate();
            });
            c.$validators.minlength = function (a, b) {
              return c.$isEmpty(b) || b.length >= e;
            };
          }
        }
      };
    };
  w.angular.bootstrap ? w.console && console.log('WARNING: Tried to load AngularJS more than once.') : (Be(), Ee($), $.module('ngLocale', [], [
    '$provide',
    function (a) {
      function b(a) {
        a += '';
        var b = a.indexOf('.');
        return -1 == b ? 0 : a.length - b - 1;
      }
      a.value('$locale', {
        DATETIME_FORMATS: {
          AMPMS: [
            'AM',
            'PM'
          ],
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          ERANAMES: [
            'Before Christ',
            'Anno Domini'
          ],
          ERAS: [
            'BC',
            'AD'
          ],
          FIRSTDAYOFWEEK: 6,
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          STANDALONEMONTH: 'January February March April May June July August September October November December'.split(' '),
          WEEKENDRANGE: [
            5,
            6
          ],
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          medium: 'MMM d, y h:mm:ss a',
          mediumDate: 'MMM d, y',
          mediumTime: 'h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          shortDate: 'M/d/yy',
          shortTime: 'h:mm a'
        },
        NUMBER_FORMATS: {
          CURRENCY_SYM: '$',
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              gSize: 3,
              lgSize: 3,
              maxFrac: 3,
              minFrac: 0,
              minInt: 1,
              negPre: '-',
              negSuf: '',
              posPre: '',
              posSuf: ''
            },
            {
              gSize: 3,
              lgSize: 3,
              maxFrac: 2,
              minFrac: 2,
              minInt: 1,
              negPre: '-\xa4',
              negSuf: '',
              posPre: '\xa4',
              posSuf: ''
            }
          ]
        },
        id: 'en-us',
        localeID: 'en_US',
        pluralCat: function (a, c) {
          var e = a | 0, f = c;
          void 0 === f && (f = Math.min(b(a), 3));
          Math.pow(10, f);
          return 1 == e && 0 == f ? 'one' : 'other';
        }
      });
    }
  ]), z(function () {
    we(w.document, Uc);
  }));
}(window));
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');  //# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.6.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (J, d) {
  'use strict';
  function A(d) {
    k && d.get('$route');
  }
  function B(t, u, g) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (a, f, b, c, m) {
        function v() {
          l && (g.cancel(l), l = null);
          n && (n.$destroy(), n = null);
          p && (l = g.leave(p), l.done(function (a) {
            !1 !== a && (l = null);
          }), p = null);
        }
        function E() {
          var b = t.current && t.current.locals;
          if (d.isDefined(b && b.$template)) {
            var b = a.$new(), c = t.current;
            p = m(b, function (b) {
              g.enter(b, null, p || f).done(function (b) {
                !1 === b || !d.isDefined(w) || w && !a.$eval(w) || u();
              });
              v();
            });
            n = c.scope = b;
            n.$emit('$viewContentLoaded');
            n.$eval(k);
          } else
            v();
        }
        var n, p, l, w = b.autoscroll, k = b.onload || '';
        a.$on('$routeChangeSuccess', E);
        E();
      }
    };
  }
  function C(d, k, g) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (a, f) {
        var b = g.current, c = b.locals;
        f.html(c.$template);
        var m = d(f.contents());
        if (b.controller) {
          c.$scope = a;
          var v = k(b.controller, c);
          b.controllerAs && (a[b.controllerAs] = v);
          f.data('$ngControllerController', v);
          f.children().data('$ngControllerController', v);
        }
        a[b.resolveAs || '$resolve'] = c;
        m(a);
      }
    };
  }
  var x, y, F, G, z = d.module('ngRoute', []).info({ angularVersion: '1.6.9' }).provider('$route', function () {
      function t(a, f) {
        return d.extend(Object.create(a), f);
      }
      function u(a, d) {
        var b = d.caseInsensitiveMatch, c = {
            originalPath: a,
            regexp: a
          }, g = c.keys = [];
        a = a.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (a, b, d, c) {
          a = '?' === c || '*?' === c ? '?' : null;
          c = '*' === c || '*?' === c ? '*' : null;
          g.push({
            name: d,
            optional: !!a
          });
          b = b || '';
          return '' + (a ? '' : b) + '(?:' + (a ? b : '') + (c && '(.+?)' || '([^/]+)') + (a || '') + ')' + (a || '');
        }).replace(/([\/$*])/g, '\\$1');
        c.regexp = new RegExp('^' + a + '$', b ? 'i' : '');
        return c;
      }
      x = d.isArray;
      y = d.isObject;
      F = d.isDefined;
      G = d.noop;
      var g = {};
      this.when = function (a, f) {
        var b;
        b = void 0;
        if (x(f)) {
          b = b || [];
          for (var c = 0, m = f.length; c < m; c++)
            b[c] = f[c];
        } else if (y(f))
          for (c in b = b || {}, f)
            if ('$' !== c.charAt(0) || '$' !== c.charAt(1))
              b[c] = f[c];
        b = b || f;
        d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
        d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
        g[a] = d.extend(b, a && u(a, b));
        a && (c = '/' === a[a.length - 1] ? a.substr(0, a.length - 1) : a + '/', g[c] = d.extend({ redirectTo: a }, u(c, b)));
        return this;
      };
      this.caseInsensitiveMatch = !1;
      this.otherwise = function (a) {
        'string' === typeof a && (a = { redirectTo: a });
        this.when(null, a);
        return this;
      };
      k = !0;
      this.eagerInstantiationEnabled = function (a) {
        return F(a) ? (k = a, this) : k;
      };
      this.$get = [
        '$rootScope',
        '$location',
        '$routeParams',
        '$q',
        '$injector',
        '$templateRequest',
        '$sce',
        '$browser',
        function (a, f, b, c, m, k, u, n) {
          function p(e) {
            var h = q.current;
            (y = (s = C()) && h && s.$$route === h.$$route && d.equals(s.pathParams, h.pathParams) && !s.reloadOnSearch && !D) || !h && !s || a.$broadcast('$routeChangeStart', s, h).defaultPrevented && e && e.preventDefault();
          }
          function l() {
            var e = q.current, h = s;
            if (y)
              e.params = h.params, d.copy(e.params, b), a.$broadcast('$routeUpdate', e);
            else if (h || e) {
              D = !1;
              q.current = h;
              var H = c.resolve(h);
              n.$$incOutstandingRequestCount();
              H.then(w).then(z).then(function (c) {
                return c && H.then(A).then(function (c) {
                  h === q.current && (h && (h.locals = c, d.copy(h.params, b)), a.$broadcast('$routeChangeSuccess', h, e));
                });
              }).catch(function (b) {
                h === q.current && a.$broadcast('$routeChangeError', h, e, b);
              }).finally(function () {
                n.$$completeOutstandingRequest(G);
              });
            }
          }
          function w(e) {
            var a = {
                route: e,
                hasRedirection: !1
              };
            if (e)
              if (e.redirectTo)
                if (d.isString(e.redirectTo))
                  a.path = x(e.redirectTo, e.params), a.search = e.params, a.hasRedirection = !0;
                else {
                  var b = f.path(), g = f.search();
                  e = e.redirectTo(e.pathParams, b, g);
                  d.isDefined(e) && (a.url = e, a.hasRedirection = !0);
                }
              else if (e.resolveRedirectTo)
                return c.resolve(m.invoke(e.resolveRedirectTo)).then(function (e) {
                  d.isDefined(e) && (a.url = e, a.hasRedirection = !0);
                  return a;
                });
            return a;
          }
          function z(a) {
            var b = !0;
            if (a.route !== q.current)
              b = !1;
            else if (a.hasRedirection) {
              var d = f.url(), c = a.url;
              c ? f.url(c).replace() : c = f.path(a.path).search(a.search).replace().url();
              c !== d && (b = !1);
            }
            return b;
          }
          function A(a) {
            if (a) {
              var b = d.extend({}, a.resolve);
              d.forEach(b, function (a, e) {
                b[e] = d.isString(a) ? m.get(a) : m.invoke(a, null, null, e);
              });
              a = B(a);
              d.isDefined(a) && (b.$template = a);
              return c.all(b);
            }
          }
          function B(a) {
            var b, c;
            d.isDefined(b = a.template) ? d.isFunction(b) && (b = b(a.params)) : d.isDefined(c = a.templateUrl) && (d.isFunction(c) && (c = c(a.params)), d.isDefined(c) && (a.loadedTemplateUrl = u.valueOf(c), b = k(c)));
            return b;
          }
          function C() {
            var a, b;
            d.forEach(g, function (c, g) {
              var r;
              if (r = !b) {
                var k = f.path();
                r = c.keys;
                var m = {};
                if (c.regexp)
                  if (k = c.regexp.exec(k)) {
                    for (var l = 1, n = k.length; l < n; ++l) {
                      var p = r[l - 1], q = k[l];
                      p && q && (m[p.name] = q);
                    }
                    r = m;
                  } else
                    r = null;
                else
                  r = null;
                r = a = r;
              }
              r && (b = t(c, {
                params: d.extend({}, f.search(), a),
                pathParams: a
              }), b.$$route = c);
            });
            return b || g[null] && t(g[null], {
              params: {},
              pathParams: {}
            });
          }
          function x(a, b) {
            var c = [];
            d.forEach((a || '').split(':'), function (a, d) {
              if (0 === d)
                c.push(a);
              else {
                var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                c.push(b[f]);
                c.push(e[2] || '');
                delete b[f];
              }
            });
            return c.join('');
          }
          var D = !1, s, y, q = {
              routes: g,
              reload: function () {
                D = !0;
                var b = {
                    defaultPrevented: !1,
                    preventDefault: function () {
                      this.defaultPrevented = !0;
                      D = !1;
                    }
                  };
                a.$evalAsync(function () {
                  p(b);
                  b.defaultPrevented || l();
                });
              },
              updateParams: function (a) {
                if (this.current && this.current.$$route)
                  a = d.extend({}, this.current.params, a), f.path(x(this.current.$$route.originalPath, a)), f.search(a);
                else
                  throw I('norout');
              }
            };
          a.$on('$locationChangeStart', p);
          a.$on('$locationChangeSuccess', l);
          return q;
        }
      ];
    }).run(A), I = d.$$minErr('ngRoute'), k;
  A.$inject = ['$injector'];
  z.provider('$routeParams', function () {
    this.$get = function () {
      return {};
    };
  });
  z.directive('ngView', B);
  z.directive('ngView', C);
  B.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'
  ];
  C.$inject = [
    '$compile',
    '$controller',
    '$route'
  ];
}(window, window.angular));  //# sourceMappingURL=angular-route.min.js.map

// Zepto 1.1.4 (generated with Zepto Builder) - zepto event ajax form ie detect fx - zeptojs.com/license 
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = function () {
    var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter, document = window.document, elementDisplay = {}, classCache = {}, cssNumber = {
        'column-count': 1,
        'columns': 1,
        'font-weight': 1,
        'line-height': 1,
        'opacity': 1,
        'z-index': 1,
        'zoom': 1
      }, fragmentRE = /^\s*<(\w+|!)[^>]*>/, singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rootNodeRE = /^(?:body|html)$/i, capitalRE = /([A-Z])/g,
      // special attributes that should be get/set via method calls
      methodAttributes = [
        'val',
        'css',
        'html',
        'text',
        'data',
        'width',
        'height',
        'offset'
      ], adjacencyOperators = [
        'after',
        'prepend',
        'before',
        'append'
      ], table = document.createElement('table'), tableRow = document.createElement('tr'), containers = {
        'tr': document.createElement('tbody'),
        'tbody': table,
        'thead': table,
        'tfoot': table,
        'td': tableRow,
        'th': tableRow,
        '*': document.createElement('div')
      }, readyRE = /complete|loaded|interactive/, simpleSelectorRE = /^[\w-]*$/, class2type = {}, toString = class2type.toString, zepto = {}, camelize, uniq, tempParent = document.createElement('div'), propMap = {
        'tabindex': 'tabIndex',
        'readonly': 'readOnly',
        'for': 'htmlFor',
        'class': 'className',
        'maxlength': 'maxLength',
        'cellspacing': 'cellSpacing',
        'cellpadding': 'cellPadding',
        'rowspan': 'rowSpan',
        'colspan': 'colSpan',
        'usemap': 'useMap',
        'frameborder': 'frameBorder',
        'contenteditable': 'contentEditable'
      }, isArray = Array.isArray || function (object) {
        return object instanceof Array;
      };
    zepto.matches = function (element, selector) {
      if (!selector || !element || element.nodeType !== 1)
        return false;
      var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
      if (matchesSelector)
        return matchesSelector.call(element, selector);
      // fall back to performing a selector:
      var match, parent = element.parentNode, temp = !parent;
      if (temp)
        (parent = tempParent).appendChild(element);
      match = ~zepto.qsa(parent, selector).indexOf(element);
      temp && tempParent.removeChild(element);
      return match;
    };
    function type(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
    }
    function isFunction(value) {
      return type(value) == 'function';
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      return type(obj) == 'object';
    }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    function likeArray(obj) {
      return typeof obj.length == 'number';
    }
    function compact(array) {
      return filter.call(array, function (item) {
        return item != null;
      });
    }
    function flatten(array) {
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function (str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function (array) {
      return filter.call(array, function (item, idx) {
        return array.indexOf(item) == idx;
      });
    };
    function classRE(name) {
      return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
    }
    function maybeAddPx(name, value) {
      return typeof value == 'number' && !cssNumber[dasherize(name)] ? value + 'px' : value;
    }
    function defaultDisplay(nodeName) {
      var element, display;
      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue('display');
        element.parentNode.removeChild(element);
        display == 'none' && (display = 'block');
        elementDisplay[nodeName] = display;
      }
      return elementDisplay[nodeName];
    }
    function children(element) {
      return 'children' in element ? slice.call(element.children) : $.map(element.childNodes, function (node) {
        if (node.nodeType == 1)
          return node;
      });
    }
    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overriden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function (html, name, properties) {
      var dom, nodes, container;
      // A special case optimization for a single tag
      if (singleTagRE.test(html))
        dom = $(document.createElement(RegExp.$1));
      if (!dom) {
        if (html.replace)
          html = html.replace(tagExpanderRE, '<$1></$2>');
        if (name === undefined)
          name = fragmentRE.test(html) && RegExp.$1;
        if (!(name in containers))
          name = '*';
        container = containers[name];
        container.innerHTML = '' + html;
        dom = $.each(slice.call(container.childNodes), function () {
          container.removeChild(this);
        });
      }
      if (isPlainObject(properties)) {
        nodes = $(dom);
        $.each(properties, function (key, value) {
          if (methodAttributes.indexOf(key) > -1)
            nodes[key](value);
          else
            nodes.attr(key, value);
        });
      }
      return dom;
    };
    // `$.zepto.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Zepto functions
    // to the array. Note that `__proto__` is not supported on Internet
    // Explorer. This method can be overriden in plugins.
    zepto.Z = function (dom, selector) {
      dom = dom || [];
      dom.__proto__ = $.fn;
      dom.selector = selector || '';
      return dom;
    };
    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overriden in plugins.
    zepto.isZ = function (object) {
      return object instanceof zepto.Z;
    };
    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overriden in plugins.
    zepto.init = function (selector, context) {
      var dom;
      // If nothing given, return an empty Zepto collection
      if (!selector)
        return zepto.Z();
      else if (typeof selector == 'string') {
        selector = selector.trim();
        // If it's a html fragment, create nodes from it
        // Note: In both Chrome 21 and Firefox 15, DOM error 12
        // is thrown if the fragment doesn't begin with <
        if (selector[0] == '<' && fragmentRE.test(selector))
          dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
        else if (context !== undefined)
          return $(context).find(selector);
        else
          dom = zepto.qsa(document, selector);
      }  // If a function is given, call it when the DOM is ready
      else if (isFunction(selector))
        return $(document).ready(selector);
      else if (zepto.isZ(selector))
        return selector;
      else {
        // normalize array if an array of nodes is given
        if (isArray(selector))
          dom = compact(selector);
        else if (isObject(selector))
          dom = [selector], selector = null;
        else if (fragmentRE.test(selector))
          dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
        else if (context !== undefined)
          return $(context).find(selector);
        else
          dom = zepto.qsa(document, selector);
      }
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector);
    };
    // `$` will be the base `Zepto` object. When calling this
    // function just call `$.zepto.init, which makes the implementation
    // details of selecting nodes and creating Zepto collections
    // patchable in plugins.
    $ = function (selector, context) {
      return zepto.init(selector, context);
    };
    function extend(target, source, deep) {
      for (key in source)
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key]))
            target[key] = {};
          if (isArray(source[key]) && !isArray(target[key]))
            target[key] = [];
          extend(target[key], source[key], deep);
        } else if (source[key] !== undefined)
          target[key] = source[key];
    }
    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
      var deep, args = slice.call(arguments, 1);
      if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    };
    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overriden in plugins.
    zepto.qsa = function (element, selector) {
      var found, doms, maybeID = selector[0] == '#', maybeClass = !maybeID && selector[0] == '.', nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
        // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly);
      doms = isDocument(element) && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
      // fix ios7 下，同名ID获取没有父元素限定的bug shbzhang 2014-10-22 10:40:12
      if (element.nodeType !== 1)
        return doms;
      var _tmp = [];
      for (var i = 0, len = doms.length; i < len; i++) {
        if (element.contains(doms[i]))
          _tmp.push(doms[i]);
      }
      return _tmp;
    };
    function filtered(nodes, selector) {
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }
    $.contains = document.documentElement.contains ? function (parent, node) {
      return parent !== node && parent.contains(node);
    } : function (parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent)
          return true;
      return false;
    };
    function funcArg(context, arg, idx, payload) {
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }
    function setAttribute(node, name, value) {
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }
    // access className property while respecting SVGAnimatedString
    function className(node, value) {
      var klass = node.className || '', svg = klass && klass.baseVal !== undefined;
      if (value === undefined)
        return svg ? klass.baseVal : klass;
      svg ? klass.baseVal = value : node.className = value;
    }
    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
      var num;
      try {
        return value ? value == 'true' || (value == 'false' ? false : value == 'null' ? null : !/^0/.test(value) && !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }
    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;
    $.isEmptyObject = function (obj) {
      var name;
      for (name in obj)
        return false;
      return true;
    };
    $.inArray = function (elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    };
    $.camelCase = camelize;
    $.trim = function (str) {
      return str == null ? '' : String.prototype.trim.call(str);
    };
    // plugin compatibility
    $.uuid = 0;
    $.support = {};
    $.expr = {};
    $.map = function (elements, callback) {
      var value, values = [], i, key;
      if (likeArray(elements))
        for (i = 0; i < elements.length; i++) {
          value = callback(elements[i], i);
          if (value != null)
            values.push(value);
        }
      else
        for (key in elements) {
          value = callback(elements[key], key);
          if (value != null)
            values.push(value);
        }
      return flatten(values);
    };
    $.each = function (elements, callback) {
      var i, key;
      if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++)
          if (callback.call(elements[i], i, elements[i]) === false)
            return elements;
      } else {
        for (key in elements)
          if (callback.call(elements[key], key, elements[key]) === false)
            return elements;
      }
      return elements;
    };
    $.grep = function (elements, callback) {
      return filter.call(elements, callback);
    };
    if (window.JSON)
      $.parseJSON = JSON.parse;
    // Populate the class2type map
    $.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
      class2type['[object ' + name + ']'] = name.toLowerCase();
    });
    // Define methods that will be available on all
    // Zepto collections
    $.fn = {
      forEach: emptyArray.forEach,
      reduce: emptyArray.reduce,
      push: emptyArray.push,
      sort: emptyArray.sort,
      indexOf: emptyArray.indexOf,
      concat: emptyArray.concat,
      map: function (fn) {
        return $($.map(this, function (el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function () {
        return $(slice.apply(this, arguments));
      },
      ready: function (callback) {
        // need to check if document.body exists for IE as that browser reports
        // document ready when it hasn't yet created the body element
        if (readyRE.test(document.readyState) && document.body)
          callback($);
        else
          document.addEventListener('DOMContentLoaded', function () {
            callback($);
          }, false);
        return this;
      },
      get: function (idx) {
        return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function () {
        return this.get();
      },
      size: function () {
        return this.length;
      },
      remove: function () {
        return this.each(function () {
          if (this.parentNode != null)
            this.parentNode.removeChild(this);
        });
      },
      each: function (callback) {
        emptyArray.every.call(this, function (el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function (selector) {
        if (isFunction(selector))
          return this.not(this.not(selector));
        return $(filter.call(this, function (element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function (selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function (selector) {
        return this.length > 0 && zepto.matches(this[0], selector);
      },
      not: function (selector) {
        var nodes = [];
        if (isFunction(selector) && selector.call !== undefined)
          this.each(function (idx) {
            if (!selector.call(this, idx))
              nodes.push(this);
          });
        else {
          var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector);
          this.forEach(function (el) {
            if (excludes.indexOf(el) < 0)
              nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function (selector) {
        return this.filter(function () {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function (idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function () {
        var el = this[0];
        return el && !isObject(el) ? el : $(el);
      },
      last: function () {
        var el = this[this.length - 1];
        return el && !isObject(el) ? el : $(el);
      },
      find: function (selector) {
        var result, $this = this;
        if (!selector)
          result = [];
        else if (typeof selector == 'object')
          result = $(selector).filter(function () {
            var node = this;
            return emptyArray.some.call($this, function (parent) {
              return $.contains(parent, node);
            });
          });
        else if (this.length == 1)
          result = $(zepto.qsa(this[0], selector));
        else
          result = this.map(function () {
            return zepto.qsa(this, selector);
          });
        return result;
      },
      closest: function (selector, context) {
        var node = this[0], collection = false;
        if (typeof selector == 'object')
          collection = $(selector);
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
          node = node !== context && !isDocument(node) && node.parentNode;
        return $(node);
      },
      parents: function (selector) {
        var ancestors = [], nodes = this;
        while (nodes.length > 0)
          nodes = $.map(nodes, function (node) {
            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
              ancestors.push(node);
              return node;
            }
          });
        return filtered(ancestors, selector);
      },
      parent: function (selector) {
        return filtered(uniq(this.pluck('parentNode')), selector);
      },
      children: function (selector) {
        return filtered(this.map(function () {
          return children(this);
        }), selector);
      },
      contents: function () {
        return this.map(function () {
          return slice.call(this.childNodes);
        });
      },
      siblings: function (selector) {
        return filtered(this.map(function (i, el) {
          return filter.call(children(el.parentNode), function (child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function () {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      pluck: function (property) {
        return $.map(this, function (el) {
          return el[property];
        });
      },
      show: function () {
        return this.each(function () {
          this.style.display == 'none' && (this.style.display = '');
          if (getComputedStyle(this, '').getPropertyValue('display') == 'none')
            this.style.display = defaultDisplay(this.nodeName);
        });
      },
      replaceWith: function (newContent) {
        return this.before(newContent).remove();
      },
      wrap: function (structure) {
        var func = isFunction(structure);
        if (this[0] && !func)
          var dom = $(structure).get(0), clone = dom.parentNode || this.length > 1;
        return this.each(function (index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function (structure) {
        if (this[0]) {
          $(this[0]).before(structure = $(structure));
          var children;
          // drill down to the inmost element
          while ((children = structure.children()).length)
            structure = children.first();
          $(structure).append(this);
        }
        return this;
      },
      wrapInner: function (structure) {
        var func = isFunction(structure);
        return this.each(function (index) {
          var self = $(this), contents = self.contents(), dom = func ? structure.call(this, index) : structure;
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function () {
        this.parent().each(function () {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function () {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },
      hide: function () {
        return this.css('display', 'none');
      },
      toggle: function (setting) {
        return this.each(function () {
          var el = $(this);
          ;
          (setting === undefined ? el.css('display') == 'none' : setting) ? el.show() : el.hide();
        });
      },
      prev: function (selector) {
        return $(this.pluck('previousElementSibling')).filter(selector || '*');
      },
      next: function (selector) {
        return $(this.pluck('nextElementSibling')).filter(selector || '*');
      },
      html: function (html) {
        return 0 in arguments ? this.each(function (idx) {
          var originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, html, idx, originHtml));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function (text) {
        return 0 in arguments ? this.each(function (idx) {
          var newText = funcArg(this, text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        }) : 0 in this ? this[0].textContent : null;
      },
      attr: function (name, value) {
        var result;
        return typeof name == 'string' && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? undefined : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function (idx) {
          if (this.nodeType !== 1)
            return;
          if (isObject(name))
            for (key in name)
              setAttribute(this, key, name[key]);
          else
            setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function (name) {
        return this.each(function () {
          this.nodeType === 1 && setAttribute(this, name);
        });
      },
      prop: function (name, value) {
        name = propMap[name] || name;
        return 1 in arguments ? this.each(function (idx) {
          this[name] = funcArg(this, value, idx, this[name]);
        }) : this[0] && this[0][name];
      },
      data: function (name, value) {
        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();
        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);
        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function (value) {
        return 0 in arguments ? this.each(function (idx) {
          this.value = funcArg(this, value, idx, this.value);
        }) : this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
          return this.selected;
        }).pluck('value') : this[0].value);
      },
      offset: function (coordinates) {
        if (coordinates)
          return this.each(function (index) {
            var $this = $(this), coords = funcArg(this, coordinates, index, $this.offset()), parentOffset = $this.offsetParent().offset(), props = {
                top: coords.top - parentOffset.top,
                left: coords.left - parentOffset.left
              };
            if ($this.css('position') == 'static')
              props['position'] = 'relative';
            $this.css(props);
          });
        if (!this.length)
          return null;
        var obj = this[0].getBoundingClientRect();
        return {
          left: obj.left + window.pageXOffset,
          top: obj.top + window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        };
      },
      css: function (property, value) {
        if (arguments.length < 2) {
          var element = this[0], computedStyle = getComputedStyle(element, '');
          if (!element)
            return;
          if (typeof property == 'string')
            return element.style[camelize(property)] || computedStyle.getPropertyValue(property);
          else if (isArray(property)) {
            var props = {};
            $.each(property, function (_, prop) {
              props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
            });
            return props;
          }
        }
        var css = '';
        if (type(property) == 'string') {
          if (!value && value !== 0)
            this.each(function () {
              this.style.removeProperty(dasherize(property));
            });
          else
            css = dasherize(property) + ':' + maybeAddPx(property, value);
        } else {
          for (key in property)
            if (!property[key] && property[key] !== 0)
              this.each(function () {
                this.style.removeProperty(dasherize(key));
              });
            else
              css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
        }
        return this.each(function () {
          this.style.cssText += ';' + css;
        });
      },
      index: function (element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function (name) {
        if (!name)
          return false;
        return emptyArray.some.call(this, function (el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function (name) {
        if (!name)
          return this;
        return this.each(function (idx) {
          if (!('className' in this))
            return;
          classList = [];
          var cls = className(this), newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function (klass) {
            if (!$(this).hasClass(klass))
              classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? ' ' : '') + classList.join(' '));
        });
      },
      removeClass: function (name) {
        return this.each(function (idx) {
          if (!('className' in this))
            return;
          if (name === undefined)
            return className(this, '');
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
            classList = classList.replace(classRE(klass), ' ');
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function (name, when) {
        if (!name)
          return this;
        return this.each(function (idx) {
          var $this = $(this), names = funcArg(this, name, idx, className(this));
          names.split(/\s+/g).forEach(function (klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function (value) {
        if (!this.length)
          return;
        var hasScrollTop = 'scrollTop' in this[0];
        if (value === undefined)
          return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function () {
          this.scrollTop = value;
        } : function () {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function (value) {
        if (!this.length)
          return;
        var hasScrollLeft = 'scrollLeft' in this[0];
        if (value === undefined)
          return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function () {
          this.scrollLeft = value;
        } : function () {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function () {
        if (!this.length)
          return;
        var elem = this[0],
          // Get *real* offsetParent
          offsetParent = this.offsetParent(),
          // Get correct offsets
          offset = this.offset(), parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
            top: 0,
            left: 0
          } : offsetParent.offset();
        // Subtract element margins
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // are the same in Safari causing offset.left to incorrectly be 0
        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
        offset.left -= parseFloat($(elem).css('margin-left')) || 0;
        // Add offsetParent borders
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;
        // Subtract the two offsets
        return {
          top: offset.top - parentOffset.top,
          left: offset.left - parentOffset.left
        };
      },
      offsetParent: function () {
        return this.map(function () {
          var parent = this.offsetParent || document.body;
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static')
            parent = parent.offsetParent;
          return parent;
        });
      }
    };
    // for now
    $.fn.detach = $.fn.remove;
    // Generate the `width` and `height` functions
    ;
    [
      'width',
      'height'
    ].forEach(function (dimension) {
      var dimensionProperty = dimension.replace(/./, function (m) {
          return m[0].toUpperCase();
        });
      $.fn[dimension] = function (value) {
        var offset, el = this[0];
        if (value === undefined)
          return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];
        else
          return this.each(function (idx) {
            el = $(this);
            el.css(dimension, funcArg(this, value, idx, el[dimension]()));
          });
      };
    });
    function traverseNode(node, fun) {
      fun(node);
      for (var i = 0, len = node.childNodes.length; i < len; i++)
        traverseNode(node.childNodes[i], fun);
    }
    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
      var inside = operatorIndex % 2;
      //=> prepend, append
      $.fn[operator] = function () {
        // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
        var argType, nodes = $.map(arguments, function (arg) {
            argType = type(arg);
            return argType == 'object' || argType == 'array' || arg == null ? arg : zepto.fragment(arg);
          }), parent, copyByClone = this.length > 1;
        if (nodes.length < 1)
          return this;
        return this.each(function (_, target) {
          parent = inside ? target : target.parentNode;
          // convert all methods to a "before" operation
          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
          var parentInDocument = $.contains(document.documentElement, parent);
          nodes.forEach(function (node) {
            if (copyByClone)
              node = node.cloneNode(true);
            else if (!parent)
              return $(node).remove();
            parent.insertBefore(node, target);
            if (parentInDocument)
              traverseNode(node, function (el) {
                if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src)
                  window['eval'].call(window, el.innerHTML);
              });
          });
        });
      };
      // after    => insertAfter
      // prepend  => prependTo
      // before   => insertBefore
      // append   => appendTo
      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
        $(html)[operator](this);
        return this;
      };
    });
    zepto.Z.prototype = $.fn;
    // Export internal API functions in the `$.zepto` namespace
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;
    return $;
  }();
// If `$` is not yet defined, point it to `Zepto`
window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($) {
  var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = 'application/json', htmlType = 'text/html', blankRE = /^\s*$/;
  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName);
    $(context).trigger(event, data);
    return !event.isDefaultPrevented();
  }
  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global)
      return triggerAndReturn(context || document, eventName, data);
  }
  // Number of active Ajax requests
  $.active = 0;
  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0)
      triggerGlobal(settings, null, 'ajaxStart');
  }
  function ajaxStop(settings) {
    if (settings.global && !--$.active)
      triggerGlobal(settings, null, 'ajaxStop');
  }
  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context;
    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [
        xhr,
        settings
      ]) === false)
      return false;
    triggerGlobal(settings, context, 'ajaxSend', [
      xhr,
      settings
    ]);
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success';
    settings.success.call(context, data, status, xhr);
    if (deferred)
      deferred.resolveWith(context, [
        data,
        status,
        xhr
      ]);
    triggerGlobal(settings, context, 'ajaxSuccess', [
      xhr,
      settings,
      data
    ]);
    ajaxComplete(status, xhr, settings);
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context;
    settings.error.call(context, xhr, type, error);
    if (deferred)
      deferred.rejectWith(context, [
        xhr,
        type,
        error
      ]);
    triggerGlobal(settings, context, 'ajaxError', [
      xhr,
      settings,
      error || type
    ]);
    ajaxComplete(type, xhr, settings);
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context;
    settings.complete.call(context, xhr, status);
    triggerGlobal(settings, context, 'ajaxComplete', [
      xhr,
      settings
    ]);
    ajaxStop(settings);
  }
  // Empty function, used as default callback
  function empty() {
  }
  $.ajaxJSONP = function (options, deferred) {
    if (!('type' in options))
      return $.ajax(options);
    var _callbackName = options.jsonpCallback, callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID, script = document.createElement('script'), originalCallback = window[callbackName], responseData, abort = function (errorType) {
        $(script).triggerHandler('error', errorType || 'abort');
      }, xhr = { abort: abort }, abortTimeout;
    if (deferred)
      deferred.promise(xhr);
    $(script).on('load error', function (e, errorType) {
      clearTimeout(abortTimeout);
      $(script).off().remove();
      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred);
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred);
      }
      window[callbackName] = originalCallback;
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0]);
      originalCallback = responseData = undefined;
    });
    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort');
      return xhr;
    }
    window[callbackName] = function () {
      responseData = arguments;
    };
    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
    document.head.appendChild(script);
    if (options.timeout > 0)
      abortTimeout = setTimeout(function () {
        abort('timeout');
      }, options.timeout);
    return xhr;
  };
  $.ajaxSettings = {
    type: 'GET',
    beforeSend: empty,
    success: empty,
    error: empty,
    complete: empty,
    context: null,
    global: true,
    xhr: function () {
      return new window.XMLHttpRequest();
    },
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json: jsonType,
      xml: 'application/xml, text/xml',
      html: htmlType,
      text: 'text/plain'
    },
    crossDomain: false,
    timeout: 0,
    processData: true,
    cache: true
  };
  function mimeToDataType(mime) {
    if (mime)
      mime = mime.split(';', 2)[0];
    return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
  }
  function appendQuery(url, query) {
    if (query == '')
      return url;
    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
  }
  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != 'string')
      options.data = $.param(options.data, options.traditional);
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined;
  }
  $.ajax = function (options) {
    var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred();
    for (key in $.ajaxSettings)
      if (settings[key] === undefined)
        settings[key] = $.ajaxSettings[key];
    ajaxStart(settings);
    if (!settings.crossDomain)
      settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;
    if (!settings.url)
      settings.url = window.location.toString();
    serializeData(settings);
    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url);
    if (hasPlaceholder)
      dataType = 'jsonp';
    if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType))
      settings.url = appendQuery(settings.url, '_=' + Date.now());
    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
      return $.ajaxJSONP(settings, deferred);
    }
    var mime = settings.accepts[dataType], headers = {}, setHeader = function (name, value) {
        headers[name.toLowerCase()] = [
          name,
          value
        ];
      }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader, abortTimeout;
    if (deferred)
      deferred.promise(xhr);
    if (!settings.crossDomain)
      setHeader('X-Requested-With', 'XMLHttpRequest');
    setHeader('Accept', mime || '*/*');
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1)
        mime = mime.split(',', 2)[0];
      xhr.overrideMimeType && xhr.overrideMimeType(mime);
    }
    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET')
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
    if (settings.headers)
      for (name in settings.headers)
        setHeader(name, settings.headers[name]);
    xhr.setRequestHeader = setHeader;
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout);
        var result, error = false;
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
          result = xhr.responseText;
          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')
              (1, eval)(result);
            else if (dataType == 'xml')
              result = xhr.responseXML;
            else if (dataType == 'json')
              result = blankRE.test(result) ? null : $.parseJSON(result);
          } catch (e) {
            error = e;
          }
          if (error)
            ajaxError(error, 'parsererror', xhr, settings, deferred);
          else
            ajaxSuccess(result, xhr, settings, deferred);
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
        }
      }
    };
    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort();
      ajaxError(null, 'abort', xhr, settings, deferred);
      return xhr;
    }
    // this is a bug!  
    // if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]
    var async = 'async' in settings ? settings.async : true;
    xhr.open(settings.type, settings.url, async, settings.username, settings.password);
    for (name in headers)
      nativeSetHeader.apply(xhr, headers[name]);
    if (settings.timeout > 0)
      abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = empty;
        xhr.abort();
        ajaxError(null, 'timeout', xhr, settings, deferred);
      }, settings.timeout);
    // fixed by zhaozhixin at 2015-09-10
    if (settings.xhrFields)
      for (name in settings.xhrFields)
        xhr[name] = settings.xhrFields[name];
    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null);
    return xhr;
  };
  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data))
      dataType = success, success = data, data = undefined;
    if (!$.isFunction(success))
      dataType = success, success = undefined;
    return {
      url: url,
      data: data,
      success: success,
      dataType: dataType
    };
  }
  $.get = function () {
    return $.ajax(parseArguments.apply(null, arguments));
  };
  $.post = function () {
    var options = parseArguments.apply(null, arguments);
    options.type = 'POST';
    return $.ajax(options);
  };
  $.getJSON = function () {
    var options = parseArguments.apply(null, arguments);
    options.dataType = 'json';
    return $.ajax(options);
  };
  $.fn.load = function (url, data, success) {
    if (!this.length)
      return this;
    var self = this, parts = url.split(/\s/), selector, options = parseArguments(url, data, success), callback = options.success;
    if (parts.length > 1)
      options.url = parts[0], selector = parts[1];
    options.success = function (response) {
      self.html(selector ? $('<div>').html(response.replace(rscript, '')).find(selector) : response);
      callback && callback.apply(self, arguments);
    };
    $.ajax(options);
    return this;
  };
  var escape = encodeURIComponent;
  function serialize(params, obj, traditional, scope) {
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj);
    $.each(obj, function (key, value) {
      type = $.type(value);
      if (scope)
        key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
      // handle data in serializeArray() format
      if (!scope && array)
        params.add(value.name, value.value);
      else if (type == 'array' || !traditional && type == 'object')
        serialize(params, value, traditional, key);
      else
        params.add(key, value);
    });
  }
  $.param = function (obj, traditional) {
    var params = [];
    params.add = function (k, v) {
      this.push(escape(k) + '=' + escape(v));
    };
    serialize(params, obj, traditional);
    return params.join('&').replace(/%20/g, '+');
  };
}(Zepto));
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($) {
  function detect(ua) {
    var os = this.os = {}, browser = this.browser = {}, webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/), android = ua.match(/(Android);?[\s\/]+([\d.]+)?/), osx = !!ua.match(/\(Macintosh\; Intel /), ipad = ua.match(/(iPad).*OS\s([\d_]+)/), ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/), iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/), webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), wp = ua.match(/Windows Phone ([\d.]+)/), touchpad = webos && ua.match(/TouchPad/), kindle = ua.match(/Kindle\/([\d.]+)/), silk = ua.match(/Silk\/([\d._]+)/), blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/), bb10 = ua.match(/(BB10).*Version\/([\d.]+)/), rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/), playbook = ua.match(/PlayBook/), chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/), firefox = ua.match(/Firefox\/([\d.]+)/), ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes
    if (browser.webkit = !!webkit)
      browser.version = webkit[1];
    if (android)
      os.android = true, os.version = android[2];
    if (iphone && !ipod)
      os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
    if (ipad)
      os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
    if (ipod)
      os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    if (wp)
      os.wp = true, os.version = wp[1];
    if (webos)
      os.webos = true, os.version = webos[2];
    if (touchpad)
      os.touchpad = true;
    if (blackberry)
      os.blackberry = true, os.version = blackberry[2];
    if (bb10)
      os.bb10 = true, os.version = bb10[2];
    if (rimtabletos)
      os.rimtabletos = true, os.version = rimtabletos[2];
    if (playbook)
      browser.playbook = true;
    if (kindle)
      os.kindle = true, os.version = kindle[1];
    if (silk)
      browser.silk = true, browser.version = silk[1];
    if (!silk && os.android && ua.match(/Kindle Fire/))
      browser.silk = true;
    if (chrome)
      browser.chrome = true, browser.version = chrome[1];
    if (firefox)
      browser.firefox = true, browser.version = firefox[1];
    if (ie)
      browser.ie = true, browser.version = ie[1];
    if (safari && (osx || os.ios)) {
      browser.safari = true;
      if (osx)
        browser.version = safari[1];
    }
    if (webview)
      browser.webview = true;
    os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));
    os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));
  }
  detect.call($, navigator.userAgent);
  // make available to unit tests
  $.__detect = detect;
}(Zepto));
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($) {
  var _zid = 1, undefined, slice = Array.prototype.slice, isFunction = $.isFunction, isString = function (obj) {
      return typeof obj == 'string';
    }, handlers = {}, specialEvents = {}, focusinSupported = 'onfocusin' in window, focus = {
      focus: 'focusin',
      blur: 'focusout'
    }, hover = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout'
    };
  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';
  function zid(element) {
    return element._zid || (element._zid = _zid++);
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event);
    if (event.ns)
      var matcher = matcherFor(event.ns);
    return (handlers[zid(element)] || []).filter(function (handler) {
      return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
    });
  }
  function parse(event) {
    var parts = ('' + event).split('.');
    return {
      e: parts[0],
      ns: parts.slice(1).sort().join(' ')
    };
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
  }
  function eventCapture(handler, captureSetting) {
    return handler.del && (!focusinSupported && handler.e in focus) || !!captureSetting;
  }
  function realEvent(type) {
    return hover[type] || focusinSupported && focus[type] || type;
  }
  function add(element, events, fn, data, selector, delegator, capture) {
    var id = zid(element), set = handlers[id] || (handlers[id] = []);
    events.split(/\s/).forEach(function (event) {
      if (event == 'ready')
        return $(document).ready(fn);
      var handler = parse(event);
      handler.fn = fn;
      handler.sel = selector;
      // emulate mouseenter, mouseleave
      if (handler.e in hover)
        fn = function (e) {
          var related = e.relatedTarget;
          if (!related || related !== this && !$.contains(this, related))
            return handler.fn.apply(this, arguments);
        };
      handler.del = delegator;
      var callback = delegator || fn;
      handler.proxy = function (e) {
        e = compatible(e);
        if (e.isImmediatePropagationStopped())
          return;
        e.data = data;
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
        if (result === false)
          e.preventDefault(), e.stopPropagation();
        return result;
      };
      handler.i = set.length;
      set.push(handler);
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
    });
  }
  function remove(element, events, fn, selector, capture) {
    var id = zid(element);
    ;
    (events || '').split(/\s/).forEach(function (event) {
      findHandlers(element, event, fn, selector).forEach(function (handler) {
        delete handlers[id][handler.i];
        if ('removeEventListener' in element)
          element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    });
  }
  $.event = {
    add: add,
    remove: remove
  };
  $.proxy = function (fn, context) {
    var args = 2 in arguments && slice.call(arguments, 2);
    if (isFunction(fn)) {
      var proxyFn = function () {
        return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
      };
      proxyFn._zid = zid(fn);
      return proxyFn;
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn);
        return $.proxy.apply(null, args);
      } else {
        return $.proxy(fn[context], fn);
      }
    } else {
      throw new TypeError('expected function');
    }
  };
  $.fn.bind = function (event, data, callback) {
    return this.on(event, data, callback);
  };
  $.fn.unbind = function (event, callback) {
    return this.off(event, callback);
  };
  $.fn.one = function (event, selector, data, callback) {
    return this.on(event, selector, data, callback, 1);
  };
  var returnTrue = function () {
      return true;
    }, returnFalse = function () {
      return false;
    }, ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/, eventMethods = {
      preventDefault: 'isDefaultPrevented',
      stopImmediatePropagation: 'isImmediatePropagationStopped',
      stopPropagation: 'isPropagationStopped'
    };
  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event);
      $.each(eventMethods, function (name, predicate) {
        var sourceMethod = source[name];
        event[name] = function () {
          this[predicate] = returnTrue;
          return sourceMethod && sourceMethod.apply(source, arguments);
        };
        event[predicate] = returnFalse;
      });
      if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue;
    }
    return event;
  }
  function createProxy(event) {
    var key, proxy = { originalEvent: event };
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined)
        proxy[key] = event[key];
    return compatible(proxy, event);
  }
  $.fn.delegate = function (selector, event, callback) {
    return this.on(event, selector, callback);
  };
  $.fn.undelegate = function (selector, event, callback) {
    return this.off(event, selector, callback);
  };
  $.fn.live = function (event, callback) {
    $(document.body).delegate(this.selector, event, callback);
    return this;
  };
  $.fn.die = function (event, callback) {
    $(document.body).undelegate(this.selector, event, callback);
    return this;
  };
  $.fn.on = function (event, selector, data, callback, one) {
    var autoRemove, delegator, $this = this;
    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.on(type, selector, data, fn, one);
      });
      return $this;
    }
    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined;
    if (isFunction(data) || data === false)
      callback = data, data = undefined;
    if (callback === false)
      callback = returnFalse;
    return $this.each(function (_, element) {
      if (one)
        autoRemove = function (e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments);
        };
      if (selector)
        delegator = function (e) {
          var evt, match = $(e.target).closest(selector, element).get(0);
          if (match && match !== element) {
            evt = $.extend(createProxy(e), {
              currentTarget: match,
              liveFired: element
            });
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
          }
        };
      add(element, event, callback, data, selector, delegator || autoRemove);
    });
  };
  $.fn.off = function (event, selector, callback) {
    var $this = this;
    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.off(type, selector, fn);
      });
      return $this;
    }
    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined;
    if (callback === false)
      callback = returnFalse;
    return $this.each(function () {
      remove(this, event, callback, selector);
    });
  };
  $.fn.trigger = function (event, args) {
    event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
    event._args = args;
    return this.each(function () {
      // items in the collection might not be DOM elements
      if ('dispatchEvent' in this)
        this.dispatchEvent(event);
      else
        $(this).triggerHandler(event, args);
    });
  };
  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function (event, args) {
    var e, result;
    this.each(function (i, element) {
      e = createProxy(isString(event) ? $.Event(event) : event);
      e._args = args;
      e.target = element;
      $.each(findHandlers(element, event.type || event), function (i, handler) {
        result = handler.proxy(e);
        if (e.isImmediatePropagationStopped())
          return false;
      });
    });
    return result;
  };
  // shortcut methods for `.bind(event, fn)` for each event type
  ;
  ('focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
    $.fn[event] = function (callback) {
      return callback ? this.bind(event, callback) : this.trigger(event);
    };
  });
  ;
  [
    'focus',
    'blur'
  ].forEach(function (name) {
    $.fn[name] = function (callback) {
      if (callback)
        this.bind(name, callback);
      else
        this.each(function () {
          try {
            this[name]();
          } catch (e) {
          }
        });
      return this;
    };
  });
  $.Event = function (type, props) {
    if (!isString(type))
      props = type, type = props.type;
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true;
    if (props)
      for (var name in props)
        name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
    event.initEvent(type, bubbles, true);
    return compatible(event);
  };
}(Zepto));
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($) {
  $.fn.serializeArray = function () {
    var el, type, result = [];
    $([].slice.call(this.get(0).elements)).each(function () {
      el = $(this);
      type = el.attr('type');
      if (this.nodeName.toLowerCase() != 'fieldset' && !this.disabled && type != 'submit' && type != 'reset' && type != 'button' && (type != 'radio' && type != 'checkbox' || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        });
    });
    return result;
  };
  $.fn.serialize = function () {
    var result = [];
    this.serializeArray().forEach(function (elm) {
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
    });
    return result.join('&');
  };
  $.fn.submit = function (callback) {
    if (callback)
      this.bind('submit', callback);
    else if (this.length) {
      var event = $.Event('submit');
      this.eq(0).trigger(event);
      if (!event.isDefaultPrevented())
        this.get(0).submit();
    }
    return this;
  };
}(Zepto));
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($, undefined) {
  var prefix = '', eventPrefix, endEventName, endAnimationName, vendors = {
      Webkit: 'webkit',
      Moz: '',
      O: 'o'
    }, document = window.document, testEl = document.createElement('div'), supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, transform, transitionProperty, transitionDuration, transitionTiming, transitionDelay, animationName, animationDuration, animationTiming, animationDelay, cssReset = {};
  function dasherize(str) {
    return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
  }
  function normalizeEvent(name) {
    return eventPrefix ? eventPrefix + name : name.toLowerCase();
  }
  $.each(vendors, function (vendor, event) {
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      eventPrefix = event;
      return false;
    }
  });
  transform = prefix + 'transform';
  cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';
  $.fx = {
    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
    speeds: {
      _default: 400,
      fast: 200,
      slow: 600
    },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  };
  $.fn.animate = function (properties, duration, ease, callback, delay) {
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined;
    if ($.isFunction(ease))
      callback = ease, ease = undefined;
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
    if (duration)
      duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
    if (delay)
      delay = parseFloat(delay) / 1000;
    return this.anim(properties, duration, ease, callback, delay);
  };
  $.fn.anim = function (properties, duration, ease, callback, delay) {
    var key, cssValues = {}, cssProperties, transforms = '', that = this, wrappedCallback, endEvent = $.fx.transitionEnd, fired = false;
    if (duration === undefined)
      duration = $.fx.speeds._default / 1000;
    if (delay === undefined)
      delay = 0;
    if ($.fx.off)
      duration = 0;
    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties;
      cssValues[animationDuration] = duration + 's';
      cssValues[animationDelay] = delay + 's';
      cssValues[animationTiming] = ease || 'linear';
      endEvent = $.fx.animationEnd;
    } else {
      cssProperties = [];
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key))
          transforms += key + '(' + properties[key] + ') ';
        else
          cssValues[key] = properties[key], cssProperties.push(dasherize(key));
      if (transforms)
        cssValues[transform] = transforms, cssProperties.push(transform);
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ');
        cssValues[transitionDuration] = duration + 's';
        cssValues[transitionDelay] = delay + 's';
        cssValues[transitionTiming] = ease || 'linear';
      }
    }
    wrappedCallback = function (event) {
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget)
          return;
        // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback);
      } else
        $(this).unbind(endEvent, wrappedCallback);
      // triggered by setTimeout
      fired = true;
      $(this).css(cssReset);
      callback && callback.call(this);
    };
    if (duration > 0) {
      this.bind(endEvent, wrappedCallback);
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function () {
        if (fired)
          return;
        wrappedCallback.call(that);
      }, duration * 1000 + 25);
    }
    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft;
    this.css(cssValues);
    if (duration <= 0)
      setTimeout(function () {
        that.each(function () {
          wrappedCallback.call(this);
        });
      }, 0);
    return this;
  };
  testEl = null;
}(Zepto));
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;
(function ($) {
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.zepto, {
      Z: function (dom, selector) {
        dom = dom || [];
        $.extend(dom, $.fn);
        dom.selector = selector || '';
        dom.__Z = true;
        return dom;
      },
      isZ: function (object) {
        return $.type(object) === 'array' && '__Z' in object;
      }
    });
  }
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined);
  } catch (e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function (element) {
      try {
        return nativeGetComputedStyle(element);
      } catch (e) {
        return null;
      }
    };
  }
}(Zepto));
// Underscore.js 1.4.4
// ===================
// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.
// Baseline setup
// --------------
;
(function () {
  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;
  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;
  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};
  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
  // Create a safe reference to the Underscore object for use below.
  var _ = function (obj) {
    if (obj instanceof _)
      return obj;
    if (!(this instanceof _))
      return new _(obj);
    this._wrapped = obj;
  };
  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  // Current version.
  _.VERSION = '1.4.4';
  // Collection Functions
  // --------------------
  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function (obj, iterator, context) {
      if (obj == null)
        return;
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === breaker)
            return;
        }
      } else {
        for (var key in obj) {
          if (_.has(obj, key)) {
            if (iterator.call(context, obj[key], key, obj) === breaker)
              return;
          }
        }
      }
    };
  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function (obj, iterator, context) {
    var results = [];
    if (obj == null)
      return results;
    if (nativeMap && obj.map === nativeMap)
      return obj.map(iterator, context);
    each(obj, function (value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };
  var reduceError = 'Reduce of empty array with no initial value';
  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function (obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null)
      obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context)
        iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function (value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial)
      throw new TypeError(reduceError);
    return memo;
  };
  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function (obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null)
      obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context)
        iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function (value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial)
      throw new TypeError(reduceError);
    return memo;
  };
  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function (obj, iterator, context) {
    var result;
    any(obj, function (value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };
  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function (obj, iterator, context) {
    var results = [];
    if (obj == null)
      return results;
    if (nativeFilter && obj.filter === nativeFilter)
      return obj.filter(iterator, context);
    each(obj, function (value, index, list) {
      if (iterator.call(context, value, index, list))
        results[results.length] = value;
    });
    return results;
  };
  // Return all the elements for which a truth test fails.
  _.reject = function (obj, iterator, context) {
    return _.filter(obj, function (value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };
  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function (obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null)
      return result;
    if (nativeEvery && obj.every === nativeEvery)
      return obj.every(iterator, context);
    each(obj, function (value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list)))
        return breaker;
    });
    return !!result;
  };
  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function (obj, iterator, context) {
      iterator || (iterator = _.identity);
      var result = false;
      if (obj == null)
        return result;
      if (nativeSome && obj.some === nativeSome)
        return obj.some(iterator, context);
      each(obj, function (value, index, list) {
        if (result || (result = iterator.call(context, value, index, list)))
          return breaker;
      });
      return !!result;
    };
  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function (obj, target) {
    if (obj == null)
      return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf)
      return obj.indexOf(target) != -1;
    return any(obj, function (value) {
      return value === target;
    });
  };
  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function (obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function (value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };
  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function (obj, key) {
    return _.map(obj, function (value) {
      return value[key];
    });
  };
  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function (obj, attrs, first) {
    if (_.isEmpty(attrs))
      return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function (value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key])
          return false;
      }
      return true;
    });
  };
  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function (obj, attrs) {
    return _.where(obj, attrs, true);
  };
  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function (obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj))
      return -Infinity;
    var result = {
        computed: -Infinity,
        value: -Infinity
      };
    each(obj, function (value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {
        value: value,
        computed: computed
      });
    });
    return result.value;
  };
  // Return the minimum element (or element-based computation).
  _.min = function (obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj))
      return Infinity;
    var result = {
        computed: Infinity,
        value: Infinity
      };
    each(obj, function (value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {
        value: value,
        computed: computed
      });
    });
    return result.value;
  };
  // Shuffle an array.
  _.shuffle = function (obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function (value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };
  // An internal function to generate lookup iterators.
  var lookupIterator = function (value) {
    return _.isFunction(value) ? value : function (obj) {
      return obj[value];
    };
  };
  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function (obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function (value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function (left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0)
          return 1;
        if (a < b || b === void 0)
          return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };
  // An internal function used for aggregate "group by" operations.
  var group = function (obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function (value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };
  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function (obj, value, context) {
    return group(obj, value, context, function (result, key, value) {
      (_.has(result, key) ? result[key] : result[key] = []).push(value);
    });
  };
  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function (obj, value, context) {
    return group(obj, value, context, function (result, key) {
      if (!_.has(result, key))
        result[key] = 0;
      result[key]++;
    });
  };
  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function (array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };
  // Safely convert anything iterable into a real, live array.
  _.toArray = function (obj) {
    if (!obj)
      return [];
    if (_.isArray(obj))
      return slice.call(obj);
    if (obj.length === +obj.length)
      return _.map(obj, _.identity);
    return _.values(obj);
  };
  // Return the number of elements in an object.
  _.size = function (obj) {
    if (obj == null)
      return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };
  // Array Functions
  // ---------------
  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function (array, n, guard) {
    if (array == null)
      return void 0;
    return n != null && !guard ? slice.call(array, 0, n) : array[0];
  };
  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function (array, n, guard) {
    return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
  };
  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function (array, n, guard) {
    if (array == null)
      return void 0;
    if (n != null && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };
  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };
  // Trim out all falsy values from an array.
  _.compact = function (array) {
    return _.filter(array, _.identity);
  };
  // Internal implementation of a recursive `flatten` function.
  var flatten = function (input, shallow, output) {
    each(input, function (value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };
  // Return a completely flattened version of an array.
  _.flatten = function (array, shallow) {
    return flatten(array, shallow, []);
  };
  // Return a version of the array that does not contain the specified value(s).
  _.without = function (array) {
    return _.difference(array, slice.call(arguments, 1));
  };
  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function (array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function (value, index) {
      if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };
  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function () {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };
  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function (array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function (item) {
      return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };
  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function (array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function (value) {
      return !_.contains(rest, value);
    });
  };
  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function () {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, '' + i);
    }
    return results;
  };
  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function (list, values) {
    if (list == null)
      return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };
  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function (array, item, isSorted) {
    if (array == null)
      return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, l + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf)
      return array.indexOf(item, isSorted);
    for (; i < l; i++)
      if (array[i] === item)
        return i;
    return -1;
  };
  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function (array, item, from) {
    if (array == null)
      return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = hasIndex ? from : array.length;
    while (i--)
      if (array[i] === item)
        return i;
    return -1;
  };
  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function (start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;
    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);
    while (idx < len) {
      range[idx++] = start;
      start += step;
    }
    return range;
  };
  // Function (ahem) Functions
  // ------------------
  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function (func, context) {
    if (func.bind === nativeBind && nativeBind)
      return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function () {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };
  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function (func) {
    var args = slice.call(arguments, 1);
    return function () {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };
  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function (obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0)
      funcs = _.functions(obj);
    each(funcs, function (f) {
      obj[f] = _.bind(obj[f], obj);
    });
    return obj;
  };
  // Memoize an expensive function by storing its results.
  _.memoize = function (func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function () {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
    };
  };
  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  };
  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function (func) {
    return _.delay.apply(_, [
      func,
      1
    ].concat(slice.call(arguments, 1)));
  };
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function (func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function () {
      previous = new Date();
      timeout = null;
      result = func.apply(context, args);
    };
    return function () {
      var now = new Date();
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function (func, wait, immediate) {
    var timeout, result;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate)
          result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow)
        result = func.apply(context, args);
      return result;
    };
  };
  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function (func) {
    var ran = false, memo;
    return function () {
      if (ran)
        return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };
  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function (func, wrapper) {
    return function () {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };
  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function () {
    var funcs = arguments;
    return function () {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };
  // Returns a function that will only be executed after being called N times.
  _.after = function (times, func) {
    if (times <= 0)
      return func();
    return function () {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };
  // Object Functions
  // ----------------
  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function (obj) {
    if (obj !== Object(obj))
      throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj)
      if (_.has(obj, key))
        keys[keys.length] = key;
    return keys;
  };
  // Retrieve the values of an object's properties.
  _.values = function (obj) {
    var values = [];
    for (var key in obj)
      if (_.has(obj, key))
        values.push(obj[key]);
    return values;
  };
  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function (obj) {
    var pairs = [];
    for (var key in obj)
      if (_.has(obj, key))
        pairs.push([
          key,
          obj[key]
        ]);
    return pairs;
  };
  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function (obj) {
    var result = {};
    for (var key in obj)
      if (_.has(obj, key))
        result[obj[key]] = key;
    return result;
  };
  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key]))
        names.push(key);
    }
    return names.sort();
  };
  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function (obj) {
    each(slice.call(arguments, 1), function (source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };
  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function (obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function (key) {
      if (key in obj)
        copy[key] = obj[key];
    });
    return copy;
  };
  // Return a copy of the object without the blacklisted properties.
  _.omit = function (obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key))
        copy[key] = obj[key];
    }
    return copy;
  };
  // Fill in a given object with default properties.
  _.defaults = function (obj) {
    each(slice.call(arguments, 1), function (source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null)
            obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };
  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function (obj) {
    if (!_.isObject(obj))
      return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };
  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function (obj, interceptor) {
    interceptor(obj);
    return obj;
  };
  // Internal recursive comparison function for `isEqual`.
  var eq = function (a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b)
      return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null)
      return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _)
      a = a._wrapped;
    if (b instanceof _)
      b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b))
      return false;
    switch (className) {
    // Strings, numbers, dates, and booleans are compared by value. 
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return a == String(b);
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
      // other numeric values.
      return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a == +b;
    // RegExps are compared by their source patterns and flags.
    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object')
      return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a)
        return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack)))
            break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack)))
            break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !size--)
            break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };
  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function (a, b) {
    return eq(a, b, [], []);
  };
  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function (obj) {
    if (obj == null)
      return true;
    if (_.isArray(obj) || _.isString(obj))
      return obj.length === 0;
    for (var key in obj)
      if (_.has(obj, key))
        return false;
    return true;
  };
  // Is a given value a DOM element?
  _.isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
  };
  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) == '[object Array]';
  };
  // Is a given variable an object?
  _.isObject = function (obj) {
    return obj === Object(obj);
  };
  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each([
    'Arguments',
    'Function',
    'String',
    'Number',
    'Date',
    'RegExp'
  ], function (name) {
    _['is' + name] = function (obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });
  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function (obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }
  // Optimize `isFunction` if appropriate.
  if (typeof /./ !== 'function') {
    _.isFunction = function (obj) {
      return typeof obj === 'function';
    };
  }
  // Is a given object a finite number?
  _.isFinite = function (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };
  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function (obj) {
    return _.isNumber(obj) && obj != +obj;
  };
  // Is a given value a boolean?
  _.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };
  // Is a given value equal to null?
  _.isNull = function (obj) {
    return obj === null;
  };
  // Is a given variable undefined?
  _.isUndefined = function (obj) {
    return obj === void 0;
  };
  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
  };
  // Utility Functions
  // -----------------
  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function () {
    root._ = previousUnderscore;
    return this;
  };
  // Keep the identity function around for default iterators.
  _.identity = function (value) {
    return value;
  };
  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++)
      accum[i] = iterator.call(context, i);
    return accum;
  };
  // Return a random integer between min and max (inclusive).
  _.random = function (min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  // List of HTML entities for escaping.
  var entityMap = {
      escape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '/': '&#x2F;'
      }
    };
  entityMap.unescape = _.invert(entityMap.escape);
  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
      escape: new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
      unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
    };
  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each([
    'escape',
    'unescape'
  ], function (method) {
    _[method] = function (string) {
      if (string == null)
        return '';
      return ('' + string).replace(entityRegexes[method], function (match) {
        return entityMap[method][match];
      });
    };
  });
  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function (object, property) {
    if (object == null)
      return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };
  // Add your own custom functions to the Underscore object.
  _.mixin = function (obj) {
    each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };
  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function (prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };
  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;
  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
      '\'': '\'',
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function (text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);
    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
        (settings.escape || noMatch).source,
        (settings.interpolate || noMatch).source,
        (settings.evaluate || noMatch).source
      ].join('|') + '|$', 'g');
    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = '__p+=\'';
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, function (match) {
        return '\\' + escapes[match];
      });
      if (escape) {
        source += '\'+\n((__t=(' + escape + '))==null?\'\':_.escape(__t))+\n\'';
      }
      if (interpolate) {
        source += '\'+\n((__t=(' + interpolate + '))==null?\'\':__t)+\n\'';
      }
      if (evaluate) {
        source += '\';\n' + evaluate + '\n__p+=\'';
      }
      index = offset + match.length;
      return match;
    });
    source += '\';\n';
    // If a variable is not specified, place data values in local scope.
    if (!settings.variable)
      source = 'with(obj||{}){\n' + source + '}\n';
    source = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + source + 'return __p;\n';
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }
    if (data)
      return render(data, _);
    var template = function (data) {
      return render.call(this, data, _);
    };
    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';
    return template;
  };
  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function (obj) {
    return _(obj).chain();
  };
  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  // Helper function to continue chaining intermediate results.
  var result = function (obj) {
    return this._chain ? _(obj).chain() : obj;
  };
  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);
  // Add all mutator Array functions to the wrapper.
  each([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0)
        delete obj[0];
      return result.call(this, obj);
    };
  });
  // Add all accessor Array functions to the wrapper.
  each([
    'concat',
    'join',
    'slice'
  ], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });
  _.extend(_.prototype, {
    chain: function () {
      this._chain = true;
      return this;
    },
    value: function () {
      return this._wrapped;
    }
  });
}.call(this));
//继承相关逻辑
;
(function () {
  // 全局可能用到的变量
  var arr = [];
  var slice = arr.slice;
  /**
   * inherit方法，js的继承，默认为两个参数
   *
   * @param  {function} origin  可选，要继承的类
   * @param  {object}   methods 被创建类的成员，扩展的方法和属性
   * @return {function}         继承之后的子类
   */
  var _ = {};
  _.inherit = function (origin, methods) {
    // 参数检测，该继承方法，只支持一个参数创建类，或者两个参数继承类
    if (arguments.length === 0 || arguments.length > 2)
      throw '\u53c2\u6570\u9519\u8bef';
    var parent = null;
    // 将参数转换为数组
    var properties = slice.call(arguments);
    // 如果第一个参数为类（function），那么就将之取出
    if (typeof properties[0] === 'function')
      parent = properties.shift();
    properties = properties[0];
    // 创建新类用于返回
    function klass() {
      if (_.isFunction(this.initialize))
        this.initialize.apply(this, arguments);
    }
    klass.superclass = parent;
    // 父类的方法不做保留，直接赋给子类
    // parent.subclasses = [];
    if (parent) {
      // 中间过渡类，防止parent的构造函数被执行
      var subclass = function () {
      };
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass();  // 父类的方法不做保留，直接赋给子类
                                         // parent.subclasses.push(klass);
    }
    var ancestor = klass.superclass && klass.superclass.prototype;
    for (var k in properties) {
      var value = properties[k];
      //满足条件就重写
      if (ancestor && typeof value == 'function') {
        var argslist = /^\s*function\s*\(([^\(\)]*?)\)\s*?\{/i.exec(value.toString())[1].replace(/\s/g, '').split(',');
        //只有在第一个参数为$super情况下才需要处理（是否具有重复方法需要用户自己决定）
        if (argslist[0] === '$super' && ancestor[k]) {
          value = function (methodName, fn) {
            return function () {
              var scope = this;
              var args = [function () {
                    return ancestor[methodName].apply(scope, arguments);
                  }];
              return fn.apply(this, args.concat(slice.call(arguments)));
            };
          }(k, value);
        }
      }
      //此处对对象进行扩展，当前原型链已经存在该对象，便进行扩展
      if (_.isObject(klass.prototype[k]) && _.isObject(value) && (typeof klass.prototype[k] != 'function' && typeof value != 'fuction')) {
        //原型链是共享的，这里处理逻辑要改
        var temp = {};
        _.extend(temp, klass.prototype[k]);
        _.extend(temp, value);
        klass.prototype[k] = temp;
      } else {
        klass.prototype[k] = value;
      }
    }
    //静态属性继承
    //兼容代码，非原型属性也需要进行继承
    for (key in parent) {
      if (parent.hasOwnProperty(key) && key !== 'prototype' && key !== 'superclass')
        klass[key] = parent[key];
    }
    if (!klass.prototype.initialize)
      klass.prototype.initialize = function () {
      };
    klass.prototype.constructor = klass;
    return klass;
  };
}());
//时间间距类
(function () {
  var Unit = {
      year: 1000 * 60 * 60 * 24 * 365,
      day: 1000 * 60 * 60 * 24,
      hour: 1000 * 60 * 60,
      minute: 1000 * 60
    };
  /*
   规则：
   (1)1小时以内：刚刚
   (2)24小时以内：n小时
   (3)超过24小时：天
   (4)超过3天： 显示日期 6月15日
   产品说暂时不考虑超过年，
   目前还是设置好，
   (5)超过年用2014年6月15日，显示全

   依赖dateUtil
   */
  _.beforeIntervalTime = function (before, current) {
    //传入的值全部是毫秒
    current = current || new Date().getTime();
    var interval = current - before;
    if (interval < 0)
      return '\u53c2\u6570\u9519\u8bef';
    //规则(5)
    if (interval >= Unit.year)
      return _.dateUtil.format(before, 'Y\u5e74M\u6708D\u65e5');
    //规则(4)
    if (interval >= Unit.day * 3)
      return _.dateUtil.format(before, 'M\u6708D\u65e5');
    //规则(3)
    if (interval >= Unit.day)
      return Math.floor(interval / Unit.day) + '\u5929\u524d';
    //规则(2)
    if (interval >= Unit.hour)
      return Math.floor(interval / Unit.hour) + '\u5c0f\u65f6\u524d';
    //规则(1)
    if (interval >= 0)
      return '\u521a\u521a';
  };
  /*
   规则：
   (1)24小时以内：n小时n秒
   (2)超过24小时：天

   依赖dateUtil
   */
  _.afterIntervalTime = function (after, current) {
    current = current || new Date().getTime();
    var interval = after - current;
    if (interval < 0)
      return '00:00';
    //规则(2)
    if (interval >= Unit.day)
      return Math.floor(interval / Unit.day) + '\u5929';
    //规则(1)
    if (interval >= 0)
      return Math.floor(interval / Unit.hour) + '\u5c0f\u65f6' + Math.floor(interval % Unit.hour / Unit.minute) + '\u5206';
  };
}());
//倒计时工具类
(function () {
  var timerKeys = {};
  _.countdownTimer = function (second, changeCallback, endCallback) {
    //首次得形成一个唯一的key
    var key = _.uniqueId('timer_');
    timerKeys[key] = 1;
    _.countdownRepeat(key, second, changeCallback, endCallback);
    return key;
  };
  _.clearCountdownTimer = function (key) {
    if (timerKeys[key]) {
      delete timerKeys[key];
      return;
    }
    for (var k in timerKeys) {
      delete timerKeys[k];
    }
  };
  _.countdownRepeat = function (key, second, changeCallback, endCallback) {
    if (!timerKeys[key])
      return;
    if (second > 0) {
      changeCallback(second, key);
    } else {
      endCallback(second, key);
      return;
    }
    second--;
    setTimeout(function () {
      _.countdownRepeat(key, second, changeCallback, endCallback);
    }, 1000);
  };
}());
//基础方法
(function () {
  _.mySubstr = function (str, len, appendStr) {
    if (!str || !len)
      return;
    return str.length > len ? str.substr(0, len) + (appendStr || '...') : str;
  };
  _.getByteLen = function (val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
      var length = val.charCodeAt(i);
      if (length >= 0 && length <= 128) {
        len += 1;
      } else {
        len += 2;
      }
    }
    return len;
  };
  //中英文筛选,以中文为标准中文size为2英文数字为1
  _.mySubstr2 = function (str, len) {
    if (!str || !len)
      return;
    //计算真实的长度
    var _len = _.getByteLen(str);
    var tmpLen = 0;
    for (var i = 0; i < str.length; i++) {
      var length = str.charCodeAt(i);
      if (length >= 0 && length <= 128) {
        tmpLen += 1;
      } else {
        tmpLen += 2;
      }
      if (tmpLen >= len * 2)
        break;
    }
    return str.length > i ? str.substr(0, i) + '...' : str;
  };
  _.removeHTMLTag = function (str) {
    if (!str)
      return;
    str = str.replace(/<\/?[^>]*>/g, '');
    //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n');
    //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/ /gi, '');
    //去掉
    return str;
  };
  // //获取url参数
  // //这个方法还是有问题
  _.getUrlParam = function (url, key) {
    if (!url)
      url = window.location.href;
    var searchReg = /([^&=?]+)=([^&]+)/g;
    var urlReg = /\/+.*\?/;
    var arrayReg = /(.+)\[\]$/;
    var urlParams = {};
    var match, name, value, isArray;
    while (match = searchReg.exec(url)) {
      name = match[1];
      value = match[2];
      isArray = name.match(arrayReg);
      //处理参数为url这种情况
      if (urlReg.test(value)) {
        urlParams[name] = url.substr(url.indexOf(value));
        break;
      } else {
        if (isArray) {
          name = isArray[1];
          urlParams[name] = urlParams[name] || [];
          urlParams[name].push(value);
        } else {
          urlParams[name] = value;
        }
      }
    }
    for (var k in urlParams)
      urlParams[k] = _.removeHTMLTag(decodeURIComponent(urlParams[k]));
    return key ? urlParams[key] : urlParams;
  };
  _.isWeiXin = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  };
  _.isMedlinker = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/medlinker\/\d/i)) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * 自定义图片尺寸
   */
  _.formatQiniuImage = function (img, w, h) {
    var _w = w || 200, _h = h || '';
    if (img) {
      if (_h === '') {
        return img.indexOf('?') > -1 ? img + '&imageView2/2/w/' + _w : img + '?imageView2/2/w/' + _w;
      } else {
        return img.indexOf('?') > -1 ? img + '&imageView2/1/w/' + _w + '/h/' + _h : img + '?imageView2/1/w/' + _w + '/h/' + _h;
      }
    }
  };
  _.removeAllSpace = function (str) {
    if (str)
      str = str.toString();
    else
      return '';
    return str.replace(/\s+/g, '');
  };
}());
//日期操作类
(function () {
  /**
   * @description 静态日期操作类，封装系列日期操作方法
   * @description 输入时候月份自动减一，输出时候自动加一
   * @return {object} 返回操作方法
   */
  _.dateUtil = {
    getDetail: function (date) {
      if (!date)
        date = new Date();
      var d, now = new Date(), dateInfo = {}, _diff;
      var weekDayArr = [
          '\u5468\u65e5',
          '\u5468\u4e00',
          '\u5468\u4e8c',
          '\u5468\u4e09',
          '\u5468\u56db',
          '\u5468\u4e94',
          '\u5468\u516d'
        ];
      if (_.isNumber(date)) {
        d = new Date();
        d.setTime(date);
        date = d;
      }
      //充值date对象，让其成为一天的起点时间
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      _diff = date.getTime() - now.getTime();
      if (_diff == 0) {
        dateInfo.day1 = '\u4eca\u5929';
      } else if (_diff == 86400000) {
        dateInfo.day1 = '\u660e\u5929';
      } else if (_diff == 172800000) {
        dateInfo.day1 = '\u540e\u5929';
      }
      dateInfo.weekday = weekDayArr[date.getDay()];
      dateInfo.year = date.getFullYear();
      dateInfo.month = date.getMonth() + 1;
      dateInfo.day = date.getDate();
      return dateInfo;
    },
    formatNum: function (n) {
      if (n < 10)
        return '0' + n;
      return n;
    },
    parse: function (dateStr, formatStr) {
      if (typeof dateStr === 'undefined')
        return null;
      if (typeof formatStr === 'string') {
        var _d = new Date(formatStr);
        //首先取得顺序相关字符串
        var arrStr = formatStr.replace(/[^ymd]/g, '').split('');
        if (!arrStr && arrStr.length != 3)
          return null;
        var formatStr = formatStr.replace(/y|m|d/g, function (k) {
            switch (k) {
            case 'y':
              return '(\\d{4})';
            case 'm':
              ;
            case 'd':
              return '(\\d{1,2})';
            }
          });
        var reg = new RegExp(formatStr, 'g');
        var arr = reg.exec(dateStr);
        var dateObj = {};
        for (var i = 0, len = arrStr.length; i < len; i++) {
          dateObj[arrStr[i]] = arr[i + 1];
        }
        return new Date(dateObj['y'], dateObj['m'] - 1, dateObj['d']);
      }
      return null;
    },
    format: function (date, format) {
      if (arguments.length < 2 && !date.getTime) {
        format = date;
        date = new Date();
      } else if (arguments.length == 2 && _.isNumber(date) && _.isString(format)) {
        var d = new Date();
        d.setTime(date);
        date = d;
      }
      typeof format != 'string' && (format = 'Y\u5e74M\u6708D\u65e5 H\u65f6F\u5206S\u79d2');
      return format.replace(/Y|y|M|m|D|d|H|h|F|f|S|s/g, function (a) {
        switch (a) {
        case 'y':
          return (date.getFullYear() + '').slice(2);
        case 'Y':
          return date.getFullYear();
        case 'm':
          return date.getMonth() + 1;
        case 'M':
          return _.dateUtil.formatNum(date.getMonth() + 1);
        case 'd':
          return date.getDate();
        case 'D':
          return _.dateUtil.formatNum(date.getDate());
        case 'h':
          return date.getHours();
        case 'H':
          return _.dateUtil.formatNum(date.getHours());
        case 'f':
          return date.getMinutes();
        case 'F':
          return _.dateUtil.formatNum(date.getMinutes());
        case 's':
          return date.getSeconds();
        case 'S':
          return _.dateUtil.formatNum(date.getSeconds());
        }
      });
    },
    isDate: function (d) {
      if (typeof d == 'object' && d instanceof Date)
        return true;
      return false;
    },
    isLeapYear: function (year) {
      //传入为时间格式需要处理
      if (_.dateUtil.isDate(year))
        year = year.getFullYear();
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        return true;
      return false;
    },
    getDaysOfMonth: function (year, month) {
      //自动减一以便操作
      month--;
      if (_.dateUtil.isDate(year)) {
        month = year.getMonth();
        //注意此处月份要加1，所以我们要减一
        year = year.getFullYear();
      }
      return [
        31,
        _.dateUtil.isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ][month];
    },
    getBeginDayOfMouth: function (year, month) {
      //自动减一以便操作
      month--;
      if (typeof year == 'object' && year instanceof Date) {
        month = year.getMonth();
        year = year.getFullYear();
      }
      var d = new Date(year, month, 1);
      return d.getDay();
    },
    getBeijingDate: function (d) {
      var tmp, localTime, localOffset, beijiTime, utc;
      if (!_.isDate(d)) {
        tmp = d;
        d = new Date();
        d.setTime(tmp);
      }
      //通过调用Data()对象的getTime()方法，即可显示1970年1月1日后到此时时间之间的毫秒数。
      localTime = d.getTime();
      //当地时间偏移
      localOffset = d.getTimezoneOffset() * 60000;
      //标准时间
      utc = localTime + localOffset;
      //加上北京偏移量便是北京时区
      beijiTime = utc + 28800000;
      d.setTime(beijiTime);
      return d;
    },
    setBeijingDate: function (d) {
      var tmp, localTime, localOffset, beijiTime, utc;
      if (!_.isDate(d)) {
        tmp = d;
        d = new Date();
        d.setTime(tmp);
      }
      //通过调用Data()对象的getTime()方法，即可显示1970年1月1日后到此时时间之间的毫秒数。
      localTime = d.getTime();
      //当地时间偏移
      localOffset = d.getTimezoneOffset() * 60000;
      //标准时间
      utc = localTime - localOffset;
      //加上北京偏移量便是北京时区
      beijiTime = utc - 28800000;
      d.setTime(beijiTime);
      return d;
    }
  };
}());
//Hybrid基本逻辑
(function () {
  window.Hybrid = window.Hybrid || {};
  window.Hybrid.ui = window.Hybrid.ui || {};
  //Hybrid.callback = function (data) {
  //    var callbackId = data.callback;
  //    if(!callbackId) return;
  //
  //    //alert(typeof data);
  //    //alert(callbackId);
  //    //
  //    //showFormatData(Hybrid);
  //
  //    if(typeof data == 'string') data = JSON.parse(data);
  //
  //    if(data.errno) data.errcode = 0;
  //
  //    data = data.data;
  //
  //    if(typeof data == 'string' && data.length > 0) data = JSON.parse(data);
  //
  //
  //    if(data.errcode !== 0) {
  //        APP && APP.showToast(data.errmsg);
  //        return;
  //    }
  //
  //    if(callbackId.indexOf('header_') != -1 && Hybrid['Header_Event']) {
  //        Hybrid['Header_Event'][callbackId] && Hybrid['Header_Event'][callbackId](data || {});
  //    } else {
  //        Hybrid[callbackId] && Hybrid[callbackId](data || {});
  //    }
  //    return true;
  //};
  Hybrid.callback = function (data) {
    var callbackId = data.callback;
    if (!callbackId)
      return;
    //alert(typeof data);
    //alert(callbackId);
    //
    //showFormatData(Hybrid);
    if (typeof data == 'string')
      data = JSON.parse(data);
    if (callbackId.indexOf('header_') != -1 && Hybrid['Header_Event']) {
      Hybrid['Header_Event'][callbackId] && Hybrid['Header_Event'][callbackId](data.data || {});
    } else {
      Hybrid[callbackId] && Hybrid[callbackId](data.data || {}, data);
    }
    return true;
  };
  var bridgePostMsg = function (params) {
    var url = _getHybridUrl(params);
    //兼容ios6
    var ifr = $('<iframe style="display: none;" src="' + url + '"/>');
    console.log(params.tagname + '-hybrid\u8bf7\u6c42\u53d1\u51fa-' + new Date().getTime() + 'url: ' + url);
    //Android情况协议发的太快会有问题
    if ($.os.android) {
      setTimeout(function () {
        $('body').append(ifr);
      });
    } else {
      $('body').append(ifr);
    }
    setTimeout(function () {
      ifr.remove();
      ifr = null;
    }, 1000);
    return;
    if ($.os.ios) {
      //使用jsCore与native通信
      window.HybridRequestNative && HybridRequestNative(JSON.stringify(params));
    } else {
      //Android实现
      var ifr = $('<iframe style="display: none;" src="' + url + '"/>');
      $('body').append(ifr);
      setTimeout(function () {
        ifr.remove();
        ifr = null;
      }, 1000);
    }
  };
  var _getHybridUrl = function (params) {
    var k, paramStr = '', url = 'med' + (getHybridInfo().app || 'medlinker') + 'hybrid://', flag = '?';
    url += params.tagname;
    //时间戳，防止url不起效
    if (params.callback) {
      flag = '&';
      url += '?callback=' + params.callback;  //delete params.callback;
    }
    if (params.param) {
      paramStr = typeof params.param == 'object' ? JSON.stringify(params.param) : params.param;
      url += flag + 'param=' + encodeURIComponent(paramStr);
    }
    return url;
  };
  _setEvent = function (t, tmpFn) {
    window.Hybrid[t] = function (data) {
      tmpFn(data);
      delete window.Hybrid[t];
    };
  };
  //处理组件通信的情况
  var _handleMessage = function (events, tagname) {
    var tmpFn, data = {};
    var t;
    for (var key in events) {
      t = 'hybrid_' + tagname + '_' + key;
      data[key] = t;
      tmpFn = events[key];
      _setEvent(t, tmpFn);
    }
    return data;
  };
  var requestHybrid = function (params) {
    if (!params.tagname) {
      alert('\u5fc5\u987b\u5305\u542btagname');
    }
    //生成唯一执行函数，执行后销毁
    var tt = new Date().getTime() + '_' + _.uniqueId() + '_';
    var t = 'hybrid_' + params.tagname + '_' + tt;
    var tmpFn;
    ////针对组件通信做的特殊处理
    //if(params.param && params.param.events) {
    //    params.param.events =  _handleMessage(params.param.events, params.tagname);
    //}
    //处理有回调的情况
    if (params.callback) {
      tmpFn = params.callback;
      params.callback = t;
      window.Hybrid[t] = function (data) {
        console.log(params.tagname + '-hybrid\u8bf7\u6c42\u54cd\u5e94-' + new Date().getTime());
        tmpFn(data);  //delete window.Hybrid[t];
      };
    }
    bridgePostMsg(params);
  };
  var getHybridInfo = function () {
    var platform_version = {};
    var na = navigator.userAgent;
    na = na.toLowerCase();
    var info = na.match(/med_hybrid_\w+_\d\.\d\.\d/);
    if (info && info[0]) {
      info = info[0].split('_');
      if (info && info.length == 4) {
        platform_version.platform = info[1];
        platform_version.app = info[2];
        platform_version.version = info[3];
      }
    }
    //*debug* 调试模拟环境
    if (_.getUrlParam().__platform) {
      platform_version.platform = _.getUrlParam().__platform;
      platform_version.version = _.getUrlParam().__version;
    }
    return platform_version;
  };
  var getVer = function () {
    var ver = getHybridInfo().version.replace(/\./g, '');
    if (ver)
      return parseInt(ver);
    return 0;
  };
  //版本在多少
  var versionAt = function (ver) {
    if (ver == getVer())
      return true;
    return false;
  };
  var versionBefore = function (ver) {
    if (getVer() < ver)
      return true;
    return false;
  };
  var versionAfter = function (ver) {
    if (getVer() > ver)
      return true;
    return false;
  };
  var hybridCallback = function (opts) {
    //undefined, baidu_bus,
    var platform = _.getHybridInfo().platform || 'web';
    var mapping = {
        'web': '',
        'baidubox': 'bdbox_',
        'baidu_bus': 'bdbus_'
      };
    var callbackName = mapping[platform] || '';
    // 如果没有定义渠道callback 则默认为普通callback
    var callback = opts[callbackName + 'callback'] || opts['callback'];
    if (typeof callback == 'function')
      callback();
  };
  var registerHeaderCallback = function (ns, name, callback) {
    if (!window.Hybrid[ns])
      window.Hybrid[ns] = {};
    window.Hybrid[ns][name] = callback;
  };
  var unRegisterHeaderCallback = function (ns) {
    if (!window.Hybrid[ns])
      return;
    delete window.Hybrid[ns];
  };
  var isHybrid = function () {
    return getHybridInfo().platform == 'hybrid';
  };
  _.registerHeaderCallback = registerHeaderCallback;
  _.unRegisterHeaderCallback = unRegisterHeaderCallback;
  _.getHybridInfo = getHybridInfo;
  _.requestHybrid = requestHybrid;
  window.requestHybrid = requestHybrid;
  _.hybridCallback = hybridCallback;
  _.versionAt = versionAt;
  _.versionBefore = versionBefore;
  _.versionAfter = versionAfter;
  _._getHybridUrl = _getHybridUrl;
  _.isHybrid = isHybrid;
  // -------------------
  // 代替openApp的一些功能
  var ua = navigator.userAgent.toLowerCase();
  var host = location.host;
  var ENV = {
      iOS: /(iphone|ipad|ipod|ios)/.test(ua),
      Android: /android/.test(ua),
      Chrome: /chrome/.test(ua),
      QQ: /qq\//.test(ua),
      weixin: /micromessenger/.test(ua),
      weibo: /weibo/.test(ua),
      momo: /momowebview/.test(ua),
      aliapp: /aliapp/.test(ua),
      medlinker: /med_hybrid_medlinker/.test(ua),
      ylt: /med_hybrid_surgery/.test(ua),
      dev: /dev.pdt5/.test(host),
      tset: /test.pdt5/.test(host),
      qa: /qa/.test(host)
    };
  ENV.version = function () {
    var version = '';
    if (ENV.medlinker) {
      var match = ua.match(/medlinker\/([\d.]+)/);
      version = match && match[1] || version;
    }
    return version;
  }();
  ENV.matchVersion = function (v) {
    return new RegExp('^' + v).test(ENV.version);
  };
  ENV.gteVersion = function (v) {
    return parseInt(ENV.version, 10) >= v;
  };
  // 支付
  var PAY = {};
  // 支付后的回调
  PAY.payCallBack = function (status) {
    _.requestHybrid({
      tagname: 'paycallback',
      param: { status: status }
    });
  };
  // 阿里支付
  PAY.payByAliPay = function (payInfo, Callback) {
    _.requestHybrid({
      tagname: 'paybyalipay',
      param: { payInfo: payInfo },
      callback: Callback
    });
  };
  // 微信支付
  PAY.payByWxPay = function (payInfo, Callback) {
    _.requestHybrid({
      tagname: 'paybywxpay',
      param: { payInfo: payInfo },
      callback: Callback
    });
  };
  //ios 内购
  PAY.iosbuy = function (pid, pnum) {
    _.requestHybrid({
      tagname: 'iosbuy',
      param: {
        pid: pid,
        pnum: pnum
      }
    });
  };
  //封装native跳转
  _.nativeForward = function (path, param) {
    if (!path)
      return;
    var topage = path;
    if (!param)
      param = {};
    var index = 0;
    var arr = [], tmp = {};
    for (var k in param) {
      tmp = {};
      tmp.k = k;
      tmp.v = param[k];
      arr.push(tmp);
    }
    for (var i = 0, len = arr.length; i < len; i++) {
      if (i == 0) {
        topage += '?' + arr[i].k + '=' + encodeURIComponent(arr[i].v);
      } else {
        topage += '&' + arr[i].k + '=' + encodeURIComponent(arr[i].v);
      }
    }
    _.requestHybrid({
      tagname: 'forward',
      param: {
        topage: topage,
        type: 'native'
      }
    });
  };
  ENV = ENV || {};
  ENV.version = getHybridInfo().version || '';
  _.med = {
    env: ENV,
    payCallBack: PAY.payCallBack,
    payByAliPay: PAY.payByAliPay,
    payByWxPay: PAY.payByWxPay,
    iosbuy: PAY.iosbuy,
    open: function (url) {
      _.requestHybrid({
        tagname: 'forward',
        param: {
          topage: url,
          type: 'native'
        }
      });
    },
    setShareData: function (obj) {
      _.requestHybrid({
        tagname: 'share',
        param: {
          title: obj.title,
          desc: obj.desc,
          image: obj.image,
          link: obj.url
        },
        callback: function (data) {
        }
      });
    },
    share: function (obj) {
      _.requestHybrid({
        tagname: 'share',
        param: {
          title: obj.title,
          desc: obj.desc,
          image: obj.image,
          link: obj.url
        }
      });
    },
    screenshot: function () {
      _.requestHybrid({ tagname: 'medScreenshot' });
    },
    openLink: function (url) {
      //适配在浏览器里面打开app
      if (!isHybrid()) {
        //var url = window.location.href + extra;
        //return '/link?url=' + encodeURIComponent(url);
        window.location = 'medmedlinkerhybrid://link?url=' + encodeURIComponent(url);
        return;
      }
      _.requestHybrid({
        tagname: 'forward',
        param: {
          topage: '/link?url=' + encodeURIComponent(url),
          type: 'native'
        }
      });
    },
    medReward: function (type, id, callback) {
      _.requestHybrid({
        tagname: 'medReward',
        param: {
          dataId: id + '',
          type: type
        },
        callback: function (data) {
          callback && callback();
        }
      });
    },
    medComment: function (data, callback) {
      //唤起输入文字的软键盘
      _.requestHybrid({
        tagname: 'showKeyboard',
        param: {
          hasImg: 1,
          bucket: 'transform',
          isPublic: 1,
          count: 1,
          sizeType: [
            'original',
            'compressed'
          ],
          sourceType: [
            'album',
            'camera'
          ],
          type: 'Done',
          btnTxt: '\u786e\u5b9a',
          value: '',
          tips: '',
          textMin: 1,
          textMax: 50000
        },
        callback: function (data) {
          callback(JSON.stringify({
            text: data.text,
            ids: data.ids,
            urls: data.urls
          }));
        }
      });
    },
    h5Forword: function (url) {
      _.requestHybrid({
        tagname: 'forward',
        param: {
          topage: url,
          type: 'h5'
        }
      });
    },
    h5ToNative: function (url) {
      _.requestHybrid({
        tagname: 'forward',
        param: {
          topage: url,
          type: 'native',
          hasnavigation: true
        }
      });
    },
    updateHeader: function (params) {
      params.tagname = 'updateHeader';
      _.requestHybrid(params);
    }
  };
  //因为先加载我们这个再加载系统MED,所以我们这个会被覆盖
  window.MED = _.med;
}());
angular.module('myApp', ['ngRoute']).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/main.html', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/find.html', {
      templateUrl: 'views/find.html',
      controller: 'FindCtrl'
    }).when('/test.html', {
      templateUrl: 'views/test.html',
      controller: 'TestCtrl'
    }).when('/test2.html', {
      templateUrl: 'views/test.html',
      controller: 'TestCtrl'
    }).otherwise({ redirectTo: '/main.html' });
  }
]).run([function () {
    function resizeHeight() {
      document.querySelectorAll('.box>div').forEach(function (item) {
        item.style.height = item.clienWidth;
      });
      document.querySelectorAll('.box>div div').forEach(function (item) {
        console.log(item.className);
        if (item.className == 'item-logo') {
          item.style.height = item.clientWidth * 0.9 + 'px';
          console.log(item.style.height);
        }
      });
    }
    window.addEventListener('load', resizeHeight);
    window.addEventListener('resize', resizeHeight);
  }]).controller('FindCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    _.requestHybrid({
      tagname: 'updateheader',
      param: { style: { backgroundcolor: '#00ff00' } }
    });
    $scope.go = function (url) {
      if (url)
        $location.path(url);
    };
    $scope.list = [
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531',
        url: 'test.html'
      },
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531'
      },
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531'
      },
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531'
      },
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531'
      },
      {
        name: '\u5357\u660c\u5e02\u7ea2\u8c37\u6ee9\u65b0\u533a\u4e30\u548c\u793e\u533a\u8bca\u6240',
        address: '\u51e4\u51f0\u4e2d\u5927\u90531600\u53f7\u9644\u8fd1',
        workTimeRange: '\u5468\u4e00\u81f3\u5468\u65e5\u5168\u592912\u5c0f\u65f6',
        tel: '0719-63018531'
      }
    ];
  }
]).controller('MainCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    _.requestHybrid({
      tagname: 'updateheader',
      param: { style: { backgroundcolor: '#00ff00' } }
    });
    $scope.go = function (url) {
      if (url)
        $location.path(url);
    };
    $scope.list = [
      {
        title: '\u9884\u7ea6\u6302\u53f7',
        imgUrl: '../images/img_house.png',
        url: 'test.html'
      },
      {
        title: '\u5065\u5eb7\u6863\u6848',
        imgUrl: '../images/img_luggage.png',
        url: 'test2.html'
      },
      {
        title: '\u5065\u5eb7\u54a8\u8be2',
        imgUrl: '../images/img_sun.png'
      },
      {
        title: '\u667a\u80fd\u5bfc\u8bca',
        imgUrl: '../images/img_rommg.png'
      },
      {
        title: '\u6d88\u606f\u901a\u77e5',
        imgUrl: '../images/img_information.png'
      },
      {
        title: '\u8bca\u95ee\u652f\u4ed8',
        imgUrl: '../images/img_card.png'
      }
    ];
  }
]).controller('TestCtrl', [
  '$scope',
  function ($scope) {
    _.requestHybrid({
      tagname: 'updateheader',
      param: {
        style: { backgroundcolor: '#00ff00' },
        title: {
          tagname: 'title',
          title: '\u6211\u662f\u6d4b\u8bd5\u9875\u9762',
          style: {
            color: 'ff00ff',
            size: 20
          }
        },
        left: [{
            icon: 'http://172.16.0.172:3456/images/ic_arrow.png',
            value: 'back'
          }]
      }
    });
  }
]);