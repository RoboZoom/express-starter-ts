"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
function exitHandler(options, exitCode) {
    if (options.cleanup)
        console.log('clean');
    if (exitCode || exitCode === 0)
        console.log(`Exit Handler: ${exitCode}`);
    if (options.exit)
        process.exit();
}
//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {
    cleanup: false,
    exit: true,
}));
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {
    cleanup: false,
    exit: true,
}));
process.on('SIGUSR2', exitHandler.bind(null, {
    cleanup: false,
    exit: true,
}));
// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {
    cleanup: false,
    exit: true,
}));
