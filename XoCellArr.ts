class XoCellArr {
    public cellArray: Array<XoCell>;
    public cellNumberArray: Array<number>;
    public oCount: number = 0;
    public xCount: number = 0;
    
    public constructor(cellNumberArray: Array<number>, cellFullArray: Array<XoCell>) {
        this.cellNumberArray = cellNumberArray;
        this.cellArray = new Array<XoCell>(3);
        this.cellArray[0] = cellFullArray[this.cellNumberArray[0]];
        this.cellArray[1] = cellFullArray[this.cellNumberArray[1]];
        this.cellArray[2] = cellFullArray[this.cellNumberArray[2]];
    }
    public fill3Cell(XO: boolean, cellNumber: number): void {
        if (cellNumber == this.cellNumberArray[0] || cellNumber == this.cellNumberArray[1] || cellNumber == this.cellNumberArray[2]) {
            if (XO) this.xCount++;
            else this.oCount++;
        }
    }

}