#include<iostream>
using namespace std;

main()
{
	int a = 5;
	float b;
	
	//implicit conversion : int to float
	b =(float)a;
	cout<<"Implicit conversion (int to float) :"<< b <<endl;
	
	float x = 7.9;
	int y;
	
	//explicit conversion : float to int
	y = (int)x; 
	cout<<"Implicit conversion (float to int) :"<< y <<endl;
}
