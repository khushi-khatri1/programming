#include<stdio.h>

palindrome()
{
	char a[20];
	int i,len;
	
	printf("Enter string:");
	gets(a);
	
	len=strlen(a);
	for(i=0;i<len/2;i++)
	{
		if(a[i]!=a[len-i-1])
		{
			printf("not palindrome!!");
		}
	}
	printf("\npalindrome!!");
}

main()
{
	palindrome();
}
