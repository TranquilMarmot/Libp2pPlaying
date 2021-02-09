import React from 'react';
import ReactDOM from 'react-dom';
import App_B from './components/App_B';
import './styles/index.less';
ReactDOM.render(React.createElement(App_B, null), document.getElementById('app_B'));
/** Hot Module Replacement */
if (process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=index.js.map