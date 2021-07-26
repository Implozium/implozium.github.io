/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(1));
const react_dom_1 = __importDefault(__webpack_require__(6));
const App_1 = __importDefault(__webpack_require__(12));
const root = document.getElementById('root');
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), root);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(1));
const styled_components_1 = __importStar(__webpack_require__(13));
const ChecklistApp_1 = __importDefault(__webpack_require__(22));
const InputFile_1 = __importDefault(__webpack_require__(31));
const SApp = styled_components_1.default.div `
    background-color: #f2f2f2;
    min-height: 100vh;
    padding: 24px;
    box-sizing: border-box;
`;
const Global = styled_components_1.createGlobalStyle `
    html, body {
        margin: 0px;
        padding: 0px;
        font-family: 'Segoe UI', sans-serif;
    }
`;
const App = () => {
    const [data, setData] = react_1.useState('');
    const [isRead, setRead] = react_1.useState(false);
    const onChange = react_1.useCallback((value) => {
        setData(value);
        setRead(true);
    }, []);
    return (react_1.default.createElement(SApp, null,
        react_1.default.createElement(Global, null),
        !isRead
            ? react_1.default.createElement(InputFile_1.default, { onChange: onChange })
            : react_1.default.createElement(ChecklistApp_1.default, { xml: data })));
};
exports.default = App;


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(1));
const styled_components_1 = __importDefault(__webpack_require__(13));
const Checklist_1 = __importDefault(__webpack_require__(23));
const ChecklistDataContext_1 = __importDefault(__webpack_require__(28));
const Info_1 = __importDefault(__webpack_require__(29));
const TNode_1 = __importDefault(__webpack_require__(30));
const SChecklistApp = styled_components_1.default.div `
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 188px 600px;
`;
const ChecklistApp = ({ xml }) => {
    const checklist = react_1.useMemo(() => new Checklist_1.default(xml, {}, {
        now: () => new Date().toLocaleString(),
    }), [xml]);
    const [step, setStep] = react_1.useState(0);
    const finishStep = react_1.useCallback((values) => {
        checklist.finishStep(values);
        setStep(value => value + 1);
    }, [checklist]);
    const render = react_1.useCallback((text) => {
        return checklist.render(text);
    }, [checklist]);
    const checklistData = react_1.useMemo(() => ({
        steps: checklist.getSteps(),
        sections: checklist.getSections(),
        finishStep,
        render,
        current: checklist.getCurrentStep(),
        finished: checklist.isFisished(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [checklist, finishStep, render, step]);
    return (react_1.default.createElement(ChecklistDataContext_1.default.Provider, { value: checklistData },
        react_1.default.createElement(SChecklistApp, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Info_1.default, null)),
            react_1.default.createElement(TNode_1.default, { treeNode: checklist.getTreeNode() }))));
};
exports.default = ChecklistApp;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const StepsStorage_1 = __importDefault(__webpack_require__(24));
const Templater_1 = __webpack_require__(25);
const TreeNode_1 = __webpack_require__(26);
const XMLParser_1 = __webpack_require__(27);
class Checklist {
    constructor(xml, initial = {}, methods = {}) {
        this.finished = false;
        this.treeNode = this.convertXMLToTreeNode(xml);
        this.steps = [];
        this.sections = [];
        this.methods = methods;
        this.extractCheckableSteps(this.treeNode, this.sections, this.steps);
        this.currentStep = this.nextStep();
        this.stepsStorage = new StepsStorage_1.default(initial);
        this.calc();
    }
    convertXMLToTreeNode(xml) {
        const xmlNodes = XMLParser_1.parseXML(xml);
        if (!xmlNodes.length) {
            throw new Error('Invalid XML');
        }
        return TreeNode_1.convertXMLTreeNodeToTreeNode(xmlNodes[0], '', 0);
    }
    getTreeNode() {
        return this.treeNode;
    }
    getSteps() {
        return this.steps;
    }
    getSections() {
        return this.sections;
    }
    getCurrentStep() {
        return this.currentStep;
    }
    isFisished() {
        return this.finished;
    }
    extractCheckableSteps(treeNode, sections, steps) {
        if (treeNode.type === 'section') {
            sections.push({
                id: treeNode.id,
                condition: treeNode.condition,
                finished: false,
                enabled: true,
            });
            treeNode.children.forEach(child => this.extractCheckableSteps(child, sections, steps));
        }
        else if (treeNode.type === 'step') {
            steps.push({
                id: treeNode.id,
                condition: treeNode.condition,
                finished: false,
                enabled: true,
                variables: treeNode.variables,
            });
            treeNode.children.forEach(child => this.extractCheckableSteps(child, sections, steps));
        }
        else if (treeNode.type === 'main') {
            treeNode.children.forEach(child => this.extractCheckableSteps(child, sections, steps));
        }
    }
    calc() {
        this.sections.forEach((section) => {
            section.enabled = section.condition
                ? Templater_1.calc(section.condition, this.stepsStorage.getVariablesToStep(section.id), this.methods)
                : true;
        });
        this.steps.forEach((step) => {
            ;
            step.enabled = step.condition
                ? Templater_1.calc(step.condition, this.stepsStorage.getVariablesToStep(step.id), this.methods)
                : true;
        });
        this.sections.forEach((section) => {
            if (section.enabled) {
                return;
            }
            this.sections.forEach((subSection) => {
                if (subSection.id.startsWith(section.id)) {
                    subSection.enabled = false;
                }
            });
            this.steps.forEach((step) => {
                if (step.id.startsWith(section.id)) {
                    step.enabled = false;
                }
            });
        });
        this.sections.concat().reverse().forEach((section) => {
            section.finished = this.sections
                .filter((subSection) => subSection.id !== section.id && subSection.id.startsWith(section.id))
                .every((subSection) => !subSection.enabled || subSection.finished);
            section.finished = section.finished && this.steps
                .filter((step) => step.id !== section.id && step.id.startsWith(section.id))
                .every((step) => !step.enabled || step.finished);
        });
    }
    nextStep() {
        const index = this.steps.findIndex((step) => step === this.currentStep);
        return this.steps.slice(index + 1).find((step) => {
            const section = step.id.split(':')[0];
            return step.enabled && this.getSection(section).enabled;
        });
    }
    getSection(id) {
        return this.sections.find((section) => section.id === id);
    }
    getStep(id) {
        return this.steps.find((step) => step.id === id);
    }
    setFinishedStep(id, finished) {
        const checkableStep = this.getStep(id);
        if (!checkableStep) {
            return;
        }
        checkableStep.finished = finished;
    }
    finishStep(variables) {
        this.stepsStorage.pushStep(this.currentStep.id, variables);
        this.currentStep.finished = true;
        this.calc();
        this.currentStep = this.nextStep();
        if (!this.currentStep) {
            this.finished = true;
            return;
        }
        this.finished = false;
    }
    backToStep(id) {
        const index = this.steps.findIndex((step) => step.id === id);
        if (index === -1) {
            return;
        }
        this.currentStep = this.steps[index];
        this.steps.slice(index).forEach((step) => {
            step.finished = false;
        });
        this.stepsStorage.toStep(this.currentStep.id);
        this.calc();
        const currentSection = this.currentStep.id.split(':')[0];
        this.setFinishedStep(currentSection, false);
    }
    render(text) {
        if (!this.currentStep) {
            return Templater_1.renderTemplate(text, this.stepsStorage.getVariablesToStep(''), this.methods);
        }
        return Templater_1.renderTemplate(text, this.stepsStorage.getVariablesToStep(this.currentStep.id), this.methods);
    }
}
exports.default = Checklist;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class StepsStorage {
    constructor(initial) {
        this.steps = [];
        this.steps.push({
            id: '0',
            variables: initial,
        });
    }
    pushStep(id, variables) {
        const step = {
            id,
            variables: Object.assign(Object.assign({}, this.steps[this.steps.length - 1].variables), variables),
        };
        this.steps.push(step);
    }
    getStep(id) {
        return this.steps.find((step) => step.id === id);
    }
    lastStep() {
        return this.steps[this.steps.length - 1];
    }
    getVariablesToStep(id) {
        return (this.steps.find((step) => step.id === id) || this.lastStep()).variables;
    }
    toStep(id) {
        const index = this.steps.findIndex((step) => step.id === id);
        if (index === -1) {
            return;
        }
        this.steps = this.steps.slice(0, index + 1);
    }
}
exports.default = StepsStorage;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


// const RE_VARIABLES = /\$\{(.+?)\}/g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTemplate = exports.calc = exports.calcBlock = exports.calcExpression = exports.replace = void 0;
const RE_STRING = /^(["'])(.*)\1$/;
function extractString(str) {
    const parts = RE_STRING.exec(str);
    if (parts) {
        return parts[2];
    }
    return null;
}
const RE_VARIABLES = /\$\{\s*([^|}]*?)\s*(?:\|\s*([a-zA-Z0-9_.]+)((?:\s*:\s*.+?\s*)*))?\}/g;
function replace(str, variables, methods, wrapper = '"') {
    return str.trim().replace(RE_VARIABLES, (_, p1, p2, p3) => {
        var _a;
        let value = '';
        if (variables[p1] !== undefined) {
            value = variables[p1];
        }
        else {
            value = (_a = extractString(p1)) !== null && _a !== void 0 ? _a : '';
        }
        if (methods[p2]) {
            const args = p3.length === 0 ? [] : p3.slice(1).split(':').map(extractString);
            value = methods[p2](value, ...args);
        }
        return `${wrapper}${value}${wrapper}`;
    });
}
exports.replace = replace;
const RE_EQ = /(["'])(.*)\1\s+eq\s+(["'])(.*)\3/;
const RE_NOT_EQ = /(["'])(.*)\1\s+not eq\s+(["'])(.*)\3/;
const RE_LIKE = /(["'])(.*)\1\s+like\s+(["'])(.*)\3/;
const RE_IN = /(["'])(.*)\1\s+in\s+\[(.*)\]/;
const RE_EXIST = /(["'])(.*)\1/;
function calcExpression(str, variables, methods) {
    const strWithReplaced = replace(str, variables, methods);
    let parts = strWithReplaced.match(RE_EQ);
    if (parts) {
        const [, , left, , right] = parts;
        return left === right;
    }
    parts = strWithReplaced.match(RE_NOT_EQ);
    if (parts) {
        const [, , left, , right] = parts;
        return left !== right;
    }
    parts = strWithReplaced.match(RE_LIKE);
    if (parts) {
        const [, , left, , right] = parts;
        return new RegExp(`^${right.replace(/%/g, '.*')}$`).test(left);
    }
    parts = strWithReplaced.match(RE_IN);
    if (parts) {
        const [, , left, right] = parts;
        const elements = right
            .split(',')
            .map((el) => { var _a; return (_a = el.trim().match(RE_STRING)) === null || _a === void 0 ? void 0 : _a[2]; })
            .filter((el) => el !== undefined);
        return elements.includes(left);
    }
    parts = strWithReplaced.match(RE_EXIST);
    if (parts) {
        const [, , left] = parts;
        return left !== '';
    }
    return false;
}
exports.calcExpression = calcExpression;
const RE_DELIMITER = /\s+(and|or)\s+/;
function calcBlock(str, variables, methods) {
    const elems = str.split(RE_DELIMITER);
    while (elems.length) {
        const expression = elems.shift();
        const result = calcExpression(expression, variables, methods);
        const op = elems.shift();
        if (!op) {
            return result;
        }
        if (op === 'and' && result) {
            // eslint-disable-next-line no-continue
            continue;
        }
        if (op === 'or' && !result) {
            // eslint-disable-next-line no-continue
            continue;
        }
        return true;
    }
    return true;
}
exports.calcBlock = calcBlock;
const RE_BLOCK = /\(\s*([^()]+)\s*\)/g;
function calc(str, variables, methods) {
    let newExpressions = str;
    let oldExpressions = str;
    do {
        oldExpressions = newExpressions;
        newExpressions = newExpressions.replace(RE_BLOCK, (_, p1) => {
            return calcBlock(p1, variables, methods) ? 'true' : '';
        });
    } while (newExpressions !== oldExpressions);
    return calcBlock(newExpressions, variables, methods);
}
exports.calc = calc;
const RE_TEMPLATE_BLOCK = /\{\{([^:]+):(.+?)\}\}([^}].*)\{\{:\1\}\}/gs;
function renderTemplate(template, variables, methods) {
    let newTemplate = template;
    let oldTemplate = template;
    do {
        oldTemplate = newTemplate;
        newTemplate = newTemplate.replace(RE_TEMPLATE_BLOCK, (str, p1, p2, p3) => {
            if (calc(p2, variables, methods)) {
                return p3.trim();
            }
            return '';
        });
    } while (newTemplate !== oldTemplate);
    return replace(newTemplate, variables, methods, '').split('/n').map(str => str.trim()).join('/n');
}
exports.renderTemplate = renderTemplate;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertXMLTreeNodeToTreeNode = void 0;
const XMLParser_1 = __webpack_require__(27);
function convertXMLTreeNodeToTreeNode(node, id, order) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    switch (node.tag) {
        case 'main': {
            return {
                type: 'main',
                title: (_a = node.attributes.title) !== null && _a !== void 0 ? _a : '',
                children: node.children
                    .map((aNode, i) => convertXMLTreeNodeToTreeNode(aNode, id, i))
                    .filter(aNode => aNode !== null && aNode.type === 'section'),
            };
        }
        case 'section': {
            const thisId = id ? `${id}-${order}` : String(order);
            let i = 0;
            return {
                type: 'section',
                title: (_b = node.attributes.title) !== null && _b !== void 0 ? _b : '',
                condition: (_c = node.attributes.condition) !== null && _c !== void 0 ? _c : '',
                id: thisId,
                children: node.children
                    .map((aNode) => {
                    if (aNode.tag === 'section' || aNode.tag === 'step') {
                        // eslint-disable-next-line no-plusplus
                        return convertXMLTreeNodeToTreeNode(aNode, thisId, i++);
                    }
                    return convertXMLTreeNodeToTreeNode(aNode, thisId, 0);
                })
                    .filter(aNode => aNode !== null && (aNode.type === 'section' || aNode.type === 'step')),
            };
        }
        case 'step': {
            const thisId = `${id}:${order}`;
            const variables = {};
            XMLParser_1.forEachXMLNode(node, (child) => {
                if (child.attributes.name) {
                    variables[child.attributes.name] = child.attributes.value || '';
                }
            });
            return {
                type: 'step',
                title: (_d = node.attributes.title) !== null && _d !== void 0 ? _d : '',
                condition: (_e = node.attributes.condition) !== null && _e !== void 0 ? _e : '',
                id: thisId,
                variables,
                children: node.children
                    .map((aNode) => convertXMLTreeNodeToTreeNode(aNode, id, 0))
                    .filter((aNode) => aNode !== null),
            };
        }
        case 'variable': {
            return {
                type: 'variable',
                name: (_f = node.attributes.name) !== null && _f !== void 0 ? _f : '',
                value: (_g = node.attributes.value) !== null && _g !== void 0 ? _g : '',
            };
        }
        case 'input': {
            return {
                type: 'input',
                title: (_h = node.attributes.title) !== null && _h !== void 0 ? _h : '',
                name: (_j = node.attributes.name) !== null && _j !== void 0 ? _j : '',
                value: (_k = node.attributes.value) !== null && _k !== void 0 ? _k : '',
            };
        }
        case 'text': {
            return {
                type: 'text',
                text: XMLParser_1.childrenToText(node),
            };
        }
        case 'textarea': {
            return {
                type: 'textarea',
                text: XMLParser_1.childrenToText(node),
            };
        }
        case 'textblock': {
            return {
                type: 'textblock',
                text: XMLParser_1.childrenToText(node),
            };
        }
        case 'image': {
            return {
                type: 'image',
                src: (_l = node.attributes.src) !== null && _l !== void 0 ? _l : '',
            };
        }
        case 'link': {
            return {
                type: 'link',
                href: (_m = node.attributes.href) !== null && _m !== void 0 ? _m : '',
                text: XMLParser_1.childrenToText(node),
            };
        }
        case 'select': {
            return {
                type: 'select',
                title: (_o = node.attributes.title) !== null && _o !== void 0 ? _o : '',
                name: (_p = node.attributes.name) !== null && _p !== void 0 ? _p : '',
                value: (_q = node.attributes.value) !== null && _q !== void 0 ? _q : '',
                options: node.children
                    .filter((aNode) => aNode.tag === 'option')
                    .map((aNode) => {
                    var _a;
                    return ({
                        title: XMLParser_1.childrenToText(aNode),
                        value: (_a = aNode.attributes.value) !== null && _a !== void 0 ? _a : '',
                    });
                }),
            };
        }
        case 'radio': {
            return {
                type: 'radio',
                title: (_r = node.attributes.title) !== null && _r !== void 0 ? _r : '',
                name: (_s = node.attributes.name) !== null && _s !== void 0 ? _s : '',
                value: (_t = node.attributes.value) !== null && _t !== void 0 ? _t : '',
                options: node.children
                    .filter((aNode) => aNode.tag === 'option')
                    .map((aNode) => {
                    var _a;
                    return ({
                        title: XMLParser_1.childrenToText(aNode),
                        value: (_a = aNode.attributes.value) !== null && _a !== void 0 ? _a : '',
                    });
                }),
            };
        }
        default: return null;
    }
}
exports.convertXMLTreeNodeToTreeNode = convertXMLTreeNodeToTreeNode;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forEachXMLNode = exports.childrenToText = exports.parseXML = exports.extractAttributes = void 0;
const RE_ATTR = /([^\s=]+?)\s*=\s*"(.*?)"|(\S+)/;
// const RE_ATTR = /([^\s=]+?)\s*=\s*(["'])(.*?)\2|(\S+)/;
// const RE_ATTR = /([^\s=]+?)\s*=\s*(["'])((?:[^"'\\]|\\.)*)\2|(\S+)/;
function extractAttributes(str) {
    const attrs = str
        .trim()
        .match(new RegExp(RE_ATTR, 'g'));
    if (!attrs) {
        return {};
    }
    return attrs
        .reduce((obj, part) => {
        const parts = RE_ATTR.exec(part);
        if (parts) {
            const [, key, value, keyValue] = parts;
            if (key) {
                obj[key] = value;
            }
            if (keyValue) {
                obj[keyValue] = keyValue;
            }
        }
        return obj;
    }, {});
}
exports.extractAttributes = extractAttributes;
const RE_TAG = /(<[^>]+>)/;
const RE_TAG_ONE = /<(\S+?)(\s+.+?)?\s*\/>/;
const RE_TAG_IN = /<(\S+?)(\s+.+?)?>/;
const RE_TAG_OUT = /<\/(\S+?)>/;
function parseXML(content) {
    const elems = content
        .replace(/<\?xml.*?\?>/g, '')
        .trim()
        .split(RE_TAG)
        .map(str => str.trim())
        .filter(Boolean);
    // .filter((str, i) => i % 2 === 1);
    // console.log(elems.map(s => s.replace(/</g, '&lt;').replace(/>/g, '&gt;')).join('\n'));
    const stack = [];
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        let parts = RE_TAG_ONE.exec(elem);
        if (parts) {
            const xmlNode = {
                tag: parts[1].toLowerCase(),
                attributes: parts[2] ? extractAttributes(parts[2]) : {},
                text: '',
                children: [],
            };
            if (stack.length === 0) {
                stack.push(xmlNode);
            }
            else {
                stack[stack.length - 1].children.push(xmlNode);
            }
            // eslint-disable-next-line no-continue
            continue;
        }
        parts = RE_TAG_OUT.exec(elem);
        if (parts) {
            const xmlNode = stack.pop();
            if (!xmlNode) {
                throw new Error('Stack is empty');
            }
            if (stack[stack.length - 1]) {
                stack[stack.length - 1].children.push(xmlNode);
            }
            else {
                stack.push(xmlNode);
            }
            // eslint-disable-next-line no-continue
            continue;
        }
        parts = RE_TAG_IN.exec(elem);
        if (parts) {
            const xmlNode = {
                tag: parts[1].toLowerCase(),
                attributes: parts[2] ? extractAttributes(parts[2]) : {},
                text: '',
                children: [],
            };
            stack.push(xmlNode);
            // eslint-disable-next-line no-continue
            continue;
        }
        if (stack[stack.length - 1]) {
            const xmlNode = {
                tag: 'text',
                attributes: {},
                text: elem,
                children: [],
            };
            if (stack.length === 0) {
                stack.push(xmlNode);
            }
            else {
                stack[stack.length - 1].children.push(xmlNode);
            }
        }
    }
    return stack;
}
exports.parseXML = parseXML;
function childrenToText(xmlNode) {
    return xmlNode.children
        .filter((child) => child.tag === 'text')
        .map((child) => child.text)
        .join(' ');
}
exports.childrenToText = childrenToText;
function forEachXMLNode(xmlNode, cb) {
    cb(xmlNode);
    xmlNode.children.forEach((child) => cb(child));
}
exports.forEachXMLNode = forEachXMLNode;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(1));
const ChecklistDataContext = react_1.default.createContext({});
exports.default = ChecklistDataContext;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(1));
const styled_components_1 = __importDefault(__webpack_require__(13));
const ChecklistDataContext_1 = __importDefault(__webpack_require__(28));
const SInfo = styled_components_1.default.div `
    margin: 16px 4px 0;
    padding: 8px;
    box-sizing: border-box;
    background-color: black;
    color: white;
    border-radius: 8px;
    /* width: 200px; */
    font-size: 14px;
    font-weight: bold;
    position: sticky;
    top: 20px;
`;
const Info = () => {
    const { steps, finished } = react_1.useContext(ChecklistDataContext_1.default);
    const currentStep = steps.filter(step => step.enabled && step.finished).length;
    const allSteps = steps.filter(step => step.enabled).length;
    return (react_1.default.createElement(SInfo, null,
        "Main information:",
        react_1.default.createElement("br", null),
        finished
            ? 'Finished'
            : react_1.default.createElement(react_1.default.Fragment, null,
                "Steps ",
                currentStep + 1,
                "\u00A0/\u00A0",
                allSteps)));
};
exports.default = Info;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(1));
const styled_components_1 = __importStar(__webpack_require__(13));
const ChecklistDataContext_1 = __importDefault(__webpack_require__(28));
const SMainTNode = styled_components_1.default.div `
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    margin: 0 auto;
    --size: 16px;
    --color-done: green;
    --color-disabled: grey;
    --color-active: blue;
    --color-default: black;
`;
const SMainTNodeTitle = styled_components_1.default.div `
    font-size: 36px;
    line-height: 40px;
    font-weight: bold;
`;
const SMainTNodeBody = styled_components_1.default.div `
    margin-top: 16px;
    margin-left: 16px;
`;
const MainTNode = ({ treeNode }) => {
    return (react_1.default.createElement(SMainTNode, null,
        react_1.default.createElement(SMainTNodeTitle, null, treeNode.title),
        react_1.default.createElement(SMainTNodeBody, null, treeNode.children.map((child, i) => react_1.default.createElement(TNode, { key: String(i), treeNode: child })))));
};
const SSectionTNode = styled_components_1.default.div `
    position: relative;

    --border-color: var(--color-default);
    ${({ finished }) => finished
    ? styled_components_1.css `
                  --border-color: var(--color-done);
              `
    : ''}
    ${({ enabled }) => !enabled
    ? styled_components_1.css `
                  --border-color: var(--color-disabled);
              `
    : ''}

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: calc(var(--size) * 2);
        box-sizing: border-box;
        background: white;
        border: 6px solid var(--border-color);
        top: 0;
        left: 0;
    }

    & & {
        margin-left: calc(var(--size) * 2);

        &::before {
            content: '';
            position: absolute;
            width: calc(var(--size) * 2 + 1px);
            height: 2px;
            border: 1px solid var(--border-color);
            top: calc(var(--size) - 1px);
            box-sizing: border-box;
            left: calc(var(--size) * -2 - 1px);
        }
    }
`;
const SSectionTNodeTitle = styled_components_1.default.div `
    padding-left: calc(var(--size) * 2);
    margin-left: var(--size);
    min-height: calc(var(--size) * 2);
    line-height: calc(var(--size) * 2);
    font-size: 20px;
    font-weight: 600;
`;
const SSectionTNodeBody = styled_components_1.default.div `
    border-left: 2px solid var(--border-color);
    margin-left: calc(var(--size) - 1px);
    padding-left: 1px;
    padding-top: var(--size);
    padding-bottom: var(--size);

    & > * + * {
        margin-top: var(--size);
    }

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: 2px;
        border: 1px solid var(--border-color);
        bottom: -2px;
        box-sizing: border-box;
        left: 0;
    }
`;
const SectionTNode = ({ treeNode }) => {
    const { sections } = react_1.useContext(ChecklistDataContext_1.default);
    const section = react_1.useMemo(() => sections.find((aSection) => aSection.id === treeNode.id), [
        sections,
        treeNode,
    ]);
    const order = react_1.useMemo(() => {
        return treeNode.id
            .split('-')
            .map((s) => Number(s) + 1)
            .join('.');
    }, [treeNode]);
    return (react_1.default.createElement(SSectionTNode, { enabled: section.enabled, finished: section.finished },
        react_1.default.createElement(SSectionTNodeTitle, null,
            order,
            " ",
            treeNode.title),
        react_1.default.createElement(SSectionTNodeBody, null, treeNode.children.map((child, i) => react_1.default.createElement(TNode, { key: String(i), treeNode: child })))));
};
const SStepTNode = styled_components_1.default.div `
    margin-left: calc(var(--size) * -1 - 2px);
    padding-left: calc(var(--size) * 2);
    position: relative;

    --border-color: var(--color-default);
    ${({ active }) => active
    ? styled_components_1.css `
                  --border-color: var(--color-active);
              `
    : ''}
    ${({ finished }) => finished
    ? styled_components_1.css `
                  --border-color: var(--color-done);
              `
    : ''}
    ${({ enabled }) => !enabled
    ? styled_components_1.css `
                  --border-color: var(--color-disabled);
              `
    : ''}

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: calc(var(--size) * 2);
        box-sizing: border-box;
        border: 8px solid var(--border-color);
        border-radius: 50%;
        top: 0;
        left: 0;
        background: white;
    }
`;
const SStepTNodeContainer = styled_components_1.default.div `
    margin-left: var(--size);
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    background-color: #fff;
    overflow: hidden;
`;
const SStepTNodeTitle = styled_components_1.default.div `
    min-height: calc(var(--size) * 2);
    line-height: calc(var(--size) * 2);
    font-size: 18px;
    font-weight: 600;
    padding: 0px 20px;
    color: white;
    background-color: var(--border-color);
`;
const SStepTNodeBody = styled_components_1.default.div `
    border-top: 1px solid rgb(0 0 0 / 10%);
    padding: 10px 20px;

    & > * + * {
        margin-top: 8px;
    }
`;
const SStepTNodeButton = styled_components_1.default.div `
    box-sizing: border-box;
    ${({ enabled }) => enabled
    ? styled_components_1.css `
                  background-color: var(--color-active);
              `
    : styled_components_1.css `
                  background-color: var(--color-disabled);
              `}
    border-radius: 4px;
    padding: 6px;
    line-height: 24px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`;
const StepVariablesContext = react_1.default.createContext({});
const StepTNode = ({ treeNode }) => {
    const { current, steps, finishStep, render } = react_1.useContext(ChecklistDataContext_1.default);
    const step = react_1.useMemo(() => steps.find((aStep) => aStep.id === treeNode.id), [
        steps,
        treeNode,
    ]);
    const order = react_1.useMemo(() => {
        return Number(treeNode.id.split(':').pop()) + 1;
    }, [treeNode]);
    const [variables, setVariables] = react_1.useState(() => {
        return Object.keys(treeNode.variables).reduce((obj, key) => {
            obj[key] = render(treeNode.variables[key]);
            return obj;
        }, {});
    });
    const ref = react_1.useRef();
    const [canFinish, setCanFinish] = react_1.useState(() => step === current && Object.values(variables).every(Boolean));
    react_1.useEffect(() => {
        if (step === current) {
            const newVariables = Object.keys(treeNode.variables).reduce((obj, key) => {
                obj[key] = render(treeNode.variables[key]);
                return obj;
            }, {});
            setVariables(newVariables);
            setCanFinish(Object.values(newVariables).every(Boolean));
        }
    }, [treeNode, render, step, current]);
    react_1.useLayoutEffect(() => {
        if (step === current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [step, current]);
    const onClick = react_1.useCallback(() => {
        if (step === current && Object.values(variables).every(Boolean)) {
            finishStep(variables);
            setCanFinish(false);
        }
    }, [step, current, finishStep, variables]);
    const setVariable = react_1.useCallback((name, value) => {
        const newVariables = Object.assign(Object.assign({}, variables), { [name]: value });
        setVariables(newVariables);
        setCanFinish(step === current && Object.values(newVariables).every(Boolean));
    }, [step, current, variables]);
    const context = react_1.useMemo(() => ({
        variables,
        set: setVariable,
        enabled: step === current,
    }), [variables, setVariable, step, current]);
    // eslint-disable-next-line no-nested-ternary
    const buttonText = step.finished
        ? 'Done'
        : canFinish
            ? 'Finish'
            : 'Waiting for fill fields...';
    return (react_1.default.createElement(SStepTNode, { enabled: step.enabled, active: step === current, finished: step.finished, ref: ref },
        react_1.default.createElement(SStepTNodeContainer, null,
            react_1.default.createElement(SStepTNodeTitle, null,
                order,
                ". ",
                treeNode.title),
            react_1.default.createElement(SStepTNodeBody, null,
                react_1.default.createElement(StepVariablesContext.Provider, { value: context }, treeNode.children.map((child, i) => react_1.default.createElement(TNode, { key: String(i), treeNode: child }))),
                (step.finished || step === current) && (react_1.default.createElement(SStepTNodeButton, { enabled: canFinish, onClick: onClick }, buttonText))))));
};
const SInputTNode = styled_components_1.default.div `
    position: relative;
    border: 2px solid lightgrey;
    border-radius: 4px;
    background: white;

    &:focus-within {
        border-color: var(--color-active);
    }
`;
const SInputTNodeLabel = styled_components_1.default.div `
    position: absolute;
    font-size: 12px;
    left: 8px;
    color: grey;
`;
const SInputTNodeInput = styled_components_1.default.input `
    background: none;
    border: none;
    display: block;
    width: 100%;
    margin: 0;
    padding: 12px 4px 0 8px;
    font-size: 14px;
    height: 38px;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;
const InputTNode = ({ treeNode }) => {
    const { variables, enabled, set } = react_1.useContext(StepVariablesContext);
    const onChange = react_1.useCallback((e) => {
        set(treeNode.name, e.target.value);
    }, [set, treeNode.name]);
    return (react_1.default.createElement(SInputTNode, null,
        react_1.default.createElement(SInputTNodeLabel, null, treeNode.title),
        react_1.default.createElement(SInputTNodeInput, { type: "text", value: variables[treeNode.name], onChange: onChange, disabled: !enabled })));
};
const SRadioTNode = styled_components_1.default.fieldset `
    position: relative;
    border: 2px solid lightgrey;
    border-radius: 4px;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
`;
const SRadioTNodeLabel = styled_components_1.default.label `
    position: absolute;
    font-size: 12px;
    left: 4px;
    color: grey;
    top: -6px;
    background: white;
    line-height: 14px;
    padding: 0 4px;
`;
const SRadioTNodeBody = styled_components_1.default.div `
    padding: 12px 8px;
`;
const SRadioTNodeOptionLabel = styled_components_1.default.label `
    display: block;
`;
const RadioTNode = ({ treeNode }) => {
    const context = react_1.useContext(StepVariablesContext);
    const onChange = react_1.useCallback((e) => {
        context.set(treeNode.name, e.target.value);
    }, [context, treeNode]);
    return (react_1.default.createElement(SRadioTNode, null,
        react_1.default.createElement(SRadioTNodeLabel, null, treeNode.title),
        react_1.default.createElement(SRadioTNodeBody, null, treeNode.options.map((option) => (react_1.default.createElement(SRadioTNodeOptionLabel, { key: option.value },
            react_1.default.createElement("input", { type: "radio", checked: context.variables[treeNode.name] === option.value, value: option.value, onChange: onChange, disabled: !context.enabled }),
            option.title))))));
};
const STextTNode = styled_components_1.default.div `
    margin-top: 8px;
    line-height: 20px;

    &::before {
        content: '🛈';
        color: grey;
        margin-right: 4px;
        font-size: 20px;
        height: 20px;
        display: inline-block;
    }
`;
const TextTNode = ({ treeNode }) => {
    const { render } = react_1.useContext(ChecklistDataContext_1.default);
    return (react_1.default.createElement(STextTNode, null, render(treeNode.text)));
};
const SCopyContainer = styled_components_1.default.div `
    position: relative;
    width: 28px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;

    &::before {
        content: '📄';
        position: absolute;
        left: 4px;
    }
    &::after {
        content: '📄';
        position: absolute;
        top: 4px;
    }
`;
const STextblockTNode = styled_components_1.default.div `
    padding: 8px;
    border-radius: 8px;
    color: white;
    background-color: black;
    margin-top: 8px;
    display: flex;
`;
const STextblockTNodeText = styled_components_1.default.div `
    font-family: monospace;
    white-space: pre;
    white-space: pre-line;
`;
const TextblockTNode = ({ treeNode }) => {
    const { render } = react_1.useContext(ChecklistDataContext_1.default);
    const onClick = react_1.useCallback(() => {
        navigator.clipboard.writeText(render(treeNode.text));
    }, [treeNode, render]);
    return (react_1.default.createElement(STextblockTNode, null,
        react_1.default.createElement(SCopyContainer, { onClick: onClick }),
        react_1.default.createElement(STextblockTNodeText, null, render(treeNode.text))));
};
const SLinkTNode = styled_components_1.default.a `
    margin-top: 8px;
    line-height: 20px;

    &::before {
        content: '➤';
        margin-right: 4px;
        font-size: 20px;
        height: 20px;
        display: inline-block;
    }
`;
const LinkTNode = ({ treeNode }) => {
    const { render } = react_1.useContext(ChecklistDataContext_1.default);
    return react_1.default.createElement(SLinkTNode, { href: render(treeNode.href) }, render(treeNode.text));
};
function TNode({ treeNode }) {
    switch (treeNode.type) {
        case 'main':
            return react_1.default.createElement(MainTNode, { treeNode: treeNode });
        case 'section':
            return react_1.default.createElement(SectionTNode, { treeNode: treeNode });
        case 'step':
            return react_1.default.createElement(StepTNode, { treeNode: treeNode });
        case 'input':
            return react_1.default.createElement(InputTNode, { treeNode: treeNode });
        case 'radio':
            return react_1.default.createElement(RadioTNode, { treeNode: treeNode });
        case 'text':
            return react_1.default.createElement(TextTNode, { treeNode: treeNode });
        case 'textblock':
            return react_1.default.createElement(TextblockTNode, { treeNode: treeNode });
        case 'link':
            return react_1.default.createElement(LinkTNode, { treeNode: treeNode });
        default:
            return null;
        // return <div className={treeNode.type}>{treeNode.type}</div>;
    }
}
exports.default = TNode;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(1));
const styled_components_1 = __importDefault(__webpack_require__(13));
const SLabel = styled_components_1.default.label `
    padding: 32px;
    background-color: lightblue;
    border: 4px dashed grey;
    font-size: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    display: block;
    text-align: center;
    position: relative;
`;
const SInput = styled_components_1.default.input `
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;
const InputFile = ({ onChange }) => {
    const onSubChange = react_1.useCallback((e) => {
        if (!e.target.files[0]) {
            return;
        }
        const fr = new FileReader();
        fr.readAsText(e.target.files[0]);
        fr.onload = () => {
            onChange(fr.result);
        };
    }, [onChange]);
    const onDrop = react_1.useCallback((e) => {
        if (!e.dataTransfer.files[0]) {
            return;
        }
        const fr = new FileReader();
        fr.readAsText(e.dataTransfer.files[0]);
        fr.onload = () => {
            onChange(fr.result);
        };
    }, [onChange]);
    return (react_1.default.createElement(SLabel, null,
        react_1.default.createElement(SInput, { type: "file", name: "file", accept: ".xml", onChange: onSubChange, onDrop: onDrop }),
        "Put file"));
};
exports.default = InputFile;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchecklist"] = self["webpackChunkchecklist"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;