#include<stdio.h>
main()
{
	char a[10];
	char b[10];
	
	printf("Enter name 1:");
	gets(a);
	printf("Enter name 2:");
	gets(b);
	
	strcat(a,b);
	printf("merge string is: %s",a);
}
