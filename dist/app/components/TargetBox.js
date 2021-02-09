import React from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
var style = {
    border: '2px dotted gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
    position: 'relative',
    left: '120px',
    right: '120px',
};
export var TargetBox = function (props) {
    var onDrop = props.onDrop;
    var _a = useDrop({
        accept: [NativeTypes.FILE],
        drop: function (item, monitor) {
            if (onDrop) {
                onDrop(props, monitor);
            }
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }); },
    }), _b = _a[0], canDrop = _b.canDrop, isOver = _b.isOver, drop = _a[1];
    var isActive = canDrop && isOver;
    return (React.createElement("div", { ref: drop, style: style }, isActive ? 'Release to drop' : 'Drag file here'));
};
//# sourceMappingURL=TargetBox.js.map