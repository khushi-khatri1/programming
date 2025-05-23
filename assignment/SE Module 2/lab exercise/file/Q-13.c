#include<stdio.h>

main()
{
	FILE *fptr;
	char a[200];
	
	fptr = fopen("test5.txt","w");
	fprintf(fptr,"programming is thinking not typing!!");
	fclose(fptr);
	
	fptr = fopen("test5.txt","r");
	fgets(a,200,fptr);
	printf("%s",&a);
	fclose(fptr);
}
	
