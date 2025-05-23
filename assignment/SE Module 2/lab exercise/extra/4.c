#include<stdio.h>

main()
{
	int n1,n2,n3;
	int largest,smallest;
	
	printf("enter number 1:");
	scanf("%d",&n1);
	printf("enter number 2:");
	scanf("%d",&n2);
	printf("enter number 3:");
	scanf("%d",&n3);
	
	//find the largest number
	if(n1>=n2 && n1>=n3)
	{
		largest=n1;
	}
	else if(n2>=n1 && n2>=n3)
	{
		largest=n2;
	}
	else
		largest=n3;
		
	//find the smallest number
	if(n1<=n2 && n1<=n3)
	{
		smallest=n1;
	}
	else if(n2<=n1 && n2<=n3)
	{
		smallest=n2;
	}
	else
		smallest=n3;
		
	printf("largest number :%d\n",largest);
	printf("smallest number :%d\n",smallest);

}
