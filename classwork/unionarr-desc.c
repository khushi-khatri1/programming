#include<stdio.h>

union desc{
	int a[5];
	int i;
	int j;
	int temp;
}s1,s2,s3,s4;

main()
{
//	union desc s1,s2,s3,s4;
	for(s2.i=0;s2.i<5;s2.i++)
	{
		printf("Enter elements:");
		scanf("%d",&s1.a[s2.i]);
	}
	
	for(s2.i=0;s2.i<5;s2.i++)
	{
		for(s3.j=s2.i+1;s3.j<5;s3.j++)
		{
			if(s1.a[s2.i]<s1.a[s3.j])
			{
				s4.temp=s1.a[s2.i];
				s1.a[s2.i]=s1.a[s3.j];
				s1.a[s3.j]=s4.temp;
			}
		}
	}
	for(s2.i=0;s2.i<5;s2.i++)
	{
		printf("\nDesc oder:%d",s1.a[s2.i]);
	}
}
