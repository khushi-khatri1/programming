#include<stdio.h>

main()
{
	int n;
	printf("Enter the number:");
	scanf("%d",&n);
	
	//even or odd
	if(n%2==0)
	{
		printf("number is even.");
	}
	else
		printf("number is odd.");
		
	// positive negative or zero
	if(n>0)
	{
		printf("\nnumber is positive.");
	}
	else if(n<0)
	{
		printf("\nnumber is negative.");
	}
	else
		printf("\nnumber is zero.");
		
	//check if multiple of both 3 and 5
	if(n%3==0 && n%5==0)
	{
		printf("\nnumber is multiple of both 3 & 5.");
	}
	else
		printf("\nnumber is not multiple of both 3 & 5.");
}
