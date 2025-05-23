#include<stdio.h>

main()
{
	char str1[10];
	char str2[10];
	printf("Enter first string:");
	gets(str1);
	printf("\nEnter second string:");
	gets(str2);
	
	strcat(str1,str2);
	printf("merge string is :%s",str1);
	
	printf("\nstring length is :%d",strlen(str1));

}
