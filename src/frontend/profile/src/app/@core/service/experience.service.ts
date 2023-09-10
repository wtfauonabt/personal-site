import { Injectable } from '@angular/core';

import { ExperienceItem } from '@core/interface/experience-item';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    experienceList: ExperienceItem[] = [
        {
            position: "IT Consultant",
            company: "RST International (HK) Limited",
            location: "Kwai Hing, Hong Kong / Dong Guan, China",
            start: "Jan 2013",
            end: "Mar 2014",
            logoImgPath: 'assets/img/experience/rst.jpg',
            description: `Setup and management of 50+ Computers for the company’s Hong Kong Office
        and China Factory. Setup and management of file server and SQL server.
        Management of the company’s web and email server. Communicated between
        colleagues to understand ways to optimize their performance through
        technological support.`,
        },
        {
            position: "Diamond Stock Manager",
            company: "in’s Limited",
            location: "Tsim Sha Tsui, Hong Kong",
            start: "Mar 2013",
            end: "Mar 2014",
            logoImgPath: 'assets/img/placeholder.png',
            description: `Familiarised with ERM acounting softwares. Sorting of diamonds of
        different grading. Analysing stock details for organising purchases.
        Presenting clients with our stock list and further communicating in
        understanding their needs.`,
        },
        {
            position: "Customer Relation Specialist",
            company: "Sitel (Johnson & Johnson VC)",
            location: "Onehunga, New Zealand",
            start: "May 2014",
            end: "Oct 2016",
            logoImgPath: 'assets/img/experience/sitel_logo.png',
            description: ` Giving well thought medical advice to complicated enquiries. Working
        with intensive medical policies. Provide excellent customer experiences,
        provide/discuss possible resolutions. Writing professional medical
        documentations. Provide carefully thought information regarding to a 3rd
        class medical device to optometrists and patients. Well-presented
        customer service skill, communication skill, decision-making and
        multi-lingual.`,
            endpoint: "http://www.sitel.com/countries/new-zealand/"
        },
        {
            position: "IT Support, Warehouse Admin, Plumbing Specialist",
            company: "SPK Industries",
            location: "East Tamaki, New Zealand",
            start: "Nov 2016",
            end: "May 2018",
            logoImgPath: 'assets/img/experience/spk_logo.jpg',
            description: `Provide support for company computers, printers and networks. Created,
        update and maintain company website. Design product packaging and
        specification sheets. Take and photoshop product photos. Experienced
        usage of ERP system in daily work (input, check, process, enquire,
        update). Participate within the warehouse when needed (Packing, building
        pallets, stocktake). Building underfloor heating panels.`,
            role: [
                `Create and managing ZenCart and WordPress based websites.`,
                `Acquired experience with programming languages included PHP, MySQL, HTML5, CSS6, JavaScript.`,
                `Email server management and configurations.`,
                `Providing IT support for PC, laptops, printers, and networking.`,
                `Purchase, install and maintain software(Microsoft Office 2007 and 2016, Adobe CS5, AutoCAD 2015)`,
                `LAN IP and port configurations.`,
            ],
            achievement: [
                `Acquired experience in web development and project scope management.Increased problem solving experience using different technological support.`,
                `Managed time efficiently to complete all tasks on hand.`,
                `Completed full warehouse stock - take in 1 month(first stock - take in 10 years).`,
                `Providing efficient communication skills to increase productivity within the warehouse.Fast learning capability leading to opportunities in technical development in plumbing.`,
            ],
            endpoint: "http://www.spk.co.nz",
        },
        {
            position: "Senior Analyst Programmer, Project Manager",
            company: "MyDress Limited",
            location: "Ngau Tau Kok, Hong Kong",
            start: "Jun 2018",
            end: "May 2021",
            logoImgPath: 'assets/img/experience/mydress_logo.png',
            description: `Fashion E-Commerse Website with multiple internal application development and maintenance.`,
            role: [
                `Analyzing non documented code and creating documentations to describe them.`,
                `Ongoing enhancements to existing functions.`,
                `Discussing expectations requirements with user to produce functional specifications.Study options to obtain the most suitable plan for projects.`,
                `Creating and planning operational flow to improve efficiency.`,
                `Communicating with partnering companies in APIs, operation flows and project scope.Provision software and hardware support internally and internationally.`,
            ],
            achievement: [
                `Learning the importance of good documentation.`,
                `Teamwork experience using Version control management systems and Task management.`,
                `Practical hands on commercial experience in full stack programming.`,
                `Acquainting myself with further language experience, including PHP 5.3 & 7.2, MySQL5.6 & 8, multiple versions of NodeJS and Python, HTML5, CSS6, JavaScript.`,
                `Server management experience with Red Hat, Nginx.`,
                `Familiarizing cross platform development, such as Magento, 91App, Google.`,
                `Working with a variety of different API environments unwinding convolution limitations Adopting AWS services for better functional transitions and flexibility.`,
                `Chasing deadlines to keep project on track.`,
            ],
            endpoint: "http://www.mydress.com",
        },
        {
            position: "Tech Lead",
            company: "A Yau B Limited",
            location: "North Point, Hong Kong",
            start: "Jun 2021",
            end: "Current",
            logoImgPath: 'assets/img/experience/ayaub_logo.png',
            description: ``,
            role: [
                `Project management with fully outsourced team.Full Stack development.`,
                `Analyzing and performing business decisions.`,
                `Investment and sales pitching presentations.`,
            ],
            achievement: [
                `Microservice development for better functional management.`,
                `Mobile development experience.`,
                `Serverless architecture planning and implementation.`,
                `Creating and managing complicated multilinking API.`,
                `Acquainting myself with further language experience with NodeJS variations(AngularJS, ReactJS, Flutter)`,
                `Additional experience with architectural technology, including Serverless deployment, OpenSearch(ES variation), various AWS services, Liferay 6.0.`,
            ],
            endpoint: "http://www.ayaub.com",
        },
    ];

    constructor() { }
}
