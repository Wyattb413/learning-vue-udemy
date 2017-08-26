new Vue({
    el: "#app",
    data: {
        gameStarted: false,
        playerName: 'You',
        monsterName: 'Monster',
        playerHealth: 100,
        monsterHealth: 100,
        eventLog: []
    },
    computed: {
        playerHealthBar: function() {
            return 'width: ' + this.playerHealth + '%'
        },
        monsterHealthBar: function() {
            return 'width: ' + this.monsterHealth + '%'
        }
    },
    methods: {
        restartGame: function() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.eventLog = []
        },
        action: function(player, action) {
            var vi = this;

            switch (action) {
                case 'startGame':
                    this.restartGame()
                    this.eventLog.push(player + ' started the game!')
                    break;

                case 'attack':
                    hitPoints = (Math.round(Math.random() * (10 - 1) + 1)) * -1;

                    this.hp(player, hitPoints);

                    this.eventLog.push(player + ' attacks dealing ' + hitPoints + ' damage!')
                    break;

                case 'specialAttack':
                    hitPoints = (Math.round(Math.random() * (10 - 1) + 5)) * -1;

                    this.hp(player, hitPoints);

                    this.eventLog.push(player + ' special attacks dealing ' + hitPoints + ' damage!')
                    break;

                case 'heal':
                    hitPoints = Math.round(Math.random() * (10 - 1) + 1);

                    this.hp(player, hitPoints, heal=true);

                    this.eventLog.push(player + ' receives ' + hitPoints + ' health!')
                    break;

                case 'giveUp':
                    if (player == this.playerName) {
                        alert(this.playerName + ' gave up! The monster, ' + this.monsterName + ' laughs in satisfaction.')
                    } else {
                        alert(this.monsterName + ' gave up! You sir/maddam, ' + this.playerName + ', are victorious!.')
                    }
                    this.restartGame()
                    break;

                case 'death':
                    alert(player + ' has fallen! Game restarting...');
                    this.restartGame();
                    break;
            }

            if (action != 'startGame' && action != 'giveUp' && action != 'death' && player != this.monsterName) {
                this.monsterAI()
            }
        },
        hp: function(player, hitPoints, heal=false) {
            if (player !== this.monsterName) {
                if (heal) {
                    this.playerHealth = this.playerHealth + hitPoints;
                } else {
                    this.monsterHealth = this.monsterHealth + hitPoints;
                }
            } else {
                if (heal) {
                    this.monsterHealth = this.monsterHealth + hitPoints;
                } else {
                    this.playerHealth = this.playerHealth + hitPoints;
                }
            }

            if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
                if (this.playerHealth == 0) {
                    this.action(this.playerName, 'death');
                } else {
                    this.action(this.monsterName, 'death');
                }
            }
        },
        monsterAI: function() {
            var possibleOptions = ['attack', 'specialAttack', 'heal', 'giveUp'];

            monsterChoice = Math.round(Math.random() * (possibleOptions.length - 1) + 1);

            switch (monsterChoice) {
                case 1:
                    if (this.monsterHealth <= 65) {
                        this.action(this.monsterName, 'heal');
                    } else if (this.playerHealth <= 35) {
                        this.action(this.monsterName, 'specialAttack');
                    } else {
                        this.action(this.monsterName, 'attack');
                    }
                    break;

                case 2:
                    if (this.monsterHealth <= 65) {
                        this.action(this.monsterName, 'heal');
                    } else {
                        this.action(this.monsterName, 'specialAttack');
                    }
                    break;

                case 3:
                    if (this.monsterHealth >= 65) {
                        this.action(this.monsterName, 'specialAttack');
                    } else {
                        this.action(this.monsterName, 'heal');
                    }
                    break;

                case 4:
                    if (this.monsterHealth <= 5) {
                        this.action(this.monsterName, 'giveUp');
                    } else {
                        this.action(this.monsterName, 'specialAttack');
                    }
                    break;
            }
        }
    }
})