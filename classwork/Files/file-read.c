#include<stdio.h>

main()
{
	FILE *fptr;
	
	fptr = fopen("test2.txt","r");
	char a[200];
	fgets(a,200,fptr);
	printf("%s",a);
	fclose(fptr);
}
