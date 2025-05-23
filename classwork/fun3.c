//3) function without parameters with returntype

#include<stdio.h>

fun1()
{
	int n,fact=1,i;
	printf("Enter number:");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		fact*=i;
	}
	return fact;
}

fun2()
{
	int n1,n2,add;
	printf("\nenter number 1:");
	scanf("%d",&n1);
	printf("enter number 2:");
	scanf("%d",&n2);
	add=n1+n2;	
	return add;
}

main()
{
	printf("\n%d",fun1());
	printf("%d",fun2());
}


