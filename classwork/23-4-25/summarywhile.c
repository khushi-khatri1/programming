#include<stdio.h>
main()
{
	int i=1,n,summ=0;
	printf("Enter Number :");
	scanf("%d",&n);
	
	while(i<=n)
	{
		summ=summ+i;
		i++;
	}
	printf("%d",summ);
}
