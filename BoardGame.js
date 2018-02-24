var BoardGame = /** @class */ (function () {
    function BoardGame(XoCellArr, cellArray) {
        this.XoCellArr = XoCellArr;
        this.cellArray = cellArray;
    }
    BoardGame.prototype.print = function () {
        document.write("<br/>");
        document.write("-----------<br/>");
        for (var rowCounter = 0; rowCounter < BoardSize; rowCounter++) {
            document.write(" | ");
            for (var columnCounter = 0; columnCounter < BoardSize; columnCounter++) {
                document.write("" + this.XoCellArr[rowCounter].cellArray[columnCounter].cellContent);
                document.write(" | ");
            }
            document.write("<br/>-----------<br/>");
        }
    };
    return BoardGame;
}());
//# sourceMappingURL=BoardGame.js.map