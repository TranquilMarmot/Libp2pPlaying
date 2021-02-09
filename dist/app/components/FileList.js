import React, { useMemo } from 'react';
function list(files) {
    var label = function (file) {
        //`'${file.name}' of size '${file.size}' , type '${file.type}' and path '${file.path}'`
        return "'" + file.name + "' of size '" + file.size + "' , type '" + file.type + "'";
    };
    return files.map(function (file) { return React.createElement("li", { key: file.name }, label(file)); });
}
export var FileList = function (_a) {
    var files = _a.files;
    if (files.length === 0) {
        return React.createElement("div", null, "Nothing to display");
    }
    var fileList = useMemo(function () { return list(files); }, [files]);
    return React.createElement("div", null, fileList);
};
//# sourceMappingURL=FileList.js.map