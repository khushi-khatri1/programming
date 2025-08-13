#include<stdio.h>


fun1(int n) // Parameter
{
	if(n%2==0)
	{
		printf("Even!!");
	}
	else
	{
		printf("Odd");
	}	
}

main()
{
	int n;
	printf("enter the number:");
	scanf("%d",&n);
	fun1(n); // arguments
}
