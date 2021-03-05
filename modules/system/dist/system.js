System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports({
        load: load,
        unload: unload
      });

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

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
      /* global Reflect, Promise */

      var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };

      function __extends(d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
          return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
              function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
              function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
      }

      function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
          function verb(n) { return function (v) { return step([n, v]); }; }
          function step(op) {
              if (f) throw new TypeError("Generator is already executing.");
              while (_) try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                  if (y = 0, t) op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0: case 1: t = op; break;
                      case 4: _.label++; return { value: op[1], done: false };
                      case 5: _.label++; y = op[1]; op = [0]; continue;
                      case 7: op = _.ops.pop(); _.trys.pop(); continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                          if (t[2]) _.ops.pop();
                          _.trys.pop(); continue;
                  }
                  op = body.call(thisArg, _);
              } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
              if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
          }
      }

      function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                  r[k] = a[j];
          return r;
      }

      var EventDisposable = /** @class */ (function () {
          // Constructor
          function EventDisposable(listeners, eventName, index) {
              this.listeners = listeners;
              this.eventName = eventName;
              this.index = index;
          }
          // Public Methods
          /**
           * Unsubscribes to the event.
           */
          EventDisposable.prototype.dispose = function () {
              this.listeners[this.eventName].splice(this.index, 1);
          };
          return EventDisposable;
      }());
      var EventEmitter = /** @class */ (function () {
          // Constructor
          function EventEmitter() {
              this.listeners = {};
          }
          // Public Methods
          /**
           * Subscribes to an event.
           * @param {string} eventName Event name.
           * @param {EventCallback} cb Event callback.
           */
          EventEmitter.prototype.on = function (eventName, cb) {
              this.listeners[eventName] = this.listeners[eventName] || [];
              var length = this.listeners[eventName].push(cb);
              return new EventDisposable(this.listeners, eventName, length - 1);
          };
          /**
           * Unsubscribes to an event.
           * @param {string} eventName Event name.
           * @param {EventCallback} cb Event callback.
           */
          EventEmitter.prototype.off = function (eventName, cb) {
              var listeners = this.listeners[eventName];
              if (listeners) {
                  for (var i = listeners.length; i > 0; i--) {
                      if (listeners[i] === cb) {
                          listeners.splice(i, 1);
                          break;
                      }
                  }
              }
          };
          /**
           * Emits an event.
           * @param {string} eventName Event name.
           * @param args Optional parameters.
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          EventEmitter.prototype.emit = function (eventName) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
              }
              var listeners = this.listeners[eventName];
              if (listeners) {
                  listeners.forEach(function (cb) {
                      cb.apply(void 0, args);
                  });
                  return true;
              }
              return false;
          };
          EventEmitter.prototype.dispose = function () {
              this.listeners = {};
          };
          return EventEmitter;
      }());

      /**
       * Array containing every addons.
       */
      var addons = [];

      /**
       * Returned when a circuit has no function defined.
       * @param message Circuit has no function set
       */
      var NoFuncError = /** @class */ (function (_super) {
          __extends(NoFuncError, _super);
          function NoFuncError() {
              var _this = _super.call(this, 'Circuit has no function set') || this;
              Object.setPrototypeOf(_this, NoFuncError.prototype);
              return _this;
          }
          return NoFuncError;
      }(Error));
      var undefinedFunc = function () { return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, new Promise(function (resolve, reject) {
                      reject(new NoFuncError());
                  })];
          });
      }); };
      /**
       * Array containing every circuit.
       */
      var circuits = [];
      /**
       * The Circuit Class, that may contain Modules to add resilience patterns.
       */
      var Circuit = /** @class */ (function (_super) {
          __extends(Circuit, _super);
          // Constructor
          function Circuit(factory) {
              var _a;
              var _this = _super.call(this) || this;
              _this.name = (factory === null || factory === void 0 ? void 0 : factory.name) ? factory.name : "Circuit" + circuits.length;
              for (var _i = 0, addons_1 = addons; _i < addons_1.length; _i++) {
                  var addon = addons_1[_i];
                  if (addon.onCircuitCreate) {
                      addon.onCircuitCreate(_this, factory === null || factory === void 0 ? void 0 : factory.options);
                  }
              }
              _this.func = (factory === null || factory === void 0 ? void 0 : factory.func) ? factory.func : undefinedFunc;
              _this.modules = ((_a = factory === null || factory === void 0 ? void 0 : factory.options) === null || _a === void 0 ? void 0 : _a.modules) || [];
              circuits.push(_this);
              return _this;
          }
          Object.defineProperty(Circuit.prototype, "activeModules", {
              // Computed
              get: function () {
                  return this.modules.filter(function (m) { return m.active; });
              },
              enumerable: false,
              configurable: true
          });
          // Public Methods
          /**
           * Modifies the Circuit function.
           * @param {CircuitFunction} func The Circuit function.
           */
          Circuit.prototype.fn = function (func) {
              this.func = func;
              return this;
          };
          /**
           * Executes the Circuit function.
           * @param params Eventual parameters to pass to the Circuit function.
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Circuit.prototype.execute = function () {
              var params = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  params[_i] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec, args, i;
                  var _a, _b;
                  return __generator(this, function (_c) {
                      if (this.activeModules.length) {
                          if (this.activeModules.length > 1) {
                              args = [];
                              for (i = 2; i < this.activeModules.length; i++) {
                                  args.push(this, this.activeModules[i].execute.bind(this.activeModules[i]));
                              }
                              args.push.apply(args, __spreadArrays([this, this.func], params));
                              _exec = (_a = this.activeModules[0]).execute.apply(_a, __spreadArrays([this, this.activeModules[1].execute.bind(this.activeModules[1])], args));
                          }
                          else {
                              _exec = (_b = this.activeModules[0]).execute.apply(_b, __spreadArrays([this, this.func], params));
                          }
                      }
                      else {
                          _exec = this.func.apply(this, params);
                      }
                      this.emit('execute', this, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          /**
           * Disposes the Circuit, to cleanup every interval and timeouts.
           */
          Circuit.prototype.dispose = function () {
              _super.prototype.dispose.call(this);
              if (this.modules) {
                  this.modules.forEach(function (mod) { return mod.dispose(); });
              }
          };
          return Circuit;
      }(EventEmitter));

      /**
       * Properties that customizes the module behavior.
       */
      var ModuleOptions = /** @class */ (function () {
          function ModuleOptions() {
          }
          return ModuleOptions;
      }());
      /**
       * Array containing every module.
       */
      var modules = [];
      /**
       * The Module Class, that may modifies the circuit behavior.
       */
      var Module = /** @class */ (function (_super) {
          __extends(Module, _super);
          // Constructor
          function Module(options) {
              var _this = _super.call(this) || this;
              _this.active = ((options === null || options === void 0 ? void 0 : options.active) !== undefined) ? options.active : true;
              _this.name = ((options === null || options === void 0 ? void 0 : options.name) !== undefined) ? options.name : "Module" + modules.length;
              for (var _i = 0, addons_1 = addons; _i < addons_1.length; _i++) {
                  var addon = addons_1[_i];
                  if (addon.onModuleCreate) {
                      addon.onModuleCreate(_this, options);
                  }
              }
              _this.logger = options === null || options === void 0 ? void 0 : options.logger;
              modules.push(_this);
              return _this;
          }
          /**
           * Called when the module is executed by the circuit.
           * @param circuit The Circuit reference.
           * @param promise The Circuit function.
           * @param params The Eventual parameters to use with the Circuit function.
           * @example
           * // Empty code to execute the function and emit the execute event
           * const _exec = promise(...params);
           * this.emit('execute', circuit, _exec);
           * return _exec;
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Module.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              var _exec = promise.apply(void 0, params);
              this.emit('execute', circuit, _exec);
              return _exec;
          };
          /**
           * Returns params passed to the execute method.
           * @param circuit The Circuit reference.
           * @param params The Eventual parameters to use with the Circuit function.
           * @example
           * const _params = this.getExecParams(circuit, params);
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Module.prototype.getExecParams = function (circuit, params) {
              var _this = this;
              var index = circuit.modules.findIndex(function (m) { return m === _this; });
              var keepIndex = params.length - ((circuit.modules.length - 1 - index) * 2);
              return params.filter(function (p, i) { return (params.length - i) <= keepIndex; });
          };
          return Module;
      }(EventEmitter));

      /**
       * Properties that customizes the timeout behavior.
       */
      var TimeoutOptions = /** @class */ (function (_super) {
          __extends(TimeoutOptions, _super);
          function TimeoutOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return TimeoutOptions;
      }(ModuleOptions));
      /**
       * Returned when a function times out.
       * @param message Timed out
       */
      var TimeoutError = /** @class */ (function (_super) {
          __extends(TimeoutError, _super);
          function TimeoutError() {
              var _this = _super.call(this, 'Timed out') || this;
              Object.setPrototypeOf(_this, TimeoutError.prototype);
              return _this;
          }
          return TimeoutError;
      }(Error));
      /**
       * The Timeout Module, that allows to ignore the result of the function if it takes too long.
       */
      var Timeout = /** @class */ (function (_super) {
          __extends(Timeout, _super);
          // Constructor
          function Timeout(options) {
              var _this = _super.call(this, options) || this;
              _this.delay = ((options === null || options === void 0 ? void 0 : options.delay) !== undefined) ? options.delay : 60000;
              return _this;
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Timeout.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseTimeout.apply(this, __spreadArrays([circuit, this.delay, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Timeout.prototype._promiseTimeout = function (circuit, time, promise) {
              var params = [];
              for (var _i = 3; _i < arguments.length; _i++) {
                  params[_i - 3] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var timeout;
                  var _this = this;
                  return __generator(this, function (_a) {
                      if (time !== 0 && time !== Infinity) {
                          return [2 /*return*/, Promise.race([
                                  promise.apply(void 0, params),
                                  new Promise(function (resolve, reject) {
                                      timeout = setTimeout(function () {
                                          _this.emitTimeout(circuit);
                                          reject(new TimeoutError());
                                      }, time);
                                  })
                              ])
                                  .then(function (result) {
                                  clearTimeout(timeout);
                                  return result;
                              })
                                  .catch(function (result) {
                                  clearTimeout(timeout);
                                  return Promise.reject(result);
                              })];
                      }
                      else {
                          return [2 /*return*/, promise.apply(void 0, params)];
                      }
                  });
              });
          };
          Timeout.prototype.emitTimeout = function (circuit) {
              var _a;
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Has timed out");
              this.emit('timeout', circuit);
          };
          return Timeout;
      }(Module));

      function delay(ms) {
          if (ms === void 0) { ms = 1; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2 /*return*/, new Promise(function (resolve) {
                          setTimeout(function () {
                              resolve();
                          }, ms);
                      })];
              });
          });
      }

      /**
       * Properties that customizes the retry behavior.
       */
      var RetryOptions = /** @class */ (function (_super) {
          __extends(RetryOptions, _super);
          function RetryOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return RetryOptions;
      }(ModuleOptions));
      /**
       * The Retry Module, that allows to retry a function after it fails.
       */
      var Retry = /** @class */ (function (_super) {
          __extends(Retry, _super);
          // Constructor
          function Retry(options) {
              var _this = _super.call(this, options) || this;
              _this.attempts = ((options === null || options === void 0 ? void 0 : options.attempts) !== undefined) ? options.attempts : 2;
              _this.interval = ((options === null || options === void 0 ? void 0 : options.interval) !== undefined) ? options.interval : 0;
              _this.onRejection = (options === null || options === void 0 ? void 0 : options.onRejection) || (function () { return true; });
              return _this;
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Retry.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseRetry.apply(this, __spreadArrays([circuit, this.attempts + 1, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Retry.prototype._promiseRetry = function (circuit, attempts, promise) {
              var _a, _b;
              var params = [];
              for (var _i = 3; _i < arguments.length; _i++) {
                  params[_i - 3] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _this = this;
                  return __generator(this, function (_c) {
                      if (attempts - 1 === 0) {
                          this.emit('retry', circuit, this.attempts);
                          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Retry: (" + this.attempts + "/" + this.attempts + ")");
                          return [2 /*return*/, promise.apply(void 0, params)];
                      }
                      if (attempts !== (this.attempts + 1)) {
                          this.emit('retry', circuit, this.attempts - attempts + 1);
                          (_b = this.logger) === null || _b === void 0 ? void 0 : _b.debug(circuit.name + "/" + this.name + " - Retry: (" + (this.attempts - attempts + 1) + "/" + this.attempts + ")");
                      }
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      return [2 /*return*/, promise.apply(void 0, params).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                              var shouldRetry, interval;
                              return __generator(this, function (_a) {
                                  switch (_a.label) {
                                      case 0:
                                          shouldRetry = this.onRejection(err);
                                          interval = (typeof shouldRetry === 'number') ? shouldRetry : this.interval;
                                          if (!(shouldRetry === false)) return [3 /*break*/, 1];
                                          return [2 /*return*/, Promise.reject(err)];
                                      case 1: return [4 /*yield*/, delay(interval)];
                                      case 2:
                                          _a.sent();
                                          return [2 /*return*/, this._promiseRetry.apply(this, __spreadArrays([circuit, (attempts - 1), promise], params))];
                                  }
                              });
                          }); })];
                  });
              });
          };
          return Retry;
      }(Module));

      /**
       * Properties that customizes the ratelimit behavior.
       */
      var RatelimitOptions = /** @class */ (function (_super) {
          __extends(RatelimitOptions, _super);
          function RatelimitOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return RatelimitOptions;
      }(ModuleOptions));
      /**
       * Returned when the ratelimit is reached.
       * @param message Ratelimited
       * @param remainingTimeInRatelimit Remaining time in ratelimit state
       */
      var RatelimitError = /** @class */ (function (_super) {
          __extends(RatelimitError, _super);
          function RatelimitError(remainingTimeInRatelimit) {
              var _this = _super.call(this, 'Ratelimited') || this;
              _this.remainingTimeInRatelimit = remainingTimeInRatelimit;
              Object.setPrototypeOf(_this, RatelimitError.prototype);
              return _this;
          }
          return RatelimitError;
      }(Error));
      /**
       * TODO
       */
      var Ratelimit = /** @class */ (function (_super) {
          __extends(Ratelimit, _super);
          // Constructor
          function Ratelimit(options) {
              var _this = _super.call(this, options) || this;
              _this.limitPeriod = ((options === null || options === void 0 ? void 0 : options.limitPeriod) !== undefined) ? options.limitPeriod : 0;
              _this.limitForPeriod = ((options === null || options === void 0 ? void 0 : options.limitForPeriod) !== undefined) ? options.limitForPeriod : Infinity;
              _this.requestsTime = [];
              return _this;
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Ratelimit.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseRatelimit.apply(this, __spreadArrays([circuit, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Ratelimit.prototype._promiseRatelimit = function (circuit, promise) {
              var _a;
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var now, deltaSinceFirstRequest;
                  return __generator(this, function (_b) {
                      if (!this.limitPeriod) {
                          return [2 /*return*/, promise.apply(void 0, params)];
                      }
                      now = (new Date()).getTime();
                      if (this.requestsTime.length < this.limitForPeriod) {
                          this.requestsTime.push(now);
                          return [2 /*return*/, promise.apply(void 0, params)];
                      }
                      else {
                          deltaSinceFirstRequest = now - this.requestsTime[0];
                          if (deltaSinceFirstRequest > this.limitPeriod) {
                              this.requestsTime.shift();
                              this.requestsTime.push(now);
                              return [2 /*return*/, promise.apply(void 0, params)];
                          }
                          else {
                              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Ratelimited");
                              this.emit('ratelimit', circuit);
                              return [2 /*return*/, Promise.reject(new RatelimitError(this.limitPeriod - deltaSinceFirstRequest))];
                          }
                      }
                  });
              });
          };
          return Ratelimit;
      }(Module));

      /**
       * Properties that customizes the fallback behavior.
       */
      var FallbackOptions = /** @class */ (function (_super) {
          __extends(FallbackOptions, _super);
          function FallbackOptions() {
              var _this = _super !== null && _super.apply(this, arguments) || this;
              /**
               * The callback, called when the circuit rejects, can be used to reject another error.
               */
              _this.callback = (function (err) { return err; });
              return _this;
          }
          return FallbackOptions;
      }(ModuleOptions));
      /**
       * The Fallback Module, that allows to filter errors.
       */
      var Fallback = /** @class */ (function (_super) {
          __extends(Fallback, _super);
          // Constructor
          function Fallback(options) {
              var _this = _super.call(this, options) || this;
              _this.callback = (options === null || options === void 0 ? void 0 : options.callback) || (function (err) { return err; });
              return _this;
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Fallback.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseFallback.apply(this, __spreadArrays([circuit, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Fallback.prototype._promiseFallback = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _this = this;
                  return __generator(this, function (_a) {
                      return [2 /*return*/, new Promise(function (resolve, reject) {
                              promise.apply(void 0, params).then(function (res) {
                                  resolve(res);
                              })
                                  .catch(function (err) {
                                  reject(_this.callback(err));
                              });
                          })];
                  });
              });
          };
          return Fallback;
      }(Module));

      /**
       * Returned when a breaker module is in open state.
       * @param message Circuit is opened
       */
      var BreakerError = /** @class */ (function (_super) {
          __extends(BreakerError, _super);
          function BreakerError() {
              var _this = _super.call(this, 'Circuit is opened') || this;
              Object.setPrototypeOf(_this, BreakerError.prototype);
              return _this;
          }
          return BreakerError;
      }(Error));
      /**
       * Returned when a breaker module is in half-open state and the maximum number of requests in half-open has been sent.
       * @param message Max allowed requests reached
       */
      var BreakerMaxAllowedRequestError = /** @class */ (function (_super) {
          __extends(BreakerMaxAllowedRequestError, _super);
          function BreakerMaxAllowedRequestError() {
              var _this = _super.call(this, 'Max allowed requests reached') || this;
              Object.setPrototypeOf(_this, BreakerError.prototype);
              return _this;
          }
          return BreakerMaxAllowedRequestError;
      }(Error));
      /**
       * Breaker states.
       */
      var BreakerState;
      (function (BreakerState) {
          BreakerState["CLOSED"] = "closed";
          BreakerState["HALF_OPENED"] = "half-opened";
          BreakerState["OPENED"] = "opened";
      })(BreakerState || (BreakerState = {}));
      /**
       * Properties that customizes the sliding window breaker behavior.
       */
      var SlidingWindowBreakerOptions = /** @class */ (function (_super) {
          __extends(SlidingWindowBreakerOptions, _super);
          function SlidingWindowBreakerOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return SlidingWindowBreakerOptions;
      }(ModuleOptions));
      var SlidingWindowRequestResult;
      (function (SlidingWindowRequestResult) {
          SlidingWindowRequestResult[SlidingWindowRequestResult["SUCCESS"] = 0] = "SUCCESS";
          SlidingWindowRequestResult[SlidingWindowRequestResult["FAILURE"] = 1] = "FAILURE";
          SlidingWindowRequestResult[SlidingWindowRequestResult["TIMEOUT"] = 2] = "TIMEOUT";
      })(SlidingWindowRequestResult || (SlidingWindowRequestResult = {}));
      var SlidingWindowBreaker = /** @class */ (function (_super) {
          __extends(SlidingWindowBreaker, _super);
          function SlidingWindowBreaker(options) {
              var _this = _super.call(this, options) || this;
              _this.halfOpenMaxDelayTimeout = 0;
              _this.openTimeout = 0;
              _this.state = ((options === null || options === void 0 ? void 0 : options.state) !== undefined) ? options.state : BreakerState.CLOSED;
              _this.openStateDelay = ((options === null || options === void 0 ? void 0 : options.openStateDelay) !== undefined) ? options.openStateDelay : 60 * 1000;
              _this.halfOpenStateMaxDelay = ((options === null || options === void 0 ? void 0 : options.halfOpenStateMaxDelay) !== undefined) ? options.halfOpenStateMaxDelay : 0;
              if (_this.state === BreakerState.OPENED) {
                  _this.setHalfDelay();
              }
              else if (_this.state === BreakerState.HALF_OPENED) {
                  _this.setOpenDelay();
              }
              _this.slidingWindowSize = ((options === null || options === void 0 ? void 0 : options.slidingWindowSize) !== undefined) ? options.slidingWindowSize : 10;
              _this.minimumNumberOfCalls = ((options === null || options === void 0 ? void 0 : options.minimumNumberOfCalls) !== undefined) ? options.minimumNumberOfCalls : 10;
              _this.failureRateThreshold = ((options === null || options === void 0 ? void 0 : options.failureRateThreshold) !== undefined) ? options.failureRateThreshold : 50;
              _this.slowCallDurationThreshold = ((options === null || options === void 0 ? void 0 : options.slowCallDurationThreshold) !== undefined) ? options.slowCallDurationThreshold : 60000;
              _this.slowCallRateThreshold = ((options === null || options === void 0 ? void 0 : options.slowCallRateThreshold) !== undefined) ? options === null || options === void 0 ? void 0 : options.slowCallRateThreshold : 100;
              _this.permittedNumberOfCallsInHalfOpenState = ((options === null || options === void 0 ? void 0 : options.permittedNumberOfCallsInHalfOpenState) !== undefined) ? options.permittedNumberOfCallsInHalfOpenState : 2;
              _this.nbCallsInHalfOpenedState = 0;
              _this.callsInHalfOpenedState = [];
              _this.callsInClosedState = [];
              _this.onError = (options === null || options === void 0 ? void 0 : options.onError) || (function () { return true; });
              return _this;
          }
          SlidingWindowBreaker.prototype.reinitializeCounters = function () {
              this.nbCallsInHalfOpenedState = 0;
              this.callsInClosedState = [];
              this.callsInHalfOpenedState = [];
          };
          SlidingWindowBreaker.prototype.onOpened = function () {
              this.reinitializeCounters();
          };
          SlidingWindowBreaker.prototype.onClosed = function () {
              this.reinitializeCounters();
          };
          SlidingWindowBreaker.prototype.onHalfOpened = function () {
              this.reinitializeCounters();
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingWindowBreaker.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseBreaker.apply(this, __spreadArrays([circuit, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingWindowBreaker.prototype._promiseBreaker = function (circuit, promise) {
              var _a;
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _b;
                  return __generator(this, function (_c) {
                      switch (_c.label) {
                          case 0:
                              _b = this.state;
                              switch (_b) {
                                  case BreakerState.OPENED: return [3 /*break*/, 1];
                                  case BreakerState.HALF_OPENED: return [3 /*break*/, 2];
                                  case BreakerState.CLOSED: return [3 /*break*/, 4];
                              }
                              return [3 /*break*/, 6];
                          case 1:
                              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Circuit is opened");
                              return [2 /*return*/, Promise.reject(new BreakerError())];
                          case 2: return [4 /*yield*/, this.executeInHalfOpened.apply(this, __spreadArrays([promise], params))];
                          case 3: return [2 /*return*/, _c.sent()];
                          case 4: return [4 /*yield*/, this.executeInClosed.apply(this, __spreadArrays([promise], params))];
                          case 5: return [2 /*return*/, _c.sent()];
                          case 6: return [2 /*return*/];
                      }
                  });
              });
          };
          SlidingWindowBreaker.prototype.adjustedRequestResult = function (requestResult, shouldReportFailure) {
              if (!shouldReportFailure && requestResult === SlidingWindowRequestResult.FAILURE) {
                  return SlidingWindowRequestResult.SUCCESS;
              }
              return requestResult;
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingWindowBreaker.prototype.executeInHalfOpened = function (promise) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _a, requestResult, response, shouldReportFailure;
                  return __generator(this, function (_b) {
                      switch (_b.label) {
                          case 0:
                              if (!(this.nbCallsInHalfOpenedState < this.permittedNumberOfCallsInHalfOpenState)) return [3 /*break*/, 2];
                              this.nbCallsInHalfOpenedState++;
                              return [4 /*yield*/, this.executePromise.apply(this, __spreadArrays([promise], params))];
                          case 1:
                              _a = _b.sent(), requestResult = _a.requestResult, response = _a.response, shouldReportFailure = _a.shouldReportFailure;
                              this.callsInHalfOpenedState.push(this.adjustedRequestResult(requestResult, shouldReportFailure));
                              if (this.callsInHalfOpenedState.length == this.permittedNumberOfCallsInHalfOpenState) {
                                  this.checkCallRatesHalfOpen(this.open.bind(this), this.close.bind(this));
                              }
                              if (requestResult === SlidingWindowRequestResult.FAILURE) {
                                  return [2 /*return*/, Promise.reject(response)];
                              }
                              else {
                                  return [2 /*return*/, Promise.resolve(response)];
                              }
                          case 2: return [2 /*return*/, Promise.reject(new BreakerMaxAllowedRequestError())];
                          case 3: return [2 /*return*/];
                      }
                  });
              });
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingWindowBreaker.prototype.executePromise = function (promise) {
              var _this = this;
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              var beforeRequest = (new Date()).getTime();
              return promise.apply(void 0, params).then(function (res) {
                  var afterRequest = (new Date()).getTime();
                  var requestResp = SlidingWindowRequestResult.SUCCESS;
                  if (_this.slowCallDurationThreshold !== 0 && _this.slowCallDurationThreshold !== Infinity) {
                      if ((afterRequest - beforeRequest) > _this.slowCallDurationThreshold) {
                          requestResp = SlidingWindowRequestResult.TIMEOUT;
                      }
                  }
                  return { requestResult: requestResp, response: res, shouldReportFailure: false };
              })
                  .catch(function (err) {
                  return { requestResult: SlidingWindowRequestResult.FAILURE, response: err, shouldReportFailure: _this.onError(err) };
              });
          };
          SlidingWindowBreaker.prototype.checkCallRatesHalfOpen = function (callbackFailure, callbackSuccess) {
              var _a = this.callsInHalfOpenedState.reduce(this.getNbSlowAndFailure, { nbSlow: 0, nbFailure: 0 }), nbSlow = _a.nbSlow, nbFailure = _a.nbFailure;
              this.checkResult(nbSlow, nbFailure, this.callsInHalfOpenedState.length, callbackFailure, callbackSuccess);
          };
          SlidingWindowBreaker.prototype.checkResult = function (nbSlow, nbFailure, nbCalls, callbackFailure, callbackSuccess) {
              if ((this.slowCallRateThreshold < 100 && (((nbSlow / nbCalls) * 100) >= this.slowCallRateThreshold)) ||
                  (this.failureRateThreshold < 100 && (((nbFailure / nbCalls) * 100) >= this.failureRateThreshold))) {
                  callbackFailure();
              }
              else {
                  if (callbackSuccess) {
                      callbackSuccess();
                  }
              }
          };
          SlidingWindowBreaker.prototype.getNbSlowAndFailure = function (acc, current) {
              switch (current) {
                  case SlidingWindowRequestResult.FAILURE:
                      acc.nbFailure++;
                      break;
                  case SlidingWindowRequestResult.TIMEOUT:
                      acc.nbSlow++;
              }
              return acc;
          };
          SlidingWindowBreaker.prototype._open = function (circuit) {
              var _a;
              if (this.state !== BreakerState.OPENED) {
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Breaker: Open");
                  this.open();
              }
          };
          SlidingWindowBreaker.prototype._close = function (circuit) {
              var _a;
              if (this.state !== BreakerState.CLOSED) {
                  (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + this.name + " - Breaker: Close");
                  this.close();
              }
          };
          SlidingWindowBreaker.prototype.open = function () {
              if (this.state !== BreakerState.OPENED) {
                  this.clearHalfOpenTimeout();
                  this.state = BreakerState.OPENED;
                  this.setHalfDelay();
                  this.onOpened();
                  this.emit('state-changed', this.state);
              }
          };
          SlidingWindowBreaker.prototype.halfOpen = function () {
              if (this.state !== BreakerState.HALF_OPENED) {
                  this.clearHalfOpenTimeout();
                  this.state = BreakerState.HALF_OPENED;
                  this.setOpenDelay();
                  this.onHalfOpened();
                  this.emit('state-changed', this.state);
              }
          };
          SlidingWindowBreaker.prototype.close = function () {
              if (this.state !== BreakerState.CLOSED) {
                  this.clearHalfOpenTimeout();
                  this.state = BreakerState.CLOSED;
                  this.onClosed();
                  this.emit('state-changed', this.state);
              }
          };
          SlidingWindowBreaker.prototype.setHalfDelay = function () {
              var _this = this;
              this.openTimeout = setTimeout(function () {
                  var _a;
                  (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.debug(_this.name + " - Breaker: Half Open");
                  _this.halfOpen();
              }, this.openStateDelay);
          };
          SlidingWindowBreaker.prototype.setOpenDelay = function () {
              var _this = this;
              if (this.halfOpenStateMaxDelay) {
                  this.halfOpenMaxDelayTimeout = setTimeout(function () {
                      _this.halfOpenMaxDelayTimeout = 0;
                      _this.open();
                  }, this.halfOpenStateMaxDelay);
              }
          };
          SlidingWindowBreaker.prototype.clearHalfOpenTimeout = function () {
              if (this.halfOpenMaxDelayTimeout) {
                  clearTimeout(this.halfOpenMaxDelayTimeout);
                  this.halfOpenMaxDelayTimeout = 0;
              }
          };
          SlidingWindowBreaker.prototype.dispose = function () {
              _super.prototype.dispose.call(this);
              this.clearHalfOpenTimeout();
              if (this.openTimeout) {
                  clearTimeout(this.openTimeout);
                  this.openTimeout = 0;
              }
          };
          return SlidingWindowBreaker;
      }(Module));

      var CacheItem = /** @class */ (function () {
          function CacheItem(ttl, res) {
              this.ttl = ttl;
              this.res = res;
          }
          return CacheItem;
      }());
      var MapCache = /** @class */ (function () {
          // Constructor
          function MapCache() {
              this.map = new Map();
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          MapCache.prototype.set = function (ttl) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              this._setLoopMap.apply(this, __spreadArrays([this.map, ttl], params));
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          MapCache.prototype.get = function () {
              var params = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  params[_i] = arguments[_i];
              }
              return this._getLoopMap.apply(this, __spreadArrays([this.map], params));
          };
          MapCache.prototype.clear = function () {
              return this._clearLoopMap(this.map);
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          MapCache.prototype._setLoopMap = function (map, ttl) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              if (params.length === 2) {
                  var ref = {
                      map: new Map(),
                      cache: new CacheItem(Date.now() + ttl, params[1])
                  };
                  map.set(params[0], ref);
              }
              else {
                  if (map.get(params[0])) {
                      var param = params.splice(0, 1)[0];
                      this._setLoopMap.apply(this, __spreadArrays([map.get(param).map, ttl], params));
                  }
                  else {
                      var subMap = new Map();
                      map.set(params[0], {
                          map: subMap
                      });
                      params.splice(0, 1);
                      this._setLoopMap.apply(this, __spreadArrays([subMap, ttl], params));
                  }
              }
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          MapCache.prototype._getLoopMap = function (map) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              if (!map) {
                  return null;
              }
              else {
                  if (params.length === 1) {
                      return map.get(params[0]) && map.get(params[0]).cache;
                  }
                  else {
                      var param = params.splice(0, 1)[0];
                      if (map.get(param)) {
                          return this._getLoopMap.apply(this, __spreadArrays([map.get(param).map], params));
                      }
                      else {
                          return null;
                      }
                  }
              }
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          MapCache.prototype._clearLoopMap = function (map) {
              var _this = this;
              var hasDeleted = false;
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              map.forEach(function (item) {
                  if (item.map) {
                      var mapHasDeleted = _this._clearLoopMap(item.map);
                      if (mapHasDeleted === true) {
                          hasDeleted = true;
                      }
                  }
                  if (item.cache && Date.now() > item.cache.ttl) {
                      delete item.cache;
                      hasDeleted = true;
                  }
              });
              return hasDeleted;
          };
          return MapCache;
      }());

      /**
       * Properties that customizes the cache behavior.
       */
      var CacheOptions = /** @class */ (function (_super) {
          __extends(CacheOptions, _super);
          function CacheOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return CacheOptions;
      }(ModuleOptions));
      /**
       * The Cache Module, that allows to cache result for an amount of time.
       */
      var Cache = /** @class */ (function (_super) {
          __extends(Cache, _super);
          // Constructor
          function Cache(options) {
              var _this = _super.call(this, options) || this;
              _this.ttl = ((options === null || options === void 0 ? void 0 : options.ttl) !== undefined) ? options.ttl : 6000; // 1 minute
              _this.getInformationFromCache = ((options === null || options === void 0 ? void 0 : options.getInformationFromCache) !== undefined) ? options.getInformationFromCache : false;
              _this._cacheInterval = null;
              _this._cacheClearInterval = 0;
              _this.cacheClearInterval = ((options === null || options === void 0 ? void 0 : options.cacheClearInterval) !== undefined) ? options.cacheClearInterval : 900000; // 15 minutes
              _this.cache = new MapCache();
              return _this;
          }
          Object.defineProperty(Cache.prototype, "cacheClearInterval", {
              // Computed Attributes
              /**
               * Get the amount of time before the cache cleans itself up.
               */
              get: function () {
                  return this._cacheClearInterval;
              },
              /**
               * Set the amount of time before the cache cleans itself up.
               */
              set: function (interval) {
                  this._cacheClearInterval = interval;
                  this._initializeInterval();
              },
              enumerable: false,
              configurable: true
          });
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Cache.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseCache.apply(this, __spreadArrays([circuit, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          Cache.prototype.dispose = function () {
              _super.prototype.dispose.call(this);
              if (this._cacheInterval) {
                  clearTimeout(this._cacheInterval);
                  this._cacheInterval = null;
              }
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Cache.prototype._promiseCache = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _this = this;
                  return __generator(this, function (_a) {
                      return [2 /*return*/, new Promise(function (resolve, reject) {
                              var _a;
                              var _b;
                              var cacheRes = (_a = _this.cache).get.apply(_a, __spreadArrays([promise], params));
                              if (cacheRes) {
                                  if (typeof cacheRes.res === 'object' && _this.getInformationFromCache) {
                                      cacheRes.res._mollitiaIsFromCache = true;
                                  }
                                  var now = Date.now();
                                  if (_this.ttl !== Infinity && (cacheRes.ttl < now)) {
                                      promise.apply(void 0, params).then(function (res) {
                                          var _a;
                                          if (_this.ttl > 0) {
                                              (_a = _this.cache).set.apply(_a, __spreadArrays([_this.ttl, promise], params, [res]));
                                          }
                                          if (typeof res === 'object' && _this.getInformationFromCache) {
                                              res._mollitiaIsFromCache = false;
                                          }
                                          resolve(res);
                                      })
                                          .catch(function () {
                                          var _a;
                                          (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.debug(circuit.name + "/" + _this.name + " - Cache: Hit [Old]");
                                          resolve(cacheRes.res);
                                      });
                                  }
                                  else {
                                      (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.debug(circuit.name + "/" + _this.name + " - Cache: Hit");
                                      resolve(cacheRes.res);
                                  }
                              }
                              else {
                                  promise.apply(void 0, params).then(function (res) {
                                      var _a;
                                      if (_this.ttl > 0) {
                                          (_a = _this.cache).set.apply(_a, __spreadArrays([_this.ttl, promise], params, [res]));
                                      }
                                      if (typeof res === 'object' && _this.getInformationFromCache) {
                                          res._mollitiaIsFromCache = false;
                                      }
                                      resolve(res);
                                  })
                                      .catch(function (err) {
                                      reject(err);
                                  });
                              }
                          })];
                  });
              });
          };
          Cache.prototype._initializeInterval = function () {
              var _this = this;
              if (this._cacheInterval) {
                  clearTimeout(this._cacheInterval);
                  this._cacheInterval = null;
              }
              if (this.cacheClearInterval !== 0 && this.cacheClearInterval !== Infinity) {
                  this._cacheInterval = setTimeout(function () {
                      var _a;
                      var hasDeleted = _this.cache.clear();
                      if (hasDeleted) {
                          (_a = _this.logger) === null || _a === void 0 ? void 0 : _a.debug(_this.name + " - Cache: Clear");
                      }
                      _this._initializeInterval();
                  }, this.cacheClearInterval);
              }
          };
          return Cache;
      }(Module));

      /**
       * The Sliding Count Breaker Module, that allows to break the circuit if it fails too often.
       */
      var SlidingCountBreaker = /** @class */ (function (_super) {
          __extends(SlidingCountBreaker, _super);
          function SlidingCountBreaker(options) {
              var _this = _super.call(this, options) || this;
              _this.slidingWindowSize = ((options === null || options === void 0 ? void 0 : options.slidingWindowSize) !== undefined) ? options.slidingWindowSize : 10;
              if (_this.slidingWindowSize < _this.minimumNumberOfCalls) {
                  _this.slidingWindowSize = _this.minimumNumberOfCalls;
              }
              return _this;
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingCountBreaker.prototype.executeInClosed = function (promise) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _a, requestResult, response, shouldReportFailure, nbCalls;
                  return __generator(this, function (_b) {
                      switch (_b.label) {
                          case 0: return [4 /*yield*/, this.executePromise.apply(this, __spreadArrays([promise], params))];
                          case 1:
                              _a = _b.sent(), requestResult = _a.requestResult, response = _a.response, shouldReportFailure = _a.shouldReportFailure;
                              this.callsInClosedState.push(this.adjustedRequestResult(requestResult, shouldReportFailure));
                              nbCalls = this.callsInClosedState.length;
                              if (nbCalls >= this.minimumNumberOfCalls) {
                                  if (nbCalls > this.slidingWindowSize) {
                                      this.callsInClosedState.splice(0, (nbCalls - this.slidingWindowSize));
                                  }
                                  this.checkCallRatesClosed(this.open.bind(this));
                              }
                              if (requestResult === SlidingWindowRequestResult.FAILURE) {
                                  return [2 /*return*/, Promise.reject(response)];
                              }
                              else {
                                  return [2 /*return*/, Promise.resolve(response)];
                              }
                      }
                  });
              });
          };
          SlidingCountBreaker.prototype.checkCallRatesClosed = function (callbackFailure) {
              var _a = this.callsInClosedState.reduce(this.getNbSlowAndFailure, { nbSlow: 0, nbFailure: 0 }), nbSlow = _a.nbSlow, nbFailure = _a.nbFailure;
              this.checkResult(nbSlow, nbFailure, this.callsInClosedState.length, callbackFailure);
          };
          return SlidingCountBreaker;
      }(SlidingWindowBreaker));

      /**
       * The Sliding Time Breaker Module, that allows to break the circuit if it often fails on a time window.
       */
      var SlidingTimeBreaker = /** @class */ (function (_super) {
          __extends(SlidingTimeBreaker, _super);
          function SlidingTimeBreaker(options) {
              var _this = _super.call(this, options) || this;
              _this.slidingWindowSize = ((options === null || options === void 0 ? void 0 : options.slidingWindowSize) !== undefined) ? options.slidingWindowSize : 60;
              _this.maxSize = 1000;
              return _this;
          }
          SlidingTimeBreaker.prototype.filterCalls = function () {
              var nbCalls = this.callsInClosedState.length;
              if (nbCalls >= this.maxSize) {
                  this.callsInClosedState.shift;
                  nbCalls--;
              }
              var stillOk = true;
              var now = (new Date()).getTime();
              for (var i = 0; i < nbCalls && stillOk; i++) {
                  if ((now - this.callsInClosedState[0].timestamp) > this.slidingWindowSize) {
                      this.callsInClosedState.shift();
                  }
                  else {
                      stillOk = false;
                  }
              }
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          SlidingTimeBreaker.prototype.executeInClosed = function (promise) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _a, requestResult, response, shouldReportFailure;
                  return __generator(this, function (_b) {
                      switch (_b.label) {
                          case 0: return [4 /*yield*/, this.executePromise.apply(this, __spreadArrays([promise], params))];
                          case 1:
                              _a = _b.sent(), requestResult = _a.requestResult, response = _a.response, shouldReportFailure = _a.shouldReportFailure;
                              this.filterCalls();
                              this.callsInClosedState.push({
                                  result: this.adjustedRequestResult(requestResult, shouldReportFailure),
                                  timestamp: (new Date()).getTime()
                              });
                              if (this.callsInClosedState.length >= this.minimumNumberOfCalls) {
                                  this.checkCallRatesClosed(this.open.bind(this));
                              }
                              if (requestResult === SlidingWindowRequestResult.FAILURE) {
                                  return [2 /*return*/, Promise.reject(response)];
                              }
                              else {
                                  return [2 /*return*/, Promise.resolve(response)];
                              }
                      }
                  });
              });
          };
          SlidingTimeBreaker.prototype.checkCallRatesClosed = function (callbackFailure) {
              var _a = this.callsInClosedState.reduce(this.getNbSlowAndFailureTimeElem, { nbSlow: 0, nbFailure: 0 }), nbSlow = _a.nbSlow, nbFailure = _a.nbFailure;
              this.checkResult(nbSlow, nbFailure, this.callsInClosedState.length, callbackFailure);
          };
          SlidingTimeBreaker.prototype.getNbSlowAndFailureTimeElem = function (acc, current) {
              switch (current.result) {
                  case SlidingWindowRequestResult.FAILURE:
                      acc.nbFailure++;
                      break;
                  case SlidingWindowRequestResult.TIMEOUT:
                      acc.nbSlow++;
              }
              return acc;
          };
          return SlidingTimeBreaker;
      }(SlidingWindowBreaker));

      /**
       * Properties that customizes the bulkhead behavior.
       */
      var BulkheadOptions = /** @class */ (function (_super) {
          __extends(BulkheadOptions, _super);
          function BulkheadOptions() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return BulkheadOptions;
      }(ModuleOptions));
      /**
       * Returned when a bulkhead module concurrent buffer and queue are overloaded.
       * @param message Circuit is overloaded
       */
      var BulkheadOverloadError = /** @class */ (function (_super) {
          __extends(BulkheadOverloadError, _super);
          function BulkheadOverloadError() {
              var _this = _super.call(this, 'Circuit is overloaded') || this;
              Object.setPrototypeOf(_this, BulkheadOverloadError.prototype);
              return _this;
          }
          return BulkheadOverloadError;
      }(Error));
      /**
       * Returned when a bulkhead module request has been waiting for too long in queue.
       * @param message Waiting for too long in queue
       */
      var BulkheadQueueWaitError = /** @class */ (function (_super) {
          __extends(BulkheadQueueWaitError, _super);
          function BulkheadQueueWaitError() {
              var _this = _super.call(this, 'Waiting for too long in queue') || this;
              Object.setPrototypeOf(_this, BulkheadQueueWaitError.prototype);
              return _this;
          }
          return BulkheadQueueWaitError;
      }(Error));
      var BufferedPromise = /** @class */ (function (_super) {
          __extends(BufferedPromise, _super);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function BufferedPromise(promise) {
              var params = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  params[_i - 1] = arguments[_i];
              }
              var _this = _super.call(this) || this;
              _this.promise = promise;
              _this.params = params;
              return _this;
          }
          BufferedPromise.prototype.execute = function () {
              return __awaiter(this, void 0, void 0, function () {
                  var _this = this;
                  return __generator(this, function (_a) {
                      return [2 /*return*/, new Promise(function (resolve, reject) {
                              _this.emit('execute');
                              _this.promise.apply(_this, _this.params).then(function (res) {
                                  _this.emit('resolve', res);
                                  resolve(res);
                              })
                                  .catch(function (err) {
                                  _this.emit('reject', err);
                                  reject(err);
                              });
                          })];
                  });
              });
          };
          return BufferedPromise;
      }(EventEmitter));
      /**
       * The Bulkhead Module, that allows to limit concurrent executions.
       */
      var Bulkhead = /** @class */ (function (_super) {
          __extends(Bulkhead, _super);
          // Constructor
          function Bulkhead(options) {
              var _this = _super.call(this, options) || this;
              _this.concurrentSize = ((options === null || options === void 0 ? void 0 : options.concurrentSize) !== undefined) ? options.concurrentSize : 10;
              _this.queueSize = ((options === null || options === void 0 ? void 0 : options.queueSize) !== undefined) ? options.queueSize : 10;
              _this.maxQueueWait = ((options === null || options === void 0 ? void 0 : options.maxQueueWait) !== undefined) ? options.maxQueueWait : 60000;
              _this.concurrentBuffer = [];
              _this.queueBuffer = [];
              return _this;
          }
          // Public Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Bulkhead.prototype.execute = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _exec;
                  return __generator(this, function (_a) {
                      _exec = this._promiseBulkhead.apply(this, __spreadArrays([circuit, promise], params));
                      this.emit('execute', circuit, _exec);
                      return [2 /*return*/, _exec];
                  });
              });
          };
          // Private Methods
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Bulkhead.prototype._promiseBulkhead = function (circuit, promise) {
              var params = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                  params[_i - 2] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  var _this = this;
                  return __generator(this, function (_a) {
                      return [2 /*return*/, new Promise(function (resolve, reject) {
                              var ref = new (BufferedPromise.bind.apply(BufferedPromise, __spreadArrays([void 0, promise], params)))();
                              if (_this.concurrentBuffer.length < _this.concurrentSize) {
                                  ref.execute()
                                      .then(function (res) {
                                      resolve(res);
                                  })
                                      .catch(function (err) {
                                      reject(err);
                                  })
                                      .finally(function () {
                                      _this.concurrentBuffer.splice(_this.concurrentBuffer.indexOf(ref), 1);
                                      _this._addBufferedPromise();
                                  });
                                  _this.concurrentBuffer.push(ref);
                              }
                              else if (_this.queueBuffer.length < _this.queueSize) {
                                  _this.queueBuffer.push(ref);
                                  var timeout_1 = setTimeout(function () {
                                      _this.queueBuffer.splice(_this.queueBuffer.indexOf(ref), 1);
                                      resolveDisposable_1.dispose();
                                      rejectDisposable_1.dispose();
                                      reject(new BulkheadQueueWaitError());
                                  }, _this.maxQueueWait);
                                  var executeDisposable_1 = ref.on('execute', function () {
                                      executeDisposable_1.dispose();
                                      clearTimeout(timeout_1);
                                  });
                                  var resolveDisposable_1 = ref.on('resolve', function (res) {
                                      clearTimeout(timeout_1);
                                      _this.concurrentBuffer.splice(_this.concurrentBuffer.indexOf(ref), 1);
                                      resolveDisposable_1.dispose();
                                      rejectDisposable_1.dispose();
                                      _this._addBufferedPromise();
                                      resolve(res);
                                  });
                                  var rejectDisposable_1 = ref.on('reject', function (err) {
                                      clearTimeout(timeout_1);
                                      _this.concurrentBuffer.splice(_this.concurrentBuffer.indexOf(ref), 1);
                                      resolveDisposable_1.dispose();
                                      rejectDisposable_1.dispose();
                                      _this._addBufferedPromise();
                                      reject(err);
                                  });
                              }
                              else {
                                  reject(new BulkheadOverloadError());
                              }
                          })];
                  });
              });
          };
          Bulkhead.prototype._addBufferedPromise = function () {
              if (this.queueBuffer.length > 0) {
                  var queueRef = this.queueBuffer.splice(0, 1)[0];
                  queueRef.execute().catch(function () { return; });
                  this.concurrentBuffer.push(queueRef);
              }
          };
          return Bulkhead;
      }(Module));

      //
      var script = {
        name: 'ModuleView',
        props: {
          modulePath: {
            type: String
          },
          men: {
            type: Array,
            "default": function _default() {
              return [];
            }
          },
          women: {
            type: Array,
            "default": function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            people: [],
            ratelimitedMessage: '',
            circuit: null,
            ratelimitModule: null
          };
        },
        created: function created() {
          this.ratelimitModule = new Ratelimit({
            name: 'RateLimit',
            logger: console,
            limitPeriod: 10000,
            limitForPeriod: 2
          });
          this.circuit = new Circuit({
            name: 'myCircuit',
            options: {
              modules: [this.ratelimitModule]
            }
          });
        },
        methods: {
          buttonClicked: function buttonClicked() {
            var _this = this;

            this.circuit.fn(this.randomPersons).execute().then(function (data) {
              _this.people = data;
              _this.ratelimitedMessage = '';
            })["catch"](function (e) {
              if (e instanceof RatelimitError) {
                _this.ratelimitedMessage = "You are Rate Limited, you will be able to see other random persons in ".concat(Math.ceil(e.remainingTimeInRatelimit / 1000), "s");
              }
            });
          },
          randomPersons: function randomPersons() {
            var _this2 = this;

            return new Promise(function (resolve) {
              var rndNum = Math.floor(Math.random() * 9);
              var persons = [];
              persons.push(_this2.men[rndNum]);
              persons.push(_this2.women[rndNum]);
              resolve(persons);
            });
          }
        }
      };

      /* script */
                  const __vue_script__ = script;
                  
      /* template */
      var __vue_render__ = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { attrs: { id: "system-sample" } }, [
          _c("h2", [_vm._v("Persons")]),
          _vm._v(" "),
          _c("table", { staticClass: "center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.people, function(person) {
                return _c("tr", { key: person.id }, [
                  _c("td", [_vm._v(_vm._s(person.firstname))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(person.lastname))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "people-img",
                      attrs: {
                        src: _vm.modulePath + "/static/" + person.picture,
                        alt: "person.firstname"
                      }
                    })
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "random-persons-button",
                on: { click: _vm.buttonClicked }
              },
              [_vm._v("Random persons")]
            )
          ]),
          _vm._v(" "),
          _vm.ratelimitedMessage
            ? _c("div", [_vm._v(" " + _vm._s(_vm.ratelimitedMessage))])
            : _vm._e()
        ])
      };
      var __vue_staticRenderFns__ = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("First Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Last Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Picture")])
            ])
          ])
        }
      ];
      __vue_render__._withStripped = true;

        /* style */
        const __vue_inject_styles__ = function (inject) {
          if (!inject) return
          inject("data-v-37894ee4_0", { source: ".center[data-v-37894ee4] {\n  text-align: center;\n}\n.people-img[data-v-37894ee4] {\n  width: 200px;\n}\n.random-persons-button[data-v-37894ee4] {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */", map: {"version":3,"sources":["/home/runner/work/modkit-loader/modkit-loader/examples/system/src/ModuleView.vue","ModuleView.vue"],"names":[],"mappings":"AA8FA;EACA,kBAAA;AAAA;AAEA;EACA,YAAA;AAAA;AAEA;EACA,gBAAA;AAAA;;AC5FA,yCAAyC","file":"ModuleView.vue","sourcesContent":[null,".center {\n  text-align: center; }\n\n.people-img {\n  width: 200px; }\n\n.random-persons-button {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=ModuleView.vue.map */"]}, media: undefined });

        };
        /* scoped */
        const __vue_scope_id__ = "data-v-37894ee4";
        /* module identifier */
        const __vue_module_identifier__ = undefined;
        /* functional template */
        const __vue_is_functional_template__ = false;
        /* component normalizer */
        function __vue_normalize__(
          template, style, script,
          scope, functional, moduleIdentifier,
          createInjector, createInjectorSSR
        ) {
          const component = (typeof script === 'function' ? script.options : script) || {};

          // For security concerns, we use only base name in production mode.
          component.__file = "/home/runner/work/modkit-loader/modkit-loader/examples/system/src/ModuleView.vue";

          if (!component.render) {
            component.render = template.render;
            component.staticRenderFns = template.staticRenderFns;
            component._compiled = true;

            if (functional) component.functional = true;
          }

          component._scopeId = scope;

          {
            let hook;
            if (style) {
              hook = function(context) {
                style.call(this, createInjector(context));
              };
            }

            if (hook !== undefined) {
              if (component.functional) {
                // register for functional component in vue file
                const originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context)
                };
              } else {
                // inject component registration as beforeCreate hook
                const existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }
          }

          return component
        }
        /* style inject */
        function __vue_create_injector__() {
          const head = document.head || document.getElementsByTagName('head')[0];
          const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
          const isOldIE =
            typeof navigator !== 'undefined' &&
            /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

          return function addStyle(id, css) {
            if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

            const group = isOldIE ? css.media || 'default' : id;
            const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

            if (!style.ids.includes(id)) {
              let code = css.source;
              let index = style.ids.length;

              style.ids.push(id);

              if (isOldIE) {
                style.element = style.element || document.querySelector('style[data-group=' + group + ']');
              }

              if (!style.element) {
                const el = style.element = document.createElement('style');
                el.type = 'text/css';

                if (css.media) el.setAttribute('media', css.media);
                if (isOldIE) {
                  el.setAttribute('data-group', group);
                  el.setAttribute('data-next-index', '0');
                }

                head.appendChild(el);
              }

              if (isOldIE) {
                index = parseInt(style.element.getAttribute('data-next-index'));
                style.element.setAttribute('data-next-index', index + 1);
              }

              if (style.element.styleSheet) {
                style.parts.push(code);
                style.element.styleSheet.cssText = style.parts
                  .filter(Boolean)
                  .join('\n');
              } else {
                const textNode = document.createTextNode(code);
                const nodes = style.element.childNodes;
                if (nodes[index]) style.element.removeChild(nodes[index]);
                if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
                else style.element.appendChild(textNode);
              }
            }
          }
        }
        /* style inject SSR */
        

        
        var ModuleView = __vue_normalize__(
          { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
          __vue_inject_styles__,
          __vue_script__,
          __vue_scope_id__,
          __vue_is_functional_template__,
          __vue_module_identifier__,
          __vue_create_injector__);

      function load(_x) {
        return _load.apply(this, arguments);
      }

      function _load() {
        _load = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(_ref) {
          var Vue, modulePath, checkPeople, _ModuleView;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Vue = _ref.Vue, modulePath = _ref.modulePath;
                  _context.next = 3;
                  return module.import('./check-people-1cc0b912.js');

                case 3:
                  checkPeople = _context.sent;
                  _ModuleView = Vue.extend(ModuleView);
                  new _ModuleView({
                    propsData: {
                      modulePath: modulePath,
                      men: checkPeople.listMen(),
                      women: checkPeople.listWomen()
                    }
                  }).$mount('#system-sample');
                  return _context.abrupt("return");

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _load.apply(this, arguments);
      }

      function unload() {
        return _unload.apply(this, arguments);
      }

      function _unload() {
        _unload = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var mod;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return module.import('./left-message-98a2ce9d.js');

                case 2:
                  mod = _context2.sent;
                  document.getElementById('system-sample').innerHTML = "<h3>".concat(mod["default"](), "</h3>");

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _unload.apply(this, arguments);
      }

    }
  };
});
