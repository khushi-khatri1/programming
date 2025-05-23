#include<stdio.h>

main()
{
	int n,i,j,count=0;
	printf("enter number:");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			count++;
		}
	}
	if(count==2)
	{
		printf("number is prime.",n);
	}
	else
		printf("number is not prime.",n);
		
	//print 1 to n prime number
	for(i=1;i<=n;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			break;
		}
		if(j==i)
		{
			printf("\n%d",i);
		}
	}
}
