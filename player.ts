class Player {

    name: string;
    money: number;

    constructor(name: string, money: number) {

        this.name = name;
        this.money = money;

    }

    toString() {

        return `User: ${this.name}\nMoney: £${this.money}`;

    }

}

export default Player
