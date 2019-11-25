import { Injectable } from '@angular/core';
import {
  IUser,
  IPersonalInformation,
  IEducation,
  ICareer,
  IForeignLanguage,
  IExperienceAndResearches,
  ILatestPublishedResearch,
  IPublishedResearches,
  IResearchInterest,
  IScienceProfile,
} from '@ngx/models';

@Injectable({
  providedIn: 'root',
})
export class DefaultDataService {

  constructor() { }

  getUsers(): IUser[] {
    return [{
      id: '2284',
      userName: 'Trần Vũ Khanh',
      school: 'School of Engineering',
      major: 'Mathematic',
      degree: 'Doctor',
      email: 'khanh.tran@ttu.edu.vn',
    }];
  }

  getScienceProfile(): IScienceProfile {
    return {
      personalInformation: this.getPersonalInformation(),
      education: this.getEducation(),
      career: this.getCareer(),
      foreignLanguages: this.getForeignLanguages(),
      experienceAndResearches: this.getExperienceAndResearches(),
    };
  }

  getPersonalInformation(): IPersonalInformation {
    return {
      userID: '2284',
      fullName: 'Trần Vũ Khanh',
      dateOfBirth: 'Sep, 11, 1983',
      degree: 'Doctor',
      gender: 'Male',
      currentPosition: 'Lecturer',
      idCardNumber: '025901008',
      department: 'School of Engineering',
      organization: 'Tan Tao University',
      organizationAddress: 'Tan Tao Univ. Ave., Tan Duc E.City, Duc Hoa',
      province: 'Long An',
      phoneNumber: '0061-48-334634',
      mobileNumber: '0084-0989282522',
      workingEmail: 'khanh.tran@ttu.edu.vn',
      fax: '',
      alternativeEmail: 'vukhanh1109@gmail.com',
      bankAccountNumber: '100001164176',
      bank: 'NH TMCP QUOC DAN',
      bankBranch: 'CN LONG AN',
    };
  }

  getEducation(): IEducation[] {
    return [
      {
        time: 'Jan, 2007 - Feb, 2010',
        university: 'Pandova University',
        major: 'Mathematic',
        degree: 'Doctor',
      },
      {
        time: 'Sep, 2001 - May, 2005',
        university: 'HCMC University of Science',
        major: 'Mathematic',
        degree: 'Bachelor',
      },
    ];
  }

  getCareer(): ICareer[] {
    return [
      {
        time: 'Jan, 2011 - May, 2015',
        organization: 'Tan Tao University',
        address: 'Tan Tao Univ. Ave., Tan Duc E.City, Duc Hoa',
        position: 'Lecturer, Head of Mathematic',
      },
      {
        time: 'March, 2010 - Jan, 2011',
        organization: 'HCMC University of Science',
        address: '227, Nguyen Van Cu St, Ward 4, Distric 5, HCMC',
        position: 'Lecturer',
      },
      {
        time: 'April, 2015 - March, 2019',
        organization: 'University of Wollongong',
        address: 'Narthfields Ave., Wollongong NSW 2522, Australia',
        position: 'Lecturer',
      },
      {
        time: 'April, 2019 - Now',
        organization: 'Tan Tao University',
        address: 'Tan Tao Univ. Ave., Tan Duc E.City, Duc Hoa',
        position: 'Lecturer, Head of Science Research Department',
      },
      {
        time: 'July, 2013 - Jan, 2015',
        organization: 'National University of Singapore',
        address: '21 Lower Kent Ridge Rd., Singapore 119077',
        position: 'Lecturer',
      },
      {
        time: 'Sep, 2005 - Dec, 2006',
        organization: 'VNU-HCM High School for the Gifted',
        address: 'Nguyen Chi Thanh, Distric 10, HCMC',
        position: 'Math Teacher',
      },
    ];
  }

  getForeignLanguages(): IForeignLanguage[] {
    return [
      {
        language: 'English',
        reading: 'D',
        writing: 'D',
        speaking: 'D',
      },
    ];
  }

