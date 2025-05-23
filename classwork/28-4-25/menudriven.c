#include<stdio.h>

main()
{
	while(1)
	{
		printf("press 1 for factorial!!");
		printf("\npress 2 sum number!!");
		printf("\npress 3 for pattern!!");
		printf("\npress 4 for exit!!");
		
		int ch;
		printf("\nEnter choice:");
		scanf("%d",&ch);
		
		if(ch==1)
		{
			int n,i,fact=1;
			printf("Enter number:");
			scanf("%d",&n);
			for(i=1;i<=n;i++)
			{
				fact=fact*i;
			}
			printf("factorial is:%d\n",fact);	
		}
		
		else if(ch==2)
		{
			int summ,i,n;
			printf("Enter number:");
			scanf("%d",&n);
			for(i=1;i<=n;i++)
			{
				summ=summ+i;
			}
			printf("\nsummary:%d\n",summ);
		}
		
		else if(ch==3)
		{
			int i,j,k;
			for(i=0;i<=5;i++)
			{
				for(k=0;k<=5-i;k++)
				{
					printf(" ");
				}
				for(j=0;j<=i;j++)
				{
					printf("*");
				}
				printf("\n");
			}
		}
		
		else if(ch==4)
		{
			printf("Thank you!\n");
		}
		else
		{
			printf("invalid choice!\n");
		}
	}
}
