#include<stdio.h>

main()
{
	int a[3][3];
	int b[3][3];
	int i,j;

	// 2D array addition
	printf("\nAdd!\n");
	printf("-------1-------");
	for(i=0;i<2;i++) //rows
	{
		for(j=0;j<2;j++) //columns
		{
			printf("\nEnter elements:");
			scanf("%d",&a[i][j]); 
		}
	}
	
	printf("\n");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\t%d",a[i][j]); // matrix format
		}
		printf("\n");
	}
	
	printf("\n-------2-------");
	for(i=0;i<2;i++) //rows
	{
		for(j=0;j<2;j++) //columns
		{
			printf("\nEnter elements:");
			scanf("%d",&b[i][j]); 
		}
	}
	
	printf("\n");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\t%d",b[i][j]); // matrix format
		}
		printf("\n");
	}
	
	printf("\n-------addition-------\n\n");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("\t%d",a[i][j]+b[i][j]); // matrix format
		}
		printf("\n");
	}
	 //  3D array multiplication
	printf("\nMul!\n");
	printf("-------1-------\n");
	for(i=0;i<3;i++) //rows
	{
		for(j=0;j<3;j++) //columns
		{
			printf("\nEnter elements:");
			scanf("%d",&a[i][j]); 
		}
	}
	
	printf("\n");
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",a[i][j]); // matrix format
		}
		printf("\n");
	}
	
	printf("\n-------2-------\n");
	for(i=0;i<3;i++) //rows
	{
		for(j=0;j<3;j++) //columns
		{
			printf("\nEnter elements:");
			scanf("%d",&b[i][j]); 
		}
	}
	
	printf("\n");
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",b[i][j]); // matrix format
		}
		printf("\n");
	}
	
	printf("\n-------multiplication-------\n\n");
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",a[i][j]*b[i][j]); // matrix format
		}
		printf("\n");
	}
}
