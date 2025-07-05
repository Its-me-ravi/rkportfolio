const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Ravi Kumar Choudhary",
    description:
      "I am a software and cloud engineer with expertise in Cloud Computing, Linux, and DevOps practices. I have hands-on experience in designing and managing scalable, secure, and highly available cloud infrastructures using AWS and Azure. I enjoy automating workflows, optimizing system performance, and solving complex infrastructure challenges. I am passionate about implementing CI/CD pipelines, managing infrastructure as code, and adhering to industry best practices for secure and efficient deployments.",
    role: "Cloud & DevOps Engineer",
    photo: "../ravi.png",
    email: "ravichoudhary8575@gmail.com",
  },

  // ============ SOCIAL LINKS ============
  socials: {
    twitter: "https://twitter.com/dsbalico",
    github: "https://github.com/dsbalico",
    linkedin: "https://linkedin.com/in/dsbalico",
    instagram: "https://instagram.com/dsbalico",
    facebook: "https://facebook.com/dsbalico",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "AWS Auto Scaling Web App",
      description:
        "This project demonstrates an auto-scaling architecture using AWS EC2, Load Balancer, and CloudWatch. It ensures high availability by automatically adding or removing EC2 instances based on CPU usage.",
      technologies:
        "AWS EC2, Auto Scaling Groups, Load Balancer, CloudWatch, Launch Templates, Ubuntu, Nginx",
      github: "",
      link: "",
    },

    {
      title: "Serverless Image Uploader",
      description:
        "A fully serverless web application that allows users to upload images, which are stored in S3 and processed via Lambda for metadata extraction and resizing.",
      technologies:
        "React, AWS S3, AWS Lambda, API Gateway, DynamoDB, IAM, Node.js",
      github: "",
      link: "",
    },

    {
      title: "CI/CD Pipeline with Jenkins",
      description:
        "A continuous integration and continuous deployment pipeline that automates building, testing, and deploying a web application using Jenkins, Docker, and GitHub.",
      technologies:
        "Jenkins, Docker, GitHub, Shell Scripting, Kubernetes, Node.js",
      github: "",
      link: "",
    },

    {
      title: "Infrastructure as Code with Terraform",
      description:
        "Automate provisioning and managing cloud infrastructure on AWS using Terraform scripts for scalable, repeatable, and version-controlled infrastructure deployments.",
      technologies: "Terraform, AWS (EC2, VPC, S3), Git, Bash",
      github: "",
      link: "",
    },

    {
      title:
        "Scalable Web App Deployment on Azure with CI/CD using Azure DevOps",
      description:
        "A scalable web application deployed on Azure App Service, automated with a CI/CD pipeline using Azure DevOps to enable continuous integration, testing, and seamless deployments with zero downtime.",
      technologies:
        "Azure App Service, Azure DevOps Pipelines, GitHub, Docker, Node.js, React, Azure SQL Database",
      github: "",
      link: "",
    },

    {
      title: "Personal Portfolio Website",
      description:
        "A responsive, modern personal portfolio website showcasing projects, skills, and experience, built with React and deployed on Azure Static Web Apps for fast, secure, and scalable hosting.",
      technologies:
        "React, Azure Static Web Apps, Tailwind CSS, GitHub Actions",
      github: "https://github.com/dsbalico/pcso-lotto-number-generator",
      link: "https://probability-pick.netlify.app/",
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Dr.shyama Prasad Mukherjee University",
      degree: "Bachelor of Science in Information Technologies",
      duration: "2019 - 2022",
      image: "dspmu.jpg",
    },
    {
      school:
        "Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal, Madhya Pradesh, India.",
      degree: "Master Of Computer Application",
      duration: "2022 - 2024",
      image: "mcu.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Full-Stack Developer Intern",
      company: "Quleep Private Limited",
      duration: "Sep 2024 - Jan 2025 (4 Months)",
      image: "quleep.jpg",
      descriptions: [
        "Completed a full-stack development project using React.js, HTML, and CSS for a responsive frontend.",
        "Built and integrated backend APIs using Node.js with AWS Lambda, API Gateway, and DynamoDB.",
        "Deployed application components on AWS EC2 and managed assets through S3 for scalability and performance.",
      ],
    },
    {
      position: "Trained in Cloud Computing & DevOps",
      company: "Besant Technologies Hebbal",
      duration: "Feb 2025 - July 2025 (6 Month)",
      image: "besant.jpg",
      descriptions: [
        "Completed in-depth training in Cloud Computing, DevOps practices, and Linux system administration.",
        "Worked with AWS services such as EC2, S3, IAM, Lambda, API Gateway, DynamoDB, and CloudFormation.",
        "Gained hands-on experience with Azure resources like Virtual Machines, App Services, Azure DevOps, and Storage Accounts.",
        "Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for automated build and deployment.",
        "Used Python for scripting tasks such as automation, server monitoring, and integration with cloud services and APIs.",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Linux Tutorial Course",
      description: "Great Learning Academy",
      icon: "",
      link: "", // Optional: link to a GitHub repo or project if you want
    },
    {
      title: "AWS Cloud Fundamentals",
      description:
        "Self-paced training with hands-on labs using EC2, S3, Lambda, API Gateway, and IAM",
      icon: "aws",
      link: "",
    },
    {
      title: "DevOps Tools and CI/CD Pipeline",
      description:
        "Learned Jenkins, Docker, Kubernetes, and GitHub Actions through projects and guided labs",
      icon: "devops",
      link: "",
    },
    {
      title: "Python Scripting for Automation",
      description:
        "Built automation scripts for cloud and system tasks using Python basics and libraries",
      icon: "python",
      link: "",
    },
    
    {
      title: "Introduction to Cloud Computing Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8",
    },

  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at ravichoudhary8575@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
  },

  // ============ FOOTER ============
  footer: "© 2024 Ravi Kumar Choudhary. All Rights Reserved",
};

export default info;
