#include<stdio.h>

main()
{
	int a[3][2],b[3][2];
	int i,j;
	printf("1");
	for(i=0;i<3;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\nenter number:");
			scanf("%d",&a[i][j]);
		}
	}
	
	printf("matrix format\n");
	for(i=0;i<3;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\t%d",&a[i][j]);
		}
		printf("\n");
	}
	
	printf("2");
	for(i=0;i<3;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\nenter number:");
			scanf("%d",&b[i][j]);
		}
	}
	
	printf("matrix format\n");
	for(i=0;i<3;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\t%d",&b[i][j]);
		}
		printf("\n");
	}
}

