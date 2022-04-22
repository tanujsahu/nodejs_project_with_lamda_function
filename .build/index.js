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
var _this = this;
var responseMessage = require('./utils/responseMessage');
var parseBody = require('./utils/parseBody');
var User = require('./controllers/user');
var Emp = require('./controllers/employee');
//---------------------- USER ---------------------------
exports.testing = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("api Call!!");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User.UserList(event)];
            case 2:
                data = _a.sent();
                console.log("data:response)__", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_1 = _a.sent();
                console.log("Error::index.js))", err_1);
                return [2 /*return*/, responseMessage(err_1, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//----------------- save user
exports.saveUser = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("saveUser api Call!!");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User.saveUser(event)];
            case 2:
                data = _a.sent();
                console.log("saveUser:response)__", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_2 = _a.sent();
                console.log("saveUser Error::index.js))", err_2);
                return [2 /*return*/, responseMessage(err_2, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//---------- update user 
exports.updateUser = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("update user", event);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User.updateUser(event)];
            case 2:
                data = _a.sent();
                console.log("updateUser : response)__", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_3 = _a.sent();
                console.log("updateUser Error::index.js))", err_3);
                return [2 /*return*/, responseMessage(err_3, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//------------- delete user 
exports.deleteUser = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("delete user", event);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User.deleteUser(event)];
            case 2:
                data = _a.sent();
                console.log("delete user response__", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_4 = _a.sent();
                console.log("deleteUser Error::index.js))", err_4);
                return [2 /*return*/, responseMessage(err_4, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//---------------------- EMPLOYEE ---------------------------
exports.getAllEmp = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("api Call!!");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Emp.EmpList(event)];
            case 2:
                data = _a.sent();
                console.log("data:response)__", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_5 = _a.sent();
                console.log("Error::index.js))", err_5);
                return [2 /*return*/, responseMessage(err_5, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//--------------- save employee --------
exports.saveEmp = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("save employee api!!!");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Emp.saveEmp(event)];
            case 2:
                data = _a.sent();
                console.log("dataa::", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_6 = _a.sent();
                console.log("err::", err_6);
                return [2 /*return*/, responseMessage(err_6, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//------------------ update Employee 
exports.updateEmp = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var data, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Update Employee!!");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Emp.updateEmp(event)];
            case 2:
                data = _a.sent();
                console.log("dataa::", data);
                return [2 /*return*/, responseMessage(null, data)];
            case 3:
                err_7 = _a.sent();
                console.log("err::", err_7);
                return [2 /*return*/, responseMessage(err_7, null)];
            case 4: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=index.js.map