#include<stdio.h>

main()
{
	int num,n,rem,sum=0,digits=0;
	printf("enter number:");
	scanf("%d",&num);
	
	n=num;
	while(n)
	{
		digits++;
		n/=10;
	}
	
	n=num;
	while(n)
	{
		rem=n%10;
		int i,power=1;
		for(i=0; i<digits; i++)
		{
			power *=rem;
			sum +=power;
			n/=10;
		}
	}
	if(sum==num)
	{
		printf("armstrong number!\n");		
	}
	else
		printf(" not armstrong number!");		
}
