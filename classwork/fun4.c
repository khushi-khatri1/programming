#include<stdio.h>
// function with parameters with returntype
//task

sub(n1,n2)
{
	int sub;
	sub=n1-n2;
	return sub;
}

main()
{
	int n1,n2;
	printf("enter number 1:");
	scanf("%d",&n1);
	printf("enter number 2:");
	scanf("%d",&n2);
	printf("%d",sub(n1,n2));
}
