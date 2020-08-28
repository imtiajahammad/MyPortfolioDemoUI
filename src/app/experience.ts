import { SingleSmallTextModel, SingleLargeTextModel, LargeTextListDataModel, SingleDateModel } from './about';

export class Experience {
    id:number; 
    companyName:SingleSmallTextModel; 
    yourRole:SingleSmallTextModel;
    responsibilityBrief:SingleLargeTextModel;
    responsibilitiesPoints:LargeTextListDataModel[]; 
    accomplishmentsPoints:LargeTextListDataModel[];
    workLocation:SingleSmallTextModel;
    startDate:SingleDateModel;
    endDate:SingleDateModel;
    companyLink:SingleLargeTextModel;
}
