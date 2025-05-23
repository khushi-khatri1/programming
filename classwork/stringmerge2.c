main()
{
	char a[10];
	char b[10];
	int i,j;
	printf("Enter name 1:");
	gets(a);
	printf("Enter name 2:");
	gets(b);

	for(i=0;a[i]!='\0';i++); // terminated
			
	for(j=0;b[j]!='\0';j++)
	{
		a[i]=b[j];
		i++;
	}

	printf(" Merge string is: %s",a);
}

