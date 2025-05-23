#include<stdio.h>

main()
{
	int a[5];
	int i,j,temp;
	
	for(i=0;i<5;i++)
	{
		printf("Enter elements:");
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++)
	{
		for(j=i+1;j<5;j++)
		{
			if(a[i]>a[j])
			{
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	for(i=0;i<5;i++)
	{
		printf("\nAsc order %d",a[i]);
	}
}
