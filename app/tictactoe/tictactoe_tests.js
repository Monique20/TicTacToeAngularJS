describe('TicTacToeGame', function () {
    beforeEach(module('ticTacToeApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.board', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should have a 3x3 board', function () {
            expect($scope.board[0].length).toEqual(3);
            expect($scope.board[1].length).toEqual(3);
            expect($scope.board[2].length).toEqual(3);
        });

        it('should have a board with empty cells', function () {
            expect($scope.board).toEqual([[{ value: '-' }, { value: '-' }, { value: '-' }],
            [{ value: '-' }, { value: '-' }, { value: '-' }],
            [{ value: '-' }, { value: '-' }, { value: '-' }]]);
        }); 
    });

    describe('$scope.move', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should return the current player to be O after X has played once', function () {
            var cell = $scope.board[0][0];
            $scope.move(cell)
            expect($scope.currentPlayer).toEqual('O');
        });
    });         

    describe('$scope.isTaken', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should check if cell is taken', function () {
            $scope.board = [
                [{ value: 'X' }, { value: '-' }, { value: '-' }],
                [{ value: '-' }, { value: '-' }, { value: '-' }],
                [{ value: '-' }, { value: '-' }, { value: '-' }]
            ];
            var cell = $scope.board[0][0];
            expect($scope.isTaken(cell)).toBe(true);
        }); 
    });         

    describe('$scope.message', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should return a message if cell is taken', function () {
            var cell = $scope.board[0][0];
            $scope.board = [
                [{ value: 'X' }, { value: '-' }, { value: '-' }],
                [{ value: '-' }, { value: '-' }, { value: '-' }],
                [{ value: '-' }, { value: '-' }, { value: '-' }]
            ];
            $scope.move(cell)
            $scope.move(cell)
            expect($scope.message).toEqual('This space is taken, please choose again');
            expect($scope.currentPlayer).toEqual('O')
        });
    });   
    
    describe('$scope.checkForEndOfGame', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('played game without 3 in a row should not have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }]
            ];
            $scope.move(0)
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(false);
            expect($scope.noWinner).toEqual(true);
        });

        it('played game without 3 in a column should not have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }]
            ];
            $scope.move(0)
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(false);
            expect($scope.noWinner).toEqual(true);
        });

        it('played game without 3 diagonally should not have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }]
            ];
            $scope.move(0)
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(false);
            expect($scope.noWinner).toEqual(true);
        });

        it('played game with 3 in a row should have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'X' }, { value: 'O' }, { value: 'X' }]
            ];
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(true);
            expect($scope.noWinner).toEqual(false);

        });

        it('played game with 3 in a column should have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'O' }, { value: 'O' }]
            ];
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(true);
            expect($scope.noWinner).toEqual(false);
        });

        it('played game with 3 diagonally should have a winner', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }]
            ];
            $scope.checkForEndOfGame()
            expect($scope.winner).toEqual(true);
            expect($scope.noWinner).toEqual(false);
        });

    });   

    describe('$scope.message', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should check if board is full', function () {
            $scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'X' }, { value: 'O' }]
            ];
            expect($scope.boardIsFull()).toEqual(true)
        });
    });  
    
    describe('$scope.reset', function () {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('mainController', { $scope: $scope });
        });

        it('should reset the board value', function () {     
            $scope.board = [
                [{ value: 'X' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }]
            ];
            $scope.reset()
            expect($scope.board[0][0].value).toEqual('-')
            expect($scope.board[0][1].value).toEqual('-')
            expect($scope.board[0][2].value).toEqual('-')
            expect($scope.board[1][0].value).toEqual('-')
            expect($scope.board[1][1].value).toEqual('-')
            expect($scope.board[1][2].value).toEqual('-')
            expect($scope.board[2][0].value).toEqual('-')
            expect($scope.board[2][1].value).toEqual('-')
            expect($scope.board[2][2].value).toEqual('-')
            expect($scope.currentPlayer).toEqual('X')
            expect($scope.winner).toEqual(false)
            expect($scope.message).toEqual('')
            expect($scope.noWinner).toEqual(false);
        });
    });
});