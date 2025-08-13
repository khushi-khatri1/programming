#include<stdio.h>
//find prime number using function type(2)

funp(int n) // Parameter
{
	int i,count=0;
	for(i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			count++;
		}
	}
	if(count==2)
	{
		printf("prime!!");
	}
	else
	{
		printf("not prime");
	}	
}

main()
{
	funp(23); // arguments
}
