const Transaction = require("../model/transaction");


const checkAccountType = (account_type,amount)=>{
  switch(account_type){
    case "UGX":
      return `UGX${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; 
    case "KES": 
      return `KSH${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    case "TZS":
      return `TZS${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    case "USD":
      return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

      default:
        return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;   

        
  } 
  // default:
  //   return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;   



}


const create_withdrawal_transaction = async (req,userdetails) => {
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 100);

  const transaction = await new Transaction({
    user: req.body.user,
    refrence_number: `#Withdrawl `,
    transaction_date: datetime,
    // debit: `-${userdetails.account_type =='KES'?'KSH':"$"}${req.body.withdrawal_amount
    //   .toString()
    //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    debit: `-${checkAccountType(userdetails.account_type,req.body.withdrawal_amount)}`,
    status: "pending",
  });

  await transaction.save();
  return transaction;
};

module.exports = create_withdrawal_transaction;
