#include<stdio.h>

main()

	char a[20],rev[20];
	int i,j,l;
		
	printf("Enter string:");
	gets(a);
	l=strlen(a);
	j=0;
	for(i=l-1;i>=0;i--)
	{
		rev[j++]=a[i];
	}
	rev[j]='\0';
	printf("Reverse string:");
	puts(rev);

}
