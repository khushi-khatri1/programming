#include<iostream>
using namespace std;

class Calculator{
	public:
		
		addition(int n1,int n2)
		{
			cout<<"Addition : "<< n1 + n2;
		}
		
		subtraction(int n1,int n2)
		{
			cout<<"Subtraction : "<< n1 - n2;
		}
		
		multiplication(int n1,int n2)
		{
			cout<<"Multiplication : "<< n1 * n2;
		}
		
		division(int n1,int n2)
		{
			cout<<"Division : "<< n1 / n2;
		}
};

int main()
{
	int n1,n2;
	char op;
	Calculator obj;
	
	cout<<"enter number 1 : ";
	cin>>n1;
	cout<<"enter operator (+,-,*,/) : ";
	cin>>op;
	cout<<"enter number 2 : ";
	cin>>n2;
	
	switch(op)
	{
		case '+':
			obj.addition(n1,n2);
			break;
			
		case '-':
			obj.subtraction(n1,n2);
			break;
			
		case '*':
			obj.multiplication(n1,n2);
			break;
			
		case '/':
			obj.division(n1,n2);
			break;
			
		default:
			cout<<"invalid choice..";
	}
}
