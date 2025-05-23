#include<stdio.h>

main()
{
	int n1,n2;
	printf("Enter number 1:");
	scanf("%d",&n1);
	printf("Enter number 2:");
	scanf("%d",&n2);
	
	while(1)
	{
		printf("\npress 1 for arithmetic operation!!");
		printf("\npress 2 for relational operation!!");
		printf("\npress 3 for logical operation!!");
		printf("\npress 4 for exit!!");
		
		int ch;
		printf("\nenter your choice: ");
		scanf("%d",&ch);
		
		if(ch==1)
		{
			printf("Arithmatic operation!!\n");
			printf("n1 + n2 =%d\n",n1 + n2);
			printf("n1 - n2 =%d\n",n1 - n2);
			printf("n1 * n2 =%d\n",n1 * n2);
			printf("n1 / n2 =%d\n",n1 / n2);
		}
		
		else if(ch==2)
		{
			printf("Relational operation!!\n");
			printf("n1 == n2 =%d\n",n1 == n2);
			printf("n1 != n2 =%d\n",n1 != n2);
			printf("n1 > n2 =%d\n",n1 > n2);
			printf("n1 < n2 =%d\n",n1 < n2);
			printf("n1 >= n2 =%d\n",n1 >= n2);
			printf("n1 <= n2 =%d\n",n1 <= n2);
		}
		
		else if(ch==3)
		{
			printf("logical operation!!\n");
			printf("n1 && n2 =%d\n",n1 && n2);
			printf("n1 || n2 =%d\n",n1 || n2);
			printf("!n1 =%d\n",!n1);
			printf("!n2 =%d\n",!n2);
		}
		
		else if(ch==4)
		{
			printf("Thank you!!");
			break;
		}
		else
		{
			printf("invalid choice!!");
			break;
		}
	}
}
