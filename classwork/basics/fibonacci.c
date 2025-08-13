#include<stdio.h>

main()
{
	int n,i,next,first=0,second=1;
	printf("Enter number :");
	scanf("%d",&n);
	
	if(n<=0)
	{
		printf("pls enter positive integer.");
	}
	
	printf("Fibonacci Series up to %d terms:\n", n);
	for(i=0;i<n;i++)
	{
		if(i<=1)
		{
			next=i;
		}
		else
		{
			next = first + second;
			first = second;
			second = next;			
		}
		printf("%d",next);		
	}
	printf("\n");
}
