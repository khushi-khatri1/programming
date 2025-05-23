//Write a program to make multiplication of 2-d matrix.

#include<stdio.h>

main()
{
	int a[2][2];
	int b[2][2];
	int i,j;

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

			printf("\t%d",a[0][0]*b[0][0]+a[0][1]*b[1][0]);
			printf("\t%d",a[0][0]*b[0][1]+a[0][1]*b[1][1]);
			printf("\n");
			printf("\t%d",a[1][0]*b[0][0]+a[1][1]*b[1][0]);
			printf("\t%d",a[1][0]*b[0][1]+a[1][1]*b[1][1]);// matrix multiplication
}
