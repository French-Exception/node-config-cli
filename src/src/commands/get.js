"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
var Config = require("@frenchex/config-api");
var path = require("path");
var Helper_1 = require("./../lib/Helper");
exports.command = 'get <key>';
exports.desc = 'get key';
exports.builder = {
    file: {
        "default": path.join(process.cwd(), 'config', 'config.json'),
        description: 'first file loaded, will be root'
    },
    user: {
        type: 'boolean',
        description: 'import user config'
    },
    global: {
        type: 'boolean',
        description: 'import global config'
    },
    env: {
        type: 'array',
        description: 'environment variables for loading, VAR=VALUE',
        "default": []
    },
    string: {
        type: 'boolean',
        description: 'output is a string',
        "default": null
    },
    object: {
        type: 'object',
        description: 'output is an object',
        "default": null
    },
    array: {
        type: 'array',
        description: 'output is an array'
    }
};
exports.handler = function (argv) {
    return __awaiter(this, void 0, void 0, function () {
        var file, root, env, payload, config, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = path.isAbsolute(argv.file) ? argv.file : path.normalize(path.join(process.cwd(), argv.file));
                    root = path.dirname(file);
                    env = Helper_1.mapEnvs(argv.env, process.env);
                    payload = {
                        file: file,
                        root: root,
                        global: { load: argv.global },
                        user: { load: argv.user },
                        env: env
                    };
                    return [4 /*yield*/, Config.fromFile(payload)];
                case 1:
                    config = _a.sent();
                    return [4 /*yield*/, config.get(argv.key)];
                case 2:
                    value = _a.sent();
                    console.log(value);
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=get.js.map