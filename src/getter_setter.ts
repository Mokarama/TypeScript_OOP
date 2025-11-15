

//Getter
//Setter

class BankAccount{
  public  userId:number;
  public  userName:string;
  private  _userBalance:number;

    constructor(userId:number, userName:string, userBalance:number){
        this.userId=userId;
        this.userName=userName;
        this._userBalance=userBalance;
    };
    //balance set kortase

    // addBalance(balance:number){
    //   return  this._userBalance=this._userBalance + balance;
    // };


    //stter use kore korte chai

    set addBalance(amount:number){
      this._userBalance =this._userBalance + amount;
    }

    // //get korbo

    // getBalance(){
    //     return this._userBalance;
    // }

    // getter use kore get korte chai

    get getBalance(){
        return this._userBalance;
    }

    

};

const shantaAccount=new BankAccount(111, 'Shanta', 20);



// shantaAccount.addBalance(300);
// console.log(shantaAccount);
// shantaAccount.getBalance()


shantaAccount.addBalance=100;
shantaAccount.addBalance=600;
// console.log(shantaAccount)
console.log(shantaAccount.getBalance)