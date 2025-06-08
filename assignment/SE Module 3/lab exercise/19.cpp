#include<iostream>
using namespace std;

class BankAccount{
	private:
		int balance=5000;
	public:
		int a,de,we;
		deposit()
		{
			cout<<"Enter amount for deposite : ";
			cin>>de;
			
			this->a=balance;
			this->a = this->a+de;
			cout<<"your deposite amount is : "<<de<<endl;
		}
		
		withdraw()
		{
			cout<<endl<<"enter amount for withdraw : ";
			cin>>we;
			
			if(we>this->a)
			{
				cout<<"Insufficient balance"<<endl;
			}
			else
			{
				this->a=this->a-we;
				cout<<"your withdraw amount is : "<<we<<endl;	
			}
		}
		
		checkbalance()
		{
			cout<<endl<<"balance is : "<< this->a;
		}
};

main()
{
	BankAccount obj;
	obj.deposit();
	obj.withdraw();
	obj.checkbalance();
	
}
