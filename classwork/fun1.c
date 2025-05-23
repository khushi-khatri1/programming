#include<stdio.h>
//1) function without parameters without returntype

fun1()
{
	int a;
	printf("Enter number");
	scanf("%d",&a);
	
	if(a%2==0)
	{
		printf("Even!!");
	}
	else
		printf("Odd!!");
}
main()
{
	fun1();
}

