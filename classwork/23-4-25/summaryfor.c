#include<stdio.h>
main()
{
	int i,n,summ=0;
	printf("Enter Number :");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		summ=summ+i;
	}
	printf("\nsummary %d",summ);
}
