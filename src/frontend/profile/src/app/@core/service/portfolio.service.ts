import { Injectable } from '@angular/core';
import { PortfolioItem } from '@core/interface/portfolio-item';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    portfolioList: PortfolioItem[] = [
        {
            title: 'First National',
            logoImgPath: 'assets/img/portfolio/339_a2_logo.jpg',
            description: `First National is a university assignment aiming to emulate an
                  online banking website.<br />
                  It has functions such as login, sessions, check transactions,
                  accounts and more. <br />
                  <br />
                  For further information, please feel free to check out the
                  summary report in PDF.`,

            buttonList: [
                {
                    title: 'Summary Report (PDF)',
                    endpoint: 'assets/files/Assignment%202%20Report%20(15316357).pdf',
                },
                {
                    title: 'Demo is currently unavailable',
                    endpoint: '#',
                }
            ],
            skillList: [
                'php',
                'mysql',
                'html',
                'css',
            ],
        },
        {
            title: 'Diet App',
            logoImgPath: 'assets/img/portfolio/333_logo.jpg',
            description: `The Diet App is my university final year project.<br />
                  The application is a hybrid mobile app based on Ionic 2.<br />
                  The project idea was originated from a Health Science PHD
                  student.<br />
                  I was asked to develop an application that would allow cloud
                  storage of patient information and allow recording of
                  patient's diet.<br />
                  <br />
                  For further information, please feel free to check out the
                  summary report in PDF.`,

            buttonList: [
                {
                    title: 'Summary Report (PDF)',
                    endpoint: 'assets/files/159.333%20REPORT%20(15316357).pdf',
                }
            ],
            skillList: [
                'ionic',
                'aws',
            ],
        },
        {
            title: 'RST Company App',
            logoImgPath: 'assets/img/portfolio/rst_logo.jpg',
            description: `This app was my first Android application.<br />
                  The purpose of the application was to allow clients and
                  suppliers to further undertand the company better.<br />
                  A QR code was provided on posters and pamphlets to allow
                  easier access to the link.<br />
                  <br />
                  Please feel free to download the demonstrated APK. *Please
                  note that this is an Android only application.`,

            buttonList: [
                // {
                //     title: 'APK Download',
                //     endpoint: 'https://s3-us-west-2.amazonaws.com/rst-apk/rst.apk',
                // }
                {
                    title: 'Demo is currently unavailable',
                    endpoint: '#',
                }
            ],
            skillList: [
                'android',
                'java',
            ],
        },
        {
            title: 'Moshify App',
            logoImgPath: 'assets/img/portfolio/moshify_logo.jpg',
            description: `An application used to check if there are any legal issues
                  with stocks purchased in China. The mobile app will inform the
                  user if the stocks that were purchased within certain dates
                  can organise a claim towards the company. Further development
                  will include linkage to lawyers that are legally authorized to
                  accept the case.<br />
                  <br />
                  The developmant of the application is currently on hold due to
                  legal issues that need to be resolved in China.<br />
                  <br />
                  Please feel free to download the demonstrated APK. *Please
                  note that this is an Android only application.`,

            buttonList: [
                // {
                //     title: 'APK Download',
                //     endpoint: 'https://s3.ap-northeast-2.amazonaws.com/moshify/moshify_v1.0.4.apk',
                // }
                {
                    title: 'Demo is currently unavailable',
                    endpoint: '#',
                }
            ],
            skillList: [
                'ionic',
                'aws',
            ],
        },
        {
            title: 'SPK Website',
            logoImgPath: 'assets/img/portfolio/spk_logo.jpg',
            description: `A company website that provides specifications and
                  certifications of products availiable.<br />
                  The website is produced based on WordPress.<br />
                  <br />
                  Please feel free to browse the website live.`,

            buttonList: [
                {
                    title: 'Website',
                    endpoint: 'http://www.spk.co.nz',
                }
            ],
            skillList: [
                'php',
                'mysql',
                'html',
                'css',
                'wordpress',
            ],
        },
        {
            title: 'Totara Marketing Online Store',
            logoImgPath: 'assets/img/portfolio/totara_logo.jpg',
            description: `This online store website uses an OpenSource installation of
                  ZenCart.<br />
                  Paypal API is used for payments.<br />
                  <br />
                  Please feel free to browse the website live.`,

            buttonList: [
                {
                    title: 'Website',
                    endpoint: 'https://www.totaramarketing.co.nz',
                }
            ],
            skillList: [
                'php',
                'mysql',
                'html',
                'css',
                'zencart',
            ],
        },
        {
            title: 'Open Your Mouth Solution',
            logoImgPath: 'assets/img/portfolio/oum_logo.png',
            description: `A web application project aiming to provide POSS (Point of
                  Sales Solution) to restaurants.`,

            buttonList: [
                {
                    title: 'Demo is currently unavailable',
                    endpoint: '#',
                }
            ],
            skillList: [
                'php',
                'mysql',
                'html',
                'css',
                'ionic',
                'aws',
            ],
        },
        {
            title: 'MyDress Frontend',
            logoImgPath: 'assets/img/portfolio/mydress_logo.png',
            description: `A Fashion E-Commerse Website with multiple internal application development and maintenance.`,

            buttonList: [
                {
                    title: 'Website',
                    endpoint: 'https://www.mydress.com',
                }
            ],
            skillList: [
                'php',
                'mysql',
                'html',
                'css',
                'magento',
                'aws',
            ],
        },
        {
            title: 'A Yau B',
            logoImgPath: 'assets/img/portfolio/ayaub_logo.png',
            description: `Beauty Platform with Android IOS and website.Console for information control.`,

            buttonList: [
                {
                    title: 'Website',
                    endpoint: 'https://www.ayaub.com',
                }
            ],
            skillList: [
                'mysql',
                'mongodb',
                'opensearch',
                'html',
                'css',
                'nodejs',
                'ionic',
                'aws',
            ],
        }
    ]

    constructor() { }
}
