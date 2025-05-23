//2) function with parameter without return type
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
	fun1(10); // arguments
}
