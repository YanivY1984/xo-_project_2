var XoCellArr = /** @class */ (function () {
    function XoCellArr(cellNumberArray, cellFullArray) {
        this.oCount = 0;
        this.xCount = 0;
        this.cellNumberArray = cellNumberArray;
        this.cellArray = new Array(3);
        this.cellArray[0] = cellFullArray[this.cellNumberArray[0]];
        this.cellArray[1] = cellFullArray[this.cellNumberArray[1]];
        this.cellArray[2] = cellFullArray[this.cellNumberArray[2]];
    }
    XoCellArr.prototype.fill3Cell = function (XO, cellNumber) {
        if (cellNumber == this.cellNumberArray[0] || cellNumber == this.cellNumberArray[1] || cellNumber == this.cellNumberArray[2]) {
            if (XO)
                this.xCount++;
            else
                this.oCount++;
        }
    };
    return XoCellArr;
}());
//# sourceMappingURL=XoCellArr.js.map