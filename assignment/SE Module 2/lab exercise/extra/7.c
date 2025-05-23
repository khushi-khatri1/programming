#include<stdio.h>

main()
{
	int n,digit,sum=0,reverse=0;
	printf("Enter number:");
	scanf("%d",&n);
	
	while(n!=0)
	{
		digit = n % 10;
		sum += digit;
		reverse = reverse * 10 + digit;
		n = n / 10;
	}
	printf("Sum of digits = %d\n",sum);
	printf("reverse of digits = %d\n",reverse);

}
