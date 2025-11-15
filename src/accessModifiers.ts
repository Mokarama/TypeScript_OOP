//access >> modify

class BankAccount{
  public readonly userId:number;
  public  userName:string;
  protected userBalance:number;

constructor(userId:number, userName:string, userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
    }

    addBalance(balance:number){
        this.userBalance=this.userBalance + balance;
    }
};
/***** */
class StudentBankAccount extends BankAccount{
    test(){
        this.addBalance
    }
}





const mezbaBhaiAccount = new BankAccount(111, 'Mezba', 20);

mezbaBhaiAccount.addBalance(100);
console.log(mezbaBhaiAccount)
