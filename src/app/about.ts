export class About {
    id:number;
    FirstName:SingleSmallTextModel;
    MiddleName: SingleSmallTextModel;
    LastName:SingleSmallTextModel;
    phoneNumbers:SmallTextListDataModel[];
    brief:LargeTextListDataModel[];
    languages:SmallTextListDataModel[];
    DOB:SingleDateModel;
    country:SingleSmallTextModel;
    city:SingleSmallTextModel;
    fullAddress:SingleLargeTextModel;
    socialLinks:OnlineLinkDataModel[];
    emails:SmallTextListDataModel[];
}
export class SingleSmallTextModel {
    Id:number;
    RepositorychildId:number;
    Data:string;
    Description:string;
}
export class SmallTextListDataModel{
    Id:number ;
    ParentId:number;
    Data:string;
    Description:string;
}
export class LargeTextListDataModel{
    Id:number
    ParentId:number 
    Data:string;
    Description;string;
}
export class OnlineLinkDataModel{
    Id:number;
    ParentId:number;
    Title:string;
    Link:string;
    IconLink:string;
    Description:string;
}
export class SingleLargeTextModel{
    Id:number;
    RepositorychildId:number;
    Data:string;
    Description:string;
}
export class SingleDateModel{
    Id:number;
    RepositorychildId:number;
    Data:Date;
    Description:string;
}