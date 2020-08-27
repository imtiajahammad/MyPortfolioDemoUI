import { SingleSmallTextModel,SingleDateModel,LargeTextListDataModel } from './about';

export class Academic {
    id:number;
    institutionName:SingleSmallTextModel;
    location:SingleSmallTextModel;
    courseName:SingleSmallTextModel;
    cgpa:SingleSmallTextModel;
    start:SingleDateModel;
    end:SingleDateModel;
    briefPoint:LargeTextListDataModel[];
}
