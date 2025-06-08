#include<iostream>
using namespace std;

class pri{
	public:
		
		pri()
		{
			cout<<"Welcome to our website!!"<<endl;
		}
		
		~pri()
		{
			cout<<"thank you for visiting!!"<<endl;
		}
		
		fun1()
		{
			int i,n,count=0;
			cout<<"Enter number:"<<endl;
			cin>>n;
			
			for(i=1;i<=n;i++)
			{
				if(n%i==0)
				{
					count++;
				}
			}
			if(count==2)
			{
				cout<<"Prime number"<<endl;
			}
			else
			{
				cout<<"Not a Prime number"<<endl;
			}
		}
};

main()
{
	pri obj;
	obj.fun1();
}
