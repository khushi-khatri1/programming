#include<stdio.h>

main()
{
	int orno = 65,no;
	while(1)
	{
		printf("Guess the number between 1-100: "); //ane andar lakhis to j again print thase bahar lakhis to ek j var thase 
		scanf("%d",&no);
		
		if(no == orno)
		{
			printf("Congratulations !! you guess the right number .\n",orno);
			break;
		}
			
		else if(no > orno)
		{
			printf("too high !! guess again\n.");  
		}
		
		else
		{
			printf("too low !! guess agian\n  .");
		}
	}
}
