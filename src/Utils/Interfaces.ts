export interface SingleEntryResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface ManyEntriesResponse<T> {
  status: string;
  message: string;
  data: T[];
}

export interface DonationOption {
  amount: number;
  description: string;
}

export interface Video {
  url: string;
}

export interface Image {
  url: string;
  title: string;
}

export interface Address {
  addressLine1: string;
  addressLine2: string;
  postcode: string;
  city: string;
  state: string;
  country: Country;
}

export interface Theme {
  id: string;
  name: string;
}

export interface Country {
  name: string;
  countryCode: string;
}

export interface Organization {
  activeProjects: number;
  address: Address;
  ein: string;
  logoUrl: string;
  mission: string;
  name: string;
  provider: string;
  totalProjects: number;
  url: string;
  themes: Array<Theme>;
}

export interface Project {
  active: boolean;
  activities: string;
  additionalDocumentation: string;
  approvedDate: Date;
  country: Country;
  countries: Array<Country>;
  dateOfMostRecentReport: Date;
  donationOptions: Array<DonationOption>;
  funding: number;
  goal: number;
  images: Array<Image>;
  _id: string;
  longTermImpact: string;
  modifiedDate: Date;
  need: string;
  numberOfDonations: number;
  numberOfReports: number;
  organization: Organization;
  progressReportLink: string;
  projectLink: string;
  remaining: number;
  status: string;
  summary: string;
  themes: Array<Theme>;
  title: string;
  type: string;
  videos: Array<Video>;
}
