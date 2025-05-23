#include<stdio.h>

main()
{
	int n,i,sum=0,avg=0;
	int a[n];
	printf("enter the number of elements:");
	scanf("%d",&n);
	
	printf("enter %d numbers:\n",n);
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[n]);
		sum += a[n];
	}
	printf("sum of array: %d\n",sum);
	
	avg=sum/n;
	printf("average of array:%d",avg);
}
