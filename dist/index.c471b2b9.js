!function webpackUniversalModuleDefinition1(root1, factory1) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory1();
    else if ("function" == typeof define && define.amd) define([], factory1);
    else {
        var a1 = factory1();
        for(var i1 in a1)("object" == typeof exports ? exports : root1)[i1] = a1[i1];
    }
}(window, function() {
    var modules, installedModules;
    return modules = [
        function(module1) {
            module1.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}');
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            function _typeof1(obj1) {
                return _typeof1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof1(obj1);
            }
            var $1 = __webpack_require__1(2), window1 = __webpack_require__1(3), document1 = window1.document, generateMaskSet1 = __webpack_require__1(4).generateMaskSet, analyseMask1 = __webpack_require__1(4).analyseMask, maskScope1 = __webpack_require__1(7);
            function Inputmask1(alias1, options1, internal1) {
                if (!(this instanceof Inputmask1)) return new Inputmask1(alias1, options1, internal1);
                this.el = void 0, this.events = {}, this.maskset = void 0, this.refreshValue = !1, !0 !== internal1 && ($1.isPlainObject(alias1) ? options1 = alias1 : (options1 = options1 || {}, alias1 && (options1.alias = alias1)), this.opts = $1.extend(!0, {}, this.defaults, options1), this.noMasksCache = options1 && void 0 !== options1.definitions, this.userOptions = options1 || {}, resolveAlias1(this.opts.alias, options1, this.opts), this.isRTL = this.opts.numericInput);
            }
            function resolveAlias1(aliasStr1, options1, opts1) {
                var aliasDefinition1 = Inputmask1.prototype.aliases[aliasStr1];
                return aliasDefinition1 ? (aliasDefinition1.alias && resolveAlias1(aliasDefinition1.alias, void 0, opts1), $1.extend(!0, opts1, aliasDefinition1), $1.extend(!0, opts1, options1), !0) : (null === opts1.mask && (opts1.mask = aliasStr1), !1);
            }
            function importAttributeOptions1(npt1, opts1, userOptions1, dataAttribute1) {
                function importOption1(option1, optionData1) {
                    optionData1 = void 0 !== optionData1 ? optionData1 : npt1.getAttribute(dataAttribute1 + "-" + option1), null !== optionData1 && ("string" == typeof optionData1 && (0 === option1.indexOf("on") ? optionData1 = window1[optionData1] : "false" === optionData1 ? optionData1 = !1 : "true" === optionData1 && (optionData1 = !0)), userOptions1[option1] = optionData1);
                }
                if (!0 === opts1.importDataAttributes) {
                    var attrOptions1 = npt1.getAttribute(dataAttribute1), option1, dataoptions1, optionData1, p1;
                    if (attrOptions1 && "" !== attrOptions1 && (attrOptions1 = attrOptions1.replace(/'/g, '"'), dataoptions1 = JSON.parse("{" + attrOptions1 + "}")), dataoptions1) {
                        for(p1 in optionData1 = void 0, dataoptions1)if ("alias" === p1.toLowerCase()) {
                            optionData1 = dataoptions1[p1];
                            break;
                        }
                    }
                    for(option1 in importOption1("alias", optionData1), userOptions1.alias && resolveAlias1(userOptions1.alias, userOptions1, opts1), opts1){
                        if (dataoptions1) {
                            for(p1 in optionData1 = void 0, dataoptions1)if (p1.toLowerCase() === option1.toLowerCase()) {
                                optionData1 = dataoptions1[p1];
                                break;
                            }
                        }
                        importOption1(option1, optionData1);
                    }
                }
                return $1.extend(!0, opts1, userOptions1), "rtl" !== npt1.dir && !opts1.rightAlign || (npt1.style.textAlign = "right"), "rtl" !== npt1.dir && !opts1.numericInput || (npt1.dir = "ltr", npt1.removeAttribute("dir"), opts1.isRTL = !0), Object.keys(userOptions1).length;
            }
            Inputmask1.prototype = {
                dataAttribute: "data-inputmask",
                defaults: {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [
                        "[",
                        "]"
                    ],
                    quantifiermarker: [
                        "{",
                        "}"
                    ],
                    groupmarker: [
                        "(",
                        ")"
                    ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: $1.noop,
                    onincomplete: $1.noop,
                    oncleared: $1.noop,
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: $1.noop,
                    onBeforeMask: null,
                    onBeforePaste: function onBeforePaste1(pastedValue1, opts1) {
                        return $1.isFunction(opts1.onBeforeMask) ? opts1.onBeforeMask.call(this, pastedValue1, opts1) : pastedValue1;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: $1.noop,
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [
                        "text",
                        "tel",
                        "url",
                        "password",
                        "search"
                    ],
                    ignorables: [
                        8,
                        9,
                        19,
                        27,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        45,
                        46,
                        93,
                        112,
                        113,
                        114,
                        115,
                        116,
                        117,
                        118,
                        119,
                        120,
                        121,
                        122,
                        123,
                        0,
                        229
                    ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0
                },
                definitions: {
                    9: {
                        validator: "[0-9\uFF11-\uFF19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xc0-\xff\xb5]"
                    }
                },
                aliases: {},
                masksCache: {},
                mask: function mask1(elems1) {
                    var that1 = this;
                    return "string" == typeof elems1 && (elems1 = document1.getElementById(elems1) || document1.querySelectorAll(elems1)), elems1 = elems1.nodeName ? [
                        elems1
                    ] : elems1, $1.each(elems1, function(ndx3, el1) {
                        var scopedOpts1 = $1.extend(!0, {}, that1.opts);
                        if (importAttributeOptions1(el1, scopedOpts1, $1.extend(!0, {}, that1.userOptions), that1.dataAttribute)) {
                            var maskset1 = generateMaskSet1(scopedOpts1, that1.noMasksCache);
                            void 0 !== maskset1 && (void 0 !== el1.inputmask && (el1.inputmask.opts.autoUnmask = !0, el1.inputmask.remove()), el1.inputmask = new Inputmask1(void 0, void 0, !0), el1.inputmask.opts = scopedOpts1, el1.inputmask.noMasksCache = that1.noMasksCache, el1.inputmask.userOptions = $1.extend(!0, {}, that1.userOptions), el1.inputmask.isRTL = scopedOpts1.isRTL || scopedOpts1.numericInput, el1.inputmask.el = el1, el1.inputmask.maskset = maskset1, $1.data(el1, "_inputmask_opts", scopedOpts1), maskScope1.call(el1.inputmask, {
                                action: "mask"
                            }));
                        }
                    }), elems1 && elems1[0] && elems1[0].inputmask || this;
                },
                option: function option1(options1, noremask1) {
                    return "string" == typeof options1 ? this.opts[options1] : "object" === _typeof1(options1) ? ($1.extend(this.userOptions, options1), this.el && !0 !== noremask1 && this.mask(this.el), this) : void 0;
                },
                unmaskedvalue: function unmaskedvalue1(value1) {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "unmaskedvalue",
                        value: value1
                    });
                },
                remove: function remove1() {
                    return maskScope1.call(this, {
                        action: "remove"
                    });
                },
                getemptymask: function getemptymask1() {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "getemptymask"
                    });
                },
                hasMaskedValue: function hasMaskedValue1() {
                    return !this.opts.autoUnmask;
                },
                isComplete: function isComplete1() {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "isComplete"
                    });
                },
                getmetadata: function getmetadata1() {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "getmetadata"
                    });
                },
                isValid: function isValid1(value1) {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "isValid",
                        value: value1
                    });
                },
                format: function format1(value1, metadata1) {
                    return this.maskset = this.maskset || generateMaskSet1(this.opts, this.noMasksCache), maskScope1.call(this, {
                        action: "format",
                        value: value1,
                        metadata: metadata1
                    });
                },
                setValue: function setValue1(value1) {
                    this.el && $1(this.el).trigger("setvalue", [
                        value1
                    ]);
                },
                analyseMask: analyseMask1
            }, Inputmask1.extendDefaults = function(options1) {
                $1.extend(!0, Inputmask1.prototype.defaults, options1);
            }, Inputmask1.extendDefinitions = function(definition1) {
                $1.extend(!0, Inputmask1.prototype.definitions, definition1);
            }, Inputmask1.extendAliases = function(alias1) {
                $1.extend(!0, Inputmask1.prototype.aliases, alias1);
            }, Inputmask1.format = function(value1, options1, metadata1) {
                return Inputmask1(options1).format(value1, metadata1);
            }, Inputmask1.unmask = function(value1, options1) {
                return Inputmask1(options1).unmaskedvalue(value1);
            }, Inputmask1.isValid = function(value1, options1) {
                return Inputmask1(options1).isValid(value1);
            }, Inputmask1.remove = function(elems1) {
                "string" == typeof elems1 && (elems1 = document1.getElementById(elems1) || document1.querySelectorAll(elems1)), elems1 = elems1.nodeName ? [
                    elems1
                ] : elems1, $1.each(elems1, function(ndx3, el1) {
                    el1.inputmask && el1.inputmask.remove();
                });
            }, Inputmask1.setValue = function(elems1, value1) {
                "string" == typeof elems1 && (elems1 = document1.getElementById(elems1) || document1.querySelectorAll(elems1)), elems1 = elems1.nodeName ? [
                    elems1
                ] : elems1, $1.each(elems1, function(ndx3, el1) {
                    el1.inputmask ? el1.inputmask.setValue(value1) : $1(el1).trigger("setvalue", [
                        value1
                    ]);
                });
            };
            var escapeRegexRegex1 = new RegExp("(\\" + [
                "/",
                ".",
                "*",
                "+",
                "?",
                "|",
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                "\\",
                "$",
                "^"
            ].join("|\\") + ")", "gim");
            Inputmask1.escapeRegex = function(str1) {
                return str1.replace(escapeRegexRegex1, "\\$1");
            }, Inputmask1.dependencyLib = $1, window1.Inputmask = Inputmask1, module1.exports = Inputmask1;
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            function _typeof1(obj1) {
                return _typeof1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof1(obj1);
            }
            var window1 = __webpack_require__1(3), document1 = window1.document;
            function indexOf1(list1, elem1) {
                for(var i1 = 0, len1 = list1.length; i1 < len1; i1++)if (list1[i1] === elem1) return i1;
                return -1;
            }
            function isWindow1(obj1) {
                return null != obj1 && obj1 === obj1.window;
            }
            function isArraylike1(obj1) {
                var length1 = "length" in obj1 && obj1.length, ltype1 = _typeof1(obj1);
                return "function" !== ltype1 && !isWindow1(obj1) && (!(1 !== obj1.nodeType || !length1) || "array" === ltype1 || 0 === length1 || "number" == typeof length1 && 0 < length1 && length1 - 1 in obj1);
            }
            function isValidElement1(elem1) {
                return elem1 instanceof Element;
            }
            function DependencyLib1(elem1) {
                return elem1 instanceof DependencyLib1 ? elem1 : this instanceof DependencyLib1 ? void (null != elem1 && elem1 !== window1 && (this[0] = elem1.nodeName ? elem1 : void 0 !== elem1[0] && elem1[0].nodeName ? elem1[0] : document1.querySelector(elem1), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib1(elem1);
            }
            DependencyLib1.prototype = {
                on: function on1(events1, handler1) {
                    function addEvent1(ev1, namespace1) {
                        elem1.addEventListener ? elem1.addEventListener(ev1, handler1, !1) : elem1.attachEvent && elem1.attachEvent("on" + ev1, handler1), eventRegistry1[ev1] = eventRegistry1[ev1] || {}, eventRegistry1[ev1][namespace1] = eventRegistry1[ev1][namespace1] || [], eventRegistry1[ev1][namespace1].push(handler1);
                    }
                    if (isValidElement1(this[0])) for(var eventRegistry1 = this[0].eventRegistry, elem1 = this[0], _events1 = events1.split(" "), endx1 = 0; endx1 < _events1.length; endx1++){
                        var nsEvent1 = _events1[endx1].split("."), ev1 = nsEvent1[0], namespace1 = nsEvent1[1] || "global";
                        addEvent1(ev1, namespace1);
                    }
                    return this;
                },
                off: function off1(events1, handler1) {
                    var eventRegistry1, elem1;
                    function removeEvent1(ev1, namespace1, handler1) {
                        if (ev1 in eventRegistry1 == !0) {
                            if (elem1.removeEventListener ? elem1.removeEventListener(ev1, handler1, !1) : elem1.detachEvent && elem1.detachEvent("on" + ev1, handler1), "global" === namespace1) for(var nmsp1 in eventRegistry1[ev1])eventRegistry1[ev1][nmsp1].splice(eventRegistry1[ev1][nmsp1].indexOf(handler1), 1);
                            else eventRegistry1[ev1][namespace1].splice(eventRegistry1[ev1][namespace1].indexOf(handler1), 1);
                        }
                    }
                    function resolveNamespace1(ev1, namespace1) {
                        var evts1 = [], hndx1, hndL1;
                        if (0 < ev1.length) {
                            if (void 0 === handler1) for(hndx1 = 0, hndL1 = eventRegistry1[ev1][namespace1].length; hndx1 < hndL1; hndx1++)evts1.push({
                                ev: ev1,
                                namespace: namespace1 && 0 < namespace1.length ? namespace1 : "global",
                                handler: eventRegistry1[ev1][namespace1][hndx1]
                            });
                            else evts1.push({
                                ev: ev1,
                                namespace: namespace1 && 0 < namespace1.length ? namespace1 : "global",
                                handler: handler1
                            });
                        } else if (0 < namespace1.length) {
                            for(var evNdx1 in eventRegistry1)for(var nmsp1 in eventRegistry1[evNdx1])if (nmsp1 === namespace1) {
                                if (void 0 === handler1) for(hndx1 = 0, hndL1 = eventRegistry1[evNdx1][nmsp1].length; hndx1 < hndL1; hndx1++)evts1.push({
                                    ev: evNdx1,
                                    namespace: nmsp1,
                                    handler: eventRegistry1[evNdx1][nmsp1][hndx1]
                                });
                                else evts1.push({
                                    ev: evNdx1,
                                    namespace: nmsp1,
                                    handler: handler1
                                });
                            }
                        }
                        return evts1;
                    }
                    if (isValidElement1(this[0])) {
                        eventRegistry1 = this[0].eventRegistry, elem1 = this[0];
                        for(var _events1 = events1.split(" "), endx1 = 0; endx1 < _events1.length; endx1++)for(var nsEvent1 = _events1[endx1].split("."), offEvents1 = resolveNamespace1(nsEvent1[0], nsEvent1[1]), i1 = 0, offEventsL1 = offEvents1.length; i1 < offEventsL1; i1++)removeEvent1(offEvents1[i1].ev, offEvents1[i1].namespace, offEvents1[i1].handler);
                    }
                    return this;
                },
                trigger: function trigger1(events1, argument_11) {
                    if (isValidElement1(this[0])) for(var eventRegistry1 = this[0].eventRegistry, elem1 = this[0], _events1 = "string" == typeof events1 ? events1.split(" ") : [
                        events1.type
                    ], endx1 = 0; endx1 < _events1.length; endx1++){
                        var nsEvent1 = _events1[endx1].split("."), ev1 = nsEvent1[0], namespace1 = nsEvent1[1] || "global";
                        if (void 0 !== document1 && "global" === namespace1) {
                            var evnt1, i1, params1 = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: argument_11
                            };
                            if (document1.createEvent) {
                                try {
                                    evnt1 = new CustomEvent(ev1, params1);
                                } catch (e1) {
                                    evnt1 = document1.createEvent("CustomEvent"), evnt1.initCustomEvent(ev1, params1.bubbles, params1.cancelable, params1.detail);
                                }
                                events1.type && DependencyLib1.extend(evnt1, events1), elem1.dispatchEvent(evnt1);
                            } else evnt1 = document1.createEventObject(), evnt1.eventType = ev1, evnt1.detail = argument_11, events1.type && DependencyLib1.extend(evnt1, events1), elem1.fireEvent("on" + evnt1.eventType, evnt1);
                        } else if (void 0 !== eventRegistry1[ev1]) {
                            if (events1 = events1.type ? events1 : DependencyLib1.Event(events1), events1.detail = arguments.slice(1), "global" === namespace1) for(var nmsp1 in eventRegistry1[ev1])for(i1 = 0; i1 < eventRegistry1[ev1][nmsp1].length; i1++)eventRegistry1[ev1][nmsp1][i1].apply(elem1, arguments);
                            else for(i1 = 0; i1 < eventRegistry1[ev1][namespace1].length; i1++)eventRegistry1[ev1][namespace1][i1].apply(elem1, arguments);
                        }
                    }
                    return this;
                }
            }, DependencyLib1.isFunction = function(obj1) {
                return "function" == typeof obj1;
            }, DependencyLib1.noop = function() {}, DependencyLib1.isArray = Array.isArray, DependencyLib1.inArray = function(elem1, arr1, i1) {
                return null == arr1 ? -1 : indexOf1(arr1, elem1, i1);
            }, DependencyLib1.valHooks = void 0, DependencyLib1.isPlainObject = function(obj1) {
                return "object" === _typeof1(obj1) && !obj1.nodeType && !isWindow1(obj1) && !(obj1.constructor && !Object.hasOwnProperty.call(obj1.constructor.prototype, "isPrototypeOf"));
            }, DependencyLib1.extend = function() {
                var options1, name1, src1, copy1, copyIsArray1, clone1, target1 = arguments[0] || {}, i1 = 1, length1 = arguments.length, deep1 = !1;
                for("boolean" == typeof target1 && (deep1 = target1, target1 = arguments[i1] || {}, i1++), "object" === _typeof1(target1) || DependencyLib1.isFunction(target1) || (target1 = {}), i1 === length1 && (target1 = this, i1--); i1 < length1; i1++)if (null != (options1 = arguments[i1])) for(name1 in options1)src1 = target1[name1], copy1 = options1[name1], target1 !== copy1 && (deep1 && copy1 && (DependencyLib1.isPlainObject(copy1) || (copyIsArray1 = DependencyLib1.isArray(copy1))) ? (clone1 = copyIsArray1 ? (copyIsArray1 = !1, src1 && DependencyLib1.isArray(src1) ? src1 : []) : src1 && DependencyLib1.isPlainObject(src1) ? src1 : {}, target1[name1] = DependencyLib1.extend(deep1, clone1, copy1)) : void 0 !== copy1 && (target1[name1] = copy1));
                return target1;
            }, DependencyLib1.each = function(obj1, callback1) {
                var value1, i1 = 0;
                if (isArraylike1(obj1)) for(var length1 = obj1.length; i1 < length1 && (value1 = callback1.call(obj1[i1], i1, obj1[i1]), !1 !== value1); i1++);
                else for(i1 in obj1)if (value1 = callback1.call(obj1[i1], i1, obj1[i1]), !1 === value1) break;
                return obj1;
            }, DependencyLib1.data = function(owner1, key1, value1) {
                if (void 0 === value1) return owner1.__data ? owner1.__data[key1] : null;
                owner1.__data = owner1.__data || {}, owner1.__data[key1] = value1;
            }, "function" == typeof window1.CustomEvent ? DependencyLib1.Event = window1.CustomEvent : (DependencyLib1.Event = function(event1, params1) {
                params1 = params1 || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var evt1 = document1.createEvent("CustomEvent");
                return evt1.initCustomEvent(event1, params1.bubbles, params1.cancelable, params1.detail), evt1;
            }, DependencyLib1.Event.prototype = window1.Event.prototype), module1.exports = DependencyLib1;
        },
        function(module, exports, __webpack_require__) {
            "use strict";
            var __WEBPACK_AMD_DEFINE_RESULT__;
            function _typeof(obj1) {
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof(obj1);
            }
            __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
            }).call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            var $1 = __webpack_require__1(2);
            function generateMaskSet1(opts1, nocache1) {
                var ms1;
                function generateMask1(mask1, metadata1, opts1) {
                    var regexMask1 = !1, masksetDefinition1, maskdefKey1;
                    if (null !== mask1 && "" !== mask1 || (regexMask1 = null !== opts1.regex, mask1 = regexMask1 ? (mask1 = opts1.regex, mask1.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask1 = !0, ".*")), 1 === mask1.length && !1 === opts1.greedy && 0 !== opts1.repeat && (opts1.placeholder = ""), 0 < opts1.repeat || "*" === opts1.repeat || "+" === opts1.repeat) {
                        var repeatStart1 = "*" === opts1.repeat ? 0 : "+" === opts1.repeat ? 1 : opts1.repeat;
                        mask1 = opts1.groupmarker[0] + mask1 + opts1.groupmarker[1] + opts1.quantifiermarker[0] + repeatStart1 + "," + opts1.repeat + opts1.quantifiermarker[1];
                    }
                    return maskdefKey1 = regexMask1 ? "regex_" + opts1.regex : opts1.numericInput ? mask1.split("").reverse().join("") : mask1, !1 !== opts1.keepStatic && (maskdefKey1 = "ks_" + maskdefKey1), void 0 === Inputmask.prototype.masksCache[maskdefKey1] || !0 === nocache1 ? (masksetDefinition1 = {
                        mask: mask1,
                        maskToken: Inputmask.prototype.analyseMask(mask1, regexMask1, opts1),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata: metadata1,
                        maskLength: void 0,
                        jitOffset: {}
                    }, !0 !== nocache1 && (Inputmask.prototype.masksCache[maskdefKey1] = masksetDefinition1, masksetDefinition1 = $1.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey1]))) : masksetDefinition1 = $1.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey1]), masksetDefinition1;
                }
                if ($1.isFunction(opts1.mask) && (opts1.mask = opts1.mask(opts1)), $1.isArray(opts1.mask)) {
                    if (1 < opts1.mask.length) {
                        null === opts1.keepStatic && (opts1.keepStatic = !0);
                        var altMask1 = opts1.groupmarker[0];
                        return $1.each(opts1.isRTL ? opts1.mask.reverse() : opts1.mask, function(ndx3, msk1) {
                            1 < altMask1.length && (altMask1 += opts1.groupmarker[1] + opts1.alternatormarker + opts1.groupmarker[0]), void 0 === msk1.mask || $1.isFunction(msk1.mask) ? altMask1 += msk1 : altMask1 += msk1.mask;
                        }), altMask1 += opts1.groupmarker[1], generateMask1(altMask1, opts1.mask, opts1);
                    }
                    opts1.mask = opts1.mask.pop();
                }
                return null === opts1.keepStatic && (opts1.keepStatic = !1), ms1 = opts1.mask && void 0 !== opts1.mask.mask && !$1.isFunction(opts1.mask.mask) ? generateMask1(opts1.mask.mask, opts1.mask, opts1) : generateMask1(opts1.mask, opts1.mask, opts1), ms1;
            }
            function analyseMask1(mask1, regexMask1, opts1) {
                var tokenizer1 = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer1 = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped1 = !1, currentToken1 = new MaskToken1, match1, m1, openenings1 = [], maskTokens1 = [], openingToken1, currentOpeningToken1, alternator1, lastMatch1, closeRegexGroup1 = !1;
                function MaskToken1(isGroup1, isOptional1, isQuantifier1, isAlternator1) {
                    this.matches = [], this.openGroup = isGroup1 || !1, this.alternatorGroup = !1, this.isGroup = isGroup1 || !1, this.isOptional = isOptional1 || !1, this.isQuantifier = isQuantifier1 || !1, this.isAlternator = isAlternator1 || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }
                function insertTestDefinition1(mtoken1, element1, position1) {
                    position1 = void 0 !== position1 ? position1 : mtoken1.matches.length;
                    var prevMatch1 = mtoken1.matches[position1 - 1];
                    if (regexMask1) 0 === element1.indexOf("[") || escaped1 && /\\d|\\s|\\w]/i.test(element1) || "." === element1 ? mtoken1.matches.splice(position1++, 0, {
                        fn: new RegExp(element1, opts1.casing ? "i" : ""),
                        static: !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch1 ? "master" : prevMatch1.def !== element1,
                        casing: null,
                        def: element1,
                        placeholder: void 0,
                        nativeDef: element1
                    }) : (escaped1 && (element1 = element1[element1.length - 1]), $1.each(element1.split(""), function(ndx3, lmnt1) {
                        prevMatch1 = mtoken1.matches[position1 - 1], mtoken1.matches.splice(position1++, 0, {
                            fn: /[a-z]/i.test(opts1.staticDefinitionSymbol || lmnt1) ? new RegExp("[" + (opts1.staticDefinitionSymbol || lmnt1) + "]", opts1.casing ? "i" : "") : null,
                            static: !0,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch1 ? "master" : prevMatch1.def !== lmnt1 && !0 !== prevMatch1.static,
                            casing: null,
                            def: opts1.staticDefinitionSymbol || lmnt1,
                            placeholder: void 0 !== opts1.staticDefinitionSymbol ? lmnt1 : void 0,
                            nativeDef: (escaped1 ? "'" : "") + lmnt1
                        });
                    })), escaped1 = !1;
                    else {
                        var maskdef1 = (opts1.definitions ? opts1.definitions[element1] : void 0) || Inputmask.prototype.definitions[element1];
                        maskdef1 && !escaped1 ? mtoken1.matches.splice(position1++, 0, {
                            fn: maskdef1.validator ? "string" == typeof maskdef1.validator ? new RegExp(maskdef1.validator, opts1.casing ? "i" : "") : new function() {
                                this.test = maskdef1.validator;
                            } : new RegExp("."),
                            static: maskdef1.static || !1,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch1 ? "master" : prevMatch1.def !== (maskdef1.definitionSymbol || element1),
                            casing: maskdef1.casing,
                            def: maskdef1.definitionSymbol || element1,
                            placeholder: maskdef1.placeholder,
                            nativeDef: element1,
                            generated: maskdef1.generated
                        }) : (mtoken1.matches.splice(position1++, 0, {
                            fn: /[a-z]/i.test(opts1.staticDefinitionSymbol || element1) ? new RegExp("[" + (opts1.staticDefinitionSymbol || element1) + "]", opts1.casing ? "i" : "") : null,
                            static: !0,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch1 ? "master" : prevMatch1.def !== element1 && !0 !== prevMatch1.static,
                            casing: null,
                            def: opts1.staticDefinitionSymbol || element1,
                            placeholder: void 0 !== opts1.staticDefinitionSymbol ? element1 : void 0,
                            nativeDef: (escaped1 ? "'" : "") + element1
                        }), escaped1 = !1);
                    }
                }
                function verifyGroupMarker1(maskToken1) {
                    maskToken1 && maskToken1.matches && $1.each(maskToken1.matches, function(ndx3, token1) {
                        var nextToken1 = maskToken1.matches[ndx3 + 1];
                        (void 0 === nextToken1 || void 0 === nextToken1.matches || !1 === nextToken1.isQuantifier) && token1 && token1.isGroup && (token1.isGroup = !1, regexMask1 || (insertTestDefinition1(token1, opts1.groupmarker[0], 0), !0 !== token1.openGroup && insertTestDefinition1(token1, opts1.groupmarker[1]))), verifyGroupMarker1(token1);
                    });
                }
                function defaultCase1() {
                    if (0 < openenings1.length) {
                        if (currentOpeningToken1 = openenings1[openenings1.length - 1], insertTestDefinition1(currentOpeningToken1, m1), currentOpeningToken1.isAlternator) {
                            alternator1 = openenings1.pop();
                            for(var mndx1 = 0; mndx1 < alternator1.matches.length; mndx1++)alternator1.matches[mndx1].isGroup && (alternator1.matches[mndx1].isGroup = !1);
                            0 < openenings1.length ? (currentOpeningToken1 = openenings1[openenings1.length - 1], currentOpeningToken1.matches.push(alternator1)) : currentToken1.matches.push(alternator1);
                        }
                    } else insertTestDefinition1(currentToken1, m1);
                }
                function reverseTokens1(maskToken1) {
                    function reverseStatic1(st1) {
                        return st1 === opts1.optionalmarker[0] ? st1 = opts1.optionalmarker[1] : st1 === opts1.optionalmarker[1] ? st1 = opts1.optionalmarker[0] : st1 === opts1.groupmarker[0] ? st1 = opts1.groupmarker[1] : st1 === opts1.groupmarker[1] && (st1 = opts1.groupmarker[0]), st1;
                    }
                    for(var match1 in maskToken1.matches = maskToken1.matches.reverse(), maskToken1.matches)if (Object.prototype.hasOwnProperty.call(maskToken1.matches, match1)) {
                        var intMatch1 = parseInt(match1);
                        if (maskToken1.matches[match1].isQuantifier && maskToken1.matches[intMatch1 + 1] && maskToken1.matches[intMatch1 + 1].isGroup) {
                            var qt1 = maskToken1.matches[match1];
                            maskToken1.matches.splice(match1, 1), maskToken1.matches.splice(intMatch1 + 1, 0, qt1);
                        }
                        void 0 !== maskToken1.matches[match1].matches ? maskToken1.matches[match1] = reverseTokens1(maskToken1.matches[match1]) : maskToken1.matches[match1] = reverseStatic1(maskToken1.matches[match1]);
                    }
                    return maskToken1;
                }
                function groupify1(matches1) {
                    var groupToken1 = new MaskToken1(!0);
                    return groupToken1.openGroup = !1, groupToken1.matches = matches1, groupToken1;
                }
                function closeGroup1() {
                    if (openingToken1 = openenings1.pop(), openingToken1.openGroup = !1, void 0 !== openingToken1) {
                        if (0 < openenings1.length) {
                            if (currentOpeningToken1 = openenings1[openenings1.length - 1], currentOpeningToken1.matches.push(openingToken1), currentOpeningToken1.isAlternator) {
                                alternator1 = openenings1.pop();
                                for(var mndx1 = 0; mndx1 < alternator1.matches.length; mndx1++)alternator1.matches[mndx1].isGroup = !1, alternator1.matches[mndx1].alternatorGroup = !1;
                                0 < openenings1.length ? (currentOpeningToken1 = openenings1[openenings1.length - 1], currentOpeningToken1.matches.push(alternator1)) : currentToken1.matches.push(alternator1);
                            }
                        } else currentToken1.matches.push(openingToken1);
                    } else defaultCase1();
                }
                function groupQuantifier1(matches1) {
                    var lastMatch1 = matches1.pop();
                    return lastMatch1.isQuantifier && (lastMatch1 = groupify1([
                        matches1.pop(),
                        lastMatch1
                    ])), lastMatch1;
                }
                for(regexMask1 && (opts1.optionalmarker[0] = void 0, opts1.optionalmarker[1] = void 0); match1 = regexMask1 ? regexTokenizer1.exec(mask1) : tokenizer1.exec(mask1);){
                    if (m1 = match1[0], regexMask1) switch(m1.charAt(0)){
                        case "?":
                            m1 = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            m1 = "{" + m1 + "}";
                            break;
                        case "|":
                            if (0 === openenings1.length) {
                                var altRegexGroup1 = groupify1(currentToken1.matches);
                                altRegexGroup1.openGroup = !0, openenings1.push(altRegexGroup1), currentToken1.matches = [], closeRegexGroup1 = !0;
                            }
                            break;
                    }
                    if (escaped1) defaultCase1();
                    else switch(m1.charAt(0)){
                        case "(?=":
                            break;
                        case "(?!":
                            break;
                        case "(?<=":
                            break;
                        case "(?<!":
                            break;
                        case opts1.escapeChar:
                            escaped1 = !0, regexMask1 && defaultCase1();
                            break;
                        case opts1.optionalmarker[1]:
                        case opts1.groupmarker[1]:
                            closeGroup1();
                            break;
                        case opts1.optionalmarker[0]:
                            openenings1.push(new MaskToken1(!1, !0));
                            break;
                        case opts1.groupmarker[0]:
                            openenings1.push(new MaskToken1(!0));
                            break;
                        case opts1.quantifiermarker[0]:
                            var quantifier1 = new MaskToken1(!1, !1, !0);
                            m1 = m1.replace(/[{}]/g, "");
                            var mqj1 = m1.split("|"), mq2 = mqj1[0].split(","), mq01 = isNaN(mq2[0]) ? mq2[0] : parseInt(mq2[0]), mq11 = 1 === mq2.length ? mq01 : isNaN(mq2[1]) ? mq2[1] : parseInt(mq2[1]);
                            "*" !== mq01 && "+" !== mq01 || (mq01 = "*" === mq11 ? 0 : 1), quantifier1.quantifier = {
                                min: mq01,
                                max: mq11,
                                jit: mqj1[1]
                            };
                            var matches1 = 0 < openenings1.length ? openenings1[openenings1.length - 1].matches : currentToken1.matches;
                            if (match1 = matches1.pop(), match1.isAlternator) {
                                matches1.push(match1), matches1 = match1.matches;
                                var groupToken1 = new MaskToken1(!0), tmpMatch1 = matches1.pop();
                                matches1.push(groupToken1), matches1 = groupToken1.matches, match1 = tmpMatch1;
                            }
                            match1.isGroup || (match1 = groupify1([
                                match1
                            ])), matches1.push(match1), matches1.push(quantifier1);
                            break;
                        case opts1.alternatormarker:
                            if (0 < openenings1.length) {
                                currentOpeningToken1 = openenings1[openenings1.length - 1];
                                var subToken1 = currentOpeningToken1.matches[currentOpeningToken1.matches.length - 1];
                                lastMatch1 = currentOpeningToken1.openGroup && (void 0 === subToken1.matches || !1 === subToken1.isGroup && !1 === subToken1.isAlternator) ? openenings1.pop() : groupQuantifier1(currentOpeningToken1.matches);
                            } else lastMatch1 = groupQuantifier1(currentToken1.matches);
                            if (lastMatch1.isAlternator) openenings1.push(lastMatch1);
                            else if (lastMatch1.alternatorGroup ? (alternator1 = openenings1.pop(), lastMatch1.alternatorGroup = !1) : alternator1 = new MaskToken1(!1, !1, !1, !0), alternator1.matches.push(lastMatch1), openenings1.push(alternator1), lastMatch1.openGroup) {
                                lastMatch1.openGroup = !1;
                                var alternatorGroup1 = new MaskToken1(!0);
                                alternatorGroup1.alternatorGroup = !0, openenings1.push(alternatorGroup1);
                            }
                            break;
                        default:
                            defaultCase1();
                    }
                }
                for(closeRegexGroup1 && closeGroup1(); 0 < openenings1.length;)openingToken1 = openenings1.pop(), currentToken1.matches.push(openingToken1);
                return 0 < currentToken1.matches.length && (verifyGroupMarker1(currentToken1), maskTokens1.push(currentToken1)), (opts1.numericInput || opts1.isRTL) && reverseTokens1(maskTokens1[0]), maskTokens1;
            }
            module1.exports = {
                generateMaskSet: generateMaskSet1,
                analyseMask: analyseMask1
            };
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            __webpack_require__1(6), __webpack_require__1(8), __webpack_require__1(9), __webpack_require__1(10), module1.exports = __webpack_require__1(1);
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            var Inputmask1 = __webpack_require__1(1);
            Inputmask1.extendDefinitions({
                A: {
                    validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xc0-\xff\xb5]",
                    casing: "upper"
                },
                "&": {
                    validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xc0-\xff\xb5]",
                    casing: "upper"
                },
                "#": {
                    validator: "[0-9A-Fa-f]",
                    casing: "upper"
                }
            });
            var ipValidatorRegex1 = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
            function ipValidator1(chrs1, maskset1, pos1, strict1, opts1) {
                return chrs1 = -1 < pos1 - 1 && "." !== maskset1.buffer[pos1 - 1] ? (chrs1 = maskset1.buffer[pos1 - 1] + chrs1, -1 < pos1 - 2 && "." !== maskset1.buffer[pos1 - 2] ? maskset1.buffer[pos1 - 2] + chrs1 : "0" + chrs1) : "00" + chrs1, ipValidatorRegex1.test(chrs1);
            }
            Inputmask1.extendAliases({
                cssunit: {
                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                },
                url: {
                    regex: "(https?|ftp)//.*",
                    autoUnmask: !1
                },
                ip: {
                    mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                    definitions: {
                        i: {
                            validator: ipValidator1
                        },
                        j: {
                            validator: ipValidator1
                        },
                        k: {
                            validator: ipValidator1
                        },
                        l: {
                            validator: ipValidator1
                        }
                    },
                    onUnMask: function onUnMask1(maskedValue1, unmaskedValue1, opts1) {
                        return maskedValue1;
                    },
                    inputmode: "numeric"
                },
                email: {
                    mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                    greedy: !1,
                    casing: "lower",
                    onBeforePaste: function onBeforePaste1(pastedValue1, opts1) {
                        return pastedValue1 = pastedValue1.toLowerCase(), pastedValue1.replace("mailto:", "");
                    },
                    definitions: {
                        "*": {
                            validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                        },
                        "-": {
                            validator: "[0-9A-Za-z-]"
                        }
                    },
                    onUnMask: function onUnMask1(maskedValue1, unmaskedValue1, opts1) {
                        return maskedValue1;
                    },
                    inputmode: "email"
                },
                mac: {
                    mask: "##:##:##:##:##:##"
                },
                vin: {
                    mask: "V{13}9{4}",
                    definitions: {
                        V: {
                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                            casing: "upper"
                        }
                    },
                    clearIncomplete: !0,
                    autoUnmask: !0
                },
                ssn: {
                    mask: "999-99-9999",
                    postValidation: function postValidation1(buffer1, pos1, c1, currentResult1, opts1, maskset1, strict1) {
                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer1.join(""));
                    }
                }
            }), module1.exports = Inputmask1;
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            function _typeof1(obj1) {
                return _typeof1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof1(obj1);
            }
            var $1 = __webpack_require__1(2), window1 = __webpack_require__1(3), document1 = window1.document, ua1 = window1.navigator && window1.navigator.userAgent || "", ie1 = 0 < ua1.indexOf("MSIE ") || 0 < ua1.indexOf("Trident/"), mobile1 = "ontouchstart" in window1, iemobile1 = /iemobile/i.test(ua1), iphone1 = /iphone/i.test(ua1) && !iemobile1, keyCode1 = __webpack_require__1(0);
            module1.exports = function maskScope1(actionObj1, maskset1, opts1) {
                maskset1 = maskset1 || this.maskset, opts1 = opts1 || this.opts;
                var inputmask1 = this, el1 = this.el, isRTL1 = this.isRTL || (this.isRTL = opts1.numericInput), undoValue1, $el1, skipKeyPressEvent1 = !1, skipInputEvent1 = !1, validationEvent1 = !1, ignorable1 = !1, maxLength1, mouseEnter1 = !1, originalPlaceholder1 = void 0;
                function getMaskTemplate1(baseOnInput1, minimalPos1, includeMode1, noJit1, clearOptionalTail1) {
                    var greedy1 = opts1.greedy;
                    clearOptionalTail1 && (opts1.greedy = !1), minimalPos1 = minimalPos1 || 0;
                    var maskTemplate1 = [], ndxIntlzr1, pos1 = 0, test1, testPos1, jitRenderStatic1;
                    do {
                        if (!0 === baseOnInput1 && maskset1.validPositions[pos1]) testPos1 = clearOptionalTail1 && !0 === maskset1.validPositions[pos1].match.optionality && void 0 === maskset1.validPositions[pos1 + 1] && (!0 === maskset1.validPositions[pos1].generatedInput || maskset1.validPositions[pos1].input == opts1.skipOptionalPartCharacter && 0 < pos1) ? determineTestTemplate1(pos1, getTests1(pos1, ndxIntlzr1, pos1 - 1)) : maskset1.validPositions[pos1], test1 = testPos1.match, ndxIntlzr1 = testPos1.locator.slice(), maskTemplate1.push(!0 === includeMode1 ? testPos1.input : !1 === includeMode1 ? test1.nativeDef : getPlaceholder1(pos1, test1));
                        else {
                            testPos1 = getTestTemplate1(pos1, ndxIntlzr1, pos1 - 1), test1 = testPos1.match, ndxIntlzr1 = testPos1.locator.slice();
                            var jitMasking1 = !0 !== noJit1 && (!1 !== opts1.jitMasking ? opts1.jitMasking : test1.jit);
                            jitRenderStatic1 = jitRenderStatic1 && test1.static && test1.def !== opts1.groupSeparator && null === test1.fn || maskset1.validPositions[pos1 - 1] && test1.static && test1.def !== opts1.groupSeparator && null === test1.fn, jitRenderStatic1 || !1 === jitMasking1 || void 0 === jitMasking1 || "number" == typeof jitMasking1 && isFinite(jitMasking1) && pos1 < jitMasking1 ? maskTemplate1.push(!1 === includeMode1 ? test1.nativeDef : getPlaceholder1(pos1, test1)) : jitRenderStatic1 = !1;
                        }
                        pos1++;
                    }while ((void 0 === maxLength1 || pos1 < maxLength1) && (!0 !== test1.static || "" !== test1.def) || pos1 < minimalPos1);
                    return "" === maskTemplate1[maskTemplate1.length - 1] && maskTemplate1.pop(), !1 === includeMode1 && void 0 !== maskset1.maskLength || (maskset1.maskLength = pos1 - 1), opts1.greedy = greedy1, maskTemplate1;
                }
                function resetMaskSet1(soft1) {
                    maskset1.buffer = void 0, !0 !== soft1 && (maskset1.validPositions = {}, maskset1.p = 0);
                }
                function getLastValidPosition1(closestTo1, strict1, validPositions1) {
                    var before1 = -1, after1 = -1, valids1 = validPositions1 || maskset1.validPositions;
                    for(var posNdx1 in void 0 === closestTo1 && (closestTo1 = -1), valids1){
                        var psNdx1 = parseInt(posNdx1);
                        valids1[psNdx1] && (strict1 || !0 !== valids1[psNdx1].generatedInput) && (psNdx1 <= closestTo1 && (before1 = psNdx1), closestTo1 <= psNdx1 && (after1 = psNdx1));
                    }
                    return -1 === before1 || before1 == closestTo1 ? after1 : -1 == after1 ? before1 : closestTo1 - before1 < after1 - closestTo1 ? before1 : after1;
                }
                function getDecisionTaker1(tst1) {
                    var decisionTaker1 = tst1.locator[tst1.alternation];
                    return "string" == typeof decisionTaker1 && 0 < decisionTaker1.length && (decisionTaker1 = decisionTaker1.split(",")[0]), void 0 !== decisionTaker1 ? decisionTaker1.toString() : "";
                }
                function getLocator1(tst1, align1) {
                    var locator1 = (null != tst1.alternation ? tst1.mloc[getDecisionTaker1(tst1)] : tst1.locator).join("");
                    if ("" !== locator1) for(; locator1.length < align1;)locator1 += "0";
                    return locator1;
                }
                function determineTestTemplate1(pos1, tests1) {
                    pos1 = 0 < pos1 ? pos1 - 1 : 0;
                    for(var altTest1 = getTest1(pos1), targetLocator1 = getLocator1(altTest1), tstLocator1, closest1, bestMatch1, ndx3 = 0; ndx3 < tests1.length; ndx3++){
                        var tst1 = tests1[ndx3];
                        tstLocator1 = getLocator1(tst1, targetLocator1.length);
                        var distance1 = Math.abs(tstLocator1 - targetLocator1);
                        (void 0 === closest1 || "" !== tstLocator1 && distance1 < closest1 || bestMatch1 && !opts1.greedy && bestMatch1.match.optionality && "master" === bestMatch1.match.newBlockMarker && (!tst1.match.optionality || !tst1.match.newBlockMarker) || bestMatch1 && bestMatch1.match.optionalQuantifier && !tst1.match.optionalQuantifier) && (closest1 = distance1, bestMatch1 = tst1);
                    }
                    return bestMatch1;
                }
                function getTestTemplate1(pos1, ndxIntlzr1, tstPs1) {
                    return maskset1.validPositions[pos1] || determineTestTemplate1(pos1, getTests1(pos1, ndxIntlzr1 ? ndxIntlzr1.slice() : ndxIntlzr1, tstPs1));
                }
                function getTest1(pos1, tests1) {
                    return maskset1.validPositions[pos1] ? maskset1.validPositions[pos1] : (tests1 || getTests1(pos1))[0];
                }
                function positionCanMatchDefinition1(pos1, testDefinition1, opts1) {
                    for(var valid1 = !1, tests1 = getTests1(pos1), tndx1 = 0; tndx1 < tests1.length; tndx1++){
                        if (tests1[tndx1].match && (!(tests1[tndx1].match.nativeDef !== testDefinition1.match[opts1.shiftPositions ? "def" : "nativeDef"] || opts1.shiftPositions && testDefinition1.match.static) || tests1[tndx1].match.nativeDef === testDefinition1.match.nativeDef)) {
                            valid1 = !0;
                            break;
                        }
                        if (tests1[tndx1].match && tests1[tndx1].match.def === testDefinition1.match.nativeDef) {
                            valid1 = void 0;
                            break;
                        }
                    }
                    return !1 === valid1 && void 0 !== maskset1.jitOffset[pos1] && (valid1 = positionCanMatchDefinition1(pos1 + maskset1.jitOffset[pos1], testDefinition1, opts1)), valid1;
                }
                function getTests1(pos1, ndxIntlzr1, tstPs1) {
                    var maskTokens1 = maskset1.maskToken, testPos1 = ndxIntlzr1 ? tstPs1 : 0, ndxInitializer1 = ndxIntlzr1 ? ndxIntlzr1.slice() : [
                        0
                    ], matches1 = [], insertStop1 = !1, latestMatch1, cacheDependency1 = ndxIntlzr1 ? ndxIntlzr1.join("") : "";
                    function resolveTestFromToken1(maskToken1, ndxInitializer1, loopNdx1, quantifierRecurse1) {
                        function handleMatch1(match1, loopNdx1, quantifierRecurse1) {
                            function isFirstMatch1(latestMatch1, tokenGroup1) {
                                var firstMatch1 = 0 === $1.inArray(latestMatch1, tokenGroup1.matches);
                                return firstMatch1 || $1.each(tokenGroup1.matches, function(ndx3, match1) {
                                    if (!0 === match1.isQuantifier ? firstMatch1 = isFirstMatch1(latestMatch1, tokenGroup1.matches[ndx3 - 1]) : Object.prototype.hasOwnProperty.call(match1, "matches") && (firstMatch1 = isFirstMatch1(latestMatch1, match1)), firstMatch1) return !1;
                                }), firstMatch1;
                            }
                            function resolveNdxInitializer1(pos1, alternateNdx1, targetAlternation1) {
                                var bestMatch1, indexPos1;
                                if ((maskset1.tests[pos1] || maskset1.validPositions[pos1]) && $1.each(maskset1.tests[pos1] || [
                                    maskset1.validPositions[pos1]
                                ], function(ndx3, lmnt1) {
                                    if (lmnt1.mloc[alternateNdx1]) return bestMatch1 = lmnt1, !1;
                                    var alternation1 = void 0 !== targetAlternation1 ? targetAlternation1 : lmnt1.alternation, ndxPos1 = void 0 !== lmnt1.locator[alternation1] ? lmnt1.locator[alternation1].toString().indexOf(alternateNdx1) : -1;
                                    (void 0 === indexPos1 || ndxPos1 < indexPos1) && -1 !== ndxPos1 && (bestMatch1 = lmnt1, indexPos1 = ndxPos1);
                                }), bestMatch1) {
                                    var bestMatchAltIndex1 = bestMatch1.locator[bestMatch1.alternation], locator1 = bestMatch1.mloc[alternateNdx1] || bestMatch1.mloc[bestMatchAltIndex1] || bestMatch1.locator;
                                    return locator1.slice((void 0 !== targetAlternation1 ? targetAlternation1 : bestMatch1.alternation) + 1);
                                }
                                return void 0 !== targetAlternation1 ? resolveNdxInitializer1(pos1, alternateNdx1) : void 0;
                            }
                            function isSubsetOf1(source1, target1) {
                                function expand1(pattern1) {
                                    for(var expanded1 = [], start1 = -1, end1, i1 = 0, l1 = pattern1.length; i1 < l1; i1++)if ("-" === pattern1.charAt(i1)) for(end1 = pattern1.charCodeAt(i1 + 1); ++start1 < end1;)expanded1.push(String.fromCharCode(start1));
                                    else start1 = pattern1.charCodeAt(i1), expanded1.push(pattern1.charAt(i1));
                                    return expanded1.join("");
                                }
                                return source1.match.def === target1.match.nativeDef || !(!(opts1.regex || source1.match.fn instanceof RegExp && target1.match.fn instanceof RegExp) || !0 === source1.match.static || !0 === target1.match.static) && -1 !== expand1(target1.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand1(source1.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function staticCanMatchDefinition1(source1, target1) {
                                return !0 === source1.match.static && !0 !== target1.match.static && target1.match.fn.test(source1.match.def, maskset1, pos1, !1, opts1, !1);
                            }
                            function setMergeLocators1(targetMatch1, altMatch1) {
                                var alternationNdx1 = targetMatch1.alternation, shouldMerge1 = void 0 === altMatch1 || alternationNdx1 === altMatch1.alternation && -1 === targetMatch1.locator[alternationNdx1].toString().indexOf(altMatch1.locator[alternationNdx1]);
                                if (!shouldMerge1 && alternationNdx1 > altMatch1.alternation) {
                                    for(var i1 = altMatch1.alternation; i1 < alternationNdx1; i1++)if (targetMatch1.locator[i1] !== altMatch1.locator[i1]) {
                                        alternationNdx1 = i1, shouldMerge1 = !0;
                                        break;
                                    }
                                }
                                if (shouldMerge1) {
                                    targetMatch1.mloc = targetMatch1.mloc || {};
                                    var locNdx1 = targetMatch1.locator[alternationNdx1];
                                    if (void 0 !== locNdx1) {
                                        if ("string" == typeof locNdx1 && (locNdx1 = locNdx1.split(",")[0]), void 0 === targetMatch1.mloc[locNdx1] && (targetMatch1.mloc[locNdx1] = targetMatch1.locator.slice()), void 0 !== altMatch1) {
                                            for(var ndx3 in altMatch1.mloc)"string" == typeof ndx3 && (ndx3 = ndx3.split(",")[0]), void 0 === targetMatch1.mloc[ndx3] && (targetMatch1.mloc[ndx3] = altMatch1.mloc[ndx3]);
                                            targetMatch1.locator[alternationNdx1] = Object.keys(targetMatch1.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    targetMatch1.alternation = void 0;
                                }
                                return !1;
                            }
                            if (testPos1 > opts1._maxTestPos && void 0 !== quantifierRecurse1) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset1.mask;
                            if (testPos1 === pos1 && void 0 === match1.matches) return matches1.push({
                                match: match1,
                                locator: loopNdx1.reverse(),
                                cd: cacheDependency1,
                                mloc: {}
                            }), !0;
                            if (void 0 !== match1.matches) {
                                if (match1.isGroup && quantifierRecurse1 !== match1) {
                                    if (match1 = handleMatch1(maskToken1.matches[$1.inArray(match1, maskToken1.matches) + 1], loopNdx1, quantifierRecurse1), match1) return !0;
                                } else if (match1.isOptional) {
                                    var optionalToken1 = match1, mtchsNdx1 = matches1.length;
                                    if (match1 = resolveTestFromToken1(match1, ndxInitializer1, loopNdx1, quantifierRecurse1), match1) {
                                        if ($1.each(matches1, function(ndx3, mtch1) {
                                            mtchsNdx1 <= ndx3 && (mtch1.match.optionality = !0);
                                        }), latestMatch1 = matches1[matches1.length - 1].match, void 0 !== quantifierRecurse1 || !isFirstMatch1(latestMatch1, optionalToken1)) return !0;
                                        insertStop1 = !0, testPos1 = pos1;
                                    }
                                } else if (match1.isAlternator) {
                                    var alternateToken1 = match1, malternateMatches1 = [], maltMatches1, currentMatches1 = matches1.slice(), loopNdxCnt1 = loopNdx1.length, altIndex1 = 0 < ndxInitializer1.length ? ndxInitializer1.shift() : -1;
                                    if (-1 === altIndex1 || "string" == typeof altIndex1) {
                                        var currentPos1 = testPos1, ndxInitializerClone1 = ndxInitializer1.slice(), altIndexArr1 = [], amndx1;
                                        if ("string" == typeof altIndex1) altIndexArr1 = altIndex1.split(",");
                                        else for(amndx1 = 0; amndx1 < alternateToken1.matches.length; amndx1++)altIndexArr1.push(amndx1.toString());
                                        if (void 0 !== maskset1.excludes[pos1]) {
                                            for(var altIndexArrClone1 = altIndexArr1.slice(), i1 = 0, el1 = maskset1.excludes[pos1].length; i1 < el1; i1++){
                                                var excludeSet1 = maskset1.excludes[pos1][i1].toString().split(":");
                                                loopNdx1.length == excludeSet1[1] && altIndexArr1.splice(altIndexArr1.indexOf(excludeSet1[0]), 1);
                                            }
                                            0 === altIndexArr1.length && (delete maskset1.excludes[pos1], altIndexArr1 = altIndexArrClone1);
                                        }
                                        (!0 === opts1.keepStatic || isFinite(parseInt(opts1.keepStatic)) && currentPos1 >= opts1.keepStatic) && (altIndexArr1 = altIndexArr1.slice(0, 1));
                                        for(var unMatchedAlternation1 = !1, ndx3 = 0; ndx3 < altIndexArr1.length; ndx3++){
                                            amndx1 = parseInt(altIndexArr1[ndx3]), matches1 = [], ndxInitializer1 = "string" == typeof altIndex1 && resolveNdxInitializer1(testPos1, amndx1, loopNdxCnt1) || ndxInitializerClone1.slice(), alternateToken1.matches[amndx1] && handleMatch1(alternateToken1.matches[amndx1], [
                                                amndx1
                                            ].concat(loopNdx1), quantifierRecurse1) ? match1 = !0 : 0 === ndx3 && (unMatchedAlternation1 = !0), maltMatches1 = matches1.slice(), testPos1 = currentPos1, matches1 = [];
                                            for(var ndx11 = 0; ndx11 < maltMatches1.length; ndx11++){
                                                var altMatch1 = maltMatches1[ndx11], dropMatch1 = !1;
                                                altMatch1.match.jit = altMatch1.match.jit || unMatchedAlternation1, altMatch1.alternation = altMatch1.alternation || loopNdxCnt1, setMergeLocators1(altMatch1);
                                                for(var ndx21 = 0; ndx21 < malternateMatches1.length; ndx21++){
                                                    var altMatch21 = malternateMatches1[ndx21];
                                                    if ("string" != typeof altIndex1 || void 0 !== altMatch1.alternation && -1 !== $1.inArray(altMatch1.locator[altMatch1.alternation].toString(), altIndexArr1)) {
                                                        if (altMatch1.match.nativeDef === altMatch21.match.nativeDef) {
                                                            dropMatch1 = !0, setMergeLocators1(altMatch21, altMatch1);
                                                            break;
                                                        }
                                                        if (isSubsetOf1(altMatch1, altMatch21)) {
                                                            setMergeLocators1(altMatch1, altMatch21) && (dropMatch1 = !0, malternateMatches1.splice(malternateMatches1.indexOf(altMatch21), 0, altMatch1));
                                                            break;
                                                        }
                                                        if (isSubsetOf1(altMatch21, altMatch1)) {
                                                            setMergeLocators1(altMatch21, altMatch1);
                                                            break;
                                                        }
                                                        if (staticCanMatchDefinition1(altMatch1, altMatch21)) {
                                                            setMergeLocators1(altMatch1, altMatch21) && (dropMatch1 = !0, malternateMatches1.splice(malternateMatches1.indexOf(altMatch21), 0, altMatch1));
                                                            break;
                                                        }
                                                    }
                                                }
                                                dropMatch1 || malternateMatches1.push(altMatch1);
                                            }
                                        }
                                        matches1 = currentMatches1.concat(malternateMatches1), testPos1 = pos1, insertStop1 = 0 < matches1.length, match1 = 0 < malternateMatches1.length, ndxInitializer1 = ndxInitializerClone1.slice();
                                    } else match1 = handleMatch1(alternateToken1.matches[altIndex1] || maskToken1.matches[altIndex1], [
                                        altIndex1
                                    ].concat(loopNdx1), quantifierRecurse1);
                                    if (match1) return !0;
                                } else if (match1.isQuantifier && quantifierRecurse1 !== maskToken1.matches[$1.inArray(match1, maskToken1.matches) - 1]) for(var qt1 = match1, qndx1 = 0 < ndxInitializer1.length ? ndxInitializer1.shift() : 0; qndx1 < (isNaN(qt1.quantifier.max) ? qndx1 + 1 : qt1.quantifier.max) && testPos1 <= pos1; qndx1++){
                                    var tokenGroup1 = maskToken1.matches[$1.inArray(qt1, maskToken1.matches) - 1];
                                    if (match1 = handleMatch1(tokenGroup1, [
                                        qndx1
                                    ].concat(loopNdx1), tokenGroup1), match1) {
                                        if (latestMatch1 = matches1[matches1.length - 1].match, latestMatch1.optionalQuantifier = qndx1 >= qt1.quantifier.min, latestMatch1.jit = (qndx1 || 1) * tokenGroup1.matches.indexOf(latestMatch1) >= qt1.quantifier.jit, latestMatch1.optionalQuantifier && isFirstMatch1(latestMatch1, tokenGroup1)) {
                                            insertStop1 = !0, testPos1 = pos1;
                                            break;
                                        }
                                        return latestMatch1.jit && (maskset1.jitOffset[pos1] = tokenGroup1.matches.length - tokenGroup1.matches.indexOf(latestMatch1)), !0;
                                    }
                                }
                                else if (match1 = resolveTestFromToken1(match1, ndxInitializer1, loopNdx1, quantifierRecurse1), match1) return !0;
                            } else testPos1++;
                        }
                        for(var tndx1 = 0 < ndxInitializer1.length ? ndxInitializer1.shift() : 0; tndx1 < maskToken1.matches.length; tndx1++)if (!0 !== maskToken1.matches[tndx1].isQuantifier) {
                            var match1 = handleMatch1(maskToken1.matches[tndx1], [
                                tndx1
                            ].concat(loopNdx1), quantifierRecurse1);
                            if (match1 && testPos1 === pos1) return match1;
                            if (pos1 < testPos1) break;
                        }
                    }
                    function mergeLocators1(pos1, tests1) {
                        var locator1 = [];
                        return $1.isArray(tests1) || (tests1 = [
                            tests1
                        ]), 0 < tests1.length && (void 0 === tests1[0].alternation || !0 === opts1.keepStatic ? (locator1 = determineTestTemplate1(pos1, tests1.slice()).locator.slice(), 0 === locator1.length && (locator1 = tests1[0].locator.slice())) : $1.each(tests1, function(ndx3, tst1) {
                            if ("" !== tst1.def) {
                                if (0 === locator1.length) locator1 = tst1.locator.slice();
                                else for(var i1 = 0; i1 < locator1.length; i1++)tst1.locator[i1] && -1 === locator1[i1].toString().indexOf(tst1.locator[i1]) && (locator1[i1] += "," + tst1.locator[i1]);
                            }
                        })), locator1;
                    }
                    if (-1 < pos1 && (void 0 === maxLength1 || pos1 < maxLength1)) {
                        if (void 0 === ndxIntlzr1) {
                            for(var previousPos1 = pos1 - 1, test1; void 0 === (test1 = maskset1.validPositions[previousPos1] || maskset1.tests[previousPos1]) && -1 < previousPos1;)previousPos1--;
                            void 0 !== test1 && -1 < previousPos1 && (ndxInitializer1 = mergeLocators1(previousPos1, test1), cacheDependency1 = ndxInitializer1.join(""), testPos1 = previousPos1);
                        }
                        if (maskset1.tests[pos1] && maskset1.tests[pos1][0].cd === cacheDependency1) return maskset1.tests[pos1];
                        for(var mtndx1 = ndxInitializer1.shift(); mtndx1 < maskTokens1.length; mtndx1++){
                            var match1 = resolveTestFromToken1(maskTokens1[mtndx1], ndxInitializer1, [
                                mtndx1
                            ]);
                            if (match1 && testPos1 === pos1 || pos1 < testPos1) break;
                        }
                    }
                    return 0 !== matches1.length && !insertStop1 || matches1.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: cacheDependency1
                    }), void 0 !== ndxIntlzr1 && maskset1.tests[pos1] ? $1.extend(!0, [], matches1) : (maskset1.tests[pos1] = $1.extend(!0, [], matches1), maskset1.tests[pos1]);
                }
                function getBufferTemplate1() {
                    return void 0 === maskset1._buffer && (maskset1._buffer = getMaskTemplate1(!1, 1), void 0 === maskset1.buffer && (maskset1.buffer = maskset1._buffer.slice())), maskset1._buffer;
                }
                function getBuffer1(noCache1) {
                    return void 0 !== maskset1.buffer && !0 !== noCache1 || (maskset1.buffer = getMaskTemplate1(!0, getLastValidPosition1(), !0), void 0 === maskset1._buffer && (maskset1._buffer = maskset1.buffer.slice())), maskset1.buffer;
                }
                function refreshFromBuffer1(start1, end1, buffer1) {
                    var i1, p1, skipOptionalPartCharacter1 = opts1.skipOptionalPartCharacter, bffr1 = isRTL1 ? buffer1.slice().reverse() : buffer1;
                    if (opts1.skipOptionalPartCharacter = "", !0 === start1) resetMaskSet1(), maskset1.tests = {}, start1 = 0, end1 = buffer1.length, p1 = determineNewCaretPosition1({
                        begin: 0,
                        end: 0
                    }, !1).begin;
                    else {
                        for(i1 = start1; i1 < end1; i1++)delete maskset1.validPositions[i1];
                        p1 = start1;
                    }
                    var keypress1 = new $1.Event("keypress");
                    for(i1 = start1; i1 < end1; i1++){
                        keypress1.which = bffr1[i1].toString().charCodeAt(0), ignorable1 = !1;
                        var valResult1 = EventHandlers1.keypressEvent.call(el1, keypress1, !0, !1, !1, p1);
                        !1 !== valResult1 && (p1 = valResult1.forwardPosition);
                    }
                    opts1.skipOptionalPartCharacter = skipOptionalPartCharacter1;
                }
                function casing1(elem1, test1, pos1) {
                    switch(opts1.casing || test1.casing){
                        case "upper":
                            elem1 = elem1.toUpperCase();
                            break;
                        case "lower":
                            elem1 = elem1.toLowerCase();
                            break;
                        case "title":
                            var posBefore1 = maskset1.validPositions[pos1 - 1];
                            elem1 = 0 === pos1 || posBefore1 && posBefore1.input === String.fromCharCode(keyCode1.SPACE) ? elem1.toUpperCase() : elem1.toLowerCase();
                            break;
                        default:
                            if ($1.isFunction(opts1.casing)) {
                                var args1 = Array.prototype.slice.call(arguments);
                                args1.push(maskset1.validPositions), elem1 = opts1.casing.apply(this, args1);
                            }
                    }
                    return elem1;
                }
                function checkAlternationMatch1(altArr11, altArr21, na1) {
                    for(var altArrC1 = opts1.greedy ? altArr21 : altArr21.slice(0, 1), isMatch1 = !1, naArr1 = void 0 !== na1 ? na1.split(",") : [], naNdx1, i1 = 0; i1 < naArr1.length; i1++)-1 !== (naNdx1 = altArr11.indexOf(naArr1[i1])) && altArr11.splice(naNdx1, 1);
                    for(var alndx1 = 0; alndx1 < altArr11.length; alndx1++)if (-1 !== $1.inArray(altArr11[alndx1], altArrC1)) {
                        isMatch1 = !0;
                        break;
                    }
                    return isMatch1;
                }
                function alternate1(maskPos1, c1, strict1, fromIsValid1, rAltPos1, selection1) {
                    var validPsClone1 = $1.extend(!0, {}, maskset1.validPositions), tstClone1 = $1.extend(!0, {}, maskset1.tests), lastAlt1, alternation1, isValidRslt1 = !1, returnRslt1 = !1, altPos1, prevAltPos1, i1, validPos1, decisionPos1, lAltPos1 = void 0 !== rAltPos1 ? rAltPos1 : getLastValidPosition1(), nextPos1, input1, begin1, end1;
                    if (selection1 && (begin1 = selection1.begin, end1 = selection1.end, selection1.begin > selection1.end && (begin1 = selection1.end, end1 = selection1.begin)), -1 === lAltPos1 && void 0 === rAltPos1) lastAlt1 = 0, prevAltPos1 = getTest1(lastAlt1), alternation1 = prevAltPos1.alternation;
                    else for(; 0 <= lAltPos1; lAltPos1--)if (altPos1 = maskset1.validPositions[lAltPos1], altPos1 && void 0 !== altPos1.alternation) {
                        if (prevAltPos1 && prevAltPos1.locator[altPos1.alternation] !== altPos1.locator[altPos1.alternation]) break;
                        lastAlt1 = lAltPos1, alternation1 = maskset1.validPositions[lastAlt1].alternation, prevAltPos1 = altPos1;
                    }
                    if (void 0 !== alternation1) {
                        decisionPos1 = parseInt(lastAlt1), maskset1.excludes[decisionPos1] = maskset1.excludes[decisionPos1] || [], !0 !== maskPos1 && maskset1.excludes[decisionPos1].push(getDecisionTaker1(prevAltPos1) + ":" + prevAltPos1.alternation);
                        var validInputs1 = [], resultPos1 = -1;
                        for(i1 = decisionPos1; i1 < getLastValidPosition1(void 0, !0) + 1; i1++)-1 === resultPos1 && maskPos1 <= i1 && void 0 !== c1 && (validInputs1.push(c1), resultPos1 = validInputs1.length - 1), validPos1 = maskset1.validPositions[i1], validPos1 && !0 !== validPos1.generatedInput && (void 0 === selection1 || i1 < begin1 || end1 <= i1) && validInputs1.push(validPos1.input), delete maskset1.validPositions[i1];
                        for(-1 === resultPos1 && void 0 !== c1 && (validInputs1.push(c1), resultPos1 = validInputs1.length - 1); void 0 !== maskset1.excludes[decisionPos1] && maskset1.excludes[decisionPos1].length < 10;){
                            for(maskset1.tests = {}, resetMaskSet1(!0), isValidRslt1 = !0, i1 = 0; i1 < validInputs1.length && (nextPos1 = isValidRslt1.caret || getLastValidPosition1(void 0, !0) + 1, input1 = validInputs1[i1], isValidRslt1 = isValid1(nextPos1, input1, !1, fromIsValid1, !0)); i1++)i1 === resultPos1 && (returnRslt1 = isValidRslt1), 1 == maskPos1 && isValidRslt1 && (returnRslt1 = {
                                caretPos: i1
                            });
                            if (isValidRslt1) break;
                            if (resetMaskSet1(), prevAltPos1 = getTest1(decisionPos1), maskset1.validPositions = $1.extend(!0, {}, validPsClone1), maskset1.tests = $1.extend(!0, {}, tstClone1), !maskset1.excludes[decisionPos1]) {
                                returnRslt1 = alternate1(maskPos1, c1, strict1, fromIsValid1, decisionPos1 - 1, selection1);
                                break;
                            }
                            var decisionTaker1 = getDecisionTaker1(prevAltPos1);
                            if (-1 !== maskset1.excludes[decisionPos1].indexOf(decisionTaker1 + ":" + prevAltPos1.alternation)) {
                                returnRslt1 = alternate1(maskPos1, c1, strict1, fromIsValid1, decisionPos1 - 1, selection1);
                                break;
                            }
                            for(maskset1.excludes[decisionPos1].push(decisionTaker1 + ":" + prevAltPos1.alternation), i1 = decisionPos1; i1 < getLastValidPosition1(void 0, !0) + 1; i1++)delete maskset1.validPositions[i1];
                        }
                    }
                    return returnRslt1 && !1 === opts1.keepStatic || delete maskset1.excludes[decisionPos1], returnRslt1;
                }
                function isValid1(pos1, c1, strict1, fromIsValid1, fromAlternate1, validateOnly1) {
                    function isSelection1(posObj1) {
                        return isRTL1 ? 1 < posObj1.begin - posObj1.end || posObj1.begin - posObj1.end == 1 : 1 < posObj1.end - posObj1.begin || posObj1.end - posObj1.begin == 1;
                    }
                    strict1 = !0 === strict1;
                    var maskPos1 = pos1;
                    function processCommandObject1(commandObj1) {
                        if (void 0 !== commandObj1) {
                            if (void 0 !== commandObj1.remove && ($1.isArray(commandObj1.remove) || (commandObj1.remove = [
                                commandObj1.remove
                            ]), $1.each(commandObj1.remove.sort(function(a1, b1) {
                                return b1.pos - a1.pos;
                            }), function(ndx3, lmnt1) {
                                revalidateMask1({
                                    begin: lmnt1,
                                    end: lmnt1 + 1
                                });
                            }), commandObj1.remove = void 0), void 0 !== commandObj1.insert && ($1.isArray(commandObj1.insert) || (commandObj1.insert = [
                                commandObj1.insert
                            ]), $1.each(commandObj1.insert.sort(function(a1, b1) {
                                return a1.pos - b1.pos;
                            }), function(ndx3, lmnt1) {
                                "" !== lmnt1.c && isValid1(lmnt1.pos, lmnt1.c, void 0 === lmnt1.strict || lmnt1.strict, void 0 !== lmnt1.fromIsValid ? lmnt1.fromIsValid : fromIsValid1);
                            }), commandObj1.insert = void 0), commandObj1.refreshFromBuffer && commandObj1.buffer) {
                                var refresh1 = commandObj1.refreshFromBuffer;
                                refreshFromBuffer1(!0 === refresh1 ? refresh1 : refresh1.start, refresh1.end, commandObj1.buffer), commandObj1.refreshFromBuffer = void 0;
                            }
                            void 0 !== commandObj1.rewritePosition && (maskPos1 = commandObj1.rewritePosition, commandObj1 = !0);
                        }
                        return commandObj1;
                    }
                    function _isValid1(position1, c1, strict1) {
                        var rslt1 = !1;
                        return $1.each(getTests1(position1), function(ndx3, tst1) {
                            var test1 = tst1.match;
                            if (getBuffer1(!0), rslt1 = null != test1.fn ? test1.fn.test(c1, maskset1, position1, strict1, opts1, isSelection1(pos1)) : (c1 === test1.def || c1 === opts1.skipOptionalPartCharacter) && "" !== test1.def && {
                                c: getPlaceholder1(position1, test1, !0) || test1.def,
                                pos: position1
                            }, !1 !== rslt1) {
                                var elem1 = void 0 !== rslt1.c ? rslt1.c : c1, validatedPos1 = position1;
                                return elem1 = elem1 === opts1.skipOptionalPartCharacter && !0 === test1.static ? getPlaceholder1(position1, test1, !0) || test1.def : elem1, rslt1 = processCommandObject1(rslt1), !0 !== rslt1 && void 0 !== rslt1.pos && rslt1.pos !== position1 && (validatedPos1 = rslt1.pos), !0 !== rslt1 && void 0 === rslt1.pos && void 0 === rslt1.c ? !1 : (!1 === revalidateMask1(pos1, $1.extend({}, tst1, {
                                    input: casing1(elem1, test1, validatedPos1)
                                }), fromIsValid1, validatedPos1) && (rslt1 = !1), !1);
                            }
                        }), rslt1;
                    }
                    void 0 !== pos1.begin && (maskPos1 = isRTL1 ? pos1.end : pos1.begin);
                    var result1 = !0, positionsClone1 = $1.extend(!0, {}, maskset1.validPositions);
                    if (!1 === opts1.keepStatic && void 0 !== maskset1.excludes[maskPos1] && !0 !== fromAlternate1 && !0 !== fromIsValid1) for(var i1 = maskPos1; i1 < (isRTL1 ? pos1.begin : pos1.end); i1++)void 0 !== maskset1.excludes[i1] && (maskset1.excludes[i1] = void 0, delete maskset1.tests[i1]);
                    if ($1.isFunction(opts1.preValidation) && !0 !== fromIsValid1 && !0 !== validateOnly1 && (result1 = opts1.preValidation.call(el1, getBuffer1(), maskPos1, c1, isSelection1(pos1), opts1, maskset1, pos1, strict1 || fromAlternate1), result1 = processCommandObject1(result1)), !0 === result1) {
                        if (void 0 === maxLength1 || maskPos1 < maxLength1) {
                            if (result1 = _isValid1(maskPos1, c1, strict1), (!strict1 || !0 === fromIsValid1) && !1 === result1 && !0 !== validateOnly1) {
                                var currentPosValid1 = maskset1.validPositions[maskPos1];
                                if (!currentPosValid1 || !0 !== currentPosValid1.match.static || currentPosValid1.match.def !== c1 && c1 !== opts1.skipOptionalPartCharacter) {
                                    if (opts1.insertMode || void 0 === maskset1.validPositions[seekNext1(maskPos1)] || pos1.end > maskPos1) {
                                        var skip1 = !1;
                                        if (maskset1.jitOffset[maskPos1] && void 0 === maskset1.validPositions[seekNext1(maskPos1)] && (result1 = isValid1(maskPos1 + maskset1.jitOffset[maskPos1], c1, !0), !1 !== result1 && (!0 !== fromAlternate1 && (result1.caret = maskPos1), skip1 = !0)), pos1.end > maskPos1 && (maskset1.validPositions[maskPos1] = void 0), !skip1 && !isMask1(maskPos1, opts1.keepStatic)) {
                                            for(var nPos1 = maskPos1 + 1, snPos1 = seekNext1(maskPos1); nPos1 <= snPos1; nPos1++)if (result1 = _isValid1(nPos1, c1, strict1), !1 !== result1) {
                                                result1 = trackbackPositions1(maskPos1, void 0 !== result1.pos ? result1.pos : nPos1) || result1, maskPos1 = nPos1;
                                                break;
                                            }
                                        }
                                    }
                                } else result1 = {
                                    caret: seekNext1(maskPos1)
                                };
                            }
                        } else result1 = !1;
                        !1 !== result1 || !opts1.keepStatic || !isComplete1(getBuffer1()) && 0 !== maskPos1 || strict1 || !0 === fromAlternate1 ? isSelection1(pos1) && maskset1.tests[maskPos1] && 1 < maskset1.tests[maskPos1].length && opts1.keepStatic && !strict1 && !0 !== fromAlternate1 && (result1 = alternate1(!0)) : result1 = alternate1(maskPos1, c1, strict1, fromIsValid1, void 0, pos1), !0 === result1 && (result1 = {
                            pos: maskPos1
                        });
                    }
                    if ($1.isFunction(opts1.postValidation) && !0 !== fromIsValid1 && !0 !== validateOnly1) {
                        var postResult1 = opts1.postValidation.call(el1, getBuffer1(!0), void 0 !== pos1.begin ? isRTL1 ? pos1.end : pos1.begin : pos1, c1, result1, opts1, maskset1, strict1);
                        void 0 !== postResult1 && (result1 = !0 === postResult1 ? result1 : postResult1);
                    }
                    result1 && void 0 === result1.pos && (result1.pos = maskPos1), !1 === result1 || !0 === validateOnly1 ? (resetMaskSet1(!0), maskset1.validPositions = $1.extend(!0, {}, positionsClone1)) : trackbackPositions1(void 0, maskPos1, !0);
                    var endResult1 = processCommandObject1(result1);
                    return endResult1;
                }
                function trackbackPositions1(originalPos1, newPos1, fillOnly1) {
                    if (void 0 === originalPos1) for(originalPos1 = newPos1 - 1; 0 < originalPos1 && !maskset1.validPositions[originalPos1]; originalPos1--);
                    for(var ps1 = originalPos1; ps1 < newPos1; ps1++)if (void 0 === maskset1.validPositions[ps1] && !isMask1(ps1, !0)) {
                        var vp1 = 0 == ps1 ? getTest1(ps1) : maskset1.validPositions[ps1 - 1];
                        if (vp1) {
                            var tests1 = getTests1(ps1).slice();
                            "" === tests1[tests1.length - 1].match.def && tests1.pop();
                            var bestMatch1 = determineTestTemplate1(ps1, tests1), np1;
                            if (bestMatch1 && (!0 !== bestMatch1.match.jit || "master" === bestMatch1.match.newBlockMarker && (np1 = maskset1.validPositions[ps1 + 1]) && !0 === np1.match.optionalQuantifier) && (bestMatch1 = $1.extend({}, bestMatch1, {
                                input: getPlaceholder1(ps1, bestMatch1.match, !0) || bestMatch1.match.def
                            }), bestMatch1.generatedInput = !0, revalidateMask1(ps1, bestMatch1, !0), !0 !== fillOnly1)) {
                                var cvpInput1 = maskset1.validPositions[newPos1].input;
                                return maskset1.validPositions[newPos1] = void 0, isValid1(newPos1, cvpInput1, !0, !0);
                            }
                        }
                    }
                }
                function revalidateMask1(pos1, validTest1, fromIsValid1, validatedPos1) {
                    function IsEnclosedStatic1(pos1, valids1, selection1) {
                        var posMatch1 = valids1[pos1];
                        if (void 0 === posMatch1 || !0 !== posMatch1.match.static || !0 === posMatch1.match.optionality || void 0 !== valids1[0] && void 0 !== valids1[0].alternation) return !1;
                        var prevMatch1 = selection1.begin <= pos1 - 1 ? valids1[pos1 - 1] && !0 === valids1[pos1 - 1].match.static && valids1[pos1 - 1] : valids1[pos1 - 1], nextMatch1 = selection1.end > pos1 + 1 ? valids1[pos1 + 1] && !0 === valids1[pos1 + 1].match.static && valids1[pos1 + 1] : valids1[pos1 + 1];
                        return prevMatch1 && nextMatch1;
                    }
                    var offset1 = 0, begin1 = void 0 !== pos1.begin ? pos1.begin : pos1, end1 = void 0 !== pos1.end ? pos1.end : pos1;
                    if (pos1.begin > pos1.end && (begin1 = pos1.end, end1 = pos1.begin), validatedPos1 = void 0 !== validatedPos1 ? validatedPos1 : begin1, begin1 !== end1 || opts1.insertMode && void 0 !== maskset1.validPositions[validatedPos1] && void 0 === fromIsValid1 || void 0 === validTest1) {
                        var positionsClone1 = $1.extend(!0, {}, maskset1.validPositions), lvp1 = getLastValidPosition1(void 0, !0), i1;
                        for(maskset1.p = begin1, i1 = lvp1; begin1 <= i1; i1--)delete maskset1.validPositions[i1], void 0 === validTest1 && delete maskset1.tests[i1 + 1];
                        var valid1 = !0, j1 = validatedPos1, posMatch1 = j1, t1, canMatch1;
                        for(i1 = j1, validTest1 && (maskset1.validPositions[validatedPos1] = $1.extend(!0, {}, validTest1), posMatch1++, j1++, begin1 < end1 && i1++); i1 <= lvp1; i1++){
                            if (void 0 !== (t1 = positionsClone1[i1]) && !0 !== t1.generatedInput && (end1 <= i1 || begin1 <= i1 && IsEnclosedStatic1(i1, positionsClone1, {
                                begin: begin1,
                                end: end1
                            }))) {
                                for(; "" !== getTest1(posMatch1).match.def;){
                                    if (!1 !== (canMatch1 = positionCanMatchDefinition1(posMatch1, t1, opts1)) || "+" === t1.match.def) {
                                        "+" === t1.match.def && getBuffer1(!0);
                                        var result1 = isValid1(posMatch1, t1.input, "+" !== t1.match.def, "+" !== t1.match.def);
                                        if (valid1 = !1 !== result1, j1 = (result1.pos || posMatch1) + 1, !valid1 && canMatch1) break;
                                    } else valid1 = !1;
                                    if (valid1) {
                                        void 0 === validTest1 && t1.match.static && i1 === pos1.begin && offset1++;
                                        break;
                                    }
                                    if (!valid1 && posMatch1 > maskset1.maskLength) break;
                                    posMatch1++;
                                }
                                "" == getTest1(posMatch1).match.def && (valid1 = !1), posMatch1 = j1;
                            }
                            if (!valid1) break;
                        }
                        if (!valid1) return maskset1.validPositions = $1.extend(!0, {}, positionsClone1), resetMaskSet1(!0), !1;
                    } else validTest1 && getTest1(validatedPos1).match.cd === validTest1.match.cd && (maskset1.validPositions[validatedPos1] = $1.extend(!0, {}, validTest1));
                    return resetMaskSet1(!0), offset1;
                }
                function isMask1(pos1, strict1, fuzzy1) {
                    var test1 = getTestTemplate1(pos1).match;
                    if ("" === test1.def && (test1 = getTest1(pos1).match), !0 !== test1.static) return test1.fn;
                    if (!0 === fuzzy1 && void 0 !== maskset1.validPositions[pos1] && !0 !== maskset1.validPositions[pos1].generatedInput) return !0;
                    if (!0 !== strict1 && -1 < pos1) {
                        if (fuzzy1) {
                            var tests1 = getTests1(pos1);
                            return tests1.length > 1 + ("" === tests1[tests1.length - 1].match.def ? 1 : 0);
                        }
                        var testTemplate1 = determineTestTemplate1(pos1, getTests1(pos1)), testPlaceHolder1 = getPlaceholder1(pos1, testTemplate1.match);
                        return testTemplate1.match.def !== testPlaceHolder1;
                    }
                    return !1;
                }
                function seekNext1(pos1, newBlock1, fuzzy1) {
                    void 0 === fuzzy1 && (fuzzy1 = !0);
                    for(var position1 = pos1 + 1; "" !== getTest1(position1).match.def && (!0 === newBlock1 && (!0 !== getTest1(position1).match.newBlockMarker || !isMask1(position1, void 0, !0)) || !0 !== newBlock1 && !isMask1(position1, void 0, fuzzy1));)position1++;
                    return position1;
                }
                function seekPrevious1(pos1, newBlock1) {
                    var position1 = pos1, tests1;
                    if (position1 <= 0) return 0;
                    for(; 0 < --position1 && (!0 === newBlock1 && !0 !== getTest1(position1).match.newBlockMarker || !0 !== newBlock1 && !isMask1(position1, void 0, !0) && (tests1 = getTests1(position1), tests1.length < 2 || 2 === tests1.length && "" === tests1[1].match.def)););
                    return position1;
                }
                function writeBuffer1(input1, buffer1, caretPos1, event1, triggerEvents1) {
                    if (event1 && $1.isFunction(opts1.onBeforeWrite)) {
                        var result1 = opts1.onBeforeWrite.call(inputmask1, event1, buffer1, caretPos1, opts1);
                        if (result1) {
                            if (result1.refreshFromBuffer) {
                                var refresh1 = result1.refreshFromBuffer;
                                refreshFromBuffer1(!0 === refresh1 ? refresh1 : refresh1.start, refresh1.end, result1.buffer || buffer1), buffer1 = getBuffer1(!0);
                            }
                            void 0 !== caretPos1 && (caretPos1 = void 0 !== result1.caret ? result1.caret : caretPos1);
                        }
                    }
                    if (void 0 !== input1 && (input1.inputmask._valueSet(buffer1.join("")), void 0 === caretPos1 || void 0 !== event1 && "blur" === event1.type || caret1(input1, caretPos1, void 0, void 0, void 0 !== event1 && "keydown" === event1.type && (event1.keyCode === keyCode1.DELETE || event1.keyCode === keyCode1.BACKSPACE)), !0 === triggerEvents1)) {
                        var $input1 = $1(input1), nptVal1 = input1.inputmask._valueGet();
                        skipInputEvent1 = !0, $input1.trigger("input"), setTimeout(function() {
                            nptVal1 === getBufferTemplate1().join("") ? $input1.trigger("cleared") : !0 === isComplete1(buffer1) && $input1.trigger("complete");
                        }, 0);
                    }
                }
                function getPlaceholder1(pos1, test1, returnPL1) {
                    if (test1 = test1 || getTest1(pos1).match, void 0 !== test1.placeholder || !0 === returnPL1) return $1.isFunction(test1.placeholder) ? test1.placeholder(opts1) : test1.placeholder;
                    if (!0 !== test1.static) return opts1.placeholder.charAt(pos1 % opts1.placeholder.length);
                    if (-1 < pos1 && void 0 === maskset1.validPositions[pos1]) {
                        var tests1 = getTests1(pos1), staticAlternations1 = [], prevTest1;
                        if (tests1.length > 1 + ("" === tests1[tests1.length - 1].match.def ? 1 : 0)) {
                            for(var i1 = 0; i1 < tests1.length; i1++)if ("" !== tests1[i1].match.def && !0 !== tests1[i1].match.optionality && !0 !== tests1[i1].match.optionalQuantifier && (!0 === tests1[i1].match.static || void 0 === prevTest1 || !1 !== tests1[i1].match.fn.test(prevTest1.match.def, maskset1, pos1, !0, opts1)) && (staticAlternations1.push(tests1[i1]), !0 === tests1[i1].match.static && (prevTest1 = tests1[i1]), 1 < staticAlternations1.length && /[0-9a-bA-Z]/.test(staticAlternations1[0].match.def))) return opts1.placeholder.charAt(pos1 % opts1.placeholder.length);
                        }
                    }
                    return test1.def;
                }
                function HandleNativePlaceholder1(npt1, value1) {
                    if (ie1) {
                        if (npt1.inputmask._valueGet() !== value1 && (npt1.placeholder !== value1 || "" === npt1.placeholder)) {
                            var buffer1 = getBuffer1().slice(), nptValue1 = npt1.inputmask._valueGet();
                            if (nptValue1 !== value1) {
                                var lvp1 = getLastValidPosition1();
                                -1 === lvp1 && nptValue1 === getBufferTemplate1().join("") ? buffer1 = [] : -1 !== lvp1 && clearOptionalTail1(buffer1), writeBuffer1(npt1, buffer1);
                            }
                        }
                    } else npt1.placeholder !== value1 && (npt1.placeholder = value1, "" === npt1.placeholder && npt1.removeAttribute("placeholder"));
                }
                function determineNewCaretPosition1(selectedCaret1, tabbed1) {
                    function doRadixFocus1(clickPos1) {
                        if ("" !== opts1.radixPoint && 0 !== opts1.digits) {
                            var vps1 = maskset1.validPositions;
                            if (void 0 === vps1[clickPos1] || vps1[clickPos1].input === getPlaceholder1(clickPos1)) {
                                if (clickPos1 < seekNext1(-1)) return !0;
                                var radixPos1 = $1.inArray(opts1.radixPoint, getBuffer1());
                                if (-1 !== radixPos1) {
                                    for(var vp1 in vps1)if (vps1[vp1] && radixPos1 < vp1 && vps1[vp1].input !== getPlaceholder1(vp1)) return !1;
                                    return !0;
                                }
                            }
                        }
                        return !1;
                    }
                    if (tabbed1 && (isRTL1 ? selectedCaret1.end = selectedCaret1.begin : selectedCaret1.begin = selectedCaret1.end), selectedCaret1.begin === selectedCaret1.end) {
                        switch(opts1.positionCaretOnClick){
                            case "none":
                                break;
                            case "select":
                                selectedCaret1 = {
                                    begin: 0,
                                    end: getBuffer1().length
                                };
                                break;
                            case "ignore":
                                selectedCaret1.end = selectedCaret1.begin = seekNext1(getLastValidPosition1());
                                break;
                            case "radixFocus":
                                if (doRadixFocus1(selectedCaret1.begin)) {
                                    var radixPos1 = getBuffer1().join("").indexOf(opts1.radixPoint);
                                    selectedCaret1.end = selectedCaret1.begin = opts1.numericInput ? seekNext1(radixPos1) : radixPos1;
                                    break;
                                }
                            default:
                                var clickPosition1 = selectedCaret1.begin, lvclickPosition1 = getLastValidPosition1(clickPosition1, !0), lastPosition1 = seekNext1(-1 !== lvclickPosition1 || isMask1(0) ? lvclickPosition1 : 0);
                                if (clickPosition1 < lastPosition1) selectedCaret1.end = selectedCaret1.begin = isMask1(clickPosition1, !0) || isMask1(clickPosition1 - 1, !0) ? clickPosition1 : seekNext1(clickPosition1);
                                else {
                                    var lvp1 = maskset1.validPositions[lvclickPosition1], tt1 = getTestTemplate1(lastPosition1, lvp1 ? lvp1.match.locator : void 0, lvp1), placeholder1 = getPlaceholder1(lastPosition1, tt1.match);
                                    if ("" !== placeholder1 && getBuffer1()[lastPosition1] !== placeholder1 && !0 !== tt1.match.optionalQuantifier && !0 !== tt1.match.newBlockMarker || !isMask1(lastPosition1, opts1.keepStatic) && tt1.match.def === placeholder1) {
                                        var newPos1 = seekNext1(lastPosition1);
                                        (newPos1 <= clickPosition1 || clickPosition1 === lastPosition1) && (lastPosition1 = newPos1);
                                    }
                                    selectedCaret1.end = selectedCaret1.begin = lastPosition1;
                                }
                        }
                        return selectedCaret1;
                    }
                }
                var EventRuler1 = {
                    on: function on1(input1, eventName1, eventHandler1) {
                        var ev1 = function ev1(e1) {
                            e1.originalEvent && (e1 = e1.originalEvent || e1, arguments[0] = e1);
                            var that1 = this, args1;
                            if (void 0 === that1.inputmask && "FORM" !== this.nodeName) {
                                var imOpts1 = $1.data(that1, "_inputmask_opts");
                                imOpts1 ? new Inputmask(imOpts1).mask(that1) : EventRuler1.off(that1);
                            } else {
                                if ("setvalue" === e1.type || "FORM" === this.nodeName || !(that1.disabled || that1.readOnly && !("keydown" === e1.type && e1.ctrlKey && 67 === e1.keyCode || !1 === opts1.tabThrough && e1.keyCode === keyCode1.TAB))) {
                                    switch(e1.type){
                                        case "input":
                                            if (!0 === skipInputEvent1 || e1.inputType && "insertCompositionText" === e1.inputType) return skipInputEvent1 = !1, e1.preventDefault();
                                            break;
                                        case "keydown":
                                            skipKeyPressEvent1 = !1, skipInputEvent1 = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === skipKeyPressEvent1) return e1.preventDefault();
                                            skipKeyPressEvent1 = !0;
                                            break;
                                        case "click":
                                        case "focus":
                                            return validationEvent1 ? (validationEvent1 = !1, input1.blur(), HandleNativePlaceholder1(input1, (isRTL1 ? getBufferTemplate1().slice().reverse() : getBufferTemplate1()).join("")), setTimeout(function() {
                                                input1.focus();
                                            }, 3e3)) : (args1 = arguments, setTimeout(function() {
                                                eventHandler1.apply(that1, args1);
                                            }, 0)), !1;
                                    }
                                    var returnVal1 = eventHandler1.apply(that1, arguments);
                                    return !1 === returnVal1 && (e1.preventDefault(), e1.stopPropagation()), returnVal1;
                                }
                                e1.preventDefault();
                            }
                        };
                        input1.inputmask.events[eventName1] = input1.inputmask.events[eventName1] || [], input1.inputmask.events[eventName1].push(ev1), -1 !== $1.inArray(eventName1, [
                            "submit",
                            "reset"
                        ]) ? null !== input1.form && $1(input1.form).on(eventName1, ev1) : $1(input1).on(eventName1, ev1);
                    },
                    off: function off1(input1, event1) {
                        var events1;
                        input1.inputmask && input1.inputmask.events && (event1 ? (events1 = [], events1[event1] = input1.inputmask.events[event1]) : events1 = input1.inputmask.events, $1.each(events1, function(eventName1, evArr1) {
                            for(; 0 < evArr1.length;){
                                var ev1 = evArr1.pop();
                                -1 !== $1.inArray(eventName1, [
                                    "submit",
                                    "reset"
                                ]) ? null !== input1.form && $1(input1.form).off(eventName1, ev1) : $1(input1).off(eventName1, ev1);
                            }
                            delete input1.inputmask.events[eventName1];
                        }));
                    }
                }, EventHandlers1 = {
                    keydownEvent: function keydownEvent1(e1) {
                        var input1 = this, $input1 = $1(input1), k1 = e1.keyCode, pos1 = caret1(input1), kdResult1 = opts1.onKeyDown.call(this, e1, getBuffer1(), pos1, opts1);
                        if (void 0 !== kdResult1) return kdResult1;
                        if (k1 === keyCode1.BACKSPACE || k1 === keyCode1.DELETE || iphone1 && k1 === keyCode1.BACKSPACE_SAFARI || e1.ctrlKey && k1 === keyCode1.X && !("oncut" in input1)) e1.preventDefault(), handleRemove1(input1, k1, pos1), writeBuffer1(input1, getBuffer1(!0), maskset1.p, e1, input1.inputmask._valueGet() !== getBuffer1().join(""));
                        else if (k1 === keyCode1.END || k1 === keyCode1.PAGE_DOWN) {
                            e1.preventDefault();
                            var caretPos1 = seekNext1(getLastValidPosition1());
                            caret1(input1, e1.shiftKey ? pos1.begin : caretPos1, caretPos1, !0);
                        } else k1 === keyCode1.HOME && !e1.shiftKey || k1 === keyCode1.PAGE_UP ? (e1.preventDefault(), caret1(input1, 0, e1.shiftKey ? pos1.begin : 0, !0)) : (opts1.undoOnEscape && k1 === keyCode1.ESCAPE || 90 === k1 && e1.ctrlKey) && !0 !== e1.altKey ? (checkVal1(input1, !0, !1, undoValue1.split("")), $input1.trigger("click")) : !0 === opts1.tabThrough && k1 === keyCode1.TAB ? (!0 === e1.shiftKey ? (!0 === getTest1(pos1.begin).match.static && (pos1.begin = seekNext1(pos1.begin)), pos1.end = seekPrevious1(pos1.begin, !0), pos1.begin = seekPrevious1(pos1.end, !0)) : (pos1.begin = seekNext1(pos1.begin, !0), pos1.end = seekNext1(pos1.begin, !0), pos1.end < maskset1.maskLength && pos1.end--), pos1.begin < maskset1.maskLength && (e1.preventDefault(), caret1(input1, pos1.begin, pos1.end))) : e1.shiftKey || opts1.insertModeVisual && !1 === opts1.insertMode && (k1 === keyCode1.RIGHT ? setTimeout(function() {
                            var caretPos1 = caret1(input1);
                            caret1(input1, caretPos1.begin);
                        }, 0) : k1 === keyCode1.LEFT && setTimeout(function() {
                            var caretPos_begin1 = translatePosition1(input1.inputmask.caretPos.begin), caretPos_end1 = translatePosition1(input1.inputmask.caretPos.end);
                            caret1(input1, isRTL1 ? caretPos_begin1 + (caretPos_begin1 === maskset1.maskLength ? 0 : 1) : caretPos_begin1 - (0 === caretPos_begin1 ? 0 : 1));
                        }, 0));
                        ignorable1 = -1 !== $1.inArray(k1, opts1.ignorables);
                    },
                    keypressEvent: function keypressEvent1(e1, checkval1, writeOut1, strict1, ndx3) {
                        var input1 = this, $input1 = $1(input1), k1 = e1.which || e1.charCode || e1.keyCode;
                        if (!(!0 === checkval1 || e1.ctrlKey && e1.altKey) && (e1.ctrlKey || e1.metaKey || ignorable1)) return k1 === keyCode1.ENTER && undoValue1 !== getBuffer1().join("") && (undoValue1 = getBuffer1().join(""), setTimeout(function() {
                            $input1.trigger("change");
                        }, 0)), skipInputEvent1 = !0, !0;
                        if (k1) {
                            44 !== k1 && 46 !== k1 || 3 !== e1.location || "" === opts1.radixPoint || (k1 = opts1.radixPoint.charCodeAt(0));
                            var pos1 = checkval1 ? {
                                begin: ndx3,
                                end: ndx3
                            } : caret1(input1), forwardPosition1, c1 = String.fromCharCode(k1);
                            maskset1.writeOutBuffer = !0;
                            var valResult1 = isValid1(pos1, c1, strict1);
                            if (!1 !== valResult1 && (resetMaskSet1(!0), forwardPosition1 = void 0 !== valResult1.caret ? valResult1.caret : seekNext1(valResult1.pos.begin ? valResult1.pos.begin : valResult1.pos), maskset1.p = forwardPosition1), forwardPosition1 = opts1.numericInput && void 0 === valResult1.caret ? seekPrevious1(forwardPosition1) : forwardPosition1, !1 !== writeOut1 && (setTimeout(function() {
                                opts1.onKeyValidation.call(input1, k1, valResult1);
                            }, 0), maskset1.writeOutBuffer && !1 !== valResult1)) {
                                var buffer1 = getBuffer1();
                                writeBuffer1(input1, buffer1, forwardPosition1, e1, !0 !== checkval1);
                            }
                            if (e1.preventDefault(), checkval1) return !1 !== valResult1 && (valResult1.forwardPosition = forwardPosition1), valResult1;
                        }
                    },
                    pasteEvent: function pasteEvent1(e1) {
                        var input1 = this, inputValue1 = this.inputmask._valueGet(!0), caretPos1 = caret1(this), tempValue1;
                        isRTL1 && (tempValue1 = caretPos1.end, caretPos1.end = caretPos1.begin, caretPos1.begin = tempValue1);
                        var valueBeforeCaret1 = inputValue1.substr(0, caretPos1.begin), valueAfterCaret1 = inputValue1.substr(caretPos1.end, inputValue1.length);
                        if (valueBeforeCaret1 == (isRTL1 ? getBufferTemplate1().slice().reverse() : getBufferTemplate1()).slice(0, caretPos1.begin).join("") && (valueBeforeCaret1 = ""), valueAfterCaret1 == (isRTL1 ? getBufferTemplate1().slice().reverse() : getBufferTemplate1()).slice(caretPos1.end).join("") && (valueAfterCaret1 = ""), window1.clipboardData && window1.clipboardData.getData) inputValue1 = valueBeforeCaret1 + window1.clipboardData.getData("Text") + valueAfterCaret1;
                        else {
                            if (!e1.clipboardData || !e1.clipboardData.getData) return !0;
                            inputValue1 = valueBeforeCaret1 + e1.clipboardData.getData("text/plain") + valueAfterCaret1;
                        }
                        var pasteValue1 = inputValue1;
                        if ($1.isFunction(opts1.onBeforePaste)) {
                            if (pasteValue1 = opts1.onBeforePaste.call(inputmask1, inputValue1, opts1), !1 === pasteValue1) return e1.preventDefault();
                            pasteValue1 = pasteValue1 || inputValue1;
                        }
                        return checkVal1(this, !1, !1, pasteValue1.toString().split("")), writeBuffer1(this, getBuffer1(), seekNext1(getLastValidPosition1()), e1, undoValue1 !== getBuffer1().join("")), e1.preventDefault();
                    },
                    inputFallBackEvent: function inputFallBackEvent1(e1) {
                        function ieMobileHandler1(input1, inputValue1, caretPos1) {
                            if (iemobile1) {
                                var inputChar1 = inputValue1.replace(getBuffer1().join(""), "");
                                if (1 === inputChar1.length) {
                                    var iv1 = inputValue1.split("");
                                    iv1.splice(caretPos1.begin, 0, inputChar1), inputValue1 = iv1.join("");
                                }
                            }
                            return inputValue1;
                        }
                        function analyseChanges1(inputValue1, buffer1, caretPos1) {
                            for(var frontPart1 = inputValue1.substr(0, caretPos1.begin).split(""), backPart1 = inputValue1.substr(caretPos1.begin).split(""), frontBufferPart1 = buffer1.substr(0, caretPos1.begin).split(""), backBufferPart1 = buffer1.substr(caretPos1.begin).split(""), fpl1 = frontPart1.length >= frontBufferPart1.length ? frontPart1.length : frontBufferPart1.length, bpl1 = backPart1.length >= backBufferPart1.length ? backPart1.length : backBufferPart1.length, bl1, i1, action1 = "", data1 = [], marker1 = "~", placeholder1; frontPart1.length < fpl1;)frontPart1.push("~");
                            for(; frontBufferPart1.length < fpl1;)frontBufferPart1.push("~");
                            for(; backPart1.length < bpl1;)backPart1.unshift("~");
                            for(; backBufferPart1.length < bpl1;)backBufferPart1.unshift("~");
                            var newBuffer1 = frontPart1.concat(backPart1), oldBuffer1 = frontBufferPart1.concat(backBufferPart1);
                            for(i1 = 0, bl1 = newBuffer1.length; i1 < bl1; i1++)switch(placeholder1 = getPlaceholder1(translatePosition1(i1)), action1){
                                case "insertText":
                                    oldBuffer1[i1 - 1] === newBuffer1[i1] && caretPos1.begin == newBuffer1.length - 1 && data1.push(newBuffer1[i1]), i1 = bl1;
                                    break;
                                case "insertReplacementText":
                                    "~" === newBuffer1[i1] ? caretPos1.end++ : i1 = bl1;
                                    break;
                                case "deleteContentBackward":
                                    "~" === newBuffer1[i1] ? caretPos1.end++ : i1 = bl1;
                                    break;
                                default:
                                    newBuffer1[i1] !== oldBuffer1[i1] && ("~" !== newBuffer1[i1 + 1] && newBuffer1[i1 + 1] !== placeholder1 && void 0 !== newBuffer1[i1 + 1] || (oldBuffer1[i1] !== placeholder1 || "~" !== oldBuffer1[i1 + 1]) && "~" !== oldBuffer1[i1] ? "~" === oldBuffer1[i1 + 1] && oldBuffer1[i1] === newBuffer1[i1 + 1] ? (action1 = "insertText", data1.push(newBuffer1[i1]), caretPos1.begin--, caretPos1.end--) : newBuffer1[i1] !== placeholder1 && "~" !== newBuffer1[i1] && ("~" === newBuffer1[i1 + 1] || oldBuffer1[i1] !== newBuffer1[i1] && oldBuffer1[i1 + 1] === newBuffer1[i1 + 1]) ? (action1 = "insertReplacementText", data1.push(newBuffer1[i1]), caretPos1.begin--) : "~" === newBuffer1[i1] ? (action1 = "deleteContentBackward", !isMask1(translatePosition1(i1), !0) && oldBuffer1[i1] !== opts1.radixPoint || caretPos1.end++) : i1 = bl1 : (action1 = "insertText", data1.push(newBuffer1[i1]), caretPos1.begin--, caretPos1.end--));
                                    break;
                            }
                            return {
                                action: action1,
                                data: data1,
                                caret: caretPos1
                            };
                        }
                        var input1 = this, inputValue1 = input1.inputmask._valueGet(!0), buffer1 = (isRTL1 ? getBuffer1().slice().reverse() : getBuffer1()).join(""), caretPos1 = caret1(input1, void 0, void 0, !0);
                        if (buffer1 !== inputValue1) {
                            inputValue1 = ieMobileHandler1(input1, inputValue1, caretPos1);
                            var changes1 = analyseChanges1(inputValue1, buffer1, caretPos1);
                            switch((input1.inputmask.shadowRoot || document1).activeElement !== input1 && input1.focus(), writeBuffer1(input1, getBuffer1()), caret1(input1, caretPos1.begin, caretPos1.end, !0), changes1.action){
                                case "insertText":
                                case "insertReplacementText":
                                    $1.each(changes1.data, function(ndx3, entry1) {
                                        var keypress1 = new $1.Event("keypress");
                                        keypress1.which = entry1.charCodeAt(0), ignorable1 = !1, EventHandlers1.keypressEvent.call(input1, keypress1);
                                    }), setTimeout(function() {
                                        $el1.trigger("keyup");
                                    }, 0);
                                    break;
                                case "deleteContentBackward":
                                    var keydown1 = new $1.Event("keydown");
                                    keydown1.keyCode = keyCode1.BACKSPACE, EventHandlers1.keydownEvent.call(input1, keydown1);
                                    break;
                                default:
                                    applyInputValue1(input1, inputValue1);
                                    break;
                            }
                            e1.preventDefault();
                        }
                    },
                    compositionendEvent: function compositionendEvent1(e1) {
                        $el1.trigger("input");
                    },
                    setValueEvent: function setValueEvent1(e1, argument_11, argument_21) {
                        var input1 = this, value1 = e1 && e1.detail ? e1.detail[0] : argument_11;
                        void 0 === value1 && (value1 = this.inputmask._valueGet(!0)), applyInputValue1(this, value1), (e1.detail && void 0 !== e1.detail[1] || void 0 !== argument_21) && caret1(this, e1.detail ? e1.detail[1] : argument_21);
                    },
                    focusEvent: function focusEvent1(e1) {
                        var input1 = this, nptValue1 = this.inputmask._valueGet();
                        opts1.showMaskOnFocus && nptValue1 !== getBuffer1().join("") && writeBuffer1(this, getBuffer1(), seekNext1(getLastValidPosition1())), !0 !== opts1.positionCaretOnTab || !1 !== mouseEnter1 || isComplete1(getBuffer1()) && -1 !== getLastValidPosition1() || EventHandlers1.clickEvent.apply(this, [
                            e1,
                            !0
                        ]), undoValue1 = getBuffer1().join("");
                    },
                    invalidEvent: function invalidEvent1(e1) {
                        validationEvent1 = !0;
                    },
                    mouseleaveEvent: function mouseleaveEvent1() {
                        var input1 = this;
                        mouseEnter1 = !1, opts1.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document1).activeElement !== this && HandleNativePlaceholder1(this, originalPlaceholder1);
                    },
                    clickEvent: function clickEvent1(e1, tabbed1) {
                        var input1 = this;
                        if ((this.inputmask.shadowRoot || document1).activeElement === this) {
                            var newCaretPosition1 = determineNewCaretPosition1(caret1(this), tabbed1);
                            void 0 !== newCaretPosition1 && caret1(this, newCaretPosition1);
                        }
                    },
                    cutEvent: function cutEvent1(e1) {
                        var input1 = this, pos1 = caret1(this), clipboardData1 = window1.clipboardData || e1.clipboardData, clipData1 = isRTL1 ? getBuffer1().slice(pos1.end, pos1.begin) : getBuffer1().slice(pos1.begin, pos1.end);
                        clipboardData1.setData("text", isRTL1 ? clipData1.reverse().join("") : clipData1.join("")), document1.execCommand && document1.execCommand("copy"), handleRemove1(this, keyCode1.DELETE, pos1), writeBuffer1(this, getBuffer1(), maskset1.p, e1, undoValue1 !== getBuffer1().join(""));
                    },
                    blurEvent: function blurEvent1(e1) {
                        var $input1 = $1(this), input1 = this;
                        if (this.inputmask) {
                            HandleNativePlaceholder1(this, originalPlaceholder1);
                            var nptValue1 = this.inputmask._valueGet(), buffer1 = getBuffer1().slice();
                            "" !== nptValue1 && (opts1.clearMaskOnLostFocus && (-1 === getLastValidPosition1() && nptValue1 === getBufferTemplate1().join("") ? buffer1 = [] : clearOptionalTail1(buffer1)), !1 === isComplete1(buffer1) && (setTimeout(function() {
                                $input1.trigger("incomplete");
                            }, 0), opts1.clearIncomplete && (resetMaskSet1(), buffer1 = opts1.clearMaskOnLostFocus ? [] : getBufferTemplate1().slice())), writeBuffer1(this, buffer1, void 0, e1)), undoValue1 !== getBuffer1().join("") && (undoValue1 = getBuffer1().join(""), $input1.trigger("change"));
                        }
                    },
                    mouseenterEvent: function mouseenterEvent1() {
                        var input1 = this;
                        mouseEnter1 = !0, (this.inputmask.shadowRoot || document1).activeElement !== this && (null == originalPlaceholder1 && this.placeholder !== originalPlaceholder1 && (originalPlaceholder1 = this.placeholder), opts1.showMaskOnHover && HandleNativePlaceholder1(this, (isRTL1 ? getBufferTemplate1().slice().reverse() : getBufferTemplate1()).join("")));
                    },
                    submitEvent: function submitEvent1() {
                        undoValue1 !== getBuffer1().join("") && $el1.trigger("change"), opts1.clearMaskOnLostFocus && -1 === getLastValidPosition1() && el1.inputmask._valueGet && el1.inputmask._valueGet() === getBufferTemplate1().join("") && el1.inputmask._valueSet(""), opts1.clearIncomplete && !1 === isComplete1(getBuffer1()) && el1.inputmask._valueSet(""), opts1.removeMaskOnSubmit && (el1.inputmask._valueSet(el1.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                            writeBuffer1(el1, getBuffer1());
                        }, 0));
                    },
                    resetEvent: function resetEvent1() {
                        el1.inputmask.refreshValue = !0, setTimeout(function() {
                            applyInputValue1(el1, el1.inputmask._valueGet(!0));
                        }, 0);
                    }
                }, valueBuffer1;
                function checkVal1(input1, writeOut1, strict1, nptvl1, initiatingEvent1) {
                    var inputmask1 = this || input1.inputmask, inputValue1 = nptvl1.slice(), charCodes1 = "", initialNdx1 = -1, result1 = void 0;
                    function isTemplateMatch1(ndx3, charCodes1) {
                        for(var targetTemplate1 = getMaskTemplate1(!0, 0).slice(ndx3, seekNext1(ndx3)).join("").replace(/'/g, ""), charCodeNdx1 = targetTemplate1.indexOf(charCodes1); 0 < charCodeNdx1 && " " === targetTemplate1[charCodeNdx1 - 1];)charCodeNdx1--;
                        var match1 = 0 === charCodeNdx1 && !isMask1(ndx3) && (getTest1(ndx3).match.nativeDef === charCodes1.charAt(0) || !0 === getTest1(ndx3).match.static && getTest1(ndx3).match.nativeDef === "'" + charCodes1.charAt(0) || " " === getTest1(ndx3).match.nativeDef && (getTest1(ndx3 + 1).match.nativeDef === charCodes1.charAt(0) || !0 === getTest1(ndx3 + 1).match.static && getTest1(ndx3 + 1).match.nativeDef === "'" + charCodes1.charAt(0)));
                        return !match1 && 0 < charCodeNdx1 && (inputmask1.caretPos = {
                            begin: seekNext1(charCodeNdx1)
                        }), match1;
                    }
                    resetMaskSet1(), maskset1.tests = {}, initialNdx1 = opts1.radixPoint ? determineNewCaretPosition1({
                        begin: 0,
                        end: 0
                    }).begin : 0, maskset1.p = initialNdx1, inputmask1.caretPos = {
                        begin: initialNdx1
                    };
                    var staticMatches1 = [], prevCaretPos1 = inputmask1.caretPos;
                    if ($1.each(inputValue1, function(ndx3, charCode1) {
                        if (void 0 !== charCode1) {
                            if (void 0 === maskset1.validPositions[ndx3] && inputValue1[ndx3] === getPlaceholder1(ndx3) && isMask1(ndx3, !0) && !1 === isValid1(ndx3, inputValue1[ndx3], !0, void 0, void 0, !0)) maskset1.p++;
                            else {
                                var keypress1 = new $1.Event("_checkval");
                                keypress1.which = charCode1.toString().charCodeAt(0), charCodes1 += charCode1;
                                var lvp1 = getLastValidPosition1(void 0, !0);
                                isTemplateMatch1(initialNdx1, charCodes1) ? result1 = EventHandlers1.keypressEvent.call(input1, keypress1, !0, !1, strict1, lvp1 + 1) : (result1 = EventHandlers1.keypressEvent.call(input1, keypress1, !0, !1, strict1, inputmask1.caretPos.begin), result1 && (initialNdx1 = inputmask1.caretPos.begin + 1, charCodes1 = "")), result1 ? (void 0 !== result1.pos && maskset1.validPositions[result1.pos] && !0 === maskset1.validPositions[result1.pos].match.static && void 0 === maskset1.validPositions[result1.pos].alternation && (staticMatches1.push(result1.pos), isRTL1 || (result1.forwardPosition = result1.pos + 1)), writeBuffer1(void 0, getBuffer1(), result1.forwardPosition, keypress1, !1), inputmask1.caretPos = {
                                    begin: result1.forwardPosition,
                                    end: result1.forwardPosition
                                }, prevCaretPos1 = inputmask1.caretPos) : inputmask1.caretPos = prevCaretPos1;
                            }
                        }
                    }), 0 < staticMatches1.length) {
                        var sndx1, validPos1, nextValid1 = seekNext1(-1, void 0, !1);
                        if (!isComplete1(getBuffer1()) && staticMatches1.length <= nextValid1 || isComplete1(getBuffer1()) && 0 < staticMatches1.length && staticMatches1.length !== nextValid1 && 0 === staticMatches1[0]) for(var nextSndx1 = nextValid1; void 0 !== (sndx1 = staticMatches1.shift());){
                            var keypress1 = new $1.Event("_checkval");
                            if (validPos1 = maskset1.validPositions[sndx1], validPos1.generatedInput = !0, keypress1.which = validPos1.input.charCodeAt(0), result1 = EventHandlers1.keypressEvent.call(input1, keypress1, !0, !1, strict1, nextSndx1), result1 && void 0 !== result1.pos && result1.pos !== sndx1 && maskset1.validPositions[result1.pos] && !0 === maskset1.validPositions[result1.pos].match.static) staticMatches1.push(result1.pos);
                            else if (!result1) break;
                            nextSndx1++;
                        }
                        else for(; sndx1 = staticMatches1.pop();)validPos1 = maskset1.validPositions[sndx1], validPos1 && (validPos1.generatedInput = !0);
                    }
                    if (writeOut1) for(var vndx1 in writeBuffer1(input1, getBuffer1(), result1 ? result1.forwardPosition : void 0, initiatingEvent1 || new $1.Event("checkval"), initiatingEvent1 && "input" === initiatingEvent1.type), maskset1.validPositions)!0 !== maskset1.validPositions[vndx1].match.generated && delete maskset1.validPositions[vndx1].generatedInput;
                }
                function unmaskedvalue1(input1) {
                    if (input1) {
                        if (void 0 === input1.inputmask) return input1.value;
                        input1.inputmask && input1.inputmask.refreshValue && applyInputValue1(input1, input1.inputmask._valueGet(!0));
                    }
                    var umValue1 = [], vps1 = maskset1.validPositions;
                    for(var pndx1 in vps1)vps1[pndx1] && vps1[pndx1].match && 1 != vps1[pndx1].match.static && umValue1.push(vps1[pndx1].input);
                    var unmaskedValue1 = 0 === umValue1.length ? "" : (isRTL1 ? umValue1.reverse() : umValue1).join("");
                    if ($1.isFunction(opts1.onUnMask)) {
                        var bufferValue1 = (isRTL1 ? getBuffer1().slice().reverse() : getBuffer1()).join("");
                        unmaskedValue1 = opts1.onUnMask.call(inputmask1, bufferValue1, unmaskedValue1, opts1);
                    }
                    return unmaskedValue1;
                }
                function translatePosition1(pos1) {
                    return !isRTL1 || "number" != typeof pos1 || opts1.greedy && "" === opts1.placeholder || !el1 || (pos1 = el1.inputmask._valueGet().length - pos1), pos1;
                }
                function caret1(input1, begin1, end1, notranslate1, isDelete1) {
                    var range1;
                    if (void 0 === begin1) return "selectionStart" in input1 && "selectionEnd" in input1 ? (begin1 = input1.selectionStart, end1 = input1.selectionEnd) : window1.getSelection ? (range1 = window1.getSelection().getRangeAt(0), range1.commonAncestorContainer.parentNode !== input1 && range1.commonAncestorContainer !== input1 || (begin1 = range1.startOffset, end1 = range1.endOffset)) : document1.selection && document1.selection.createRange && (range1 = document1.selection.createRange(), begin1 = 0 - range1.duplicate().moveStart("character", -input1.inputmask._valueGet().length), end1 = begin1 + range1.text.length), {
                        begin: notranslate1 ? begin1 : translatePosition1(begin1),
                        end: notranslate1 ? end1 : translatePosition1(end1)
                    };
                    if ($1.isArray(begin1) && (end1 = isRTL1 ? begin1[0] : begin1[1], begin1 = isRTL1 ? begin1[1] : begin1[0]), void 0 !== begin1.begin && (end1 = isRTL1 ? begin1.begin : begin1.end, begin1 = isRTL1 ? begin1.end : begin1.begin), "number" == typeof begin1) {
                        begin1 = notranslate1 ? begin1 : translatePosition1(begin1), end1 = notranslate1 ? end1 : translatePosition1(end1), end1 = "number" == typeof end1 ? end1 : begin1;
                        var scrollCalc1 = parseInt(((input1.ownerDocument.defaultView || window1).getComputedStyle ? (input1.ownerDocument.defaultView || window1).getComputedStyle(input1, null) : input1.currentStyle).fontSize) * end1;
                        if (input1.scrollLeft = scrollCalc1 > input1.scrollWidth ? scrollCalc1 : 0, input1.inputmask.caretPos = {
                            begin: begin1,
                            end: end1
                        }, opts1.insertModeVisual && !1 === opts1.insertMode && begin1 === end1 && (isDelete1 || end1++), input1 === (input1.inputmask.shadowRoot || document1).activeElement) {
                            if ("setSelectionRange" in input1) input1.setSelectionRange(begin1, end1);
                            else if (window1.getSelection) {
                                if (range1 = document1.createRange(), void 0 === input1.firstChild || null === input1.firstChild) {
                                    var textNode1 = document1.createTextNode("");
                                    input1.appendChild(textNode1);
                                }
                                range1.setStart(input1.firstChild, begin1 < input1.inputmask._valueGet().length ? begin1 : input1.inputmask._valueGet().length), range1.setEnd(input1.firstChild, end1 < input1.inputmask._valueGet().length ? end1 : input1.inputmask._valueGet().length), range1.collapse(!0);
                                var sel1 = window1.getSelection();
                                sel1.removeAllRanges(), sel1.addRange(range1);
                            } else input1.createTextRange && (range1 = input1.createTextRange(), range1.collapse(!0), range1.moveEnd("character", end1), range1.moveStart("character", begin1), range1.select());
                        }
                    }
                }
                function determineLastRequiredPosition1(returnDefinition1) {
                    var buffer1 = getMaskTemplate1(!0, getLastValidPosition1(), !0, !0), bl1 = buffer1.length, pos1, lvp1 = getLastValidPosition1(), positions1 = {}, lvTest1 = maskset1.validPositions[lvp1], ndxIntlzr1 = void 0 !== lvTest1 ? lvTest1.locator.slice() : void 0, testPos1;
                    for(pos1 = lvp1 + 1; pos1 < buffer1.length; pos1++)testPos1 = getTestTemplate1(pos1, ndxIntlzr1, pos1 - 1), ndxIntlzr1 = testPos1.locator.slice(), positions1[pos1] = $1.extend(!0, {}, testPos1);
                    var lvTestAlt1 = lvTest1 && void 0 !== lvTest1.alternation ? lvTest1.locator[lvTest1.alternation] : void 0;
                    for(pos1 = bl1 - 1; lvp1 < pos1 && (testPos1 = positions1[pos1], (testPos1.match.optionality || testPos1.match.optionalQuantifier && testPos1.match.newBlockMarker || lvTestAlt1 && (lvTestAlt1 !== positions1[pos1].locator[lvTest1.alternation] && 1 != testPos1.match.static || !0 === testPos1.match.static && testPos1.locator[lvTest1.alternation] && checkAlternationMatch1(testPos1.locator[lvTest1.alternation].toString().split(","), lvTestAlt1.toString().split(",")) && "" !== getTests1(pos1)[0].def)) && buffer1[pos1] === getPlaceholder1(pos1, testPos1.match)); pos1--)bl1--;
                    return returnDefinition1 ? {
                        l: bl1,
                        def: positions1[bl1] ? positions1[bl1].match : void 0
                    } : bl1;
                }
                function clearOptionalTail1(buffer1) {
                    buffer1.length = 0;
                    for(var template1 = getMaskTemplate1(!0, 0, !0, void 0, !0), lmnt1; void 0 !== (lmnt1 = template1.shift());)buffer1.push(lmnt1);
                    return buffer1;
                }
                function isComplete1(buffer1) {
                    if ($1.isFunction(opts1.isComplete)) return opts1.isComplete(buffer1, opts1);
                    if ("*" !== opts1.repeat) {
                        var complete1 = !1, lrp1 = determineLastRequiredPosition1(!0), aml1 = seekPrevious1(lrp1.l);
                        if (void 0 === lrp1.def || lrp1.def.newBlockMarker || lrp1.def.optionality || lrp1.def.optionalQuantifier) {
                            complete1 = !0;
                            for(var i1 = 0; i1 <= aml1; i1++){
                                var test1 = getTestTemplate1(i1).match;
                                if (!0 !== test1.static && void 0 === maskset1.validPositions[i1] && !0 !== test1.optionality && !0 !== test1.optionalQuantifier || !0 === test1.static && buffer1[i1] !== getPlaceholder1(i1, test1)) {
                                    complete1 = !1;
                                    break;
                                }
                            }
                        }
                        return complete1;
                    }
                }
                function handleRemove1(input1, k1, pos1, strict1, fromIsValid1) {
                    if ((opts1.numericInput || isRTL1) && (k1 === keyCode1.BACKSPACE ? k1 = keyCode1.DELETE : k1 === keyCode1.DELETE && (k1 = keyCode1.BACKSPACE), isRTL1)) {
                        var pend1 = pos1.end;
                        pos1.end = pos1.begin, pos1.begin = pend1;
                    }
                    var offset1;
                    if (k1 === keyCode1.BACKSPACE ? pos1.end - pos1.begin < 1 && (pos1.begin = seekPrevious1(pos1.begin)) : k1 === keyCode1.DELETE && pos1.begin === pos1.end && (pos1.end = isMask1(pos1.end, !0, !0) ? pos1.end + 1 : seekNext1(pos1.end) + 1), !1 !== (offset1 = revalidateMask1(pos1))) {
                        if (!0 !== strict1 && !1 !== opts1.keepStatic || null !== opts1.regex && -1 !== getTest1(pos1.begin).match.def.indexOf("|")) {
                            var result1 = alternate1(!0);
                            if (result1) {
                                var newPos1 = void 0 !== result1.caret ? result1.caret : result1.pos ? seekNext1(result1.pos.begin ? result1.pos.begin : result1.pos) : getLastValidPosition1(-1, !0);
                                (k1 !== keyCode1.DELETE || pos1.begin > newPos1) && pos1.begin;
                            }
                        }
                        !0 !== strict1 && (maskset1.p = k1 === keyCode1.DELETE ? pos1.begin + offset1 : pos1.begin);
                    }
                }
                function applyInputValue1(input1, value1) {
                    input1.inputmask.refreshValue = !1, $1.isFunction(opts1.onBeforeMask) && (value1 = opts1.onBeforeMask.call(inputmask1, value1, opts1) || value1), value1 = value1.toString().split(""), checkVal1(input1, !0, !1, value1), undoValue1 = getBuffer1().join(""), (opts1.clearMaskOnLostFocus || opts1.clearIncomplete) && input1.inputmask._valueGet() === getBufferTemplate1().join("") && -1 === getLastValidPosition1() && input1.inputmask._valueSet("");
                }
                function mask1(elem1) {
                    function isElementTypeSupported1(input1, opts1) {
                        function patchValueProperty1(npt1) {
                            var valueGet1, valueSet1;
                            function patchValhook1(type1) {
                                if ($1.valHooks && (void 0 === $1.valHooks[type1] || !0 !== $1.valHooks[type1].inputmaskpatch)) {
                                    var valhookGet1 = $1.valHooks[type1] && $1.valHooks[type1].get ? $1.valHooks[type1].get : function(elem1) {
                                        return elem1.value;
                                    }, valhookSet1 = $1.valHooks[type1] && $1.valHooks[type1].set ? $1.valHooks[type1].set : function(elem1, value1) {
                                        return elem1.value = value1, elem1;
                                    };
                                    $1.valHooks[type1] = {
                                        get: function get1(elem1) {
                                            if (elem1.inputmask) {
                                                if (elem1.inputmask.opts.autoUnmask) return elem1.inputmask.unmaskedvalue();
                                                var result1 = valhookGet1(elem1);
                                                return -1 !== getLastValidPosition1(void 0, void 0, elem1.inputmask.maskset.validPositions) || !0 !== opts1.nullable ? result1 : "";
                                            }
                                            return valhookGet1(elem1);
                                        },
                                        set: function set1(elem1, value1) {
                                            var result1 = valhookSet1(elem1, value1);
                                            return elem1.inputmask && applyInputValue1(elem1, value1), result1;
                                        },
                                        inputmaskpatch: !0
                                    };
                                }
                            }
                            function getter1() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition1() || !0 !== opts1.nullable ? (this.inputmask.shadowRoot || document1.activeElement) === this && opts1.clearMaskOnLostFocus ? (isRTL1 ? clearOptionalTail1(getBuffer1().slice()).reverse() : clearOptionalTail1(getBuffer1().slice())).join("") : valueGet1.call(this) : "" : valueGet1.call(this);
                            }
                            function setter1(value1) {
                                valueSet1.call(this, value1), this.inputmask && applyInputValue1(this, value1);
                            }
                            function installNativeValueSetFallback1(npt1) {
                                EventRuler1.on(npt1, "mouseenter", function() {
                                    var input1 = this, value1 = this.inputmask._valueGet(!0);
                                    value1 !== (isRTL1 ? getBuffer1().reverse() : getBuffer1()).join("") && applyInputValue1(this, value1);
                                });
                            }
                            if (!npt1.inputmask.__valueGet) {
                                if (!0 !== opts1.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof1("test".__proto__) ? function(object1) {
                                            return object1.__proto__;
                                        } : function(object1) {
                                            return object1.constructor.prototype;
                                        });
                                        var valueProperty1 = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt1), "value") : void 0;
                                        valueProperty1 && valueProperty1.get && valueProperty1.set ? (valueGet1 = valueProperty1.get, valueSet1 = valueProperty1.set, Object.defineProperty(npt1, "value", {
                                            get: getter1,
                                            set: setter1,
                                            configurable: !0
                                        })) : "input" !== npt1.tagName.toLowerCase() && (valueGet1 = function valueGet1() {
                                            return this.textContent;
                                        }, valueSet1 = function valueSet1(value1) {
                                            this.textContent = value1;
                                        }, Object.defineProperty(npt1, "value", {
                                            get: getter1,
                                            set: setter1,
                                            configurable: !0
                                        }));
                                    } else document1.__lookupGetter__ && npt1.__lookupGetter__("value") && (valueGet1 = npt1.__lookupGetter__("value"), valueSet1 = npt1.__lookupSetter__("value"), npt1.__defineGetter__("value", getter1), npt1.__defineSetter__("value", setter1));
                                    npt1.inputmask.__valueGet = valueGet1, npt1.inputmask.__valueSet = valueSet1;
                                }
                                npt1.inputmask._valueGet = function(overruleRTL1) {
                                    return isRTL1 && !0 !== overruleRTL1 ? valueGet1.call(this.el).split("").reverse().join("") : valueGet1.call(this.el);
                                }, npt1.inputmask._valueSet = function(value1, overruleRTL1) {
                                    valueSet1.call(this.el, null == value1 ? "" : !0 !== overruleRTL1 && isRTL1 ? value1.split("").reverse().join("") : value1);
                                }, void 0 === valueGet1 && (valueGet1 = function valueGet1() {
                                    return this.value;
                                }, valueSet1 = function valueSet1(value1) {
                                    this.value = value1;
                                }, patchValhook1(npt1.type), installNativeValueSetFallback1(npt1));
                            }
                        }
                        "textarea" !== input1.tagName.toLowerCase() && opts1.ignorables.push(keyCode1.ENTER);
                        var elementType1 = input1.getAttribute("type"), isSupported1 = "input" === input1.tagName.toLowerCase() && -1 !== $1.inArray(elementType1, opts1.supportsInputType) || input1.isContentEditable || "textarea" === input1.tagName.toLowerCase();
                        if (!isSupported1) {
                            if ("input" === input1.tagName.toLowerCase()) {
                                var el1 = document1.createElement("input");
                                el1.setAttribute("type", elementType1), isSupported1 = "text" === el1.type, el1 = null;
                            } else isSupported1 = "partial";
                        }
                        return !1 !== isSupported1 ? patchValueProperty1(input1) : input1.inputmask = void 0, isSupported1;
                    }
                    EventRuler1.off(elem1);
                    var isSupported1 = isElementTypeSupported1(elem1, opts1);
                    if (!1 !== isSupported1) {
                        el1 = elem1, $el1 = $1(el1), originalPlaceholder1 = el1.placeholder, maxLength1 = void 0 !== el1 ? el1.maxLength : void 0, -1 === maxLength1 && (maxLength1 = void 0), "inputMode" in el1 && null === el1.getAttribute("inputmode") && (el1.inputMode = opts1.inputmode, el1.setAttribute("inputmode", opts1.inputmode)), !0 === isSupported1 && (opts1.showMaskOnFocus = opts1.showMaskOnFocus && -1 === [
                            "cc-number",
                            "cc-exp"
                        ].indexOf(el1.autocomplete), iphone1 && (opts1.insertModeVisual = !1), EventRuler1.on(el1, "submit", EventHandlers1.submitEvent), EventRuler1.on(el1, "reset", EventHandlers1.resetEvent), EventRuler1.on(el1, "blur", EventHandlers1.blurEvent), EventRuler1.on(el1, "focus", EventHandlers1.focusEvent), EventRuler1.on(el1, "invalid", EventHandlers1.invalidEvent), EventRuler1.on(el1, "click", EventHandlers1.clickEvent), EventRuler1.on(el1, "mouseleave", EventHandlers1.mouseleaveEvent), EventRuler1.on(el1, "mouseenter", EventHandlers1.mouseenterEvent), EventRuler1.on(el1, "paste", EventHandlers1.pasteEvent), EventRuler1.on(el1, "cut", EventHandlers1.cutEvent), EventRuler1.on(el1, "complete", opts1.oncomplete), EventRuler1.on(el1, "incomplete", opts1.onincomplete), EventRuler1.on(el1, "cleared", opts1.oncleared), mobile1 || !0 === opts1.inputEventOnly ? el1.removeAttribute("maxLength") : (EventRuler1.on(el1, "keydown", EventHandlers1.keydownEvent), EventRuler1.on(el1, "keypress", EventHandlers1.keypressEvent)), EventRuler1.on(el1, "input", EventHandlers1.inputFallBackEvent), EventRuler1.on(el1, "compositionend", EventHandlers1.compositionendEvent)), EventRuler1.on(el1, "setvalue", EventHandlers1.setValueEvent), undoValue1 = getBufferTemplate1().join("");
                        var activeElement1 = (el1.inputmask.shadowRoot || document1).activeElement;
                        if ("" !== el1.inputmask._valueGet(!0) || !1 === opts1.clearMaskOnLostFocus || activeElement1 === el1) {
                            applyInputValue1(el1, el1.inputmask._valueGet(!0), opts1);
                            var buffer1 = getBuffer1().slice();
                            !1 === isComplete1(buffer1) && opts1.clearIncomplete && resetMaskSet1(), opts1.clearMaskOnLostFocus && activeElement1 !== el1 && (-1 === getLastValidPosition1() ? buffer1 = [] : clearOptionalTail1(buffer1)), (!1 === opts1.clearMaskOnLostFocus || opts1.showMaskOnFocus && activeElement1 === el1 || "" !== el1.inputmask._valueGet(!0)) && writeBuffer1(el1, buffer1), activeElement1 === el1 && caret1(el1, seekNext1(getLastValidPosition1()));
                        }
                    }
                }
                if (void 0 !== actionObj1) switch(actionObj1.action){
                    case "isComplete":
                        return el1 = actionObj1.el, isComplete1(getBuffer1());
                    case "unmaskedvalue":
                        return void 0 !== el1 && void 0 === actionObj1.value || (valueBuffer1 = actionObj1.value, valueBuffer1 = ($1.isFunction(opts1.onBeforeMask) && opts1.onBeforeMask.call(inputmask1, valueBuffer1, opts1) || valueBuffer1).split(""), checkVal1.call(this, void 0, !1, !1, valueBuffer1), $1.isFunction(opts1.onBeforeWrite) && opts1.onBeforeWrite.call(inputmask1, void 0, getBuffer1(), 0, opts1)), unmaskedvalue1(el1);
                    case "mask":
                        mask1(el1);
                        break;
                    case "format":
                        return valueBuffer1 = ($1.isFunction(opts1.onBeforeMask) && opts1.onBeforeMask.call(inputmask1, actionObj1.value, opts1) || actionObj1.value).split(""), checkVal1.call(this, void 0, !0, !1, valueBuffer1), actionObj1.metadata ? {
                            value: isRTL1 ? getBuffer1().slice().reverse().join("") : getBuffer1().join(""),
                            metadata: maskScope1.call(this, {
                                action: "getmetadata"
                            }, maskset1, opts1)
                        } : isRTL1 ? getBuffer1().slice().reverse().join("") : getBuffer1().join("");
                    case "isValid":
                        actionObj1.value ? (valueBuffer1 = ($1.isFunction(opts1.onBeforeMask) && opts1.onBeforeMask.call(inputmask1, actionObj1.value, opts1) || actionObj1.value).split(""), checkVal1.call(this, void 0, !0, !1, valueBuffer1)) : actionObj1.value = isRTL1 ? getBuffer1().slice().reverse().join("") : getBuffer1().join("");
                        for(var buffer1 = getBuffer1(), rl1 = determineLastRequiredPosition1(), lmib1 = buffer1.length - 1; rl1 < lmib1 && !isMask1(lmib1); lmib1--);
                        return buffer1.splice(rl1, lmib1 + 1 - rl1), isComplete1(buffer1) && actionObj1.value === (isRTL1 ? getBuffer1().slice().reverse().join("") : getBuffer1().join(""));
                    case "getemptymask":
                        return getBufferTemplate1().join("");
                    case "remove":
                        if (el1 && el1.inputmask) {
                            $1.data(el1, "_inputmask_opts", null), $el1 = $1(el1);
                            var cv1 = opts1.autoUnmask ? unmaskedvalue1(el1) : el1.inputmask._valueGet(opts1.autoUnmask), valueProperty1;
                            cv1 !== getBufferTemplate1().join("") ? el1.inputmask._valueSet(cv1, opts1.autoUnmask) : el1.inputmask._valueSet(""), EventRuler1.off(el1), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty1 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el1), "value"), valueProperty1 && el1.inputmask.__valueGet && Object.defineProperty(el1, "value", {
                                get: el1.inputmask.__valueGet,
                                set: el1.inputmask.__valueSet,
                                configurable: !0
                            })) : document1.__lookupGetter__ && el1.__lookupGetter__("value") && el1.inputmask.__valueGet && (el1.__defineGetter__("value", el1.inputmask.__valueGet), el1.__defineSetter__("value", el1.inputmask.__valueSet)), el1.inputmask = void 0;
                        }
                        return el1;
                    case "getmetadata":
                        if ($1.isArray(maskset1.metadata)) {
                            var maskTarget1 = getMaskTemplate1(!0, 0, !1).join("");
                            return $1.each(maskset1.metadata, function(ndx3, mtdt1) {
                                if (mtdt1.mask === maskTarget1) return maskTarget1 = mtdt1, !1;
                            }), maskTarget1;
                        }
                        return maskset1.metadata;
                }
            };
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            function _typeof1(obj1) {
                return _typeof1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof1(obj1);
            }
            var Inputmask1 = __webpack_require__1(1), $1 = Inputmask1.dependencyLib, keyCode1 = __webpack_require__1(0), formatCode1 = {
                d: [
                    "[1-9]|[12][0-9]|3[01]",
                    Date.prototype.setDate,
                    "day",
                    Date.prototype.getDate
                ],
                dd: [
                    "0[1-9]|[12][0-9]|3[01]",
                    Date.prototype.setDate,
                    "day",
                    function() {
                        return pad1(Date.prototype.getDate.call(this), 2);
                    }
                ],
                ddd: [
                    ""
                ],
                dddd: [
                    ""
                ],
                m: [
                    "[1-9]|1[012]",
                    Date.prototype.setMonth,
                    "month",
                    function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    }
                ],
                mm: [
                    "0[1-9]|1[012]",
                    Date.prototype.setMonth,
                    "month",
                    function() {
                        return pad1(Date.prototype.getMonth.call(this) + 1, 2);
                    }
                ],
                mmm: [
                    ""
                ],
                mmmm: [
                    ""
                ],
                yy: [
                    "[0-9]{2}",
                    Date.prototype.setFullYear,
                    "year",
                    function() {
                        return pad1(Date.prototype.getFullYear.call(this), 2);
                    }
                ],
                yyyy: [
                    "[0-9]{4}",
                    Date.prototype.setFullYear,
                    "year",
                    function() {
                        return pad1(Date.prototype.getFullYear.call(this), 4);
                    }
                ],
                h: [
                    "[1-9]|1[0-2]",
                    Date.prototype.setHours,
                    "hours",
                    Date.prototype.getHours
                ],
                hh: [
                    "0[1-9]|1[0-2]",
                    Date.prototype.setHours,
                    "hours",
                    function() {
                        return pad1(Date.prototype.getHours.call(this), 2);
                    }
                ],
                hx: [
                    function(x1) {
                        return "[0-9]{".concat(x1, "}");
                    },
                    Date.prototype.setHours,
                    "hours",
                    function(x1) {
                        return Date.prototype.getHours;
                    }
                ],
                H: [
                    "1?[0-9]|2[0-3]",
                    Date.prototype.setHours,
                    "hours",
                    Date.prototype.getHours
                ],
                HH: [
                    "0[0-9]|1[0-9]|2[0-3]",
                    Date.prototype.setHours,
                    "hours",
                    function() {
                        return pad1(Date.prototype.getHours.call(this), 2);
                    }
                ],
                Hx: [
                    function(x1) {
                        return "[0-9]{".concat(x1, "}");
                    },
                    Date.prototype.setHours,
                    "hours",
                    function(x1) {
                        return function() {
                            return pad1(Date.prototype.getHours.call(this), x1);
                        };
                    }
                ],
                M: [
                    "[1-5]?[0-9]",
                    Date.prototype.setMinutes,
                    "minutes",
                    Date.prototype.getMinutes
                ],
                MM: [
                    "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                    Date.prototype.setMinutes,
                    "minutes",
                    function() {
                        return pad1(Date.prototype.getMinutes.call(this), 2);
                    }
                ],
                s: [
                    "[1-5]?[0-9]",
                    Date.prototype.setSeconds,
                    "seconds",
                    Date.prototype.getSeconds
                ],
                ss: [
                    "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",
                    Date.prototype.setSeconds,
                    "seconds",
                    function() {
                        return pad1(Date.prototype.getSeconds.call(this), 2);
                    }
                ],
                l: [
                    "[0-9]{3}",
                    Date.prototype.setMilliseconds,
                    "milliseconds",
                    function() {
                        return pad1(Date.prototype.getMilliseconds.call(this), 3);
                    }
                ],
                L: [
                    "[0-9]{2}",
                    Date.prototype.setMilliseconds,
                    "milliseconds",
                    function() {
                        return pad1(Date.prototype.getMilliseconds.call(this), 2);
                    }
                ],
                t: [
                    "[ap]"
                ],
                tt: [
                    "[ap]m"
                ],
                T: [
                    "[AP]"
                ],
                TT: [
                    "[AP]M"
                ],
                Z: [
                    ""
                ],
                o: [
                    ""
                ],
                S: [
                    ""
                ]
            }, formatAlias1 = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
            function formatcode1(match1) {
                var dynMatches1 = new RegExp("\\d+$").exec(match1[0]);
                if (dynMatches1 && void 0 !== dynMatches1[0]) {
                    var fcode1 = formatCode1[match1[0][0] + "x"].slice("");
                    return fcode1[0] = fcode1[0](dynMatches1[0]), fcode1[3] = fcode1[3](dynMatches1[0]), fcode1;
                }
                if (formatCode1[match1[0]]) return formatCode1[match1[0]];
            }
            function getTokenizer1(opts1) {
                if (!opts1.tokenizer) {
                    var tokens1 = [], dyntokens1 = [];
                    for(var ndx3 in formatCode1)if (/\.*x$/.test(ndx3)) {
                        var dynToken1 = ndx3[0] + "\\d+";
                        -1 === dyntokens1.indexOf(dynToken1) && dyntokens1.push(dynToken1);
                    } else -1 === tokens1.indexOf(ndx3[0]) && tokens1.push(ndx3[0]);
                    opts1.tokenizer = "(" + (0 < dyntokens1.length ? dyntokens1.join("|") + "|" : "") + tokens1.join("+|") + ")+?|.", opts1.tokenizer = new RegExp(opts1.tokenizer, "g");
                }
                return opts1.tokenizer;
            }
            function isValidDate1(dateParts1, currentResult1) {
                return (!isFinite(dateParts1.rawday) || "29" == dateParts1.day && !isFinite(dateParts1.rawyear) || new Date(dateParts1.date.getFullYear(), isFinite(dateParts1.rawmonth) ? dateParts1.month : dateParts1.date.getMonth() + 1, 0).getDate() >= dateParts1.day) && currentResult1;
            }
            function isDateInRange1(dateParts1, opts1) {
                var result1 = !0;
                if (opts1.min) {
                    if (dateParts1.rawyear) {
                        var rawYear1 = dateParts1.rawyear.replace(/[^0-9]/g, ""), minYear1 = opts1.min.year.substr(0, rawYear1.length);
                        result1 = minYear1 <= rawYear1;
                    }
                    dateParts1.year === dateParts1.rawyear && opts1.min.date.getTime() == opts1.min.date.getTime() && (result1 = opts1.min.date.getTime() <= dateParts1.date.getTime());
                }
                return result1 && opts1.max && opts1.max.date.getTime() == opts1.max.date.getTime() && (result1 = opts1.max.date.getTime() >= dateParts1.date.getTime()), result1;
            }
            function parse1(format1, dateObjValue1, opts1, raw1) {
                var mask1 = "", match1, fcode1;
                for(getTokenizer1(opts1).lastIndex = 0; match1 = getTokenizer1(opts1).exec(format1);)if (void 0 === dateObjValue1) {
                    if (fcode1 = formatcode1(match1)) mask1 += "(" + fcode1[0] + ")";
                    else switch(match1[0]){
                        case "[":
                            mask1 += "(";
                            break;
                        case "]":
                            mask1 += ")?";
                            break;
                        default:
                            mask1 += Inputmask1.escapeRegex(match1[0]);
                    }
                } else if (fcode1 = formatcode1(match1)) {
                    if (!0 !== raw1 && fcode1[3]) {
                        var getFn1 = fcode1[3];
                        mask1 += getFn1.call(dateObjValue1.date);
                    } else fcode1[2] ? mask1 += dateObjValue1["raw" + fcode1[2]] : mask1 += match1[0];
                } else mask1 += match1[0];
                return mask1;
            }
            function pad1(val1, len1) {
                for(val1 = String(val1), len1 = len1 || 2; val1.length < len1;)val1 = "0" + val1;
                return val1;
            }
            function analyseMask1(maskString1, format1, opts1) {
                var dateObj1 = {
                    date: new Date(1, 0, 1)
                }, targetProp1, mask1 = maskString1, match1, dateOperation1;
                function extendProperty1(value1) {
                    var correctedValue1 = value1.replace(/[^0-9]/g, "0");
                    return correctedValue1;
                }
                function setValue1(dateObj1, value1, opts1) {
                    dateObj1[targetProp1] = extendProperty1(value1), dateObj1["raw" + targetProp1] = value1, void 0 !== dateOperation1 && dateOperation1.call(dateObj1.date, "month" == targetProp1 ? parseInt(dateObj1[targetProp1]) - 1 : dateObj1[targetProp1]);
                }
                if ("string" == typeof mask1) {
                    for(getTokenizer1(opts1).lastIndex = 0; match1 = getTokenizer1(opts1).exec(format1);){
                        var value1 = mask1.slice(0, match1[0].length);
                        formatCode1.hasOwnProperty(match1[0]) && (targetProp1 = formatCode1[match1[0]][2], dateOperation1 = formatCode1[match1[0]][1], setValue1(dateObj1, value1, opts1)), mask1 = mask1.slice(value1.length);
                    }
                    return dateObj1;
                }
                if (mask1 && "object" === _typeof1(mask1) && mask1.hasOwnProperty("date")) return mask1;
            }
            function importDate1(dateObj1, opts1) {
                var match1, date1 = "";
                for(getTokenizer1(opts1).lastIndex = 0; match1 = getTokenizer1(opts1).exec(opts1.inputFormat);)"d" === match1[0].charAt(0) ? date1 += pad1(dateObj1.getDate(), match1[0].length) : "m" === match1[0].charAt(0) ? date1 += pad1(dateObj1.getMonth() + 1, match1[0].length) : "yyyy" === match1[0] ? date1 += dateObj1.getFullYear().toString() : "y" === match1[0].charAt(0) && (date1 += pad1(dateObj1.getYear(), match1[0].length));
                return date1;
            }
            function getTokenMatch1(pos1, opts1) {
                var calcPos1 = 0, targetMatch1, match1;
                for(getTokenizer1(opts1).lastIndex = 0; match1 = getTokenizer1(opts1).exec(opts1.inputFormat);)if (calcPos1 += match1[0].length, pos1 <= calcPos1) {
                    targetMatch1 = match1, match1 = getTokenizer1(opts1).exec(opts1.inputFormat);
                    break;
                }
                return {
                    nextMatch: match1,
                    targetMatch: targetMatch1
                };
            }
            Inputmask1.extendAliases({
                datetime: {
                    mask: function mask1(opts1) {
                        return opts1.numericInput = !1, formatCode1.S = opts1.i18n.ordinalSuffix.join("|"), opts1.inputFormat = formatAlias1[opts1.inputFormat] || opts1.inputFormat, opts1.displayFormat = formatAlias1[opts1.displayFormat] || opts1.displayFormat || opts1.inputFormat, opts1.outputFormat = formatAlias1[opts1.outputFormat] || opts1.outputFormat || opts1.inputFormat, opts1.placeholder = "" !== opts1.placeholder ? opts1.placeholder : opts1.inputFormat.replace(/[[\]]/, ""), opts1.regex = parse1(opts1.inputFormat, void 0, opts1), opts1.min = analyseMask1(opts1.min, opts1.inputFormat, opts1), opts1.max = analyseMask1(opts1.max, opts1.inputFormat, opts1), null;
                    },
                    placeholder: "",
                    inputFormat: "isoDateTime",
                    displayFormat: void 0,
                    outputFormat: void 0,
                    min: null,
                    max: null,
                    skipOptionalPartCharacter: "",
                    i18n: {
                        dayNames: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                        ],
                        monthNames: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        ordinalSuffix: [
                            "st",
                            "nd",
                            "rd",
                            "th"
                        ]
                    },
                    preValidation: function preValidation1(buffer1, pos1, c1, isSelection1, opts1, maskset1, caretPos1, strict1) {
                        if (strict1) return !0;
                        if (isNaN(c1) && buffer1[pos1] !== c1) {
                            var tokenMatch1 = getTokenMatch1(pos1, opts1);
                            if (tokenMatch1.nextMatch && tokenMatch1.nextMatch[0] === c1 && 1 < tokenMatch1.targetMatch[0].length) {
                                var validator1 = formatCode1[tokenMatch1.targetMatch[0]][0];
                                if (new RegExp(validator1).test("0" + buffer1[pos1 - 1])) return buffer1[pos1] = buffer1[pos1 - 1], buffer1[pos1 - 1] = "0", {
                                    fuzzy: !0,
                                    buffer: buffer1,
                                    refreshFromBuffer: {
                                        start: pos1 - 1,
                                        end: pos1 + 1
                                    },
                                    pos: pos1 + 1
                                };
                            }
                        }
                        return !0;
                    },
                    postValidation: function postValidation1(buffer1, pos1, c1, currentResult1, opts1, maskset1, strict1) {
                        if (strict1) return !0;
                        var tokenMatch1;
                        if (!1 === currentResult1) {
                            if (tokenMatch1 = getTokenMatch1(pos1 + 1, opts1), tokenMatch1.targetMatch && tokenMatch1.targetMatch.index === pos1 && 1 < tokenMatch1.targetMatch[0].length && void 0 !== formatCode1[tokenMatch1.targetMatch[0]]) {
                                var validator1 = formatCode1[tokenMatch1.targetMatch[0]][0];
                                if (new RegExp(validator1).test("0" + c1)) return {
                                    insert: [
                                        {
                                            pos: pos1,
                                            c: "0"
                                        },
                                        {
                                            pos: pos1 + 1,
                                            c: c1
                                        }
                                    ],
                                    pos: pos1 + 1
                                };
                            }
                            return currentResult1;
                        }
                        if (currentResult1.fuzzy && (buffer1 = currentResult1.buffer, pos1 = currentResult1.pos), tokenMatch1 = getTokenMatch1(pos1, opts1), tokenMatch1.targetMatch && tokenMatch1.targetMatch[0] && void 0 !== formatCode1[tokenMatch1.targetMatch[0]]) {
                            var validator1 = formatCode1[tokenMatch1.targetMatch[0]][0], part1 = buffer1.slice(tokenMatch1.targetMatch.index, tokenMatch1.targetMatch.index + tokenMatch1.targetMatch[0].length);
                            !1 === new RegExp(validator1).test(part1.join("")) && 2 === tokenMatch1.targetMatch[0].length && maskset1.validPositions[tokenMatch1.targetMatch.index] && maskset1.validPositions[tokenMatch1.targetMatch.index + 1] && (maskset1.validPositions[tokenMatch1.targetMatch.index + 1].input = "0");
                        }
                        var result1 = currentResult1, dateParts1 = analyseMask1(buffer1.join(""), opts1.inputFormat, opts1);
                        return result1 && dateParts1.date.getTime() == dateParts1.date.getTime() && (result1 = isValidDate1(dateParts1, result1), result1 = result1 && isDateInRange1(dateParts1, opts1)), pos1 && result1 && currentResult1.pos !== pos1 ? {
                            buffer: parse1(opts1.inputFormat, dateParts1, opts1).split(""),
                            refreshFromBuffer: {
                                start: pos1,
                                end: currentResult1.pos
                            }
                        } : result1;
                    },
                    onKeyDown: function onKeyDown1(e1, buffer1, caretPos1, opts1) {
                        var input1 = this;
                        e1.ctrlKey && e1.keyCode === keyCode1.RIGHT && (this.inputmask._valueSet(importDate1(new Date, opts1)), $1(this).trigger("setvalue"));
                    },
                    onUnMask: function onUnMask1(maskedValue1, unmaskedValue1, opts1) {
                        return unmaskedValue1 ? parse1(opts1.outputFormat, analyseMask1(maskedValue1, opts1.inputFormat, opts1), opts1, !0) : unmaskedValue1;
                    },
                    casing: function casing1(elem1, test1, pos1, validPositions1) {
                        return 0 == test1.nativeDef.indexOf("[ap]") ? elem1.toLowerCase() : 0 == test1.nativeDef.indexOf("[AP]") ? elem1.toUpperCase() : elem1;
                    },
                    onBeforeMask: function onBeforeMask1(initialValue1, opts1) {
                        return "[object Date]" === Object.prototype.toString.call(initialValue1) && (initialValue1 = importDate1(initialValue1, opts1)), initialValue1;
                    },
                    insertMode: !1,
                    shiftPositions: !1,
                    keepStatic: !1,
                    inputmode: "numeric"
                }
            }), module1.exports = Inputmask1;
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            var Inputmask1 = __webpack_require__1(1), $1 = Inputmask1.dependencyLib, keyCode1 = __webpack_require__1(0);
            function autoEscape1(txt1, opts1) {
                for(var escapedTxt1 = "", i1 = 0; i1 < txt1.length; i1++)Inputmask1.prototype.definitions[txt1.charAt(i1)] || opts1.definitions[txt1.charAt(i1)] || opts1.optionalmarker[0] === txt1.charAt(i1) || opts1.optionalmarker[1] === txt1.charAt(i1) || opts1.quantifiermarker[0] === txt1.charAt(i1) || opts1.quantifiermarker[1] === txt1.charAt(i1) || opts1.groupmarker[0] === txt1.charAt(i1) || opts1.groupmarker[1] === txt1.charAt(i1) || opts1.alternatormarker === txt1.charAt(i1) ? escapedTxt1 += "\\" + txt1.charAt(i1) : escapedTxt1 += txt1.charAt(i1);
                return escapedTxt1;
            }
            function alignDigits1(buffer1, digits1, opts1, force1) {
                if (0 < digits1 && (!opts1.digitsOptional || force1)) {
                    var radixPosition1 = $1.inArray(opts1.radixPoint, buffer1);
                    -1 === radixPosition1 && (buffer1.push(opts1.radixPoint), radixPosition1 = buffer1.length - 1);
                    for(var i1 = 1; i1 <= digits1; i1++)isFinite(buffer1[radixPosition1 + i1]) || (buffer1[radixPosition1 + i1] = "0");
                }
                return buffer1;
            }
            function findValidator1(symbol1, maskset1) {
                var posNdx1 = 0;
                if ("+" === symbol1) {
                    for(posNdx1 in maskset1.validPositions);
                    posNdx1 = parseInt(posNdx1);
                }
                for(var tstNdx1 in maskset1.tests)if (tstNdx1 = parseInt(tstNdx1), posNdx1 <= tstNdx1) {
                    for(var ndx3 = 0, ndxl1 = maskset1.tests[tstNdx1].length; ndx3 < ndxl1; ndx3++)if ((void 0 === maskset1.validPositions[tstNdx1] || "-" === symbol1) && maskset1.tests[tstNdx1][ndx3].match.def === symbol1) return tstNdx1 + (void 0 !== maskset1.validPositions[tstNdx1] && "-" !== symbol1 ? 1 : 0);
                }
                return posNdx1;
            }
            function findValid1(symbol1, maskset1) {
                var ret1 = -1;
                return $1.each(maskset1.validPositions, function(ndx3, tst1) {
                    if (tst1 && tst1.match.def === symbol1) return ret1 = parseInt(ndx3), !1;
                }), ret1;
            }
            function parseMinMaxOptions1(opts1) {
                void 0 === opts1.parseMinMaxOptions && (null !== opts1.min && (opts1.min = opts1.min.toString().replace(new RegExp(Inputmask1.escapeRegex(opts1.groupSeparator), "g"), ""), "," === opts1.radixPoint && (opts1.min = opts1.min.replace(opts1.radixPoint, ".")), opts1.min = isFinite(opts1.min) ? parseFloat(opts1.min) : NaN, isNaN(opts1.min) && (opts1.min = Number.MIN_VALUE)), null !== opts1.max && (opts1.max = opts1.max.toString().replace(new RegExp(Inputmask1.escapeRegex(opts1.groupSeparator), "g"), ""), "," === opts1.radixPoint && (opts1.max = opts1.max.replace(opts1.radixPoint, ".")), opts1.max = isFinite(opts1.max) ? parseFloat(opts1.max) : NaN, isNaN(opts1.max) && (opts1.max = Number.MAX_VALUE)), opts1.parseMinMaxOptions = "done");
            }
            function genMask1(opts1) {
                opts1.repeat = 0, opts1.groupSeparator === opts1.radixPoint && opts1.digits && "0" !== opts1.digits && ("." === opts1.radixPoint ? opts1.groupSeparator = "," : "," === opts1.radixPoint ? opts1.groupSeparator = "." : opts1.groupSeparator = ""), " " === opts1.groupSeparator && (opts1.skipOptionalPartCharacter = void 0), 1 < opts1.placeholder.length && (opts1.placeholder = opts1.placeholder.charAt(0)), "radixFocus" === opts1.positionCaretOnClick && "" === opts1.placeholder && (opts1.positionCaretOnClick = "lvp");
                var decimalDef1 = "0", radixPointDef1 = opts1.radixPoint;
                !0 === opts1.numericInput && void 0 === opts1.__financeInput ? (decimalDef1 = "1", opts1.positionCaretOnClick = "radixFocus" === opts1.positionCaretOnClick ? "lvp" : opts1.positionCaretOnClick, opts1.digitsOptional = !1, isNaN(opts1.digits) && (opts1.digits = 2), opts1._radixDance = !1, radixPointDef1 = "," === opts1.radixPoint ? "?" : "!", "" !== opts1.radixPoint && void 0 === opts1.definitions[radixPointDef1] && (opts1.definitions[radixPointDef1] = {}, opts1.definitions[radixPointDef1].validator = "[" + opts1.radixPoint + "]", opts1.definitions[radixPointDef1].placeholder = opts1.radixPoint, opts1.definitions[radixPointDef1].static = !0, opts1.definitions[radixPointDef1].generated = !0)) : (opts1.__financeInput = !1, opts1.numericInput = !0);
                var mask1 = "[+]", altMask1;
                if (mask1 += autoEscape1(opts1.prefix, opts1), "" !== opts1.groupSeparator ? (void 0 === opts1.definitions[opts1.groupSeparator] && (opts1.definitions[opts1.groupSeparator] = {}, opts1.definitions[opts1.groupSeparator].validator = "[" + opts1.groupSeparator + "]", opts1.definitions[opts1.groupSeparator].placeholder = opts1.groupSeparator, opts1.definitions[opts1.groupSeparator].static = !0, opts1.definitions[opts1.groupSeparator].generated = !0), mask1 += opts1._mask(opts1)) : mask1 += "9{+}", void 0 !== opts1.digits && 0 !== opts1.digits) {
                    var dq1 = opts1.digits.toString().split(",");
                    isFinite(dq1[0]) && dq1[1] && isFinite(dq1[1]) ? mask1 += radixPointDef1 + decimalDef1 + "{" + opts1.digits + "}" : (isNaN(opts1.digits) || 0 < parseInt(opts1.digits)) && (opts1.digitsOptional ? (altMask1 = mask1 + radixPointDef1 + decimalDef1 + "{0," + opts1.digits + "}", opts1.keepStatic = !0) : mask1 += radixPointDef1 + decimalDef1 + "{" + opts1.digits + "}");
                }
                return mask1 += autoEscape1(opts1.suffix, opts1), mask1 += "[-]", altMask1 && (mask1 = [
                    altMask1 + autoEscape1(opts1.suffix, opts1) + "[-]",
                    mask1
                ]), opts1.greedy = !1, parseMinMaxOptions1(opts1), mask1;
            }
            function hanndleRadixDance1(pos1, c1, radixPos1, maskset1, opts1) {
                return opts1._radixDance && opts1.numericInput && c1 !== opts1.negationSymbol.back && pos1 <= radixPos1 && (0 < radixPos1 || c1 == opts1.radixPoint) && (void 0 === maskset1.validPositions[pos1 - 1] || maskset1.validPositions[pos1 - 1].input !== opts1.negationSymbol.back) && (pos1 -= 1), pos1;
            }
            function decimalValidator1(chrs1, maskset1, pos1, strict1, opts1) {
                var radixPos1 = maskset1.buffer ? maskset1.buffer.indexOf(opts1.radixPoint) : -1, result1 = -1 !== radixPos1 && new RegExp("[0-9\uFF11-\uFF19]").test(chrs1);
                return opts1._radixDance && result1 && null == maskset1.validPositions[radixPos1] ? {
                    insert: {
                        pos: radixPos1 === pos1 ? radixPos1 + 1 : radixPos1,
                        c: opts1.radixPoint
                    },
                    pos: pos1
                } : result1;
            }
            function checkForLeadingZeroes1(buffer1, opts1) {
                var numberMatches1 = new RegExp("(^" + ("" !== opts1.negationSymbol.front ? Inputmask1.escapeRegex(opts1.negationSymbol.front) + "?" : "") + Inputmask1.escapeRegex(opts1.prefix) + ")(.*)(" + Inputmask1.escapeRegex(opts1.suffix) + ("" != opts1.negationSymbol.back ? Inputmask1.escapeRegex(opts1.negationSymbol.back) + "?" : "") + "$)").exec(buffer1.slice().reverse().join("")), number1 = numberMatches1 ? numberMatches1[2] : "", leadingzeroes1 = !1;
                return number1 && (number1 = number1.split(opts1.radixPoint.charAt(0))[0], leadingzeroes1 = new RegExp("^[0" + opts1.groupSeparator + "]*").exec(number1)), !(!leadingzeroes1 || !(1 < leadingzeroes1[0].length || 0 < leadingzeroes1[0].length && leadingzeroes1[0].length < number1.length)) && leadingzeroes1;
            }
            Inputmask1.extendAliases({
                numeric: {
                    mask: genMask1,
                    _mask: function _mask1(opts1) {
                        return "(" + opts1.groupSeparator + "999){+|1}";
                    },
                    digits: "*",
                    digitsOptional: !0,
                    enforceDigitsOnBlur: !1,
                    radixPoint: ".",
                    positionCaretOnClick: "radixFocus",
                    _radixDance: !0,
                    groupSeparator: "",
                    allowMinus: !0,
                    negationSymbol: {
                        front: "-",
                        back: ""
                    },
                    prefix: "",
                    suffix: "",
                    min: null,
                    max: null,
                    step: 1,
                    unmaskAsNumber: !1,
                    roundingFN: Math.round,
                    inputmode: "numeric",
                    shortcuts: {
                        k: "000",
                        m: "000000"
                    },
                    placeholder: "0",
                    greedy: !1,
                    rightAlign: !0,
                    insertMode: !0,
                    autoUnmask: !1,
                    skipOptionalPartCharacter: "",
                    definitions: {
                        0: {
                            validator: decimalValidator1
                        },
                        1: {
                            validator: decimalValidator1,
                            definitionSymbol: "9"
                        },
                        "+": {
                            validator: function validator1(chrs1, maskset1, pos1, strict1, opts1) {
                                return opts1.allowMinus && ("-" === chrs1 || chrs1 === opts1.negationSymbol.front);
                            }
                        },
                        "-": {
                            validator: function validator1(chrs1, maskset1, pos1, strict1, opts1) {
                                return opts1.allowMinus && chrs1 === opts1.negationSymbol.back;
                            }
                        }
                    },
                    preValidation: function preValidation1(buffer1, pos1, c1, isSelection1, opts1, maskset1, caretPos1, strict1) {
                        if (!1 !== opts1.__financeInput && c1 === opts1.radixPoint) return !1;
                        var pattern1;
                        if (pattern1 = opts1.shortcuts && opts1.shortcuts[c1]) {
                            if (1 < pattern1.length) for(var inserts1 = [], i1 = 0; i1 < pattern1.length; i1++)inserts1.push({
                                pos: pos1 + i1,
                                c: pattern1[i1],
                                strict: !1
                            });
                            return {
                                insert: inserts1
                            };
                        }
                        var radixPos1 = $1.inArray(opts1.radixPoint, buffer1), initPos1 = pos1;
                        if (pos1 = hanndleRadixDance1(pos1, c1, radixPos1, maskset1, opts1), "-" === c1 || c1 === opts1.negationSymbol.front) {
                            if (!0 !== opts1.allowMinus) return !1;
                            var isNegative1 = !1, front1 = findValid1("+", maskset1), back1 = findValid1("-", maskset1);
                            return -1 !== front1 && (isNegative1 = [
                                front1,
                                back1
                            ]), !1 !== isNegative1 ? {
                                remove: isNegative1,
                                caret: initPos1
                            } : {
                                insert: [
                                    {
                                        pos: findValidator1("+", maskset1),
                                        c: opts1.negationSymbol.front,
                                        fromIsValid: !0
                                    },
                                    {
                                        pos: findValidator1("-", maskset1),
                                        c: opts1.negationSymbol.back,
                                        fromIsValid: void 0
                                    }
                                ],
                                caret: initPos1 + opts1.negationSymbol.back.length
                            };
                        }
                        if (strict1) return !0;
                        if (-1 !== radixPos1 && !0 === opts1._radixDance && !1 === isSelection1 && c1 === opts1.radixPoint && void 0 !== opts1.digits && (isNaN(opts1.digits) || 0 < parseInt(opts1.digits)) && radixPos1 !== pos1) return {
                            caret: opts1._radixDance && pos1 === radixPos1 - 1 ? radixPos1 + 1 : radixPos1
                        };
                        if (!1 === opts1.__financeInput) {
                            if (isSelection1) {
                                if (opts1.digitsOptional) return {
                                    rewritePosition: caretPos1.end
                                };
                                if (!opts1.digitsOptional) {
                                    if (caretPos1.begin > radixPos1 && caretPos1.end <= radixPos1) return c1 === opts1.radixPoint ? {
                                        insert: {
                                            pos: radixPos1 + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: radixPos1
                                    } : {
                                        rewritePosition: radixPos1 + 1
                                    };
                                    if (caretPos1.begin < radixPos1) return {
                                        rewritePosition: caretPos1.begin - 1
                                    };
                                }
                            } else if (!opts1.showMaskOnHover && !opts1.showMaskOnFocus && !opts1.digitsOptional && 0 < opts1.digits && "" === this.inputmask.__valueGet.call(this)) return {
                                rewritePosition: radixPos1
                            };
                        }
                        return {
                            rewritePosition: pos1
                        };
                    },
                    postValidation: function postValidation1(buffer1, pos1, c1, currentResult1, opts1, maskset1, strict1) {
                        if (!1 === currentResult1) return currentResult1;
                        if (strict1) return !0;
                        if (null !== opts1.min || null !== opts1.max) {
                            var unmasked1 = opts1.onUnMask(buffer1.slice().reverse().join(""), void 0, $1.extend({}, opts1, {
                                unmaskAsNumber: !0
                            }));
                            if (null !== opts1.min && unmasked1 < opts1.min && (unmasked1.toString().length >= opts1.min.toString().length || unmasked1 < 0)) return !1;
                            if (null !== opts1.max && unmasked1 > opts1.max) return !1;
                        }
                        return currentResult1;
                    },
                    onUnMask: function onUnMask1(maskedValue1, unmaskedValue1, opts1) {
                        if ("" === unmaskedValue1 && !0 === opts1.nullable) return unmaskedValue1;
                        var processValue1 = maskedValue1.replace(opts1.prefix, "");
                        return processValue1 = processValue1.replace(opts1.suffix, ""), processValue1 = processValue1.replace(new RegExp(Inputmask1.escapeRegex(opts1.groupSeparator), "g"), ""), "" !== opts1.placeholder.charAt(0) && (processValue1 = processValue1.replace(new RegExp(opts1.placeholder.charAt(0), "g"), "0")), opts1.unmaskAsNumber ? ("" !== opts1.radixPoint && -1 !== processValue1.indexOf(opts1.radixPoint) && (processValue1 = processValue1.replace(Inputmask1.escapeRegex.call(this, opts1.radixPoint), ".")), processValue1 = processValue1.replace(new RegExp("^" + Inputmask1.escapeRegex(opts1.negationSymbol.front)), "-"), processValue1 = processValue1.replace(new RegExp(Inputmask1.escapeRegex(opts1.negationSymbol.back) + "$"), ""), Number(processValue1)) : processValue1;
                    },
                    isComplete: function isComplete1(buffer1, opts1) {
                        var maskedValue1 = (opts1.numericInput ? buffer1.slice().reverse() : buffer1).join("");
                        return maskedValue1 = maskedValue1.replace(new RegExp("^" + Inputmask1.escapeRegex(opts1.negationSymbol.front)), "-"), maskedValue1 = maskedValue1.replace(new RegExp(Inputmask1.escapeRegex(opts1.negationSymbol.back) + "$"), ""), maskedValue1 = maskedValue1.replace(opts1.prefix, ""), maskedValue1 = maskedValue1.replace(opts1.suffix, ""), maskedValue1 = maskedValue1.replace(new RegExp(Inputmask1.escapeRegex(opts1.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts1.radixPoint && (maskedValue1 = maskedValue1.replace(Inputmask1.escapeRegex(opts1.radixPoint), ".")), isFinite(maskedValue1);
                    },
                    onBeforeMask: function onBeforeMask1(initialValue1, opts1) {
                        var radixPoint1 = opts1.radixPoint || ",";
                        isFinite(opts1.digits) && (opts1.digits = parseInt(opts1.digits)), "number" != typeof initialValue1 && "number" !== opts1.inputType || "" === radixPoint1 || (initialValue1 = initialValue1.toString().replace(".", radixPoint1));
                        var valueParts1 = initialValue1.split(radixPoint1), integerPart1 = valueParts1[0].replace(/[^\-0-9]/g, ""), decimalPart1 = 1 < valueParts1.length ? valueParts1[1].replace(/[^0-9]/g, "") : "", forceDigits1 = 1 < valueParts1.length;
                        initialValue1 = integerPart1 + ("" !== decimalPart1 ? radixPoint1 + decimalPart1 : decimalPart1);
                        var digits1 = 0;
                        if ("" !== radixPoint1 && (digits1 = opts1.digitsOptional ? opts1.digits < decimalPart1.length ? opts1.digits : decimalPart1.length : opts1.digits, "" !== decimalPart1 || !opts1.digitsOptional)) {
                            var digitsFactor1 = Math.pow(10, digits1 || 1);
                            initialValue1 = initialValue1.replace(Inputmask1.escapeRegex(radixPoint1), "."), isFinite(initialValue1) && (initialValue1 = (opts1.roundingFN(parseFloat(initialValue1) * digitsFactor1) / digitsFactor1).toFixed(digits1)), initialValue1 = initialValue1.toString().replace(".", radixPoint1);
                        }
                        if (0 === opts1.digits && -1 !== initialValue1.indexOf(radixPoint1) && (initialValue1 = initialValue1.substring(0, initialValue1.indexOf(radixPoint1))), null !== opts1.min || null !== opts1.max) {
                            var numberValue1 = initialValue1.toString().replace(radixPoint1, ".");
                            null !== opts1.min && numberValue1 < opts1.min ? initialValue1 = opts1.min.toString().replace(".", radixPoint1) : null !== opts1.max && numberValue1 > opts1.max && (initialValue1 = opts1.max.toString().replace(".", radixPoint1));
                        }
                        return alignDigits1(initialValue1.toString().split(""), digits1, opts1, forceDigits1).join("");
                    },
                    onBeforeWrite: function onBeforeWrite1(e1, buffer1, caretPos1, opts1) {
                        function stripBuffer1(buffer1, stripRadix1) {
                            if (!1 !== opts1.__financeInput || stripRadix1) {
                                var position1 = $1.inArray(opts1.radixPoint, buffer1);
                                -1 !== position1 && buffer1.splice(position1, 1);
                            }
                            if ("" !== opts1.groupSeparator) for(; -1 !== (position1 = buffer1.indexOf(opts1.groupSeparator));)buffer1.splice(position1, 1);
                            return buffer1;
                        }
                        var result1, leadingzeroes1 = checkForLeadingZeroes1(buffer1, opts1);
                        if (leadingzeroes1) {
                            var buf1 = buffer1.slice().reverse(), caretNdx1 = buf1.join("").indexOf(leadingzeroes1[0]);
                            buf1.splice(caretNdx1, leadingzeroes1[0].length);
                            var newCaretPos1 = buf1.length - caretNdx1;
                            stripBuffer1(buf1), result1 = {
                                refreshFromBuffer: !0,
                                buffer: buf1.reverse(),
                                caret: caretPos1 < newCaretPos1 ? caretPos1 : newCaretPos1
                            };
                        }
                        if (e1) switch(e1.type){
                            case "blur":
                            case "checkval":
                                if (null !== opts1.min) {
                                    var unmasked1 = opts1.onUnMask(buffer1.slice().reverse().join(""), void 0, $1.extend({}, opts1, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== opts1.min && unmasked1 < opts1.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: alignDigits1(opts1.min.toString().replace(".", opts1.radixPoint).split(""), opts1.digits, opts1).reverse()
                                    };
                                }
                                if (buffer1[buffer1.length - 1] === opts1.negationSymbol.front) {
                                    var nmbrMtchs1 = new RegExp("(^" + ("" != opts1.negationSymbol.front ? Inputmask1.escapeRegex(opts1.negationSymbol.front) + "?" : "") + Inputmask1.escapeRegex(opts1.prefix) + ")(.*)(" + Inputmask1.escapeRegex(opts1.suffix) + ("" != opts1.negationSymbol.back ? Inputmask1.escapeRegex(opts1.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer1(buffer1.slice(), !0).reverse().join("")), number1 = nmbrMtchs1 ? nmbrMtchs1[2] : "";
                                    0 == number1 && (result1 = {
                                        refreshFromBuffer: !0,
                                        buffer: [
                                            0
                                        ]
                                    });
                                } else "" !== opts1.radixPoint && buffer1[0] === opts1.radixPoint && (result1 && result1.buffer ? result1.buffer.shift() : (buffer1.shift(), result1 = {
                                    refreshFromBuffer: !0,
                                    buffer: stripBuffer1(buffer1)
                                }));
                                if (opts1.enforceDigitsOnBlur) {
                                    result1 = result1 || {};
                                    var bffr1 = result1 && result1.buffer || buffer1.slice().reverse();
                                    result1.refreshFromBuffer = !0, result1.buffer = alignDigits1(bffr1, opts1.digits, opts1, !0).reverse();
                                }
                        }
                        return result1;
                    },
                    onKeyDown: function onKeyDown1(e1, buffer1, caretPos1, opts1) {
                        var $input1 = $1(this), bffr1;
                        if (e1.ctrlKey) switch(e1.keyCode){
                            case keyCode1.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts1.step)), $input1.trigger("setvalue"), !1;
                            case keyCode1.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts1.step)), $input1.trigger("setvalue"), !1;
                        }
                        if (!e1.shiftKey && (e1.keyCode === keyCode1.DELETE || e1.keyCode === keyCode1.BACKSPACE || e1.keyCode === keyCode1.BACKSPACE_SAFARI) && caretPos1.begin !== buffer1.length) {
                            if (buffer1[e1.keyCode === keyCode1.DELETE ? caretPos1.begin - 1 : caretPos1.end] === opts1.negationSymbol.front) return bffr1 = buffer1.slice().reverse(), "" !== opts1.negationSymbol.front && bffr1.shift(), "" !== opts1.negationSymbol.back && bffr1.pop(), $input1.trigger("setvalue", [
                                bffr1.join(""),
                                caretPos1.begin
                            ]), !1;
                            if (!0 === opts1._radixDance) {
                                var radixPos1 = $1.inArray(opts1.radixPoint, buffer1);
                                if (opts1.digitsOptional) {
                                    if (0 === radixPos1) return bffr1 = buffer1.slice().reverse(), bffr1.pop(), $input1.trigger("setvalue", [
                                        bffr1.join(""),
                                        caretPos1.begin >= bffr1.length ? bffr1.length : caretPos1.begin
                                    ]), !1;
                                } else if (-1 !== radixPos1 && (caretPos1.begin < radixPos1 || caretPos1.end < radixPos1 || e1.keyCode === keyCode1.DELETE && caretPos1.begin === radixPos1)) return caretPos1.begin !== caretPos1.end || e1.keyCode !== keyCode1.BACKSPACE && e1.keyCode !== keyCode1.BACKSPACE_SAFARI || caretPos1.begin++, bffr1 = buffer1.slice().reverse(), bffr1.splice(bffr1.length - caretPos1.begin, caretPos1.begin - caretPos1.end + 1), bffr1 = alignDigits1(bffr1, opts1.digits, opts1).join(""), $input1.trigger("setvalue", [
                                    bffr1,
                                    caretPos1.begin >= bffr1.length ? radixPos1 + 1 : caretPos1.begin
                                ]), !1;
                            }
                        }
                    }
                },
                currency: {
                    prefix: "",
                    groupSeparator: ",",
                    alias: "numeric",
                    digits: 2,
                    digitsOptional: !1
                },
                decimal: {
                    alias: "numeric"
                },
                integer: {
                    alias: "numeric",
                    digits: 0
                },
                percentage: {
                    alias: "numeric",
                    min: 0,
                    max: 100,
                    suffix: " %",
                    digits: 0,
                    allowMinus: !1
                },
                indianns: {
                    alias: "numeric",
                    _mask: function _mask1(opts1) {
                        return "(" + opts1.groupSeparator + "99){*|1}(" + opts1.groupSeparator + "999){1|1}";
                    },
                    groupSeparator: ",",
                    radixPoint: ".",
                    placeholder: "0",
                    digits: 2,
                    digitsOptional: !1
                }
            }), module1.exports = Inputmask1;
        },
        function(module1, exports1, __webpack_require__1) {
            "use strict";
            var _inputmask1 = _interopRequireDefault1(__webpack_require__1(1));
            function _typeof1(obj1) {
                return _typeof1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof1(obj1) {
                    return typeof obj1;
                } : function _typeof1(obj1) {
                    return obj1 && "function" == typeof Symbol && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
                }, _typeof1(obj1);
            }
            function _classCallCheck1(instance1, Constructor1) {
                if (!(instance1 instanceof Constructor1)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn1(self1, call1) {
                return !call1 || "object" !== _typeof1(call1) && "function" != typeof call1 ? _assertThisInitialized1(self1) : call1;
            }
            function _assertThisInitialized1(self1) {
                if (void 0 === self1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self1;
            }
            function _inherits1(subClass1, superClass1) {
                if ("function" != typeof superClass1 && null !== superClass1) throw new TypeError("Super expression must either be null or a function");
                subClass1.prototype = Object.create(superClass1 && superClass1.prototype, {
                    constructor: {
                        value: subClass1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass1 && _setPrototypeOf1(subClass1, superClass1);
            }
            function _wrapNativeSuper1(Class1) {
                var _cache1 = "function" == typeof Map ? new Map : void 0;
                return _wrapNativeSuper1 = function _wrapNativeSuper1(Class1) {
                    if (null === Class1 || !_isNativeFunction1(Class1)) return Class1;
                    if ("function" != typeof Class1) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" != typeof _cache1) {
                        if (_cache1.has(Class1)) return _cache1.get(Class1);
                        _cache1.set(Class1, Wrapper1);
                    }
                    function Wrapper1() {
                        return _construct1(Class1, arguments, _getPrototypeOf1(this).constructor);
                    }
                    return Wrapper1.prototype = Object.create(Class1.prototype, {
                        constructor: {
                            value: Wrapper1,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), _setPrototypeOf1(Wrapper1, Class1);
                }, _wrapNativeSuper1(Class1);
            }
            function isNativeReflectConstruct1() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (e1) {
                    return !1;
                }
            }
            function _construct1(Parent1, args1, Class1) {
                return _construct1 = isNativeReflectConstruct1() ? Reflect.construct : function _construct1(Parent1, args1, Class1) {
                    var a1 = [
                        null
                    ];
                    a1.push.apply(a1, args1);
                    var Constructor1 = Function.bind.apply(Parent1, a1), instance1 = new Constructor1;
                    return Class1 && _setPrototypeOf1(instance1, Class1.prototype), instance1;
                }, _construct1.apply(null, arguments);
            }
            function _isNativeFunction1(fn1) {
                return -1 !== Function.toString.call(fn1).indexOf("[native code]");
            }
            function _setPrototypeOf1(o1, p1) {
                return _setPrototypeOf1 = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
                    return o1.__proto__ = p1, o1;
                }, _setPrototypeOf1(o1, p1);
            }
            function _getPrototypeOf1(o1) {
                return _getPrototypeOf1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
                    return o1.__proto__ || Object.getPrototypeOf(o1);
                }, _getPrototypeOf1(o1);
            }
            function _interopRequireDefault1(obj1) {
                return obj1 && obj1.__esModule ? obj1 : {
                    default: obj1
                };
            }
            if (document.head.createShadowRoot || document.head.attachShadow) {
                var InputmaskElement1 = function(_HTMLElement1) {
                    function InputmaskElement1() {
                        var _this1;
                        _classCallCheck1(this, InputmaskElement1), _this1 = _possibleConstructorReturn1(this, _getPrototypeOf1(InputmaskElement1).call(this));
                        var attributeNames1 = _this1.getAttributeNames(), shadow1 = _this1.attachShadow({
                            mode: "closed"
                        }), input1 = document.createElement("input");
                        for(var attr1 in input1.type = "text", shadow1.appendChild(input1), attributeNames1)Object.prototype.hasOwnProperty.call(attributeNames1, attr1) && input1.setAttribute("data-inputmask-" + attributeNames1[attr1], _this1.getAttribute(attributeNames1[attr1]));
                        return (new _inputmask1.default).mask(input1), input1.inputmask.shadowRoot = shadow1, _this1;
                    }
                    return _inherits1(InputmaskElement1, _HTMLElement1), InputmaskElement1;
                }(_wrapNativeSuper1(HTMLElement));
                customElements.define("input-mask", InputmaskElement1);
            }
        }
    ], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports1, name1, getter1) {
        __webpack_require__.o(exports1, name1) || Object.defineProperty(exports1, name1, {
            enumerable: !0,
            get: getter1
        });
    }, __webpack_require__.r = function(exports1) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports1, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports1, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value1, mode1) {
        if (1 & mode1 && (value1 = __webpack_require__(value1)), 8 & mode1) return value1;
        if (4 & mode1 && "object" == typeof value1 && value1 && value1.__esModule) return value1;
        var ns1 = Object.create(null);
        if (__webpack_require__.r(ns1), Object.defineProperty(ns1, "default", {
            enumerable: !0,
            value: value1
        }), 2 & mode1 && "string" != typeof value1) for(var key1 in value1)__webpack_require__.d(ns1, key1, (function(key1) {
            return value1[key1];
        }).bind(null, key1));
        return ns1;
    }, __webpack_require__.n = function(module1) {
        var getter1 = module1 && module1.__esModule ? function getDefault1() {
            return module1.default;
        } : function getModuleExports1() {
            return module1;
        };
        return __webpack_require__.d(getter1, "a", getter1), getter1;
    }, __webpack_require__.o = function(object1, property1) {
        return Object.prototype.hasOwnProperty.call(object1, property1);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
    function __webpack_require__(moduleId1) {
        if (installedModules[moduleId1]) return installedModules[moduleId1].exports;
        var module1 = installedModules[moduleId1] = {
            i: moduleId1,
            l: !1,
            exports: {}
        };
        return modules[moduleId1].call(module1.exports, module1, module1.exports, __webpack_require__), module1.l = !0, module1.exports;
    }
});

//# sourceMappingURL=index.c471b2b9.js.map
