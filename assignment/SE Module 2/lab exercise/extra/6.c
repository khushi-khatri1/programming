#include<stdio.h>

main()
{
	int i,n,range;
	printf("Enter number:");
	scanf("%d",&n);
	printf("Enter range:");
	scanf("%d",&range);
	
	for(i=1;i<=range;i++)
	{
		printf("%d * %d = %d\n",n,i,n*i);
	}
}
