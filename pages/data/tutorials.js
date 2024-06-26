
var allTutorials = [
    {
        Title: "Tag Index",
        tags: "#index",
        Blog: `
            <div class="container">
                <h4>Tag Index</h4>
                <style>
                    table, th, td {
                        border: 1px solid black;
                        border-collapse: collapse;
                        padding: 3px;
                        border-color: lightgray;
                    }
                </style>
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr><th>Topics</th><th>Hashtags</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Technical (Lec 1-20)</td><td>#programming</td></tr>
                        <tr><td>Product/UI (Lec 21-23)</td><td>#productdesign #productmanagement #ui</td></tr>
                        <tr><td>Marketing (Lec 24-25,19)</td><td>#marketing</td></tr>
                        <tr><td>Business Dev (Lec 26-30)</td><td>#business</td></tr>
                        <tr><td>Sociology (Lec 31-37)</td><td>#sociology</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        Title: "basic web development with html css javascript",
        tags: "#programming #web #tutorial",
        Blog: `
            <div class="container">
                <h4 class="mt-4">Basic Web Development with HTML CSS JavaScript</h4>
                <p>Web browsers read HTML (Hypertext Markup Language) code and create a DOM (Document Object Model) tree corresponding to that in the memory. CSS helps you style components of the DOM tree, and then JavaScript helps you manipulate the DOM tree in memory programmatically.</p>
                <div class="row">
                    <div class="col-md-4">
                        <b>HTML</b>: <pre>&lt;div id="#mydiv"&gt;Hello&lt;/div&gt;</pre>
                    </div>
                    <div class="col-md-4">
                        <b>CSS</b>: <pre>#mydiv {color: "red";}</pre>
                    </div>
                    <div class="col-md-4">
                        <b>JavaScript</b>: <pre>document.getElementById("mydiv").innerHTML += " World";</pre>
                    </div>
                </div>
                <div class="output mt-3" style="color: red;">Hello World</div>
                <h4 class="mt-4">Lectures:</h4>
                <p>The only intention of lectures is to let you know the topics you are supposed to cover in order to gain the implementation abilities. Doing more creates fatigue and less results in trouble during implementations.</p>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>HTML</td><td>Web Development (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=E3ByCRqE7Lo">html-codewithharry</a></td></tr>
                            <tr><td>CSS</td><td>Web Development (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=u5-K_ua9sOw">css-codewithharry</a></td></tr>
                            <tr><td>JavaScript</td><td>Web Development (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=hKB-YGF14SY">js-codewithharry</a></td></tr>
                            <tr><td>Namaste JavaScript</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP">namaste-js-akshay-saini</a></td></tr>
                            <tr><td>W3schools</td><td>Tutorial/IDE for html,css,javascript</td><td><a target="_blank" href="https://www.w3schools.com/html/html_basic.asp">w3schools</a></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    {
        Title: "basic programming in python",
        tags: "#python #programming #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Basic programming in Python</h4>
            <p>4 Fundamentals of basic programming:</p>
            <ul>
                <li>basic operations</li>
                <li>functions</li>
                <li>loop</li>
                <li>recursion</li>
            </ul>
            <pre>
            print("Hello world")
            # arithmetic operations
            x = 2
            y = 3
            z1 = x+y
            print("sum of ",x,"+",y,"= ",z1)
    
            # Function: for reuse same code 
            def sq(x):
                return x*x
    
            z2 = sq(x) + sq(y)
            print("sum of sq(",x,") + sq(",y,") = ",z2)
    
            # sum of first 5
            # (i) repeat sum
            fsum = 0
            fsum = fsum + 1
            fsum = fsum + 2
            fsum = fsum + 3
            fsum = fsum + 4
            fsum = fsum + 5
    
            print("sum of first 5 with repeat add",fsum)
    
            # (ii) for loop
            fsum = 0
            for i in range(1, 5+1):
                fsum = fsum + i
    
            print("sum of first 5 with for loop",fsum)
    
            # (iii) with recursion
            def calcSum(n):
                if(n == 0):
                    return 0
                return n + calcSum(n-1)
    
            fsum = calcSum(5)
            print("sum of first 5 with recursion",fsum)
            </pre>
            <h4 class="mt-4">Output</h4>
            <pre>
            Hello world
            sum of  2 + 3 =  5
            sum of sq( 2 ) + sq( 3 ) =  13
            sum of first 5 with repeat add 15
            sum of first 5 with for loop 15
            sum of first 5 with recursion 15
            </pre>
            <h3 class="mt-4">Lectures:</h3>
            <p>
            The only intention of lectures is to let you know the topics
            you are supposed to cover in order to gain the implementation abilities. 
            Doing more creates fatigue and less results in trouble during implementations
            </p>
            <div class="table-responsive">
                <table class="table table-bordered mt-4">
                    <thead class="thead-dark">
                        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Python Beginner Full</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=gfDE2a7MKjA">python-codewithharry</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    },
    {
        Title: "linux command line , bash, how to pick right linux OS ",
        tags: "#linux #programming #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Basic Linux Commands</h4>
            <h4>Basic Commands</h4>
            <p>
                echo &lt;text&gt; : print the text in terminal<br>
                ls : list of files present in folder<br>
                ls -a: list of files present in folder and 
                -a flag will including hidden files<br>
                cd : change directory<br>
                mkdir : make a folder/directory<br>
                touch : create the file<br>
                gedit &lt;filename&gt; : open the file in gedit<br>
                history : list of all commands you entered earlier<br>
                clear : clear the screen<br>
                sudo &lt;command&gt; : run command as super user<br>
                sudo apt-get install &lt;package-name&gt; : install package from apt-get<br>
                sudo snap install &lt;package-name&gt; : install package from snapcraft <br>
            </p>
            <h4>Key Points:</h4>
            <ul>
                <li>use arrow keys (up)/(down) to see the commands you entered earlier.</li>
                <li>use "tab" for autocompletion of the commands.</li>
            </ul>
            <h4>Bash Script:</h4>
            <p>
                We can also execute the Linux command from a bash file (.sh), we
                call it bash scripts.  
            </p>
            <p>for example:</p>
            <pre>
            user~$ echo "Hello World"
            user~$ Hello World
            </pre>
            <p>This can be done with a bash file
                say "command.sh"</p>
            <pre>
            echo "Hello World"
            </pre>
            <p>Now run the same command with "command.sh" file</p>
            <pre>
            user~$ ./command.sh
            user~$ Hello World
            </pre>
            <h4>How to pick right Linux OS?</h4>
            <div>
                There are major 3 Linux based distributions from where other distributions are derived.
            </div>
            <br/>
            <ul>
                <li>
                    Debian : (Ubuntu/Linux mint/Zorin etc) here we package manager is "apt". Really good for beginners and people who don't want to configure things much, for first time user and regular users. It is very stable. all software and packages are properly tested. but it is slower when you wish to do graphic intense tasks like gaming and all.
                </li>
                <li>
                    Arch: it is community based, software aren't well tested, unstable sometimes but very good for graphic intensive activities like gaming, designing, 3D modeling stuff and all.
                </li>
                <li>
                    Fedora : combination of above two like stable and faster, not faster as arch and neither the library is as wide as deb but it is best for one who do regular stuff and code on databases.
                </li>
            </ul>
            <h3 class="mt-4">Lectures:</h3>
            <p>
                The only intention of lectures is to let you know the topics
                you are supposed to cover in order to gain the implementation abilities. 
                Doing more create fatigue and less result in trouble during implementations
            </p>   
            <div class="table-responsive mt-4">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Linux Tutorial</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=_tCY-c-sPZc">linux-codewithharry</a></td></tr>
                        <tr><td>Bash Script</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=v-F3YLd6oMw">bash-traversymedia</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    },
    {
        Title: "object oriented programming",
        tags: "#oop #programming #python #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Object Oriented Programming</h4>
            <p>
                In object oriented programming, everything is object.
                object can represent the real world systems into the computer 
                in order to improve the operational productivity of the 
                system. 
            </p>
            <h4>Code</h4>
            <pre>
            class Animal:
                def __init__(self,tp,sp):
                    self.type = tp
                    self.speed = sp
                def run(self):
                    print("run @",self.speed,"km/h ")
                def climbTree(self):
                    print(self.type," can climb a tree - Not known")
                    
            class Dog(Animal):
                def __init__(self,na,sp):
                    self.name = na
                    Animal.__init__(self, "Dog",sp)
                def run(self):
                    print(self.name,"is",self.type," which ",end=" ")
                    super().run()
                def climbTree(self):
                    print(self.name, " is Dog, can't climb tree")
                
            class Monkey(Animal):
                def __init__(self,na,sp):
                    self.name = na
                    Animal.__init__(self, "Monkey",sp)
                def run(self):
                    print(this.name,"is",this.type," which ",end=" ")
                    super().run()
                def climbTree(self):
                    print(this.name," is Monkey, climb tree easily")
                
            dg = Dog("Tommy", 30)
            mn = Monkey("Mercell", 50)
            dg.run()
            mn.run()
            dg.climbTree()
            mn.climbTree()
            </pre>
            <h4>Output</h4> 
            <pre>
            Tommy is a Dog  which  run @ 30 km/h 
            Mercell is a Monkey  which  run @ 50 km/h 
            Tommy is Dog, can't climb tree
            Mercell is a Monkey, climb tree easily
            </pre>
            <h4>Core Concepts</h4>
            <ul>
                <li>Encapsulation: wrapping data and functions in one unit. Functions and variables of the Animal and Dog classes are encapsulated into one unit of dog object.</li>
                <li>Inheritance: data and functions of the base class are inherited by the derived class. The Animal class is inherited by the Dog and Monkey classes.</li>
                <li>Polymorphism: "one name, many forms". Here, the climbTree() function is one name but has many forms in its derived classes. In the Monkey class, it prints "can climb easily", but in the Dog class, it shows that it can't climb easily.</li>
                <li>Abstraction: a class which acts as a blueprint. We have "Animal" as an abstract class, which means there is nothing like "Animal" that really exists. "Dogs" and "Monkeys" are the real things that exist. In Java or other languages, or even in Python with some tweaks, we can define the Animal class as abstract, or prevent the creation of objects of the Animal class.</li>
            </ul>
            <h3>Lectures:</h3>
            <p>
                The only intention of lectures is to let you know the topics
                you are supposed to cover in order to gain the implementation abilities. 
                Doing more creates fatigue and less results in trouble during implementations.
            </p>   
            <div class="table-responsive mt-4">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>OOP (Quick)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=pTB0EiLXUC8">oop-quick-mosh</a></td></tr>
                        <tr><td>OOP in Python</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=qiSCMNBIP2g">oop-python-telusko</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    },
    {
        Title: "functional programming",
        tags: "#functionalprog #programming #python #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Functional Programming</h4>
            <p>
                Functional programming is based on lambda calculus which helps
                mathematicians to represent and operate computations more conveniently.
            </p>
            <pre>
            # pure functions, same output for same 
            # set of arguments with no modifications 
            # in the input.
            def sq(x):
                return x*x
            
            def cube(x):
                return x*x*x
            a = 2
            print("sq of ", a," = ",sq(a))
            print("sq of ", a," = ",sq(a))
            print("a not modified, sq is pure")
            
            # Impure functions
            arr = [1,2,3,4]
            
            def myfunc2(arr,i):
                arr[i] += 11
                return arr
            
            print("arr(before)",arr)
            myfunc2(arr,2)
            print("arr(after 1)",arr)
            myfunc2(arr,2)
            print("arr(after 2)",arr)
            print("arr modified, myfunc2 is impure")
            
            # lambda, function with n args but 1 expression only
            sqlm = lambda x:x*x
            cubelm = lambda x:x*x*x
            
            # here power is higher order function, it takes  
            # function as the argument
            
            def power(myfunc,x):
                return myfunc(x)
                
            print("square of ",3," = ",power(sqlm,3))
            
            # variables are immutable
            x = 3
            print("x = ",x)
            x = x + 4
            print("x = ",x)
            print("x changed from 3 to 7, hence mutable")
            
            inc2 = lambda x:x+4
            inc2(x)
            print("x = ",x)
            inc2(x)
            print("x = ",x)
            print("inc2 is immutable")
            
            # referential transparency
            def myfun22():
                return 5+8
            print(myfun22())
            
            # myfunc22 can be replaced in code
            # and there won't be any changes 
            # in the entire program, myfunc22 
            # function has referential transparency
            
            print(5+8)
            
            # map, reduce and filter
            
            aarr = [1,2,3,4]
            sqr = lambda x: x*x
            
            print("aarr = ",aarr)
            res = map(sqr,aarr)
            print("aarr = ",aarr)
            
            # arr remain same, map is pure function
            print("res = ",list(res))
            
            # reduce
            import functools
            
            aarrsum = lambda res,i:res+i
            res2 = functools.reduce(aarrsum,aarr)
            print("res2 = ", res2)
            
            # filter
            iseven = lambda x:x%2==0
            res3 = filter(iseven,aarr)
            print("res3 = ",list(res3))
            </pre>
            <br>
            <h4>Output</h4> 
            <pre>
            sq of  2  =  4
            sq of  2  =  4
            a not modified, sq is pure
            arr(before) [1, 2, 3, 4]
            arr(after 1) [1, 2, 14, 4]
            arr(after 2) [1, 2, 25, 4]
            arr modified, myfunc2 is impure
            square of  3  =  9
            x =  3
            x =  7
            x changed from 3 to 7, hence mutable
            x =  7
            x =  7
            inc2 is immutable
            13
            13
            aarr =  [1, 2, 3, 4]
            aarr =  [1, 2, 3, 4]
            res =  [1, 4, 9, 16]
            res2 =  10
            res3 =  [2, 4]
            </pre>
            <h4>Core Concepts</h4>
            <ul>
                <li>Pure functions: Same output for the same input arguments.</li>
                <li>Functions are First-Class and can be Higher-Order: Functions are treated like objects and can be passed as arguments and returned.</li>
                <li>Variables are immutable, function with referential transparency: Variables can't be modified. Referential transparency means that a function can be replaced by a piece of code, and there will be no impact on the final state of the entire program.</li>
            </ul>
            <h3>Lectures:</h3>
            <p>
                The only intention of lectures is to let you know the topics
                you are supposed to cover in order to gain the implementation abilities. 
                Doing more creates fatigue and less results in trouble during implementations.
            </p>   
            <div class="table-responsive mt-4">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>functional programming (JS)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=e-5obm1G_FY">functional-programming-js-anjana</a></td></tr>
                        <tr><td>functional programming (Python)</td><td>Programming</td><td><a target="_blank" href="https://www.youtube.com/watch?v=2OdyPEY77X8">functional-programming-python</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
    },
    {
        Title: "SOLID Principles in Object-Oriented Programming",
        tags: "#oop #programming #python #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">SOLID Principles in OOP</h4>
            <pre>
            # S.O.L.I.D. principle in OOP
    
            # S : Single Responsibility
            
            class Circle():
                def __init__(self,r):
                    self.radius = r
                def area(self):
                    return 3.14*(self.radius**2)
            
            c = Circle(5)
            print(c.area())
            
            # O : Open Closed 
            
            class Square():
                def __init__(self,a):
                    self.side = a
                def area(self):
                    return (self.side**2)
                def param(self):
                    return 4*self.side
                    
            s1 = Square(3)
            print(s1.area())
            print(s1.param())
            
            # L : Liskov Substitution, derived class object 
            $ can be substituted in place of base class object
            
            class Shape():
                def __init__(self):
                    pass
                def area(self):
                    return 0
            
            class Rectangle(Shape):
                def __init__(self, l, w):
                    self.length = l
                    self.width = w
                def area(self):
                    return self.length * self.width
            
            # r = Rectangle(10,20)
            # print("area ",r.area())
            # print("parameter ",r.parameter())
            
            # I : Interface Segregation,
            
            class SMSDevice():
                def sms(self):
                    print("sms ..")
                    pass
            
            class CallDevice():
                def call(self):
                    print("call")
                    pass
            
            class SmartPhone(SMSDevice, CallDevice):
                def __init__(self):
                    pass
                def sms(self):
                    super().sms()
                def call(self):
                    super().call()
                
            smPh = SmartPhone()
            smPh.sms()
            smPh.call()
            
            
            # Dependency Inversion
            
            class Employee(object):
                def Work():
                    pass
                  
            class Manager():
                def __init__(self):
                    self.employees=[]
                def addEmployee(self,a):
                    self.employees.append(a)
               
            class Developer(Employee):
                def __init__(self):
                    print("developer added")
                def Work():
                    print("turning coffee into code")
                      
            class Designer(Employee):
                def __init__(self):
                    print("designer added")
                def Work():
                    print("turning lines to wireframes")
            
                      
            a=Manager()
            a.addEmployee(Developer())
            a.addEmployee(Designer())
    
            </pre>
            <h4>Core Concepts</h4>
            <ul>
                <li>Single Responsibility Principle (SRP) states that a Class or Module should have one job to do and hence it should have only one reason to change.</li>
                <li>The Open-Closed principle states that a Class or Module should be open to extensions and closed for modifications.</li>
                <li>Liskov Substitution Principle states that if we have a base class and a child class, then objects of the base class should be substituted by objects of the child class without giving incorrect results.</li>
                <li>The Interface Segregation Principle states that clients should not be forced to depend on methods that they do not use.</li>
                <li>Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Instead of depending on low-level modules like designer and developer, the manager as a high-level module or class should be dependent on the abstract class "employee". Now, different kinds of employees can be added even without a designer and developer.</li>
            </ul>
            <h4>Few Other Principles</h4>
            <ul>
                <li>DRY: Don't repeat yourself, avoid code that repeats itself.</li>
                <li>KISS: Keep it simple stupid, don't try to make code complex unnecessarily.</li>
            </ul>
        </div>
        `
    },
    {
        Title: "How to Approach Data Structures and Algorithms",
        tags: "#dsa #programming #tutorial",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Approaching Data Structures and Algorithms</h4>
            <p>(i) Don't memorize, instead visualize. When you become capable enough to visualize, then only you will be able to solve difficult questions.</p>
            <p>(ii) Loop and recursion are the foundation of coding. Don't touch anything else unless you become good at recursion or loops.</p>
            <p><strong>But really, why?</strong></p>
            <ul>
                <li>Mergesort, quicksort, graph, tree, etc. use recursion everywhere.</li>
                <li>Linked list, array, stack, etc. use loops everywhere.</li>
            </ul>
            <p>Any variation in loop or recursion will make you stressed if you are not able to visualize. Give a huge amount of time to these two topics. I highly recommend <a target="_blank" href="https://codingbat.com/java">codingbat.com</a>. This website has a lot of easy to hard questions on recursion and loops, and is designed by an experienced professor, considering human psychology instead of just posting a pile of questions like other coding websites.</p>
            <p>Update: Youtuber named @striver (Raj Vikramaditya) has created really great content. Do check out <a target="_blank" href="https://takeuforward.org/">takeuforward.org</a> and their <a target="_blank" href="https://www.youtube.com/@takeUforward">YouTube channel</a>.</p>
            <p>(iii) Try to solve questions with recursion that you generally solve with loops and vice versa.</p>
            <p>(iv) Practice coding problems up to a certain level until your brain starts giving auto-suggestions.</p>
            <p>Do Leetcode study plan questions. It has everything, consisting of 200-250 questions covering all concepts with various difficulty levels. Check out:</p>
            <ul>
                <li><a target="_blank" href="https://leetcode.com/study-plan/data-structure/">Leetcode Study Plan - Data Structure</a></li>
                <li><a target="_blank" href="https://leetcode.com/study-plan/algorithm/">Leetcode Study Plan - Algorithm</a></li>
                <li>or <a target="_blank" href="https://www.interviewbit.com/courses/programming/">InterviewBit Programming Course</a></li>
            </ul>
            <p>Solving Data Structures and Algorithms proactively all the time (also known as Competitive Coding) is purely a waste of time in the era of open source. It is just that if a decent engineer takes 1 hour to solve a DSA question, then 6* codeforce/codechef will do the same in 1/2 hour, but the opportunity for doing such things occurs once a month for senior engineers. That person imports such algorithms with open source libraries, which is a good practice as these libraries are well tested and well documented, and sometimes copy it from Google which makes speed in that skill useless. The main benefit of doing DSA is found while learning new concepts, especially in system design.</p>
            <p>It is just 20% of the equation, so don't think doing data structures and algorithms will solve all other problems of software engineering and business, which is why engineering jobs exist.</p>
            <p>(i) In Academia : It is more tilted towards &quot;P vs NP&quot;.</p>
            <p>People are primarily trying to understand :</p>
            <p>a. If we can reduce any given algorithm into P/NP.</p>
            <p>b. P/NP classification help us understand whether we can solve the problem by throwing more computing resources or not with increasing value of Input.</p>
            <p>c. If we can't solve the problem, whether we can use some kind of &quot;heuristics&quot; to get things done for all practical purpose or not.</p>
            <p>(ii) In Industry : It is more tilted towards &quot;Debugging the algorithm&quot;.</p>
            <p>Companies using D.S.A. as primary criteria wish to understand :</p>
            <p>a. If candidate can actually understand popular algorithms and debug issues in large code-bases.</p>
            <p>Bigger company means bigger code-base, people already know what they are doing and market is already identified. So, primary challenge of bigger company is maintaining big infrastructure and understanding the leakages not developing new products or solving new problems.</p>
            <p>b. If candidate can properly communicate the issue to other team members or not.</p>
            <p>That's why interviewer focus primarily upon &quot;candidate's ability to explain algorithm&quot; more the &quot;candidates ability to solve very complex algorithms (competitive coding) within a given time&quot;.</p>
            <p>(iii) In Competitive Programming : It is more tilted towards &quot;optimization of algorithms&quot;</p>
            <p>a. Optimization of algorithms beyond a point can't be done in majority of simple data structures and algorithms.</p>
            <p>Usually these optimizations make more sense in advance topics like Graphs and Dynamic Programming and most of the problems in academia and industry don't require solving these problems within a given time period on frequent basis.</p>
            <p>Doing too much competitive coding mindlessly can be counter productive because you might develop a habit of skipping the basics and sometimes problems lies in the basics algorithms implementations itself. </p>
        </div>
        `
    },
    {
        Title: "How to Pick the Right Database",
        tags: "#dbms #programming #tutorial",
        Blog: `
        <div class="container">
            <h3 class="mt-4">How to Pick the Right Database</h3>
            <p><b>MySQL:</b> MySQL is a relational database used when we have data that can be stored in a tabular format and we need to perform ACID transactions. It is commonly used in banking or financial apps where money is deducted from one account and added to another as a single operation, ensuring data consistency in case of failures.</p>
            <p><b>MongoDB:</b> MongoDB is a document database used for faster read and write operations and storing unstructured data.</p>
            <p><b>Redis:</b> Redis is a cache database used to store data in key-value pairs, providing quick access to the data.</p>
            <p><b>Cassandra:</b> Cassandra stores data in key-value pairs and is suitable for storing huge amounts of data, often used as a backup storage or for applications requiring high write throughput.</p>
            <p><b>CDN:</b> A Content Delivery Network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to users.</p>
            <p><b>Amazon S3:</b> Amazon Simple Storage Service (S3) provides object storage through a web service interface, commonly used to store media objects like photos and videos.</p>
            <p><b>Hadoop:</b> Apache Hadoop is an open-source framework for storing and processing large datasets, allowing clustering of multiple computers to analyze massive datasets in parallel.</p>
            <p><b>Apache Kafka:</b> Kafka is a distributed publish-subscribe messaging system that can handle high volumes of data, suitable for both offline and online message consumption, with integration capabilities for real-time streaming data analysis.</p>
            <p><b>Apache Spark:</b> Spark is an open-source distributed processing system used for big data workloads, supporting batch processing, interactive queries, real-time analytics, machine learning, and graph processing.</p>
            <p><b>Neo4J:</b> Neo4j is a graph database management system helpful for storing and processing relationships more conveniently.</p>
        </div>
        `
    },
    {
        Title: "MERN Stack Web Dev for Tourist app ( REST API ) , How to pick right React JS framework for frontend, What is Progressive Web App (PWA web app), Trusted Web Activity (TWA Android App)",
        tags: "#mern #restapi #web #dbms #pwa #twa #programming #tutorial #project",
        Blog: `
        <div class="container">
            <h4 class="mt-4">Tourist App (MERN Stack Application)</h4>
            <h4>Designing the App</h4>
            <p>
                The first step is to design the app User Interface (UI) according to your needs in designing tools like Figma, and design the backend of the app by designing API and databases.
            </p>
            <h4>Design in Figma</h4>
            <img src="data/images/mern/mern1.jpeg" class="img-fluid" alt="Design in Figma">
            <img src="data/images/mern/mern2.jpeg" class="img-fluid mt-2" alt="Design in Figma">
            <img src="data/images/mern/mern3.jpeg" class="img-fluid mt-2" alt="Design in Figma">
            <style>
                table, th, td {
                    border: 1px solid lightgray;
                    border-collapse: collapse;
                    padding: 3px;
                }
            </style>
            <h4>Tourist App (MERN Stack Application)</h4>
            <p>
                M : MongoDB : Non Relational Database<br>
                E : Express : Backend REST API framework built on NodeJS<br>
                R : React JS : Frontend framework based on NodeJS<br>
                N : Node JS : Framework for web development<br>
            </p>
            <p>
                From product design, start with the front-end and try to get all the possible requests (GET, POST, PUT, DELETE - RESTful or Queries, Mutation, Subscription - GraphQL) you need from the server then design the database Schema (Types-GraphQL, Mongoose Models, etc.).
            </p>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr><th>Code Name</th><th>Code URL</th></tr>
                    </thead>
                    <tr><td>Tourist(frontend:NextJS(reactjs))</td><td><a target="_blank" href="https://github.com/yashp241195/tourist-frontend">tourist-frontend</a></td></tr>
                    <tr><td>Tourist(backend:ExpressJS,SwaggerDocs)</td><td><a target="_blank" href="https://github.com/yashp241195/tourist-backend">tourist-backend</a></td></tr>
                </table>
            </div>
            <div class="d-flex flex-wrap">
                <img src="data/images/mern/mern4.jpg" class="img-fluid m-2" alt="App Image">
                <img src="data/images/mern/mern5.jpg" class="img-fluid m-2" alt="App Image">
                <img src="data/images/mern/mern6.jpg" class="img-fluid m-2" alt="App Image">
            </div>
            <h4>Lectures</h4>
            <p>The only intention of lectures is to let you know the topics you are supposed to cover in order to gain the implementation abilities. Doing more creates fatigue and less results in trouble during implementations.</p>
            <div class="table-responsive">
            <table class="table">
                <thead class="thead-dark">
                    <tr><th>Course Name</th><th>Category</th><th>Tutorial URL</th></tr>
                </thead>
                <tr><td>NodeJS Basic</td><td>Web (Basic)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=TlB_eWDSMt4">nodejs-mosh</a></td></tr>
                <tr><td>ReactJS with Hooks</td><td>Web (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=9U3IhLAnSxM">reactjs-with-hooks</a></td></tr>
                <tr><td>NextJS Full</td><td>Web (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=7J4iL1HDshQ&list=PLYSZyzpwBEWSQsrukurP09ksi49H9Yj40">nextjs-bruno</a></td></tr>
                <tr><td>NextJS Cookies</td><td>Web (Frontend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=_AYuhmz-fX4">nextjs-cookies</a></td></tr>
                <tr><td>REST API Express Basic</td><td>Web (Backend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=pKd0Rpw7O48">RESTAPI-express-mosh</a></td></tr>
                <tr><td>REST API Express Full</td><td>Web (Backend)</td><td><a target="_blank" href="https://www.youtube.com/watch?v=zx6jnaLuB9Q&list=PLSpJkDDmpFZ7GowbJE-mvX09zY9zfYatI">RESTAPI-express-full-codeworkr</a></td></tr>
                <tr><td>NodeJS Security</td><td>Web (Backend)</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLTgRMOcmRb3PcbiJAR6rQb1OaijMyy0Mp">nodejs-security</a></td></tr>
            </table>
            </div>
            <h3>How to pick the right ReactJS framework for frontend?</h3>
            <p>The same tourist app could be created with pure ReactJS using "create-react-app" as well instead of NextJS. For small projects like that, it really doesn't matter but when we create any real project which we are supposed to maintain and provide services then we need to consider the following:</p>
            <p>
                1. If you want to build a site which is mostly static (blog, portfolio, landing page), use Gatsby. It's not SSR, but it pre-renders the website into HTML at build time.<br>
                2. If you want to build a web app with React, and you care about SEO, easier social media optimization, and faster render for the user, you should think about SSR and a framework like Next.js.<br>
                3. If you're building a SPA (single page application), and you don’t want to configure everything on the server side like: i18n, router, etc., you should use create-react-app.
            </p>
            <h3>What is a Progressive Web App (PWA)?</h3>
            <div>
                <p>A progressive web app (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase, and download software locally. Instead, a PWA can be located with a search engine query and accessed immediately through a browser.</p>
                <p>PWAs eliminate the need for e-commerce merchants to develop native apps for multiple mobile operating systems. Just like YouTube videos, PWA content is downloaded progressively, which provides the end user with a better user experience than a traditional website that uses responsive design. The term “progressive web apps” was coined in 2015 by designer Frances Berriman and Google Chrome engineer, Alex Russell.</p>
                <p>The goal of PWAs is to blur the distinction between native apps and the mobile web by bringing most of the benefits of native mobile apps to the mobile browser. PWAs use standards-based technologies and run in a Container that is secure and accessible to anyone on the web. They can send web push notifications, work offline, and be accessible from the home screen, just like a mobile app from an app store.</p>
                <p>Pick PWA over native mobile when you don't need to perform heavy computation and your app doesn't rely majorly on hardware. It is a bad choice for making a camera filter app as it requires camera hardware acceleration.</p>
            </div>
            <h3>What is Trusted Web Activity (TWA) Android?</h3>
            <div>
                <p>A Trusted Web Activity (TWA) allows us to "package" a PWA-standard online service in a special container based on the Chrome web browser. To an average user, this package will act like a standard application. And TWAs can be published in the Google Play Store.</p>
                <p>From a technical standpoint, a TWA is a browser instance without its own graphic interface (URL bar and menu) which works in a verified mode (Trusted). It can connect solely to a specific domain to give the impression of browsing a full-fledged mobile application.</p>
                <p>In other words, an application that's based on a PWA page can be installed on a mobile device. If we decide to change the device, this installation (with the data used) can be re-created, as the TWA is linked to the user's Google account. Such an application has an icon, can work in full-screen mode, allows access to specialized device functions, and works offline. From the user's point of view, it's essentially a standard application.</p>
            </div>
        </div>
        `
    },
    {
        Title: "MERN Stack Web Dev for Book app ( GraphQL API )",
        tags: "#mern #graphql #web #dbms #programming #tutorial #project",
        Blog: `
        <div class="container">
        <h4 class="mt-4">MERN Stack Web Dev for Book App (GraphQL API)</h4>
        <img src="data/images/mern/mern7.jpeg" class="img-fluid" alt="Book App Image">
        <h3 class="mt-4">Lectures</h3>
        <p>The only intention of lectures is to let you know the topics you are supposed to cover in order to gain the implementation abilities. Doing more creates fatigue and less results in trouble during implementations.</p>
        <div class="table-responsive">
            <h3>Lecture Topics</h3>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GraphQL (React+Express)</td>
                        <td>Web</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=ed8SzALpx1Q">express-react-graphql</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table-responsive">
            <h3>Code for Book App</h3>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Code Name</th>
                        <th>Code URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BookApp (React, Express, GraphQL)</td>
                        <td><a target="_blank" href="https://github.com/yashp241195/GraphQLBookApp">book-app-graphql</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
            `
    },
    {
        Title: "Requirements to Low Level Diagram to code , How to improve software development speed",
        tags: "#soa #systemdesign #programming #microservice #project",
        Blog: `
        <div class="container">
        <h3>Requirements to Low Level Diagram to Code</h3>
        <p>Low-Level Design (LLD) helps to create a working product from concept quickly.</p>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/lld/projects08.jpeg" class="img-fluid mb-3" alt="Project Image 1">
            </div>
            <div class="col-md-6">
                <img src="data/images/lld/projects09.jpeg" class="img-fluid mb-3" alt="Project Image 2">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/lld/projects10.jpeg" class="img-fluid mb-3" alt="Project Image 3">
            </div>
            <div class="col-md-6">
                <img src="data/images/lld/projects11.jpeg" class="img-fluid mb-3" alt="Project Image 4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/lld/projects12.jpeg" class="img-fluid mb-3" alt="Project Image 5">
            </div>
            <div class="col-md-6">
                <img src="data/images/lld/projects13.jpeg" class="img-fluid mb-3" alt="Project Image 6">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/lld/projects14.jpeg" class="img-fluid mb-3" alt="Project Image 7">
            </div>
            <div class="col-md-6">
                <img src="data/images/lld/projects15.jpeg" class="img-fluid mb-3" alt="Project Image 8">
            </div>
        </div>
        <h3 class="mt-4">How to Improve Software Development Speed</h3>
        <ol>
            <li>Improve typing speed and capabilities so that you can type without fatigue and also reading speed.</li>
            <li>Learn Linux commands and start using command-line tools such as the Linux terminal.</li>
            <li>Always test whether functionalities are working properly before developing anything.</li>
            <li>Focus on abstraction and design the RestAPI or GraphQL or gRPC needed to make software functional.</li>
            <li>Design the Low-Level Diagram of the most basic version of the software without worrying about optimization.</li>
            <li>Develop and deploy the first version of the software and fix bugs.</li>
            <li>Design the next iteration and implement only specific features.</li>
        </ol>
    </div>
            `
    },
    {
        Title: "Service oriented architecture, CAP Theorem, High Level Diagram for Amazon , Uber",
        tags: "#soa #systemdesign #cap #programming #tutorial #project",
        Blog: `

        <div class="container">
    <h3>Service Oriented Architecture</h3>
    <p>Service Oriented Architecture (SOA) splits the big monolith application into multiple services so that it can handle big scale applications more efficiently and also allow reusability of resources. In SOA, smaller teams can work on independent services which allows faster development, deployment, bug fixing and healing which is extremely important for large scale applications as every second is the second of business transaction.</p>
    <h3>CAP Theorem</h3>
    <p>In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that any distributed data store can provide only two of the following three guarantees:</p>
    <ul>
        <li><strong>Consistency:</strong> Every read receives the most recent write or an error.</li>
        <li><strong>Availability:</strong> Every request receives a (non-error) response, without the guarantee that it contains the most recent write.</li>
        <li><strong>Partition Tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.</li>
    </ul>
    <p>Thus, if there is a network partition, one has to choose between consistency and availability. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in ACID database transactions.</p>
    <div class="row">
        <div class="col-md-6">
            <img src="data/images/hld/projects16.jpeg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Amazon">
        </div>
        <div class="col-md-6">
            <img src="data/images/hld/projects17.jpeg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Uber">
        </div>
    </div>
    <h3 class="mt-4">Lectures:</h3>
    <p>The only intention of lectures is to let you know the topics you are supposed to cover in order to gain the implementation abilities. Doing more create fatigue and less result in trouble during implementations</p>
    <div class="table-responsive">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Topic</th>
                    <th>Category</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Microservices Edureka</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://www.youtube.com/watch?v=E3ByCRqE7Lo">microservice-edureka</a></td>
                </tr>
                <tr>
                    <td>Microservices Narendra</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://www.youtube.com/watch?v=NgyKTKyN4BU&list=PLkQkbY7JNJuDqCFncFdTzGm6cRYCF-kZO&index=3">microservice-narendra</a></td>
                </tr>
                <tr>
                    <td>Microservices CodeKarle</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://www.codekarle.com/">microservice-codekarle</a></td>
                </tr>
                <tr>
                    <td>Kafka Install</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://linuxhint.com/install-apache-kafka-ubuntu/">kafka-install</a></td>
                </tr>
                <tr>
                    <td>Kafka Tutorial</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://www.javatpoint.com/apache-kafka">Kafka-javatpoint</a></td>
                </tr>
                <tr>
                    <td>RabbitMQ Install</td>
                    <td>System Design</td>
                    <td><a target="_blank" href="https://linuxhint.com/install-rabbitmq-ubuntu/">rabbitmq-install</a></td>
                </tr>
                <tr>
                    <td>Kailash Nadh, CTO Zerodha</td>
                    <td>System Design (Theory vs Practical)</td>
                    <td><a target="_blank" href="https://www.youtube.com/watch?v=Aawk_wg_VYY&ab_channel=SCALER">scaling-zerodha</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



            `
    },
    {
        Title: "Microservice architecture , High Level Diagram for Amazon , Whatsapp , Twitter , Netflix",
        tags: "#soa #systemdesign #programming #microservice #tutorial #project",
        Blog: `
        <div class="container">
        <h4>Microservice architecture </h4>
        <p>Microservice architecture is also a way to implement Service Oriented Architecture. Microservices is an architectural design for building a distributed application using containers. They get their name because each function of the application operates as an independent service. This architecture allows for each service to scale or update without disrupting other services in the application.</p>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/hld/projects18.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Amazon">
            </div>
            <div class="col-md-6">
                <img src="data/images/hld/projects19b.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Whatsapp">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/hld/projects19c.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Twitter">
            </div>
            <div class="col-md-6">
                <img src="data/images/hld/projects20a.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Netflix">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/hld/projects20b.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Amazon">
            </div>
            <div class="col-md-6">
                <div class="overflow-auto" style="max-height: 600px;">
                    <img src="data/images/hld/projects21a.jpg" class="img-fluid mb-3" alt="High Level Diagram for Whatsapp">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/hld/projects21b.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Twitter">
            </div>
            <div class="col-md-6">
                <div class="overflow-auto" style="max-height: 600px;">
                    <img src="data/images/hld/projects22a.jpg" class="img-fluid mb-3" alt="High Level Diagram for Netflix">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="data/images/hld/projects22b.jpg" class="img-fluid mb-3" style="max-width: 100%;" alt="High Level Diagram for Amazon">
            </div>
        </div>
    </div>
        `
    },
    {
        Title: "Git , Github, Version Control System ( VCS ) ",
        tags: "#git #devops #deployment #programming #tutorial",
        Blog: `
        <div class="container mt-5">
        <h4>Git and Github : Version Control System</h4>
        <p>Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud-based hosting service that lets you manage Git repositories. If you have open-source projects that use Git, then GitHub is designed to help you better manage them.</p>
        <br>
        <h4>Create and Upload git repository</h4>
        <div class="row">
            <div class="col-md-6">
                <pre>// initialize the folder as git repository
    $ git init
    // add particular file to git 
    $ git add file.txt
    // add all files in the directory with
    $ git add .
    // ignore files for commit with .gitignore
    // by mentioning things you wish to ignore
    // inside .gitignore (for example in any node project)
    // node_modules
    // check which branch you are presently in
    $ git branch --list
    // commit to git current branch
    $ git commit -m 'first commit'
    </pre>
            </div>
            <div class="col-md-6">
                <pre>// Create the branch
    $ git branch mybranch
    // Delete the branch 
    $ git branch -d mybranch
    // Switch to mybranch
    $ git checkout mybranch
    // merge branchA from branchB
    $ git checkout branchA
    // switched to branchA ..
    $ git merge branchB
    // branch B is merged into branch A 
    </pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>Pushing the code to github</h4>
                <pre>// add the remote url to origin variable (SSH)
    $ git remote add origin git@github.com:yashp241195/devhelp.git
    // if origin already exists you can remove origin and add new origin again
    $ git remote remove origin
    // create the SSH Keys pair for committing to github
    $ ssh-keygen -t ed25519 -C 'git@github.com:yashp241195/devhelp.git'
    // this will create two keys github (private) and github.pub (public) keys.
    // add key.pub data to github account key (private) into your local directory
    // from where you want to push the code to your github
    $ eval ssh-agent
    $ ssh-add /home/yash/Desktop/myapps/keys/github
    github
    $ sudo env SSH_AUTH_SOCK="$SSH_AUTH_SOCK" ssh-add /home/yash/Desktop/myapps/keys/github
    gitlab 
    $ sudo env SSH_AUTH_SOCK="$SSH_AUTH_SOCK" ssh-add /home/yash/Desktop/myapps/keys_gl/glkey
    // pushing the files into the main branch
    $ git push origin main</pre>
            </div>
        </div>
        <h3 class="mt-4">Lectures:</h3>
        <p>The only intention of lectures is to let you know the topics you are supposed to cover in order to gain the implementation abilities. Doing more create fatigue and less result in trouble during implementations</p>
        <div class="table-responsive">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Git basics mosh</td>
                        <td>Programming</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=8JJ101D3knE">git-basic-mosh</a></td>
                    </tr>
                    <tr>
                        <td>Git master freecodecamp</td>
                        <td>Programming</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=Uszj_k0DGsg">git-master-freecodecamp</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    
    
    
    
            `
    },
    {
        Title: "Deployment , Virtual Machine (VPS) vs Container ( Docker , Kubernetes )",
        tags: "#deployment #devops #programming #tutorial",
        Blog: `

        <div class="container">
    <h4>Deployment</h4>
    <p>We can deploy our webapps via containers or virtual machines,
        <br><b>Virtual machine</b>: A VM is a virtualized instance of a computer that can perform almost all of the same functions as a computer, including running applications and operating systems. Virtual machines run on a physical machine and access computing resources from software called a hypervisor.
        <br/>
        <b>VPS</b>: A VPS—or virtual private server—is a virtual machine that provides virtualized server resources on a physical server that is shared with other users. With VPS hosting, you get dedicated server space with a reserved amount of resources, offering greater control and customization than shared hosting.
        <br>
        VPS is better than cloud when you need to host many websites with lower traffics or when you are at the high scale and need dedicated servers. Cloud is useful when you need high availability across geography for your one or two apps.
        <br/>
        Learn about Hostinger VPS : <a target="_blank" href="https://github.com/yashp241195/HostingerVPS">hostinger-vps</a>
        <br/>
        <b>Container</b>: Containers are a form of operating system virtualization. A single container might be used to run anything from a small microservice or software process to a larger application. Inside a container are all the necessary executables, binary code, libraries, and configuration files.
    </p>
    <p>
        Containers are much faster than Virtual Machines because they are lightweight.
        Docker is a container technology and Docker Swarm is a container orchestration
        technology which can manage multiple containers automatically.
        Kubernetes is also a container orchestration technology which provides auto
        scaling.<br>
        Say, you hosted an ecommerce website as a microservice where each container act
        as a component of microservice and you found on weekends there is huge traffic
        which means you need more scale on weekends then weekdays, on manual scaling we
        need a tech team who take care of scale according to traffic and there will be lags
        and ultimately huge wastage of resources whereas kubernetes provide auto scale.
        Pokemon Go is the best example of this, they were expecting 5X traffic instead they
        got 50X but kubernetes handle it really well or without any downtime, they were able
        to serve their customers, after that kubernetes become the benchmark in the industry.
    </p>
    <br>
    <h4>Create and Upload docker container</h4>
    <div class="row">
        <div class="col-md-12">
            <pre>// check if docker installed or not
$ docker version
// run will get the image from docker-hub if not present locally
$ docker run hello-world
// list all docker images available locally
$ docker image --list
// -d - run the container in detached mode (in the background)
// -p 80:80 - map port 80 of the host to port 80 in the container
// docker/getting-started - the image to use
$ docker run -d -p 80:80 docker/getting-started
// see the running docker containers
$ docker ps
// stop the container
$ docker stop <the-container-id>
// remove the container
$ docker rm <the-container-id>
// Building the image from current directory
// .dockerignore will have all the files you wish not to include
node_modules
// inside Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
RUN npm install
COPY . /app
CMD [ 'nodemon', 'index.js' ]
EXPOSE 8080
// build the image with tag myimage
$ docker build -t myimage .
</pre>
        </div>
    </div>
    <h4>Create servers with docker-compose</h4>
    <div class="row">
        <div class="col-md-12">
            <pre>
version: '3'
services:
api-server:
    build: .
    image: api-server
    ports:
    - '5000:8080'
    networks:
    - mern-app
    depends_on:
    - mongo
mongo:
    image: mongo:3.6.19-xenial
    ports:
    - "27017:27017"
    networks:
    - mern-app
    volumes:
    - mongo-data:/data/db
networks:
mern-app:
    driver: bridge
volumes:
mongo-data:
    driver: local
// start the containers with the above configurations
$ docker-compose up
// stop the containers started with docker-compose
$ docker-compose down
</pre>
        </div>
    </div>
    <br>
    <div style="margin-left:0px">
        <h4>Deploy with Kubernetes (minikube)</h4>
        <img src="data/images/others/kube.jpeg"  class="img-fluid" />
    </div>
    <div style=" overflow-x:scroll;">
        <pre>
# DeployWithKubernetes
docker build container
$ docker build -t app-1-k8s:1 .
Deploy on kubernetes with minikube, minikube is a single node cluster made for
testing purpose, minikube requires virtualbox or hyperviser (virtual machine) as well to run on local system
check the minikube working or not by checking it's version
$ minikube version
start the cluster on local machine
$ minikube start
check the status of nodes on kubernetes cluster with kubectl, a command line tool
$ kubectl get nodes
To use docker images in kubernetes you need to run
$ eval $(minikube docker-env)
Important note: You have to run eval $(minikube docker-env) on each terminal you want to use, since it only sets the environment variables for the current shell session.
apply the kubernetes configurations set in K8s/main.yaml to the cluster
$ kubectl apply -f K8s/main.yaml
open minikube dashboard in another window
$ minikube dashboard
run the 'express-test-service' by
$ kubectl get svc
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)          AGE
express-test-service   LoadBalancer   10.104.31.77   10.104.31.77   6100:32415/TCP   7m3s
kubernetes             ClusterIP      10.96.0.1      < none >         443/TCP          44h
access the express app in your web browser with http://10.104.31.77:6100/
$ curl 10.104.31.77:6100
{'message':'Welcome : express-test-app-68469d95c7-h75h8 to app-1 '}
incase EXTERNAL-IP of express-test-service stay in pending state use the following commnd
because minikube doesn't provide the loadbalancer. To run the service you need loadbalancer
$ minikube tunnel


### main.yaml
apiVersion: v1
kind: Service
metadata:
  name: express-test-service
spec:
  selector:
    app: express-test-app
  ports:
  - protocol: "TCP"
    port: 6100
    targetPort: 3010
  type: LoadBalancer
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: express-test-app
spec:
  selector:
    matchLabels:
      app: express-test-app
  replicas: 2
  template:
    metadata:
      labels:
        app: express-test-app
    spec:
      containers:
      - name: express-test-app
        image: app-1-k8s:1
        imagePullPolicy: Never
        ports:
        - containerPort: 3010
</pre>
</div>
<h3>Lectures:</h3>
<p>
The only intention of lectures is to let you know the topics
you are supposed to cover in order to gain the implementation abilities. 
Doing more create fatigue and less result in trouble during implementations
</p>
<style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 3px;
        border-color: lightgray;
    }

    th {
        background-color: #343a40;
        color: white;
    }
</style>
<table style="width:100%;border: 1px solid;">
    <tr>
        <th>Topic</th>
        <th>Category</th>
        <th>URL</th>
    </tr>
    <tr>
        <td>Docker Full</td>
        <td>Deploy</td>
        <td><a target="_blank" href="https://www.youtube.com/watch?v=3c-iBn73dDE">docker-full</a></td>
    </tr>
    <tr>
        <td>Kubernetes Full</td>
        <td>Deploy</td>
        <td><a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do">kubernetes-full</a></td>
    </tr>
</table>
<h3> Code for Docker/Kubernetes </h3>
<table style="width:100%;border: 1px solid;">
    <tr>
        <th>Code Name</th>
        <th> Code URL</th>
    </tr>
    <tr>
        <td>Docker Compose Nodeapp deploy</td>
        <td> <a target="_blank" href="https://github.com/yashp241195/DeployWithDockerCompose">deploy-docker-compose</a> </td>
    </tr>
    <tr>
        <td>Kubernetes Deploy</td>
        <td> <a target="_blank" href="https://github.com/yashp241195/DeployWithKubernetes">deploy-with-kubernetes</a> </td>
    </tr>
</table>
</div>

        `
    },

    {
        "Title": "DevOps , AWS , Terraform , Gitlab CI",
        "tags": "#devops #ci #aws #deployment #programming #tutorial",
        "Blog": `
        <h4>Deploy EC2 on AWS with Terraform</h4>
        <p>Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and 
        version infrastructure safely and efficiently. This includes low-level components such as 
        compute instances, storage, and networking, as well as high-level components such as DNS entries, 
        SaaS features, etc.
        </p>
        <div style="overflow-x:auto;">
        <pre>
        Deploy EC2 instance on AWS with terraform
        $ terraform init
        $ terraform plan -out=myplan
        $ terraform apply
        $ terraform destroy
        
        ### inside main.tf
    
        /*
        // static way, just for testing purpose, not recommended always use
        // environment variables in order to avoid accidental security key leak
        // on VCS like git  
    
        provider "aws" {
        region = "<region selected in aws account>"
        access_key = "<access key from aws account>"
        secret_key = "<secret access key from aws account>"
        }
        */
    
        provider "aws" {}
    
        /*
        set the aws provider info with environment variables
        export AWS_ACCESS_KEY_ID="<access key from aws account>"
        export AWS_SECRET_ACCESS_KEY="<secret access key from aws account>"
        export AWS_DEFAULT_REGION="<region selected in aws account>"
        */
    
        resource "aws_instance" "myfirstserver" {
        ami = "ami-0c2d06d50ce30b442"
        instance_type = "t2.micro"
            tags = {
                Name = "linux"
            }
        }
    
        output "ec2create" {
        value = << EOT
            AWS terraform for ec2 instance creation :
            
            Name = $aws_instance.myfirstserver.tags.Name 
            ami = $aws_instance.myfirstserver.ami 
            
            id = $aws_instance.myfirstserver.id 
            public ip = $aws_instance.myfirstserver.public_ip 
    
            EOT
        }
        </pre>
        </div>
        <br>
        <h4> Gitlab CI </h4>
        <br/>
        <div>
        GitLab CI/CD is the part of GitLab that you use for all of the continuous methods (Continuous Integration, Delivery, and Deployment). With GitLab CI/CD, you can test, build, and publish your software with no third-party application or integration needed.
        </div>
        <img src="data/images/others/gl-ci.png" class="img-fluid" />
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
        }
    
        th {
            background-color: #343a40;
            color: white;
        }
        </style>
        <h3> Code for AWS Terraform </h3>  
        <div style="overflow-x:auto;">
        <table class="table table-striped">
        <thead class="thead-dark">
        <tr><th>Code Name</th><th> Code URL</th></tr>
        </thead>
        <tbody>
        <tr><td>AWSTerraformEC2</td><td> <a target="_blank" href="https://github.com/yashp241195/AWSTerraformEC2" >AWSTerraformEC2</a> </td></tr>
        </tbody>
        </table>
        </div>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <div style="overflow-x:auto;">
        <table class="table table-striped">
        <thead class="thead-dark">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        </thead>
        <tbody>
        <tr><td>Terraform Intro</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=l5k1ai_GBDE">terraform-intro</a></td></tr>
        <tr><td>Terraform (AWS)</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=SLB_c_ayRMo&t=19s">terraform-aws</a></td></tr>
        <tr><td>Gitlab CI</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PL6iUkDSEH9SumTY7OSLmcMeFmRtQsQvNn">gitlab-ci</a></td></tr>
        <tr><td>AWS Cloud Full</td><td>DevOps</td><td><a target="_blank" href="https://www.youtube.com/watch?v=dDN-t69sa3U">aws-great-learning</a></td></tr>
        </tbody>
        </table>
        </div>
        `
    },

    {
        "Title": "Machine Learning , Movie Recommendation",
        "tags": "#machinelearning #python #programming #tutorial #project",
        "Blog": `
        <h4>Machine Learning</h4>
        <p>
        Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at 
        predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to 
        predict new output values.
        </p>
        <h4>Movie Recommendation</h4>
        <p>
        Machine Learning concepts to quick movie recommendation system (Netflix) web application, 
        made in order to teach my teammates how to implement ML/AI algorithms on web. 
        UI Designing : Figma, Frontend: Javascript (pure), backend: Python Flask, 
        Documentation: Swagger, ML/AI Algorithms for movie recommendations : Cosine Similarity (Content based filtering) implemented via scikit, numpy, pandas. 
        Downloaded 5000 movies poster's images urls into csv file automatically via Selenium Py web crawler.
        </p>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/ml/projects06.jpeg" class="img-fluid" alt="Movie Recommendation System">
                </div>
                <div class="col-md-6">
                    <img src="data/images/ml/ml2.jpg" class="img-fluid" alt="Machine Learning">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img src="data/images/ml/ml3.jpg" class="img-fluid" alt="Machine Learning">
                </div>
                <div class="col-md-4">
                    <img src="data/images/ml/ml4.jpg" class="img-fluid" alt="Machine Learning">
                </div>
                <div class="col-md-4">
                    <img src="data/images/ml/ml5.jpg" class="img-fluid" alt="Machine Learning">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img src="data/images/ml/ml7.jpg" class="img-fluid" alt="Machine Learning">
                </div>
                <div class="col-md-4">
                    <img src="data/images/ml/ml6.jpg" class="img-fluid" alt="Machine Learning">
                </div>
                <div class="col-md-4">
                    <h4>Collecting movie data from Google with SeleniumPy</h4>
                    <img src="data/images/ml/ml6.jpg" class="img-fluid" alt="Machine Learning">
                </div>
            </div>
        </div>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
    
        th {
            background-color: #343a40;
            color: white;
        }
        </style>
        <h3> Code for Machine Learning </h3>  
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Code Name</th>
                        <th>Code URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Movie Recommendation</td>
                        <td><a target="_blank" href="https://github.com/yashp241195/movie_recommendation">movie-recomm-ml</a></td>
                    </tr>
                    <tr>
                        <td>Machine Learning-basics</td>
                        <td><a target="_blank" href="https://github.com/yashp241195/MachineLearningTutorials">ml-tutorials</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Machine Learning Tutorial</td>
                        <td>Machine Learning</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=OuPMVdski3E">ml-basics-greatlearning</a></td>
                    </tr>
                    <tr>
                        <td>RESTapi Python Flask</td>
                        <td>Web</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=s_ht4AKnWZg">flaskPy</a></td>
                    </tr>
                    <tr>
                        <td>Movie Recommendation Tutorial</td>
                        <td>Machine Learning</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=XoTwndOgXBM">ml-movie-recommendation</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    }


    ,

    {
        "Title": "Blockchain , Simple Bank",
        "tags": "#blockchain #solidity #programming #tutorial #project",
        "Blog": `
        <h4>Blockchain</h4>
        <p>
        Blockchain is a system of recording information in a way that makes it difficult or impossible to change, 
        hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated 
        and distributed across the entire network of computer systems on the blockchain.
        </p>
        <br>
        <h4>Blockchain Bank</h4>
        <p>
        Concept to blockchain driven banking system, made in order to teach my teammates how to implement smart contracts and cryptocurrencies via blockchain, Frontend: jQuery, web3js library (interfacing between UI and smart contracts). Meta-mask Wallet for user transactions on blockchain. Backend: Smart Contracts Programming in Solidity, Blockchain deployed on RinkybyTest Network.
        </p>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/bl/projects07.jpeg" class="img-fluid" alt="Blockchain Bank">
                </div>
                <div class="col-md-3">
                    <img src="data/images/bl/bl2.png" class="img-fluid" alt="Blockchain Bank">
                </div>
                <div class="col-md-3">
                    <img src="data/images/bl/bl3.jpg" class="img-fluid" alt="Blockchain Bank">
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <img src="data/images/bl/bl4.jpg" class="img-fluid" alt="Blockchain Bank">
                </div>
                <div class="col-md-3">
                    <img src="data/images/bl/bl5.jpg" class="img-fluid" alt="Blockchain Bank">
                </div>
                <div class="col-md-3">
                    <img src="data/images/bl/bl6.jpg" class="img-fluid" alt="Blockchain Bank">
                </div>
                <div class="col-md-3">
                    <h4>Collecting movie data from Google with SeleniumPy</h4>
                    <img src="data/images/bl/bl6.jpg" class="img-fluid" alt="Blockchain Bank">
                </div>
            </div>
        </div>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for Blockchain </h3>  
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Code Name</th>
                        <th>Code URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blockchain Tutorial</td>
                        <td><a target="_blank" href="https://github.com/yashp241195/blockchain_tutorial">blockchain-tutorial</a></td>
                    </tr>
                    <tr>
                        <td>Blockchain Bank</td>
                        <td><a target="_blank" href="https://github.com/yashp241195/Simple-Bank-Blockchain">blockchain-bank</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <h3>Lectures:</h3>
        <p>
        The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>   
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Topic</th>
                        <th>Category</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Solidity</td>
                        <td>Blockchain</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=ipwxYa-F1uY">solidity-dapp-university</a></td>
                    </tr>
                    <tr>
                        <td>Solidity(text tutorial)</td>
                        <td>Blockchain</td>
                        <td><a target="_blank" href="https://www.dappuniversity.com/articles/solidity">solidity-dapp-article</a></td>
                    </tr>
                    <tr>
                        <td>Web3JS</td>
                        <td>Blockchain</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=2TV0r94p8OY&list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA">web3JS</a></td>
                    </tr>
                    <tr>
                        <td>Blockchain-Full</td>
                        <td>Blockchain</td>
                        <td><a target="_blank" href="https://www.youtube.com/watch?v=UqQMSVfugFA&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-">blockchain-full-telusko</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    },
    {
        "Title": "Instagram Marketing automation with Selenium Py",
        "tags": "#marketing #python #programming #tutorial #project",
        "Blog": `
        <h3>Instagram Marketing automation with Selenium Py</h3>
        <p>
        Instagram bots using Selenium Py (web crawling) beautifulSoup Py(web scraping) made to manage insta, 3 bots majorly
        <br>1. unfollow who don't follow back 
        <br>2. auto insta story viewer 
        <br>3. auto like all posts on homepage        
        </p>
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <h3> Code for InstaBot </h3>  
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Code Name</th>
                    <th>Code URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Instagram Bots</td>
                    <td><a target="_blank" href="https://github.com/yashp241195/InstagramSeleniumBot">insta-bots</a></td>
                </tr>
            </tbody>
        </table>
        <br><br>  
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/ig/ig1.jpg" class="img-fluid" alt="Instagram Marketing automation">
                </div>
                <div class="col-md-6">
                    <h3>Unfollow who don't follow back</h3>
                    <video controls="controls" class="img-fluid" src="data/images/ig/ig2.mp4">Your browser does not support the HTML5 Video element.</video>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/ig/ig3.jpg" class="img-fluid" alt="Instagram Marketing automation">
                </div>
                <div class="col-md-6">
                    <h3>Automatic Instagram stories Viewer</h3>
                    <video controls="controls" class="img-fluid" src="data/images/ig/ig4.mp4">Your browser does not support the HTML5 Video element.</video>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h3>Autolike Posts on homepage</h3>
                    <img src="data/images/ig/ig5.jpg" class="img-fluid" alt="Instagram Marketing automation">
                </div>
                <div class="col-md-6">
                    <video controls="controls" class="img-fluid" src="data/images/ig/ig6.mp4">Your browser does not support the HTML5 Video element.</video>
                </div>
            </div>
        </div>
        `
    },
    {
        Title: "Coding with ChatGPT",
        tags: "#chatgpt #genai #programming #python",
        Blog: `
	<p>I tried to generate code for our AI backend via ChatGPT and here are the observations</p>
	<p>I overestimate my capacity to ask right questions in right sequence to generate backend properly.</p>
	<p>1. Code generation for single or independent code.</p>
	<p>eg. Python code for ML with existing models and libraries.</p>
	<p>libraries structure kept changing, libraries kept depreciating which made integration of multiple libraries very difficult and it can't understand requirements that much properly.</p>
	<p>So, the idea you can give a command and generate custom app with higher efficiency using AI will remain myth.</p>
	<p>2. Code generation for multiple codebases communicating with each other</p>
	<p>eg. HTML JS communicating with the python backend</p>
	<p>It can't optimize backend according to frontend queries and intentions, it can't know whether to make a single endpoint or multiple endpoints to process image, it can't connect frontend backend properly and efficiently as it can't know your use case and requirements.</p>
	<p>So, higher the coupling, more number of people you need to manage the code and difficult for ChatGPT to generate code. Lower the coupling, easier to manage the code and easier it is for ChatGPT to generate code.</p>
	<p>Better micro-service architecture, lesser people you need to manage things but it can't be done by ChatGPT alone as it can't understand requirements easily.</p>	
        `
    },


    {
        "Title": "UI Design with Figma , Pinterest Example",
        "tags": "#ui #ux #tutorial #project",
        "Blog": `
        <h4>UI Design with Figma , Pinterest Example</h4>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/others/projects02.jpeg" class="img-fluid" alt="Pinterest UI Design Example">
                </div>
            </div>
        </div>
        <br> 
        <h3>Lectures:</h3>
        <p>The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>  
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        
        <table style="width:100%;border: 1px solid; ">
            <thead class="thead-dark">
                <tr>
                    <th>Topic</th>
                    <th>Category</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Design Crash Course</td>
                    <td>UI UX</td>
                    <td><a target="_blank" href="https://www.youtube.com/playlist?list=PLDtHAiqIa4wa5MBbE_XDoqY51sAkQnkjt">uiux-abnux</a></td>
                </tr>
                <tr>
                    <td>Evolution of Web Design</td>
                    <td>UI UX</td>
                    <td><a target="_blank" href="https://www.youtube.com/watch?v=XYTwYmOjqQs">web-design</a></td>
                </tr>
            </tbody>
        </table>
        `
    },

    {
        "Title": "Design Thinking , Product Design DSAEE + SSTCC methodology, Big Tech are marketing Machinery, Steve Jobs on Starting with customer experience first and work backward towards technology",
        "tags": "#productdesign #bigtech #tutorial",
        "Blog": `
        <h4>Design Thinking</h4>
        <p>
        Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems 
        and create innovative solutions to prototype and test. Involving five phases Empathize, Define, Ideate, Prototype and Test it is 
        most useful to tackle problems that are ill-defined or unknown.
        </p>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="data/images/others/dt.jpeg" class="img-fluid" alt="Design Thinking Image">
                </div>
            </div>
        </div>
        <h4>DSAEE Iterative process for Product Design</h4>
        <br><b>D : Define</b> : define the problem statement
        <br><b>S : Search</b> : Search the existing solutions and check their efficiencies
        <br><b>A : Alter</b> : Find the alternative way to provide the same value or same benefits to the customer
        <br><b>E : Explore</b> : Explore all alternative ways to provide same value to customer
        <br><b>E : Evaluate</b> : Evaluate all the ways and pick the best
        <br>
        Obviously, the entire problem wasn't solved yet just with one iteration so
        define the problem statement as the best evaluated solution's limitations.
        <br>
        Re iterate - D.S.A.E.E. till you find your perfect solution.
        <br>
        <br>
        <h4>SSTCC Features Selection</h4>
        <p>With DSAEE you have found your problem statement. Now it's time to design
        the product with SSTCC technique.
        </p>
        <br><b>S : Select</b> : Select the user of the product
        <br><b>S : Suggest</b> : Suggest user various options to operate the product
        <br><b>T : Transact</b> : Do the work or the trasaction with the product
        <br><b>C : Cluster</b> : Cluster multiple features according to their functionalities
        <br><b>C : Combine</b> : Combine all similar features.
        <br><br>
        This entire subject of Product Design and Design Thinking is case study based, you need 
        to find resources which show practical use cases.
        <br>
        <h4>Creation of a great product,</h4>
        <p>(i) Marketing funnel and Product Design (UI/UX/Features etc.) : You need to know what kind of users are going to use your product and which is the best distribution channel for it's marketing.</p>
        <p>main focus : Customers (Before Series A)</p>
        <p>for software,</p>
        <p>a. if user is non techie,</p>
        <p> -> build B2C web/app and distribute it over playstore, website, social media.</p>
        <p> -> Product design must be very simple and user must not be given many options to do things as too many options might confuse a normal user. </p>
        <p>b. if user is techie but do analysis or operational work majorly -</p>
        <p> -> build studio apps like VS Code, MS Office, AutoCAD, dashboard apps etc. B2B entreprise software must be made according to the operational need of companies belong to similar domain.</p>
        <p> -> Product Design must be made in consideration of ability to get trained on software. </p>
        <p>c. if user is techie,</p>
        <p> -> build command line tools only say npm libraries or gaming, graphic engines etc and distribute it over the npm, linux package managers etc.</p>
        <p> -> Product Design can go as complex as needed to get things done efficiently.</p>
        <p>This is 50% of the work if you haven't done the above analysis properly then your whole engineering effort will go waste.</p>
        <p>(ii) Product Development(Tech Stack) and Recruitment(organizational structure and career growth):</p>
        <p>You need to know the most efficient product development strategies according to the scale of your product and you also need to figure out whether people who can build and sustain the product exists in the market or not 
        and how hard it is for you to find and recruit those skilled people.</p>
        <p>main focus : Employees (Post Series A investment)</p>
        <p>In the software world, the rule of 1:10:100 is well accepted. It says that if the cost of fixing a defect in the requirement/design stage is 1, it will cost 10 during testing and 100 during user acceptance testing. 
        The cost of bugs detected after launch can be enormous and sometimes fatal for the project/company. The same is true for every product design. </p>
        <p>Every Giant Tech is a marketing machinery primarily and then everything else.</p>
        <p>Marketing machinery : help layman discover most relevant options possible with least amount of inputs with the help of their platforms.</p>
        <p>Google : Help people find most relevant information they &quot;search&quot;. Are Google search results really good enough to find domain specific information ? No. They help people &quot;redirect&quot; towards the most relevant.</p>
        <p>Amazon Help people find most relevant product they &quot;search&quot;. Are Amazon results really good enough or help you make purchasing decision completely ? No. They help people &quot;redirect&quot; towards the most relevant.</p>
        <p>The same is true for Facebook, Apple, Nike, Coke, Paypal etc. They all are marketing machinery primarily interested to pump as many possible relevant products belong to their marketing funnel.</p>
        <br/>
        <p>Q. How To Build Tech Products Correctly.</p>
        <p>Marketing Funnel -> Product Design -> Technology -> Recruitment.</p>
        <p>Marketing Funnel determines the Product Design, Product Design determines the Technology and Technology determines the Recruitment. Going other ways never worked according to all past data in the history of Tech Business.</p>
        <p>and Steve Jobs confirmed that with his statement.</p>
        <p>Question: I would like, for example, for you to express in clear terms how, say java, in any of it&rsquo;s incarnations, addresses the idea (inaudible). And when you&rsquo;re finished with that, perhaps you could tell us what you personally have been doing for the last 7 years.</p>
        <p>Steve: You know, you can please some of the people some of the time, but&#8230;. One of the hardest things when you&rsquo;re trying to effect change is that people like this gentleman are right in some areas.</p>
        <p>The hardest thing is: how does that fit in to a cohesive, larger vision, that&rsquo;s going to allow you to sell 8 billion dollars, 10 billion dollars of product a year? And, one of the things I&rsquo;ve always found is that you&rsquo;ve got to start with the customer experience and work backwards for the technology. You can&rsquo;t start with the technology and try to figure out where you&rsquo;re going to try to sell it. And I made this mistake probably more than anybody else in this room. And I got the scar tissue to prove it. And I know that it&rsquo;s the case.</p>
        <p>And as we have tried to come up with a strategy and a vision for Apple, it started with &ldquo;What incredible benefits can we give to the customer? Where can we take the customer?&rdquo; Not starting with &ldquo;Let&rsquo;s sit down with the engineers and figure out what awesome technology we have and then how are we going to market that?&rdquo; And I think that&rsquo;s the right path to take.</p>
        <p>Apple embodies this philosophy throughout the customer lifecycle, including being exposed to the product, buying the product, implementing the product, upgrading the product, and getting help with the product. It is Apple&rsquo;s competitive advantage.</p>
        <br/>
        <p>Was watching Shark Tank US for past few days, the major mistake most people do is to think</p>
        <p>&quot;A good product can solve all the problems&quot;</p>
        <p>The reality is greatness of the product is really dependent upon the infrastructure/market we are operating into.</p>
        <a href="https://youtu.be/nn-uMBLuTk0" target="_blank"> XTorch - Shark Tank </a>
        <p>for the above example we can see a very useful solar powered torch created for Africa (where people don't have access to electricity to do basic things due to poor infrastructure) is really useless in US because people have access to electricity 24&times;7 and the price become too high in comparison to it's utility.</p>
        </div>
        `
    },
    
    {
        "Title": "Product Management, MVP, Agile, Scrum board with Trello (Jira)",
        "tags": "#productmanagement #tutorial #mvp",
        "Blog": `
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4>Product Management</h4>
                        <p>
                        Product management is an organizational function that guides every step of a product's lifecycle from development to positioning 
                        and pricing by focusing on the product and its customers first and foremost.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4>MVP, Minimum Viable Product</h4>
                        <p>
                        A minimum viable product (MVP) is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.
                        </p>
                        <img src="data/images/others/mvp.png" class="img-fluid" alt="Minimum Viable Product">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4>Minimum Viable Product for Silly Humans Freelancers Community</h4>
                        <a href="https://sillyhumans.cyclic.app/sh.html" target="_blank">Click here</a>
                        <br><br>
                        <img src="data/images/others/silly-mvp.png" class="img-fluid" alt="MVP for Silly Humans">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4>Agile methodology</h4>
                        <p>
                        Agile methodology is a way to manage a project by breaking it up into several phases. It involves constant collaboration 
                        with stakeholders and continuous improvement at every stage. Once the work begins, teams cycle through a process of planning, 
                        executing, and evaluating. Continuous collaboration is vital, both with team members and project stakeholders.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4>SCRUM Board with Jira</h4>
                        <img src="data/images/others/jira.png" class="img-fluid" alt="SCRUM Board with Jira">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3>Lectures:</h3>
                        <p>The only intention of lectures is to let you know the topics
                        you are supposed to cover in order to gain the implementation abilities. 
                        Doing more create fatigue and less result in trouble during implementations
                        </p>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead  class="thead-dark">
                                    <tr>
                                        <th scope="col">Topic</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Agile Full Course</td>
                                        <td>Agile</td>
                                        <td><a target="_blank" href="https://www.youtube.com/playlist?list=PLz-zP8qAkT_2yJGisxALe1DRWsUEcRXxI">agile-methodology</a></td>
                                    </tr>
                                    <tr>
                                        <td>Product Management Basics</td>
                                        <td>Product Management</td>
                                        <td><a target="_blank" href="https://www.youtube.com/watch?v=poLzjLt2yqU">product-management-full-basics</a></td>
                                    </tr>
                                    <tr>
                                        <td>Product Management - Shravan Tickoo</td>
                                        <td>Product Management</td>
                                        <td><a target="_blank" href="https://www.youtube.com/watch?v=IGJ5id-jty0&list=PLYS-T6kriqV5DQ7B5oX4nYvHAmP2pbMcv">product-management-shravan-tickoo</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            `
    },
     
    
   
    {
        Title: "Social Media Marketing",
        tags: "#marketing #businessgrowth #tutorial",
        Blog: `
        <h3>Social Media Marketing Strategies</h3>
        <br>
        <b>Stage I : Get people know who you are, your interests and your intentions. (500 members, 1-8 months)</b> 
        <br>
        <br>Q. How to get first 100 people without any knowledge of platform and connections?
        <br><br>- Find a group where more than 1,000-10,000 people exists
        <br>- Start engaging with people who has similar interests
        <br>- Get yourself comfortable with the platform and learn how to use all of it's functionality
        <br>- Start making personal connections and start inviting them to your own group.
        <br>- You must need to have conversation with 20 people atleast and try to partner with 1-2 people atleast.
        <br>- Start providing value for 2 weeks on regular basis and start growing the group/page till 100.
        <br><br>You can do it faster if you invite people you already know and also familiar with the platform 
        you created your page/group, it could be done in 10 days.
        <br><br><b>Timeline (after 0 people):</b>
        <br> 	
        <br>min : 10 days
        <br>max : 2 months
        <br><br><b>Helplink Discord Server: 1 Month, 100 members</b>
        <br><br><b>Don't s </b>
        <br>
        <br>- Start asking people too much personal questions, it took time to mature any kind of relationship.
        <br>- Start selling or waiting for the right target audience.
        <br>
        <br>Q. How to start providing consistently bare minimum value on daily basis.
        <br><br>You need to find 3-5 people who are interested to grow with you.
        <br> - Start analyzing the demand like what exactly people are looking for on the platform and what you can provide them
        <br> - Start thinking what you can provide from your end like advise or online resources etc.
        <br><br> If you are already a user of that platform and you know what your community wants then it could be done in next 21 days
        <br><br> <b>Timeline (after 100 people)</b> :
        <br><br>min : 21 days.
        <br>max : 6 months.
        <br><br><b>Netmesh Discord Server : 500 members, 4 months</b>
        <br><br><b>Don't s </b>
        <br><br>- doing everything by your own self without forming any genuine relationships.
        <br>- atleast 5 people must show interest and respond properly in your work regularly.
        <br>- finding the perfect solution to offer, kind of reason why people are unable to even start as they start expecting a lot from their own self
        <br><br>
        <br><b>minimum time : 10 days + 21 days = 1 months</b>
        <br><b>maximum time : 2 months + 6 months = 8 months</b>
        <br><br>
        <b>Stage II : People must know you are enough valuable to get the regular things done (10,000 members, 1-2 years)</b>
        <br>
        <br>Q. How to get people know what problem you are trying to solve.
        <br><br>- You need to start providing the existing or little improved version of solutions
        <br>- At least few people must start believing in your capabilities.
        <br>- You must know your target audience, you can't invite everyone.
	    <br><br>If you already know your target audience and strategy to invite them then you can do it within next 15 days.
        <br><br><b>Timeline (after 500 people) :</b>
        <br><br>min : 15 days
        <br>max : 4 months
        <br><br><b>Sigo Instagram Page : 2 months (after 500), 1000 members</b>
        <br><br><b>Don't</b>
	    <br><br>- Inviting everyone or not having a plan
	    <br>- Overthinking about yourself and judging your self worth on the basis of other people opinion like you aren't good enough. 
        It might be true that you aren't good enough but you will become good enough soon.
        <br><br>
        <b><i>Stage I and Stage II are strictly for making people aware about your existence and your intentions. Don't overthink and expect much. 
        You don't need to be talented in order to do this you just need consistency and good behaviour towards people, nothing more</i></b>
        <br><br> Stage I and II can be done in a single day as well if you find someone else doing similar thing (50% similar to what you want to pursue) 
        but you need strategy to migrate current audience into new vision. You can do it by
        <br><br>(i) Partnership. (Making the account owner as marketing partner, it is the best thing you can do as business isn't independent entity, the business requires multi dimensional solutions)
        <br>(ii) Acquire the account with the help of some genuine 3rd party service like Social Tradia (for Instagram) where people buy and sell accounts legit way with the help of some third party service who does things like that. They will do the background verification and all kinds of things for you so that you don't have to worry about it later.
        <br><br>
        <b>Stage III : People must know that your are trustworthy and reliable</b>
        <br><br>Q. Which is the right platform or where I can find my target audience more easily ?
        <br>- The selection of platform plays key role, if you want to grow more faster and better then you must know the best platform for you.
        <br><br>Q. How to start providing enough decent solutions ?
        <br>- by improving skills and knowledge about the solutions you are providing
        <br>- by letting people know that you deliver on time, your are trustworthy and reliable.
        <br>- by making better content and branding strategy to get more people interested in you.
        <br><br><b>Timeline (after 1000+)</b>
        <br><br>min : 4 months.
        <br>max : 2 years.
        <br><br><b>Mona.marketing : 11 months (after 1000+), 10,000 members</b>
        <br><br>
        Stage III could be done in a single day by official partnership or official acquire but it requires more thinking 
        because migration of the huge audience to new vision is difficult and generating the engagement of similar kind is also 
        difficult and existing account has to be 80% similar with your vision. You may get the social account cheap but you won't 
        be able to utilise and sustain it's growth and engagement. Consult social media marketing manager or someone in domain 
        before doing such things and pay them to strategize things up because you need a lots of planning to make that shift successfully. 
        <br><br>
        <b>Stage IV : People must know that you are very unique in your offerings and your understanding regarding the platform must be really good. 
        You are equivalent to a professional media company. (1,00,000 members, talent+marketing budget dependent)
        </b>
        <br><br>
        <br>Q. How to provide real value ?
        <br><br>- You need original thinking and creativity.
        <br>- You have to become exceptionally good at your offerings and you are equivalent to a media company.
        <br>- You need a business model and also a team to manage things more efficiently.
        <br>- You need to figure out a way to increase your engagement with paid promotions, advertisements and collaborations.
        <br><br><b>Timeline (after 10 K+ people):</b>
        <br><br>min : 3 months
        <br>max : 5 years
        <br><br><b>Ekta Dixit : 1 year (after 10,000 members), 1,00,000 members</b>
        <br><br>Stage IV can't be done in a single day and it needs some real talent to do such thing consistently. You can make that 
        person brand ambassador and key promoter to get the similar results for your company. 
        <br>
        `
    },
    {
        Title: "App Marketing",
        tags: "#marketing #businessgrowth #tutorial",
        Blog: `
        <h3>App Marketing</h3>
        <b>Stage I : Finding the similar app to the app you wish to develop so that you gain market share of that app, because people who would like to use your app or 
        concept won't appear magically.</b>
        <br><br>
        Q. What do you wish to develop ? Is there any app which is used by lots of people similar to your app concept by 30 % ?
        <br><br>
        <b>Delhi Metro Traveler : 10 K+ people</b>
        <br><br>
        I wish to create a journey planner app which plan can tour for me from a given starting point in a way that I don't have to worry about anything while traveling. 
        I started visiting tourist places of Delhi via metro train in 2nd year of my college as it was very easy, convenient and cheap and I don't need permission from my 
        parents for travel as I can get back to the home the same day. The travel structure is similar even if we visit some different city, there is always a need of place 
        to stay within the city and we need to get back to that place at the end of the day as well. During travelling, I found few problems like no information about nearby 
        toilets and parking within metro app and also the list of nearby tourist places, shopping malls, places to eat etc to the particular metro station. What will happen 
        if I create a journey planner which tells me step by step like where to go in what sequence so that I can eat good food, always found parking and toilets in the routes 
        in order to make my journey super convenient. I realised that if I am able to create such thing then I will be able to fulfil my dream to become traveller who travelled 
        across 192 countries with the help of money I earn from ads. I built that app in Jan 2017 (3rd year-6th semester and it took me 2 months), I had no idea about how business 
        works and no idea about how engineering works also or the amount of technical expertise and investment required to create such thing and also the potential revenue it can 
        bring if implemented properly as I was a 13 year naive old teenager girl who got some freedom to travel in her own city and nearby but still I manage to think like what 
        should I need to do in order to improve the reach of my app so I thought of creating Delhi metro app with features like train routes, nearby toilets, parking and places to 
        visit and also embed the web browser to search other things with the help of search buttons.
        <br><br>
        <b>Timeline :</b>
        <br><br>
        <br>100 - 1 week
        <br>1,000 - 3 weeks
        <br>10,000 - 2 months
        <br><br>
        <b>Stage II : Finding the way to grow and sustain more users with the help of users feedback and responses.</b>
        <br><br>
        <b>Khabri : 100 K+ users (Currently 2 Mn+ users with 2 Mn USD funding)</b>
        <br><br>
        Q. How did Khabri get its first set of users?
        <br><br>
        The idea of the app was to broadcast news. Therefore, we started with broadcasting small snippets of audio news in an easily consumable manner. We got family and friends to download the app. The first 5000 - 7000 downloads were purely word of mouth.
        Once we exhausted the downloads from all our contacts. We had a dataset that we could study. But, the problem was the information did not allow us to draw lines. One thing that we learned as a B2C company was not to try and solve all the issues at the same time.
        Therefore, we targeted at getting 50K downloads within the next 3 months. This dataset would allow us to perform analytics. But the question was how do we get 50K downloads in 3 months?
        <br><br>The big break ...
        <br><br>For an app like ours, we need advertising. That was the only way by which more people would reach out to us. But, how to promote a B2C company organically?
        We reached out to journalists from different magazines and newspapers to write about our app. But, at this stage, we were still curating news articles, thereby making it impossible for press giants to write about us. It was against their policy to promote a news channel.
        We then realized the mistake that we were making ...
        <br><br>The main idea of the app was to promote content in the national language so that it reaches out to even the rural part of India. In a country like ours, 70% of the population are from rural areas. Once we cracked this, we went after the rural press. We contacted 
        journalists from small towns and villages and asked them if they can spread the word. After this, we started gaining traction. We were getting about 2000 - 4000 downloads in a day.
        Now that we had the data that we needed, we wanted to grow. When it came to growth, we tried a lot of strategies - blogging, student referrals, Social media groups, etc. But nothing gave us the traction like PR.
        On analyzing deeper, we noticed something unique about the viewership. It dawned to us that our users were using our app to gain General Knowledge. This opened a lot of verticals for us. Until then, the app was primarily a news channel. This opened the horizons for a lot of 
        categories such as motivation, self-help, etc.
        <br><br>Now that we had cracked the market, we needed creators. It was difficult to get creators because our user base was still less. And, we couldn't acquire users because we did not have enough content.
        At this point, we started looking out for pod-casters. We noticed that a lot of the creators were posting content on Youtube with a static image because there was no platform for audio.
        <br><br>We identified the top 20 creators and suggested that they publish content on another platform such as Khrabi in addition to Youtube. Some of them agreed and along with these creators came their user base.
        Pulkit Sharma and Aankit Roy.



        `
    },
    {
        Title: "Entrepreneur Growth Cycle and Business Development Strategy, Corporate Success Strategy or Corporate 101",
        tags: "#business #businessgrowth #corporatesuccess #tutorial",
        Blog: `
        <h4>Business Development Strategy</h4>
        <div style="margin-left:-30px;">
        <img src="data/images/others/projects01.jpeg" class="img-fluid" />
        </div>
        <p>
        <br><b>Founder's Knowledge and wisdom</b> will determine the kind of idea
        they bring the in market. their wisdom and knowledge will determine the 
        <b>ideation strategy</b> like "what kind of idea should be pursued at what stage with what kind
        of available resources". Idea determine the <b>recruitment strategy</b> like
        you can't hire a lots of talented people if your business idea isn't scalable
        or require that expertise, you can't hire a student from IIM or business school
        if you are opening a local coffee shop or anything like that, when your coffee shop
        scale or made it's expansion maybe then we will going to need that person for making
        strategies but that person is irrelevant for your current stage. Your recruitment strategy
        will determine the kind of training people need or <b>training strategies</b>.
        Your training strategy will determine the development strategy of product or service like
        what kind of product or service you can build with current resources in order to survive 
        and produce <b>profits</b> in the business. Then last part is <b>leadership and culture</b>,
        leadership and culture determine the long term efficiency and scalability of the business.
        </p>
        <h4>Entrepreneur Growth Cycle</h4>
        <div>
        Every business is a service business, products are used to boost the services in order to
        generate more profits. So, we are talking about entrepreneur growth cycle in context of 
        service business. 
        <br><b>Groping</b> : 
        <br>Q. How to generate revenue ? 
        <br>Q. How to find work ? 
        <br> Ability to find work and revenue generation depends upon the geo-political situation of the 
        your country. The "ease of doing business" is really a big issue if you are starting out as an 
        individual. Business is a team work so, if geo political situation is bad then only thing which 
        can help you out is your relationship building abilities because in early stage you don't need
        talented people or you need to create some genius level of product or service. You need mediocre 
        stuff. You can become sales person, retailer or service provider at this level because building 
        product/service business requires expertise, capital and education which is preferrable if you 
        are a researcher, inventor or a specialist who can get the funding.
        <br><b>Early Success</b> : 
        <br>Q. What is the better way to do busines? 
        <br>Q. Where to find trustworthy people ?
        You need to find better way to do the business in order to produce more profit either by using some
        product or service of other companies. If you are a product company then you will start from this stage,
        groping stage will be done by product validation as product is created in order to provide better way to 
        do business. You need trustworthy people whom you can trust because daily business operations till now 
        doesn't require very much business expertise. Incapability to find trustworthy people is definite way for long 
        term business failure because you need people who prevent the failure of business at every single stage. 
        <br><b>Growth Acceleration</b> : 
        <br>Q. How to find talented people who can take responsibilities?
        You need to find the talented people who can help you accelarate your business 
        growth. Trustworthy people aren't sufficient enough for growth phase but without trustworthy, talented 
        people doesn't matter much. Career is a transition, you need a way to help them grow if you really want
        them to stick around.  
        <br><b>Reorientation</b> : 
        <br>Q. How to build standard business processes?
        You need to build the standard protocols, systems and processes for everything in 
        business so that you can measure the business in excel sheets and do analysis. Without trustworthy and 
        talented people your systems and processes won't work because systems, processes are always designed in
        consideration of the people. 
        <br><b>Corporatization</b> : 
        <br> How to build a brand image ?
        You need to build the brand image of your organization so that people would like 
        to invest in you, bank will lend you loans easily and talented people also show their interest to join you. 
        <br><b>Liberation</b> : 
        Q. Who will become the successor for my business?
        You need a way to figure out the process of selection of your successor who can take your business to next level.
        <br><br>
        <b>
        Each stage has different resources and different challenges, 
        major problem occur if you try to focus on different problem
        at the different business growth phase like you can't work heavily 
        on systems and processes if your business requirements aren't very clear.
        </b>
        </div>
        <div>
	<h4>Corporate Success Strategy or Corporate 101</h4>
	<div>
	<p>Your degree, experience etc matter more than your skills and talent. Your image is more important than your work and you can't improve your image by good behavior instead you need degrees and experience from big corporations as it can be presented in the matrices and it can potentially improve the credibility of the company in the eyes of auditing firms and improve the stock price as well.</p>
	<p>CXOs, VPs has no direct control over the policies, recruitment, firing etc in most cases (especially if company is listed in the stock market). They can't betray the process without approval of board. Everything has to be done with numbers in order to avoid all forms of &quot;legal&quot; conflicts.</p>
	<p>65% managers has '0' or '-ve' impact over the company because of market uncertainty. If corporate starts moving fast or starts taking initiatives then it will go bankrupt as well.</p>
	<p>If manager take initiatives, hire more people and did the resource allocation faster than the market demand and company face losses then manager will get fired and potentially lead to shut down of the projects and even massive layoffs of entire department in worse cases.</p>
	<p>Sometimes, doing nothing or pretending is better.  Making initiatives or doing innovations are very dangerous in Corporate.</p>
	<p>If you do something good and help company generate more profits then maybe you will get considered for promotion in best cases and all the profit might get transferred to some other department if board thinks that doing such thing will produce more profits.</p>
	<p>Doing extra hard work makes no sense, it doesn't give you promotion or C.T.C. hike because company doesn't do &quot;high value&quot; work in all the departments.</p>
	<p>It produces limited responsibilities and work life balance but it doesn't prevent you from getting fired due to mistakes of yourself or your leaders or markets slowdowns.</p>
	</div>
	</div>
	<br>	
        <h3>Lectures:</h3>
        <p>The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>  
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Entrepreneur Growth Cycle</td><td>Business</td><td><a target="_blank" href="https://www.youtube.com/watch?v=3evLs2-7IHo">entrepreneur-growth-cycle</a></td></tr>
        </table>
        `
    },
    {
        Title: "Startup Investment Fundamentals, Venture Capital Methematics and it's role in creation of startup ecosystem, Key ingredients for Big Tech, Startup isn't a business or corporate it's an advance banking",
        tags: "#business #businessgrowth #bigtech #startup #vc #angel #tutorial",
        Blog: `
        <h4>Startup Investment Fundamentals</h4>
        <p>
        Lets do some startup investor mathematics for 5 years of return on investment,
        <div style="">
        <pre>
        >>> 1.1**5 # Get the amount from bank of FD
        1.6105100000000006
        >>> 1.2**5 - # Get the amount from mutual funds
        2.4883199999999994
        >>> 1.3**5 - # Get the amount from Stock market
        3.7129300000000005
        >>> 1.4**5 - # Minimum amount of return an investor want
        5.378239999999998
        >>> 1.5**5 - # Average amount of return an investor want
        7.59375
        >>> 1.6**5 - # Maximum tangible amount of return an investor can ask
        10.485760000000003
        </pre>
        </div>
        <p>
        If your idea is not scalable or solving some really bigger issue nobody will going to help you or invest their money on you.
        What problem are you solving as an entrepreneur ? Do you have the matrix to justify the investment you wish to raise ?
        <br>
        PS. Problem means what people consider as a problem, not actual problems of people.
        </p>
        </p>
        <br>
	<p>Start-up Pitch Deck Guide:</p>
	<p>1. Explaining the Problem : Explain it with short bullet points if possible.</p>
	<p>A Quick visual story which explain the problem statement correctly might be helpful.</p>
	<p>If investor doesn't consider the problem you are talking about as a &quot;real problem&quot; then it doesn't matter whether you are right or wrong because investors aren't the great economist or genius like Socrates they are regular people with money.</p>
	<p>PS : Problem means what people consider as problem not their actual or real problem.</p>
	<p>If people were that smart to identify their real problems then there might not be any existence of world war, social injustice, climate change, world hunger etc.</p>
	<p>Most start-up pitch got rejected because founders don't do research about &quot;how does an ideal investor should look like for current phase of business&quot; just like you do it for your business &quot;how does an ideal customer should look like for current stage of business&quot;.</p>
	<p>You might think that &quot;negative feedback from investors means you should quit&quot; but you will face the similar challenge while dealing with customers later as they will suggest you to add all unnecessary things to your product or service and even give you very negative feedback without any proper reason but it is your responsibility as a business owner to understand the limitations of your marketing funnel (you can't sell computers hardware inside restaurant) and current resources.</p>
	<p>Say you started Pizza restaurant and suddenly customer demand Dosa. Will that be feasible for you to add that in your menu? No. You can arrange it by some other local shop or food delivery app but you can't add it in your menu or service.</p>
	<p>You can't be stupid or naive about how society works, entrepreneurship is primarily a social science subject.</p>
	<p>2. Existing Solutions/Products : Mention all the major flaws in the existing solution/product.</p>
	<p>Your answer to the &quot;major flaws&quot; will tell investor about your understanding regarding the problem space and one problem space can contain plenty of products or services. If your problem space matches the problem space investor invests majorly then there might be very high chances that you will hear back from investors even if your idea isn't good enough because investor help you to get in the network of other people operating in similar problem space which open door for new possibilities regarding products, systems, teams, investors etc.</p>
	<p>3. Your Solution/Product : Your solution and product must be able to solve all the major flaws you mentioned above.</p>
	<p>4. Traction : Your current traction of product will convince investor about your execution abilities.</p>
	<p>5. Market : Market size must be big enough and your product must be able to produce 10X or more profits in 5-10 years.</p>
	<p>Top Down : used to show investors the current market segment your product can target and generate revenue</p>
	<p>Bottom Up : used to show investors the new potential markets segments you can target with the help of current product/service you are building in future.</p>
	<p>This is only relevant if you are in Series B/Series C (100 Mn USD Valuation) or above where you have the right strategy and right people at place and market starts trusting your credibility and execution abilities</p>
	<br/>
	<img src="data/images/others/TAM.png" class="img-fluid" height="550" width="685"/>
	<br/>
	<p>6. Business Model : Mention exactly how you are planning to produce profits or mention your key revenue sources.</p>
	<p>7. Team : Why you? What makes you and your team qualified for solving a particular problem.</p>
	<p>8. Fund-raising plan and objectives : Mention in bullet points what will you do with the money you are asking for.</p>
	<p>Now, You can ask for investments, make negotiations and close the deal. </p>
	Checkout more about pitch deck here : <a target="_blank" href="https://github.com/yashp241195/startup_pitch_deck">startup-pitch-deck</a>
        <br/>
	<br/>
	<img src="data/images/others/pitchweights.png" class="img-fluid" height="300" width="500"/>
	<br/>
	<h4>Venture Capital Methematics and it's role in creation of startup ecosystem</h4>
	<p>
	This is the simplified version of data science research by Sabestian Quintero I shared below.
	</p>
	<a target="_blank" href="https://medium.com/journal-of-empirical-entrepreneurship/making-sense-of-startup-valuations-with-data-science-1dededaf18bb">startup-valuations</a>
	<a target="_blank" href="https://medium.com/journal-of-empirical-entrepreneurship/how-much-runway-should-you-target-between-financing-rounds-478b1616cfb5">startup-runway-avg-time</a>
	<a target="_blank" href="https://medium.com/journal-of-empirical-entrepreneurship/dissecting-startup-failure-by-stage-34bb70354a36">startup-failure-rate</a>
	<br/><br/>
	<img src="data/images/others/vcmath.png" class="img-fluid" height="380" width="580"/>
	<br/><br/>
	<img src="data/images/others/advise.png" class="img-fluid" height="380" width="580"/>
	<br/><br/>
	<h4>Limitations of Pitch Deck in context of truly revolutionary ideas.</h4>
	<p>Explaining any revolutionary or innovative idea is fairly difficult in 5 minutes because &quot;Understanding something isn't a very simple process like you tell something and other person will understand it easily&quot;.</p>
	<p>All revolutionary ideas consists of 3-4 sub ideas and not necessarily the other person whom you are presenting your idea has knowledge and understanding of all 3-4 sub ideas which makes validation of ideas more difficult especially for normal investor who isn't very knowledgeable.</p>
	<p>For example, explaining iPod was fairly difficult at the time of radio, because one need to understand the concept of internet, music streaming websites like iTunes, cloud storage etc. and making sense out of each requires more than 5 minutes or more according to reader's knowledge. It requires good imagination ability and knowledge of these sub domains in order to validate the correctness of ideas which most people don't have so as investors.</p>
	<p>Let's take an example of Uber's Pitch Deck in 2008.</p>
	<p>Imagine you are in 2008, just 2 years ago iPhone was launched, very few people knows about app/play store, no one knows whether live Geo-location tracking on moving car is practical or not, no one knows whether an unknown/untrained cab driver can help people reach destination safely or not without getting into accident. No one knows how to position Cabs on city map in order to keep the car available throughout the city without getting Cabs crowded at a particular place where fare price's are higher, how to incentivize cab drivers, calculate traffic and fare prices at real time.  Imagine, Travis (founder of Uber) came to you showing this pitch deck, it will sound 100% Gibberish ..</p>
	<p>link to Uber's pitch : shorturl.at/yIR12</p>
	<p>Same case for all the revolutionary apps or tech company's pitch deck we know, almost all pitch decks are wrong (in context of having capability to explain itself in 5 minutes to layman) according to their timeline.</p>
	<p>If VC firm makes the criteria as 5 minutes, maybe it works in Silicon Valley for finding genuinely great and revolutionary ideas because people are already living in high tech lifestyle and making sense out of new ideas is relatively easy but for India doing such things is very difficult.</p>
	<p>That's why all creative founders with great ideas have hard time convincing VC firms and VC firms also have hard time finding genuinely creative entrepreneurs who can build the Unicorn for them. Maybe that's why most billionaires like Elon Musk reads a lot so that they can validate and invest in revolutionary ideas as early in order to increase their wealth enormously.</p>
	<p>Dropping Off college and doing start up with revolutionary ideas only makes sense only in Silicon Valley because &quot;number of good and great technologists/researchers exceed number of entrepreneurs&quot;</p>
	<p>If we take the example of Uber, Travis hired 3 Nuclear scientists in order to create the heat maps, pricing, prediction models and algorithms for the cities which help Uber know where to position the car at what time so that car remain available throughout the city.</p>
	<p>This can't be done in India because finding such people is quite difficult because of lack of research labs and Universities of higher technical education and other than that if we take example of Ola in India the problem lies at the infrastructure level as well. The Urban area isn't big enough and traveling is cheaper due to M.R.P. system and lower wages, so optimizing travel cost doesn't make that much sense in comparison to US that's why Ola is fairly limited to Tier 1 cities of India only and going into loss as well.</p>
	<p>That's why most of the revolutionary technological work are done in Silicon Valley.</p>
	<h4>Key ingredients for Big Tech</h4>
	<p>1. Find big enough marketing funnel which is accessible to you.</p>
	<p>2. Build a lean and scalable product for that marketing funnel which can store some &quot;valuable data&quot;.</p>
	<p> a. Valuable data must improves over time and act like an asset.</p>
	<p> b. Valuable data must be helpful in solving problems in other businesses.</p>
	<br/>
	<b>Startup is not a business or corporate but it's a form of advance banking.</b> 
	<br/> Both grows exponentially using the "valuable data" and "marketing funnel".
	<br/> Startup is a form of advance banking that's why investments are major component, sometimes even more important than business just like bank
	all decisions are made in order to take advantage of data stored not according to customer's current needs 
	<br/> When we are capable to take advantage of data then only we are able to generate profits exponentially.
	<br/> 
	<h3>Lectures:</h3>
        <p>The only intention of lectures is to let you know the topics
        you are supposed to cover in order to gain the implementation abilities. 
        Doing more create fatigue and less result in trouble during implementations
        </p>  
        <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding:3px;
            border-color: lightgray;
          }
        </style>
        <table style="width:100%;border: 1px solid; ">
        <tr><th>Topic</th><th>Category</th><th>URL</th></tr>
        <tr><td>Startup School YC - 2020</td><td>Business</td><td><a target="_blank" href="https://www.youtube.com/playlist?list=PLQ-uHSnFig5PjfCy7mE77XMGhgky9HV3o">startup-yc</a></td></tr>
        </table>
        `
    },
    {
        Title: "Recruitment fundamentals",
        tags: "#business #businessgrowth #recruitment #tutorial",
        Blog: `
        <h4>Recruitment</h4>
        <p>
        There are 3 major factors to consider.
        <br><br>(i) Character/Integrity : Is that person trustworthy/reliable.
        <br>(ii) Learning Abilities : Is that person hold the ability to learn and think.
        <br>(iii) Execution Abilities : Is that person ready to implement things.
        <br><br>
        Every person will come with different level of learning abilities, 
        execution abilities and character. So, don't expect all characterstics in 
        one person instead try to form a team which possess all 3.  
        <br><br>
        A person with integrity can hold entire together as a leader so 
        it is always wise to give that person first preference in promotion then 
        person with good learning abilities because requirements keeps changing and 
        a person with good learning abilities or strong fundamentals can help 
        you predict what kind of work you are supposed to do in order to produce profits 
        and lastly the execution abilities because business need daily output.
        <br><br>
        Only wise can identify wise so it has a lot to do with you as an individual.
        If you aren't talented you can't hire talented person easily. If you don't have
        the integrity then you can't attract people with high integrity and if people
        can't see you doing things then you can't motivate people to work hard.
        <br><br>
        </p>
        `
    },
    {
        Title: "Mentorship and Leadership, Book Reading",
        tags: "#business #leadership #mentorship #businessgrowth #tutorial",
        Blog: `
        <h4>Mentorship</h4>
        <p>
        The most important point is <b>you can't mentor everyone.</b>. If your mentees 
        are't comfortable to open up then no matter what you do for them you won't be 
        able to bring change in their life because they will not tell you their real problems.
        <br>
        It is impossible to find the right solution without understand the complete problem statement.
        </p>
        <h4>Leadership</h4>
        <p>
        Your ability to take ownership will determine your ability to lead, you
        are supposed to set the example for every change you wish to see in them.
        </p>
        <br>
        <b>How to become better leader and a mentor</b>
        <br>
        <br>(i) Talk to as many people with different backgrounds possible in order to gain 
        perspective. Know about their upbringing, aspirations and desires and thought process behind.
        <br>(ii) Read autobiographies of leaders who changed our world.
        <br>(iii) Study Psychology, human behaviour and mind related books and observe.
        <br>(iv) Study Social Science and history in order to gain better understanding about the culture.
        <br><br>
        <b>Book Reading</b>
        <br><br>One book can help you gain the lifetime experience of a person. Often times people say readers are
        the leaders but how does one can know whether book reading is benefitting them or not in real
        <br>
        If level of next 5 books is higher then previous 5 books you read then growth occur otherwise you are 
        just reading words not experiencing and not improving as a person with the help of book
	<br><br>
        <b>MBA Programme</b>
        <br/>
        <p>There are two types of MBA (only do it from top B Schools, others doesn't worth much)</p>
        <p>(i) General MBA</p>
        <p>(ii) Specialized MBA</p>
        <p>General: main goal is to develop your personality to handle stress and chaos. In institutes like IIM, Harvard etc the whole day is packed with classes, assignment, case studies, group discussions, daily exams of random subjects, presentation etc. This whole chaotic and high stress environment push individuals to set well defined priorities in life and figure out what is right for them up to a certain level.</p>
        <p>Why General MBA?</p>
        <p>If you aren't able to</p>
        <p>-> manage your time properly.</p>
        <p>-> set career priorities.</p>
        <p>-> develop your personality.</p>
        <p>-> get a job in Management Consulting or Investment Banking.</p>
        <p>Why not General MBA?</p>
        <p>-> If you are already good in some domain and have experience as manager.</p>
        <p>-> If you are able to manage your time upto a good level and got experience of good companies already in your resume.</p>
        <p>Specialized MBA :</p>
        <p>main goal is to make person transition from one industry to another.</p>
        <p>Especially made for people who already did management up to a certain level but wish to make transition from one career path to another or who wish to specialize in one domain. Specialize MBA always lag behind industry so things you will learn there won't be much useful.</p>
        <p>Why Specialized MBA?</p>
        <p>If you aren't able to</p>
        <p>-> make transition to another domain and up skill yourself.</p>
        <p>-> Very helpful for people transitioning from Govt sector to private sector (Especially Officers in military, bureaucracy, academia). Doing so give them exposure to international business.</p>
        <p>Why not Specialized MBA?</p>
        <p>-> if you are already getting a job and you have already explored the domain on your own up to a good level as MBA curriculum will always teach obsolete practices, it is good for someone who is new but not for someone who is already in the game.</p>
        <p>b.t.w. Specialized MBA doesn't go waste because course structure overlap a lot with General MBA and it means it contains everything we do in General MBA along with Specialization so it doesn't go waste entirely.</p>
        <p>It is all about knowing what is right for you if you found it without MBA then you don't need one.</p>
        <p>It is more about development of ability for doing the work regardless of your mood because as a manager if you delay the work then entire department will slow down and potentially loose it's profit share from the market place. In worst cases manager's inefficiency can lead to shutting down entire business unit and massive layoffs. Loss in market share can lead to bankruptcy as well.</p>        

        `
    },
    {
        Title: "Sales , Communication Skills ( LIACP ) and myth of introversion",
        tags: "#business #sales #businessgrowth #personalgrowth #tutorial",
        Blog: `
        <h4>Communication skills, LIACP and Sales</h4>
        <p>
        Communications skills is all about your ability to communicate.
        In communication there are two parties involved one who listen 
        and one who speak. When you speak or communicate you must need
        to consider the ability of the listener as well. You can't use
        same example to communicate your message to child which you used 
        for adult. Similarly, you can't use same example for people who 
        belong to different backgrounds as well. Communicatin skills is key
        of "one to one" relationship. Sales is a process or persuasion but
        it only work if you understand the needs of customers properly.    
        </p>
        <br>
        <b>L.I.A.C.P.</b>
        <p>
        <br><b>L : Listen</b>, Listen to other person if they don't open up try to 
        ask something which allow you to listen.
        <br><b>I : Interest</b>, Show your interest in the things they were telling you.
        <br><b>A : Acknowledge</b> Acknowledge that you understood what they said.
        <br><b>C : Confirm</b> Confirm what they said and what you understood are the same
        <br><b>P : Proceed</b> Proceed the conversation in iteration of these first 4 steps
        </p>
        <br>
        <b>Myth of interoversion</b>
        <br><br>
        <div>
        Most people who don't have knowledge about things and doesn't got enough exposure label
        themselves as an introvert but they talk a lot infront of their bestfriends or family 
        members. If someone is really introvert that person might not talk a lot even with their
        best friend or family members. Remember, <b>interovert is not someone who can't communicate</b> 
        </div>
        <br>
        Don't hide yourself behind introvert label, your real problem isn't introversion but your
        poor communication skills and poor knowledge. 

        `
    },
    {
        Title: "East and West aren't opposite but complimentary to each other.",
        tags: "#eastvswest #sociology",
        Blog: `
	<p>East and West aren't opposite but complimentary to each other.</p>
	<p>Eastern Philosophy discourage private ownership and personal space in life.</p>
	<p>Eastern philosophy was absolutely clear if you give people personal space without training them properly they will going to do real harm to self and others.</p>
	<p>Lack of interests towards material possessions made people less scientific because science is all about understanding and manipulating materials that's why even after substaintial development in mathematics in the past east wasn't able to made progress in science and technology.</p>
	<p>All progress of mind happen by negation or discarding the unnecessary but all progress in material happened after mixing unknown different things or materials.</p>
	<p>Mind hasn't changed since thousands of years so do spiritual practices which made people of east more &quot;process oriented&quot; as east studied mind in more depth than west but material world changed very rapidly due to development in science and technology especially after scientific revolution in 17th century which made people of west more &quot;experimentation oriented&quot;.</p>
	<p>Well defined processes can be executed best in &quot;communism&quot; and experiments can be done freely in &quot;capitalism&quot; that's why east gravitate towards &quot;communism&quot; because they believed &quot;they already know&quot; and west gravitate towards &quot;capitalism&quot; as they believe they don't know.</p>
	<p>That's why people who &quot;follow the processes&quot; are celebrated in the east like mostly politicians and west celebrate outliers &quot;who question existing processes&quot; and figure out new ways like inventors and entrepreneurs.</p>
	<p>These new ways helped west conquer the world in all material aspect as their tools become far more advanced to understand the material world.</p>
	<p>For the aspect of education,</p>
	<p>In west, education is designed to help you think about how to understand and use tools.  Great work in the domain of science and technology comes from combining different things which can't be done in any kind of institutions or group but only done by individuals in solitude. It made western society more individualistic.</p>
	<p>In east, education is designed to help you understand about nature of mind and enrol you into the process of transformation. Great work in the domain of mental peace comes from negation or discarding the unnecessary or (neti-neti) which can be done by anyone and works best in the groups (sat-sang). It made eastern society more collective.</p>
	<p>The main problem is people in east are trying to make material progress by &quot;following the processes without questioning&quot; and people in west are trying to achieve mental peace just by &quot;questioning only instead of following the process of self transformation&quot;</p>
	
        `
    },
    {
        Title: "Problem of Indian Caste System.",
        tags: "#indiancastesystem #sociology",
        Blog: `
	<p>1. Before you start,</p>
	<p>2. Anthropological Perspective</p>
	<p>3. Historical Perspective</p>
	<p>4. Psychological and Religious Perspective</p>
	<p>1. Before you start,</p>
	<p>About Dr Ambedkar's work</p>
	<p>Earlier, he used &quot;scripture's stories as primary evidence&quot; just like any other scholar of that time so he concluded shudras / untouchables were &quot;Kshatriyas&quot; then he become &quot;more scientific&quot; in his approach and used &quot;scripture's language evolution differences and genetic similarity as primary evidences''. It happened due to improvement in the research standards of Western Universities driven by a massive amount of inventions and discoveries in the Western countries. The result was very clear, almost all kinds of popular doctrines from other great people including his old doctrine turned out wrong. Science has no mercy on anyone's beliefs.</p>
	<p>White light is made up of 7 colours but no one was able to discover via prism before Newton.</p>
	<p>Is white light made up of 7 colours sound obvious? Obviously No.</p>
	<p>So, it is not necessary that what looks obvious is the real fact, we need to examine the tool and technique used also to figure out fact.</p>
	<p>If you are able to understand the above statement then only reading further makes any sense.</p>
	<p>2. Anthropological Perspective</p>
	<p>Earlier, people used to live in tribal groups but some of them started agriculture activities which resulted in people staying at fixed places and excessive production of food. When the population of tribal groups involved in agriculture outgrow outsider tribal groups then society becomes stable as outsider's can't attack insider's easily. There is a clear difference between lifestyle of people outside and inside, it wasn't binary but spectrum and that's why there was never a &quot;caste&quot; (singular) but many &quot;castes&quot; (plural).</p>
	<p>Your status and well being in society is inversely proportional to the distance of your house from the centre of the village.</p>
	<p>You can find the similar pattern in the animals who live in herds like fish, there is no single fish but always a group/school of fish, more healthy fish are generally found in the middle but there exists a constant struggle for everyone to stay in the middle so that big predator fish won't get them. Similarly in tribal groups, people with higher status/class are generally found in the middle but due to no fixed location and various kinds of potential threats there exists fluidity and people with lower status can become higher status and vice versa. Due to agriculture, people started staying at a singular place so this fluid class system of tribal people gets converted into rigid caste system, it is found everywhere cross culturally.</p>
	<p>Untouchability existed in the tribal time as well but it wasn't directed towards a particular tribe due to unstable location and smaller size of tribal groups. Life used to be exceptionally unpredictable in the jungle so touching anything could be a risky business, it could be a poisonous snake or poisonous fruit.</p>
	<p>So, it was not like higher caste people invented the concept of untouchability in fact all castes used to practice untouchability with each other. After agriculture, people started staying at fixed locations and soon they became familiar and stopped practicing untouchability with the people who live near them.</p>
	<p>Initial assumption of Dr. Ambedkar, (he mentioned in his early book and writings)</p>
	<p>Shudras / untouchables were &quot;Kshatriyas&quot; sometimes &quot;Bodh&quot;</p>
	<p>After studying Genetics, (he mentioned in his later books and writing, The Untouchables -1948)</p>
	<p>region1.caste1 = region2.caste2 where</p>
	<p>caste1 and caste2 can be highest or lowest. area1 and area2 are generally nearby areas.</p>
	<p>Higher caste of one region and Lower caste of another region can have same ancestral roots.</p>
	<p>It makes total sense like some members of a tribal group settled into one region by doing agriculture activities and became higher caste and remaining members went to some other place and became servant or lower caste of other tribal groups as they settled outside.</p>
	<p>It means caste is not something like race, it doesn't exist biologically.</p>
	<p>PS : Even with race, no race is actually pure and the DNA difference between chimpanzees and humans is less than 2%.</p>
	<p>3. Historical perspective.</p>
	<p>Dr Ambedkar's contribution,</p>
	<p>(i) Analysis of many Chinese travelers like &quot;Fa Hein's&quot; who came to India in 400 CE. and above. Chinese describes that,</p>
	<p>Who went earlier : People who lived in the inner area were indifferent towards the existence of people who live in outer areas.</p>
	<p>Who went some years later : People who lived in the inner area oppressed people who lived in outer areas.</p>
	<p>(ii) Relationship between caste, profession, slavery and Untouchability</p>
	<p>Agriculture economy thrives on slavery,</p>
	<p>People belonging to a particular caste can do slavery of equal or higher caste than them. Slaves exist in all castes and in heavy amounts, they do all kinds of &quot;dirty work&quot; which is done by lower castes.</p>
	<p>People of upper caste doing &quot;dirty work&quot; don't face any form of untouchability from upper caste.</p>
	<p>Wealthy higher castes used poor higher castes for all kinds of work by creating sub castes.</p>
	<p>So, dirty work or lower profession wasn't the real reason behind untouchability.</p>
	<p>(iii) Fall of buddhism with Mouryan empire and rise of hinduism with Gupta empire.</p>
	<p>Higher caste of hindu's especially brahmin used to eat a lots of cow meat or beef even after knowing the utility of cow and bull in agriculture. They sacrifice a lots of animals in the name of &quot;yagya&quot; and still demand things from society which degraded their image.</p>
	<p>Buddha and his followers said &quot;don't sacrifice animals unnecessarily especially for religious practices&quot;</p>
	<p>Manu and his followers said &quot;don't sacrifice animal of type A, type B and type C .. except for some special occasions&quot;</p>
	<p>Both have same intentions like &quot;don't unnecessarily sacrifice animals&quot; but Manu and his followers don't have capacity to comprehend things in comparison to followers of Buddha that's why Manusmiriti has so many rules for almost everything and always contradicts itself and also falls out of logical structure. Manu wants absolute control over everything and wishes to make life exceptionally predictable or mechanical so that there won't be any anxiety and yet he failed to do so and make life of all people hell with his doctrine because no one can completely predict life.</p>
	<p>The Mauryan Empire started falling after assassination of Brihadratha in 180 BCE by his military general Pushyamitra Shunga who was brahmin.</p>
	<p>The foundation of not sacrificing animals necessarily was already laid down by the Mauryan Empire and after that Manu also supported that except for some special occasions.</p>
	<p>With the rise of Gupta empire in 4th century Manusmiriti become the norm and law of state,</p>
	<p>Brahmins stopped eating beef and started understanding their old vedic literature as well. To prove their superiority in front of buddhist and all other castes they also stopped eating all kinds of non vegetarian food which was a total revolution but their population size also dropped significantly because being vegetarian was a costly business, most people can't afford such a thing.</p>
	<p>It didn't happen instantly like they decided to quit non vegetarian food and the next day everything changed. It took a few centuries. That's why Chinese travelers who went in the early Gupta empire era saw that Higher castes were indifferent towards the existence of the lower caste and at the later end of Gupta era they saw oppression and hatred among them.</p>
	<p>In that era of improvement in life of upper caste brahmins, they did a lots of great things in many domains such as mathematics by Aaryabhatta, science and trade etc, they were constantly improving their understanding like they started from Manu then they went to ramayan and then they mahabharat etc and after sometime they took quantum leap to completely different framework of understanding life such as Upnishads.</p>
	<p>Upnishad's weren't famous due to their lack of utility in society, they had a lower interest to tell anything about how to form a society. They were more interested in helping you see how to understand things.</p>
	<p>If you ask Upnishad what is caste then it will ask you counter question caste for whom ? They start by proving you are neither body nor mind. Are your desires and the desires of your body and mind the same? Obviously Not. How can you have trust in the caste or any other relationship of yours with the world if you can't even trust your own body and mind.</p>
	<p>The key point is Upnishads were much deeper than normal scriptures like Ramayana. In Fact most brahmin scholars oppose Upanishads because it has the potential to destroy their entire belief system or faith in popular hinduism.</p>
	<p>Apart from that, Brahmins made a very big mistake of separating them from other higher and lower castes which was a major chunk of population, this casteism destroyed and split the Hindu population into many pieces which never unite again under any hindu ruler properly. Almost all foreign invaders took advantage of it after the Gupta empire to enslave Hindus.</p>
	<p>When Dr Ambedkar analyzed the census of 1910 then he realised that lower caste and untouchables are mostly those people who weren't able to afford to stop eating beef. It was done by Muslim leaders because they were demanding their representation in british government according to their population and in that report he realised that population of higher caste brahmin is much lower than population of other castes and the marker which defines the difference between higher caste and lower caste is &quot;cow meat&quot; or &quot;beef&quot; eating statistically.</p>
	<p>4. Psychological and Religious Perspective.</p>
	<p>Caste problem existed everywhere around the globe but it became severe in India due to Hindu Philosophy.</p>
	<p>To sustain a population where people are not able to get any help from others then there must be fear among people for helping others.</p>
	<p>In Abrahamic religions like Islam and Christianity if you help some lower caste person then you will not be punished and even if you get punished you will get punished for one life because there is no concept of rebirth, there is a concept of heaven, hell and judgement.</p>
	<p>In Hinduism, if you help some lower caste person then you will get punished for multiple lives because there is a concept of multiple births and person belong to lower caste earned his suffering by sins of his previous birth and will get redeemed in successive births, so you can relax and you don't need to rebel. It made the majority of Hindu population lazy, highly controllable and prone to slavery whether they belong to higher or lower caste and that's why they never rebelled at massive scale against authorities the way Islamic or Christian did in the past and also get enslaved easily by foreign invaders like Mughals and British.</p>
	<p>You can't solve Indian caste problem with conversion of Hindus to some other religion instead</p>
	<p>1. You need to remove the concept of &quot;rebirth&quot; and &quot;multiple birth&quot; from the minds of common people. It will make 95% of the Hindu scriptures null &amp; void except few deeper and important scriptures like ken-Upnishad.</p>
	<p>2. You need to industrialize and Urbanize, the caste system started with agriculture where people live at a fixed place for generations. Majority population can't stay at one location in the city except some riches which make sustaining casteism and many other forms of prejudices really difficult for average people.</p>
	`
    },
    {
        Title: "Population density and gender roles",
        tags: "#genderroles #sociology",
        Blog: `
	<p>Population density and gender roles</p>
	<p>Dr Robert Wyman, Yale University</p>
	<p>University of California (PhD - Bio Physics, Post Doc-Computer Science, 1966) Molecular Biology, Animal Behaviour, Human demography</p>
	<p>1. Lower population density.  </p>
	<p>Land become the most valuable asset in agriculture but in Africa the food production capacity was quite low. There was no such thing as surplus food, mortality rate was quite higher means very few children survive. It means the value of humans was greater than the value of land or asset.</p>
	<p>Attitude of men towards work,</p>
	<p>Ancient African men said &quot;agriculture, domestic, household, business etc are women work&quot; the only work of men was &quot;clearing the forest by chopping off trees and preparing the land suitable for agriculture and fight from outside people&quot;.
	</p>
	<p>It means men only work 3 weeks per year and rest of the year women do everything.</p>
	<p>Obviously one women can't sustain all such responsibility on her own so they prefer polygamous marriage with powerful men, it means most young men remain unmarried for longer time but it doesn't mean they had no relationships. Most of these young men had &quot;illegitimate&quot; relationship with younger wives of that powerful men. The children born out of these &quot;illegitimate&quot; relationships were accepted and treated properly because the &quot;value of human was greater than land or assets due to higher mortality rate (higher death rate) and lower surplus food production&quot;. The ownership of &quot;illegitimate&quot; child always goes to &quot;powerful men&quot; not the biological father. Women in polygamous relationship finds easier to raise children because it was women responsibility, other wives were quite helpful with each other. It made culture quite matriarchal and less violent.
	</p>
	<p>Attitude of women towards illegitimate relationships,</p>
	<p>Ancient African women said &quot;just like we use bull to inseminate our cows but the calf and the cow doesn't belong to the bull, it belong to us similarly for women they belong to husband not other men&quot;. The powerful man had no objection in all this because women do all work and he need bigger tribe as well to protect and expand his kingdom as well. Land was owned by community as there was no real incentive to keep infertile land so there were no such thing as very rigid caste or class system.</p>
	<p>As women were more dominant at work so it made women really valuable which created the concept of Bride Price where man gives money or asset to the family of woman as token. Women in polygamous marriage were really cooperative with each other so when their king dies due to some reason and they won't find any man worthy of being king then they take responsibility of village on their own, women were really into work and they were powerful so we see female emperors in ancient Africa in decent amount, they are known as Queen mothers.</p>
	<p>Too much openness in culture or &quot;unacknowledged/hidden polyamory&quot; was responsible for too much STDs (Sexually Transmitted Diseases) and higher mortality (death) rate. Women were dominant in agriculture production so they were responsible in production of weaponry also. Men use to fight so they were supposed to create weapons as they understand the complexity of fight better but their withdrawn from leadership and work in the economy made their kingdom more weaker which was already weaker due to it's lower agriculture production capabilities. Women weren't physically strong as men on average which means they were incapable to protect their land, cattle and other assets of village. That's why African people got enslaved by European or any other people who belong to higher population density.</p>
	<p>We can say African people trade &quot;less violent matriarchal society + higher death rate + slavery from outsiders&quot; for &quot;highly violent patriarchal society + lower death rate + slavery from their own community&quot;.</p>
	<p>People's priority was to &quot;stay alive&quot; not the &quot;equality&quot; that's why their society transformed into Patriarchy because physical strength was really more important in agriculture oriented economy.</p>
	<p>It means if we wish to increase women authority at workplace then we need to automate the agriculture but the problem with automation is it's employment generation capacity, if primary (agriculture) sector can produce 100 jobs then secondary (manufacturing) can only produce 40 and tertiary (service) will limit itself to 20. It will be really bad for counties with higher population but really good for countries with lower population.</p>
	<p>Either we need to create more countries which could be really counter productive or we need to unite more countries by understanding their common need/desires and it's origin and create better more energy efficient products (Smart Phone can be treated as one of the example, it can do a lots of things and yet requires less energy) and better resource distribution methodologies (Social media apps AI is capable to make people addicted, people can't get addicted to apps unless they are fulfilling their inner desires or activating dopamine, serotonin etc). We can also see that in music on Spotify 500 songs played 1 billion times but only 0.7 million songs played more than a 1 million times and it goes worst and worse which means people like to hear similar songs, not the different things for most of the times. So, not only needs but desires of humans can't be infinite. In fact they are very skewed because that's how our nervous system is evolved.</p>
	<p>Psychologists like Jean Piaget also mentioned that child need similar things to function properly. Same set of parents, same friends, same bench to sit (nobody teach the kids to sit of same desk, it is their natural proclivity). Some people believe that schools are useless or oppressive but in reality they are designed reasonably well at the fundamental level.</p>
	<p>Human needs and even desires aren't really infinite at all and they are limited by senses and environment which means we can actually design a reasonably functioning resource distribution methodology in future.</p>
	<p>2. Higher population density. </p>
	<p>Land become the most valuable asset in agriculture but in India/China/Europe the food production capacity was quite high or the land was very fertile. There was plenty of surplus food, mortality rate was relatively lower means more children survive. It means the value of humans were lesser than the value of land or asset.</p>
	<p>Higher population density leads to higher communicable diseases and death due to plagues were quite common.</p>
	<p>There were always plenty of people available for work and protection of land or assets was really difficult, surplus food allow them to do more variety of work and a rigid caste/class system emerged out of this social structure. Lower caste men do all the labour and rich caste men manage everything. To protect the land, caste/class system become very rigid and the concept of purity of women become a virtue. People prefer monogamous marriages. Women were considered as burden because they were not the one who produce or hold assets infact most other men were considered as burden or enemy too because they were the threat for higher caste/class men's assets.</p>
	<p>There exists heavy fine to death penalty on &quot;illegitimate&quot; relationships and children born out of these relationship were denied, killed and outcast-ed because they become threat to the assets/land owned by the father. Society used to be Patriarchal in it's structure as core and violent as well.</p>
	<p>There was a concept of &quot;Dowry&quot; because women did nothing other than house hold works, neither they were allowed to and possess no understanding about the world. Women were seen as liability instead of asset unlike Africa.</p>
	<p>In countries like India there was the concept of Sati where female used to kill herself after death of husband.</p>
	<p>British Army Captain Kemp in 1813, describe the incident as following,</p>
	<p>An astrologer predicted that the sick men will die within few weeks. So, family members took him along with her 16 year old healthy wife to river ganges (Ganga). Few men took the sick men and dipped him for some hours into river and then put him into sunlight and repeat that process for next 36 hours till the man died due to lack of food water and constant fluctuation in temperature meanwhile Captain tried to convince the girl, her mother, mother in law and all other family members that it is madness or insanity but no one had any guilt because of their faith on Astrologers and Pundits. Captain waited to see the whole incident, even at last moment almost nobody shed a tear or show any signs of regret for death of son and his sati wife&quot;. He reported this incident to British government but it took people more than a decade to pass it as law. Finally, Sati was banned under Governor Bentinck in 1829. Clearly such practices can't be sustained without society being deeply immersed into superstition.</p>
	<p>Most women conditions were really bad, it doesn't mean that in china or europe things were good, things got improved after French revolution in the Europe, it started improving since scientific revolution but in china things were as bad as India.  Female infanticide, it was not like some new phenomenon which started after the development of technology of ultrasound machines where people do abortion after sex determination, earlier things were more brutal, people leave female infant without care and let her die. Earlier men usually die in wars, plagues and other reasons so it might seems like gender ratio was balanced in the past according to their time but that wasn't the actual reality. Currently, 140 million female are missing in entire world (50 million from India), things are far better after years of Government efforts.</p>
	<p>Women and work in west,</p>
	<p>Most of western countries are rich with lower population, most people are employed in service sector and agriculture is automated and infrastructure is really great which means they don't require a lots of manual labour at work. In mid 30's women bail out of high end career like law because they wish to have a good family life because who wish to do 70-80 hour week job if they already have decent amount of savings and rights given by government. They pick medium to low paying jobs for sustaining themselves, these country have really strict labour laws which protect them from all sorts of exploitation.</p>
	<p>Conditions are reasonably good but the only problem they have is relative inequality and the are trying to achieve &quot;equality of outcome&quot; instead of &quot;equality of opportunities&quot;.</p>
	<p>They are asking wrong question &quot;why men are occupying such position of power not women&quot; instead of asking &quot;why these tiny proportion of men are insane enough to work 80 hours per week because most of them aren't doing some important work like they aren't Einstein solving some mystery for humanity neither they are military officer stuck at some war like situation, western states are reasonably stable. So why exactly?&quot;</p>
	<p>In India, In agriculture oriented economy women can't sustain work for long term due to lack of availability of domestic help, higher crime rates due to inequality and exceptionally poor infrastructure in India. India has really high population and most jobs are very much labour intensive and less financially rewarding because company use employees as machines for their economic benefits instead of spending money on making deals with other companies, especially smaller ones.</p>
	<p>India doesn't have a strong manufacturing or secondary sector which makes people involved in service sector vulnerable or dependent upon the work they get from outside India via Corporate. Due to this, cost of living in Urban area increases much faster than the salary of individual for most people which result into loss of huge amounts in savings along with heavy taxes. It makes lives of most people really uncertain and it is one of the main reason behind craze of government jobs because the number of jobs where people grow exponentially in career are always lower and even lower in India because of lack of self reliance and weaker infrastructure.</p>
	<p>These things can't be improved without government's willingness to spend money on infrastructure and urbanisation, it can't be done by any corporate and it requires lots of wisdom and good intentions of elected government.</p>
        `
    },
    {
        Title: "Evolution of Political Philosophy",
        tags: "#politics #sociology",
        Blog: `
	<p>Niccolo Machiavelli is known as author of books like Prince which is considered as Bible of Mafia, William Shakespeare described him as &ldquo;the murderous Machiavel&rdquo;. &ldquo;Machiavellian Trait&rdquo; which is a key component of &ldquo;Psychopathy&rdquo; is also named after him. His core teaching are &ldquo;Always look moral in front of public and preach them morality but never follow it&rdquo;, &ldquo;Create a persona and let people interact with that, not yourself&rdquo;, &ldquo;the most secure place is not the guarded fort but your good moral image in the heart of people because if people start hating you then you&rsquo;re done&rdquo;, &ldquo;Surround 
        yourself with men who can tell you the truth otherwise you won&rsquo;t be able to understand the reality and make the correct plans&rdquo;, &ldquo;Wars can&rsquo;t be avoided, only postponed&rdquo;. This philosophy usually works when the state&rsquo;s education quality and free speech is really poor and along with lower GDP per capita (it means people are involved into primary/secondary sectors which doesn&rsquo;t require much of intellect on average) because only less educated people can fall in the trap of such ruler. This is one of the reason why most successful Chinese and Indian leaders have &ldquo;Machiavellian Trait&rdquo;.</p>
	<br/>
 	<p> Alexis de Tocqueville is known for his book &ldquo;Democracy in America&rdquo; and explaining psychological consequences of Democracy. After &ldquo;age of enlightenment&rdquo; aka scientific revolution and &ldquo;french revolution&rdquo; we saw explosion of liberal philosophy like JJ Rousseau&rsquo;s which lead to establishment of democracy as a virtue. With rise in democracy, people start becoming more empathetic which is really great, that&rsquo;s why it is considered as best or more human centric system among all the alternatives but too much or miguided empathy can be dangerous because discounting &ldquo;stupidity of indvidual or group or minority&rdquo; in the 
        name of &ldquo;tollerance&rdquo; or &ldquo;minority rights&rdquo; is not good. There are plenty of people who are declared as criminal in other countries but they are living comfortably inside the liberal countries which increase unnecessary tension between states. If Government didn&rsquo;t take proper responsibility to figure out who are genuine and who are criminals then it lead to increase in terror activities and terror funding throughout the globe and sometimes it endup into situations like 9/11 because Government avoid conflicts and responsibility of the present to appear &ldquo;more peaceful&rdquo; in the eyes of public order to win election and ultimately end up 
	loosing all control in future which lead to bombing entire nation as damage control method where hundred of thousands of innocent people die. Another problem he discussed was &ldquo;tyranny of majority&rdquo; where majority segregate minority to a particular geographical location then &ldquo;enemy states take advantage of such situations by radicalising minority and supplying them weapons or it&rsquo;s components&rdquo; which lead to endless gorilla wars and state&rsquo;s destabilization. This problem can&rsquo;t be solved by creating separate states because people will create some new divisions again unless we improve free speech, education standards and scientific temper 
        in the society because forming a big enough group of people with scientific temper who can demand their separate state by risking their lifes within a time frame of election (5-6 years) is very difficult in the age of techonology where poeple can actually saw the DNA difference b/w chimps and human is 2% just by one Google search click.</p>
        <br/>
	<p> Steven B Smith is Professor at Yale and a well known Political Scientist who taught the evolution of political philosophy from Aristotle to Machiavelli to JJ Rousseau to Tocqueville at Yale.</p>

        `
    },
    {
        Title: "Understanding Poverty",
        tags: "#poverty #sociology",
        Blog: `
	<p> Q. Is Poverty really a more complex problem than Modern Physics ?</p>
	<p> A. Actually Yes, it is a question of neuroscience. Neuroscience can't be done without modern physics based brain scanning equipment.</p>
	<p> Q. Why is poverty the main question of any modern state ?</p>
	<p> A. It is because democracy is considered as the highest &quot;virtue&quot;.</p>
	<p> There are two fundamental problems which create the poverty are</p>
	<p> 1. Problem of Perception : We can't even see and understand things properly if we simply rely on 5 senses, Check &quot;monkey business illusion&quot; video I mentioned below. If we can't even see things properly then how can we perceive it and how can we arrive at the correct conclusions and solve conflicts on our own. It means &quot;We can't solve any conflict sustainably without using scientific methods at large scale.&quot; Is white made up of 7 colours sound intuitive ? Obviously Not.</p>
	<p> link : <a href="https://www.youtube.com/watch?v=IGQmdoK_ZfY">monkey business illusion</a> </p>
	<p> To understand more about this please refer, visual perception system in &quot;neuroscience&quot; and Convolution Neural Networks (CNN) in &quot;deep learning models&quot; of AI.</p>
	<p> 2. Problem of Work and Resource distribution :</p>
	<p> We can't simply pluck any fruit, vegetable or hunt any animal and eat it in order to sustain a body in the jungle because some things could be poisonous and possess the capacity to kill us. It means we can't simply rely upon intuitions; we need sophisticated language to communicate the threats. With the development of &quot;human language&quot; we were able to distribute threats more efficiently. We can't simply distribute work or resources to anyone if we really wish to create a system or society where people don't die unnecessarily.</p>
	<p> We need more scientific methods for selection of work and distribution of resources and prohibition on production of goods and services which reduce life expectancy on average.</p>
	<p> So, we can't solve both problems and elevate a large chunk of population without providing &quot;basic scientific education&quot; to everyone and making &quot;scientific methods and research&quot; as virtue.</p>
	<p> What is United Nation doing about this problem of poverty? What UN actually did till now ?</p>
	<p> People might think UN is a &quot;useless organisation&quot; as it can't solve conflicts/war like Russia-Ukraine but they are actually far ahead of the curve, No war did more damage to &quot;basic human rights&quot; than &quot;population explosion&quot; since World war II by adding 1 Billion people every 13 years.</p>
	<p> In 1970's PM Indira Gandhi created a narrative of &quot;Gareebi hatao&quot; (eliminate poverty) and the biggest challenge she had was &quot;population control&quot;. She used various unethical methods like &quot;forced sterilization&quot; and In 1980's Deng Xiaoping did similar things with &quot;one child policy&quot; but both failed miserably.</p>
	<p> Even after their failures we saw huge reduction in fertility rate in past few decades. How did that miracle happened ?</p>
	<p> Miguel Sabido (Mexican Film Producer) developed a psychological method of creating serial dramas that are customised for the needs and circumstances of specific regions, cultures, and audiences, also known as &quot;Sabido Method&quot;. The method suggest that people who aren't educated enough and mostly involved in primary sector of the economy can't consume too much details but they can experience emotions.</p>
	<p> Yeah, I am talking about never ending Indian serial where we see 10 minutes story and rest of the time .. dhoom-ta-na dhoom-ta-na, ..</p>
	<p> These never ending serials create a fictional environment inside public's mind where they lost the sense of reality and normalise the change. Bill Ryerson, M Phil in Biology from Yale University and founder of Population and Media Centre (P.M.C.) played a vital role in implementation across the globe. One big message they always try to &quot;promote&quot; is &quot;family planning&quot;.</p>
	<p> Less kids == More resources per person == Better quality of life</p>
	<p> It turned out to be so effective that it help to reduce global fertility rate from 5 to 2.3 over past 4 decades and help people get out of absolute poverty.</p>
	<p> With rise of Instagram and other social media platforms, it accelerate the process of westernisation which is really good for reduction in fertility rate. All traditional cultures born around &quot;primary sector&quot; where &quot;population control is discouraged&quot; is really bad for poverty elimination but in order to progress materially or uplift a huge population we need to (i) reduce fertility rate, (ii) reduce dependency over primary sector and (iii) encourage scientific thinking.</p> 

        `
    },
    {
        Title: "Poverty Solution with Big Data, AI and Blockchain",
        tags: "#poverty #sociology",
        Blog: `
	<p>Poverty is the main question of any modern state due to democracy.</p>
	<p>It is more complex than modern physics because it is a question of neuroscience which can't be done without modern physics based brain scanning equipment</p>
	<p>Problem of Poverty (Root cause in Biology and Nervous System) :</p>
	<p>P1. We can't eat anything random because some things are poisoness also, we need more scientific methods and tools to understand the food quality and it's production at large scale.</p>
	<p>P2. We can't observe things and make correct conclusions with 5 senses, we need scientific methods and tools to make correct conclusions about environment (physical/social) and solve large scale conflicts.</p>
	<p>Solution of Poverty (With AI, Blockchain):</p>
	<p>S1. a) Reducing fertility rate <a href="https://www.dateze.in">https://www.dateze.in</a> </p>
	<p>S1. b) Reducing primary sector dependency <a href="https://www.workoso.in">https://www.workoso.in</a> </p>
	<p>S2. Encouraging scientific discussions <a href="https://www.rawopinion.in">https://www.rawopinion.in</a> </p>

        `
    },
    {
        Title: "Misleading financial content detection with Generative AI and it’s implication on Equity Research and Climate change",
        tags: "#genai #finance #climatechange #sociology",
        Blog: `
        <p>Equity research is essentially research on a stock to determine whether to buy, sell, or hold it. In the stock market, at a given moment in time &quot;t,&quot; almost 90% of the approximately 6000 listed companies' financials can be misleading. That's why people mostly invest in the top 600 companies because they are larger in size and analyzing them is more beneficial. If mutual fund and other asset under management companies want returns and don't want to lose their money or pay taxes, they hire teams of equity research analysts in large quantities. This ensures they keep investing and don't lose their existing assets and net worth. Examples of equity research firms include Motilal Oswal, Angel One, etc. Outside India, there are firms like JP Morgan, Morgan Stanley, etc.</p>
        <p>Majorly, there are three types of content in equity research:</p>
        <p>(i) Tables: Accounts and Balance Sheets</p>
        <p>(ii) Conversations between analysts and board members</p>
        <p>(iii) Financial statements, news, and articles.</p>
        <p>A significant portion of research overlaps across these types. If we continuously use Generative AI to detect financially misleading content, the need for many analysts would diminish over time. The accuracy would also increase exponentially. This would enable us to compete with major equity research firms, asset under management (AUM) companies, and investment banks on the analysis front. Their main unique selling proposition (USP) lies in their analysts, who prevent them from incurring losses.</p>
        <p>However, there is a problem.</p>
        <p>Creating a Minimum Viable Product (MVP) that is useful is not possible because it requires a substantial amount of data upfront. If we were to analyze only 4-5 companies, their reports are already available in the market, and until we have data for all 6000 companies, we won't develop a USP. Just like any scalable AI startup like ChatGPT, the initial effort is quite high. Obtaining a SEBI license is also necessary, as it is recommended for earning brokerage. If this implementation were to happen, it would significantly impact stock manipulation. This is the reason behind large-scale corruption, political funding, and crony capitalism.</p>
        <p>Financially misleading information not being detected quickly is one of the reasons why we cannot invest in the right companies for the right causes at the right time, leading to all the funds ending up with a few particular big companies. This issue plays a significant role in areas like climate change. When people are unable to invest in the right companies at the right time, it makes inequality worse. Inequality is a natural state, often stemming from the fact that different raw materials are found in particular geolocations. However, when this inequality increases due to funds being directed towards few big companies, it leads to even greater inequality.</p>
        <p>As a result, we have to build skyscrapers to protect assets. To sustain those assets, we need to blindly manufacture many non-essential items. This is why the carbon emissions in urban areas due to consumption are much higher than those from other sources. Anyone living far from nature and in the middle of concrete jungles, meaning big buildings (more than 10 floors), cannot sustain for long without too much luxury, and then, as a result, we have to psychologically make entire society luxury-seeking via misleading marketing, which leads to massive consumption.</p>
        <p>Mainly greenhouse gases responsible for climate change include carbon dioxide and methane.</p>  
        <p>(i) Carbon dioxide (CO2), which accounts for 76% of emissions, mainly occurs due to electricity/heat production, manufacturing of products, and their transportation. As consumption demand increases, CO2 emissions will also rise, not only to produce those consumables but also for their transportation.</p>
        <p>(ii) Methane (CH4), which accounts for 16% of emissions, mainly occurs due to animal husbandry and meat consumption. 50% is directly contributed by the process of fermentation in the stomachs of ruminant animals such as cattle, sheep, and goats, which are almost 80% of the animals consumed by humans for meat. We are producing them artificially to fulfill the ever-increasing need for meat and dairy products, and then we need to slaughter and transport them, which are also responsible for CO2 production.</p>
        <p>With the same Generative AI, we can detect other misleading content as well, which helps us to develop robust tax policies related to &quot;carbon emissions&quot; and redirect funds towards &quot;sustainability&quot;.</p>
        `
    },

]


