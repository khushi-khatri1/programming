#include<stdio.h>

union my{
	int a;
	int b;
};

main()
{
	union my s1,s2;
	printf("enter number 1:");
	scanf("%d",&s1.a);
	printf("enter number 2:");
	scanf("%d",&s2.b);		
	
	printf("Addition is :%d",s1.a+s2.b);
}
