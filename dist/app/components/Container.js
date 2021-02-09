import React from 'react';
import { useState, useCallback } from 'react';
import { TargetBox } from './TargetBox';
import { FileList } from './FileList';
export var Container = function () {
    var _a = useState([]), droppedFiles = _a[0], setDroppedFiles = _a[1];
    var handleFileDrop = useCallback(function (item, monitor) {
        if (monitor) {
            var files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(TargetBox, { onDrop: handleFileDrop }),
        React.createElement(FileList, { files: droppedFiles })));
};
//# sourceMappingURL=Container.js.map