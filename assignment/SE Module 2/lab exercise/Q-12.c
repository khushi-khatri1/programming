#include<stdio.h>

struct students{
	char name[20];
	int rollno;
	float marks;
};

main()
{
	struct students s1[3];
	int i;
	
	for(i=0;i<3;i++)
	{
		printf("enter details for student %d:\n",i + 1);
		
		printf("name:");
		scanf("%s",&s1[i].name);
		
		printf("roll no:");
		scanf("%d",&s1[i].rollno);
		
		printf("marks:");
		scanf("%f",&s1[i].marks);
		
		printf("\n");
	}
	
	printf("student details:\n");
	for(i=0;i<3;i++)
	{
		printf("student details %d:\n",i+1);
		printf("name: %s\n",s1[i].name);
		printf("roll no:%d\n",s1[i].rollno);
		printf("marks:%f\n",s1[i].marks);
		printf("\n");
	}
	
}
