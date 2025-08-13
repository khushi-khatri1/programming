#include<stdio.h>

main()
{
	int i;
	
	printf("for skip 3.");
	for(i=1;i<=5;i++)
	{
		if(i==3)
			continue; //skip the loop when i=3
		printf("%d",i);
	}
	
	printf("\nfor exit.");	
	for(i=1;i<=10;i++)
	{
		if(i==5)
			break; // exit the loop when i=5
		printf("%d",i);			
	}
		
}
