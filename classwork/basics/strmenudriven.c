#include<stdio.h>

main()
{
	while(1)
	{
		printf("\nPress 1 for copy string:");
		printf("\nPress 2 for string length:");
		printf("\nPress 3 for concatenate string:");
		printf("\nPress 4 for comparison string:");
		printf("\nPress 5 for exit:");
		
		int ch;
		printf("\nEnter your choice:");
		scanf("%d",&ch);
		
		if(ch==1)
		{
			char a[20];
			char b[20];
			int i,len=0;
			
			fflush(stdin);
			printf("Enter name:");
			gets(a);
			
			for(i=0;a[i]!='\0';i++)
			{
				b[i]=a[i];
			}
			b[i]='\0';
			printf("copy string is: %s",b);
		}
		
		else if(ch==2)
		{
			char a[20];
			int i,len=0;
			
			fflush(stdin);
			printf("enter name:");
			gets(a);
			
			for(i=0;a[i]!='\0';i++)
			{
				len++;
			}
			printf("string length is %d",len);
		}
		else if(ch==3)
		{
			char a[20];
			char b[20];
			
			int i,j;
			fflush(stdin);
			printf("Enter string 1:");
			gets(a);
			printf("\nEnter string 2:");
			gets(b);
			
			for(i=0;a[i]!='\0';i++); //terminated
			
			for(j=0;b[j]!='\0';j++)
			{
				a[i]=b[j];
				i++;
			}
			printf("merge string is: %s",a);
			
		}
		else if(ch==4)
		{
			char a[20];
			char b[20];
			
			fflush(stdin);
			printf("Enter string 1:");
			gets(a);
			printf("Enter string 2:");
			gets(b);
			
			int result = strcmp(a,b);
			printf("%d",result);
		}
		else if(ch==5)
		{
			printf("Thank you!!");
			break;
		}
		else
		{
			printf("invalid choice!!");
			break;
		}
	}
}
