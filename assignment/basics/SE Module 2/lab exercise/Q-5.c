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
	
	printf("\n\nenter a number (1-12) to get month name:");
	scanf("%d",&month);
	
	switch(month)
	{
		case 1:
		printf("January\n");
		break;
		
		case 2:
		printf("february\n");
		break;
		
		case 3:
		printf("March\n");
		break;
		
		case 4:
		printf("April\n");
		break;
		
		case 5:
		printf("May\n");
		break;
		
		case 6:
		printf("June\n");
		break;
		
		case 7:
		printf("July\n");
		break;
		
		case 8:
		printf("August\n");
		break;
		
		case 9:
		printf("September\n");
		break;
		
		case 10:
		printf("october\n");
		break;
		
		case 11:
		printf("November\n");
		break;
		
		case 12:
		printf("December\n");
		break;
	}
}
