#include<stdio.h>

main()
{
	FILE *fptr;
	
	fptr = fopen("test2.txt","r");
	char a[200];
	int i;
	
	while(fgets(a,200,fptr)!=NULL)
	{
		printf("%s",a);
	}
	fclose(fptr);
}
