

const employees = [
    {
        id: 1,
        firstname: "Ahmad",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare Sales Report",
                desc: "Compile and submit the weekly sales report.",
                date: "2025-05-13",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Client Follow-up",
                desc: "Call the client to follow up on feedback.",
                date: "2025-05-10",
                category: "Communication"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Product Demo",
                desc: "Demonstrate the new feature to potential clients.",
                date: "2025-05-09",
                category: "Sales"
            }
        ],
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 2,
        firstname: "Zoya",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Social Media Post",
                desc: "Design and schedule the post for Instagram.",
                date: "2025-05-13",
                category: "Marketing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Meeting with Vendor",
                desc: "Discuss upcoming promotional campaign.",
                date: "2025-05-12",
                category: "Operations"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Data Cleanup",
                desc: "Organize and clean customer email data.",
                date: "2025-05-08",
                category: "Data Management"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Write Blog Post",
                desc: "Write a blog post about upcoming trends.",
                date: "2025-05-13",
                category: "Content"
            }
        ],
        taskNumber: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 3,
        firstname: "Ishaan",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Presentation",
                desc: "Prepare slides for quarterly meeting.",
                date: "2025-05-13",
                category: "Presentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Backend Code Review",
                desc: "Review API endpoints and suggest improvements.",
                date: "2025-05-11",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Bug Fixing",
                desc: "Fix critical bug in user login flow.",
                date: "2025-05-07",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Prepare Docs",
                desc: "Write documentation for new features.",
                date: "2025-05-13",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Sync with Design",
                desc: "Discuss UX issues with the design team.",
                date: "2025-05-12",
                category: "Design"
            }
        ],
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 1
        }
    },
    {
        id: 4,
        firstname: "Divya",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Customer Support",
                desc: "Reply to open tickets in support system.",
                date: "2025-05-13",
                category: "Support"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Internal Audit",
                desc: "Audit expense reports from last month.",
                date: "2025-05-10",
                category: "Finance"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Policy Review",
                desc: "Review the updated employee handbook.",
                date: "2025-05-09",
                category: "HR"
            }
        ],
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 5,
        firstname: "Vihaan",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Lead Generation",
                desc: "Find and list 20 new leads.",
                date: "2025-05-13",
                category: "Sales"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Email Campaign",
                desc: "Draft email content for June campaign.",
                date: "2025-05-12",
                category: "Marketing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Feedback Survey",
                desc: "Send post-service feedback to customers.",
                date: "2025-05-13",
                category: "Customer Experience"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Update CRM",
                desc: "Log all call activities in the CRM system.",
                date: "2025-05-11",
                category: "CRM"
            }
        ],
        taskNumber: {
            active: 2,
            newTask: 1,
            completed: 2,
            failed: 0
        }
    }
];


const admin = [
    {
        id: 1,
        firstname: "Mahtab",
        email: "admin@example.com",
        password: "123"
    }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}