#include<stdio.h>

struct my{
	int a[5];
	int i;
};

main()
{
	struct my s1;
	for(s1.i=0;s1.i<5;s1.i++)
	{
		printf("enter elements:");
		scanf("%d",&s1.a[s1.i]);
	}
}
