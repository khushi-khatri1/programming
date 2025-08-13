#include<stdio.h>

main()
{
	char a[10];
	printf("Enter name:");
	gets(a);
	
	printf("%s",&a);
	
	printf("\tLength is: %d",strlen(a));
}
