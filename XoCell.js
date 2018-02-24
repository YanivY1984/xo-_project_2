var XoCell = /** @class */ (function () {
    function XoCell(cellNumber) {
        this._xFlag = false;
        this._oFlag = false;
        this.cellNumber = cellNumber;
        this.fullFlag = false;
        this.cellContent = this.forPrint();
    }
    XoCell.prototype.fillCell = function (XO) {
        if (XO) {
            this.xFlag = true;
            this.cellContent = "X";
        }
        else {
            this.oFlag = true;
            this.cellContent = "O";
        }
        this.fullFlag = true;
    };
    XoCell.prototype.forPrint = function () {
        if (this._xFlag)
            return "X";
        if (this._oFlag)
            return "O";
        else
            return this.cellNumber.toString();
    };
    XoCell.prototype.setCell = function (XO) {
        if (XO) {
            this.xFlag = true;
            this.oFlag = false;
        }
        else {
            this.xFlag = false;
            this.oFlag = true;
        }
        this.fullFlag = true;
        this.cellContent = this.forPrint();
    };
    Object.defineProperty(XoCell.prototype, "cellNumber", {
        get: function () {
            return this._cellNumber;
        },
        set: function (cellNumber) {
            if (cellNumber <= 9 && cellNumber >= 1) {
                this._cellNumber = cellNumber + 1;
            }
            else {
                this._cellNumber = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoCell.prototype, "fullFlag", {
        get: function () {
            return this._fullFlag;
        },
        set: function (fullFlag) {
            this._fullFlag = fullFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoCell.prototype, "xFlag", {
        get: function () {
            return this._xFlag;
        },
        set: function (xFlag) {
            this._xFlag = xFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XoCell.prototype, "oFlag", {
        get: function () {
            return this._oFlag;
        },
        set: function (oFlag) {
            this._oFlag = oFlag;
        },
        enumerable: true,
        configurable: true
    });
    return XoCell;
}());
//# sourceMappingURL=XoCell.js.map