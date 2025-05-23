#include<stdio.h>

main()
{
	while(1)
	{
		printf("Press1 for ascending order!");
		printf("\nPress1 for decending order!");
		printf("\nPress1 for Array sum!");
		printf("\nPress 4 forexit!");
		
		int ch;
		printf("\nenter your choice:");
		scanf("%d",&ch);
		
		if(ch==1)
		{
			int a[5];
			int i,j,temp;
			
			for(i=0;i<5;i++)
			{
				printf("\nEnter elements:");
				scanf("%d",&a[i]);
			}
			for(i=0;i<5;i++)
			{
				for(j=0;j<5;j++)
				{
					if(a[i]>a[j])
					{
						temp=a[i];
						a[i]=a[j];
						a[j]=temp;	
					}
				}
			}
			for(i=0;i<5;i++)
			{
				printf("\nAsc order:%d\n",a[i]);
			}
		}
	}
}
