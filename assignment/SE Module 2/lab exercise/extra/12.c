#include<stdio.h>
//factorial using iterative 

main()
{
	int n,i,fact;
	printf("Enter number : ");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		fact*=i;
	}
	printf("Factorial is : %d",fact);
}
