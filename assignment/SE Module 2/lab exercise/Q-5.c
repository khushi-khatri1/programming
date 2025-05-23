#include<stdio.h>

main()
{
	int n,month;
	printf("Enter a number to check even or odd:");
	scanf("%d",&n);
	
	if(n%2==0)
	{
		printf("number is even.");
	}
	else
	{
		printf("number is odd.");
	}
	
	printf("\nenter a number (1-2) to get month name:");
	scanf("%d",&month);
	
	switch(month)
	{
		case 1:
		printf("January\n");
		break;
		
		case 2:
		printf("february\n");
		break;
	}
}
