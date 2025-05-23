#include<stdio.h>

struct my{
	int a;
	int b;
};

main()
{
	struct my s1;
	printf("enter number 1:");
	scanf("%d",&s1.a);
	printf("enter number 2:");
	scanf("%d",&s1.b);		
	
	printf("Addition is :%d",s1.a+s1.b);
}
