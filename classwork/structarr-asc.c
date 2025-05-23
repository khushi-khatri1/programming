#include<stdio.h>

struct arr{
	int a[5];
	int i;
	int j;
	int temp;
};

main()
{
	struct arr s1;
	for(s1.i=0;s1.i<5;s1.i++)
	{
		printf("Enter elements:");
		scanf("%d",&s1.a[s1.i]);
	}
	
	for(s1.i=0;s1.i<5;s1.i++)
	{
		for(s1.j=s1.i+1;s1.j<5;s1.j++)
		{
			if(s1.a[s1.i]>s1.a[s1.j])
			{
				s1.temp=s1.a[s1.i];
				s1.a[s1.i]=s1.a[s1.j];
				s1.a[s1.j]=s1.temp;
			}
		}
	}
	for(s1.i=0;s1.i<5;s1.i++)
	{
		printf("\nAsc oder:%d",s1.a[s1.i]);
	}
}
