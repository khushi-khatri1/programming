#include<stdio.h>

main()
{
	int a[10],i,j,temp;
	int max,min;
	
	for(i=1;i<=10;i++)
	{
		printf("enter the element :");
		scanf("%d",&a[i]);
	}
	
	max = a[0];
	min = a[0];
	for(i=1;i<=10;i++)
	{
		if (a[i]>max) max = a[i];
		if (a[i]<min) min = a[i];
	}
	
	printf("maximum value =%d\n",max);
	printf("minimum value =%d",min);
	
	for(i=0;i<=10;i++)
	{
		for(j=i+1;j<=10;j++)
		{
			if(a[i]>a[j])
			{
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;	
			}
		}
	}
	for(i=1;i<10;i++)
	{
		printf("\nAsc order %d",a[i]);
	}
}
