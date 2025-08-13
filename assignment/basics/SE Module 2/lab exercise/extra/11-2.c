#include<stdio.h>
//fibonacci series using recursive function

int fibonacci(int n)
{
	if(n<=1)
		return n;
	return fibonacci(n-1) + fibonacci(n-2);
}

int main()
{
	int n,i;
	printf("Enter the number :");
	scanf("%d",&n);
	
	if(n<=0)
	{
		printf("enter positive number..\n");
	}
	
	printf("Fibonacci Series up to %d terms:\n", n);
	
	for(i=0;i<n;i++)
	{
		printf("%d",fibonacci(i));
	}
	printf("\n");
}
