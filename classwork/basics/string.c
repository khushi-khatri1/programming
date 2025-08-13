#include<stdio.h>

main()
{
	char a[10];
	int i,len=0;
	printf("Enter name:");
	gets(a);
	
	printf("%s",&a);
	for(i=0;a[i]!='\0';i++)
	{
		len++;
	}
	printf("Length is: %d",len);
}
