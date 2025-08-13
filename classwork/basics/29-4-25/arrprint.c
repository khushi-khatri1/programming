#include<stdio.h>

main()
{
	int a[5];
	int i;
	
	for(i=0;i<5;i++)
	{
		printf("Enter elements : ");
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++)
	{
		printf("\nelements are : %d",a[i]);
	}
}
