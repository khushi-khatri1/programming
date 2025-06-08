#include<iostream>
using namespace std;

class My{
	public:
		
		add(int n1,int n2)
		{
			cout<<"Addition : "<< n1 + n2;
		}
		
		sub(int n1,int n2)
		{
			cout<<"Subtraction : "<< n1 - n2;
		}
		
		mul(int n1,int n2)
		{
			cout<<"Multiplication : "<< n1 * n2;
		}
		
		div(int n1,int n2)
		{
			cout<<"Divison : "<< n1 / n2;
		}
};

int main()
{
	int n1,n2;
	char op;
	My obj;
	
	cout<<"enter number 1 : ";
	cin>>n1;
	cout<<"enter operator (+,-,*,/) : ";
	cin>>op;
	cout<<"enter number 2 : ";
	cin>>n2;
	
	switch(op)
	{
		case '+':
			obj.add(n1,n2);
			break;
			
		case '-':
			obj.sub(n1,n2);
			break;
			
		case '*':
			obj.mul(n1,n2);
			break;
			
		case '/':
			obj.div(n1,n2);
			break;
			
		default:
			cout<<"invalid choice..";
	}
}
