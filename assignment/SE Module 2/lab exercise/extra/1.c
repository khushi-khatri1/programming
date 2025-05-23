#include<stdio.h>

main()
{
	int n1,n2;
	char op;
	
	printf("enter number 1:");
	scanf("%d",&n1);
	printf("enter operator:");
	scanf(" %c",&op);
	printf("enter number 2:");
	scanf("%d",&n2);
	
	switch(op)
	{
		case '+':
			printf("Result :%d\n",n1 + n2);
			break;
			
		case '-':
			printf("Result :%d\n",n1 - n2);
			break;
			
		case '*':
			printf("Result :%d\n",n1 * n2);
			break;
			
		case '/':
			printf("Result :%d\n",n1 / n2);
			break;
			
		case '%':
			printf("Result :%d\n",n1 % n2);
			break;
			
		default:
			printf("invalid operator!");
	}
}
