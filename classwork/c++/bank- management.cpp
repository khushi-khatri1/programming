#include<iostream>
using namespace std;

class Bank{
	public:
		string name;
		int mno,balance=5000;
		int de,we;
		
		ac_create()
		{
			cout<<"Enter Name : ";
			cin>>name;
			cout<<"Enter Mobile Number : ";
			cin>>mno;
			
			cout<<"your balance is : "<<balance<<endl;
		}
		
		deposit()
		{
			cout<<"Enter amount for deposite : ";
			cin>>de;
			
			balance = balance+de;
			cout<<"your deposite amount is : "<<de<<endl;
		}
		
		withdraw()
		{
			cout<<"enter amount for withdraw : ";
			cin>>we;
			
			if(we>balance)
			{
				cout<<"Insufficient balance"<<endl;
				balance = we-balance;
				cout<<"missing amount is : "<<balance<<endl;
			}	
			else
			{
				balance = balance-we;
				cout<<"your withdraw amount is : "<<we<<endl;	
			}
		}
		
		check_bal()
		{
			cout<<"your balance is : "<<balance<<endl;
		}	
};

main()
{
	cout<<"press 1 for create account!"<<endl;
	cout<<"press 2 for exit"<<endl;
	
	Bank obj;
	int ch;
	cout<<"Enter your choice : ";
	cin>>ch;
	
	if(ch==1)
	{
		obj.ac_create();
		
		while(1)
		{
			cout<<"press 1 for deposite amount :"<<endl;
			cout<<"press 2 for withdraw amount :"<<endl;
			cout<<"press 3 for check balance :"<<endl;
			cout<<"press 4 for exit :"<<endl;
		
			int ch1;
			cout<<"enter your choice :";
			cin>>ch1;
			
			if(ch1==1)
			{
				obj.deposit();	
			}
			else if(ch1==2)
			{
				obj.withdraw();	
			}	
			else if(ch1==3)
			{
				obj.check_bal();	
			}	
			else if(ch1==4)
			{
				cout<<"thank you!!";
				break;	
			}	
			else
			{
				cout<<"invalid choice!!";
				break;	
			}	
		}
	}
	else if(ch==2)
	{
		cout<<"thank you";
	}
}
