class BoardGame {
    public XoCellArr: Array<XoCellArr>;
    public cellArray: Array<XoCell>;
    public constructor(XoCellArr: Array<XoCellArr>, cellArray: Array<XoCell>) {
        this.XoCellArr = XoCellArr;
        this.cellArray = cellArray;
    }
    public print(): void {

        document.write("<br/>");
        document.write("-----------<br/>");
        for (let rowCounter: number = 0; rowCounter < BoardSize; rowCounter++) {
            document.write(" | ");
            for (let columnCounter: number = 0; columnCounter < BoardSize; columnCounter++) {
                document.write(`${this.XoCellArr[rowCounter].cellArray[columnCounter].cellContent}`);
                document.write(" | ");
            }
            document.write("<br/>-----------<br/>");
        }
    }
}


    
