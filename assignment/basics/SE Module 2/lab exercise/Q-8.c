#include<stdio.h>

fact()
{
	int n,fact=1;
	int i;
	
	printf("enter number:");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		fact *=i;
	}
	printf("factorial %d",fact);
}

main()
{
	fact();
}
