#include<stdio.h>

main()
{
	int marks;
	
	printf("enter marks: ");
	scanf("%d",&marks);
	
	if(marks>90)
	{
		printf("Grade A");
	}
	else if(marks>75 && marks<=90)
	{
		printf("Grade B");
	}
	else if(marks>50 && marks<=75)
	{
		printf("Grade C");
	}
	else
		printf("Grade D");
}
