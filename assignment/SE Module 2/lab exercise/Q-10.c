#include<stdio.h>

main()
{
	int a ,*ptr;
	a=10;
	ptr=&a;
	printf("real value is: %d",*ptr);
	*ptr=20;
	printf("\nmodify value is :%d",*ptr);

	
}
