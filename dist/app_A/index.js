import React from 'react';
import ReactDOM from 'react-dom';
import App_A from './components/App_A';
import './styles/index.less';
ReactDOM.render(React.createElement(App_A, null), document.getElementById('app_A'));
/** Hot Module Replacement */
if (process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=index.js.map