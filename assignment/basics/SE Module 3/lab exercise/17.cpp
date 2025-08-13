#include<iostream>
using namespace std;

main()
{
	string str , reversedstr="";
	int i;
	cout<< "Enter Name :";
	cin>> str;
	
	for(i = str.length()-1; i>=0 ;i--)
	{
		reversedstr += str[i];
	}
	
	if(str == reversedstr)
	{
		cout<<"string is palindrome !!"<<endl;
	}
	else
	{
		cout<<"string is not palindrome !!"<<endl;
	}
}
