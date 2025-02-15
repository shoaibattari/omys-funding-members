export default interface Member {
  Sno: string;
  Slug: string;
  Name: string;
  image?:string;
  WhatsaapNumber: string;
  contactNumber: string;
  area: string;
  Town: string;
}

export interface Panel {
  Name: string;
  WhatsaapNumber: string;
  contactNumber: string;
  Image:string;
  Design:string;
}
