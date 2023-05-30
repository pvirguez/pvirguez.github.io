const playGame = () => {
    
    const userInput = document.getElementById("rpsInput").value;

    // User choice function
    function getUserChoice(userInput) {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
            return userInput;
        } else {
            return 'invalid';
        }
    }

    // Computer choice function
    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'rock';
                break;
            case 1:
                return 'paper';
                break;
            case 2:
                return 'scissors';
                break;
        }
    };

    // Winner function
    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'Tie, try again';
        };

        // User choice rock
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'AI wins!';
            } else {
                return 'Human wins!';
            }
        }

        // User choice paper
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'AI wins!';
            } else {
                return "Human wins";
            }
        }

        // User choice scissors
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'AI wins!';
            } else {
                return "Human wins";
            }
        }

        // User choice cheat
        if (userChoice === 'bomb') {
            return 'Human wins!';
        }
    };

    // Main function

    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();

    document.getElementById("you").innerHTML = '<strong>You threw:</strong> ' + userChoice;
    document.getElementById("machine").innerHTML = '<strong>The computer threw:</strong> ' + computerChoice;
    document.getElementById("winner").innerHTML = determineWinner(userChoice, computerChoice);
};





