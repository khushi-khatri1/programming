#include<stdio.h>

main()
{
	char a[10];
	char b[10];
	int i,len=0;
	
	fflush(stdin);
	printf("Enter name:");
	gets(a);
	
	for(i=0;a[i]!='\0';i++)
	{
		b[i]=a[i];
	}
	b[i]='\0';
	printf("copy string is: %s",b);
}
