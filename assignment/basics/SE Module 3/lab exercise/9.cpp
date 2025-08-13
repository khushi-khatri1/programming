#include<iostream>
using namespace std;

main()
{
	int orno = 65,no;
	while(1)
	{
		cout<<"Guess the number between 1-100: "; //ane andar lakhis to j again print thase bahar lakhis to ek j var thase 
		cin>>no;
		
		if(no == orno)
		{
			cout<<"Congratulations !! you guess the right number ."<<orno<<endl;
			break;
		}
			
		else if(no > orno)
		{
			cout<<"too high !! guess again ."<<endl;  
		}
		
		else
		{
			cout<<"too low !! guess agian  ."<<endl;
		}
	}
}
