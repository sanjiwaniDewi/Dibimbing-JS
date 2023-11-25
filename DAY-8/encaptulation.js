class BankAccount {
    constructor(accNumber, balance) {
        this._accNumber = accNumber;
        this._balance = balance;
    }
    //mesecure
    // dengan akses menggunakan getter setter
    get accNumber() {
        return this._accNumber;
    }
}
