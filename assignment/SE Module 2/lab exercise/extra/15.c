#include<stdio.h>

main()
{
	char a[30];
	int i,vowels=0,consonants=0,digits=0,specialChars=0;
	printf("Enter stirng:");
	fgets(a,sizeof(a),stdin);
	
	for(i=0;a[i]!='\0';i++)
	{
		char ch=a[i];
		if(isalpha(ch))
		{
			ch=tolower(ch);
			if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
			{
				vowels++;
			}
			else
			{
				consonants++;
			}
		}
			else if(isdigit(ch))
			{
				digits++;
			}
			else if(ch != ' ' && ch == '\n')
			{
				specialChars++;
			}
	}
	printf("vowels:%d\n",vowels);
	printf("consonants:%d\n",consonants);
	printf("digits:%d\n",digits);
	printf("specialChars:%d\n",specialChars);
}
