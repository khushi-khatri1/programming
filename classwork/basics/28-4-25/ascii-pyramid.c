#include<stdio.h>

main()
{
	int n=65; // 65-> start from A , 97-> start from a , make pyramid
	int i,j;
	
	for(i=0;i<=5;i++)
	{
		for(j=1;j<=i;j++)
		{
			printf("%c",n);
			n++;
		}
		printf("\n");
	}
}