  getExperienceAndResearches(): IExperienceAndResearches {
    return {
      latestPublishedResearches: this.getLatestPublishedResearches(),
      publishedResearches: this.getPublishedResearches(),
      researchInterests: this.getResearchInterest(),
    };
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  getLatestPublishedResearches(): ILatestPublishedResearch[] {
    return [
      {
        project: 'Một số phương pháp chỉnh hóa cho bài toán không chỉnh',
        sponsor: 'NAFOSTED',
        time: 'Jan, 2011 - Dec, 2012',
        role: 'Researcher',
      },
      {
        project: 'Phương trình đạo hàm riêng trong không gian phức nhiều biến',
        sponsor: 'University of Wollongong',
        time: 'April, 2015 - March, 2016',
        role: 'Principal Investigator',
      },
      {
        project: 'Phương trình đạo hàm riêng trong không gian phức nhiều biến',
        sponsor: 'Australian Research Council',
        time: 'April, 2016 - April 2018',
        role: 'Principal Investigator',
      },
      {
        project: 'Bài toán D-Bar-Neumann',
        sponsor: 'NAFOSTED',
        time: 'March, 2013 - March, 2015',
        role: 'Principal Investigator',
      },
      {
        project: `Các tính chất của nghiệm của một số lớp phương trình đạo hàm riêng phi tuyến
          trong hình học và vật lý`,
        sponsor: 'NAFOSTED',
        time: 'Jun, 2017 - Jun, 2019',
        role: 'Collaborator',
      },
    ];
  }

  getPublishedResearches(): IPublishedResearches {
    return {
      ISIPaper: [
        {
          authors: 'T.V Khanh, A. Raich',
          publishedYear: '2019',
          project: 'The Kohn-Laplace equation on abstract CR manifiolds: global regularity',
          publisher: 'Transactions of the American Mathematical Society',
          issn_isbn: '0002-9947',
          file: 'Available',
          note: `Bài báo đã được nhận đăng trên tạp chí Transactions of the American Mathematical Society.
            Bản tiền ấn phẩm có thể xem file đính kèm`,
        },
        {
          authors: 'T. V. Khanh, J. Liu, P. T. Thuc',
          publishedYear: '2019',
          project: 'Bergman-Toeplitz operators on weakly pseudoconvex domains',
          publisher: 'Mathematische Zeitschrift',
          issn_isbn: '0025-5874',
          file: 'Available',
          note: '',
        },
      ],
      otherInternationalPaper: [
        {
          authors: 'T. V. Khanh',
          publishedYear: '2016',
          project: 'Equivalence of estimates on domain and its boundary',
          publisher: 'Vietnam Journal of Mathematics',
          issn_isbn: '2305-2228',
          file: 'Available',
          note: '',
        },
      ],
      nationalPaper: [],
      conferenceReports: [],
      other: [
        {
          authors: '',
          publishedYear: '2016',
          project: '2016 DECRA award from the Australian Research Council',
          publisher: 'The Australian Research Coucil',
          issn_isbn: '',
          file: 'Available',
          note: 'Award',
        },
        {
          authors: '',
          publishedYear: '2015',
          project: '2016 DECRA award from the Australian Research Council',
          publisher: 'University of Wallongong, Australia',
          issn_isbn: '',
          file: 'Available',
          note: 'Award',
        },
      ],
    };
  }

  getResearchInterest(): IResearchInterest[] {
    return [
        {
          researchInterest: 'Partial Differential Equations',
        },
        {
          researchInterest: 'Complex Analysis',
        },
        {
          researchInterest: 'Inverse Problem',
        },
        {
          researchInterest: 'Financial Mathematics',
        },
        {
          researchInterest: 'Machinelearning and Artificial Intelligence',
        },
      ];

      // [
      //   'Partial Differential Equations',
      //   'Complex Analysis',
      //   'Inverse Problem',
      //   'Financial Mathematics',
      //   'Machinelearning and Artificial Intelligence',
      // ]
  }

}
