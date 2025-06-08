#include<stdio.h>
//factorial using recursive function

int fact(int n)
{
	if(n == 0)
		return 1;
		
	return n * fact(n - 1);
}

int main()
{
	printf("Factorial of 5 : %d",fact(5));
	return 0;
}
