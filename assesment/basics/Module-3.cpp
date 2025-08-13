#include<iostream>
using namespace std;

class lectureDetails{
	public:
		string lecturerName;
    	string subjectName;
    	string courseName;
    	int numberOfLectures;
    	
		lectureDetails()
		{
			cout<<"Welcome!!"<<endl;
		}
		
		~lectureDetails()
		{
			cout<<"Have a good day!!"<<endl;
		}
		
		AddDetails(string name,string subject,string course,int lectures)
		{
			lecturerName = name;
			subjectName = subject;
			courseName = course;
			numberOfLectures = lectures;
		}
		
		displayDetails()
		{
			cout<< "lecturer name   :  "<< lecturerName << endl;
			cout<< "Subject name   :  "<< subjectName << endl;
			cout<< "Course name   :  "<< courseName << endl;
			cout<< "Number of lectures   :  "<< numberOfLectures << endl;
		}
			
};

main()
{
	lectureDetails obj[5];
	int i;
	for(i=0;i<5;i++)
	{
		string name, subject, course;
		int lectures;
	
		cout<<endl<< "Enter details for lecturer : " << i+1 << endl;
		cout<< endl <<"Enter Name : ";
		getline(cin,name);
		cout<< "Enter Subject : ";
		getline(cin,subject);
		cout<< "Enter Course : ";
		getline(cin,course);
		cout<< "Enter Number of lectures : " ;
		cin>>lectures;
		cin.ignore();
		
		obj[i].AddDetails(name,subject,course,lectures);
	
	}
	
	cout <<endl<< "---- All Lecture Details ----"<<endl;
    for (int i = 0; i < 5; i++) 
	{
        cout << "\nLecturer " << (i + 1) << ":"<<endl;
        obj[i].displayDetails();
    }
}
	
