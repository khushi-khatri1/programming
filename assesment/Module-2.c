//Write a program to make multiplication of 2-d matrix.

#include<stdio.h>

main()
{
	int a[2][2],b[2][2],ans[2][2]={0};
	int i,j,k;

	printf("-------Matrix:1-------\n");
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
	
	printf("\n-------Matrix:2-------\n");
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
	
	printf("\n-------Result: Multiplication Matrix-------\n\n");

	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
	 		for(k=0;k<2;k++)
			{
				ans[i][j]+=a[i][k] * b[k][j];
			}
		}
	}
	
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
	 		printf("\t%d",ans[i][j]); // printing multiplication array
		}
		printf("\n");
	}
}
