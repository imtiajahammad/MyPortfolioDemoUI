import { SingleSmallTextModel, SmallTextListDataModel } from './about';

export class Skill {
    id: number;
    topicName: SingleSmallTextModel; 
    subTopicName: SmallTextListDataModel[];
    percentage: SingleIntegerModel;
}

export class SingleIntegerModel{
Id:number;
RepositorychildId:number;
Data:number;
Description:string;
}
