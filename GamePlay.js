var GamePlay = /** @class */ (function () {
    function GamePlay() {
        this.gameOverFlag = false;
        this.cellArray = new Array(9);
        for (var i = 0; i < 9; i++) {
            this.cellArray[i] = new XoCell(i);
        }
        //winning options 
        this.Xo3CellArr = new Array(8);
        this.Xo3CellArr[0] = new XoCellArr([0, 1, 2], this.cellArray);
        this.Xo3CellArr[1] = new XoCellArr([3, 4, 5], this.cellArray);
        this.Xo3CellArr[2] = new XoCellArr([6, 7, 8], this.cellArray);
        this.Xo3CellArr[3] = new XoCellArr([0, 3, 6], this.cellArray);
        this.Xo3CellArr[4] = new XoCellArr([1, 4, 7], this.cellArray);
        this.Xo3CellArr[5] = new XoCellArr([2, 5, 8], this.cellArray);
        this.Xo3CellArr[6] = new XoCellArr([0, 4, 8], this.cellArray);
        this.Xo3CellArr[7] = new XoCellArr([2, 4, 6], this.cellArray);
        this.board = new BoardGame(this.Xo3CellArr, this.cellArray);
        while (!(this.gameOverFlag)) {
            this.board.print();
            this.printButton();
            break;
        }
    }
    GamePlay.prototype.printButton = function () {
        document.write("<br/><button onclick=\"game.play()\">Next Move</button></a><br/>");
    };
    //cheeck if X count or O count is in langth 3 for winning 
    GamePlay.prototype.checkIfWin = function () {
        for (var i = 0; i < this.Xo3CellArr.length; i++) {
            if (this.Xo3CellArr[i].oCount == 3 || this.Xo3CellArr[i].xCount == 3)
                return true;
        }
        return false;
    };
    //check of option for winning while having stright two O
    GamePlay.prototype.computerPlay = function () {
        GamePlay.moves++;
        for (var i = 0; i < this.Xo3CellArr.length; i++) {
            if (this.Xo3CellArr[i].oCount == 2 && this.Xo3CellArr[i].xCount == 0) {
                for (var j = 0; j < BoardSize; j++) {
                    if (this.Xo3CellArr[i].cellArray[j].fullFlag == false) {
                        this.Xo3CellArr[i].fill3Cell(false, this.Xo3CellArr[i].cellArray[j].cellNumber);
                        this.Xo3CellArr[i].cellArray[j].fillCell(false);
                        return;
                    }
                }
            }
        }
        //if there are two X in 
        for (var i = 0; i < this.Xo3CellArr.length; i++) {
            if (this.Xo3CellArr[i].oCount == 0 && this.Xo3CellArr[i].xCount == 2) {
                for (var j = 0; j < BoardSize; j++) {
                    if (this.Xo3CellArr[i].cellArray[j].fullFlag == false) {
                        this.Xo3CellArr[i].fill3Cell(false, this.Xo3CellArr[i].cellArray[j].cellNumber);
                        this.Xo3CellArr[i].cellArray[j].fillCell(false);
                        return;
                    }
                }
            }
        }
        //block
        for (var i = 0; i < this.cellArray.length; i++) {
            if (this.cellArray[i].fullFlag == false) {
                this.cellArray[i].fillCell(false);
                this.Xo3CellArr[0].fill3Cell(false, i);
                this.Xo3CellArr[1].fill3Cell(false, i);
                this.Xo3CellArr[2].fill3Cell(false, i);
                this.Xo3CellArr[3].fill3Cell(false, i);
                this.Xo3CellArr[4].fill3Cell(false, i);
                this.Xo3CellArr[5].fill3Cell(false, i);
                this.Xo3CellArr[6].fill3Cell(false, i);
                this.Xo3CellArr[7].fill3Cell(false, i);
                return;
            }
        }
        /////////////////////////////////stopped here
    };
    GamePlay.prototype.play = function () {
        var ocupidFlag = false;
        var cellNumber;
        if (!this.gameOverFlag) {
            GamePlay.moves++;
            alert("note number 0 is the first place of the matrix ");
            while (true) {
                cellNumber = Number(prompt("Enter the number that you want to fill with X "));
                if ((cellNumber < 0 || cellNumber > 9) || !cellNumber && cellNumber != 0) {
                    alert("Please enter numbers between 0-8 and avoide from entering symbols ");
                    continue;
                }
                if (this.cellArray[cellNumber].fullFlag) {
                    alert("This cell is allready been used ");
                    continue;
                }
                break;
            }
            this.cellArray[cellNumber].fillCell(true);
            for (var i = 0; i < this.Xo3CellArr.length; i++) {
                this.Xo3CellArr[i].fill3Cell(true, cellNumber);
            }
            this.board.print();
            this.printButton();
            if (this.checkIfWin()) {
                alert("You have been great you are the  winner ");
                this.gameOverFlag = true;
                return;
            }
            this.computerPlay();
            this.board.print();
            if (GamePlay.moves == 9) {
                alert("It's a tie");
                this.gameOverFlag = true;
                return;
            }
            if (this.checkIfWin()) {
                alert("You loose");
                this.gameOverFlag = true;
                return;
            }
            this.printButton();
        }
    };
    GamePlay.moves = 0;
    return GamePlay;
}());
//# sourceMappingURL=GamePlay.js.map