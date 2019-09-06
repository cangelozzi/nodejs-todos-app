"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
// Routes
const routes_1 = __importDefault(require("./routes"));
const todos_1 = __importDefault(require("./routes/todos"));
//! this class builds the application structure including server setups
class Application {
    // initialize express, and use various configurations...
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    // app settings (ie. view,ports...)
    settings() {
        this.app.set('port', 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        // use above configured view engine
        this.app.set('view engine', '.hbs');
    }
    // middlewares handling
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // express routings
    routes() {
        this.app.use(routes_1.default);
        this.app.use('/todos', todos_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    // start server at port 3000
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running, visit ->  https://localhost:${this.app.get('port')}`);
        });
    }
}
exports.default = Application;
