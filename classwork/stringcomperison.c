#include<stdio.h>

main()
{
	char a[20];
	char b[20];
	printf("Enter string 1:");
	gets(a);
	printf("Enter string 2:");
	gets(b);
	
	int result = strcmp(a,b);
	printf("%d",result); // if string 1 is equals to string 2 result=0, string1>string2 result=1, string2>string1 result=-1
}
