#include<stdio.h>

main()
{
	char a[10];
	char b[10];
	printf("Enter name:");
	gets(a);
	
	strcpy(b,a);

	printf("copy string is: %s",b);
}
