#include<stdio.h>

prime()
{
	int a,i,count=0;
	printf("Enter number :");
	scanf("%d",&a);
	
	for(i=1;i<=a;i++)
	{
		if(a%i==0)
		{
			count++;
		}
	}
	if(count==2)
	{
		printf("prime");
	}
	else
	{
		printf("not prime");
	}
}
main()
{
	prime();
}
