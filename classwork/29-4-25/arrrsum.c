#include<stdio.h>

main()
{
	int a[5];
	int i,sum=0;
	
	for(i=0;i<5;i++)
	{
		printf("Enter elements:");
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++)
	{
		sum=sum+a[i];
	}
	printf("\nsum of array: %d",sum);
}
